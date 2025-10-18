import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { languageTypes, type LanguageState, type LanguageType } from "../types/languagesTypes";
import { languageData } from "../config/language";

export const LanguageContext = createContext({} as LanguageState);

export const useLanguageContext = ()=>useContext(LanguageContext);

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [language, setLanguage] = useState<LanguageType>("es");

  const t = (text: string) => languageData[language][text];
  const changeLanguage = () => {
    const idx = languageTypes.indexOf(language);
    setLanguage(languageTypes[(idx+1)%languageTypes.length]);
  };
  return (
    <LanguageContext.Provider
      value={{
        la: language,
        t,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
