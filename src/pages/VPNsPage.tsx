import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Star, Award, Shield, Zap, Users, Globe, ChevronDown, ChevronUp, ArrowUpDown, TrendingUp, DollarSign, ExternalLink } from 'lucide-react';
import { vpnData, VPN, allVPNs } from '../data/vpnData';
import { useLanguage } from '../contexts/LanguageContext';
import AffiliateButton from '../components/AffiliateButton';
import NaturalAffiliate from '../components/NaturalAffiliate';
import LocalStreamingGuide from '../components/LocalStreamingGuide';
import { insertCollectionPageSchema } from '../utils/reviewSchema';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const VPNsPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'speed' | 'price' | 'servers' | 'rating'>('rating');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filterCountry, setFilterCountry] = useState('all');
  const [filterPrice, setFilterPrice] = useState('all');
  const [hoveredVPN, setHoveredVPN] = useState<number | null>(null);

  const countries = Array.from(new Set(allVPNs.map(vpn => vpn.country))).sort();
  
  // Localize VPN data
  const localizedVPNs = useMemo(() => {
    return allVPNs.map(vpn => {
      const translation = vpn.translations?.[currentLanguage.code];
      if (translation) {
        return {
          ...vpn,
          description: translation.description,
          securityFeatures: translation.securityFeatures
        };
      }
      return vpn;
    });
  }, [currentLanguage.code]);
  
  const filteredAndSortedVPNs = useMemo(() => {
    let filtered = localizedVPNs.filter(vpn => {
      const matchesSearch = vpn.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = filterCountry === 'all' || vpn.country === filterCountry;
      const matchesPrice = filterPrice === 'all' || 
        (filterPrice === 'under3' && vpn.price < 3) ||
        (filterPrice === '3to6' && vpn.price >= 3 && vpn.price <= 6) ||
        (filterPrice === 'over6' && vpn.price > 6);
      
      return matchesSearch && matchesCountry && matchesPrice;
    });

    // Sort top picks first, then by selected criteria
    filtered = filtered.sort((a, b) => {
      if (a.isTopPick && !b.isTopPick) return -1;
      if (!a.isTopPick && b.isTopPick) return 1;
      
      let comparison = 0;
      switch (sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'speed':
          comparison = a.speed - b.speed;
          break;
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'servers':
          comparison = a.serverCount - b.serverCount;
          break;
        case 'rating':
          comparison = a.rating - b.rating;
          break;
        default:
          return 0;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [searchTerm, sortBy, sortOrder, filterCountry, filterPrice, localizedVPNs]);

  const handleSort = (field: typeof sortBy) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const handleAffiliateClick = (vpn: VPN) => {
    // Track conversion for analytics
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'affiliate_click', {
        'vpn_name': vpn.name,
        'vpn_price': vpn.price,
        'is_top_pick': vpn.isTopPick,
        'value': vpn.price
      });
    }
  };

  // Insert CollectionPage schema for SEO
  React.useEffect(() => {
    insertCollectionPageSchema(localizedVPNs);
  }, [localizedVPNs]);

  return (
    <>
      <Helmet>
        <title>{`${t('compareVpns')} | ${t('brand.name')} - ${currentLanguage.name}`}</title>
        <meta name="description" content={t('findPerfectVpn')} />
        <meta name="keywords" content={`VPN, ${t('brand.name')}, VPN comparison, best VPN 2025, NordVPN, ExpressVPN, Surfshark, ${currentLanguage.name} VPN`} />
        <link rel="canonical" href={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}vpns`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${t('compareVpns')} | ${t('brand.name')}`} />
        <meta property="og:description" content={t('findPerfectVpn')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}vpns`} />
        <meta property="og:image" content="https://bestvpn.digital/og-image.jpg" />
        <meta property="og:locale" content={currentLanguage.code === 'en' ? 'en_US' : currentLanguage.code} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('compareVpns')} | ${t('brand.name')}`} />
        <meta name="twitter:description" content={t('findPerfectVpn')} />
        <meta name="twitter:image" content="https://bestvpn.digital/twitter-image.jpg" />
      </Helmet>
      
      <div className="responsive-container py-4 sm:py-6 lg:py-8">
        {/* Hero Section */}
        <div className="mb-8 text-center">
        <h1 className="responsive-heading text-gray-900 mb-4">
          {t('compareVpns')}
        </h1>
        <p className="responsive-subheading text-gray-600 max-w-3xl mx-auto mb-6">
          {t('findPerfectVpn')}
          <span className="block mt-2 text-sm text-orange-600 font-medium">
            {t('exclusiveDeals')}
          </span>
        </p>
        
        {/* Top Picks Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg p-4 mb-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-2">
            <Award className="h-6 w-6 mr-2" />
            <span className="font-bold text-lg">{t('editorTopPicks')}</span>
          </div>
          <p className="text-sm opacity-90">
            {t('expertVerified')}<br />
            {t('independentlyTested')}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="responsive-card mb-6 sm:mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={t('searchVpns')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">{t('allCountries')}</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">{t('allPrices')}</option>
            <option value="under3">{t('under3')}</option>
            <option value="3to6">{t('3to6')}</option>
            <option value="over6">{t('over6')}</option>
          </select>
        </div>
      </div>

      {/* VPN Table - Desktop */}
      <div className="hidden lg:block bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('name')}
                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                  >
                    <span>{t('vpnService')}</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('servers')}
                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                  >
                    <span>{t('servers')}</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('speed')}
                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                  >
                    <span>{t('speed')}</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('devices')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <button
                    onClick={() => handleSort('price')}
                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                  >
                    <span>{t('price')}</span>
                    <ArrowUpDown className="h-3 w-3" />
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {t('action')}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedVPNs.map((vpn, index) => (
                <tr
                  key={vpn.id}
                  className={`hover:bg-gray-50 transition-colors cursor-pointer relative ${
                    vpn.isTopPick ? 'bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-l-orange-500' : ''
                  }`}
                  onMouseEnter={() => setHoveredVPN(vpn.id)}
                  onMouseLeave={() => setHoveredVPN(null)}
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
                          target.nextSibling?.addEventListener('load', () => {
                            target.style.display = 'block';
                          });
                        }}
                      />
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-sm font-medium text-gray-900">{vpn.name}</h3>
                          {vpn.isTopPick && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 animate-pulse">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              {t('topDeal')}
                            </span>
                          )}
                          {index < 3 && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              #{index + 1}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center mt-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(vpn.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-1 text-xs text-gray-500">{vpn.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover tooltip */}
                    {hoveredVPN === vpn.id && (
                      <div className="absolute z-10 left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl p-4">
                        <div className="flex items-start">
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
                            <h4 className="font-semibold text-gray-900">{vpn.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{vpn.description}</p>
                            <div className="mt-2 text-xs text-gray-500">
                              {t('basedIn')} {vpn.country}
                            </div>
                            {vpn.isTopPick && (
                              <div className="mt-2 text-xs text-orange-600 font-medium">
                                {t('exclusiveDealAvailable')}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-gray-400 mr-2" />
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
                        {vpn.deviceSupport === 999 ? t('unlimited') : vpn.deviceSupport}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm font-medium text-gray-900">${vpn.price}</span>
                      <span className="text-xs text-gray-500 ml-1">/{t('common.month')}</span>
                    </div>
                    {vpn.isTopPick && (
                      <div className="text-xs text-green-600 font-medium mt-1">
                        {t('save70')}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-2">
                      <a
                        href={vpn.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleAffiliateClick(vpn)}
                        className={`group relative inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                          vpn.isTopPick
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                        }`}
                      >
                        <span className="flex items-center">
                          {vpn.isTopPick ? t('getDeal') : t('getVPN')}
                          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                        {vpn.isTopPick && (
                          <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                            70% OFF
                          </div>
                        )}
                      </a>
                      
                      {vpn.isTopPick && (
                        <div className="text-center">
                          <span className="text-xs text-orange-600 font-medium">
                            ⏰ {t('limitedTime')}
                          </span>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredAndSortedVPNs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('noVPNsFound')}</p>
          </div>
        )}
      </div>

      {/* VPN Cards - Mobile & Tablet */}
      <div className="lg:hidden space-y-4">
        {filteredAndSortedVPNs.map((vpn, index) => (
          <div
            key={vpn.id}
            className={`responsive-card vpn-card-hover ${
              vpn.isTopPick ? 'border-l-4 border-l-orange-500 bg-gradient-to-r from-orange-50 to-red-50' : ''
            }`}
          >
            {/* Card Header */}
            <div className="mobile-table-card-header">
              <div className="flex items-center space-x-3">
                <img 
                  src={vpn.logo} 
                  alt={`${vpn.name} logo`} 
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-bold text-gray-900">{vpn.name}</h3>
                    {vpn.isTopPick && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 animate-pulse">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {t('topDeal')}
                      </span>
                    )}
                    {index < 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">
                        #{index + 1}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(vpn.rating)
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
                <div className="text-2xl font-bold text-gray-900">${vpn.price}</div>
                <div className="text-sm text-gray-500">/{t('common.month')}</div>
                {vpn.isTopPick && (
                  <div className="text-xs text-green-600 font-bold mt-1">
                    {t('save70')}
                  </div>
                )}
              </div>
            </div>

            {/* Card Body */}
            <div className="mobile-table-card-body">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="mobile-table-card-row">
                  <span className="mobile-table-card-label">{t('servers')}</span>
                  <span className="mobile-table-card-value">{vpn.serverCount.toLocaleString()}</span>
                </div>
                <div className="mobile-table-card-row">
                  <span className="mobile-table-card-label">{t('speed')}</span>
                  <span className="mobile-table-card-value">{vpn.speed} Mbps</span>
                </div>
                <div className="mobile-table-card-row">
                  <span className="mobile-table-card-label">{t('devices')}</span>
                  <span className="mobile-table-card-value">
                    {vpn.deviceSupport === 999 ? t('unlimited') : vpn.deviceSupport}
                  </span>
                </div>
                <div className="mobile-table-card-row">
                  <span className="mobile-table-card-label">{t('basedIn')}</span>
                  <span className="mobile-table-card-value">{vpn.country}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{vpn.description}</p>

              {/* Action Button */}
              <a
                href={vpn.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleAffiliateClick(vpn)}
                className={`mobile-button w-full inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  vpn.isTopPick
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg'
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700'
                }`}
              >
                <span className="flex items-center">
                  {vpn.isTopPick ? t('getDeal') : t('getVPN')}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </span>
                {vpn.isTopPick && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                    70% OFF
                  </div>
                )}
              </a>

              {vpn.isTopPick && (
                <div className="text-center mt-2">
                  <span className="text-xs text-orange-600 font-medium">
                    ⏰ {t('limitedTime')}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredAndSortedVPNs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('noVPNsFound')}</p>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="mt-6 text-center text-sm text-gray-500">
        {t('showingXofY').replace('{0}', filteredAndSortedVPNs.length.toString()).replace('{1}', allVPNs.length.toString())}
      </div>
      
      {/* Natural Affiliate Integration */}
      <div className="mt-12">
        <NaturalAffiliate context="streaming" className="mb-6" />
        <NaturalAffiliate context="privacy" className="mb-6" />
      </div>
      
      {/* Local Streaming Guide */}
      <div className="mt-12">
        <LocalStreamingGuide />
      </div>
      
      {/* Trust Signals */}
      <div className="mt-8 sm:mt-12 responsive-card bg-gray-50">
        <div className="text-center mb-6">
          <h2 className="responsive-heading text-gray-900 mb-2">{t('whyTrustRecommendations')}</h2>
          <p className="responsive-subheading text-gray-600">{t('testEveryVPN')}</p>
        </div>
        
        <div className="responsive-grid">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t('rigorousTesting')}</h3>
            <p className="text-sm text-gray-600">{t('rigorousTestingDesc')}</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t('expertReviews')}</h3>
            <p className="text-sm text-gray-600">{t('expertReviewsDesc')}</p>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-orange-600" />
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

export default VPNsPage;