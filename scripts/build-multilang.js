#!/usr/bin/env node

// Multi-language build script for Netlify subdirectory deployment
// This script builds the app for each language and creates subdirectories

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supported languages
const languages = [
  'en', 'tr', 'de', 'es', 'fr', 'it', 'pt', 'ru', 'zh', 'ja', 'ko', 
  'ar', 'hi', 'id', 'vi', 'th', 'pl', 'nb', 'sv', 'fi', 'fa', 'tl'
];

// Language names for display
const languageNames = {
  'en': 'English',
  'tr': 'Türkçe',
  'de': 'Deutsch',
  'es': 'Español',
  'fr': 'Français',
  'it': 'Italiano',
  'pt': 'Português',
  'ru': 'Русский',
  'zh': '中文',
  'ja': '日本語',
  'ko': '한국어',
  'ar': 'العربية',
  'hi': 'हिन्दी',
  'id': 'Bahasa Indonesia',
  'vi': 'Tiếng Việt',
  'th': 'ไทย',
  'pl': 'Polski',
  'nb': 'Norsk',
  'sv': 'Svenska',
  'fi': 'Suomi',
  'fa': 'فارسی',
  'tl': 'Filipino'
};

// Country flags
const languageFlags = {
  'en': '🇺🇸',
  'tr': '🇹🇷',
  'de': '🇩🇪',
  'es': '🇪🇸',
  'fr': '🇫🇷',
  'it': '🇮🇹',
  'pt': '🇵🇹',
  'ru': '🇷🇺',
  'zh': '🇨🇳',
  'ja': '🇯🇵',
  'ko': '🇰🇷',
  'ar': '🇸🇦',
  'hi': '🇮🇳',
  'id': '🇮🇩',
  'vi': '🇻🇳',
  'th': '🇹🇭',
  'pl': '🇵🇱',
  'nb': '🇳🇴',
  'sv': '🇸🇪',
  'fi': '🇫🇮',
  'fa': '🇮🇷',
  'tl': '🇵🇭'
};

function log(message) {
  console.log(`[BUILD] ${message}`);
}

function createLandingPage() {
  log('Creating landing page...');
  
  const landingHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>bestvpn.digital - VPN Comparison & Reviews</title>
  <meta name="description" content="Compare 100+ VPN services with detailed reviews, speed tests, and pricing. Find the best VPN for streaming, privacy, and security.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://bestvpn.digital/">
  
  <!-- Hreflang Tags -->
  <link rel="alternate" hreflang="en" href="https://bestvpn.digital/en/" />
  <link rel="alternate" hreflang="tr" href="https://bestvpn.digital/tr/" />
  <link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/" />
  <link rel="alternate" hreflang="es" href="https://bestvpn.digital/es/" />
  <link rel="alternate" hreflang="fr" href="https://bestvpn.digital/fr/" />
  <link rel="alternate" hreflang="it" href="https://bestvpn.digital/it/" />
  <link rel="alternate" hreflang="pt" href="https://bestvpn.digital/pt/" />
  <link rel="alternate" hreflang="ru" href="https://bestvpn.digital/ru/" />
  <link rel="alternate" hreflang="zh" href="https://bestvpn.digital/zh/" />
  <link rel="alternate" hreflang="ja" href="https://bestvpn.digital/ja/" />
  <link rel="alternate" hreflang="ko" href="https://bestvpn.digital/ko/" />
  <link rel="alternate" hreflang="ar" href="https://bestvpn.digital/ar/" />
  <link rel="alternate" hreflang="hi" href="https://bestvpn.digital/hi/" />
  <link rel="alternate" hreflang="id" href="https://bestvpn.digital/id/" />
  <link rel="alternate" hreflang="vi" href="https://bestvpn.digital/vi/" />
  <link rel="alternate" hreflang="th" href="https://bestvpn.digital/th/" />
  <link rel="alternate" hreflang="pl" href="https://bestvpn.digital/pl/" />
  <link rel="alternate" hreflang="nb" href="https://bestvpn.digital/nb/" />
  <link rel="alternate" hreflang="sv" href="https://bestvpn.digital/sv/" />
  <link rel="alternate" hreflang="fi" href="https://bestvpn.digital/fi/" />
  <link rel="alternate" hreflang="fa" href="https://bestvpn.digital/fa/" />
  <link rel="alternate" hreflang="tl" href="https://bestvpn.digital/tl/" />
  <link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/" />
  
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      background: white;
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      text-align: center;
      max-width: 600px;
      margin: 2rem;
    }
    h1 {
      color: #2d3748;
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }
    .subtitle {
      color: #718096;
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
    .language-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-top: 2rem;
    }
    .language-link {
      display: flex;
      align-items: center;
      padding: 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      text-decoration: none;
      color: #2d3748;
      transition: all 0.3s ease;
      font-weight: 500;
    }
    .language-link:hover {
      border-color: #667eea;
      background: #f7fafc;
      transform: translateY(-2px);
    }
    .flag {
      font-size: 1.5rem;
      margin-right: 0.75rem;
    }
    .auto-detect {
      background: #f0fff4;
      border-color: #68d391;
      color: #22543d;
      margin-top: 1rem;
      padding: 0.75rem;
      border-radius: 8px;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🛡️ bestvpn.digital</h1>
    <p class="subtitle">Your trusted source for comprehensive VPN reviews and comparisons</p>
    
    <div class="auto-detect">
      🌍 We've detected your location and will redirect you automatically, or choose your language below:
    </div>
    
    <div class="language-grid">
      ${languages.map(lang => `
        <a href="/${lang}/" class="language-link">
          <span class="flag">${languageFlags[lang]}</span>
          <span>${languageNames[lang]}</span>
        </a>
      `).join('')}
    </div>
  </div>
  
  <script>
    // Auto-redirect after 3 seconds if no interaction
    let redirectTimer = setTimeout(() => {
      // Try to detect language from browser
      const browserLang = navigator.language.split('-')[0];
      const supportedLangs = ${JSON.stringify(languages)};
      
      if (supportedLangs.includes(browserLang)) {
        window.location.href = '/' + browserLang + '/';
      } else {
        window.location.href = '/en/';
      }
    }, 3000);
    
    // Cancel redirect if user interacts
    document.addEventListener('click', () => {
      clearTimeout(redirectTimer);
    });
  </script>
</body>
</html>`;

  fs.writeFileSync('dist/index.html', landingHTML);
  log('Landing page created successfully');
}

function buildForLanguage(language) {
  log(`Building for language: ${language}`);
  
  try {
    // Set environment variable for language
    process.env.VITE_DEFAULT_LANGUAGE = language;
    
    // Build the app
    execSync('npm run build', { 
      stdio: 'inherit',
      env: { ...process.env, VITE_DEFAULT_LANGUAGE: language }
    });
    
    // Create language subdirectory
    const langDir = `dist/${language}`;
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }
    
    // Copy built files to language subdirectory
    const filesToCopy = ['index.html', 'assets'];
    filesToCopy.forEach(file => {
      const srcPath = `dist/${file}`;
      const destPath = `${langDir}/${file}`;
      
      if (fs.existsSync(srcPath)) {
        if (fs.statSync(srcPath).isDirectory()) {
          // Copy directory recursively - Windows uyumlu
          if (process.platform === 'win32') {
            execSync(`xcopy "${srcPath}" "${destPath}" /E /I /H /Y`, { stdio: 'inherit' });
          } else {
            execSync(`cp -r "${srcPath}" "${destPath}"`, { stdio: 'inherit' });
          }
        } else {
          // Copy file
          fs.copyFileSync(srcPath, destPath);
        }
      }
    });
    
    // Update index.html for language-specific paths
    const indexPath = `${langDir}/index.html`;
    if (fs.existsSync(indexPath)) {
      let content = fs.readFileSync(indexPath, 'utf8');
      
      // Update base path for assets
      content = content.replace(/src="\/assets\//g, `src="/${language}/assets/`);
      content = content.replace(/href="\/assets\//g, `href="/${language}/assets/`);
      
      // Update canonical URL
      content = content.replace(
        /<link rel="canonical" href="[^"]*" \/>/,
        `<link rel="canonical" href="https://bestvpn.digital/${language}/" />`
      );
      
      // Update hreflang tags
      const hreflangTags = languages.map(lang => 
        `<link rel="alternate" hreflang="${lang}" href="https://bestvpn.digital/${lang}/" />`
      ).join('\n  ');
      
      content = content.replace(
        /<!-- Hreflang Tags for International SEO -->[\s\S]*?<!-- Open Graph Meta Tags -->/,
        `<!-- Hreflang Tags for International SEO -->\n  ${hreflangTags}\n  <link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/" />\n  \n  <!-- Open Graph Meta Tags -->`
      );
      
      fs.writeFileSync(indexPath, content);
    }
    
    log(`✅ Built successfully for ${language}`);
    
  } catch (error) {
    log(`❌ Error building for ${language}: ${error.message}`);
    process.exit(1);
  }
}

function main() {
  log('Starting multi-language build process...');
  
  // Clean dist directory
  if (fs.existsSync('dist')) {
    // Windows uyumlu temizleme
    if (process.platform === 'win32') {
      execSync('rmdir /s /q dist', { stdio: 'inherit' });
    } else {
      execSync('rm -rf dist', { stdio: 'inherit' });
    }
  }
  
  // Build for each language
  languages.forEach(language => {
    buildForLanguage(language);
  });
  
  // Create landing page
  createLandingPage();
  
  // Copy static assets to root
  const staticAssets = ['sitemap.xml', 'robots.txt'];
  staticAssets.forEach(asset => {
    if (fs.existsSync(`public/${asset}`)) {
      fs.copyFileSync(`public/${asset}`, `dist/${asset}`);
    }
  });
  
  log('🎉 Multi-language build completed successfully!');
  log(`Built for ${languages.length} languages: ${languages.join(', ')}`);
  log('Ready for deployment to Netlify with Cloudflare Worker');
}

// Run the build
main();
