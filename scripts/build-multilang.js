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
  
  // Ana sayfa olarak İngilizce versiyonunu kullan
  const indexPath = 'dist/en/index.html';
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, 'dist/index.html');
    log('Landing page created successfully (using English version)');
  } else {
    log('Warning: English version not found, creating simple redirect page');
    const simpleHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>bestvpn.digital</title>
  <script>
    window.location.href = '/en/';
  </script>
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>`;
    fs.writeFileSync('dist/index.html', simpleHTML);
  }
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
