import { App, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface CryptoSettings {
	updateInterval: number;
	enableBTC: boolean;
	enableETH: boolean;
	enableBNB: boolean;
	customCryptos: CustomCrypto[];
}

interface CustomCrypto {
	symbol: string;
	displayName: string;
	enabled: boolean;
}

interface PriceData {
	symbol: string;
	price: number;
	priceChange: number;
	priceChangePercent: number;
}

const DEFAULT_SETTINGS: CryptoSettings = {
	updateInterval: 60,
	enableBTC: true,
	enableETH: true,
	enableBNB: true,
	customCryptos: []
}

export default class CryptoPlugin extends Plugin {
	settings: CryptoSettings;
	statusBarItems: Map<string, HTMLElement> = new Map();
	priceCache: Map<string, PriceData> = new Map();
	private updateInterval: number | null = null;

	async onload() {
		console.log('Loading Crypto Price Plugin');
		
		await this.loadSettings();
		
		// Initialize status bar items
		this.initializeStatusBar();
		
		// Update prices immediately
		await this.updatePrices();
		
		// Start auto-update
		this.startAutoUpdate();
		
		// Add settings tab
		this.addSettingTab(new CryptoSettingTab(this.app, this));
		
		console.log('Crypto Price Plugin loaded');
	}

	onunload() {
		console.log('Unloading Crypto Price Plugin');
		if (this.updateInterval) {
			window.clearInterval(this.updateInterval);
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
		// Reinitialize status bar items when settings change
		this.clearStatusBar();
		this.initializeStatusBar();
		this.startAutoUpdate();
	}

	initializeStatusBar() {
		const symbols: string[] = [];
		
		if (this.settings.enableBTC) symbols.push('BTC');
		if (this.settings.enableETH) symbols.push('ETH');
		if (this.settings.enableBNB) symbols.push('BNB');
		
		for (const crypto of this.settings.customCryptos) {
			if (crypto.enabled) {
				symbols.push(crypto.symbol);
			}
		}
		
		for (const symbol of symbols) {
			const statusBarItem = this.addStatusBarItem();
			statusBarItem.setText(`${symbol}: Loading...`);
			statusBarItem.addClass('crypto-status-item');
			statusBarItem.title = `Click to refresh ${symbol} price`;
			
			statusBarItem.addEventListener('click', () => {
				this.updatePrices();
			});
			
			this.statusBarItems.set(symbol, statusBarItem);
		}
	}

	clearStatusBar() {
		this.statusBarItems.forEach(item => item.remove());
		this.statusBarItems.clear();
	}

	startAutoUpdate() {
		if (this.updateInterval) {
			window.clearInterval(this.updateInterval);
		}
		
		this.updateInterval = window.setInterval(() => {
			this.updatePrices();
		}, this.settings.updateInterval * 1000);
	}

	async fetchPrice(symbol: string): Promise<PriceData | null> {
		try {
			const pair = `${symbol}USDT`;
			const response = await fetch(
				`https://api.binance.com/api/v3/ticker/24hr?symbol=${pair}`
			);
			
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			
			const data = await response.json();
			
			return {
				symbol,
				price: parseFloat(data.lastPrice),
				priceChange: parseFloat(data.priceChange),
				priceChangePercent: parseFloat(data.priceChangePercent)
			};
		} catch (error) {
			console.error(`Failed to fetch ${symbol} price:`, error);
			return null;
		}
	}

	async updatePrices() {
		const symbols: string[] = [];
		
		if (this.settings.enableBTC) symbols.push('BTC');
		if (this.settings.enableETH) symbols.push('ETH');
		if (this.settings.enableBNB) symbols.push('BNB');
		
		for (const crypto of this.settings.customCryptos) {
			if (crypto.enabled) {
				symbols.push(crypto.symbol);
			}
		}
		
		for (const symbol of symbols) {
			const priceData = await this.fetchPrice(symbol);
			if (priceData) {
				this.priceCache.set(symbol, priceData);
				this.updateStatusBarItem(symbol, priceData);
			}
		}
	}

	updateStatusBarItem(symbol: string, data: PriceData) {
		const statusBarItem = this.statusBarItems.get(symbol);
		if (!statusBarItem) return;
		
		const formattedPrice = this.formatPrice(data.price);
		const arrow = data.priceChangePercent > 0 ? '↑' : 
		              data.priceChangePercent < 0 ? '↓' : '→';
		const colorClass = data.priceChangePercent > 0 ? 'crypto-up' : 
		                   data.priceChangePercent < 0 ? 'crypto-down' : 'crypto-neutral';
		
		statusBarItem.setText(`${symbol} ${formattedPrice}`);
		statusBarItem.title = `${symbol}/USDT\nPrice: $${formattedPrice}\n24h Change: ${data.priceChangePercent.toFixed(2)}%`;
		
		// Update color class
		statusBarItem.removeClass('crypto-up', 'crypto-down', 'crypto-neutral');
		statusBarItem.addClass(colorClass);
		
		// Add arrow indicator
		const existingArrow = statusBarItem.querySelector('.crypto-arrow');
		if (existingArrow) {
			existingArrow.remove();
		}
		
		const arrowSpan = statusBarItem.createSpan({ cls: 'crypto-arrow' });
		arrowSpan.setText(` ${arrow}`);
		statusBarItem.appendChild(arrowSpan);
	}

	formatPrice(price: number): string {
		if (price >= 1000) {
			return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
		} else if (price >= 1) {
			return price.toFixed(4);
		} else {
			return price.toFixed(8);
		}
	}
}

class CryptoSettingTab extends PluginSettingTab {
	plugin: CryptoPlugin;

	constructor(app: App, plugin: CryptoPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		
		containerEl.empty();
		
		containerEl.createEl('h2', { text: 'Crypto Price Tracker Settings' });
		
		// Update interval setting
		new Setting(containerEl)
			.setName('Update interval')
			.setDesc('Price update interval in seconds (minimum 10)')
			.addText((text) => text
				.setPlaceholder('60')
				.setValue(String(this.plugin.settings.updateInterval))
				.onChange(async (value: string) => {
					const interval = parseInt(value);
					if (!isNaN(interval) && interval >= 10) {
						this.plugin.settings.updateInterval = interval;
						await this.plugin.saveSettings();
					}
				}));
		
		// BTC toggle
		new Setting(containerEl)
			.setName('Show BTC')
			.setDesc('Display Bitcoin price in status bar')
			.addToggle((toggle) => toggle
				.setValue(this.plugin.settings.enableBTC)
				.onChange(async (value: boolean) => {
					this.plugin.settings.enableBTC = value;
					await this.plugin.saveSettings();
				}));
		
		// ETH toggle
		new Setting(containerEl)
			.setName('Show ETH')
			.setDesc('Display Ethereum price in status bar')
			.addToggle((toggle) => toggle
				.setValue(this.plugin.settings.enableETH)
				.onChange(async (value: boolean) => {
					this.plugin.settings.enableETH = value;
					await this.plugin.saveSettings();
				}));
		
		// BNB toggle
		new Setting(containerEl)
			.setName('Show BNB')
			.setDesc('Display Binance Coin price in status bar')
			.addToggle((toggle) => toggle
				.setValue(this.plugin.settings.enableBNB)
				.onChange(async (value: boolean) => {
					this.plugin.settings.enableBNB = value;
					await this.plugin.saveSettings();
				}));
		
		// Manual refresh button
		new Setting(containerEl)
			.setName('Manual refresh')
			.setDesc('Update all prices immediately')
			.addButton((button) => button
				.setButtonText('Refresh prices')
				.onClick(async () => {
					await this.plugin.updatePrices();
				}));
		
		// Custom cryptos section
		containerEl.createEl('hr');
		containerEl.createEl('h3', { text: 'Custom Cryptocurrencies' });
		
		let newSymbol = '';
		let newDisplayName = '';
		
		const addCryptoContainer = containerEl.createDiv({ cls: 'crypto-add-container' });
		
		new Setting(addCryptoContainer)
			.setName('Add new cryptocurrency')
			.setDesc('Enter crypto symbol (e.g., SOL, DOGE, XRP)')
			.addText((text) => text
				.setPlaceholder('Symbol (e.g., SOL)')
				.onChange((value: string) => {
					newSymbol = value.trim().toUpperCase();
				}))
			.addText((text) => text
				.setPlaceholder('Display name (optional)')
				.onChange((value: string) => {
					newDisplayName = value.trim();
				}))
			.addButton((button) => button
				.setButtonText('Add')
				.setCta()
				.onClick(async () => {
					if (newSymbol) {
						const exists = this.plugin.settings.customCryptos.some(
							c => c.symbol === newSymbol
						);
						
						if (exists) {
							return;
						}
						
						this.plugin.settings.customCryptos.push({
							symbol: newSymbol,
							displayName: newDisplayName || newSymbol,
							enabled: true
						});
						
						await this.plugin.saveSettings();
						this.display();
					}
				}));
		
		// Display existing custom cryptos
		if (this.plugin.settings.customCryptos.length > 0) {
			containerEl.createEl('h4', { text: 'Added cryptocurrencies' });
			
			const cryptoListContainer = containerEl.createDiv({ cls: 'crypto-list-container' });
			
			for (let i = 0; i < this.plugin.settings.customCryptos.length; i++) {
				const crypto = this.plugin.settings.customCryptos[i];
				
				new Setting(cryptoListContainer)
					.setName(crypto.displayName)
					.setDesc(`${crypto.symbol}/USDT`)
					.addToggle((toggle) => toggle
						.setValue(crypto.enabled)
						.onChange(async (value: boolean) => {
							crypto.enabled = value;
							await this.plugin.saveSettings();
						}))
					.addButton((button) => button
						.setButtonText('Delete')
						.setWarning()
						.onClick(async () => {
							this.plugin.settings.customCryptos.splice(i, 1);
							await this.plugin.saveSettings();
							this.display();
						}));
			}
		}
		
		// Current prices section
		containerEl.createEl('hr');
		const priceInfo = containerEl.createDiv({ cls: 'crypto-price-info' });
		priceInfo.createEl('h3', { text: 'Current Prices' });
		
		const updatePriceDisplay = () => {
			priceInfo.empty();
			priceInfo.createEl('h3', { text: 'Current Prices' });
			
			const allSymbols: { symbol: string; name: string }[] = [];
			
			if (this.plugin.settings.enableBTC) allSymbols.push({ symbol: 'BTC', name: 'Bitcoin' });
			if (this.plugin.settings.enableETH) allSymbols.push({ symbol: 'ETH', name: 'Ethereum' });
			if (this.plugin.settings.enableBNB) allSymbols.push({ symbol: 'BNB', name: 'Binance Coin' });
			
			for (const crypto of this.plugin.settings.customCryptos) {
				if (crypto.enabled) {
					allSymbols.push({ symbol: crypto.symbol, name: crypto.displayName });
				}
			}
			
			for (const { symbol, name } of allSymbols) {
				const data = this.plugin.priceCache.get(symbol);
				if (data) {
					const item = priceInfo.createDiv({ cls: 'crypto-price-item' });
					const arrow = data.priceChangePercent > 0 ? '↑' : 
					              data.priceChangePercent < 0 ? '↓' : '→';
					const color = data.priceChangePercent > 0 ? 'green' : 
					              data.priceChangePercent < 0 ? 'red' : 'gray';
					
					item.innerHTML = `
						<strong>${name} (${symbol}/USDT):</strong> 
						$${this.plugin.formatPrice(data.price)} 
						<span style="color: ${color}">
							${arrow} ${data.priceChangePercent.toFixed(2)}%
						</span>
					`;
				}
			}
		};
		
		updatePriceDisplay();
		
		// Auto-refresh price display in settings
		const refreshInterval = window.setInterval(updatePriceDisplay, 1000);
		
		// Clean up interval when settings tab is closed
		this.containerEl.addEventListener('unload', () => {
			window.clearInterval(refreshInterval);
		});
	}
}
