// src/i18n.ts
import { Language } from './types';

export interface Translations {
    pluginName: string;
    pluginDescription: string;
    openJotView: string;
    quickCapture: string;
    saveAsJot: string;
    savedAsJot: string;
    jotView: string;
    quickRecord: string;
    contentPlaceholder: string;
    placeholderWithLink: string;
    tagsPlaceholder: string;
    tagsInputPlaceholder: string;
    sourcePlaceholder: string;
    attachmentPlaceholder: string;
    attachmentSelected: string;
    save: string;
    cancel: string;
    contentRequired: string;
    saved: string;
    saveFailed: string;
    attachmentSaved: string;
    total: string;
    today: string;
    thisMonth: string;
    calendar: string;
    year: string;
    month: string;
    searchAndTags: string;
    searchPlaceholder: string;
    searchPlaceholderShort: string;
    moreTags: string;
    noRecords: string;
    settings: string;
    saveFolder: string;
    saveFolderDesc: string;
    attachmentsFolder: string;
    attachmentsFolderDesc: string;
    attachmentsNaming: string;
    logMode: string;
    logModeDesc: string;
    logModeMulti: string;
    logModeSingle: string;
    fileFormat: string;
    fileFormatDesc: string;
    useFixedTag: string;
    useFixedTagDesc: string;
    fixedTag: string;
    fixedTagDesc: string;
    enableTagsInFrontmatter: string;
    enableTagsInFrontmatterDesc: string;
    language: string;
    languageDesc: string;
    languageZh: string;
    languageEn: string;
    multiModeInfo: string;
    singleModeInfo: string;
    recordFormat: string;
    newRecordAtTop: string;
    imageEmbed: string;
    fileLink: string;
    loadingPlugin: string;
    unloadingPlugin: string;
    loadingSettings: string;
    creatingAttachmentsFolder: string;
    attachmentsFolderExists: string;
    creatingJotView: string;
    activatingView: string;
    pluginNotLoaded: string;
    existingViewFound: string;
    creatingNewView: string;
    weekdays: string[];
    selectedFiles: string;
    recordsCount: string;
    autoOpenView: string;
    autoOpenViewDesc: string;
}

export const translations: Record<Language, Translations> = {
    zh: {
        pluginName: "随手记",
        pluginDescription: "随手记录想法和笔记",
        openJotView: "打开随手记视图",
        quickCapture: "快速记录",
        saveAsJot: "保存为随手记",
        savedAsJot: "已保存为随手记！",
        jotView: "随手记",
        quickRecord: "快速记录",
        contentPlaceholder: "此刻的想法...",
        placeholderWithLink: "此刻的想法...\n输入 [[ 可快速插入笔记链接",
        tagsPlaceholder: "标签",
        tagsInputPlaceholder: "按回车添加标签，使用 / 进行嵌套",
        sourcePlaceholder: "来源",
        attachmentPlaceholder: "📎 点击或拖拽文件到这里",
        attachmentSelected: "✅ 已选择: {filename}",
        save: "保存",
        cancel: "取消",
        contentRequired: "内容不能为空",
        saved: "已保存！",
        saveFailed: "保存失败: {error}",
        attachmentSaved: "附件已保存: {filename}",
        total: "总计",
        today: "今日",
        thisMonth: "本月",
        calendar: "日历",
        year: "年",
        month: "月",
        searchAndTags: "🔍 搜索与标签",
        searchPlaceholder: "搜索关键词...",
        searchPlaceholderShort: "搜索...",
        moreTags: "还有 {count} 个标签...",
        noRecords: "暂无记录，开始记录你的想法吧！",
        settings: "设置",
        saveFolder: "保存文件夹",
        saveFolderDesc: "位于 vault 根目录，例如：Jots",
        attachmentsFolder: "附件存放目录",
        attachmentsFolderDesc: "附件存放位置，例如：Jots/attachments。附件命名格式：jot-YYYYMMDD-序数",
        attachmentsNaming: "附件命名格式：jot-YYYYMMDD-序数",
        logMode: "记录模式",
        logModeDesc: "选择记录保存方式",
        logModeMulti: "每天一个文件",
        logModeSingle: "单个文件",
        fileFormat: "文件名格式",
        fileFormatDesc: "文件名命名格式，例如：jot-YYYYMMDD 会生成 jot-20260326.md",
        useFixedTag: "使用固定标签",
        useFixedTagDesc: "为每条记录自动添加固定标签",
        fixedTag: "固定标签值",
        fixedTagDesc: "自动添加的标签（不需要 # 号）",
        enableTagsInFrontmatter: "启用 frontmatter 标签",
        enableTagsInFrontmatterDesc: "在每天文件的 YAML 区域添加 tags 字段（方便 Dataview 等插件使用）",
        language: "语言",
        languageDesc: "选择插件显示语言",
        languageZh: "中文",
        languageEn: "English",
        multiModeInfo: "📁 每天一个文件模式说明：",
        singleModeInfo: "📄 单个文件模式说明：",
        recordFormat: "每条记录格式：",
        newRecordAtTop: "• 新记录会自动添加到文件最上方",
        imageEmbed: "• 图片使用 ![[路径]] 嵌入",
        fileLink: "• 其他文件使用 [[路径]] 链接",
        loadingPlugin: "加载随手记插件",
        unloadingPlugin: "卸载随手记插件",
        loadingSettings: "加载设置:",
        creatingAttachmentsFolder: "创建附件目录:",
        attachmentsFolderExists: "附件目录已存在或创建失败:",
        creatingJotView: "创建 JotView 实例",
        activatingView: "激活视图",
        pluginNotLoaded: "插件未完全加载，延迟激活",
        existingViewFound: "找到现有视图",
        creatingNewView: "创建新视图",
        weekdays: ["日", "一", "二", "三", "四", "五", "六"],
        selectedFiles: "✅ 已选择 {count} 个文件",
        recordsCount: "{count}条记录",
        autoOpenView: "打开 vault 时自动打开随手记视图",
        autoOpenViewDesc: "启动 Obsidian 时自动打开随手记视图",
    },
    en: {
        pluginName: "Jot",
        pluginDescription: "Quick note-taking plugin",
        openJotView: "Open Jot View",
        quickCapture: "Quick Capture",
        saveAsJot: "Save as Jot",
        savedAsJot: "Saved as Jot!",
        jotView: "Jot",
        quickRecord: "Quick Record",
        contentPlaceholder: "What's on your mind...",
        placeholderWithLink: "What's on your mind...\nType [[ to quickly insert note links",
        tagsPlaceholder: "Tags",
        tagsInputPlaceholder: "Press Enter to add tag, use / for nesting",
        sourcePlaceholder: "Source",
        attachmentPlaceholder: "📎 Click or drag file here",
        attachmentSelected: "✅ Selected: {filename}",
        save: "Save",
        cancel: "Cancel",
        contentRequired: "Content cannot be empty",
        saved: "Saved!",
        saveFailed: "Save failed: {error}",
        attachmentSaved: "Attachment saved: {filename}",
        total: "Total",
        today: "Today",
        thisMonth: "This Month",
        calendar: "Calendar",
        year: "",
        month: "/",
        searchAndTags: "🔍 Search & Tags",
        searchPlaceholder: "Search keywords...",
        searchPlaceholderShort: "Search...",
        moreTags: "{count} more tags...",
        noRecords: "No records yet. Start capturing your thoughts!",
        settings: "Settings",
        saveFolder: "Save Folder",
        saveFolderDesc: "Located in vault root, e.g., Jots",
        attachmentsFolder: "Attachments Folder",
        attachmentsFolderDesc: "Attachment storage location, e.g., Jots/attachments. Naming format: jot-YYYYMMDD-number",
        attachmentsNaming: "Naming format: jot-YYYYMMDD-number",
        logMode: "Log Mode",
        logModeDesc: "Choose how to save records",
        logModeMulti: "One file per day",
        logModeSingle: "Single file",
        fileFormat: "File Format",
        fileFormatDesc: "File naming format, e.g., jot-YYYYMMDD generates jot-20260326.md",
        useFixedTag: "Use Fixed Tag",
        useFixedTagDesc: "Automatically add a fixed tag to each record",
        fixedTag: "Fixed Tag Value",
        fixedTagDesc: "Tag to add automatically (no # needed)",
        enableTagsInFrontmatter: "Enable Frontmatter Tags",
        enableTagsInFrontmatterDesc: "Add tags field in YAML frontmatter (for Dataview and other plugins)",
        language: "Language",
        languageDesc: "Choose plugin display language",
        languageZh: "中文",
        languageEn: "English",
        multiModeInfo: "📁 One File Per Day Mode:",
        singleModeInfo: "📄 Single File Mode:",
        recordFormat: "Record format:",
        newRecordAtTop: "• New records are automatically added to the top",
        imageEmbed: "• Images embedded with ![[path]]",
        fileLink: "• Other files linked with [[path]]",
        loadingPlugin: "Loading Jot plugin",
        unloadingPlugin: "Unloading Jot plugin",
        loadingSettings: "Loading settings:",
        creatingAttachmentsFolder: "Creating attachments folder:",
        attachmentsFolderExists: "Attachments folder exists or creation failed:",
        creatingJotView: "Creating JotView instance",
        activatingView: "Activating view",
        pluginNotLoaded: "Plugin not fully loaded, delaying activation",
        existingViewFound: "Found existing view",
        creatingNewView: "Creating new view",
        weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        selectedFiles: "✅ Selected {count} file(s)",
        recordsCount: "{count} record(s)",
        autoOpenView: "Auto-open Jot View on vault open",
        autoOpenViewDesc: "Automatically open Jot View when Obsidian starts",
    }
};

export function t(key: keyof Translations, lang: Language, params?: Record<string, string>): string {
    const text = translations[lang][key];
    if (!params) return text;
    return Object.entries(params).reduce((result, [param, value]) => {
        return result.replace(`{${param}}`, value);
    }, text);
}