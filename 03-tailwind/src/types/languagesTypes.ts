export type LanguageType = "en" | "es";

export const languageTypes:LanguageType[] =["en", "es"]

export interface LanguageState {
    la: LanguageType;
    t: (text: string) => string;
    changeLanguage:()=>void
}

interface LanguageObject {
    [key: string]: string
}

export interface LanguageData {
    [lang: string]: LanguageObject
}