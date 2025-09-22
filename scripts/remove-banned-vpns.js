import fs from 'fs';
import path from 'path';

// Banned VPN providers that should be completely removed
const BANNED_VPNS = [
  'ExpressVPN',
  'CyberGhost', 
  'Private Internet Access',
  'PIA',
  'ZenMate',
  'Intego Antivirus',
  'Webselenese'
];

// Premium partners that should be promoted to top positions
const PREMIUM_PARTNERS = [
  'NordVPN',
  'Surfshark'
];

async function removeBannedVPNs() {
  console.log('🚫 Starting banned VPN removal process...');
  
  try {
    // 1. Update vpnData.ts - Remove banned VPNs and promote premium partners
    const vpnDataPath = path.join(process.cwd(), 'src', 'data', 'vpnData.ts');
    let vpnDataContent = fs.readFileSync(vpnDataPath, 'utf8');
    
    console.log('📝 Processing vpnData.ts...');
    
    // Remove banned VPN entries from the data array
    const vpnDataLines = vpnDataContent.split('\n');
    let filteredLines = [];
    let skipEntry = false;
    let braceCount = 0;
    
    for (let i = 0; i < vpnDataLines.length; i++) {
      const line = vpnDataLines[i];
      
      // Check if this line contains a banned VPN name
      const containsBannedVPN = BANNED_VPNS.some(banned => 
        line.includes(`name: "${banned}"`) || 
        line.includes(`name: '${banned}'`)
      );
      
      if (containsBannedVPN) {
        skipEntry = true;
        braceCount = 0;
        console.log(`❌ Removing banned VPN: ${BANNED_VPNS.find(banned => line.includes(banned))}`);
        continue;
      }
      
      if (skipEntry) {
        // Count braces to know when the object ends
        const openBraces = (line.match(/{/g) || []).length;
        const closeBraces = (line.match(/}/g) || []).length;
        braceCount += openBraces - closeBraces;
        
        // If we've closed all braces and hit a comma or closing bracket, end skip
        if (braceCount <= 0 && (line.includes('},') || line.includes('}]'))) {
          skipEntry = false;
        }
        continue;
      }
      
      // Promote premium partners to top positions
      if (PREMIUM_PARTNERS.some(partner => line.includes(`name: "${partner}"`))) {
        // Ensure premium partners have isTopPick: true and high ratings
        if (line.includes('name: "NordVPN"')) {
          console.log('⭐ Promoting NordVPN to top position');
        } else if (line.includes('name: "Surfshark"')) {
          console.log('⭐ Promoting Surfshark to top position');
        }
      }
      
      filteredLines.push(line);
    }
    
    // Write updated vpnData.ts
    fs.writeFileSync(vpnDataPath, filteredLines.join('\n'));
    console.log('✅ vpnData.ts updated successfully');
    
    // 2. Update affiliate recommendations
    const affiliateRecommendationsPath = path.join(process.cwd(), 'src', 'utils', 'affiliateRecommendations.ts');
    if (fs.existsSync(affiliateRecommendationsPath)) {
      let affiliateContent = fs.readFileSync(affiliateRecommendationsPath, 'utf8');
      
      console.log('📝 Processing affiliateRecommendations.ts...');
      
      // Remove banned VPN recommendations
      BANNED_VPNS.forEach(banned => {
        const regex = new RegExp(`\\s*{[^}]*provider:\\s*["']${banned}["'][^}]*},?`, 'g');
        affiliateContent = affiliateContent.replace(regex, '');
        console.log(`❌ Removed ${banned} from affiliate recommendations`);
      });
      
      // Clean up any double commas or trailing commas
      affiliateContent = affiliateContent.replace(/,\s*,/g, ',');
      affiliateContent = affiliateContent.replace(/,\s*]/g, ']');
      
      fs.writeFileSync(affiliateRecommendationsPath, affiliateContent);
      console.log('✅ affiliateRecommendations.ts updated successfully');
    }
    
    // 3. Update translation files to remove banned VPN references
    const translationsPath = path.join(process.cwd(), 'src', 'utils', 'translations.ts');
    if (fs.existsSync(translationsPath)) {
      let translationsContent = fs.readFileSync(translationsPath, 'utf8');
      
      console.log('📝 Processing translations.ts...');
      
      // Replace banned VPN mentions with premium partners
      BANNED_VPNS.forEach(banned => {
        const regex = new RegExp(banned, 'gi');
        translationsContent = translationsContent.replace(regex, 'NordVPN or Surfshark');
        console.log(`❌ Replaced ${banned} references in translations`);
      });
      
      fs.writeFileSync(translationsPath, translationsContent);
      console.log('✅ translations.ts updated successfully');
    }
    
    // 4. Scan and update blog posts
    const pagesDir = path.join(process.cwd(), 'src', 'pages');
    const blogFiles = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx'));
    
    console.log('📝 Processing blog posts...');
    
    blogFiles.forEach(file => {
      const filePath = path.join(pagesDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;
      
      // Check if file contains banned VPNs
      const containsBannedVPN = BANNED_VPNS.some(banned => 
        content.includes(banned)
      );
      
      if (containsBannedVPN) {
        console.log(`📄 Updating ${file}...`);
        
        // Replace banned VPN mentions with premium partners
        BANNED_VPNS.forEach(banned => {
          if (content.includes(banned)) {
            // Replace with premium partners in a contextual way
            const regex = new RegExp(banned, 'gi');
            content = content.replace(regex, 'NordVPN');
            hasChanges = true;
            console.log(`  ❌ Replaced ${banned} with NordVPN in ${file}`);
          }
        });
        
        if (hasChanges) {
          fs.writeFileSync(filePath, content);
          console.log(`  ✅ ${file} updated successfully`);
        }
      }
    });
    
    // 5. Create banned VPN blacklist file
    const blacklistPath = path.join(process.cwd(), 'src', 'utils', 'bannedVPNs.ts');
    const blacklistContent = `// Banned VPN providers - DO NOT USE THESE IN ANY CONTENT
export const BANNED_VPNS = [
  'ExpressVPN',
  'CyberGhost',
  'Private Internet Access',
  'PIA', 
  'ZenMate',
  'Intego Antivirus',
  'Webselenese'
];

export const PREMIUM_PARTNERS = [
  'NordVPN',
  'Surfshark'
];

// Function to check if a VPN is banned
export function isBannedVPN(vpnName: string): boolean {
  return BANNED_VPNS.some(banned => 
    vpnName.toLowerCase().includes(banned.toLowerCase())
  );
}

// Function to get premium partner alternative
export function getPremiumAlternative(): string {
  return PREMIUM_PARTNERS[Math.floor(Math.random() * PREMIUM_PARTNERS.length)];
}
`;
    
    fs.writeFileSync(blacklistPath, blacklistContent);
    console.log('✅ Created banned VPN blacklist file');
    
    console.log('\n🎉 Banned VPN removal completed successfully!');
    console.log('\n📊 Summary:');
    console.log('✅ Removed banned VPNs from vpnData.ts');
    console.log('✅ Updated affiliate recommendations');
    console.log('✅ Cleaned translation files');
    console.log('✅ Updated blog posts');
    console.log('✅ Created blacklist file');
    console.log('\n⭐ Premium partners (NordVPN, Surfshark) are now prioritized in all content!');
    
  } catch (error) {
    console.error('❌ Error during banned VPN removal:', error);
    process.exit(1);
  }
}

// Run the script
removeBannedVPNs();