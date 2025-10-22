import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, DollarSign, Shield, Zap, Users, Globe } from 'lucide-react';
import { germanVpnDealsData } from '../data/germanVpnDealsData';
import AffiliateButton from '../components/AffiliateButton';

const GermanVPNDealsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl p-8 mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">VPN Angebote 2026</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Die besten VPN-Deals Deutschlands mit bis zu 70% Rabatt. Verifizierte Angebote, täglich aktualisiert.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Verifizierte Angebote</h3>
          <p className="text-gray-600">Jedes Angebot wird täglich getestet und verifiziert</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Täglich Aktualisiert</h3>
          <p className="text-gray-600">Frische Deals und Rabatte rund um die Uhr</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Exklusive Einsparungen</h3>
          <p className="text-gray-600">Partner-Rabatte, die Sie nirgendwo anders finden</p>
        </div>
      </div>

      {/* Deals Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VPN Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preis</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rabatt</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bewertung</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aktion</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {germanVpnDealsData.map((deal, index) => (
                <tr key={deal.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full mr-3" src={deal.logo} alt={deal.name} />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{deal.name}</div>
                        <div className="text-sm text-gray-500">{deal.feature}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">€{deal.price}/Monat</div>
                    <div className="text-sm text-gray-500 line-through">€{deal.originalPrice}/Monat</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {deal.discount}% RABATT
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">{deal.rating}/10</div>
                      <div className="ml-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(deal.rating / 2) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <AffiliateButton 
                      affiliateLink={deal.affiliateLink} 
                      buttonText="Angebot sichern" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Zap className="h-8 w-8 text-blue-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Blitzschnelle Server</h3>
          <p className="text-gray-600 text-sm">Zugang zu über 5000 Servern weltweit für optimale Geschwindigkeit</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Shield className="h-8 w-8 text-green-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Militärische Verschlüsselung</h3>
          <p className="text-gray-600 text-sm">AES-256-Verschlüsselung für höchste Sicherheit Ihrer Daten</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Users className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Unbegrenzte Geräte</h3>
          <p className="text-gray-600 text-sm">Schützen Sie alle Ihre Geräte mit einem Account</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Globe className="h-8 w-8 text-orange-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Weltweiter Zugang</h3>
          <p className="text-gray-600 text-sm">Streaming und Surfen ohne geografische Beschränkungen</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufig gestellte Fragen zu VPN-Angeboten</h2>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sind diese VPN-Angebote zuverlässig?</h3>
            <p className="text-gray-600">Ja, alle auf dieser Seite gelisteten Angebote werden täglich von unserem Team getestet und verifiziert. Wir arbeiten nur mit etablierten Anbietern zusammen, die einen hohen Sicherheitsstandard bieten.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Wie lange sind die Rabatte gültig?</h3>
            <p className="text-gray-600">Die meisten Angebote sind zeitlich begrenzt. Wir aktualisieren diese Seite täglich, um sicherzustellen, dass Sie immer die besten Deals sehen. Einige Angebote können nur wenige Stunden gültig sein.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Kann ich das Angebot stornieren?</h3>
            <p className="text-gray-600">Ja, alle empfohlenen VPN-Anbieter bieten eine Geld-zurück-Garantie an, meist zwischen 30 und 45 Tagen. Sie können das Angebot risikofrei testen.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Wie wähle ich den besten VPN-Anbieter?</h3>
            <p className="text-gray-600">Berücksichtigen Sie Faktoren wie Geschwindigkeit, Serveranzahl, Sicherheitsfunktionen, Datenschutzrichtlinien und Kundensupport. Unsere detaillierten Bewertungen helfen Ihnen bei der Entscheidung.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanVPNDealsPage;