import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from './translations';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', dir: 'ltr' },
  { code: 'nb', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴', dir: 'ltr' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', dir: 'ltr' }
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  translateFAQs: (faqs: any[]) => any[];
  isGeoDetected: boolean;
  detectedCountry: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: string;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLanguage }) => {
  const [isGeoDetected] = useState<boolean>(false);
  const [detectedCountry] = useState<string | null>(null);

  // Initialize language from prop, localStorage, or default to English
  const getInitialLanguage = (): Language => {
    // First priority: initialLanguage prop (from URL)
    if (initialLanguage) {
      const langFromParam = supportedLanguages.find(lang => lang.code === initialLanguage);
      if (langFromParam) return langFromParam;
    }
    
    // Second priority: localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      const langFromStorage = supportedLanguages.find(lang => lang.code === savedLanguage);
      if (langFromStorage) return langFromStorage;
    }
    
    return supportedLanguages[0]; // Default to English
  };

  const [currentLanguage, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    // Listen for language change events
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail);
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    
    // Update document language on mount
    updateDocumentLanguage(currentLanguage);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, [currentLanguage]);

  const updateDocumentLanguage = (language: Language) => {
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.dir;
    
    // Add RTL class for Arabic
    if (language.dir === 'rtl') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  };

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language.code);
    updateDocumentLanguage(language);
    
    // Trigger a custom event to notify components of language change
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: language }));
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    let translation = translations[currentLanguage.code]?.[key] || translations.en[key] || key;
    
    // Replace parameters in the translation string
    if (params) {
      Object.keys(params).forEach(param => {
        translation = translation.replace(new RegExp(`{${param}}`, 'g'), String(params[param]));
      });
    }
    
    return translation;
  };

  const translateFAQs = (faqs: any[]): any[] => {
    // Return the original FAQs array as they already contain translations
    // The getFAQs function in FAQPage.tsx handles the translation logic
    return faqs;
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      setLanguage, 
      t, 
      translateFAQs, 
      isGeoDetected, 
      detectedCountry 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Export supportedLanguages as a named export
export { useLanguage, LanguageProvider, type Language, supportedLanguages };