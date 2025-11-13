# 快速开始指南

本指南帮助你快速测试和发布加密货币价格跟踪插件。

## 📋 前置检查

在开始之前，确保：
- ✅ Node.js 已安装（推荐 18+）
- ✅ npm 已安装
- ✅ Git 已安装
- ✅ 有 GitHub 账号
- ✅ Obsidian 已安装

## 🚀 5分钟快速测试

### 步骤 1: 构建插件

```bash
cd /Users/itgoyo/Documents/code/obsidian-crypto
npm run build
```

### 步骤 2: 复制到测试 vault

```bash
# 创建插件目录
mkdir -p "<你的vault路径>/.obsidian/plugins/crypto-price-tracker"

# 复制文件
cp main.js manifest.json styles.css "<你的vault路径>/.obsidian/plugins/crypto-price-tracker/"
```

例如：
```bash
mkdir -p "/Users/itgoyo/Documents/MyVault/.obsidian/plugins/crypto-price-tracker"
cp main.js manifest.json styles.css "/Users/itgoyo/Documents/MyVault/.obsidian/plugins/crypto-price-tracker/"
```

### 步骤 3: 在 Obsidian 中启用

1. 打开 Obsidian
2. 设置 → 社区插件
3. 关闭安全模式（如果需要）
4. 点击"刷新"按钮
5. 找到并启用 "Crypto Price Tracker"

### 步骤 4: 验证功能

查看底部状态栏，应该看到：
```
BTC $XX,XXX.XX ↑  ETH $X,XXX.XX ↑  BNB $XXX.XX ↓
```

## 🧪 完整测试清单

### 基础功能
- [ ] 插件加载无错误
- [ ] 状态栏显示价格
- [ ] 价格每 60 秒自动更新
- [ ] 点击价格可手动刷新
- [ ] 颜色正确（上涨绿色，下跌红色）
- [ ] 箭头指示正确（↑ 上涨，↓ 下跌）

### 设置面板
- [ ] 打开设置 → Crypto Price Tracker
- [ ] 修改更新间隔（测试 30 秒）
- [ ] 关闭 BTC，验证状态栏移除
- [ ] 开启 BTC，验证状态栏添加
- [ ] 测试 ETH 和 BNB 开关
- [ ] 手动刷新按钮工作

### 自定义币种
- [ ] 添加自定义币种（如 SOL）
- [ ] 验证显示在状态栏
- [ ] 测试启用/禁用切换
- [ ] 删除自定义币种
- [ ] 验证从状态栏移除

### 错误处理
- [ ] 断开网络，验证优雅降级
- [ ] 输入无效币种，检查错误处理
- [ ] 刷新 Obsidian，设置保持

### 开发者控制台
打开控制台（Cmd/Ctrl + Shift + I）：
- [ ] 无错误信息
- [ ] 无警告信息
- [ ] 查看加载日志

## 📦 发布到 GitHub

### 步骤 1: 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名：`obsidian-crypto-price-tracker`
3. 描述：`Real-time cryptocurrency price tracker for Obsidian`
4. 公开仓库
5. 不要初始化 README（我们已有）
6. 创建仓库

### 步骤 2: 推送代码

```bash
cd /Users/itgoyo/Documents/code/obsidian-crypto

# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 首次提交
git commit -m "feat: initial release of crypto price tracker plugin"

# 设置主分支
git branch -M master

# 添加远程仓库
git remote add origin https://github.com/itgoyo/obsidian-crypto-price-tracker.git

# 推送代码
git push -u origin master
```

### 步骤 3: 创建第一个发布

```bash
# 确保构建是最新的
npm run build

# 创建标签
git tag 1.0.0

# 推送标签
git push origin 1.0.0
```

### 步骤 4: 创建 GitHub Release

1. 访问 `https://github.com/itgoyo/obsidian-crypto-price-tracker/releases`
2. 点击 "Draft a new release"
3. 选择标签：`1.0.0`
4. Release title: `1.0.0`
5. 描述（从 CHANGELOG.md 复制）：

```markdown
## Features

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

## Installation

Install from Obsidian Community Plugins (pending approval) or manually install by downloading the release files.

## First Release

This is the initial stable release of the Crypto Price Tracker plugin.
```

6. 上传文件（拖拽到底部）：
   - `main.js`
   - `manifest.json`
   - `styles.css`

7. 点击 "Publish release"（不要选 "Set as a pre-release"）

## 🏪 提交到社区商店

### 快速版本

```bash
# 1. Fork 官方仓库
# 访问 https://github.com/obsidianmd/obsidian-releases
# 点击右上角 Fork 按钮

# 2. 克隆你的 fork
git clone https://github.com/itgoyo/obsidian-releases.git
cd obsidian-releases

# 3. 编辑 community-plugins.json
# 在文件中按字母顺序添加：
```

在 `community-plugins.json` 中添加（保持字母顺序）：

```json
{
  "id": "crypto-price-tracker",
  "name": "Crypto Price Tracker",
  "author": "itgoyo",
  "description": "Real-time cryptocurrency price tracker in status bar. Support BTC, ETH, BNB and custom tokens with 24h price changes.",
  "repo": "itgoyo/obsidian-crypto-price-tracker"
}
```

```bash
# 4. 提交更改
git add community-plugins.json
git commit -m "Add Crypto Price Tracker plugin"
git push origin master

# 5. 创建 Pull Request
# 访问 https://github.com/obsidianmd/obsidian-releases
# 点击 "Pull requests" → "New pull request" → "compare across forks"
# 选择你的 fork，创建 PR
```

### 详细版本

参考 [SUBMIT_TO_COMMUNITY.md](SUBMIT_TO_COMMUNITY.md) 获取详细步骤。

## ⚡ 常用命令

```bash
# 开发模式（监听文件变化）
npm run dev

# 生产构建
npm run build

# 版本更新（自动更新所有版本号）
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0

# 查看构建输出
ls -lh main.js

# 快速测试部署
npm run build && cp main.js manifest.json styles.css <vault>/.obsidian/plugins/crypto-price-tracker/
```

## 📝 快速参考

### 项目文件说明

| 文件 | 用途 |
|------|------|
| `main.ts` | 主要代码（TypeScript） |
| `main.js` | 编译输出（实际加载） |
| `manifest.json` | 插件元数据 |
| `styles.css` | 样式文件 |
| `package.json` | npm 配置 |
| `versions.json` | 版本兼容性 |
| `README.md` | 用户文档 |
| `CHANGELOG.md` | 版本历史 |

### 重要链接

- **开发文档**: https://docs.obsidian.md
- **示例插件**: https://github.com/obsidianmd/obsidian-sample-plugin
- **社区发布**: https://github.com/obsidianmd/obsidian-releases
- **Discord**: https://discord.gg/obsidianmd (#plugin-dev)

### 常见问题

**Q: 插件不显示在列表中？**
A: 确保 manifest.json 中的 `id` 与文件夹名完全一致

**Q: 价格不更新？**
A: 检查网络连接，确保可以访问 Binance API

**Q: 修改代码后没变化？**
A: 重新运行 `npm run build` 并重启 Obsidian

**Q: 如何调试？**
A: 打开开发者控制台（Cmd/Ctrl + Shift + I）查看日志和错误

**Q: 测试多个版本？**
A: 在不同 vault 中安装，或使用不同的插件文件夹名

## 🎯 检查清单

### 发布前
- [ ] 代码构建成功
- [ ] 本地测试通过
- [ ] 文档齐全
- [ ] 版本号正确
- [ ] GitHub 仓库创建
- [ ] 第一个 release 发布
- [ ] Release 包含所有必需文件

### 提交社区
- [ ] Repository 是公开的
- [ ] manifest.json 有效
- [ ] Release 文件完整
- [ ] README 清晰
- [ ] 遵循插件规范
- [ ] 无隐私问题

### 发布后
- [ ] 监控 issues
- [ ] 回复用户反馈
- [ ] 规划下一版本
- [ ] 更新文档

## 💡 小贴士

1. **使用开发模式**：运行 `npm run dev` 可以自动监听文件变化并重新构建
2. **快速测试**：创建一个测试 vault 专门用于插件开发
3. **版本控制**：每次重要修改都提交到 Git
4. **备份数据**：测试前备份重要的 vault
5. **查看日志**：开发者控制台是你的好朋友
6. **参考示例**：遇到问题时参考官方示例插件

## 🆘 获取帮助

遇到问题？
1. 查看 [PROJECT_STATUS.md](PROJECT_STATUS.md)
2. 阅读 [CONTRIBUTING.md](CONTRIBUTING.md)
3. 搜索现有 issues
4. 在 Discord #plugin-dev 频道提问
5. 创建新 issue

## 🎉 完成！

完成上述步骤后，你的插件将：
- ✅ 在本地测试 vault 中运行
- ✅ 托管在 GitHub 上
- ✅ 有完整的发布版本
- ✅ 准备好提交到社区商店

等待审核通过后，全世界的 Obsidian 用户都能使用你的插件了！

---

**祝你好运！** 有任何问题随时查看文档或寻求帮助。

