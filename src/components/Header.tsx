import React, { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Menu, X, Shield, ChevronDown, Languages } from 'lucide-react';
import { useLanguage, supportedLanguages } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { currentLanguage, setLanguage, t, isGeoDetected, detectedCountry } = useLanguage();
  const location = useLocation();
  const { lang } = useParams<{ lang: string }>();

  // Get current path without language prefix
  const getCurrentPath = () => {
    const path = location.pathname;
    if (lang && path.startsWith(`/${lang}`)) {
      return path.replace(`/${lang}`, '') || '/vpns';
    }
    return path || '/vpns';
  };

  // Generate navigation paths with language prefix
  const getNavigationPath = (basePath: string) => {
    if (lang) {
      return `/${lang}${basePath}`;
    }
    return basePath;
  };

  const navigation = [
    { name: t('nav.vpns'), key: 'vpns', path: getNavigationPath('/vpns') },
    { name: t('nav.streamTest') || 'Speed Test', key: 'stream-test', path: getNavigationPath('/stream-test'), highlighted: true },
    { name: t('nav.deals') || 'Deals', key: 'deals', path: getNavigationPath('/deals'), highlighted: true },
    { name: t('nav.quiz') || 'VPN Finder', key: 'quiz', path: getNavigationPath('/quiz') },
    { name: t('nav.faq'), key: 'faq', path: getNavigationPath('/faq') },
    { name: t('nav.blog'), key: 'blog', path: getNavigationPath('/blog') },
    { name: t('nav.contact'), key: 'contact', path: getNavigationPath('/contact') },
  ];

  const getCurrentPage = () => {
    const currentPath = getCurrentPath();
    if (currentPath === '/' || currentPath === '/vpns') return 'vpns';
    if (currentPath === '/faq') return 'faq';
    if (currentPath === '/blog') return 'blog';
    if (currentPath === '/contact') return 'contact';
    if (currentPath === '/deals') return 'deals';
    if (currentPath === '/quiz') return 'quiz';
    if (currentPath === '/stream-test') return 'stream-test';
    return 'vpns';
  };

  const currentPage = getCurrentPage();

  const handleLanguageSelect = (language: any) => {
    setLanguage(language);
    setIsLanguageOpen(false);
    
    // Navigate to the same page in the new language
    const currentPath = getCurrentPath();
    const newPath = language.code === 'en' ? currentPath : `/${language.code}${currentPath}`;
    
    // Use window.location for full page navigation to ensure proper language switching
    window.location.href = newPath;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="responsive-container">
        <div className="flex justify-between items-center h-16 md:h-20">
                {/* Logo */}
                <Link
                  to={lang ? `/${lang}/vpns` : "/"}
                  className="flex items-center cursor-pointer group"
                >
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <div className="ml-2">
              <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {t('brand.name')}
              </span>
              <div className="text-xs text-gray-500 hidden sm:block">{t('brand.tagline')}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            {navigation.map((item: any) => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.highlighted
                    ? 'text-orange-600 bg-gradient-to-r from-orange-100 to-red-100 hover:from-orange-200 hover:to-red-200 font-bold'
                    : currentPage === item.key
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Geo Detection Indicator */}
            {isGeoDetected && detectedCountry && (
              <div className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-700 font-medium">
                  {t('geoDetected')}: {detectedCountry}
                </span>
              </div>
            )}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-200"
                title={t('selectLanguage')}
              >
                <Languages className="h-4 w-4" />
                <span className="hidden sm:inline text-sm font-medium">{t('selectLanguage')}</span>
                <span className="sm:hidden text-lg">{currentLanguage.flag}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-[9999] max-h-96 overflow-y-auto backdrop-blur-sm">
                  <div className="p-3">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-2">
                      {t('selectLanguage')}
                    </div>
                    {supportedLanguages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          handleLanguageSelect(language);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group ${
                          currentLanguage.code === language.code 
                            ? 'bg-blue-50 border border-blue-200 shadow-sm' 
                            : 'border border-transparent hover:border-gray-200'
                        }`}
                        dir={language.dir}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl group-hover:scale-110 transition-transform duration-200">{language.flag}</span>
                          <div className="text-left">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {language.nativeName}
                            </div>
                            <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                              {language.name}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono bg-gray-100 group-hover:bg-gray-200 px-2 py-1 rounded transition-colors">
                            {language.code.toUpperCase()}
                          </span>
                          {currentLanguage.code === language.code && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 rounded-b-xl">
                     <p className="text-xs text-gray-500 text-center">{t('moreLanguages')}</p>
                   </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="touch-target p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`mobile-nav-item block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-200 ${
                    item.highlighted
                      ? 'text-orange-600 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 font-bold'
                      : currentPage === item.key
                      ? 'text-blue-600 bg-blue-50 border border-blue-200'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 border border-transparent hover:border-gray-200'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-4">
                  {t('selectLanguage')}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {supportedLanguages.slice(0, 6).map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        handleLanguageSelect(language);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        currentLanguage.code === language.code 
                          ? 'bg-blue-50 border border-blue-200 text-blue-600' 
                          : 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="truncate">{language.nativeName}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close language dropdown */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={() => setIsLanguageOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;