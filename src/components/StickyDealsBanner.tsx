import { useState, useEffect } from 'react';
import { X, Tag, ExternalLink } from 'lucide-react';
import { getTopDeal } from '../data/dealsData';
import { useLanguage } from '../contexts/LanguageContext';

export default function StickyDealsBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const { t } = useLanguage();
  const topDeal = getTopDeal();

  useEffect(() => {
    // Sayfa yüklendikten 3 saniye sonra banner'ı göster
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('dealBannerDismissed');
      if (!dismissed && topDeal) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [topDeal]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('dealBannerDismissed', 'true');
  };

  const handleClick = () => {
    // Analytics tracking
    if (window.gtag) {
      window.gtag('event', 'sticky_banner_click', {
        provider: topDeal?.provider,
        discount: topDeal?.discountPercent
      });
    }
  };

  if (!topDeal || isDismissed || !isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Deal Info */}
            <div className="flex items-center gap-4 flex-1">
              <div className="hidden md:flex items-center justify-center w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm">
                <Tag className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center px-2 py-1 bg-white/20 rounded text-xs font-bold backdrop-blur-sm">
                    🔥 {t('deals.hotDeal') || 'HOT DEAL'}
                  </span>
                  <span className="text-sm md:text-base font-bold">{topDeal.provider}</span>
                </div>
                <p className="text-xs md:text-sm font-medium">
                  {topDeal.title} - {topDeal.notes}
                </p>
              </div>

              {/* Discount Badge */}
              <div className="hidden sm:flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[80px]">
                <div className="text-3xl font-black">{topDeal.discountPercent}%</div>
                <div className="text-xs">{t('deals.off') || 'OFF'}</div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`/${t('nav.deals') || 'deals'}#${topDeal.id}`}
              onClick={handleClick}
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-lg whitespace-nowrap"
            >
              {t('deals.claimNow') || 'Claim Now'}
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

