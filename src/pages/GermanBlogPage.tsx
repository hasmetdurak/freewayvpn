import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const GermanBlogPage: React.FC = () => {
  const { t } = useLanguage();

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      slug: 'vpn-vergleich-2026',
      title: 'VPN Vergleich 2026: Die besten Anbieter im Test',
      excerpt: 'Welches VPN ist 2026 wirklich empfehlenswert? Wir haben alle großen Anbieter getestet – inklusive NordVPN, Surfshark, PureVPN und mehr.',
      date: '15. März 2026',
      readTime: '15 min Lesezeit',
      category: 'Vergleich',
      featured: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">VPN Blog & Anleitungen</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Aktuelle VPN-News, Sicherheitstipps und umfassende Vergleiche – auf Deutsch.
        </p>
      </div>

      {/* Featured Articles */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ausgewählte Artikel</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Link 
              to={`/de/blog/${post.slug}`} 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Articles */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Alle Artikel</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              to={`/de/blog/${post.slug}`} 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bleiben Sie auf dem Laufenden</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Erhalten Sie die neuesten VPN-Bewertungen, Sicherheitstipps und Datenschutzleitfäden wöchentlich in Ihrem Posteingang.
        </p>
        <div className="max-w-md mx-auto flex">
          <input 
            type="email" 
            placeholder="Geben Sie Ihre E-Mail ein" 
            className="flex-grow px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-r-lg transition-colors duration-300">
            Abonnieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default GermanBlogPage;