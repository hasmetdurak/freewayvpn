import React, { useState } from 'react';
import { Calendar, Clock, Tag, User, Search, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 VPNs for Streaming in 2025: Netflix, Hulu & More",
    excerpt: "Discover the best VPNs that reliably unblock popular streaming services with fast speeds and reliable connections for seamless viewing.",
    author: "Sarah Mitchell",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Streaming",
    tags: ["Netflix", "Streaming", "Entertainment"],
    image: "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 2,
    title: "VPN vs Proxy: Which One Should You Choose?",
    excerpt: "Understanding the key differences between VPNs and proxies to make an informed decision about your online privacy and security needs.",
    author: "David Chen",
    date: "2025-01-12",
    readTime: "6 min read",
    category: "Education",
    tags: ["VPN", "Proxy", "Comparison"],
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 3,
    title: "How to Use a VPN in China: Complete 2025 Guide",
    excerpt: "Navigate internet restrictions in China with our comprehensive guide to choosing and using VPNs that work reliably behind the Great Firewall.",
    author: "Michael Zhang",
    date: "2025-01-10",
    readTime: "12 min read",
    category: "Guides",
    tags: ["China", "Censorship", "Government"],
    image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
    title: "VPN Logs: What Information Do Providers Really Keep?",
    answer: "Understand different types of VPN logging, how to evaluate no-logs policies, and which providers have been independently audited for their privacy claims.",
    author: "Tom Anderson",
    date: "2024-12-28",
    readTime: "8 min read",
    category: "Privacy",
    tags: ["No-logs", "Privacy Policy", "Audits"],
    image: "https://images.pexels.com/photos/1181433/pexels-photo-1181433.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false
  }
];

const categories = Array.from(new Set(blogPosts.map(post => post.category))).sort();
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesTag && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('blogTitle')}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('blogSubtitle')}
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Tags</option>
              {allTags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-orange-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters.</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Showing {filteredPosts.length} of {blogPosts.length} articles
      </div>

      {/* Newsletter CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Stay Updated with VPN News</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Get the latest VPN reviews, security tips, and privacy guides delivered to your inbox weekly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;