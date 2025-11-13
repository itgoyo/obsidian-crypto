# Changelog

All notable changes to the Crypto Price Tracker plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-01-XX

### Added
- Real-time cryptocurrency price tracking in status bar
- Support for Bitcoin (BTC), Ethereum (ETH), and Binance Coin (BNB)
- 24-hour price change percentage with color indicators
- Customizable update interval (minimum 10 seconds)
- Support for adding custom cryptocurrencies from Binance
- Click to manually refresh prices
- Settings panel with live price preview
- Toggle individual cryptocurrencies on/off
- Color-coded price changes (green for up, red for down)
- Arrow indicators for price direction

### Features
- Fetches data from Binance API
- Automatic price updates at specified interval
- Persistent settings storage
- Mobile-friendly (no desktop-only dependencies)
- Clean and modern UI design
- Low performance overhead

### Technical
- Built with TypeScript
- Uses esbuild for fast compilation
- Follows Obsidian plugin best practices
- Proper cleanup on plugin unload
- Type-safe implementation

---

## Future Plans

### Planned Features
- [ ] Multiple currency pairs (EUR, GBP, etc.)
- [ ] Price alerts/notifications
- [ ] Historical price charts
- [ ] Portfolio tracking
- [ ] Multiple exchange support
- [ ] Export price data
- [ ] Keyboard shortcuts
- [ ] Command palette integration
- [ ] More detailed price information (volume, market cap)
- [ ] Customizable display format

### Under Consideration
- [ ] Desktop notifications for price changes
- [ ] Integration with note templates
- [ ] Price history logging
- [ ] Custom API endpoint support
- [ ] Watchlist management

---

## Release Notes Format

Each release will follow this format:

```markdown
## [Version] - YYYY-MM-DD

### Added
- New features

### Changed
- Changes to existing features

### Deprecated
- Soon-to-be removed features

### Removed
- Removed features

### Fixed
- Bug fixes

### Security
- Security improvements
```

---

**Note**: Dates are in ISO 8601 format (YYYY-MM-DD)

[1.0.0]: https://github.com/itgoyo/obsidian-crypto-price-tracker/releases/tag/1.0.0

