/**
 * RSS Feed Generator for bestvpn.digital Blog
 * Generates RSS 2.0 and Atom feeds for blog posts
 * Run: node scripts/generate-rss.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://bestvpn.digital';
const BLOG_TITLE = 'BestVPN.digital Blog';
const BLOG_DESCRIPTION = 'Latest VPN news, reviews, and comprehensive guides';
const BLOG_LANGUAGE = 'en-us';
const OUTPUT_DIR = path.join(__dirname, '..', 'public');

// Blog posts data (should match blogData.ts)
const BLOG_POSTS = [
  {
    slug: 'netflix-deutschland-vpn-2025',
    title: 'Best VPN for Netflix Germany 2025 – Tested & Compared',
    excerpt: 'Watch Netflix DE abroad? We tested 7 VPNs – only 2 really work. Find out which VPN reliably unblocks Netflix in 2025.',
    author: 'Max Schmidt',
    date: '2025-01-20',
    category: 'Streaming',
    image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg'
  },
  {
    slug: 'streaming-vpn-2025',
    title: 'Top 10 VPNs for Streaming in 2025: Netflix, Hulu & More',
    excerpt: 'Discover the best VPNs that reliably unblock popular streaming services with fast speeds and reliable connections.',
    author: 'Sarah Mitchell',
    date: '2025-01-15',
    category: 'Streaming',
    image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg'
  },
  {
    slug: 'business-vpn-showdown-2025',
    title: 'Business VPN Showdown 2025: Perimeter 81 vs NordLayer vs Twingate',
    excerpt: 'In-depth comparison of three top enterprise VPN providers across pricing, features, deployment, and ROI.',
    author: 'Enterprise Security Team',
    date: '2025-01-15',
    category: 'Business',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
  }
  // Add more blog posts here
];

/**
 * Escape XML special characters
 */
function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Generate RSS 2.0 Feed
 */
function generateRSS() {
  const now = new Date().toUTCString();
  
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(BLOG_TITLE)}</title>
    <link>${DOMAIN}/blog</link>
    <description>${escapeXml(BLOG_DESCRIPTION)}</description>
    <language>${BLOG_LANGUAGE}</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${DOMAIN}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${DOMAIN}/logo.png</url>
      <title>${escapeXml(BLOG_TITLE)}</title>
      <link>${DOMAIN}/blog</link>
    </image>
`;

  BLOG_POSTS.forEach(post => {
    const postUrl = `${DOMAIN}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();

    rss += `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>contact@bestvpn.digital (${escapeXml(post.author)})</author>
      <category>${escapeXml(post.category)}</category>
      <enclosure url="${post.image}" type="image/jpeg" />
    </item>
`;
  });

  rss += `  </channel>
</rss>`;

  return rss;
}

/**
 * Generate Atom Feed
 */
function generateAtom() {
  const now = new Date().toISOString();
  
  let atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(BLOG_TITLE)}</title>
  <link href="${DOMAIN}/blog" />
  <link href="${DOMAIN}/atom.xml" rel="self" type="application/atom+xml" />
  <updated>${now}</updated>
  <id>${DOMAIN}/blog</id>
  <subtitle>${escapeXml(BLOG_DESCRIPTION)}</subtitle>
  <author>
    <name>BestVPN.digital</name>
    <email>contact@bestvpn.digital</email>
  </author>
`;

  BLOG_POSTS.forEach(post => {
    const postUrl = `${DOMAIN}/blog/${post.slug}`;
    const updated = new Date(post.date).toISOString();

    atom += `  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${postUrl}" />
    <id>${postUrl}</id>
    <updated>${updated}</updated>
    <summary>${escapeXml(post.excerpt)}</summary>
    <author>
      <name>${escapeXml(post.author)}</name>
    </author>
    <category term="${escapeXml(post.category)}" />
  </entry>
`;
  });

  atom += `</feed>`;

  return atom;
}

/**
 * Main execution
 */
function main() {
  console.log('📰 Generating RSS feeds for bestvpn.digital blog...\n');

  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Generate RSS 2.0
    console.log('📝 Generating RSS 2.0 feed...');
    const rss = generateRSS();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'rss.xml'), rss);
    console.log('✅ rss.xml created');

    // Generate Atom
    console.log('📝 Generating Atom feed...');
    const atom = generateAtom();
    fs.writeFileSync(path.join(OUTPUT_DIR, 'atom.xml'), atom);
    console.log('✅ atom.xml created');

    console.log('\n🎉 RSS feeds generated successfully!');
    console.log(`📍 Location: ${OUTPUT_DIR}`);
    console.log(`📊 Total posts: ${BLOG_POSTS.length}`);
    console.log('\n🔗 Feed URLs:');
    console.log(`   - RSS 2.0: ${DOMAIN}/rss.xml`);
    console.log(`   - Atom: ${DOMAIN}/atom.xml`);
    console.log('\n💡 Add to your site:');
    console.log('   <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml" />');
    console.log('   <link rel="alternate" type="application/atom+xml" title="Atom Feed" href="/atom.xml" />');

  } catch (error) {
    console.error('❌ Error generating RSS feeds:', error);
    process.exit(1);
  }
}

// Run the generator
main();



