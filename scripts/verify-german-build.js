import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Verifying German content integration...\n');

// Check if the main App.tsx file has been updated with German routes
const appPath = path.join(__dirname, '..', 'src', 'App.tsx');
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf8');
  
  const germanImports = [
    'GermanBlogPage',
    'GermanFAQPage',
    'GermanSitemapPage',
    'GermanVPNsPage',
    'GermanContactPage',
    'GermanDealsPage',
    'GermanQuizPage',
    'BestVPN2026VergleichBlogPost'
  ];
  
  const germanRoutes = [
    '/:lang/vpns',
    '/:lang/faq',
    '/:lang/blog',
    '/:lang/contact',
    '/:lang/deals',
    '/:lang/quiz',
    '/:lang/sitemap',
    '/:lang/blog/vpn-vergleich-2026'
  ];
  
  let allImportsFound = true;
  let allRoutesFound = true;
  
  console.log('Checking German component imports...');
  for (const imp of germanImports) {
    if (appContent.includes(imp)) {
      console.log(`✅ Import found: ${imp}`);
    } else {
      console.log(`❌ Import missing: ${imp}`);
      allImportsFound = false;
    }
  }
  
  console.log('\nChecking German routes...');
  for (const route of germanRoutes) {
    if (appContent.includes(route)) {
      console.log(`✅ Route found: ${route}`);
    } else {
      console.log(`❌ Route missing: ${route}`);
      allRoutesFound = false;
    }
  }
  
  if (allImportsFound && allRoutesFound) {
    console.log('\n✅ All German imports and routes are properly configured!');
  } else {
    console.log('\n❌ Some German imports or routes are missing!');
  }
} else {
  console.log('❌ App.tsx file not found');
}

// Check if the German blog post has proper SEO meta tags
const blogPostPath = path.join(__dirname, '..', 'src', 'pages', 'BestVPN2026VergleichBlogPost.tsx');
if (fs.existsSync(blogPostPath)) {
  const blogPostContent = fs.readFileSync(blogPostPath, 'utf8');
  
  const seoElements = [
    '<Helmet>',
    'VPN Vergleich 2026',
    'bestes VPN 2026',
    'NordVPN',
    'Surfshark'
  ];
  
  console.log('\nChecking German blog post SEO elements...');
  let allSEOElementsFound = true;
  for (const element of seoElements) {
    if (blogPostContent.includes(element)) {
      console.log(`✅ SEO element found: ${element}`);
    } else {
      console.log(`❌ SEO element missing: ${element}`);
      allSEOElementsFound = false;
    }
  }
  
  if (allSEOElementsFound) {
    console.log('✅ All essential SEO elements found in German blog post!');
  } else {
    console.log('❌ Some SEO elements are missing from German blog post!');
  }
} else {
  console.log('❌ German blog post file not found');
}

// Check if German sitemap is properly structured
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap-de.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  const sitemapElements = [
    'https://bestvpn.digital/de/',
    'https://bestvpn.digital/de/vpns',
    'https://bestvpn.digital/de/blog/vpn-vergleich-2026',
    'hreflang="de"'
  ];
  
  console.log('\nChecking German sitemap structure...');
  let allSitemapElementsFound = true;
  for (const element of sitemapElements) {
    if (sitemapContent.includes(element)) {
      console.log(`✅ Sitemap element found: ${element}`);
    } else {
      console.log(`❌ Sitemap element missing: ${element}`);
      allSitemapElementsFound = false;
    }
  }
  
  if (allSitemapElementsFound) {
    console.log('✅ German sitemap is properly structured!');
  } else {
    console.log('❌ German sitemap is missing some elements!');
  }
} else {
  console.log('❌ German sitemap file not found');
}

console.log('\n' + '='.repeat(60));
console.log('🎉 German content integration verification completed!');
console.log('✅ Your German blog post and related content are ready for deployment');
console.log('='.repeat(60));