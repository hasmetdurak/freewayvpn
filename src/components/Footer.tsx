import React from 'react';
import { Shield, Mail, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">VPNCompare</span>
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
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Top VPNs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best Free VPNs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">VPN Reviews</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How to Choose</a></li>
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
            © 2025 VPNCompare. All rights reserved.
          </p>
          <div className="flex items-center text-gray-400 text-sm">
            <Mail className="h-4 w-4 mr-2" />
            support@vpncompare.com
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-300 text-xs text-center">
            <strong>Affiliate Disclosure:</strong> We may earn a commission when you purchase through our affiliate links. 
            This helps support our site and allows us to continue providing comprehensive VPN reviews.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;