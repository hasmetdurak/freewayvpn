import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Translations, type TranslationsObject } from './translations';
import { faqTranslations } from './faqTranslations';
import { geoRouter, subdomainManager, countryLanguageMap } from '../utils/geoDetection';

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
  isGeoDetected: boolean;
  detectedCountry: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: string;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children, initialLanguage }) => {
  const [isGeoDetected, setIsGeoDetected] = useState<boolean>(false);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  // Initialize language from prop, URL, localStorage, subdomain, or default to English
  const getInitialLanguage = (): Language => {
    // First priority: subdomain detection
    const currentSubdomain = subdomainManager.getCurrentSubdomain();
    if (currentSubdomain) {
      const subdomainLanguage = subdomainManager.getLanguageFromSubdomain(currentSubdomain);
      const langFromSubdomain = supportedLanguages.find(lang => lang.code === subdomainLanguage);
      if (langFromSubdomain) {
        setIsGeoDetected(true);
        setDetectedCountry(subdomainManager.getCountryFromSubdomain(currentSubdomain));
        return langFromSubdomain;
      }
    }

    // Second priority: initialLanguage prop (from URL)
    if (initialLanguage) {
      const langFromParam = supportedLanguages.find(lang => lang.code === initialLanguage);
      if (langFromParam) return langFromParam;
    }
    
    // Third priority: URL path
    const urlPath = window.location.pathname;
    const langFromUrl = urlPath.split('/')[1];
    if (langFromUrl) {
      const langFromPath = supportedLanguages.find(lang => lang.code === langFromUrl);
      if (langFromPath) return langFromPath;
    }
    
    // Fourth priority: localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      const langFromStorage = supportedLanguages.find(lang => lang.code === savedLanguage);
      if (langFromStorage) return langFromStorage;
    }
    
    return supportedLanguages[0]; // Default to English
  };

  const [currentLanguage, setCurrentLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    // Initialize geo routing on mount (only on main domain)
    const currentSubdomain = subdomainManager.getCurrentSubdomain();
    if (!currentSubdomain || currentSubdomain === 'www') {
      geoRouter.initializeGeoRouting().catch(console.warn);
    }

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
    
    // Set manual override to prevent geo redirect
    geoRouter.setManualOverride(language.code);
    
    // Check if we should use subdomain or path-based routing
    const currentSubdomain = subdomainManager.getCurrentSubdomain();
    const targetConfig = subdomainManager.subdomainConfigs.find(config => config.language === language.code);
    
    if (targetConfig && targetConfig.subdomain !== 'www') {
      // Use subdomain routing
      const newURL = subdomainManager.buildSubdomainURL(targetConfig.subdomain, window.location.pathname);
      window.location.href = newURL;
    } else {
      // Use path-based routing
      const currentPath = window.location.pathname;
      const pathWithoutLang = currentPath.replace(/^\/[a-z]{2,3}/, '') || '/';
      const newUrl = `/${language.code}${pathWithoutLang}`;
      
      // Use history API to avoid page reload
      window.history.pushState({}, '', newUrl);
    }
    
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