import React, { useState } from 'react';
import { Menu, X, Shield, ChevronDown, Languages } from 'lucide-react';
import { useLanguage, supportedLanguages } from '../contexts/LanguageContext';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}



const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { currentLanguage, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('vpns'), key: 'vpns' },
    { name: t('faq'), key: 'faq' },
    { name: t('blog'), key: 'blog' },
    { name: t('contact'), key: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const handleLanguageSelect = (language: any) => {
    setLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick('vpns')}
          >
            <Shield className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
            <div className="ml-2">
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                BestVPN Reviews
              </span>
              <div className="text-xs text-gray-500">Independent Comparison Site</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.key
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                <Languages className="h-4 w-4" />
                <span className="hidden sm:inline">{t('selectLanguage')}</span>
                <span className="sm:hidden">{currentLanguage.flag}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-[9999] max-h-96 overflow-y-auto">
                  <div className="p-2">
                    {supportedLanguages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setLanguage(language);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors ${
                          currentLanguage.code === language.code ? 'bg-blue-50 border border-blue-200' : ''
                        }`}
                        dir={language.dir}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{language.flag}</span>
                          <div className="text-left">
                            <div className="font-medium">{language.nativeName}</div>
                            <div className="text-xs text-gray-500">{language.name}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">
                            {language.code.toUpperCase()}
                          </span>
                          {currentLanguage.code === language.code && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="px-3 py-2 border-t border-gray-100">
                     <p className="text-xs text-gray-500">{t('moreLanguages')}</p>
                   </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    currentPage === item.key
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
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