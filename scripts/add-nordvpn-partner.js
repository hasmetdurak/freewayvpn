import { affiliateManager } from '../src/utils/affiliateManager.ts';

// NordVPN premium partner configuration
const nordvpnPartner = {
  name: 'nordvpn',
  displayName: 'NordVPN',
  affiliateUrl: 'https://nordvpn.com/?utm_source=bestvpn&utm_medium=affiliate&utm_campaign=premium',
  logoUrl: '/premium-partners/nordvpn/logos/nordvpn-logo.svg',
  description: 'Premium VPN service with military-grade encryption and 5500+ servers worldwide',
  features: [
    'Military-grade encryption',
    '5500+ servers in 60 countries',
    'No-logs policy verified by audits',
    '24/7 customer support',
    'Double VPN protection',
    'CyberSec ad blocker',
    '6 simultaneous connections',
    '30-day money-back guarantee'
  ],
  pricing: {
    monthly: 12.99,
    yearly: 4.99,
    discount: '68% OFF + 3 months FREE'
  },
  rating: 4.8,
  category: 'premium',
  isPremium: true,
  assets: {
    infographics: [
      '/premium-partners/nordvpn/infographics/nordvpn-features.svg',
      '/premium-partners/nordvpn/infographics/nordvpn-security.svg',
      '/premium-partners/nordvpn/infographics/nordvpn-speed.svg'
    ],
    banners: [
      '/premium-partners/nordvpn/banners/nordvpn-banner-728x90.svg',
      '/premium-partners/nordvpn/banners/nordvpn-banner-mobile.svg'
    ]
  }
};

async function addNordVPNPartner() {
  try {
    console.log('🚀 Adding NordVPN as premium partner...');
    
    const result = await affiliateManager.addPremiumPartner(nordvpnPartner);
    
    if (result.success) {
      console.log('✅ Success:', result.message);
      console.log('📁 Updated files:');
      result.updatedFiles.forEach(file => console.log(`  - ${file}`));
    } else {
      console.log('❌ Failed:', result.message);
      if (result.errors.length > 0) {
        console.log('🔍 Errors:');
        result.errors.forEach(error => console.log(`  - ${error}`));
      }
    }
    
    // Generate tracking URLs for different campaigns
    console.log('\n🔗 Generated tracking URLs:');
    const trackingUrls = {
      homepage: affiliateManager.generateTrackingUrl(nordvpnPartner.affiliateUrl, 'homepage', 'hero-banner'),
      review: affiliateManager.generateTrackingUrl(nordvpnPartner.affiliateUrl, 'review-page', 'detailed-review'),
      comparison: affiliateManager.generateTrackingUrl(nordvpnPartner.affiliateUrl, 'comparison', 'vs-competitors'),
      blog: affiliateManager.generateTrackingUrl(nordvpnPartner.affiliateUrl, 'blog', 'content-marketing')
    };
    
    Object.entries(trackingUrls).forEach(([campaign, url]) => {
      console.log(`  ${campaign}: ${url}`);
    });
    
  } catch (error) {
    console.error('❌ Error adding NordVPN partner:', error);
    process.exit(1);
  }
}

// Run the script
addNordVPNPartner();