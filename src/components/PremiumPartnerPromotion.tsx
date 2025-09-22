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
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* NordVPN */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
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
            <a 
              href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition-colors duration-200 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get NordVPN Deal
            </a>
          </div>
          
          {/* Surfshark */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
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
            <a 
              href="https://my.surfshark.com/home"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Surfshark Deal
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