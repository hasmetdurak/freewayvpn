import React from 'react';

const GermanVPNsPage: React.FC = () => {
  // Sample VPN data in German
  const vpns = [
    {
      id: 1,
      name: "NordVPN",
      rating: 9.5,
      price: "3,39€/Monat",
      servers: "5.800+",
      countries: "60+",
      devices: 6,
      features: ["RAM-only Server", "Post-Quanten-Verschlüsselung", "Double VPN", "30 Tage Geld-zurück"],
      deal: true,
      dealText: "68% sparen",
      url: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902"
    },
    {
      id: 2,
      name: "Surfshark",
      rating: 8.8,
      price: "2,19€/Monat",
      servers: "3.200+",
      countries: "100+",
      devices: "Unbegrenzt",
      features: ["Whitelister", "CleanWeb", "Camouflage Mode", "30 Tage Geld-zurück"],
      deal: true,
      dealText: "82% sparen",
      url: "https://surfshark.hasoffers.com/signup/41263"
    },
    {
      id: 3,
      name: "PureVPN",
      rating: 8.2,
      price: "2,14€/Monat",
      servers: "6.500+",
      countries: "70+",
      devices: 10,
      features: ["Streaming-Optimiert", "Dedizierte IP", "24/7 Support", "31 Tage Geld-zurück"],
      deal: false,
      url: "https://billing.purevpn.com/aff.php?aff=49387047"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Entdecken Sie Premium-VPN-Lösungen</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Von Experten getestete VPN-Dienste mit unschlagbarer Sicherheit, blitzschnellen Geschwindigkeiten 
          und globaler Serverabdeckung für ultimative Online-Privatsphäre.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Gründliche Tests</h3>
          <p className="text-gray-600">Jedes VPN wird auf Geschwindigkeit, Sicherheit und Zuverlässigkeit getestet</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Expertenbewertungen</h3>
          <p className="text-gray-600">Geschrieben von Cybersicherheitsexperten mit über 10 Jahren Erfahrung</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h3 className="font-semibold text-lg mb-2">Beste Angebote</h3>
          <p className="text-gray-600">Exklusive Rabatte und Angebote, die Sie sonst nirgendwo finden</p>
        </div>
      </div>

      {/* VPN Comparison Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VPN-Dienst</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bewertung</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Server</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preis</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Geräte</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hauptmerkmale</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktion</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vpns.map((vpn) => (
                <tr key={vpn.id} className={vpn.deal ? "bg-blue-50" : ""}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{vpn.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <span className="font-semibold">{vpn.rating}</span>/10
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vpn.servers} Server in {vpn.countries} Ländern
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vpn.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vpn.devices}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <ul className="list-disc list-inside">
                      {vpn.features.slice(0, 2).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a 
                      href={vpn.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-900 font-semibold"
                    >
                      Angebot holen
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Editor's Top Picks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Top 3 der Redaktion</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {vpns.map((vpn) => (
            <div key={vpn.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{vpn.name}</h3>
                  {vpn.deal && (
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {vpn.dealText}
                    </span>
                  )}
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-gray-900">{vpn.rating}</span>
                    <span className="text-gray-600 ml-1">/ 10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${vpn.rating * 10}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Preis:</span>
                    <span className="font-semibold">{vpn.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Server:</span>
                    <span className="font-semibold">{vpn.servers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Geräte:</span>
                    <span className="font-semibold">{vpn.devices}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Hauptmerkmale:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {vpn.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={vpn.url} 
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
    </div>
  );
};

export default GermanVPNsPage;