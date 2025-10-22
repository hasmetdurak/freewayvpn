import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, DollarSign, Shield, Zap, Users, Globe } from 'lucide-react';
import AffiliateButton from '../components/AffiliateButton';
import { FrenchVpnDeal, frenchVpnDealsData } from '../data/frenchVpnDealsData';

const FrenchVPNDealsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl p-8 mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Offres VPN 2026</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Les meilleures offres VPN de France avec jusqu'à 70% de réduction. Offres vérifiées, mises à jour quotidiennement.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Offres Vérifiées</h3>
          <p className="text-gray-600">Chaque offre est testée et vérifiée quotidiennement</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Mis à Jour Quotidiennement</h3>
          <p className="text-gray-600">Offres et réductions fraîches 24/7</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Économies Exclusives</h3>
          <p className="text-gray-600">Réductions partenaires introuvables ailleurs</p>
        </div>
      </div>

      {/* Deals Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service VPN</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Réduction</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Note</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {frenchVpnDealsData.map((deal: FrenchVpnDeal, index: number) => (
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
                    <div className="text-sm text-gray-900">€{deal.price}/mois</div>
                    <div className="text-sm text-gray-500 line-through">€{deal.originalPrice}/mois</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {deal.discount}% DE RÉDUCTION
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
                    <div className="w-32">
                      <AffiliateButton 
                        provider={deal.name}
                        description={`Obtenez ${deal.name} avec ${deal.discount}% de réduction`}
                        features={[deal.feature]}
                        ctaText="Sécuriser l'offre"
                        affiliateUrl={deal.affiliateLink}
                        discount={`${deal.discount}% de réduction`}
                        rating={deal.rating/2}
                        className="!p-3 !my-0"
                      />
                    </div>
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
          <h3 className="text-lg font-bold text-gray-900 mb-2">Serveurs Ultra-Rapides</h3>
          <p className="text-gray-600 text-sm">Accès à plus de 5000 serveurs dans le monde pour une vitesse optimale</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Shield className="h-8 w-8 text-green-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Cryptage Militaire</h3>
          <p className="text-gray-600 text-sm">Cryptage AES-256 pour la sécurité maximale de vos données</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Users className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Appareils Illimités</h3>
          <p className="text-gray-600 text-sm">Protégez tous vos appareils avec un seul compte</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Globe className="h-8 w-8 text-orange-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Accès Mondial</h3>
          <p className="text-gray-600 text-sm">Streaming et navigation sans restrictions géographiques</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions Fréquentes sur les Offres VPN</h2>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ces offres VPN sont-elles fiables ?</h3>
            <p className="text-gray-600">Oui, toutes les offres répertoriées sur cette page sont testées et vérifiées quotidiennement par notre équipe. Nous ne travaillons qu'avec des fournisseurs établis qui offrent un haut niveau de sécurité.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Combien de temps les réductions sont-elles valables ?</h3>
            <p className="text-gray-600">La plupart des offres sont limitées dans le temps. Nous mettons à jour cette page quotidiennement pour vous assurer de toujours voir les meilleures offres. Certaines offres ne peuvent être valables que quelques heures.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Puis-je annuler l'offre ?</h3>
            <p className="text-gray-600">Oui, tous les fournisseurs VPN recommandés offrent une garantie de remboursement, généralement entre 30 et 45 jours. Vous pouvez tester l'offre sans risque.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Comment choisir le meilleur fournisseur VPN ?</h3>
            <p className="text-gray-600">Tenez compte de facteurs tels que la vitesse, le nombre de serveurs, les fonctionnalités de sécurité, les politiques de confidentialité et le support client. Nos évaluations détaillées vous aideront à prendre votre décision.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrenchVPNDealsPage;