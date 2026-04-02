// src/settings.ts
import { App, PluginSettingTab, Setting } from 'obsidian';
import JotPlugin from './main';
import { t } from './i18n';

export class JotSettingTab extends PluginSettingTab {
    plugin: JotPlugin;
    private logModeSetting: Setting | null = null;
    private useFixedTagSetting: Setting | null = null;
    private multiFileFormatSetting: Setting | null = null;
    private fixedTagSetting: Setting | null = null;
    private enableTagsInFrontmatterSetting: Setting | null = null;

    constructor(app: App, plugin: JotPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        const { containerEl } = this;
        containerEl.empty();

        this.logModeSetting = null;
        this.useFixedTagSetting = null;
        this.multiFileFormatSetting = null;
        this.fixedTagSetting = null;
        this.enableTagsInFrontmatterSetting = null;

        new Setting(containerEl)
            .setName(t('language', this.plugin.lang))
            .setDesc(t('languageDesc', this.plugin.lang))
            .addDropdown(dropdown => dropdown
                .addOption("zh", t('languageZh', this.plugin.lang))
                .addOption("en", t('languageEn', this.plugin.lang))
                .setValue(this.plugin.settings.language)
                .onChange(async (value: "zh" | "en") => {
                    this.plugin.settings.language = value;
                    await this.plugin.saveSettings();
                    this.display();
                }));

        new Setting(containerEl)
            .setName(t('autoOpenView', this.plugin.lang))
            .setDesc(t('autoOpenViewDesc', this.plugin.lang))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.autoOpenView)
                .onChange(async (value) => {
                    this.plugin.settings.autoOpenView = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t('saveFolder', this.plugin.lang))
            .setDesc(t('saveFolderDesc', this.plugin.lang))
            .addText(text => text
                .setPlaceholder("Jots")
                .setValue(this.plugin.settings.saveFolder)
                .onChange(async (value) => {
                    this.plugin.settings.saveFolder = value.trim() || "Jots";
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t('attachmentsFolder', this.plugin.lang))
            .setDesc(t('attachmentsFolderDesc', this.plugin.lang))
            .addText(text => text
                .setPlaceholder("Jots/attachments")
                .setValue(this.plugin.settings.attachmentsFolder)
                .onChange(async (value) => {
                    this.plugin.settings.attachmentsFolder = value.trim() || "Jots/attachments";
                    await this.plugin.saveSettings();
                }));

        this.logModeSetting = new Setting(containerEl)
            .setName(t('logMode', this.plugin.lang))
            .setDesc(t('logModeDesc', this.plugin.lang))
            .addDropdown(dropdown => dropdown
                .addOption("multi", t('logModeMulti', this.plugin.lang))
                .addOption("single", t('logModeSingle', this.plugin.lang))
                .setValue(this.plugin.settings.logMode)
                .onChange(async (value: "single" | "multi") => {
                    this.plugin.settings.logMode = value;
                    await this.plugin.saveSettings();
                    this.updateConditionalSettings();
                }));

        this.multiFileFormatSetting = new Setting(containerEl)
            .setName(t('fileFormat', this.plugin.lang))
            .setDesc(t('fileFormatDesc', this.plugin.lang))
            .addText(text => text
                .setPlaceholder("jot-YYYYMMDD")
                .setValue(this.plugin.settings.multiFileFormat)
                .onChange(async (value) => {
                    this.plugin.settings.multiFileFormat = value.trim() || "jot-YYYYMMDD";
                    await this.plugin.saveSettings();
                }));
        this.multiFileFormatSetting.settingEl.style.display = this.plugin.settings.logMode === "multi" ? "" : "none";

        this.useFixedTagSetting = new Setting(containerEl)
            .setName(t('useFixedTag', this.plugin.lang))
            .setDesc(t('useFixedTagDesc', this.plugin.lang))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.useFixedTag)
                .onChange(async (value) => {
                    this.plugin.settings.useFixedTag = value;
                    await this.plugin.saveSettings();
                    this.updateConditionalSettings();
                }));

        this.fixedTagSetting = new Setting(containerEl)
            .setName(t('fixedTag', this.plugin.lang))
            .setDesc(t('fixedTagDesc', this.plugin.lang))
            .addText(text => text
                .setPlaceholder("jot")
                .setValue(this.plugin.settings.fixedTag)
                .onChange(async (value) => {
                    this.plugin.settings.fixedTag = value.trim() || "jot";
                    await this.plugin.saveSettings();
                }));
        this.fixedTagSetting.settingEl.style.display = this.plugin.settings.useFixedTag ? "" : "none";

        this.enableTagsInFrontmatterSetting = new Setting(containerEl)
            .setName(t('enableTagsInFrontmatter', this.plugin.lang))
            .setDesc(t('enableTagsInFrontmatterDesc', this.plugin.lang))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.enableTagsInFrontmatter)
                .onChange(async (value) => {
                    this.plugin.settings.enableTagsInFrontmatter = value;
                    await this.plugin.saveSettings();
                }));
        this.enableTagsInFrontmatterSetting.settingEl.style.display = this.plugin.settings.logMode === "multi" ? "" : "none";

        const infoEl = containerEl.createDiv();
        infoEl.style.marginTop = "20px";
        infoEl.style.padding = "12px";
        infoEl.style.backgroundColor = "var(--background-primary-alt)";
        infoEl.style.borderRadius = "8px";
        infoEl.style.fontSize = "12px";
        infoEl.style.color = "var(--text-muted)";

        if (this.plugin.settings.logMode === "multi") {
            infoEl.innerHTML = `
                <strong>${t('multiModeInfo', this.plugin.lang)}</strong><br>
                • ${t('fileFormat', this.plugin.lang)}：${this.plugin.settings.multiFileFormat}.md<br>
                • ${t('attachmentsFolder', this.plugin.lang)}：${this.plugin.settings.attachmentsFolder}<br>
                • ${t('attachmentsNaming', this.plugin.lang)}<br>
                • ${t('recordFormat', this.plugin.lang)}<br>
                &nbsp;&nbsp;### YYYY-MM-DD HH:mm:ss<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;${t('contentPlaceholder', this.plugin.lang)}<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;#tag1 #tag2 #tag3<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;来源: xxx<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;![[${t('attachmentPlaceholder', this.plugin.lang)}]] 或 [[${t('attachmentPlaceholder', this.plugin.lang)}]]<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;---<br>
                ${t('newRecordAtTop', this.plugin.lang)}<br>
                ${t('imageEmbed', this.plugin.lang)}<br>
                ${t('fileLink', this.plugin.lang)}
            `;
        } else {
            infoEl.innerHTML = `
                <strong>${t('singleModeInfo', this.plugin.lang)}</strong><br>
                • ${t('fileFormat', this.plugin.lang)}：jots.md<br>
                • ${t('attachmentsFolder', this.plugin.lang)}：${this.plugin.settings.attachmentsFolder}<br>
                • ${t('attachmentsNaming', this.plugin.lang)}<br>
                • ${t('recordFormat', this.plugin.lang)}<br>
                &nbsp;&nbsp;### YYYY-MM-DD HH:mm:ss<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;${t('contentPlaceholder', this.plugin.lang)}<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;#tag1 #tag2 #tag3<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;来源: xxx<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;![[${t('attachmentPlaceholder', this.plugin.lang)}]] 或 [[${t('attachmentPlaceholder', this.plugin.lang)}]]<br>
                &nbsp;&nbsp;<br>
                &nbsp;&nbsp;---<br>
                ${t('newRecordAtTop', this.plugin.lang)}<br>
                ${t('imageEmbed', this.plugin.lang)}<br>
                ${t('fileLink', this.plugin.lang)}
            `;
        }
    }

    private updateConditionalSettings() {
        if (this.multiFileFormatSetting) {
            this.multiFileFormatSetting.settingEl.style.display = this.plugin.settings.logMode === "multi" ? "" : "none";
        }

        if (this.fixedTagSetting) {
            this.fixedTagSetting.settingEl.style.display = this.plugin.settings.useFixedTag ? "" : "none";
        }

        if (this.enableTagsInFrontmatterSetting) {
            this.enableTagsInFrontmatterSetting.settingEl.style.display = this.plugin.settings.logMode === "multi" ? "" : "none";
        }
    }
}