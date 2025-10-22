import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, DollarSign, Shield, Zap, Users, Globe } from 'lucide-react';
import AffiliateButton from '../components/AffiliateButton';
import { SpanishVpnDeal, spanishVpnDealsData } from '../data/spanishVpnDealsData';

const SpanishVPNDealsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl p-8 mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Ofertas VPN 2026</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Las mejores ofertas VPN de España con hasta un 70% de descuento. Ofertas verificadas, actualizadas diariamente.
        </p>
      </div>

      {/* Trust Signals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ofertas Verificadas</h3>
          <p className="text-gray-600">Cada oferta se prueba y verifica diariamente</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Actualizado Diariamente</h3>
          <p className="text-gray-600">Ofertas y descuentos frescos las 24 horas</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ahorros Exclusivos</h3>
          <p className="text-gray-600">Descuentos de socios que no encontrarás en ningún otro lugar</p>
        </div>
      </div>

      {/* Deals Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Servicio VPN</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descuento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calificación</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {spanishVpnDealsData.map((deal: SpanishVpnDeal, index: number) => (
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
                    <div className="text-sm text-gray-900">€{deal.price}/mes</div>
                    <div className="text-sm text-gray-500 line-through">€{deal.originalPrice}/mes</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {deal.discount}% DE DESCUENTO
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
                        description={`Obtén ${deal.name} con ${deal.discount}% de descuento`}
                        features={[deal.feature]}
                        ctaText="Asegurar la oferta"
                        affiliateUrl={deal.affiliateLink}
                        discount={`${deal.discount}% de descuento`}
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
          <h3 className="text-lg font-bold text-gray-900 mb-2">Servidores Ultra Rápidos</h3>
          <p className="text-gray-600 text-sm">Acceso a más de 5000 servidores en todo el mundo para una velocidad óptima</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Shield className="h-8 w-8 text-green-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Cifrado Militar</h3>
          <p className="text-gray-600 text-sm">Cifrado AES-256 para la máxima seguridad de sus datos</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Users className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Dispositivos Ilimitados</h3>
          <p className="text-gray-600 text-sm">Proteja todos sus dispositivos con una sola cuenta</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Globe className="h-8 w-8 text-orange-600 mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-2">Acceso Global</h3>
          <p className="text-gray-600 text-sm">Streaming y navegación sin restricciones geográficas</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas Frecuentes sobre Ofertas VPN</h2>
        
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Son confiables estas ofertas VPN?</h3>
            <p className="text-gray-600">Sí, todas las ofertas enumeradas en esta página son probadas y verificadas diariamente por nuestro equipo. Solo trabajamos con proveedores establecidos que ofrecen un alto nivel de seguridad.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Por cuánto tiempo son válidos los descuentos?</h3>
            <p className="text-gray-600">La mayoría de las ofertas están limitadas en el tiempo. Actualizamos esta página diariamente para asegurarnos de que siempre vea las mejores ofertas. Algunas ofertas solo pueden ser válidas por unas pocas horas.</p>
          </div>
          
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Puedo cancelar la oferta?</h3>
            <p className="text-gray-600">Sí, todos los proveedores VPN recomendados ofrecen una garantía de reembolso, generalmente entre 30 y 45 días. Puede probar la oferta sin riesgo.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Cómo elijo el mejor proveedor VPN?</h3>
            <p className="text-gray-600">Tenga en cuenta factores como la velocidad, el número de servidores, las funciones de seguridad, las políticas de privacidad y el soporte al cliente. Nuestras evaluaciones detalladas le ayudarán a tomar su decisión.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpanishVPNDealsPage;