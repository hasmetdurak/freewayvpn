import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Translations, type TranslationsObject } from './translations';
import { faqTranslations } from './faqTranslations';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', dir: 'ltr' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'nb', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴', dir: 'ltr' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', dir: 'ltr' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮', dir: 'ltr' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', dir: 'ltr' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', dir: 'ltr' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷', dir: 'rtl' },
  { code: 'tl', name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', dir: 'ltr' }
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  translateFAQs: (faqs: any[]) => any[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: string;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLanguage }) => {
  // Initialize language from prop, URL, localStorage, or default to English
  const getInitialLanguage = (): Language => {
    // First priority: initialLanguage prop (from URL)
    if (initialLanguage) {
      const langFromParam = supportedLanguages.find(lang => lang.code === initialLanguage);
      if (langFromParam) return langFromParam;
    }
    
    // Second priority: URL path
    const urlPath = window.location.pathname;
    const langFromUrl = urlPath.split('/')[1];
    if (langFromUrl) {
      const langFromPath = supportedLanguages.find(lang => lang.code === langFromUrl);
      if (langFromPath) return langFromPath;
    }
    
    // Third priority: localStorage
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
    
    // Navigate to subdirectory URL
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2,3}/, '') || '/';
    const newUrl = `/${language.code}${pathWithoutLang}`;
    
    // Use history API to avoid page reload
    window.history.pushState({}, '', newUrl);
    
    // Trigger a custom event to notify components of language change
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: language }));
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  const translateFAQs = (faqs: any[]): any[] => {
    // Return the original FAQs array as they already contain translations
    // The getFAQs function in FAQPage.tsx handles the translation logic
    return faqs;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, translateFAQs }}>
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