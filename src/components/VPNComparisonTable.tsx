import React from 'react';
import { Check, X, Star, Zap, Globe } from 'lucide-react';

interface VPNProvider {
  name: string;
  logo: string;
  price: string;
  devices: number | string;
  servers: string;
  countries: number;
  speed: number; // out of 5
  streaming: boolean;
  torrenting: boolean;
  moneyBack: string;
  rating: number;
  pros: string[];
  cons: string[];
  affiliateUrl: string;
}

interface VPNComparisonTableProps {
  providers?: VPNProvider[];
  language?: 'ko' | 'en' | 'tr';
}

const defaultProviders: VPNProvider[] = [
  {
    name: 'NordVPN',
    logo: '🛡️',
    price: '₩4,500',
    devices: 10,
    servers: '6,000+',
    countries: 111,
    speed: 5,
    streaming: true,
    torrenting: true,
    moneyBack: '30일',
    rating: 4.9,
    pros: ['가장 빠른 속도', 'NordLynx 프로토콜', '한국 서버 다수'],
    cons: ['앱 UI 복잡할 수 있음'],
    affiliateUrl: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=105790'
  },
  {
    name: 'ExpressVPN',
    logo: '⚡',
    price: '₩6,000',
    devices: 8,
    servers: '3,000+',
    countries: 105,
    speed: 5,
    streaming: true,
    torrenting: true,
    moneyBack: '30일',
    rating: 4.8,
    pros: ['최고의 안정성', '초보자 친화적', 'MediaStreamer'],
    cons: ['가격이 비쌈'],
    affiliateUrl: 'https://www.expressvpn.com/order'
  },
  {
    name: 'Surfshark',
    logo: '🦈',
    price: '₩3,200',
    devices: '무제한',
    servers: '3,200+',
    countries: 100,
    speed: 4.5,
    streaming: true,
    torrenting: true,
    moneyBack: '30일',
    rating: 4.7,
    pros: ['가성비 최강', '무제한 기기', '가족 공유 최적'],
    cons: ['속도 약간 느림'],
    affiliateUrl: 'https://get.surfshark.net/aff_c?offer_id=786&aff_id=24928'
  }
];

const VPNComparisonTable: React.FC<VPNComparisonTableProps> = ({ 
  providers = defaultProviders,
  language = 'ko'
}) => {
  const translations = {
    ko: {
      title: 'VPN 상세 비교표',
      subtitle: '주요 VPN 서비스를 한눈에 비교하세요',
      price: '월 요금',
      devices: '동시 접속',
      servers: '서버 수',
      countries: '국가 수',
      speed: '속도',
      streaming: '스트리밍',
      torrenting: '토렌트',
      moneyBack: '환불 보장',
      rating: '평점',
      pros: '장점',
      cons: '단점',
      getStarted: '시작하기'
    },
    en: {
      title: 'VPN Detailed Comparison',
      subtitle: 'Compare major VPN services at a glance',
      price: 'Monthly Price',
      devices: 'Devices',
      servers: 'Servers',
      countries: 'Countries',
      speed: 'Speed',
      streaming: 'Streaming',
      torrenting: 'Torrenting',
      moneyBack: 'Money Back',
      rating: 'Rating',
      pros: 'Pros',
      cons: 'Cons',
      getStarted: 'Get Started'
    },
    tr: {
      title: 'Detaylı VPN Karşılaştırması',
      subtitle: 'Başlıca VPN hizmetlerini bir bakışta karşılaştırın',
      price: 'Aylık Fiyat',
      devices: 'Cihaz Sayısı',
      servers: 'Sunucu',
      countries: 'Ülke',
      speed: 'Hız',
      streaming: 'Streaming',
      torrenting: 'Torrent',
      moneyBack: 'Para İadesi',
      rating: 'Puan',
      pros: 'Artılar',
      cons: 'Eksiler',
      getStarted: 'Başlayın'
    }
  };

  const t = translations[language];

  return (
    <div className="my-12 w-full overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          {t.title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t.subtitle}
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <table className="w-full bg-white dark:bg-gray-800">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <th className="py-4 px-6 text-left font-bold">VPN</th>
              <th className="py-4 px-6 text-center font-bold">{t.price}</th>
              <th className="py-4 px-6 text-center font-bold">{t.devices}</th>
              <th className="py-4 px-6 text-center font-bold">{t.servers}</th>
              <th className="py-4 px-6 text-center font-bold">{t.speed}</th>
              <th className="py-4 px-6 text-center font-bold">{t.streaming}</th>
              <th className="py-4 px-6 text-center font-bold">{t.rating}</th>
              <th className="py-4 px-6 text-center font-bold"></th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider, index) => (
              <tr 
                key={provider.name}
                className={`border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  index === 0 ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                }`}
              >
                <td className="py-6 px-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{provider.logo}</span>
                    <div>
                      <div className="font-bold text-lg text-gray-900 dark:text-white">
                        {provider.name}
                      </div>
                      {index === 0 && (
                        <span className="inline-flex items-center gap-1 text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full font-bold">
                          <Star className="w-3 h-3 fill-current" />
                          추천 1위
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-6 px-6 text-center">
                  <div className="font-bold text-xl text-gray-900 dark:text-white">
                    {provider.price}
                  </div>
                  <div className="text-xs text-gray-500">/ 월</div>
                </td>
                <td className="py-6 px-6 text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {provider.devices}
                  </div>
                </td>
                <td className="py-6 px-6 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {provider.servers}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{provider.countries}개국</div>
                </td>
                <td className="py-6 px-6 text-center">
                  <div className="flex justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Zap
                        key={i}
                        className={`w-4 h-4 ${
                          i < provider.speed
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </td>
                <td className="py-6 px-6 text-center">
                  {provider.streaming ? (
                    <Check className="w-6 h-6 text-green-600 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-600 mx-auto" />
                  )}
                </td>
                <td className="py-6 px-6 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold text-lg text-gray-900 dark:text-white">
                      {provider.rating}
                    </span>
                  </div>
                </td>
                <td className="py-6 px-6 text-center">
                  <a
                    href={provider.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    {t.getStarted}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-6">
        {providers.map((provider, index) => (
          <div
            key={provider.name}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 ${
              index === 0
                ? 'border-yellow-400'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            {index === 0 && (
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-center py-2">
                <span className="text-sm font-bold text-yellow-900 flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  추천 1위
                </span>
              </div>
            )}
            
            <div className="p-6">
              {/* Provider Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-5xl">{provider.logo}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {provider.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-bold text-gray-900 dark:text-white">
                        {provider.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {provider.price}
                  </div>
                  <div className="text-sm text-gray-500">/ 월</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {t.devices}
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {provider.devices}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {t.servers}
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {provider.servers}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {t.speed}
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Zap
                        key={i}
                        className={`w-4 h-4 ${
                          i < provider.speed
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    {t.streaming}
                  </div>
                  <Check className="w-6 h-6 text-green-600" />
                </div>
              </div>

              {/* Pros/Cons */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-bold text-sm text-green-600 mb-2 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    {t.pros}
                  </h4>
                  <ul className="space-y-1">
                    {provider.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300">
                        • {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-red-600 mb-2 flex items-center gap-1">
                    <X className="w-4 h-4" />
                    {t.cons}
                  </h4>
                  <ul className="space-y-1">
                    {provider.cons.map((con, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300">
                        • {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={provider.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg text-center hover:shadow-lg transform hover:scale-105 transition-all"
              >
                {t.getStarted} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VPNComparisonTable;

