import React from 'react';

const GermanDealsPage: React.FC = () => {
  // Sample deals data in German
  const deals = [
    {
      id: 1,
      provider: "NordVPN",
      discount: "68%",
      originalPrice: "12,99€/Monat",
      discountedPrice: "3,39€/Monat",
      period: "2 Jahre",
      features: ["5.800+ Server", "Post-Quanten-Verschlüsselung", "30 Tage Geld-zurück", "6 Geräte"],
      url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902",
      expires: "2026-04-30",
      verified: true
    },
    {
      id: 2,
      provider: "Surfshark",
      discount: "82%",
      originalPrice: "12,99€/Monat",
      discountedPrice: "2,19€/Monat",
      period: "3 Jahre",
      features: ["Unbegrenzte Geräte", "Whitelister", "CleanWeb", "30 Tage Geld-zurück"],
      url: "https://surfshark.hasoffers.com/signup/41263",
      expires: "2026-04-30",
      verified: true
    },
    {
      id: 3,
      provider: "PureVPN",
      discount: "75%",
      originalPrice: "10,99€/Monat",
      discountedPrice: "2,14€/Monat",
      period: "5 Jahre",
      features: ["6.500+ Server", "Streaming-Optimiert", "31 Tage Geld-zurück", "10 Geräte"],
      url: "https://billing.purevpn.com/aff.php?aff=49387047",
      expires: "2026-04-30",
      verified: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Top VPN Angebote & exklusive Gutscheine</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Verifizierte VPN-Angebote mit Einsparungen von bis zu 82% - täglich aktualisiert für 
          Sicherheit, Streaming und Privatsphäre.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Verifizierte Angebote</h3>
          <p className="text-gray-600">Jedes Angebot wird getestet, verfolgt und von unserem Redaktionsteam verifiziert</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Täglich aktualisiert</h3>
          <p className="text-gray-600">Frische VPN-Gutscheine und Blitzangebote rund um die Uhr hinzugefügt</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Exklusive Einsparungen</h3>
          <p className="text-gray-600">Partner-only Rabatte, die Sie nirgendwo auf Anbieter-Websites finden</p>
        </div>
      </div>

      {/* Active Deals */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Verifizierte Angebote - Jetzt live</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{deal.provider}</h3>
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                    {deal.discount} RABATT
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900">{deal.discountedPrice}</div>
                  <div className="text-sm text-gray-500 line-through">{deal.originalPrice}</div>
                  <div className="text-sm text-gray-600 mt-1">{deal.period} Plan</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Hauptmerkmale:</h4>
                  <ul className="space-y-1">
                    {deal.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Endet am {deal.expires}</span>
                  </div>
                  
                  {deal.verified && (
                    <div className="flex items-center text-sm text-green-600 mt-1">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span>Verifiziertes Angebot</span>
                    </div>
                  )}
                </div>
                
                <a 
                  href={deal.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg text-center block transition-colors duration-300"
                >
                  Angebot sichern
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why These Deals Rank #1 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Warum diese VPN-Angebote auf Platz 1 stehen</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Verifiziert & vertrauenswürdig</h3>
            <p className="text-gray-700">
              Jedes Angebot wird von unserem Team getestet und verifiziert, bevor es veröffentlicht wird.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Täglich aktualisiert</h3>
            <p className="text-gray-700">
              Unsere Angebote werden rund um die Uhr aktualisiert, um immer die besten Deals zu bieten.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Exklusive Einsparungen</h3>
            <p className="text-gray-700">
              Partner-only Rabatte, die Sie nirgendwo auf den offiziellen Websites finden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanDealsPage;