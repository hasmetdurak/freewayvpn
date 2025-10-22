// Utility functions for premium partner banners

interface BannerConfig {
  language: string;
  size: string;
  format: string;
  path: string;
}

// Banner configuration for different languages and sizes
const bannerConfigs: Record<string, BannerConfig[]> = {
  en: [
    { language: 'en', size: '728x90', format: 'jpg', path: '/premium partners banners/nordvpn banner/en-us/affiliate-sales-campaign-728x90-en.jpg' },
    { language: 'en', size: '300x250', format: 'png', path: '/premium partners banners/nordvpn banner/en-us/affiliate-sales-campaign-300x250.png' },
    { language: 'en', size: '160x600', format: 'jpg', path: '/premium partners banners/nordvpn banner/en-us/affiliate-sales-campaign-160x600-en.jpg' },
    { language: 'en', size: '320x50', format: 'png', path: '/premium partners banners/nordvpn banner/en-us/affiliate-sales-campaign-320x50.png' },
    { language: 'en', size: '1200x628', format: 'jpg', path: '/premium partners banners/nordvpn banner/en-us/affiliate-sales-campaign-1200x628-en.jpg' }
  ],
  de: [
    { language: 'de', size: '728x90', format: 'jpg', path: '/premium partners banners/nordvpn banner/de/affiliate-sales-campaign-728x90-de.jpg' },
    { language: 'de', size: '300x50', format: 'jpg', path: '/premium partners banners/nordvpn banner/de/affiliate-sales-campaign-300x50-de.jpg' },
    { language: 'de', size: '160x600', format: 'jpg', path: '/premium partners banners/nordvpn banner/de/affiliate-sales-campaign-160x600-de.jpg' },
    { language: 'de', size: '320x50', format: 'jpg', path: '/premium partners banners/nordvpn banner/de/affiliate-sales-campaign-320x50-de.jpg' },
    { language: 'de', size: '1200x628', format: 'jpg', path: '/premium partners banners/nordvpn banner/de/affiliate-sales-campaign-1200x628-de.jpg' }
  ],
  fr: [
    { language: 'fr', size: '728x90', format: 'jpg', path: '/premium partners banners/nordvpn banner/fr/affiliate-sales-campaign-728x90-fr.jpg' },
    { language: 'fr', size: '300x50', format: 'jpg', path: '/premium partners banners/nordvpn banner/fr/affiliate-sales-campaign-300x50-fr.jpg' },
    { language: 'fr', size: '160x600', format: 'jpg', path: '/premium partners banners/nordvpn banner/fr/affiliate-sales-campaign-160x600-fr.jpg' },
    { language: 'fr', size: '320x50', format: 'jpg', path: '/premium partners banners/nordvpn banner/fr/affiliate-sales-campaign-320x50-fr.jpg' },
    { language: 'fr', size: '1200x628', format: 'jpg', path: '/premium partners banners/nordvpn banner/fr/affiliate-sales-campaign-1200x628-fr.jpg' }
  ],
  es: [
    { language: 'es', size: '728x90', format: 'jpg', path: '/premium partners banners/nordvpn banner/es/affiliate-sales-campaign-728x90-es.jpg' },
    { language: 'es', size: '320x50', format: 'png', path: '/premium partners banners/nordvpn banner/es/affiliate-sales-campaign-320x50.png' },
    { language: 'es', size: '160x600', format: 'jpg', path: '/premium partners banners/nordvpn banner/es/affiliate-sales-campaign-160x600-es.jpg' },
    { language: 'es', size: '320x100', format: 'png', path: '/premium partners banners/nordvpn banner/es/affiliate-sales-campaign-320x100.png' },
    { language: 'es', size: '1200x628', format: 'jpg', path: '/premium partners banners/nordvpn banner/es/affiliate-sales-campaign-1200x628-es.jpg' }
  ],
  pt: [
    { language: 'pt', size: '728x90', format: 'jpg', path: '/premium partners banners/nordvpn banner/pt/affiliate-sales-campaign-728x90-pt.jpg' },
    { language: 'pt', size: '320x50', format: 'png', path: '/premium partners banners/nordvpn banner/pt/affiliate-sales-campaign-320x50.png' },
    { language: 'pt', size: '160x600', format: 'jpg', path: '/premium partners banners/nordvpn banner/pt/affiliate-sales-campaign-160x600-pt.jpg' },
    { language: 'pt', size: '320x100', format: 'png', path: '/premium partners banners/nordvpn banner/pt/affiliate-sales-campaign-320x100.png' },
    { language: 'pt', size: '1200x628', format: 'jpg', path: '/premium partners banners/nordvpn banner/pt/affiliate-sales-campaign-1200x628-pt.jpg' }
  ]
};

/**
 * Get banner configuration for a specific language and size
 * @param language The language code (e.g., 'en', 'de', 'fr')
 * @param size The banner size (e.g., '728x90', '300x250')
 * @returns Banner configuration or null if not found
 */
export function getBannerConfig(language: string, size: string): BannerConfig | null {
  const configs = bannerConfigs[language];
  if (!configs) return null;
  
  const config = configs.find(config => config.size === size);
  return config || null;
}

/**
 * Get all banner configurations for a specific language
 * @param language The language code
 * @returns Array of banner configurations
 */
export function getAllBannerConfigs(language: string): BannerConfig[] {
  return bannerConfigs[language] || [];
}

/**
 * Generate HTML for a banner
 * @param language The language code
 * @param size The banner size
 * @param affiliateLink The affiliate link
 * @returns HTML string for the banner
 */
export function generateBannerHTML(language: string, size: string, affiliateLink: string): string {
  const config = getBannerConfig(language, size);
  if (!config) return '';
  
  return `<a href="${affiliateLink}" target="_blank" rel="noopener noreferrer">
    <img src="${config.path}" alt="VPN Banner" width="${size.split('x')[0]}" height="${size.split('x')[1]}" />
  </a>`;
}

/**
 * Generate responsive banner HTML with multiple sizes
 * @param language The language code
 * @param affiliateLink The affiliate link
 * @returns HTML string for responsive banners
 */
export function generateResponsiveBannerHTML(language: string, affiliateLink: string): string {
  const configs = getAllBannerConfigs(language);
  if (configs.length === 0) return '';
  
  // Generate HTML for the largest banner as default
  const defaultConfig = configs[0];
  
  // Generate picture element with different sizes for responsiveness
  let html = `<a href="${affiliateLink}" target="_blank" rel="noopener noreferrer">`;
  
  if (configs.length > 1) {
    html += '<picture>';
    
    // Add sources for different screen sizes (simplified)
    configs.slice(1).forEach((config, index) => {
      const width = config.size.split('x')[0];
      html += `<source media="(max-width: ${width}px)" srcset="${config.path}">`;
    });
    
    html += `<img src="${defaultConfig.path}" alt="VPN Banner" />`;
    html += '</picture>';
  } else {
    html += `<img src="${defaultConfig.path}" alt="VPN Banner" />`;
  }
  
  html += '</a>';
  
  return html;
}