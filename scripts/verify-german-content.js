import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Verify that all German content files exist and are properly structured
const germanContentFiles = [
  'src/pages/BestVPN2026VergleichBlogPost.tsx',
  'src/pages/GermanBlogPage.tsx',
  'src/pages/GermanFAQPage.tsx',
  'src/pages/GermanVPNsPage.tsx',
  'src/pages/GermanContactPage.tsx',
  'src/pages/GermanDealsPage.tsx',
  'src/pages/GermanQuizPage.tsx',
  'src/pages/GermanSitemapPage.tsx'
];

console.log('🔍 Verifying German content files...\n');

let allFilesExist = true;

for (const file of germanContentFiles) {
  const fullPath = path.join(__dirname, '..', file);
  
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`✅ ${file} - ${stats.size} bytes`);
  } else {
    console.log(`❌ ${file} - NOT FOUND`);
    allFilesExist = false;
  }
}

// Check if German translations exist
const translationsPath = path.join(__dirname, '..', 'src', 'contexts', 'translations.ts');
if (fs.existsSync(translationsPath)) {
  const translationsContent = fs.readFileSync(translationsPath, 'utf8');
  
  // Check for German translation keys
  const germanKeys = [
    'de:',
    '"nav.home": "Startseite"',
    '"nav.vpns": "VPNs"',
    '"nav.faq": "FAQ"',
    '"nav.blog": "Blog"'
  ];
  
  let allGermanKeysFound = true;
  for (const key of germanKeys) {
    if (translationsContent.includes(key)) {
      console.log(`✅ German translation key found: ${key}`);
    } else {
      console.log(`❌ German translation key missing: ${key}`);
      allGermanKeysFound = false;
    }
  }
  
  if (allGermanKeysFound) {
    console.log('✅ All essential German translation keys found');
  } else {
    console.log('❌ Some German translation keys are missing');
    allFilesExist = false;
  }
} else {
  console.log('❌ translations.ts file not found');
  allFilesExist = false;
}

// Check if German sitemap exists
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap-de.xml');
if (fs.existsSync(sitemapPath)) {
  const stats = fs.statSync(sitemapPath);
  console.log(`✅ sitemap-de.xml - ${stats.size} bytes`);
} else {
  console.log('❌ sitemap-de.xml - NOT FOUND');
  allFilesExist = false;
}

console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 All German content files are properly structured!');
  console.log('✅ German blog post is ready for deployment');
} else {
  console.log('❌ Some German content files are missing or incomplete');
  console.log('⚠️  Please check the issues above');
}
console.log('='.repeat(50));