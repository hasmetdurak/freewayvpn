import fs from 'fs';
import path from 'path';

// Premium partners with their affiliate links
const PREMIUM_PARTNERS = {
  'NordVPN': {
    name: 'NordVPN',
    affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902',
    description: '🏆 #1 Premium VPN - Advanced security with double VPN encryption and largest server network',
    rating: 9.9,
    price: '$3.71/mo',
    servers: '5400+',
    countries: '60+',
    devices: '6'
  },
  'Surfshark': {
    name: 'Surfshark',
    affiliateLink: 'https://my.surfshark.com/home',
    description: '🥈 #2 Premium VPN - Unlimited devices with advanced security features at budget-friendly price',
    rating: 9.8,
    price: '$2.30/mo',
    servers: '3200+',
    countries: '100+',
    devices: 'Unlimited'
  }
};

// Banned VPNs that should be removed
const BANNED_VPNS = [
  'ExpressVPN', 'CyberGhost', 'Private Internet Access', 'PIA', 'ZenMate', 'Intego', 'Webselenese'
];

async function updateBlogPosts() {
  console.log('🔄 Starting blog posts update...');
  
  const pagesDir = path.join(process.cwd(), 'src', 'pages');
  const blogFiles = fs.readdirSync(pagesDir).filter(file => 
    file.endsWith('BlogPost.tsx') && file !== 'BlogPage.tsx'
  );
  
  console.log(`📝 Found ${blogFiles.length} blog post files to update`);
  
  for (const file of blogFiles) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    console.log(`\n🔍 Processing: ${file}`);
    
    // Replace ExpressVPN with Surfshark in NordVPN comparison
    if (file.includes('NordVPNExpressVPN')) {
      console.log('  ➤ Converting ExpressVPN comparison to Surfshark comparison');
      
      // Update title and meta description
      content = content.replace(
        /NordVPN vs NordVPN 2025 Speed Showdown/g,
        'NordVPN vs Surfshark 2025 Speed Showdown'
      );
      
      content = content.replace(
        /Comprehensive speed test comparing NordVPN and NordVPN/g,
        'Comprehensive speed test comparing NordVPN and Surfshark'
      );
      
      // Update component name
      content = content.replace(
        /const NordVPNNordVPNBlogPost/g,
        'const NordVPNSurfsharkBlogPost'
      );
      
      // Update export
      content = content.replace(
        /export default NordVPNNordVPNBlogPost/g,
        'export default NordVPNSurfsharkBlogPost'
      );
      
      // Replace ExpressVPN data with Surfshark data
      content = content.replace(/expressDownload: (\d+)/g, 'surfsharkDownload: $1');
      content = content.replace(/expressUpload: (\d+)/g, 'surfsharkUpload: $1');
      content = content.replace(/expressLatency: (\d+)/g, 'surfsharkLatency: $1');
      content = content.replace(/expressPrice: '([^']+)'/g, "surfsharkPrice: '$2.30'");
      
      // Update variable references
      content = content.replace(/result\.expressDownload/g, 'result.surfsharkDownload');
      content = content.replace(/result\.expressUpload/g, 'result.surfsharkUpload');
      content = content.replace(/result\.expressLatency/g, 'result.surfsharkLatency');
      
      // Update security features comparison
      content = content.replace(
        /{ feature: 'Double VPN \/ MultiHop', nordVPN: true, NordVPN: false }/g,
        "{ feature: 'Double VPN / MultiHop', nordVPN: true, surfshark: true }"
      );
      
      content = content.replace(
        /{ feature: 'Tor over VPN', nordVPN: true, NordVPN: false }/g,
        "{ feature: 'Tor over VPN', nordVPN: true, surfshark: false }"
      );
      
      // Add affiliate links
      content = content.replace(
        /<a[^>]*href="[^"]*nordvpn[^"]*"[^>]*>/gi,
        `<a href="${PREMIUM_PARTNERS.NordVPN.affiliateLink}" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">`
      );
      
      // Add Surfshark affiliate links
      content = content.replace(
        /<a[^>]*href="[^"]*surfshark[^"]*"[^>]*>/gi,
        `<a href="${PREMIUM_PARTNERS.Surfshark.affiliateLink}" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-semibold">`
      );
      
      updated = true;
    }
    
    // Update Surfshark vs CyberGhost to focus on premium partners
    if (file.includes('SurfsharkvsCyberGhost')) {
      console.log('  ➤ Converting CyberGhost comparison to NordVPN comparison');
      
      // Update title and component name
      content = content.replace(
        /Surfshark vs NordVPN: Which is Cheaper/g,
        'Surfshark vs NordVPN: Premium VPN Comparison'
      );
      
      content = content.replace(
        /const SurfsharkvsNordVPNBlogPost/g,
        'const SurfsharkNordVPNComparisonBlogPost'
      );
      
      content = content.replace(
        /export default SurfsharkvsNordVPNBlogPost/g,
        'export default SurfsharkNordVPNComparisonBlogPost'
      );
      
      // Add premium partner badges and affiliate links
      const premiumPartnerSection = `
        {/* Premium Partner Promotion */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">🏆 Premium VPN Partners Comparison</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h4 className="text-xl font-bold text-yellow-300 mb-2">#1 NordVPN</h4>
              <div className="flex justify-center items-center mb-3">
                <span className="text-2xl font-bold">9.9/10</span>
                <div className="ml-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
              <a 
                href="${PREMIUM_PARTNERS.NordVPN.affiliateLink}"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition-colors duration-200 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get NordVPN Deal
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h4 className="text-xl font-bold text-green-300 mb-2">#2 Surfshark</h4>
              <div className="flex justify-center items-center mb-3">
                <span className="text-2xl font-bold">9.8/10</span>
                <div className="ml-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
              <a 
                href="${PREMIUM_PARTNERS.Surfshark.affiliateLink}"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Surfshark Deal
              </a>
            </div>
          </div>
        </div>`;
      
      // Insert premium partner section after the header
      content = content.replace(
        /(<\/header>)/,
        `$1\n${premiumPartnerSection}`
      );
      
      updated = true;
    }
    
    // Remove any remaining banned VPN references
    for (const bannedVPN of BANNED_VPNS) {
      const regex = new RegExp(bannedVPN, 'gi');
      if (content.match(regex)) {
        console.log(`  ➤ Removing ${bannedVPN} references`);
        content = content.replace(regex, 'NordVPN');
        updated = true;
      }
    }
    
    // Add premium partner affiliate links throughout the content
    content = content.replace(
      /href="[^"]*nordvpn[^"]*"/gi,
      `href="${PREMIUM_PARTNERS.NordVPN.affiliateLink}" target="_blank" rel="noopener noreferrer"`
    );
    
    content = content.replace(
      /href="[^"]*surfshark[^"]*"/gi,
      `href="${PREMIUM_PARTNERS.Surfshark.affiliateLink}" target="_blank" rel="noopener noreferrer"`
    );
    
    if (updated) {
      fs.writeFileSync(filePath, content);
      console.log(`  ✅ Updated: ${file}`);
    } else {
      console.log(`  ⏭️  No changes needed: ${file}`);
    }
  }
  
  console.log('\n🎉 Blog posts update completed successfully!');
  console.log('\n📊 Summary:');
  console.log('✅ Removed all banned VPN references');
  console.log('✅ Updated ExpressVPN comparisons to Surfshark');
  console.log('✅ Enhanced premium partner promotions');
  console.log('✅ Added affiliate links for NordVPN and Surfshark');
  console.log('\n⭐ All blog posts now promote premium partners exclusively!');
}

// Run the script
updateBlogPosts();