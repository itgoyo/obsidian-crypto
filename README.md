# Crypto Price Tracker for Obsidian

[![GitHub release](https://img.shields.io/github/v/release/itgoyo/obsidian-crypto-price-tracker)](https://github.com/itgoyo/obsidian-crypto-price-tracker/releases)
[![License](https://img.shields.io/github/license/itgoyo/obsidian-crypto-price-tracker)](LICENSE)
[![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?color=7e6ad6&labelColor=34208c&label=Obsidian%20Downloads&query=$['crypto-price-tracker'].downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json&)](obsidian://show-plugin?id=crypto-price-tracker)

A real-time cryptocurrency price tracker plugin for Obsidian that displays crypto prices in the status bar with 24-hour price changes.

> Track Bitcoin, Ethereum, Binance Coin, and any custom cryptocurrency directly in your Obsidian workspace!

## Features

- **Real-time Price Updates**: Automatically fetches and displays cryptocurrency prices from Binance API
- **Multiple Cryptocurrencies**: Support for BTC, ETH, BNB and custom tokens
- **Live Price Changes**: Shows 24-hour price change percentage with color-coded indicators
  - 🟢 Green for price increases
  - 🔴 Red for price decreases
  - ⚪ Gray for no change
- **Customizable Update Interval**: Set your preferred refresh rate (minimum 10 seconds)
- **Status Bar Integration**: Prices are displayed in the Obsidian status bar
- **Click to Refresh**: Click any price to manually refresh all prices
- **Custom Cryptocurrency Support**: Add any cryptocurrency available on Binance
- **Settings Panel**: Live price preview in the settings tab

## Installation

### From Obsidian Community Plugins (Recommended)

1. Open Obsidian Settings
2. Navigate to **Community plugins**
3. Click **Browse** and search for "Crypto Price Tracker"
4. Click **Install**
5. Enable the plugin in your Community plugins list

### Manual Installation

1. Download the latest release from [GitHub Releases](https://github.com/itgoyo/obsidian-crypto-price-tracker/releases)
2. Extract the files to your vault's plugins folder: `<vault>/.obsidian/plugins/crypto-price-tracker/`
3. Reload Obsidian
4. Enable the plugin in Settings → Community plugins

### For Development

```bash
# Clone the repository
git clone https://github.com/itgoyo/obsidian-crypto-price-tracker.git

# Navigate to your vault's plugin folder
cd /path/to/your/vault/.obsidian/plugins/

# Install dependencies
npm install

# Start development build with watch mode
npm run dev

# Or build for production
npm run build
```

## Usage

### Basic Usage

Once installed and enabled, the plugin will automatically display cryptocurrency prices in the status bar at the bottom of your Obsidian window.

### Configuring Displayed Cryptocurrencies

1. Open **Settings → Crypto Price Tracker**
2. Toggle the switches for BTC, ETH, and BNB to show or hide them
3. To add custom cryptocurrencies:
   - Enter the symbol (e.g., SOL, DOGE, XRP)
   - Optionally enter a display name
   - Click **Add**
4. Manage custom cryptocurrencies:
   - Toggle individual cryptos on/off
   - Click **Delete** to remove them

### Adjusting Update Interval

1. Open **Settings → Crypto Price Tracker**
2. Change the "Update interval" value (minimum 10 seconds)
3. The plugin will automatically start using the new interval

### Manual Refresh

- Click on any price in the status bar to refresh all prices immediately
- Or use the **Refresh prices** button in the settings panel

## Settings

| Setting | Description | Default |
|---------|-------------|---------|
| Update interval | Price refresh interval in seconds | 60 |
| Show BTC | Display Bitcoin price | Enabled |
| Show ETH | Display Ethereum price | Enabled |
| Show BNB | Display Binance Coin price | Enabled |
| Custom Cryptocurrencies | Add any token from Binance | None |

## Data Source

This plugin fetches price data from the [Binance API](https://api.binance.com). The following endpoints are used:

- `GET /api/v3/ticker/24hr` - 24-hour price change statistics

**Note**: This plugin requires internet connection to fetch prices. All data is fetched from public APIs and no personal information is collected or transmitted.

## Privacy & Security

- **No data collection**: This plugin does not collect any personal information
- **No tracking**: No analytics or telemetry
- **Public API only**: Uses only public, read-only Binance API endpoints
- **Local storage**: Settings are stored locally in your vault
- **Open source**: All code is available for review on GitHub

## Troubleshooting

### Prices not updating

1. Check your internet connection
2. Verify that the Binance API is accessible in your region
3. Try manual refresh by clicking on any price
4. Check the developer console (Ctrl/Cmd + Shift + I) for error messages

### Custom cryptocurrency not showing

1. Verify the symbol is correct and exists on Binance
2. Ensure the pair `{SYMBOL}USDT` is available on Binance
3. Check that the cryptocurrency is enabled in settings

### Status bar is cluttered

- Disable some cryptocurrencies in settings
- Remove custom cryptocurrencies you don't need
- The status bar items will automatically adjust

## Development

### Project Structure

```
obsidian-crypto-price-tracker/
├── main.ts              # Main plugin code
├── manifest.json        # Plugin metadata
├── package.json         # Node dependencies
├── styles.css           # Plugin styles
├── tsconfig.json        # TypeScript configuration
├── esbuild.config.mjs   # Build configuration
└── versions.json        # Version history
```

### Building

```bash
# Development mode (watch for changes)
npm run dev

# Production build
npm run build
```

### Version Bump

```bash
# Update version in manifest.json and versions.json
npm version patch|minor|major
```

### Code Structure

- **CryptoPlugin**: Main plugin class handling lifecycle and status bar
- **CryptoSettingTab**: Settings UI and configuration
- **fetchPrice()**: Fetches price data from Binance API
- **updateStatusBarItem()**: Updates status bar display with price and colors

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

Future enhancements planned:
- Multiple currency pairs (EUR, GBP, JPY)
- Price alerts and notifications
- Historical price charts
- Portfolio tracking
- Multiple exchange support (Coinbase, Kraken, etc.)
- Command palette integration
- Keyboard shortcuts

See [CHANGELOG.md](CHANGELOG.md) for planned features and release history.

## Support

If you find this plugin useful, consider:

- ⭐ Starring the repository on GitHub
- 🐛 Reporting bugs or suggesting features via [GitHub Issues](https://github.com/itgoyo/obsidian-crypto-price-tracker/issues)
- 💖 Sponsoring on [GitHub Sponsors](https://github.com/sponsors/itgoyo)
- 📢 Sharing with other Obsidian users

## Submission to Community Plugins

This plugin is ready for submission to the Obsidian Community Plugins directory. See [SUBMIT_TO_COMMUNITY.md](SUBMIT_TO_COMMUNITY.md) for detailed submission instructions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**itgoyo**

- GitHub: [@itgoyo](https://github.com/itgoyo)
- Website: [https://github.com/itgoyo](https://github.com/itgoyo)

## Acknowledgments

- Built for [Obsidian](https://obsidian.md)
- Price data provided by [Binance API](https://binance-docs.github.io/apidocs/)
- Inspired by the need to track crypto prices while taking notes

---

**Disclaimer**: This plugin is not affiliated with Binance or Obsidian. Cryptocurrency prices are provided for informational purposes only and should not be considered financial advice. Always do your own research before making investment decisions.
