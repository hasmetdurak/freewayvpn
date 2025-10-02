import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Shield, Mail, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { lang } = useParams<{ lang: string }>();

  // Generate footer links with language prefix
  const getFooterPath = (basePath: string) => {
    if (lang) {
      return `/${lang}${basePath}`;
    }
    return basePath;
  };
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg mr-3">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {t('brand.name')}
                </h2>
                <p className="text-sm text-gray-400 font-medium">{t('brand.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('brand.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-600 pb-2">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to={getFooterPath('/vpns')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                  {t('vpns')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getFooterPath('/faq')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                  {t('faq')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getFooterPath('/blog')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getFooterPath('/contact')} 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-600 pb-2">
              {t('footer.support')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                  {t('footer.contactUs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                  {t('footer.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                  {t('footer.termsOfService')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                  {t('footer.affiliateDisclosure')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <Mail className="h-4 w-4 mr-2 text-blue-400" />
              <span>{t('footer.email')}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Professional Disclosure Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Affiliate Disclosure */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <h4 className="font-semibold text-yellow-400">{t('footer.affiliateDisclosure')}</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('footer.affiliateText')}
              </p>
            </div>

            {/* Independent Review Disclaimer */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="font-semibold text-green-400">{t('footer.independentReviews')}</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('footer.independentDisclaimer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;