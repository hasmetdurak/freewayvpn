import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Existing blog posts from the main sitemap generator
const existingBlogPosts = [
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

// German sitemap content
const germanSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://bestvpn.digital/de/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/" />
    <xhtml:link rel="alternate" hreflang="en" href="https://bestvpn.digital/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/" />
  </url>
  <url>
    <loc>https://bestvpn.digital/de/vpns</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/vpns" />
    <xhtml:link rel="alternate" hreflang="en" href="https://bestvpn.digital/vpns" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/vpns" />
  </url>
  <url>
    <loc>https://bestvpn.digital/de/faq</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/faq" />
    <xhtml:link rel="alternate" hreflang="en" href="https://bestvpn.digital/faq" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/faq" />
  </url>
  <url>
    <loc>https://bestvpn.digital/de/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/blog" />
    <xhtml:link rel="alternate" hreflang="en" href="https://bestvpn.digital/blog" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/blog" />
  </url>
  <url>
    <loc>https://bestvpn.digital/de/blog/vpn-vergleich-2026</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/blog/vpn-vergleich-2026" />
  </url>
  <url>
    <loc>https://bestvpn.digital/de/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/contact" />
    <xhtml:link rel="alternate" hreflang="en" href="https://bestvpn.digital/contact" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/contact" />
  </url>
  <url>
    <loc>https://bestvpn.digital/de/deals</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/deals" />
    <xhtml:link rel="alternate" hreflang="en" href="https://bestvpn.digital/deals" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/deals" />
  </url>
  <url>
    <loc>https://bestvpn.digital/de/quiz</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/quiz" />
    <xhtml:link rel="alternate" hreflang="en" href="https://bestvpn.digital/quiz" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/quiz" />
  </url>
  <url>
    <loc>https://bestvpn.digital/de/stream-test</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="de" href="https://bestvpn.digital/de/stream-test" />
    <xhtml:link rel="alternate" hreflang="en" href="https://bestvpn.digital/stream-test" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://bestvpn.digital/stream-test" />
  </url>
  ${existingBlogPosts.map(slug => `
  <url>
    <loc>https://bestvpn.digital/de/blog/${slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

// Write the German sitemap file
const outputPath = join(__dirname, '..', 'public', 'sitemap-de.xml');

// Ensure the public directory exists
const publicDir = join(__dirname, '..', 'public');
mkdirSync(publicDir, { recursive: true });

writeFileSync(outputPath, germanSitemap);

console.log('German sitemap generated successfully at:', outputPath);