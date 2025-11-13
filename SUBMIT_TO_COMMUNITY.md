# Submitting to Obsidian Community Plugins

This guide walks you through submitting the Crypto Price Tracker plugin to the official Obsidian Community Plugins directory.

## Prerequisites

Before submitting, ensure:

1. **Plugin is Complete**
   - All features work as expected
   - No known critical bugs
   - Tested on multiple platforms
   - Documentation is complete

2. **Repository Setup**
   - Public GitHub repository
   - Clear README.md
   - Valid LICENSE file (MIT recommended)
   - Professional presentation

3. **Required Files**
   - `main.js` (bundled plugin code)
   - `manifest.json` (plugin metadata)
   - `styles.css` (if you have custom styles)
   - All files in a GitHub release

4. **First Release Created**
   - Tag matches version in manifest.json
   - Release includes main.js, manifest.json, styles.css
   - Release is published (not draft)

## Step-by-Step Submission Process

### Step 1: Prepare Your Repository

1. **Verify Repository Structure**
   ```
   obsidian-crypto-price-tracker/
   ├── main.js              ✓ Required
   ├── manifest.json        ✓ Required
   ├── styles.css           ✓ Required (if you have styles)
   ├── README.md            ✓ Required
   ├── LICENSE              ✓ Required
   └── versions.json        ✓ Required
   ```

2. **Check manifest.json**
   ```json
   {
     "id": "crypto-price-tracker",
     "name": "Crypto Price Tracker",
     "version": "1.0.0",
     "minAppVersion": "0.15.0",
     "description": "Real-time cryptocurrency price tracker in status bar. Support BTC, ETH, BNB and custom tokens with 24h price changes.",
     "author": "itgoyo",
     "authorUrl": "https://github.com/itgoyo",
     "fundingUrl": "https://github.com/sponsors/itgoyo",
     "isDesktopOnly": false
   }
   ```

   Verify:
   - `id` is unique and URL-friendly
   - `name` is clear and searchable
   - `description` is concise (under 250 characters)
   - `minAppVersion` is accurate
   - `authorUrl` points to your profile
   - `isDesktopOnly` is set correctly

3. **Create First Release**
   ```bash
   # Build the plugin
   npm run build
   
   # Create and push tag (must match manifest version)
   git tag 1.0.0
   git push origin 1.0.0
   ```

4. **Create GitHub Release**
   - Go to your repository
   - Click "Releases" → "Create a new release"
   - Select tag `1.0.0`
   - Set title: `1.0.0`
   - Add release notes from CHANGELOG.md
   - Attach files: `main.js`, `manifest.json`, `styles.css`
   - Publish release (not draft!)

### Step 2: Fork obsidian-releases Repository

1. Go to https://github.com/obsidianmd/obsidian-releases
2. Click "Fork" in the top-right corner
3. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/obsidian-releases.git
   cd obsidian-releases
   ```

### Step 3: Add Your Plugin

1. **Edit community-plugins.json**

   Open `community-plugins.json` and add your plugin entry in alphabetical order:

   ```json
   {
     "id": "crypto-price-tracker",
     "name": "Crypto Price Tracker",
     "author": "itgoyo",
     "description": "Real-time cryptocurrency price tracker in status bar. Support BTC, ETH, BNB and custom tokens with 24h price changes.",
     "repo": "itgoyo/obsidian-crypto-price-tracker"
   }
   ```

   **Important Notes:**
   - Keep entries in alphabetical order by `id`
   - `id` must match your manifest.json
   - `repo` format: `username/repository-name` (no https://)
   - `description` must be under 250 characters
   - No trailing commas in JSON

2. **Validate Your Changes**

   The repository includes validation scripts. Run them if available:
   ```bash
   # If there's a validation script
   npm install
   npm test
   ```

3. **Commit Your Changes**
   ```bash
   git add community-plugins.json
   git commit -m "Add Crypto Price Tracker plugin"
   git push origin master
   ```

### Step 4: Create Pull Request

1. **Go to Original Repository**
   - Visit https://github.com/obsidianmd/obsidian-releases
   - Click "Pull requests" → "New pull request"
   - Click "compare across forks"
   - Select your fork as the head repository

2. **Fill Out PR Template**

   Title:
   ```
   Add Crypto Price Tracker
   ```

   Description:
   ```markdown
   ## Plugin Information
   - **Name**: Crypto Price Tracker
   - **ID**: crypto-price-tracker
   - **Author**: itgoyo
   - **Repository**: https://github.com/itgoyo/obsidian-crypto-price-tracker
   - **First Release**: 1.0.0
   
   ## Description
   Real-time cryptocurrency price tracker that displays BTC, ETH, BNB and custom tokens in the status bar with 24-hour price changes.
   
   ## Checklist
   - [x] Plugin ID is unique
   - [x] manifest.json is valid
   - [x] First release (1.0.0) is published
   - [x] Release includes main.js, manifest.json, styles.css
   - [x] README.md is complete
   - [x] Plugin follows Obsidian guidelines
   - [x] No network requests without user consent
   - [x] No telemetry or tracking
   
   ## Additional Notes
   - Fetches data from public Binance API
   - No personal data collected
   - Works on desktop and mobile
   - MIT licensed
   ```

3. **Submit Pull Request**
   - Review your changes one more time
   - Click "Create pull request"

### Step 5: Wait for Review

1. **Review Process**
   - Obsidian team reviews submissions manually
   - May take several days to weeks
   - Be patient and responsive

2. **Common Review Comments**
   - Manifest.json validation errors
   - Missing or incorrect release files
   - Description too long
   - ID conflicts with existing plugins
   - Code quality concerns
   - Security issues

3. **Responding to Feedback**
   - Address all reviewer comments
   - Update your plugin repository as needed
   - Create new releases if required
   - Update the PR with changes

### Step 6: After Approval

Once your PR is merged:

1. **Plugin Goes Live**
   - Appears in Obsidian's Community Plugins browser
   - Users can discover and install it
   - Updates automatically detected

2. **Maintenance**
   - Respond to issues on GitHub
   - Release updates as needed
   - Keep documentation current

## Validation Checklist

Use this checklist before submitting:

### Repository
- [ ] Repository is public on GitHub
- [ ] Has a clear README.md
- [ ] Has a LICENSE file (MIT recommended)
- [ ] Code is clean and well-organized
- [ ] No sensitive data in code

### Manifest
- [ ] `id` is unique and matches everywhere
- [ ] `name` is clear and professional
- [ ] `version` follows semantic versioning
- [ ] `minAppVersion` is correct
- [ ] `description` is under 250 characters
- [ ] `author` is set
- [ ] `authorUrl` is valid
- [ ] `isDesktopOnly` is correct

### Release
- [ ] Release tag matches manifest version exactly
- [ ] Release is published (not draft)
- [ ] Includes `main.js`
- [ ] Includes `manifest.json`
- [ ] Includes `styles.css` (if applicable)
- [ ] Release notes are clear

### Code Quality
- [ ] Plugin loads without errors
- [ ] No console warnings
- [ ] Proper error handling
- [ ] Clean unload (no memory leaks)
- [ ] Follows Obsidian API best practices

### Compliance
- [ ] No hidden telemetry
- [ ] Network requests disclosed
- [ ] No remote code execution
- [ ] Respects user privacy
- [ ] Follows Obsidian Developer Policies

### Documentation
- [ ] README explains what plugin does
- [ ] Installation instructions
- [ ] Usage examples
- [ ] Settings documented
- [ ] Known issues listed (if any)

## Common Rejection Reasons

### 1. Invalid manifest.json
**Issue**: Malformed JSON, missing required fields, wrong version format
**Fix**: Validate JSON, check all required fields

### 2. Missing Release Files
**Issue**: GitHub release doesn't include main.js or manifest.json
**Fix**: Re-create release with all required files

### 3. Version Mismatch
**Issue**: Git tag doesn't match manifest version
**Fix**: Delete tag, fix version, create matching tag

### 4. ID Conflict
**Issue**: Plugin ID already used by another plugin
**Fix**: Change ID everywhere (manifest, code, release)

### 5. Description Too Long
**Issue**: Description exceeds 250 characters
**Fix**: Shorten description in manifest and PR

### 6. Security Concerns
**Issue**: Plugin makes network requests without disclosure
**Fix**: Document all network activity in README

### 7. Code Quality
**Issue**: Critical bugs, memory leaks, or poor practices
**Fix**: Refactor code, fix bugs, test thoroughly

## After Submission

### Updating Your Plugin

For future updates:
1. Make changes in your repository
2. Update version in manifest.json and versions.json
3. Create new release with matching tag
4. Obsidian automatically detects new releases
5. Users get update notifications

**No new PR needed for updates!**

### Marketing Your Plugin

After approval:
- Share on Reddit ([r/ObsidianMD](https://reddit.com/r/ObsidianMD))
- Post in [Obsidian Discord](https://discord.gg/obsidianmd)
- Tweet with #ObsidianMD hashtag
- Write a blog post
- Create demo video

## Resources

### Official Documentation
- [Plugin Guidelines](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines)
- [Submit Your Plugin](https://docs.obsidian.md/Plugins/Releasing/Submit+your+plugin)
- [Developer Policies](https://docs.obsidian.md/Developer+policies)

### Community
- [Obsidian Discord](https://discord.gg/obsidianmd) - #plugin-dev channel
- [Obsidian Forum](https://forum.obsidian.md)
- [GitHub Discussions](https://github.com/obsidianmd/obsidian-releases/discussions)

### Tools
- [JSON Validator](https://jsonlint.com/)
- [Manifest Validator](https://github.com/obsidianmd/obsidian-releases/blob/master/.github/workflows/validate-plugin-entry.yml)

## Getting Help

If you need help with submission:

1. **Read the docs**: Most answers are in official documentation
2. **Search existing issues**: Someone may have had the same problem
3. **Ask in Discord**: #plugin-dev channel is very helpful
4. **Check sample plugin**: https://github.com/obsidianmd/obsidian-sample-plugin

## Timeline Expectations

- **PR Creation**: Immediate
- **Initial Review**: 1-7 days
- **Follow-up Reviews**: 1-3 days per response
- **Approval & Merge**: 1-4 weeks total (typical)

Be patient! The Obsidian team reviews many plugins and prioritizes quality.

## Success!

Once your plugin is approved and merged:
- **Congratulations!** You're an Obsidian plugin developer
- Your plugin helps thousands of users
- You're contributing to the Obsidian ecosystem

Keep maintaining your plugin, respond to issues, and enjoy seeing others use your creation!

---

**Good luck with your submission!**

