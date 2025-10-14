export type LanguageType = "en" | "es";

export interface LanguageState {
    la: LanguageType;
    t: (text: string) => string;
    changeLanguage:(lang:LanguageType)=>void
}

interface LanguageObject {
    [key: string]: string
}

export interface LanguageData {
    [lang: string]: LanguageObject
}