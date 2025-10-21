/**
 * Sitemap Generator for bestvpn.digital
 * Generates comprehensive XML sitemaps for all pages and languages
 * Run: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://bestvpn.digital';
const OUTPUT_DIR = path.join(__dirname, '..', 'public');
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// Supported languages
const LANGUAGES = [
  'en', 'de', 'fr', 'es', 'it', 'ru', 'zh', 'ja', 'ko',
  'ar', 'fa', 'hi', 'id', 'vi', 'tr', 'nb', 'sv', 'fi',
  'pl', 'th', 'tl', 'pt'
];

// Asian market languages (special focus for Naver, Baidu, Yandex)
const ASIAN_LANGUAGES = ['ko', 'zh', 'ja'];

// Static pages
const STATIC_PAGES = [
  { path: '', priority: 1.0, changefreq: 'daily' },
  { path: '/vpns', priority: 1.0, changefreq: 'daily' },
  { path: '/faq', priority: 0.9, changefreq: 'weekly' },
  { path: '/blog', priority: 0.9, changefreq: 'daily' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' },
  { path: '/deals', priority: 0.9, changefreq: 'daily' },
  { path: '/quiz', priority: 0.8, changefreq: 'weekly' },
  { path: '/stream-test', priority: 0.8, changefreq: 'weekly' }
];

// Blog posts (read from blogData.ts)
const BLOG_POSTS = [
  'netflix-deutschland-vpn-2025',
  'ard-mediathek-vpn-ausland-2025',
  'nordvpn-online-banking-deutschland-2025',
  'rtl-plus-vpn-ausland-2025',
  'streaming-vpn-2025',
  'vpn-proxy-guide-2025',
  'vpn-china-guide-2025',
  'nordvpn-surfshark-speed-test-2025',
  'surfshark-nordvpn-price-comparison-2025',
  'streaming-wars-2025-nordvpn-surfshark-comparison',
  'mobile-legends-vpn-low-ping-test-2025',
  'business-vpn-showdown-2025',
  'uae-sports-vpn-nordvpn-surfshark-2025',
  '5-eye-14-eye-vpn-comparison-2025',
  'macbook-m3-vpn-battery-drain-test-2025',
  'linux-cli-vpn-speed-duel-2025',
  'netflix-japan-vpn-2025',
  'korean-drama-vpn-2025',
  'gaming-vpn-2025',
  'pubg-mobile-kr-vpn-2025',
  'demon-slayer-netflix-vpn-2025',
  'netflix-korea-vpn-2025',
  'wavve-vpn-overseas-2025',
  'tving-vpn-overseas-2025',
  'coupang-play-vpn-overseas-2025'
];

/**
 * Generate XML sitemap header
 */
function generateSitemapHeader() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;
}

/**
 * Generate URL entry with hreflang alternates
 */
function generateUrlEntry(loc, priority, changefreq, lastmod = CURRENT_DATE, alternates = []) {
  let entry = `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
`;

  // Add hreflang alternates
  alternates.forEach(alt => {
    entry += `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />
`;
  });

  entry += `  </url>
`;
  return entry;
}

/**
 * Generate main sitemap (multilingual)
 */
function generateMainSitemap() {
  let sitemap = generateSitemapHeader();

  STATIC_PAGES.forEach(page => {
    // Generate alternates for all languages
    const alternates = LANGUAGES.map(lang => ({
      lang: lang === 'en' ? 'x-default' : lang,
      url: lang === 'en' ? `${DOMAIN}${page.path}` : `${DOMAIN}/${lang}${page.path}`
    }));

    // Add x-default
    alternates.unshift({
      lang: 'x-default',
      url: `${DOMAIN}${page.path}`
    });

    // English version (default)
    sitemap += generateUrlEntry(
      `${DOMAIN}${page.path}`,
      page.priority,
      page.changefreq,
      CURRENT_DATE,
      alternates
    );

    // Other languages
    LANGUAGES.forEach(lang => {
      if (lang !== 'en') {
        sitemap += generateUrlEntry(
          `${DOMAIN}/${lang}${page.path}`,
          page.priority,
          page.changefreq,
          CURRENT_DATE,
          alternates
        );
      }
    });
  });

  sitemap += '</urlset>';
  return sitemap;
}

/**
 * Generate blog sitemap
 */
function generateBlogSitemap() {
  let sitemap = generateSitemapHeader();

  BLOG_POSTS.forEach(slug => {
    // Blog posts with language alternates
    const alternates = LANGUAGES.map(lang => ({
      lang,
      url: lang === 'en' ? `${DOMAIN}/blog/${slug}` : `${DOMAIN}/${lang}/blog/${slug}`
    }));

    alternates.unshift({
      lang: 'x-default',
      url: `${DOMAIN}/blog/${slug}`
    });

    // English version
    sitemap += generateUrlEntry(
      `${DOMAIN}/blog/${slug}`,
      0.8,
      'weekly',
      CURRENT_DATE,
      alternates
    );

    // Other languages
    LANGUAGES.forEach(lang => {
      if (lang !== 'en') {
        sitemap += generateUrlEntry(
          `${DOMAIN}/${lang}/blog/${slug}`,
          0.8,
          'weekly',
          CURRENT_DATE,
          alternates
        );
      }
    });
  });

  sitemap += '</urlset>';
  return sitemap;
}

/**
 * Generate sitemap index (pointing to all sitemaps)
 */
function generateSitemapIndex() {
  let index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap-main.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-blog.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
`;

  LANGUAGES.forEach(lang => {
    index += `  <sitemap>
    <loc>${DOMAIN}/sitemap-${lang}.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
`;
  });

  // Add Asian market sitemaps
  ASIAN_LANGUAGES.forEach(lang => {
    index += `  <sitemap>
    <loc>${DOMAIN}/sitemap-asian-${lang}.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
`;
  });

  // Add specialized sitemaps
  index += `  <sitemap>
    <loc>${DOMAIN}/sitemap-naver.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-baidu.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemap-yandex.xml</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
  </sitemap>
`;

  index += '</sitemapindex>';
  return index;
}

/**
 * Generate language-specific sitemap
 */
function generateLanguageSitemap(lang) {
  let sitemap = generateSitemapHeader();
  const langPrefix = lang === 'en' ? '' : `/${lang}`;

  STATIC_PAGES.forEach(page => {
    sitemap += generateUrlEntry(
      `${DOMAIN}${langPrefix}${page.path}`,
      page.priority,
      page.changefreq,
      CURRENT_DATE
    );
  });

  BLOG_POSTS.forEach(slug => {
    sitemap += generateUrlEntry(
      `${DOMAIN}${langPrefix}/blog/${slug}`,
      0.8,
      'weekly',
      CURRENT_DATE
    );
  });

  sitemap += '</urlset>';
  return sitemap;
}

/**
 * Generate specialized sitemap for Asian markets (Naver, Baidu, Yandex)
 */
function generateAsianMarketSitemap(lang) {
  let sitemap = generateSitemapHeader();
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  
  // Add special priority for Asian market content
  STATIC_PAGES.forEach(page => {
    // Increase priority for Asian markets
    const priority = page.priority < 1.0 ? Math.min(1.0, page.priority + 0.1) : page.priority;
    
    sitemap += generateUrlEntry(
      `${DOMAIN}${langPrefix}${page.path}`,
      priority,
      page.changefreq,
      CURRENT_DATE
    );
  });

  // Special focus on blog posts relevant to Asian markets
  BLOG_POSTS.forEach(slug => {
    // Increase priority for Asian market related content
    let priority = 0.8;
    
    // Boost priority for Asia-related content
    if (slug.includes('korean') || slug.includes('japan') || slug.includes('china') || 
        slug.includes('korea') || slug.includes('japanese') || slug.includes('chinese')) {
      priority = 0.9;
    }
    
    sitemap += generateUrlEntry(
      `${DOMAIN}${langPrefix}/blog/${slug}`,
      priority,
      'weekly',
      CURRENT_DATE
    );
  });

  sitemap += '</urlset>';
  return sitemap;
}

/**
 * Generate Naver-specific sitemap
 */
function generateNaverSitemap() {
  let sitemap = generateSitemapHeader();
  
  // Focus on Korean content
  const koreanPages = STATIC_PAGES.map(page => ({
    ...page,
    priority: page.priority < 1.0 ? Math.min(1.0, page.priority + 0.2) : page.priority
  }));
  
  koreanPages.forEach(page => {
    sitemap += generateUrlEntry(
      `${DOMAIN}/ko${page.path}`,
      page.priority,
      page.changefreq,
      CURRENT_DATE
    );
  });

  // Korean-specific blog posts with higher priority
  BLOG_POSTS.forEach(slug => {
    let priority = 0.8;
    
    // Boost Korean-related content
    if (slug.includes('korean') || slug.includes('korea') || slug.includes('kr')) {
      priority = 1.0;
    }
    
    sitemap += generateUrlEntry(
      `${DOMAIN}/ko/blog/${slug}`,
      priority,
      'weekly',
      CURRENT_DATE
    );
  });

  sitemap += '</urlset>';
  return sitemap;
}

/**
 * Generate Baidu-specific sitemap
 */
function generateBaiduSitemap() {
  let sitemap = generateSitemapHeader();
  
  // Focus on Chinese content
  const chinesePages = STATIC_PAGES.map(page => ({
    ...page,
    priority: page.priority < 1.0 ? Math.min(1.0, page.priority + 0.2) : page.priority
  }));
  
  chinesePages.forEach(page => {
    sitemap += generateUrlEntry(
      `${DOMAIN}/zh${page.path}`,
      page.priority,
      page.changefreq,
      CURRENT_DATE
    );
  });

  // Chinese-specific blog posts with higher priority
  BLOG_POSTS.forEach(slug => {
    let priority = 0.8;
    
    // Boost Chinese-related content
    if (slug.includes('china') || slug.includes('chinese')) {
      priority = 1.0;
    }
    
    sitemap += generateUrlEntry(
      `${DOMAIN}/zh/blog/${slug}`,
      priority,
      'weekly',
      CURRENT_DATE
    );
  });

  sitemap += '</urlset>';
  return sitemap;
}

/**
 * Generate Yandex-specific sitemap
 */
function generateYandexSitemap() {
  let sitemap = generateSitemapHeader();
  
  // Focus on Russian content
  const russianPages = STATIC_PAGES.map(page => ({
    ...page,
    priority: page.priority < 1.0 ? Math.min(1.0, page.priority + 0.1) : page.priority
  }));
  
  russianPages.forEach(page => {
    sitemap += generateUrlEntry(
      `${DOMAIN}/ru${page.path}`,
      page.priority,
      page.changefreq,
      CURRENT_DATE
    );
  });

  // Russian-specific blog posts
  BLOG_POSTS.forEach(slug => {
    sitemap += generateUrlEntry(
      `${DOMAIN}/ru/blog/${slug}`,
      0.8,
      'weekly',
      CURRENT_DATE
    );
  });

  sitemap += '</urlset>';
  return sitemap;
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Generating sitemaps for bestvpn.digital...\n');

  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Generate main sitemap
    console.log('📝 Generating main sitemap...');
    const mainSitemap = generateMainSitemap();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-main.xml'), mainSitemap);
    console.log('✅ sitemap-main.xml created');

    // Generate blog sitemap
    console.log('📝 Generating blog sitemap...');
    const blogSitemap = generateBlogSitemap();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-blog.xml'), blogSitemap);
    console.log('✅ sitemap-blog.xml created');

    // Generate language-specific sitemaps
    console.log('📝 Generating language-specific sitemaps...');
    LANGUAGES.forEach(lang => {
      const langSitemap = generateLanguageSitemap(lang);
      fs.writeFileSync(path.join(OUTPUT_DIR, `sitemap-${lang}.xml`), langSitemap);
      console.log(`✅ sitemap-${lang}.xml created`);
    });

    // Generate specialized sitemaps for Asian markets
    console.log('📝 Generating Asian market sitemaps...');
    ASIAN_LANGUAGES.forEach(lang => {
      const asianSitemap = generateAsianMarketSitemap(lang);
      fs.writeFileSync(path.join(OUTPUT_DIR, `sitemap-asian-${lang}.xml`), asianSitemap);
      console.log(`✅ sitemap-asian-${lang}.xml created`);
    });

    // Generate Naver-specific sitemap
    console.log('📝 Generating Naver sitemap...');
    const naverSitemap = generateNaverSitemap();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-naver.xml'), naverSitemap);
    console.log('✅ sitemap-naver.xml created');

    // Generate Baidu-specific sitemap
    console.log('📝 Generating Baidu sitemap...');
    const baiduSitemap = generateBaiduSitemap();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-baidu.xml'), baiduSitemap);
    console.log('✅ sitemap-baidu.xml created');

    // Generate Yandex-specific sitemap
    console.log('📝 Generating Yandex sitemap...');
    const yandexSitemap = generateYandexSitemap();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap-yandex.xml'), yandexSitemap);
    console.log('✅ sitemap-yandex.xml created');

    // Generate sitemap index
    console.log('📝 Generating sitemap index...');
    const sitemapIndex = generateSitemapIndex();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'sitemap.xml'), sitemapIndex);
    console.log('✅ sitemap.xml (index) created');

    console.log('\n🎉 All sitemaps generated successfully!');
    console.log(`📍 Location: ${OUTPUT_DIR}`);
    console.log(`📊 Total sitemaps: ${6 + LANGUAGES.length + ASIAN_LANGUAGES.length}`);
    console.log(`📄 Total URLs: ~${(STATIC_PAGES.length + BLOG_POSTS.length) * (LANGUAGES.length + 1)}`);
    console.log('\n🔗 Submit to:');
    console.log('   - Google Search Console: https://search.google.com/search-console');
    console.log('   - Bing Webmaster Tools: https://www.bing.com/webmasters');
    console.log('   - Yandex Webmaster: https://webmaster.yandex.com');
    console.log('   - Baidu Webmaster Tools: https://ziyuan.baidu.com');
    console.log('   - Naver Webmaster Tools: https://webmastertool.naver.com');

  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
  }
}

// Run the generator
main();

