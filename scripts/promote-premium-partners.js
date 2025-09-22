import fs from 'fs';
import path from 'path';

// Premium partners that should always be at the top
const PREMIUM_PARTNERS = [
  { name: 'NordVPN', priority: 1 },
  { name: 'Surfshark', priority: 2 }
];

async function promotePremiuPartners() {
  console.log('⭐ Starting premium partner promotion...');
  
  try {
    // 1. Update vpnData.ts to ensure premium partners are at the top
    const vpnDataPath = path.join(process.cwd(), 'src', 'data', 'vpnData.ts');
    let vpnDataContent = fs.readFileSync(vpnDataPath, 'utf8');
    
    console.log('📝 Promoting premium partners in vpnData.ts...');
    
    // Ensure NordVPN and Surfshark have the highest ratings and are marked as top picks
    vpnDataContent = vpnDataContent.replace(
      /name: "NordVPN"[\s\S]*?rating: [\d.]+/,
      `name: "NordVPN",
    logo: "/vpn-logos/nordvpn.png",
    description: "🏆 #1 Premium VPN - Advanced security with double VPN encryption and largest server network",
    serverCount: 5400,
    speed: 115,
    deviceSupport: 6,
    securityFeatures: ["AES-256", "Kill Switch", "Double VPN", "Onion over VPN"],
    price: 3.71,
    isTopPick: true,
    country: "Panama",
    affiliateLink: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902",
    rating: 9.9`
    );
    
    vpnDataContent = vpnDataContent.replace(
      /name: "Surfshark"[\s\S]*?rating: [\d.]+/,
      `name: "Surfshark",
    logo: "/vpn-logos/surfshark.png", 
    description: "🥈 #2 Premium VPN - Unlimited devices with advanced security features at budget-friendly price",
    serverCount: 3200,
    speed: 95,
    deviceSupport: 999,
    securityFeatures: ["AES-256", "Kill Switch", "CleanWeb", "MultiHop"],
    price: 2.30,
    isTopPick: true,
    country: "British Virgin Islands",
    affiliateLink: "https://my.surfshark.com/home",
    rating: 9.8`
    );
    
    fs.writeFileSync(vpnDataPath, vpnDataContent);
    console.log('✅ Premium partners promoted in vpnData.ts');
    
    // 2. Create premium partner promotion component
    const promotionComponentPath = path.join(process.cwd(), 'src', 'components', 'PremiumPartnerPromotion.tsx');
    const promotionComponent = `import React from 'react';

interface PremiumPartnerPromotionProps {
  className?: string;
}

const PremiumPartnerPromotion: React.FC<PremiumPartnerPromotionProps> = ({ className = '' }) => {
  return (
    <div className={\`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg \${className}\`}>
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

export default PremiumPartnerPromotion;`;
    
    fs.writeFileSync(promotionComponentPath, promotionComponent);
    console.log('✅ Created premium partner promotion component');
    
    // 3. Update comparison logic to always show premium partners first
    const comparisonUtilPath = path.join(process.cwd(), 'src', 'utils', 'vpnComparison.ts');
    const comparisonUtil = `// VPN Comparison utilities with premium partner priority

export interface VPNComparison {
  id: number;
  name: string;
  rating: number;
  price: number;
  isPremiumPartner: boolean;
  features: string[];
}

// Premium partners always get priority in comparisons
const PREMIUM_PARTNERS = ['NordVPN', 'Surfshark'];

export function sortVPNsForComparison(vpns: any[]): any[] {
  return vpns.sort((a, b) => {
    // Premium partners always come first
    const aIsPremium = PREMIUM_PARTNERS.includes(a.name);
    const bIsPremium = PREMIUM_PARTNERS.includes(b.name);
    
    if (aIsPremium && !bIsPremium) return -1;
    if (!aIsPremium && bIsPremium) return 1;
    
    // Among premium partners, sort by predefined order
    if (aIsPremium && bIsPremium) {
      return PREMIUM_PARTNERS.indexOf(a.name) - PREMIUM_PARTNERS.indexOf(b.name);
    }
    
    // For non-premium, sort by rating
    return b.rating - a.rating;
  });
}

export function getTopVPNRecommendations(vpns: any[], count: number = 5): any[] {
  const sorted = sortVPNsForComparison(vpns);
  return sorted.slice(0, count);
}

export function isPremiumPartner(vpnName: string): boolean {
  return PREMIUM_PARTNERS.includes(vpnName);
}

export function getPremiumPartnerBadge(vpnName: string): string {
  if (vpnName === 'NordVPN') return '🏆 #1 Premium Partner';
  if (vpnName === 'Surfshark') return '🥈 #2 Premium Partner';
  return '';
}`;
    
    fs.writeFileSync(comparisonUtilPath, comparisonUtil);
    console.log('✅ Created VPN comparison utility with premium partner priority');
    
    console.log('\n🎉 Premium partner promotion completed successfully!');
    console.log('\n📊 Summary:');
    console.log('✅ Enhanced premium partner descriptions and ratings');
    console.log('✅ Created premium partner promotion component');
    console.log('✅ Created comparison utility with premium partner priority');
    console.log('\n⭐ NordVPN and Surfshark are now prominently featured across the site!');
    
  } catch (error) {
    console.error('❌ Error during premium partner promotion:', error);
    process.exit(1);
  }
}

// Run the script
promotePremiuPartners();