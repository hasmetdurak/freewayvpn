import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blogData';
import { norwegianBlogsData } from '../data/norwegianBlogsContent';

const NorwegianBlogPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  
  // Only render Norwegian content when Norwegian is selected
  if (currentLanguage.code !== 'nb') {
    return null;
  }

  const localizedPosts = useMemo(() => {
    try {
      if (!blogPosts || blogPosts.length === 0) {
        return [];
      }
      
      // Filter posts for Norwegian content
      let filteredPosts = blogPosts.filter(post =>
        // Include all Norwegian Archive posts (dynamic content)
        post.component === 'NorwegianBlogArchive' ||
        // Include specific Norwegian blog posts
        post.slug.includes('norge') ||
        post.slug.includes('norway') ||
        post.slug.includes('norwegian') ||
        post.title.includes('Norge') ||
        post.title.includes('Norway') ||
        post.title.includes('Norsk') ||
        post.title.includes('Norwegian')
      );
      
      return filteredPosts;
    } catch (error) {
      console.error('Error filtering Norwegian blog posts:', error);
      return [];
    }
  }, []);

  const breadcrumbs = [
    { name: 'Hjem', url: 'https://bestvpn.digital/nb' },
    { name: 'Blogg', url: 'https://bestvpn.digital/nb/blog' }
  ];

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BestVPN.digital Blogg",
    "description": "Siste nytt om VPN, sikkerhet og streaming på norsk",
    "url": "https://bestvpn.digital/nb/blog",
    "inLanguage": "nb-NO",
    "blogPost": localizedPosts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://bestvpn.digital/nb/blog/${post.slug}`,
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                VPN Blogg
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Siste nytt om VPN, sikkerhet og streaming på norsk
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Utvalgte Blogginnlegg
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Spesielt utvalgte VPN-relaterte innhold for norske brukere
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
                        to={`/nb/blog/${post.slug}`}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        Les mer →
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
                Alle Blogginnlegg
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Totalt {localizedPosts.length} norske VPN-relaterte blogginnlegg
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
                          to={`/nb/blog/${post.slug}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                        >
                          Les mer →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Norwegian Streaming Services Guide */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Norske Streamingtjenester
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Veiledning for bruk av norske streamingtjenester med VPN
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-semibold mb-2">NRK</h3>
                <p className="text-red-100 mb-4">
                  Norske TV-serier og dokumentarer
                </p>
                <Link to="/nb/blog/nrk-vpn" className="text-white hover:text-red-200 font-medium">
                  Veiledning →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-xl font-semibold mb-2">TV 2</h3>
                <p className="text-blue-100 mb-4">
                  Norske serier og underholdningsprogrammer
                </p>
                <Link to="/nb/blog/tv2-vpn" className="text-white hover:text-blue-200 font-medium">
                  Veiledning →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold mb-2">Viaplay</h3>
                <p className="text-purple-100 mb-4">
                  Nordiske filmer og serier
                </p>
                <Link to="/nb/blog/viaplay-vpn" className="text-white hover:text-purple-200 font-medium">
                  Veiledning →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold mb-2">Strim</h3>
                <p className="text-orange-100 mb-4">
                  Direkte TV og sportsinnhold
                </p>
                <Link to="/nb/blog/strim-vpn" className="text-white hover:text-orange-200 font-medium">
                  Veiledning →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NorwegianBlogPage;