# Jot
[English](https://github.com/ichris007/obsidian-jot-plugin/blob/main/README.md) | [中文文档](https://github.com/ichris007/obsidian-jot-plugin/blob/main/README-ZH.md)

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/ichris007/obsidian-jot-plugin)](https://github.com/ichris007/obsidian-jot-plugin/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Obsidian Plugin](https://img.shields.io/badge/Obsidian-Plugin-purple)](https://obsidian.md)

Jot 是一个为 [Obsidian](https://obsidian.md) 设计的随手记插件，让你能够快速捕捉想法、记录灵感，并轻松管理碎片化笔记。支持标签嵌套、附件上传、日历视图、全文搜索等功能，完美融入 Obsidian 的工作流。

## 插件预览

### 主工作区

![Preview_workspace](https://github.com/ichris007/obsidian-jot-plugin/blob/main/demo/jot_workspace_cn.png)

### 侧边栏

![Preview_sidebar](https://github.com/ichris007/obsidian-jot-plugin/blob/main/demo/jot_sidebar_cn.png)

### Jot笔记

![Preview_jot笔记](https://github.com/ichris007/obsidian-jot-plugin/blob/main/demo/jot_markdown_cn.png)

## 1 ✨ 特性

- **快速记录** – 一键打开记录窗口，快速写下想法
- **智能标签** – 支持标签嵌套（如 `工作/项目A`），输入时自动提示已有标签
- **来源与附件** – 可添加来源信息和附件（图片、文件），附件自动命名（`jot-YYYYMMDD-序号`）
- **日历视图** – 直观展示每天记录数量，点击日期快速筛选
- **搜索筛选** – 支持全文搜索、多关键词 AND 查询、标签筛选
- **Markdown 渲染** – 完美支持 Obsidian 原生语法（双链、列表、任务列表、引用、嵌入等）
- **多语言** – 内置中文和英文，自动跟随 Obsidian 语言设置或手动切换
- **灵活存储** – 支持“每天一个文件”和“单个文件”两种记录模式
- **零干扰** – Jot 仅在指定文件夹生成 .md 文件，不影响已有笔记。卸载后，记录依然完整可读。
- **轻量高效** – 增量加载，文件缓存，性能优化

## 2 📦 安装

### 2.1 从 BRAT 安装（推荐）

1. 在 Obsidian 中安装 [BRAT](https://obsidian.md/plugins?id=obsidian42-brat) 插件（如果尚未安装）。
2. 打开设置 → BRAT → Beta Plugin List → Add Beta Plugin。
3. 在弹出的对话框中输入本插件的 GitHub 仓库地址：  
    `https://github.com/ichris007/obsidian-jot-plugin`
4. 点击“Add Plugin”，等待安装完成。
5. 返回社区插件列表，启用 `Jot` 插件。

### 2.2 手动安装
1. 从 [Releases](https://github.com/ichris007/obsidian-jot-plugin/releases)下载最新版本的 `main.js`、`manifest.json`、`styles.css`
2. 在你的 Obsidian 仓库中创建文件夹：`.obsidian/plugins/obsidian-jot-plugin/`
3. 将下载的三个文件放入该文件夹
4. 重新加载 Obsidian，在设置中启用插件

## 3 🚀 使用方法

### 3.1 打开记录面板
- 点击左侧边栏的 ✨ 图标
- 或使用命令面板：`Jot: 快速记录` / `Jot: 打开随手记视图`
- 也可通过右键菜单将选中文本保存为 Jot

### 3.2 快速记录窗口
- **内容**：输入你的想法，支持 Markdown 和 Obsidian 语法
- **标签**：输入标签（如 `灵感` 或 `工作/项目A`），按回车添加，标签不能包含空格，可用 `/` 实现嵌套
- **来源**：可选，记录信息出处（如网页链接、书籍名称）
- **附件**：点击或拖拽文件上传，自动按日期和序号命名，图片显示 🖼️，文件显示 📎
- **保存**：点击“保存”或按 `Cmd/Ctrl + Enter` 快速保存

### 3.3 随手记视图
- **日历**：显示当月记录情况，有记录的日期高亮，点击可筛选
- **搜索**：支持关键词搜索，多个关键词用空格分隔（AND 关系）
- **标签筛选**：点击标签按钮快速筛选
- **记录卡片**：显示时间、内容（渲染后的 Markdown）、标签、来源、附件。点击卡片可跳转到源文件对应位置

## 4 ⚙️ 配置选项

| 选项 | 说明 |
|------|------|
| 保存文件夹 | 记录文件存放位置（默认 `Jots`） |
| 附件存放目录 | 附件保存路径（默认 `Jots/attachments`） |
| 记录模式 | `每天一个文件` 或 `单个文件` |
| 文件名格式 | 多文件模式下的文件名格式，如 `jot-YYYYMMDD` |
| 使用固定标签 | 为每条记录自动添加一个固定标签 |
| 固定标签值 | 固定标签内容（不含 `#`） |
| 启用 frontmatter 标签 | 在多文件模式下，将标签写入 YAML frontmatter（方便 Dataview 等插件） |
| 语言 | 界面语言（中文 / English） |

## 5 🌍 本地化

插件支持中文和英文，语言自动跟随 Obsidian 设置，也可在插件设置中手动切换。如需添加其他语言，欢迎贡献翻译。

## 6 🛠 开发与构建

```bash
# 克隆仓库
git clone https://github.com/ichris007/obsidian-jot-plugin.git
cd obsidian-jot-plugin

# 安装依赖
npm install

# 开发模式（自动重新编译）
npm run dev

# 生产构建
npm run build
```

构建后的 `main.js` 和 `styles.css` 可直接用于 Obsidian。

## 7 📝 文件格式说明

### 7.1 多文件模式
- 每天一个文件，文件名按配置格式生成（如 `jot-20260326.md`）
- 文件内每条记录格式：

```markdown
### YYYY-MM-DD HH:mm:ss

记录内容

#标签1 #标签2/子标签

来源: 示例来源

![[附件路径]] 或 [[附件路径]]

---
```

### 7.2 单文件模式
- 所有记录保存在 `jots.md` 中，同样采用上述格式

## 8 ❓ 常见问题

**Q: 附件上传失败或文件名重复？**  
A: 插件会自动生成唯一文件名（基于日期和序号），并检查文件是否已存在，避免覆盖。如果仍有问题，请检查附件文件夹权限或联系开发者。

**Q: 标签中包含空格怎么办？**  
A: 标签中不能包含空格，请使用 `/` 实现嵌套（如 `工作/重要`）。

**Q: 如何将已有笔记导入为 Jot？**  
A: 目前暂不支持直接导入，但你可以将内容复制到快速记录窗口保存。

**Q: 日历显示不完整？**  
A: 请检查保存文件夹是否存在有效的记录文件，或者尝试重新加载插件。

## 9 🤝 贡献

欢迎提交 Issue 和 Pull Request！在提交 PR 前，请确保：

- 代码风格与现有代码一致
- 新功能包含相应的文档说明
- 测试通过

## 10 🙏 鸣谢

- 本插件受 [Andrej Karpathy](https://github.com/karpathy) 提出的 “[The append‑and‑review note](https://karpathy.bearblog.dev/the-append-and-review-note/)” 方法启发，在此表示感谢。
- UI 设计参考了开源笔记工具 [Memos](https://github.com/usememos/memos)，同样表示感谢。

## 11 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

---

**随手记，随心写！**
**——轻松记录你的想法。**
