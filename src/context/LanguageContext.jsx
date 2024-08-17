import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import english from "../static/assets/lenguages/sp/en.json";
import russian from "../static/assets/lenguages/sp/ru.json";
import uzbek from "../static/assets/lenguages/sp/uz.json";

import eula_en from "../static/assets/lenguages/eula/en.json";
import eula_ru from "../static/assets/lenguages/eula/ru.json";
import eula_uz from "../static/assets/lenguages/eula/uz.json";

import ppen from "../static/assets/lenguages/pp/en.json";
import ppru from "../static/assets/lenguages/pp/ru.json";
import ppuz from "../static/assets/lenguages/pp/uz.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const location = useLocation();
    const pathLanguage = location.pathname.split('/')[1];

    const getInitialLanguageData = () => {
        if (pathLanguage === 'en') {
          return { language: 'en', localData: english, eulaData: eula_en, pp: ppen };
        } else if (pathLanguage === 'ru') {
          return { language: 'ru', localData: russian, eulaData: eula_ru, pp: ppru };
        } else if (pathLanguage === 'uz') {
          return { language: 'uz', localData: uzbek, eulaData: eula_uz, pp: ppuz };
        } else {
          return { language: 'ru', localData: russian, eulaData: eula_ru, pp: ppru }; // Default to Russian
        }
      };

    const [language, setLanguage] = useState(getInitialLanguageData().language);
    const [localData, setLocalData] = useState(getInitialLanguageData().localData);
    const [eulaData, setEulaData]=useState(getInitialLanguageData().eulaData);
    const [ppData, setPpData] =useState(getInitialLanguageData().pp);
  
    useEffect(() => {
        if (pathLanguage === 'en') {
          setLanguage('en');
          setLocalData(english);
          setEulaData(eula_en);
          setPpData(ppen);
        } else if (pathLanguage === 'ru') {
          setLanguage('ru');
          setLocalData(russian);
          setEulaData(eula_ru);
          setPpData(ppru);
        } else if (pathLanguage === 'uz') {
          setLanguage('uz');
          setLocalData(uzbek);
          setEulaData(eula_uz);
          setPpData(ppuz);
        } else {
          setLanguage('ru');
          setLocalData(russian);
          setEulaData(eula_ru);
          setPpData(ppru);
        }
      }, [location]);
  
    return (
      <LanguageContext.Provider value={ {localData, language, eulaData, ppData} }>
        {children}
      </LanguageContext.Provider>
    );
  };
  
  export default LanguageContext;