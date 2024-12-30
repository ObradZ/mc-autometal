export type Title = {
    template: string;
    default: string;
};

export type LanguageMetadata = {
    applicationName: string;
    metadataBase: URL;
    title: Title;
    description: string;
};

export type MetaData = {
    rs: LanguageMetadata;
    en: LanguageMetadata;
    de: LanguageMetadata;
};

export type Locale = 'rs' | 'en' | 'de';
