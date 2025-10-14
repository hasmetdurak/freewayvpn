import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogData';
import { japaneseBlogsData } from '../data/japaneseBlogsContent';
import { Calendar, Clock, User, Tag, ExternalLink } from 'lucide-react';

const JapaneseBlogPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  
  // Only render Japanese content when Japanese is selected
  if (currentLanguage.code !== 'ja') {
    return null;
  }

  const japanesePosts = useMemo(() => {
    return Object.values(japaneseBlogsData).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>日本のVPNブログ | BestVPN.digital</title>
        <meta name="description" content="日本でおすすめのVPN情報、レビュー、比較記事を掲載。Netflix、Amazon Prime Video、セキュリティなど、VPNに関する最新情報をお届けします。" />
        <meta name="keywords" content="日本 VPN, VPN ブログ, VPN レビュー, VPN 比較, Netflix VPN, セキュリティ VPN, プライバシー VPN" />
        <link rel="canonical" href="https://bestvpn.digital/ja/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="日本のVPNブログ | BestVPN.digital" />
        <meta property="og:description" content="日本でおすすめのVPN情報、レビュー、比較記事を掲載。Netflix、Amazon Prime Video、セキュリティなど、VPNに関する最新情報をお届けします。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bestvpn.digital/ja/blog" />
        <meta property="og:image" content="https://bestvpn.digital/images/japanese-vpn-blog-og.jpg" />
        <meta property="og:locale" content="ja_JP" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="日本のVPNブログ | BestVPN.digital" />
        <meta name="twitter:description" content="日本でおすすめのVPN情報、レビュー、比較記事を掲載。Netflix、Amazon Prime Video、セキュリティなど、VPNに関する最新情報をお届けします。" />
        <meta name="twitter:image" content="https://bestvpn.digital/images/japanese-vpn-blog-twitter.jpg" />
      </Helmet>

      <div className="responsive-container py-6 sm:py-8 lg:py-12">

        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="responsive-heading text-gray-900 mb-4">
            日本のVPNブログ
          </h1>
          <p className="responsive-subheading text-gray-600 max-w-3xl mx-auto">
            日本でおすすめのVPN情報、レビュー、比較記事を掲載。
            Netflix、Amazon Prime Video、セキュリティなど、VPNに関する最新情報をお届けします。
          </p>
        </header>

        {/* Blog Posts Grid */}
        {japanesePosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">ブログ記事が見つかりません。</p>
          </div>
        ) : (
          <div className="responsive-grid gap-6 sm:gap-8">
            {japanesePosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Featured Image Placeholder */}
                <div className="h-48 sm:h-56 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl sm:text-5xl font-bold mb-2">
                      {post.title.charAt(0)}
                    </div>
                    <div className="text-sm opacity-90">
                      {post.category}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
                      2025年最新版
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link
                      to={`/ja/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Read More Button */}
                  <Link
                    to={`/ja/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    続きを読む
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              最適なVPNを見つけよう
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              記事を読んで、あなたに最適なVPNを選んでください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ja/vpns"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                VPNを比較する
              </Link>
              <Link
                to="/ja/quiz"
                className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                VPN診断を受ける
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default JapaneseBlogPage;
