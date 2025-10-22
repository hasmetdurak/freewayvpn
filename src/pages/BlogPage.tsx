import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, User, Tag, TrendingUp, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogData';
import { loadLocalizedBlogPosts } from '../utils/contentLocalization';
import { generateResponsiveImageSet } from '../utils/autoImageUtils';

const BlogPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const { lang } = useParams<{ lang: string }>();

  // Generate blog post links with language prefix
  const getBlogPostPath = (slug: string) => {
    if (lang) {
      return `/${lang}/blog/${slug}`;
    }
    return `/blog/${slug}`;
  };

  // Get localized blog posts with language-specific filtering
  // ONLY show content in the selected language for 100% localization
  const localizedPosts = useMemo(() => {
    return loadLocalizedBlogPosts(currentLanguage.code, blogPosts);
  }, [currentLanguage.code]);

  const featuredPosts = localizedPosts.filter(post => post.featured);
  const regularPosts = localizedPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Helmet>
        <title>{`${t('blog.title')} | ${t('brand.name')} - ${currentLanguage.name}`}</title>
        <meta name="description" content={t('blog.subtitle')} />
        <meta name="keywords" content={`VPN blog, ${t('brand.name')}, VPN news, VPN guides, VPN tips, ${currentLanguage.name}`} />
        <link rel="canonical" href={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}blog`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${t('blog.title')} | ${t('brand.name')}`} />
        <meta property="og:description" content={t('blog.subtitle')} />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}blog`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('blog.title')} | ${t('brand.name')}`} />
        <meta name="twitter:description" content={t('blog.subtitle')} />
        
        {/* Schema.org Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": t('blog.title'),
            "description": t('blog.subtitle'),
            "url": `https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}blog`,
            "inLanguage": currentLanguage.code,
            "blogPost": localizedPosts.slice(0, 10).map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "author": {
                "@type": "Person",
                "name": post.author
              },
              "datePublished": post.date,
              "image": post.image
            }))
          })}
        </script>
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('blog.title')}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('blog.subtitle')}
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-6 w-6 text-orange-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">{t('featuredArticles')}</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={getBlogPostPath(post.slug)}
                className="block"
              >
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="relative">
                    <img
                      src={post.image}
                      srcSet={generateResponsiveImageSet(post.image)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {t('featured')}
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
                      {post.tags && post.tags.slice(0, 3).map((tag: string) => (
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
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('latestArticles')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                to={getBlogPostPath(post.slug)}
                className="block"
              >
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="relative">
                    <img
                      src={post.image}
                      srcSet={generateResponsiveImageSet(post.image)}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
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
                      {post.tags && post.tags.slice(0, 2).map((tag: string) => (
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
              </Link>
            ))}
          </div>
        </div>
      )}

      {localizedPosts.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">{t('noArticlesFound')}</p>
          <p className="text-gray-400 text-sm mt-2">{t('adjustFilters')}</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-8 text-center text-sm text-gray-500">
        {t('showingXofYArticles').replace('{0}', localizedPosts.length.toString()).replace('{1}', localizedPosts.length.toString())}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">{t('stayUpdated')}</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          {t('newsletterDesc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder={t('enterEmail')}
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t('subscribe')}
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPage;