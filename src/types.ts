// src/types.ts
export type Language = "zh" | "en";

export interface JotSettings {
    saveFolder: string;
    logMode: "single" | "multi";
    useFixedTag: boolean;
    fixedTag: string;
    enableTagsInFrontmatter: boolean;
    multiFileFormat: string;
    attachmentsFolder: string;
    language: Language;
    autoOpenView: boolean;
}

export interface Jot {
    date: string;
    time: string;
    content: string;
    tags: string[];
    source: string;
    fullText: string;
    attachments?: string[];
    attachmentTypes?: ("image" | "file")[];
    filePath?: string;
}

export interface DayRecord {
    date: string;
    count: number;
    jots: Jot[];
}

export const DEFAULT_SETTINGS: JotSettings = {
    saveFolder: "Jots",
    logMode: "multi",
    useFixedTag: false,
    fixedTag: "jot",
    enableTagsInFrontmatter: true,
    multiFileFormat: "jot-YYYYMMDD",
    attachmentsFolder: "Jots/attachments",
    language: "zh",
    autoOpenView: true
};

export const VIEW_TYPE_JOTS = "jot-view";