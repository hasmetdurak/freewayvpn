import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { dealsData, Deal } from '../data/dealsData';
import { Clock, Tag, CheckCircle, ExternalLink, Copy, Check, Activity } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function DealsPage() {
  const { t } = useLanguage();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<{ [key: string]: string }>({});

  // Countdown timer için
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeRemaining: { [key: string]: string } = {};
      dealsData.forEach(deal => {
        const now = new Date().getTime();
        const expiry = new Date(deal.expiresAt).getTime();
        const diff = expiry - now;

        if (diff > 0) {
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          
          if (days > 0) {
            newTimeRemaining[deal.id] = `${days}d ${hours}h`;
          } else if (hours > 0) {
            newTimeRemaining[deal.id] = `${hours}h ${minutes}m`;
          } else {
            newTimeRemaining[deal.id] = `${minutes}m`;
          }
        }
      });
      setTimeRemaining(newTimeRemaining);
    }, 60000); // Her dakika güncelle

    // İlk çalıştırma
    const initialUpdate: { [key: string]: string } = {};
    dealsData.forEach(deal => {
      const now = new Date().getTime();
      const expiry = new Date(deal.expiresAt).getTime();
      const diff = expiry - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        if (days > 0) {
          initialUpdate[deal.id] = `${days}d ${hours}h`;
        } else if (hours > 0) {
          initialUpdate[deal.id] = `${hours}h ${minutes}m`;
        } else {
          initialUpdate[deal.id] = `${minutes}m`;
        }
      }
    });
    setTimeRemaining(initialUpdate);

    return () => clearInterval(interval);
  }, []);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const trackDealClick = (deal: Deal) => {
    // Analytics tracking
    if (window.gtag) {
      window.gtag('event', 'deal_click', {
        provider: deal.provider,
        discount: deal.discountPercent,
        deal_id: deal.id
      });
    }
  };

  const activeDeals = dealsData
    .filter(deal => new Date(deal.expiresAt).getTime() > new Date().getTime())
    .sort((a, b) => {
      if (a.priority !== b.priority) return a.priority - b.priority;
      return b.discountPercent - a.discountPercent;
    });

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case "EDITOR'S CHOICE": return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'FLASH SALE': return 'bg-gradient-to-r from-red-600 to-orange-600';
      case 'FASTEST': return 'bg-gradient-to-r from-blue-600 to-cyan-600';
      case 'BEST STREAMING': return 'bg-gradient-to-r from-green-600 to-emerald-600';
      case 'OPEN SOURCE': return 'bg-gradient-to-r from-indigo-600 to-purple-600';
      case 'MOST PRIVATE': return 'bg-gradient-to-r from-gray-700 to-gray-900';
      default: return 'bg-gradient-to-r from-orange-600 to-red-600';
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('deals.metaTitle') || 'Best VPN Deals & Coupons 2025'} | BestVPN.digital</title>
        <meta name="description" content={t('deals.metaDescription') || 'Exclusive VPN deals & coupon codes. Save up to 86% on premium VPN services. Verified daily.'} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-6 sm:py-8 lg:py-12 px-4">
        <div className="responsive-container">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Tag className="w-4 h-4" />
              {t('deals.liveDeals') || 'LIVE DEALS'}
            </div>
            <h1 className="responsive-heading text-gray-900 mb-4">
              {t('deals.title') || 'Best VPN Deals & Coupons'}
            </h1>
            <p className="responsive-subheading text-gray-600 max-w-3xl mx-auto">
              {t('deals.subtitle') || 'Exclusive discounts up to 86% OFF. All deals verified and updated daily.'}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="responsive-grid mb-8 sm:mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-green-200">
              <div className="text-4xl font-bold text-green-600">{activeDeals.length}</div>
              <div className="text-gray-600 mt-2">{t('deals.activeDeals') || 'Active Deals'}</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-orange-200">
              <div className="text-4xl font-bold text-orange-600">86%</div>
              <div className="text-gray-600 mt-2">{t('deals.maxDiscount') || 'Max Discount'}</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-2 border-blue-200">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600 mt-2">{t('deals.verified') || 'Verified'}</div>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="responsive-grid">
            {activeDeals.map((deal, index) => (
              <div
                key={deal.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  index === 0 ? 'border-orange-400 ring-4 ring-orange-200' : 'border-gray-200'
                }`}
              >
                {/* Badge */}
                {deal.badge && (
                  <div className={`${getBadgeColor(deal.badge)} text-white text-center py-2 px-4 text-sm font-bold`}>
                    {deal.badge}
                  </div>
                )}

                <div className="responsive-card p-4 sm:p-6">
                  {/* Provider & Discount */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{deal.provider}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{deal.title}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-orange-600">{deal.discountPercent}%</div>
                      <div className="text-sm text-gray-500">{t('deals.off') || 'OFF'}</div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-blue-900 font-medium">{deal.notes}</p>
                  </div>

                  {/* Verified Badge */}
                  {deal.verified && (
                    <div className="flex items-center gap-2 text-green-600 mb-4">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-semibold">{t('deals.verifiedDeal') || 'Verified Deal'}</span>
                    </div>
                  )}

                  {/* Countdown Timer */}
                  {timeRemaining[deal.id] && (
                    <div className="flex items-center gap-2 bg-red-50 text-red-700 px-3 py-2 rounded-lg mb-4">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-bold">
                        {t('deals.expiresIn') || 'Expires in'}: {timeRemaining[deal.id]}
                      </span>
                    </div>
                  )}

                  {/* Coupon Code */}
                  {deal.couponCode && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-dashed border-gray-400 rounded-lg px-4 py-3">
                          <div className="text-xs text-gray-600 mb-1">{t('deals.couponCode') || 'Coupon Code'}</div>
                          <div className="text-xl font-mono font-black text-gray-900">{deal.couponCode}</div>
                        </div>
                        <button
                          onClick={() => copyCode(deal.couponCode!)}
                          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-lg transition-colors"
                        >
                          {copiedCode === deal.couponCode ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <a
                    href={deal.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackDealClick(deal)}
                    className="block w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t('deals.claimDeal') || 'Claim This Deal'}
                      <ExternalLink className="w-5 h-5" />
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Signals */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">{t('deals.trustTitle') || 'Why Trust Our Deals?'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <CheckCircle className="w-12 h-12 mx-auto mb-3" />
                <div className="font-bold">{t('deals.verified') || 'Verified Daily'}</div>
                <div className="text-sm text-blue-100">{t('deals.verifiedDesc') || 'All codes tested before publishing'}</div>
              </div>
              <div>
                <Activity className="w-12 h-12 mx-auto mb-3" />
                <div className="font-bold">{t('deals.updated') || 'Always Updated'}</div>
                <div className="text-sm text-blue-100">{t('deals.updatedDesc') || 'New deals added constantly'}</div>
              </div>
              <div>
                <ExternalLink className="w-12 h-12 mx-auto mb-3" />
                <div className="font-bold">{t('deals.exclusive') || 'Exclusive Offers'}</div>
                <div className="text-sm text-blue-100">{t('deals.exclusiveDesc') || 'Special partnerships for better prices'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

