import { affiliateManager } from '../src/utils/affiliateManager.ts';

// Surfshark partner configuration
const surfsharksConfig = {
  name: 'Surfshark',
  slug: 'surfshark',
  website: 'https://surfshark.com',
  affiliateUrl: 'https://surfshark.hasoffers.com/signup/41263',
  description: 'Award-winning VPN service with unlimited device connections and advanced security features',
  category: 'premium-vpn',
  tier: 'premium',
  rating: 4.8,
  features: [
    'Unlimited simultaneous connections',
    'CleanWeb ad blocker',
    'MultiHop double VPN',
    'Camouflage Mode',
    'Kill Switch',
    'No-logs policy',
    '3200+ servers in 100+ countries'
  ],
  pricing: {
    monthly: 12.95,
    yearly: 47.88,
    biennial: 59.76
  },
  commission: {
    rate: 'Variable',
    cookieDuration: 30,
    program: 'HasOffers'
  }
};

async function addSurfsharksPartner() {
  try {
    console.log('🦈 Adding Surfshark as premium partner...');
    
    // Add Surfshark to the affiliate system
    const result = await affiliateManager.addPremiumPartner(surfsharksConfig);
    
    if (result.success) {
      console.log('✅ Surfshark successfully added as premium partner!');
      console.log(`📊 Updated ${result.filesUpdated} files`);
      
      // Generate some sample tracking URLs
      console.log('\n🔗 Sample tracking URLs:');
      const sampleUrls = [
        affiliateManager.generateTrackingUrl('surfshark', 'homepage-hero'),
        affiliateManager.generateTrackingUrl('surfshark', 'comparison-table'),
        affiliateManager.generateTrackingUrl('surfshark', 'blog-review')
      ];
      
      sampleUrls.forEach((url, index) => {
        console.log(`   ${index + 1}. ${url}`);
      });
      
    } else {
      console.error('❌ Failed to add Surfshark:', result.error);
    }
    
  } catch (error) {
    console.error('💥 Error adding Surfshark partner:', error.message);
  }
}

// Run the script
addSurfsharksPartner();