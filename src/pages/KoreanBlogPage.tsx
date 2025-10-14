import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import KoreanSEO from '../components/KoreanSEO';
import { blogPosts } from '../data/blogData';
import { koreanBlogsData } from '../data/koreanBlogsContent';

const KoreanBlogPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  
  // Only render Korean content when Korean is selected
  if (currentLanguage.code !== 'ko') {
    return null;
  }

  const localizedPosts = useMemo(() => {
    try {
      if (!blogPosts || blogPosts.length === 0) {
        return [];
      }
      
      // Filter posts for Korean content
      let filteredPosts = blogPosts.filter(post =>
        // Include all Korean Archive posts (dynamic content)
        post.component === 'KoreanBlogArchive' ||
        // Include specific Korean blog posts
        post.slug.includes('korea') ||
        post.slug.includes('wavve') ||
        post.slug.includes('tving') ||
        post.slug.includes('coupang-play') ||
        post.slug.includes('best-vpn-korea-2025') ||
        post.slug.includes('netflix-working-vpn-2025') ||
        post.slug.includes('free-vpn-honest-review-2025') ||
        post.slug.includes('fastest-vpn-2025') ||
        post.slug.includes('budget-vpn-2025') ||
        post.slug.includes('torrenting-p2p-2025') ||
        post.slug.includes('gaming-2025') ||
        post.slug.includes('windows-10-11-2025') ||
        post.slug.includes('mac-macos-2025') ||
        post.title.includes('한국') ||
        post.title.includes('넷플릭스') ||
        post.title.includes('와브') ||
        post.title.includes('티빙') ||
        post.title.includes('쿠팡') ||
        post.title.includes('2025년') ||
        post.title.includes('최고의 VPN') ||
        post.title.includes('무료 VPN')
      );
      
      return filteredPosts;
    } catch (error) {
      console.error('Error filtering Korean blog posts:', error);
      return [];
    }
  }, []);

  const breadcrumbs = [
    { name: '홈', url: 'https://bestvpn.digital/ko' },
    { name: '블로그', url: 'https://bestvpn.digital/ko/blog' }
  ];

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BestVPN.digital 블로그",
    "description": "VPN 관련 최신 뉴스, 사용법 가이드, 리뷰",
    "url": "https://bestvpn.digital/ko/blog",
    "inLanguage": "ko-KR",
    "blogPost": localizedPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://bestvpn.digital/ko/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "BestVPN.digital"
      }
    }))
  };

  return (
    <>
      <KoreanSEO 
        page="blog" 
        breadcrumbs={breadcrumbs}
        structuredData={blogStructuredData}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                VPN 블로그
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                VPN 관련 최신 뉴스, 사용법 가이드, 리뷰를 한국어로 제공합니다
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                추천 블로그 포스트
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                한국 사용자를 위한 특별히 선별된 VPN 관련 콘텐츠
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localizedPosts.slice(0, 6).map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.date}
                      </span>
                      <Link
                        to={`/ko/blog/${post.slug}`}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        자세히 보기 →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                모든 블로그 포스트
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                총 {localizedPosts.length}개의 한국어 VPN 관련 블로그 포스트
              </p>
            </div>

            <div className="space-y-6">
              {localizedPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {post.readTime}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/ko/blog/${post.slug}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                        >
                          자세히 보기 →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Korean Streaming Services Guide */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                한국 스트리밍 서비스 가이드
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                넷플릭스, 와브, 티빙, 쿠팡플레이 등 한국 인기 스트리밍 서비스 활용법
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-semibold mb-2">넷플릭스</h3>
                <p className="text-red-100 mb-4">
                  한국 콘텐츠와 해외 콘텐츠를 모두 즐기세요
                </p>
                <Link to="/ko/blog/netflix-korea-vpn" className="text-white hover:text-red-200 font-medium">
                  가이드 보기 →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-xl font-semibold mb-2">와브</h3>
                <p className="text-blue-100 mb-4">
                  KBS, MBC, SBS 드라마와 예능 프로그램
                </p>
                <Link to="/ko/blog/wavve-vpn" className="text-white hover:text-blue-200 font-medium">
                  가이드 보기 →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold mb-2">티빙</h3>
                <p className="text-purple-100 mb-4">
                  TVN, JTBC 드라마와 독점 콘텐츠
                </p>
                <Link to="/ko/blog/tving-vpn" className="text-white hover:text-purple-200 font-medium">
                  가이드 보기 →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold mb-2">쿠팡플레이</h3>
                <p className="text-orange-100 mb-4">
                  독점 드라마와 영화 콘텐츠
                </p>
                <Link to="/ko/blog/coupang-play-vpn" className="text-white hover:text-orange-200 font-medium">
                  가이드 보기 →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KoreanBlogPage;
