import React from 'react';

interface AdBannerProps {
  provider: 'purevpn' | 'nordvpn' | 'surfshark';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ provider, size = 'medium', className = '' }) => {
  const getBannerConfig = () => {
    switch (provider) {
      case 'purevpn':
        return {
          url: 'https://www.purevpn.com/order-now.php?aff=49387047&a_bid=5db33662',
          imageSrc: 'https://affiliates.purevpn.com/accounts/default1/6hb82wqa2l/5db33662.png',
          alt: 'PureVPN - 82% OFF + 6 Extra months - Best VPN Deal!',
          width: 980,
          height: 120
        };
      case 'nordvpn':
        return {
          url: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902',
          imageSrc: '/api/placeholder/980/120',
          alt: 'NordVPN - Premium VPN Service',
          width: 980,
          height: 120
        };
      case 'surfshark':
        return {
          url: 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263',
          imageSrc: '/api/placeholder/980/120',
          alt: 'Surfshark - Unlimited Devices VPN',
          width: 980,
          height: 120
        };
      default:
        return {
          url: '#',
          imageSrc: '/api/placeholder/980/120',
          alt: 'VPN Advertisement',
          width: 980,
          height: 120
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'max-w-sm';
      case 'medium':
        return 'max-w-2xl';
      case 'large':
        return 'max-w-4xl';
      default:
        return 'max-w-2xl';
    }
  };

  const bannerConfig = getBannerConfig();

  return (
    <div className={`ad-banner-container ${getSizeClasses()} ${className}`}>
      <a 
        href={bannerConfig.url} 
        target="_top" 
        rel="noopener noreferrer"
        className="block transition-transform duration-200 hover:scale-105"
      >
        <img 
          src={bannerConfig.imageSrc}
          alt={bannerConfig.alt}
          title={bannerConfig.alt}
          width={bannerConfig.width}
          height={bannerConfig.height}
          className="w-full h-auto rounded-lg shadow-md border border-gray-200"
          loading="lazy"
        />
      </a>
      <div className="text-xs text-gray-500 text-center mt-2">
        Advertisement
      </div>
    </div>
  );
};

export default AdBanner;
