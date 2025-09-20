import React from 'react';
import { Shield, Mail, Twitter, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <div className="ml-2">
                <span className="text-xl font-bold">BestVPN Reviews</span>
                <div className="text-xs text-gray-400">Independent Comparison Site</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted source for comprehensive VPN reviews and comparisons. 
              Find the perfect VPN service for your privacy and security needs.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">{t('vpns')}</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">{t('faq')}</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">{t('blog')}</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">{t('contact')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Affiliate Disclosure</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 bestvpn.digital. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <Mail className="h-4 w-4 mr-2" />
            support@bestvpn.digital
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-300 text-xs text-center">
            <strong>Affiliate Disclosure:</strong> We may earn a commission when you purchase through our affiliate links. 
            This helps support our site and allows us to continue providing comprehensive VPN reviews.
          </p>
        </div>

        {/* Independent Review Disclaimer */}
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-xs">
            This is an independent review site. We are not affiliated with any VPN provider. All trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;