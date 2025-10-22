import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Star, Shield, Zap, Users, Globe } from 'lucide-react';

interface VPNPlan {
  id: number;
  name: string;
  serverCount: number;
  speed: number;
  deviceSupport: number | 'Unlimited';
  price: number;
  featuredFeature: string;
  affiliateLink: string;
  logo: string;
  isTopPick: boolean;
  rating: number;
  country: string;
}

const VPNPlansPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();

  const vpnPlans: VPNPlan[] = [
    {
      id: 1,
      name: "NordVPN",
      serverCount: 5400,
      speed: 115,
      deviceSupport: 6,
      price: 3.71,
      featuredFeature: t('vpnPlans.nordvpn.feature'),
      affiliateLink: "https://example.com/nordvpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: true,
      rating: 9.5,
      country: "Panama"
    },
    {
      id: 2,
      name: "PureVPN",
      serverCount: 6500,
      speed: 120,
      deviceSupport: 10,
      price: 2.08,
      featuredFeature: t('vpnPlans.purevpn.feature'),
      affiliateLink: "https://example.com/purevpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: true,
      rating: 9.2,
      country: "Hong Kong"
    },
    {
      id: 3,
      name: "Surfshark",
      serverCount: 3200,
      speed: 95,
      deviceSupport: "Unlimited",
      price: 2.30,
      featuredFeature: t('vpnPlans.surfshark.feature'),
      affiliateLink: "https://example.com/surfshark",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: true,
      rating: 9.0,
      country: "Netherlands"
    },
    {
      id: 4,
      name: "VPN.ac",
      serverCount: 2800,
      speed: 105,
      deviceSupport: 6,
      price: 3.75,
      featuredFeature: t('vpnPlans.vpnac.feature'),
      affiliateLink: "https://example.com/vpnac",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: true,
      rating: 8.8,
      country: "Seychelles"
    },
    {
      id: 5,
      name: "Hide.me",
      serverCount: 2100,
      speed: 70,
      deviceSupport: 10,
      price: 2.59,
      featuredFeature: t('vpnPlans.hideme.feature'),
      affiliateLink: "https://example.com/hideme",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: true,
      rating: 8.5,
      country: "Malaysia"
    },
    {
      id: 6,
      name: "CyberGhost",
      serverCount: 7000,
      speed: 85,
      deviceSupport: 7,
      price: 2.25,
      featuredFeature: t('vpnPlans.cyberghost.feature'),
      affiliateLink: "https://example.com/cyberghost",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 8.3,
      country: "Romania"
    },
    {
      id: 7,
      name: "IPVanish",
      serverCount: 2000,
      speed: 82,
      deviceSupport: "Unlimited",
      price: 3.99,
      featuredFeature: t('vpnPlans.ipvanish.feature'),
      affiliateLink: "https://example.com/ipvanish",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 8.1,
      country: "United States"
    },
    {
      id: 8,
      name: "PrivateVPN",
      serverCount: 200,
      speed: 75,
      deviceSupport: 6,
      price: 2.00,
      featuredFeature: t('vpnPlans.privatevpn.feature'),
      affiliateLink: "https://example.com/privatevpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 8.0,
      country: "Sweden"
    },
    {
      id: 9,
      name: "Windscribe",
      serverCount: 630,
      speed: 68,
      deviceSupport: "Unlimited",
      price: 5.75,
      featuredFeature: t('vpnPlans.windscribe.feature'),
      affiliateLink: "https://example.com/windscribe",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 7.8,
      country: "Canada"
    },
    {
      id: 10,
      name: "Hotspot Shield",
      serverCount: 3200,
      speed: 92,
      deviceSupport: 5,
      price: 2.99,
      featuredFeature: t('vpnPlans.hotspotshield.feature'),
      affiliateLink: "https://example.com/hotspotshield",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 7.7,
      country: "United States"
    },
    {
      id: 11,
      name: "SuccessVPN",
      serverCount: 387,
      speed: 38,
      deviceSupport: 6,
      price: 8.82,
      featuredFeature: t('vpnPlans.successvpn.feature'),
      affiliateLink: "https://example.com/successvpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 7.5,
      country: "United States"
    },
    {
      id: 12,
      name: "VelocityVPN",
      serverCount: 998,
      speed: 63,
      deviceSupport: 7,
      price: 3.47,
      featuredFeature: t('vpnPlans.velocityvpn.feature'),
      affiliateLink: "https://example.com/velocityvpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 7.4,
      country: "United States"
    },
    {
      id: 13,
      name: "ForceVPN",
      serverCount: 474,
      speed: 46,
      deviceSupport: 8,
      price: 4.73,
      featuredFeature: t('vpnPlans.forcevpn.feature'),
      affiliateLink: "https://example.com/forcevpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 7.2,
      country: "United States"
    },
    {
      id: 14,
      name: "WinnerVPN",
      serverCount: 188,
      speed: 63,
      deviceSupport: 9,
      price: 5.65,
      featuredFeature: t('vpnPlans.winnervpn.feature'),
      affiliateLink: "https://example.com/winnervpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 7.1,
      country: "United States"
    },
    {
      id: 15,
      name: "ModernVPN",
      serverCount: 515,
      speed: 69,
      deviceSupport: 9,
      price: 4.34,
      featuredFeature: t('vpnPlans.modernvpn.feature'),
      affiliateLink: "https://example.com/modernvpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 7.0,
      country: "United States"
    },
    {
      id: 16,
      name: "AdvancedVPN",
      serverCount: 592,
      speed: 48,
      deviceSupport: 7,
      price: 1.69,
      featuredFeature: t('vpnPlans.advancedvpn.feature'),
      affiliateLink: "https://example.com/advancedvpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 6.9,
      country: "United States"
    },
    {
      id: 17,
      name: "SuperVPN",
      serverCount: 653,
      speed: 61,
      deviceSupport: 9,
      price: 4.18,
      featuredFeature: t('vpnPlans.supervpn.feature'),
      affiliateLink: "https://example.com/supervpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 6.8,
      country: "United States"
    },
    {
      id: 18,
      name: "IdealVPN",
      serverCount: 313,
      speed: 45,
      deviceSupport: 8,
      price: 1.97,
      featuredFeature: t('vpnPlans.idealvpn.feature'),
      affiliateLink: "https://example.com/idealvpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 6.7,
      country: "United States"
    },
    {
      id: 19,
      name: "IntelligentVPN",
      serverCount: 666,
      speed: 68,
      deviceSupport: 7,
      price: 6.70,
      featuredFeature: t('vpnPlans.intelligentvpn.feature'),
      affiliateLink: "https://example.com/intelligentvpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 6.5,
      country: "United States"
    },
    {
      id: 20,
      name: "ChoiceVPN",
      serverCount: 155,
      speed: 40,
      deviceSupport: 8,
      price: 8.64,
      featuredFeature: t('vpnPlans.choicevpn.feature'),
      affiliateLink: "https://example.com/choicevpn",
      logo: "https://images.unsplash.com/photo-1580909737712-74ed29a59e15?w=100&h=100&fit=crop",
      isTopPick: false,
      rating: 6.3,
      country: "United States"
    }
  ];

  const handleAffiliateClick = (vpnName: string, price: number) => {
    // Track conversion for analytics
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'affiliate_click', {
        'vpn_name': vpnName,
        'vpn_price': price,
        'page': 'vpn-plans',
        'value': price
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('vpnPlans.metaTitle')}</title>
        <meta name="description" content={t('vpnPlans.metaDescription')} />
        <meta name="keywords" content={`VPN, ${t('brand.name')}, VPN comparison, best VPN 2025, NordVPN, ExpressVPN, Surfshark, ${currentLanguage.name} VPN`} />
        <link rel="canonical" href={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}vpn-plans`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('vpnPlans.metaTitle')} />
        <meta property="og:description" content={t('vpnPlans.metaDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}vpn-plans`} />
        <meta property="og:image" content="https://bestvpn.digital/og-image.jpg" />
        <meta property="og:locale" content={currentLanguage.code === 'en' ? 'en_US' : currentLanguage.code} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('vpnPlans.metaTitle')} />
        <meta name="twitter:description" content={t('vpnPlans.metaDescription')} />
        <meta name="twitter:image" content="https://bestvpn.digital/twitter-image.jpg" />
      </Helmet>

      <div className="responsive-container py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="responsive-heading text-gray-900 mb-4">
            {t('vpnPlans.title')}
          </h1>
          <p className="responsive-subheading text-gray-600 max-w-3xl mx-auto">
            {t('vpnPlans.subtitle')}
          </p>
        </div>

        {/* SEO Tips Banner */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-12 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{t('vpnPlans.seoTips.title')}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              {t('vpnPlans.seoTips.tip1')}
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              {t('vpnPlans.seoTips.tip2')}
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              {t('vpnPlans.seoTips.tip3')}
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              {t('vpnPlans.seoTips.tip4')}
            </li>
          </ul>
        </div>

        {/* Premium Comparison Table - Desktop */}
        <div className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {t('vpnPlans.table.vpnService')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {t('vpnPlans.table.servers')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {t('vpnPlans.table.speed')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {t('vpnPlans.table.devices')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {t('vpnPlans.table.price')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {t('vpnPlans.table.feature')}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">
                    {t('vpnPlans.table.action')}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {vpnPlans.map((vpn) => (
                  <tr 
                    key={vpn.id} 
                    className={`hover:bg-gray-50 transition-colors ${
                      vpn.isTopPick ? 'bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-l-orange-500' : ''
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img 
                          src={vpn.logo} 
                          alt={`${vpn.name} logo`} 
                          className="w-10 h-10 mr-3 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-sm font-medium text-gray-900">{vpn.name}</h3>
                            {vpn.isTopPick && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-orange-100 to-red-100 text-orange-800">
                                {t('vpnPlans.table.topDeal')}
                              </span>
                            )}
                            {vpn.id <= 5 && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                #{vpn.id}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(vpn.rating / 2)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="ml-1 text-xs text-gray-500">{vpn.rating}/10</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{vpn.serverCount.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">{vpn.speed} Mbps</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">
                          {vpn.deviceSupport === "Unlimited" ? t('vpnPlans.table.unlimited') : vpn.deviceSupport}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm font-bold text-gray-900">${vpn.price}</span>
                        <span className="text-xs text-gray-500 ml-1">/{t('common.month')}</span>
                      </div>
                      {vpn.isTopPick && (
                        <div className="text-xs text-green-600 font-medium mt-1">
                          {t('vpnPlans.table.saveUpTo')}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">
                        {vpn.featuredFeature}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={vpn.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleAffiliateClick(vpn.name, vpn.price)}
                        className={`group relative inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                          vpn.isTopPick
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                        }`}
                      >
                        <span className="flex items-center">
                          {t('vpnPlans.table.buyNow')}
                          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {vpn.isTopPick && (
                          <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                            70% OFF
                          </div>
                        )}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Premium Comparison Cards - Mobile & Tablet */}
        <div className="lg:hidden space-y-6 mb-12">
          {vpnPlans.map((vpn) => (
            <div
              key={vpn.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                vpn.isTopPick ? 'border-l-4 border-l-orange-500' : ''
              }`}
            >
              {/* Card Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={vpn.logo} 
                      alt={`${vpn.name} logo`} 
                      className="w-12 h-12 mr-3 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-bold text-gray-900">{vpn.name}</h3>
                        {vpn.isTopPick && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-100 to-red-100 text-orange-800">
                            {t('vpnPlans.table.topDeal')}
                          </span>
                        )}
                        {vpn.id <= 5 && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">
                            #{vpn.id}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(vpn.rating / 2)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{vpn.rating}/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-gray-900">${vpn.price}</div>
                    <div className="text-sm text-gray-500">/{t('common.month')}</div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">{t('vpnPlans.table.servers')}</div>
                      <div className="font-medium text-gray-900">{vpn.serverCount.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">{t('vpnPlans.table.speed')}</div>
                      <div className="font-medium text-gray-900">{vpn.speed} Mbps</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">{t('vpnPlans.table.devices')}</div>
                      <div className="font-medium text-gray-900">
                        {vpn.deviceSupport === "Unlimited" ? t('vpnPlans.table.unlimited') : vpn.deviceSupport}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <div className="text-xs text-gray-500">{t('vpnPlans.table.country')}</div>
                      <div className="font-medium text-gray-900">{vpn.country}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-1">{t('vpnPlans.table.feature')}</div>
                  <div className="text-sm text-gray-900">{vpn.featuredFeature}</div>
                </div>

                <a
                  href={vpn.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleAffiliateClick(vpn.name, vpn.price)}
                  className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                    vpn.isTopPick
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                  }`}
                >
                  <span className="flex items-center">
                    {t('vpnPlans.table.buyNow')}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t('whyTrustRecommendations')}
            </h2>
            <p className="text-gray-600">
              {t('testEveryVPN')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('rigorousTesting')}</h3>
              <p className="text-sm text-gray-600">{t('rigorousTestingDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('expertReviews')}</h3>
              <p className="text-sm text-gray-600">{t('expertReviewsDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('bestDeals')}</h3>
              <p className="text-sm text-gray-600">{t('bestDealsDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VPNPlansPage;