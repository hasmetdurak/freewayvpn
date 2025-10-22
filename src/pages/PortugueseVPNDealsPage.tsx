import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, DollarSign, Shield, Zap, Users, Globe } from 'lucide-react';
import AffiliateButton from '../components/AffiliateButton';
import { PortugueseVpnDeal, portugueseVpnDealsData } from '../data/portugueseVpnDealsData';

const PortugueseVPNDealsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl p-8 mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Promoções VPN 2026</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          As melhores promoções VPN de Portugal com até 70% de desconto. Promoções verificadas, atualizadas diariamente.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Promoções Verificadas</h3>
          <p className="text-gray-600">Cada promoção é testada e verificada diariamente</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Atualizado Diariamente</h3>
          <p className="text-gray-600">Promoções e descontos frescos 24/7</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Economias Exclusivas</h3>
          <p className="text-gray-600">Descontos de parceiros que você não encontra em nenhum outro lugar</p>
        </div>
      </div>

      {/* Deals Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serviço VPN</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Desconto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avaliação</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ação</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {portugueseVpnDealsData.map((deal: PortugueseVpnDeal, index: number) => (
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
                    <div className="text-sm text-gray-900">€{deal.price}/mês</div>
                    <div className="text-sm text-gray-500 line-through">€{deal.originalPrice}/mês</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {deal.discount}% DE DESCONTO
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
                        description={`Obtenha ${deal.name} com ${deal.discount}% de desconto`}
                        features={[deal.feature]}
                        ctaText="Garantir a oferta"
                        affiliateUrl={deal.affiliateLink}
                        discount={`${deal.discount}% de desconto`}
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
          <h3 className="text-lg font-bold text-gray-900 mb-2">Servidores Ultra-Rápidos</h3>
          <p className="text-gray-600 text-sm">Acesso a mais de 5000 servidores ao redor do mundo para velocidade otimizada</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Shield className="h-8 w-8 text-green-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Criptografia Militar</h3>
          <p className="text-gray-600 text-sm">Criptografia AES-256 para máxima segurança dos seus dados</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Users className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Dispositivos Ilimitados</h3>
          <p className="text-gray-600 text-sm">Proteja todos os seus dispositivos com uma única conta</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Globe className="h-8 w-8 text-orange-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Acesso Global</h3>
          <p className="text-gray-600 text-sm">Streaming e navegação sem restrições geográficas</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes sobre Promoções VPN</h2>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Essas promoções VPN são confiáveis?</h3>
            <p className="text-gray-600">Sim, todas as promoções listadas nesta página são testadas e verificadas diariamente pela nossa equipe. Trabalhamos apenas com provedores estabelecidos que oferecem alto nível de segurança.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Por quanto tempo os descontos são válidos?</h3>
            <p className="text-gray-600">A maioria das promoções é limitada no tempo. Atualizamos esta página diariamente para garantir que você sempre veja as melhores promoções. Algumas promoções podem ser válidas apenas por algumas horas.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Posso cancelar a promoção?</h3>
            <p className="text-gray-600">Sim, todos os provedores VPN recomendados oferecem garantia de reembolso, geralmente entre 30 e 45 dias. Você pode testar a promoção sem risco.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Como escolher o melhor provedor VPN?</h3>
            <p className="text-gray-600">Considere fatores como velocidade, número de servidores, recursos de segurança, políticas de privacidade e suporte ao cliente. Nossas avaliações detalhadas ajudarão você a tomar sua decisão.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortugueseVPNDealsPage;