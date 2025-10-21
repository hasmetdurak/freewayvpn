import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface AdBannerProps {
  provider: 'purevpn' | 'nordvpn' | 'surfshark';
  size?: 'small' | 'medium' | 'large';
  position?: 'top' | 'middle' | 'bottom' | 'sidebar';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ provider, size = 'medium', position = 'middle', className = '' }) => {
  const { currentLanguage } = useLanguage();
  // Affiliate URLs
  const getAffiliateUrl = () => {
    switch (provider) {
      case 'nordvpn':
        return 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902';
      case 'surfshark':
        return 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263';
      case 'purevpn':
        return 'https://www.purevpn.com/order-now.php?aff=49387047&a_bid=5db33662';
      default:
        return '#';
    }
  };

  // Get localized banner path
  const getBannerPath = () => {
    const lang = currentLanguage.code;
    const sizeMap = {
      small: '320x100',
      medium: '728x90',
      large: '970x250'
    };
    const dimensions = sizeMap[size];
    return `/premium-partners/${provider}/banners/${provider}-banner-${lang}-${dimensions}.svg`;
  };

  // Fallback to English banner
  const getFallbackPath = () => {
    const sizeMap = {
      small: '320x100',
      medium: '728x90',
      large: '970x250'
    };
    const dimensions = sizeMap[size];
    return `/premium-partners/${provider}/banners/${provider}-banner-en-${dimensions}.svg`;
  };

  // Localized CTA text
  const getLocalizedCTA = () => {
    const ctas: Record<string, Record<string, string>> = {
      en: { nordvpn: 'Get NordVPN - Premium VPN Service', surfshark: 'Get Surfshark - Unlimited Devices', purevpn: 'Get PureVPN - Best VPN Deal' },
      ko: { nordvpn: 'NordVPN 받기 - 프리미엄 VPN 서비스', surfshark: 'Surfshark 받기 - 무제한 기기', purevpn: 'PureVPN 받기 - 최고의 VPN 딜' },
      de: { nordvpn: 'NordVPN holen - Premium VPN Service', surfshark: 'Surfshark holen - Unbegrenzte Geräte', purevpn: 'PureVPN holen - Bestes VPN Angebot' },
      ja: { nordvpn: 'NordVPNを入手 - プレミアムVPNサービス', surfshark: 'Surfsharkを入手 - 無制限デバイス', purevpn: 'PureVPNを入手 - 最高のVPN取引' },
      fr: { nordvpn: 'Obtenir NordVPN - Service VPN Premium', surfshark: 'Obtenir Surfshark - Appareils Illimités', purevpn: 'Obtenir PureVPN - Meilleure Offre VPN' },
      es: { nordvpn: 'Obtener NordVPN - Servicio VPN Premium', surfshark: 'Obtener Surfshark - Dispositivos Ilimitados', purevpn: 'Obtener PureVPN - Mejor Oferta VPN' },
      zh: { nordvpn: '获取 NordVPN - 高级VPN服务', surfshark: '获取 Surfshark - 无限设备', purevpn: '获取 PureVPN - 最佳VPN优惠' },
      ar: { nordvpn: 'احصل على NordVPN - خدمة VPN متميزة', surfshark: 'احصل على Surfshark - أجهزة غير محدودة', purevpn: 'احصل على PureVPN - أفضل عرض VPN' },
      pt: { nordvpn: 'Obter NordVPN - Serviço VPN Premium', surfshark: 'Obter Surfshark - Dispositivos Ilimitados', purevpn: 'Obter PureVPN - Melhor Oferta VPN' },
      ru: { nordvpn: 'Получить NordVPN - Премиум VPN Сервис', surfshark: 'Получить Surfshark - Неограниченные Устройства', purevpn: 'Получить PureVPN - Лучшее VPN Предложение' },
      it: { nordvpn: 'Ottieni NordVPN - Servizio VPN Premium', surfshark: 'Ottieni Surfshark - Dispositivi Illimitati', purevpn: 'Ottieni PureVPN - Migliore Offerta VPN' },
      pl: { nordvpn: 'Pobierz NordVPN - Usługa Premium VPN', surfshark: 'Pobierz Surfshark - Nieograniczone Urządzenia', purevpn: 'Pobierz PureVPN - Najlepsza Oferta VPN' },
      nl: { nordvpn: 'Krijg NordVPN - Premium VPN Service', surfshark: 'Krijg Surfshark - Onbeperkte Apparaten', purevpn: 'Krijg PureVPN - Beste VPN Deal' },
      tr: { nordvpn: 'NordVPN Edinin - Premium VPN Hizmeti', surfshark: 'Surfshark Edinin - Sınırsız Cihaz', purevpn: 'PureVPN Edinin - En İyi VPN Fırsatı' },
      vi: { nordvpn: 'Nhận NordVPN - Dịch vụ VPN Cao cấp', surfshark: 'Nhận Surfshark - Thiết bị Không giới hạn', purevpn: 'Nhận PureVPN - Ưu đãi VPN Tốt nhất' },
      th: { nordvpn: 'รับ NordVPN - บริการ VPN พรีเมียม', surfshark: 'รับ Surfshark - อุปกรณ์ไม่จำกัด', purevpn: 'รับ PureVPN - ดีล VPN ที่ดีที่สุด' },
      id: { nordvpn: 'Dapatkan NordVPN - Layanan VPN Premium', surfshark: 'Dapatkan Surfshark - Perangkat Tak Terbatas', purevpn: 'Dapatkan PureVPN - Penawaran VPN Terbaik' },
      hi: { nordvpn: 'NordVPN प्राप्त करें - प्रीमियम VPN सेवा', surfshark: 'Surfshark प्राप्त करें - असीमित डिवाइस', purevpn: 'PureVPN प्राप्त करें - सर्वश्रेष्ठ VPN डील' }
    };
    return ctas[currentLanguage.code]?.[provider] || ctas['en'][provider];
  };

  // Localized "Advertisement" label
  const getAdLabel = () => {
    const labels: Record<string, string> = {
      en: 'Advertisement', ko: '광고', de: 'Werbung', ja: '広告', fr: 'Publicité', es: 'Publicidad',
      zh: '广告', ar: 'إعلان', pt: 'Publicidade', ru: 'Реклама', it: 'Pubblicità', pl: 'Reklama',
      nl: 'Advertentie', tr: 'Reklam', vi: 'Quảng cáo', th: 'โฆษณา', id: 'Iklan', hi: 'विज्ञापन'
    };
    return labels[currentLanguage.code] || labels['en'];
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'max-w-sm mx-auto';
      case 'medium':
        return 'max-w-3xl mx-auto';
      case 'large':
        return 'max-w-5xl mx-auto';
      default:
        return 'max-w-3xl mx-auto';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top': return 'mb-8';
      case 'middle': return 'my-8';
      case 'bottom': return 'mt-8';
      case 'sidebar': return 'sticky top-24';
      default: return 'my-8';
    }
  };

  const bannerPath = getBannerPath();
  const fallbackPath = getFallbackPath();
  const affiliateUrl = getAffiliateUrl();
  const ctaText = getLocalizedCTA();
  const adLabel = getAdLabel();

  return (
    <div className={`ad-banner-container ${getSizeClasses()} ${getPositionClasses()} ${className}`}>
      <a 
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
        aria-label={ctaText}
      >
        <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors">
          <picture>
            <source srcSet={bannerPath} type="image/svg+xml" />
            <img 
              src={fallbackPath}
              alt={ctaText}
              title={ctaText}
              className="w-full h-auto"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== fallbackPath) {
                  target.src = fallbackPath;
                }
              }}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
        </div>
      </a>
      <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2 font-medium">
        {adLabel}
      </div>
    </div>
  );
};

export default AdBanner;
