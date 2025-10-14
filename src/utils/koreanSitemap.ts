// Korean sitemap generation utilities

export interface KoreanSitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const koreanSitemapUrls: KoreanSitemapUrl[] = [
  // Main pages
  {
    loc: 'https://bestvpn.digital/ko',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 1.0
  },
  {
    loc: 'https://bestvpn.digital/ko/vpns',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 0.9
  },
  {
    loc: 'https://bestvpn.digital/ko/faq',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: 'https://bestvpn.digital/ko/blog',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 0.8
  },
  {
    loc: 'https://bestvpn.digital/ko/contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.5
  },
  {
    loc: 'https://bestvpn.digital/ko/deals',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 0.7
  },
  {
    loc: 'https://bestvpn.digital/ko/quiz',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    loc: 'https://bestvpn.digital/ko/stream-test',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.6
  }
];

// Korean blog posts from koreanBlogsContent.ts
export const koreanBlogUrls: KoreanSitemapUrl[] = [
  // Popular Korean blog posts
  {
    loc: 'https://bestvpn.digital/ko/blog/best-vpn-korea-2025',
    lastmod: '2025-01-15',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/netflix-korea-vpn',
    lastmod: '2025-01-10',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/wavve-vpn',
    lastmod: '2025-01-08',
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/tving-vpn',
    lastmod: '2025-01-05',
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/coupang-play-vpn',
    lastmod: '2025-01-03',
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/korean-drama-vpn',
    lastmod: '2025-01-01',
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/free-vpn-honest-review-2025',
    lastmod: '2024-12-28',
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/fastest-vpn-2025',
    lastmod: '2024-12-25',
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/budget-vpn-2025',
    lastmod: '2024-12-22',
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/torrenting-p2p-2025',
    lastmod: '2024-12-20',
    changefreq: 'weekly',
    priority: 0.5
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/gaming-2025',
    lastmod: '2024-12-18',
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/windows-10-11-2025',
    lastmod: '2024-12-15',
    changefreq: 'weekly',
    priority: 0.5
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/mac-macos-2025',
    lastmod: '2024-12-12',
    changefreq: 'weekly',
    priority: 0.5
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/android-iphone-vpn-apps-2025',
    lastmod: '2024-12-10',
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/fire-tv-stick-vpn-setup-2025',
    lastmod: '2024-12-08',
    changefreq: 'weekly',
    priority: 0.5
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/china-vpn-great-firewall-2025',
    lastmod: '2024-12-05',
    changefreq: 'weekly',
    priority: 0.5
  },
  {
    loc: 'https://bestvpn.digital/ko/blog/korea-server-vpn-top5-2025',
    lastmod: '2024-12-03',
    changefreq: 'weekly',
    priority: 0.6
  }
];

export const generateKoreanSitemap = (): string => {
  const allUrls = [...koreanSitemapUrls, ...koreanBlogUrls];
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  allUrls.forEach(url => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${url.loc}</loc>\n`;
    sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
    sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${url.priority}</priority>\n`;
    
    // Add hreflang alternatives
    sitemap += `    <xhtml:link rel="alternate" hreflang="ko" href="${url.loc}" />\n`;
    sitemap += `    <xhtml:link rel="alternate" hreflang="en" href="${url.loc.replace('/ko/', '/en/')}" />\n`;
    sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url.loc.replace('/ko/', '/en/')}" />\n`;
    
    sitemap += '  </url>\n';
  });
  
  sitemap += '</urlset>';
  
  return sitemap;
};

export const generateKoreanRobotsTxt = (): string => {
  return `User-agent: *
Allow: /ko/
Allow: /ko/vpns
Allow: /ko/faq
Allow: /ko/blog
Allow: /ko/blog/*

# Korean specific sitemaps
Sitemap: https://bestvpn.digital/ko-sitemap.xml

# Block duplicate content
Disallow: /ko/en/
Disallow: /ko/ko/

# Allow Korean search engines
User-agent: Yeti
Allow: /ko/

User-agent: NaverBot
Allow: /ko/

User-agent: DaumBot
Allow: /ko/`;
};
