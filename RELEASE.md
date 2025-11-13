# Release Guide

This document outlines the process for releasing new versions of the Crypto Price Tracker plugin.

## Pre-Release Checklist

### 1. Code Quality
- [ ] All tests pass
- [ ] No TypeScript errors (`npm run build` succeeds)
- [ ] No console errors or warnings
- [ ] Code is well-documented
- [ ] All features work as expected

### 2. Documentation
- [ ] README.md is up to date
- [ ] CHANGELOG.md includes all changes
- [ ] Version number updated in all relevant files
- [ ] Breaking changes documented (if any)
- [ ] Migration guide written (if needed)

### 3. Testing
- [ ] Tested on Windows
- [ ] Tested on macOS
- [ ] Tested on Linux
- [ ] Tested on mobile (if applicable)
- [ ] Tested with latest Obsidian version
- [ ] Tested with minimum supported Obsidian version
- [ ] All existing features still work
- [ ] New features work correctly
- [ ] Settings persist correctly
- [ ] Plugin loads/unloads cleanly

### 4. Files
- [ ] `manifest.json` version updated
- [ ] `versions.json` updated
- [ ] `package.json` version updated
- [ ] `main.js` built successfully
- [ ] `styles.css` is current
- [ ] All required files present

## Version Numbering

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0): Breaking changes
- **MINOR** (0.x.0): New features, backwards compatible
- **PATCH** (0.0.x): Bug fixes, backwards compatible

### Examples
- `1.0.0` → `1.0.1`: Bug fix
- `1.0.0` → `1.1.0`: New feature
- `1.0.0` → `2.0.0`: Breaking change

## Release Process

### 1. Update Version Numbers

Update version in three places:

**manifest.json:**
```json
{
  "version": "1.1.0"
}
```

**package.json:**
```json
{
  "version": "1.1.0"
}
```

**versions.json:**
```json
{
  "1.1.0": "0.15.0"
}
```

Or use the automated script:
```bash
npm version patch  # For 1.0.0 → 1.0.1
npm version minor  # For 1.0.0 → 1.1.0
npm version major  # For 1.0.0 → 2.0.0
```

### 2. Update CHANGELOG.md

Add release notes under a new version heading:

```markdown
## [1.1.0] - 2024-01-15

### Added
- Feature X
- Feature Y

### Fixed
- Bug A
- Bug B

[1.1.0]: https://github.com/itgoyo/obsidian-crypto-price-tracker/releases/tag/1.1.0
```

### 3. Commit Changes

```bash
git add manifest.json package.json versions.json CHANGELOG.md
git commit -m "chore: bump version to 1.1.0"
git push origin master
```

### 4. Build Release Files

```bash
npm run build
```

Verify these files exist and are current:
- `main.js`
- `manifest.json`
- `styles.css`

### 5. Create Git Tag

```bash
git tag 1.1.0
git push origin 1.1.0
```

**Important**: Tag name must match version in `manifest.json` exactly (no "v" prefix).

### 6. Create GitHub Release

The GitHub Action will automatically create a draft release, or create manually:

1. Go to GitHub repository
2. Click "Releases" → "Draft a new release"
3. Choose the tag you just created
4. Set release title to version number (e.g., "1.1.0")
5. Add release notes from CHANGELOG.md
6. Attach these files:
   - `main.js`
   - `manifest.json`
   - `styles.css`
7. Publish release

### 7. Submit to Obsidian Community Plugins (First Release Only)

For the first release, follow [Obsidian's submission guidelines](https://docs.obsidian.md/Plugins/Releasing/Submit+your+plugin):

1. Fork the [obsidian-releases](https://github.com/obsidianmd/obsidian-releases) repository
2. Add your plugin to `community-plugins.json`:
   ```json
   {
     "id": "crypto-price-tracker",
     "name": "Crypto Price Tracker",
     "author": "itgoyo",
     "description": "Real-time cryptocurrency price tracker in status bar",
     "repo": "itgoyo/obsidian-crypto-price-tracker"
   }
   ```
3. Create a Pull Request
4. Wait for review and approval

### 8. Announce Release

After release is published:
- [ ] Update README.md badges (if any)
- [ ] Post to Obsidian Discord (optional)
- [ ] Post to Reddit r/ObsidianMD (optional)
- [ ] Tweet about it (optional)

## Hotfix Process

For urgent bug fixes:

1. Create hotfix branch from master
2. Fix the bug
3. Test thoroughly
4. Follow normal release process with PATCH version bump
5. Merge back to master

## Rolling Back a Release

If a release has critical issues:

1. Delete the GitHub release
2. Delete the git tag locally and remotely:
   ```bash
   git tag -d 1.1.0
   git push origin :refs/tags/1.1.0
   ```
3. Fix the issues
4. Create a new patch release

## Post-Release

- [ ] Verify plugin updates in Obsidian
- [ ] Monitor for bug reports
- [ ] Respond to user feedback
- [ ] Plan next release

## Automated Release (GitHub Actions)

The repository includes a GitHub Action (`.github/workflows/release.yml`) that automatically:
- Builds the plugin
- Creates a draft release
- Attaches required files

To use it:
1. Push a tag
2. GitHub Action runs automatically
3. Edit and publish the draft release

## Common Issues

### Issue: Version mismatch
**Solution**: Ensure version is identical in `manifest.json`, `package.json`, and git tag

### Issue: Build fails
**Solution**: Run `npm run build` locally first to catch errors

### Issue: Plugin doesn't load
**Solution**: Test in clean vault before releasing

### Issue: Missing files in release
**Solution**: Double-check all three files are attached: `main.js`, `manifest.json`, `styles.css`

## Resources

- [Obsidian Plugin Guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines)
- [Obsidian Developer Docs](https://docs.obsidian.md)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

## Support

If you have questions about the release process:
- Check existing GitHub Issues
- Ask in Obsidian Discord #plugin-dev channel
- Open a Discussion on GitHub

