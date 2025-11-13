# Contributing to Crypto Price Tracker

Thank you for your interest in contributing to Crypto Price Tracker! This document provides guidelines for contributing to this project.

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/obsidian-crypto-price-tracker.git
   cd obsidian-crypto-price-tracker
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development**
   ```bash
   npm run dev
   ```
   This will watch for changes and rebuild automatically.

4. **Test in Obsidian**
   - Copy `main.js`, `manifest.json`, and `styles.css` to your test vault:
     ```
     <vault>/.obsidian/plugins/crypto-price-tracker/
     ```
   - Reload Obsidian to test changes

## Code Guidelines

### TypeScript

- Use TypeScript for all code
- Follow existing code style
- Ensure all types are properly defined
- Run `npm run build` to check for type errors

### Code Style

- Use tabs for indentation (following Obsidian's convention)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small

### Plugin Architecture

- Keep `main.ts` focused on plugin lifecycle
- Separate concerns (UI, API calls, data management)
- Use Obsidian's register methods for cleanup
- Follow Obsidian's API best practices

## Testing

### Manual Testing

Before submitting a PR, please test:

1. **Basic functionality**
   - Plugin loads without errors
   - Prices display in status bar
   - Prices update at specified interval
   - Click to refresh works

2. **Settings**
   - All toggle switches work
   - Update interval can be changed
   - Custom cryptocurrencies can be added/removed
   - Settings persist after reload

3. **Error handling**
   - Invalid cryptocurrency symbols
   - Network errors
   - API rate limiting

### Test in Multiple Environments

- Desktop (Windows, macOS, Linux)
- Mobile (if applicable)
- Different Obsidian versions

## Submitting Changes

### Before You Submit

1. **Test thoroughly** - Verify your changes work as expected
2. **Check for errors** - Run `npm run build` successfully
3. **Update documentation** - Update README.md if needed
4. **Follow commit conventions** - Use clear, descriptive commit messages

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, well-documented code
   - Test thoroughly
   - Update documentation

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Provide a clear title and description
   - Reference any related issues
   - Explain what changed and why
   - Include screenshots if UI changed

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add support for EUR pricing
fix: resolve status bar overflow issue
docs: update installation instructions
```

## Feature Requests

Have an idea for a new feature? Great!

1. **Check existing issues** - Someone might have suggested it already
2. **Open a new issue** - Describe the feature and use case
3. **Discuss the approach** - Get feedback before implementing
4. **Submit a PR** - After discussion and agreement

## Bug Reports

Found a bug? Help us fix it!

1. **Search existing issues** - It might already be reported
2. **Open a new issue** with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Obsidian version
   - Plugin version
   - Operating system
   - Console errors (if any)

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information
- Other unprofessional conduct

## Questions?

- **General questions**: Open a GitHub Discussion
- **Bug reports**: Open a GitHub Issue
- **Feature requests**: Open a GitHub Issue with the "enhancement" label

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Recognition

Contributors will be recognized in the README.md file and release notes.

Thank you for contributing to Crypto Price Tracker!

