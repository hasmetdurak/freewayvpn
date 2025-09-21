export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  component?: string; // Component name for dynamic loading
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "streaming-vpn-2025",
    title: "Top 10 VPNs for Streaming in 2025: Netflix, Hulu & More",
    excerpt: "Discover the best VPNs that reliably unblock popular streaming services with fast speeds and reliable connections for seamless viewing.",
    author: "Sarah Mitchell",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Streaming",
    tags: ["Netflix", "Streaming", "Entertainment"],
    image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "StreamingVPNBlogPost"
  },
  {
    id: 2,
    slug: "vpn-proxy-guide-2025",
    title: "VPN vs Proxy: Which One Should You Choose?",
    excerpt: "Understanding the key differences between VPNs and proxies to make an informed decision about your online privacy and security needs.",
    author: "David Chen",
    date: "2025-01-12",
    readTime: "6 min read",
    category: "Education",
    tags: ["VPN", "Proxy", "Comparison"],
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "VPNProxyBlogPost"
  },
  {
    id: 3,
    slug: "vpn-china-guide-2025",
    title: "How to Use a VPN in China: Complete 2025 Guide",
    excerpt: "Navigate internet restrictions in China with our comprehensive guide to choosing and using VPNs that work reliably behind the Great Firewall.",
    author: "Michael Zhang",
    date: "2025-01-10",
    readTime: "12 min read",
    category: "Guides",
    tags: ["China", "Censorship", "Government"],
    image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "VPNChinaBlogPost"
  },
  {
    id: 4,
    slug: "nordvpn-expressvpn-speed-test-2025",
    title: "NordVPN vs ExpressVPN 2025 Speed Showdown: 50 Location Lab Test",
    excerpt: "Comprehensive speed test comparing NordVPN and ExpressVPN across 50 global locations with detailed latency heat-maps and performance analysis for streaming and gaming.",
    author: "Tech Review Team",
    date: "2025-08-16",
    readTime: "15 min read",
    category: "Comparison",
    tags: ["NordVPN", "ExpressVPN", "Speed Test", "Netflix"],
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "NordVPNExpressVPNBlogPost"
  },
  {
    id: 5,
    slug: "surfshark-cyberghost-price-comparison-2025",
    title: "Surfshark vs CyberGhost: Which is Cheaper for 3-Year Plans in 2025?",
    excerpt: "Complete price comparison of Surfshark and CyberGhost 3-year plans including coupon codes, refund policies, feature analysis, and performance benchmarks to find the best value VPN.",
    author: "Price Analysis Team",
    date: "2025-09-17",
    readTime: "12 min read",
    category: "Comparison",
    tags: ["Surfshark", "CyberGhost", "Pricing", "Value"],
    image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "SurfsharkvsCyberGhostBlogPost"
  },
  {
    id: 6,
    slug: "streaming-wars-2025-expressvpn-surfshark-cyberghost-netflix",
    title: "Streaming Wars 2025: ExpressVPN vs Surfshark vs CyberGhost – Who Unlocks More Netflix Libraries?",
    excerpt: "Complete Netflix library unlock test comparing ExpressVPN, Surfshark, and CyberGhost across 12 regions. Speed tests, 4K streaming performance, and platform compatibility analysis for the ultimate streaming VPN guide.",
    author: "Streaming Analysis Team",
    date: "2025-10-15",
    readTime: "16 min read",
    category: "Streaming",
    tags: ["Netflix", "ExpressVPN", "Surfshark", "CyberGhost", "Streaming", "Libraries"],
    image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "StreamingWars2025BlogPost"
  },
  {
    id: 7,
    slug: "mobile-legends-vpn-low-ping-test-2025",
    title: "Mobile Legends VPN Low-Ping Test 2025: NordVPN vs Surfshark vs ExpressVPN vs PIA",
    excerpt: "Comprehensive gaming VPN test across 200 Mobile Legends matches comparing NordVPN, Surfshark, ExpressVPN, and PIA for lowest ping, stability, and competitive performance in Southeast Asia.",
    author: "Gaming Performance Team",
    date: "2025-09-25",
    readTime: "14 min read",
    category: "Gaming",
    tags: ["Mobile Legends", "Gaming", "Low Ping", "NordVPN", "Surfshark", "ExpressVPN", "PIA"],
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "MobileLegendsVPNBlogPost"
  },
  {
    id: 8,
    slug: "free-vs-paid-vpns-hidden-costs",
    title: "Free vs Paid VPNs: The Hidden Costs of 'Free' Services",
    excerpt: "Explore why free VPNs might cost you more than you think in terms of privacy, security, and performance compared to premium services.",
    author: "Lisa Rodriguez",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Security",
    tags: ["Free VPN", "Privacy", "Security"],
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 9,
    slug: "wireguard-vs-openvpn-protocol-comparison",
    title: "WireGuard vs OpenVPN: Protocol Performance Comparison",
    excerpt: "Deep dive into the technical differences between WireGuard and OpenVPN protocols, including speed, security, and compatibility factors.",
    author: "Alex Thompson",
    date: "2025-01-06",
    readTime: "10 min read",
    category: "Technical",
    tags: ["WireGuard", "OpenVPN", "Protocols"],
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 10,
    slug: "vpn-kill-switch-guide",
    title: "VPN Kill Switch: What It Is and Why You Need It",
    excerpt: "Learn about VPN kill switches, how they protect your privacy when connections drop, and which VPNs offer the most reliable kill switch features.",
    author: "Jennifer Park",
    date: "2025-01-04",
    readTime: "5 min read",
    category: "Security",
    tags: ["Kill Switch", "Privacy", "Features"],
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 11,
    slug: "best-vpns-torrenting-p2p",
    title: "Best VPNs for Torrenting and P2P File Sharing",
    excerpt: "Discover VPN services that support P2P traffic with fast speeds, strong encryption, and policies that protect your privacy while torrenting.",
    author: "Ryan Wilson",
    date: "2025-01-02",
    readTime: "9 min read",
    category: "P2P",
    tags: ["Torrenting", "P2P", "File Sharing"],
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 12,
    slug: "vpn-router-setup-guide",
    title: "How to Set Up a VPN on Your Router",
    excerpt: "Step-by-step guide to installing and configuring a VPN on your router to protect all devices on your network with a single connection.",
    author: "Emma Davis",
    date: "2024-12-30",
    readTime: "11 min read",
    category: "Guides",
    tags: ["Router", "Setup", "Network"],
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 13,
    slug: "vpn-logs-privacy-policies",
    title: "VPN Logs: What Information Do Providers Really Keep?",
    excerpt: "Understand different types of VPN logging, how to evaluate no-logs policies, and which providers have been independently audited for their privacy claims.",
    author: "Tom Anderson",
    date: "2024-12-28",
    readTime: "8 min read",
    category: "Privacy",
    tags: ["No-logs", "Privacy Policy", "Audits"],
    image: "https://images.pexels.com/photos/1181433/pexels-photo-1181433.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  },
  {
    id: 14,
    slug: "business-vpn-showdown-2025",
    title: "Business VPN Showdown 2025: Perimeter 81 vs NordLayer vs Twingate – Which Delivers the Best Pricing & Security?",
    excerpt: "In-depth comparison of Perimeter 81, NordLayer, and Twingate—three top enterprise VPN providers in 2025—across pricing, features, deployment, and ROI for business environments.",
    author: "Enterprise Security Team",
    date: "2025-01-15",
    readTime: "12 min read",
    category: "Business",
    tags: ["Business VPN", "Enterprise Security", "Zero Trust", "SASE", "Perimeter 81", "NordLayer", "Twingate"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "BusinessVPNShowdownBlogPost"
  },
  {
    id: 15,
    slug: "uae-sports-vpn-expressvpn-pia-cyberghost-2025",
    title: "VPN for Abu Dhabi Sports: ExpressVPN vs PIA vs CyberGhost – Which Bypasses UAE Blocks in 2025?",
    excerpt: "For sports enthusiasts living in or traveling to the UAE, accessing your favorite streaming platforms like BeIN Sports, Abu Dhabi Sports, or international leagues can be a real challenge. This guide dives deep into how to bypass UAE blocks using VPNs.",
    author: "Middle East VPN Team",
    date: "2025-01-16",
    readTime: "14 min read",
    category: "Streaming",
    tags: ["UAE", "Sports Streaming", "ExpressVPN", "PIA", "CyberGhost", "BeIN Sports", "Abu Dhabi Sports", "DPI Bypass"],
    image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "UAESportsVPNBlogPost"
  },
  {
    id: 16,
    slug: "5-eye-14-eye-vpn-comparison-2025",
    title: "5-Eye vs 14-Eye VPN Comparison 2025: Map, List & Top Non-Alliance Picks",
    excerpt: "In the modern world, online privacy has become more critical than ever. Governments, ISPs, and surveillance alliances like the 5-Eye and 14-Eye collect, share, and monitor digital communications. For privacy-conscious individuals, choosing the right VPN is no longer just about speed or streaming — it's about jurisdiction and data safety.",
    author: "Privacy Research Team",
    date: "2025-01-17",
    readTime: "16 min read",
    category: "Privacy",
    tags: ["5-Eye", "14-Eye", "Surveillance", "Jurisdiction", "Privacy", "NordVPN", "ProtonVPN", "Surfshark", "Government", "Intelligence"],
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "FiveEyeFourteenEyeVPNBlogPost"
  },
  {
    id: 17,
    slug: "macbook-m3-vpn-battery-drain-test-2025",
    title: "MacBook M3 VPN Battery Drain Test: ExpressVPN vs NordVPN vs Surfshark (2025 Update)",
    excerpt: "Apple's MacBook M3 series has set new standards in performance and efficiency. However, for privacy-conscious Mac users, running a VPN can significantly impact battery life, CPU usage, and overall system responsiveness. In 2025, choosing a VPN for your Mac isn't just about speed or security—it's about balancing privacy with efficiency.",
    author: "Tech Performance Team",
    date: "2025-01-18",
    readTime: "14 min read",
    category: "Performance",
    tags: ["MacBook M3", "Battery Test", "VPN Performance", "Apple Silicon", "ExpressVPN", "NordVPN", "Surfshark", "Mac Optimization", "Energy Efficiency"],
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "MacBookM3VPNBlogPost"
  },
  {
    id: 18,
    slug: "linux-cli-vpn-speed-duel-2025",
    title: "Linux CLI VPN Speed Duel 2025: NordLynx vs WireGuard-Native vs OpenVPN",
    excerpt: "For Linux enthusiasts, VPN performance isn't just about privacy—it's about efficiency, speed, and terminal-level control. This comprehensive comparison tests NordLynx, WireGuard-native, and OpenVPN via Linux CLI on multiple metrics including speed, CPU usage, memory footprint, and real-world usability.",
    author: "Linux Performance Team",
    date: "2025-01-19",
    readTime: "16 min read",
    category: "Performance",
    tags: ["Linux", "CLI", "NordLynx", "WireGuard", "OpenVPN", "Terminal", "Performance", "Benchmarks", "Ubuntu", "Command Line"],
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "LinuxCLIVPNBlogPost"
  },
  {
    id: 19,
    slug: "netflix-japan-vpn-2025",
    title: "Best VPN for Netflix Japan in 2025 [Complete Setup Guide + Working Servers]",
    excerpt: "Unlock Netflix Japan's exclusive anime, dramas, and movies with our tested VPN guide. Complete setup instructions, working servers, and troubleshooting tips for 2025.",
    author: "Streaming VPN Team",
    date: "2025-01-27",
    readTime: "12 min read",
    category: "Streaming",
    tags: ["Netflix Japan", "Anime", "VPN", "Streaming", "ExpressVPN", "NordVPN", "Surfshark", "Japanese Content", "Setup Guide"],
    image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
    component: "NetflixJapanVPNBlogPost"
  },
  {
    id: 20,
    slug: 'korean-drama-vpn-2025',
    title: 'Best VPN for Streaming Korean Dramas Abroad in 2025 [Complete Guide for K-Drama Fans]',
    excerpt: 'Discover the best VPNs for streaming Korean dramas from anywhere in the world. Access Viki, Kocowa, Netflix Korea, and more with our complete K-drama streaming guide.',
    content: 'Complete guide content here...',
    author: 'VPN Expert',
    publishDate: '2025-01-20',
    readTime: '7 min read',
    tags: ['Korean Drama', 'Streaming', 'VPN', 'K-Drama', 'Netflix Korea'],
    category: 'Streaming',
    featured: true,
    seoTitle: 'Best VPN for Korean Dramas 2025 | Stream K-Dramas Anywhere',
    seoDescription: 'Stream Korean dramas from anywhere with the best VPNs for K-drama fans. Access Viki, Kocowa, Netflix Korea, and more platforms safely.',
    component: 'KoreanDramaVPNBlogPost'
  },
  {
    id: 21,
    slug: 'gaming-vpn-2025',
    title: 'Fastest VPN for Online Gaming in 2025 [Low Ping & No Lag Guide]',
    excerpt: 'Discover the fastest VPN for online gaming in 2025. Reduce ping, eliminate lag, and unlock region-locked servers for Valorant, PUBG, Fortnite, and more games.',
    content: 'Complete gaming VPN guide with low ping solutions...',
    author: 'Gaming VPN Expert',
    publishDate: '2025-01-20',
    readTime: '8 min read',
    tags: ['Gaming VPN', 'Low Ping', 'No Lag', 'Valorant', 'PUBG', 'Gaming Servers'],
    category: 'Gaming',
    featured: true,
    seoTitle: 'Fastest VPN for Gaming 2025 | Low Ping & No Lag Guide',
    seoDescription: 'Get the fastest VPN for online gaming in 2025. Reduce ping, prevent lag, and access global game servers for Valorant, PUBG, Fortnite, and more.',
    component: 'GamingVPNBlogPost'
  },
  {
    id: 22,
    slug: 'pubg-mobile-kr-vpn-2025',
    title: 'Best VPN to Play PUBG Mobile KR Version Safely in 2025 [Step-by-Step Guide]',
    excerpt: 'Access PUBG Mobile KR version safely in 2025 with the best VPNs. Complete guide with Korean servers, low ping setup, and step-by-step instructions for smooth gameplay.',
    author: 'BestVPN Digital Team',
    date: '2025-01-22',
    readTime: '7 min read',
    category: 'Gaming',
    tags: ['PUBG Mobile', 'Gaming VPN', 'Korean Servers', 'Mobile Gaming', 'VPN Guide'],
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    component: 'PUBGKRVPNBlogPost'
  }
];

export const categories = Array.from(new Set(blogPosts.map(post => post.category))).sort();
export const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};