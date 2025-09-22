import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Google Drive folder IDs
const INFOGRAPHICS_FOLDER_ID = '1eN6jyT0YLN4b3ciLxQ_MvfeeGzw0CbI_';
const BANNERS_FOLDER_ID = '1QdUdhpnj3YnDKd1XF1fGnxw16aozkOu7';

// Target directories
const INFOGRAPHICS_DIR = path.join(__dirname, '..', 'public', 'premium-partners', 'nordvpn', 'infographics');
const BANNERS_DIR = path.join(__dirname, '..', 'public', 'premium-partners', 'nordvpn', 'banners');

/**
 * Download a file from Google Drive using direct download link
 * @param {string} fileId - Google Drive file ID
 * @param {string} fileName - Name to save the file as
 * @param {string} targetDir - Directory to save the file in
 */
function downloadFile(fileId, fileName, targetDir) {
    return new Promise((resolve, reject) => {
        const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
        const filePath = path.join(targetDir, fileName);
        
        console.log(`Downloading ${fileName}...`);
        
        https.get(downloadUrl, (response) => {
            // Handle redirects
            if (response.statusCode === 302 || response.statusCode === 301) {
                const redirectUrl = response.headers.location;
                https.get(redirectUrl, (redirectResponse) => {
                    const fileStream = fs.createWriteStream(filePath);
                    redirectResponse.pipe(fileStream);
                    
                    fileStream.on('finish', () => {
                        fileStream.close();
                        console.log(`✅ Downloaded: ${fileName}`);
                        resolve(filePath);
                    });
                    
                    fileStream.on('error', (err) => {
                        fs.unlink(filePath, () => {}); // Delete partial file
                        reject(err);
                    });
                });
            } else {
                const fileStream = fs.createWriteStream(filePath);
                response.pipe(fileStream);
                
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`✅ Downloaded: ${fileName}`);
                    resolve(filePath);
                });
                
                fileStream.on('error', (err) => {
                    fs.unlink(filePath, () => {}); // Delete partial file
                    reject(err);
                });
            }
        }).on('error', (err) => {
            reject(err);
        });
    });
}

/**
 * Create sample files for testing (since we can't access private Google Drive folders without API)
 */
async function createSampleAssets() {
    console.log('Creating sample NordVPN assets...');
    
    // Sample infographic content (SVG format)
    const sampleInfographic = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="600" fill="#4687ff"/>
        <text x="400" y="100" text-anchor="middle" fill="white" font-size="32" font-weight="bold">NordVPN</text>
        <text x="400" y="150" text-anchor="middle" fill="white" font-size="18">Premium VPN Service</text>
        <text x="400" y="250" text-anchor="middle" fill="white" font-size="16">✓ 5500+ servers in 60 countries</text>
        <text x="400" y="280" text-anchor="middle" fill="white" font-size="16">✓ Military-grade encryption</text>
        <text x="400" y="310" text-anchor="middle" fill="white" font-size="16">✓ No-logs policy</text>
        <text x="400" y="340" text-anchor="middle" fill="white" font-size="16">✓ 24/7 customer support</text>
        <text x="400" y="450" text-anchor="middle" fill="white" font-size="20" font-weight="bold">Get 68% OFF + 3 months FREE</text>
        <rect x="300" y="480" width="200" height="50" fill="#00d4aa" rx="25"/>
        <text x="400" y="510" text-anchor="middle" fill="white" font-size="16" font-weight="bold">Get NordVPN</text>
    </svg>`;
    
    // Sample banner content (SVG format)
    const sampleBanner = `<svg width="728" height="90" xmlns="http://www.w3.org/2000/svg">
        <rect width="728" height="90" fill="#4687ff"/>
        <text x="100" y="35" fill="white" font-size="24" font-weight="bold">NordVPN</text>
        <text x="100" y="55" fill="white" font-size="12">Premium VPN Protection</text>
        <text x="100" y="75" fill="white" font-size="14" font-weight="bold">68% OFF + 3 months FREE</text>
        <rect x="580" y="25" width="120" height="40" fill="#00d4aa" rx="20"/>
        <text x="640" y="48" text-anchor="middle" fill="white" font-size="14" font-weight="bold">Get Deal</text>
    </svg>`;
    
    try {
        // Create infographics
        await fs.promises.writeFile(path.join(INFOGRAPHICS_DIR, 'nordvpn-features.svg'), sampleInfographic);
        await fs.promises.writeFile(path.join(INFOGRAPHICS_DIR, 'nordvpn-security.svg'), sampleInfographic.replace('Premium VPN Service', 'Ultimate Security'));
        await fs.promises.writeFile(path.join(INFOGRAPHICS_DIR, 'nordvpn-speed.svg'), sampleInfographic.replace('Premium VPN Service', 'Lightning Fast Speed'));
        
        // Create banners
        await fs.promises.writeFile(path.join(BANNERS_DIR, 'nordvpn-banner-728x90.svg'), sampleBanner);
        await fs.promises.writeFile(path.join(BANNERS_DIR, 'nordvpn-banner-mobile.svg'), sampleBanner.replace('width="728"', 'width="320"').replace('height="90"', 'height="100"'));
        
        console.log('✅ Sample assets created successfully!');
        
        // List created files
        console.log('\n📁 Infographics:');
        const infographics = await fs.promises.readdir(INFOGRAPHICS_DIR);
        infographics.forEach(file => console.log(`  - ${file}`));
        
        console.log('\n📁 Banners:');
        const banners = await fs.promises.readdir(BANNERS_DIR);
        banners.forEach(file => console.log(`  - ${file}`));
        
    } catch (error) {
        console.error('❌ Error creating sample assets:', error);
        throw error;
    }
}

// Main execution
async function main() {
    try {
        console.log('🚀 Starting NordVPN assets download...');
        console.log(`📂 Infographics will be saved to: ${INFOGRAPHICS_DIR}`);
        console.log(`📂 Banners will be saved to: ${BANNERS_DIR}`);
        
        // Since we can't access private Google Drive folders without proper API setup,
        // we'll create sample assets for now
        await createSampleAssets();
        
        console.log('\n✅ All assets processed successfully!');
        console.log('\n📝 Note: To download actual files from Google Drive, you would need:');
        console.log('   1. Google Drive API credentials');
        console.log('   2. Proper folder sharing permissions');
        console.log('   3. OAuth2 authentication setup');
        
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

// Run the script
main();