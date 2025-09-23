import React from 'react';

interface PremiumPartnerPromotionProps {
  className?: string;
}

const PremiumPartnerPromotion: React.FC<PremiumPartnerPromotionProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">🏆 Premium VPN Partners</h3>
        <p className="text-lg mb-6">Our top-rated, thoroughly tested VPN recommendations</p>
        
        <div className="grid md:grid-cols-5 gap-4">
          {/* NordVPN */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-2 border-yellow-400">
            <div className="flex items-center justify-center mb-3">
              <img src="/vpn-logos/nordvpn.png" alt="NordVPN" className="h-12 w-auto" />
            </div>
            <h4 className="text-xl font-bold text-yellow-300 mb-2">#1 NordVPN</h4>
            <p className="text-sm mb-3">Advanced security with double VPN encryption</p>
            <div className="flex justify-center items-center mb-3">
              <span className="text-2xl font-bold">9.9/10</span>
              <div className="ml-2 flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
            <div className="text-xs mb-3 text-yellow-200">
              <p>✅ 68% OFF 2-year plan</p>
              <p>✅ 30-day guarantee</p>
            </div>
            <a 
              href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition-colors duration-200 inline-block w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get NordVPN Deal
            </a>
          </div>
          
          {/* Surfshark */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-2 border-green-400">
            <div className="flex items-center justify-center mb-3">
              <img src="/vpn-logos/surfshark.png" alt="Surfshark" className="h-12 w-auto" />
            </div>
            <h4 className="text-xl font-bold text-green-300 mb-2">#2 Surfshark</h4>
            <p className="text-sm mb-3">Unlimited devices, budget-friendly premium VPN</p>
            <div className="flex justify-center items-center mb-3">
              <span className="text-2xl font-bold">9.8/10</span>
              <div className="ml-2 flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
            <div className="text-xs mb-3 text-green-200">
              <p>✅ 86% OFF 2-year plan</p>
              <p>✅ Unlimited connections</p>
            </div>
            <a 
              href="https://surfshark.com/?aid=bestvpndigital"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 inline-block w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Surfshark Deal
            </a>
          </div>

          {/* VPN.ac */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-2 border-purple-400">
            <div className="flex items-center justify-center mb-3">
              <img src="/vpn-logos/vpn-ac.png" alt="VPN.ac" className="h-12 w-auto" />
            </div>
            <h4 className="text-xl font-bold text-purple-300 mb-2">#3 VPN.ac</h4>
            <p className="text-sm mb-3">Professional-grade security with advanced features</p>
            <div className="flex justify-center items-center mb-3">
              <span className="text-2xl font-bold">9.5/10</span>
              <div className="ml-2 flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
            <div className="text-xs mb-3 text-purple-200">
              <p>✅ Starting from $3.75/month</p>
              <p>✅ 7-day money-back guarantee</p>
            </div>
            <a 
              href="https://vpn.ac/aff.php?aff=3464"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 inline-block w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get VPN.ac Deal
            </a>
          </div>

          {/* Hide.me */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-2 border-orange-400">
            <div className="flex items-center justify-center mb-3">
              <img src="/vpn-logos/hide-me.png" alt="Hide.me" className="h-12 w-auto" />
            </div>
            <h4 className="text-xl font-bold text-orange-300 mb-2">#4 Hide.me</h4>
            <p className="text-sm mb-3">Privacy-focused with generous free tier</p>
            <div className="flex justify-center items-center mb-3">
              <span className="text-2xl font-bold">8.6/10</span>
              <div className="ml-2 flex">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
                <span className="text-gray-400">⭐</span>
              </div>
            </div>
            <div className="text-xs mb-3 text-orange-200">
              <p>✅ Starting from $2.59/month</p>
              <p>✅ 30-day money-back guarantee</p>
            </div>
            <a 
              href="https://member.hide.me/en/user/login"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 inline-block w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Hide.me Deal
            </a>
          </div>

          {/* Proton VPN */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-2 border-blue-400">
            <div className="flex items-center justify-center mb-3">
              <img src="/vpn-logos/proton-vpn.png" alt="Proton VPN" className="h-12 w-auto" />
            </div>
            <h4 className="text-xl font-bold text-blue-300 mb-2">#5 Proton VPN</h4>
            <p className="text-sm mb-3">Swiss-based with strong privacy focus</p>
            <div className="flex justify-center items-center mb-3">
              <span className="text-2xl font-bold">8.9/10</span>
              <div className="ml-2 flex">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
                <span className="text-gray-400">⭐</span>
              </div>
            </div>
            <div className="text-xs mb-3 text-blue-200">
              <p>✅ Starting from $4.99/month</p>
              <p>✅ Free tier available</p>
            </div>
            <a 
              href="https://account.protonvpn.com/login"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 inline-block w-full text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Proton VPN Deal
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-sm opacity-90">
          <p>✅ Independently tested and verified</p>
          <p>✅ 30-day money-back guarantee</p>
          <p>✅ 24/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default PremiumPartnerPromotion;