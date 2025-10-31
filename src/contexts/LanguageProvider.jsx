import { useState } from 'react';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uz');

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'uz') return 'ru';
      if (prev === 'ru') return 'en';
      return 'uz';
    });
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};