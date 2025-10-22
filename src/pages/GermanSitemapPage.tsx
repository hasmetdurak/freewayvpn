import React from 'react';

const GermanSitemapPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Sitemap Deutsch</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Hauptseiten</h2>
        <ul className="space-y-2">
          <li><a href="/de/vpns" className="text-blue-600 hover:underline">VPN Vergleich</a></li>
          <li><a href="/de/faq" className="text-blue-600 hover:underline">Häufig gestellte Fragen</a></li>
          <li><a href="/de/blog" className="text-blue-600 hover:underline">Blog</a></li>
          <li><a href="/de/blog/vpn-vergleich-2026" className="text-blue-600 hover:underline">VPN Vergleich 2026</a></li>
          <li><a href="/de/contact" className="text-blue-600 hover:underline">Kontakt</a></li>
          <li><a href="/de/deals" className="text-blue-600 hover:underline">Angebote</a></li>
          <li><a href="/de/quiz" className="text-blue-600 hover:underline">VPN Finder Quiz</a></li>
        </ul>
      </div>
      
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Rechtliches</h2>
        <ul className="space-y-2">
          <li><a href="/de/privacy-policy" className="text-blue-600 hover:underline">Datenschutzrichtlinie</a></li>
          <li><a href="/de/terms-of-service" className="text-blue-600 hover:underline">Nutzungsbedingungen</a></li>
          <li><a href="/de/affiliate-disclosure" className="text-blue-600 hover:underline">Affiliate-Offenlegung</a></li>
        </ul>
      </div>
    </div>
  );
};

export default GermanSitemapPage;