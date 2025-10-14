import { createContext, useContext, useState, type PropsWithChildren } from "react"
import { type LanguageState, type LanguageType } from "../interfaces/iLanguage"
import { languageData } from "../language";


export const LanguageContext = createContext({} as LanguageState)

export const useLanguageContext = useContext(LanguageContext);

export const LanguageProvider = ({ children }: PropsWithChildren) => {

    const [language, setLanguage] = useState<LanguageType>("es")

    const t = (text: string) => languageData[language][text]
    const changeLanguage = (lang: LanguageType) => { setLanguage(lang) }
    return (
        <LanguageContext.Provider
            value={
                {
                    la: language,
                    t,
                    changeLanguage
                }
            }>
            {children}

        </LanguageContext.Provider>
    )
}