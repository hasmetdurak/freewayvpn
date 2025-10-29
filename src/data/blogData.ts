// Main Blog Data - Contains essential blog posts for the site
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  readTime: string;
  image?: string;
  component?: string;
  translations?: {
    [key: string]: {
      title: string;
      excerpt: string;
      category: string;
      tags: string[];
    };
  };
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    slug: 'best-vpn-streaming-2025',
    title: 'Best VPN for Streaming 2025: Netflix, Hulu & More',
    excerpt: 'Discover the best VPNs that reliably unblock popular streaming services with fast speeds and reliable connections.',
    category: 'Streaming',
    tags: ['Netflix', 'Streaming', 'Entertainment'],
    date: '2025-01-18',
    author: 'BestVPN Team',
    readTime: '8 min',
    component: 'StreamingVPNBlogPost',
  },
  {
    id: 2,
    slug: 'vpn-vs-proxy-comparison',
    title: 'VPN vs Proxy: Which Should You Choose?',
    excerpt: 'Understand the key differences between VPNs and proxies to make an informed decision about your online privacy and security needs.',
    category: 'Education',
    tags: ['VPN', 'Proxy', 'Comparison'],
    date: '2025-01-17',
    author: 'BestVPN Team',
    readTime: '6 min',
    component: 'VPNProxyBlogPost',
  },
  {
    id: 3,
    slug: 'china-vpn-guide-2025',
    title: 'Best VPN for China 2025: Complete Guide',
    excerpt: 'Navigate China\'s internet restrictions with our comprehensive guide to the best VPNs that work in China.',
    category: 'International',
    tags: ['China', 'Censorship', 'Travel'],
    date: '2025-01-16',
    author: 'BestVPN Team',
    readTime: '10 min',
    component: 'VPNChinaBlogPost',
  },
  {
    id: 4,
    slug: 'nordvpn-vs-expressvpn-2025',
    title: 'NordVPN vs ExpressVPN 2025: Which is Better?',
    excerpt: 'Detailed comparison of the two most popular VPN services. Speed, security, features, and pricing analysis.',
    category: 'Reviews',
    tags: ['NordVPN', 'ExpressVPN', 'Comparison'],
    date: '2025-01-15',
    author: 'BestVPN Team',
    readTime: '12 min',
    component: 'NordVPNExpressVPNBlogPost',
  },
  {
    id: 5,
    slug: 'surfshark-vs-cyberghost-2025',
    title: 'Surfshark vs CyberGhost 2025: Budget Battle',
    excerpt: 'Compare these two budget-friendly VPN giants. Which offers the best value for money in 2025?',
    category: 'Reviews',
    tags: ['Surfshark', 'CyberGhost', 'Budget'],
    date: '2025-01-14',
    author: 'BestVPN Team',
    readTime: '9 min',
    component: 'SurfsharkvsCyberGhostBlogPost',
  },
  {
    id: 6,
    slug: 'streaming-wars-2025',
    title: 'Streaming Wars 2025: The VPN Battle',
    excerpt: 'How VPNs are changing the streaming landscape. Regional content, geo-blocking, and the future of entertainment.',
    category: 'Streaming',
    tags: ['Streaming', 'Entertainment', 'Industry'],
    date: '2025-01-13',
    author: 'BestVPN Team',
    readTime: '11 min',
    component: 'StreamingWars2025BlogPost',
  },
  {
    id: 7,
    slug: 'mobile-legends-vpn-2025',
    title: 'Best VPN for Mobile Legends in 2025',
    excerpt: 'Reduce ping and protect your mobile gaming sessions with the best VPN for Mobile Legends players.',
    category: 'Gaming',
    tags: ['Mobile Gaming', 'Gaming', 'Mobile Legends'],
    date: '2025-01-12',
    author: 'BestVPN Team',
    readTime: '7 min',
    component: 'MobileLegendsVPNBlogPost',
  },
  {
    id: 8,
    slug: 'business-vpn-showdown-2025',
    title: 'Business VPN Showdown 2025: Enterprise Solutions',
    excerpt: 'Enterprise-grade VPN solutions compared. Security, management, and scalability for business needs.',
    category: 'Business',
    tags: ['Business VPN', 'Enterprise', 'Security'],
    date: '2025-01-11',
    author: 'BestVPN Team',
    readTime: '14 min',
    component: 'BusinessVPNShowdownBlogPost',
  },
  {
    id: 9,
    slug: 'uae-sports-vpn-2025',
    title: 'Best VPN for UAE Sports Streaming 2025',
    excerpt: 'Access international sports content in the UAE with these VPN recommendations for sports enthusiasts.',
    category: 'Sports',
    tags: ['UAE', 'Sports', 'Streaming'],
    date: '2025-01-10',
    author: 'BestVPN Team',
    readTime: '8 min',
    component: 'UAESportsVPNBlogPost',
  },
  {
    id: 10,
    slug: 'five-eye-fourteen-eye-vpn-2025',
    title: 'VPN and the Five/Nine/Fourteen Eyes Alliance',
    excerpt: 'Understanding surveillance alliances and how they affect VPN privacy claims in 2025.',
    category: 'Privacy',
    tags: ['Five Eyes', 'Privacy', 'Surveillance'],
    date: '2025-01-09',
    author: 'BestVPN Team',
    readTime: '13 min',
    component: 'FiveEyeFourteenEyeVPNBlogPost',
  },
  {
    id: 11,
    slug: 'macbook-m3-vpn-2025',
    title: 'Best VPN for MacBook M3 in 2025',
    excerpt: 'Optimized VPN recommendations for the new MacBook M3. Speed, battery life, and native support.',
    category: 'Mac',
    tags: ['MacBook', 'M3', 'MacOS'],
    date: '2025-01-08',
    author: 'BestVPN Team',
    readTime: '9 min',
    component: 'MacBookM3VPNBlogPost',
  },
  {
    id: 12,
    slug: 'linux-cli-vpn-2025',
    title: 'Best VPN for Linux Command Line Users 2025',
    excerpt: 'Terminal-friendly VPN solutions for Linux power users. CLI tools and headless configuration.',
    category: 'Linux',
    tags: ['Linux', 'CLI', 'Terminal'],
    date: '2025-01-07',
    author: 'BestVPN Team',
    readTime: '11 min',
    component: 'LinuxCLIVPNBlogPost',
  },
  {
    id: 13,
    slug: 'best-vpn-korea-2025',
    title: 'Best VPN for Korea 2025: Complete Guide',
    excerpt: 'Top VPN recommendations for South Korean users. Streaming, gaming, and privacy optimization.',
    category: 'Korean Market',
    tags: ['Korea', 'South Korea', 'Streaming'],
    date: '2025-01-06',
    author: 'BestVPN Team',
    readTime: '10 min',
    component: 'BestVPNKorea2025BlogPost',
  },
  {
    id: 14,
    slug: 'netflix-working-vpn-2025',
    title: 'VPNs That Actually Work with Netflix in 2025',
    excerpt: 'Tested VPNs that consistently unblock Netflix regions. No more "VPN detected" errors.',
    category: 'Streaming',
    tags: ['Netflix', 'Streaming', 'Unblock'],
    date: '2025-01-05',
    author: 'BestVPN Team',
    readTime: '12 min',
    component: 'NetflixWorkingVPN2025BlogPost',
  },
  {
    id: 15,
    slug: 'free-vpn-honest-review-2025',
    title: 'Free VPN Honest Review 2025: What You Need to Know',
    excerpt: 'Are free VPNs worth it? We tested 20 free VPNs and expose the hidden costs and risks.',
    category: 'Free VPNs',
    tags: ['Free VPN', 'Review', 'Safety'],
    date: '2025-01-04',
    author: 'BestVPN Team',
    readTime: '15 min',
    component: 'FreeVPNHonestReview2025BlogPost',
  },
  {
    id: 16,
    slug: 'fastest-vpn-2025-ranking',
    title: 'Fastest VPN 2025: Speed Rankings',
    excerpt: 'The most comprehensive speed test of major VPNs. Real-world performance data from 50+ locations.',
    category: 'Performance',
    tags: ['Speed', 'Performance', 'Testing'],
    date: '2025-01-03',
    author: 'BestVPN Team',
    readTime: '16 min',
    component: 'FastestVPN2025RankingBlogPost',
  },
  {
    id: 17,
    slug: 'budget-vpn-2025-best-value',
    title: 'Budget VPN 2025: Best Value for Money',
    excerpt: 'Cheap VPNs that don\'t compromise on quality. Our top picks for budget-conscious users.',
    category: 'Budget',
    tags: ['Budget VPN', 'Cheap', 'Value'],
    date: '2025-01-02',
    author: 'BestVPN Team',
    readTime: '10 min',
    component: 'BudgetVPN2025BestValueBlogPost',
  },
  {
    id: 18,
    slug: 'best-vpn-torrenting-p2p-2025',
    title: 'Best VPN for Torrenting and P2P 2025',
    excerpt: 'VPNs that are safe and fast for torrenting. No-logs policies, kill switches, and P2P optimization.',
    category: 'Torrenting',
    tags: ['Torrenting', 'P2P', 'Download'],
    date: '2025-01-01',
    author: 'BestVPN Team',
    readTime: '13 min',
    component: 'BestVPNTorrentingP2P2025BlogPost',
  },
  {
    id: 19,
    slug: 'best-vpn-gaming-2025',
    title: 'Best VPN for Gaming 2025: Low Ping & Security',
    excerpt: 'Optimize your gaming experience with VPNs that reduce ping and protect against DDoS attacks.',
    category: 'Gaming',
    tags: ['Gaming', 'Ping', 'Low Latency'],
    date: '2024-12-31',
    author: 'BestVPN Team',
    readTime: '11 min',
    component: 'BestVPNGaming2025BlogPost',
  },
  {
    id: 20,
    slug: 'best-vpn-windows-11-2025',
    title: 'Best VPN for Windows 11 in 2025',
    excerpt: 'Windows 11 optimized VPN apps with native support, auto-connect, and advanced features.',
    category: 'Windows',
    tags: ['Windows 11', 'Windows', 'PC'],
    date: '2024-12-30',
    author: 'BestVPN Team',
    readTime: '9 min',
    component: 'BestVPNWindows10112025BlogPost',
  },
  {
    id: 21,
    slug: 'best-vpn-mac-macos-2025',
    title: 'Best VPN for Mac and macOS 2025',
    excerpt: 'Mac-optimized VPNs with native apps, retina display support, and seamless integration.',
    category: 'Mac',
    tags: ['Mac', 'macOS', 'Apple'],
    date: '2024-12-29',
    author: 'BestVPN Team',
    readTime: '10 min',
    component: 'BestVPNMacMacOS2025BlogPost',
  },
];

// Function to get blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogData.find(post => post.slug === slug);
};

// Function to get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogData;
};

// Function to get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogData.filter(post => post.category === category);
};

export default blogData;