// Geo IP Detection and Subdomain Management
export interface GeoLocation {
  country: string;
  countryCode: string;
  region: string;
  city: string;
  timezone: string;
  currency: string;
}

export interface SubdomainConfig {
  subdomain: string;
  language: string;
  country: string;
  isDefault: boolean;
}

// Country to Language mapping
export const countryLanguageMap: Record<string, string> = {
  // English speaking countries
  'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en',
  
  // German speaking countries
  'DE': 'de', 'AT': 'de', 'CH': 'de', 'LI': 'de',
  
  // French speaking countries
  'FR': 'fr', 'BE': 'fr', 'LU': 'fr', 'MC': 'fr', 'SN': 'fr', 'CI': 'fr', 'ML': 'fr', 'BF': 'fr',
  
  // Spanish speaking countries
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es', 'CL': 'es', 'EC': 'es',
  'GT': 'es', 'CU': 'es', 'BO': 'es', 'DO': 'es', 'HN': 'es', 'PY': 'es', 'SV': 'es', 'NI': 'es',
  'CR': 'es', 'PA': 'es', 'UY': 'es', 'PR': 'es',
  
  // Italian speaking countries
  'IT': 'it', 'SM': 'it', 'VA': 'it',
  
  // Portuguese speaking countries
  'PT': 'pt', 'BR': 'pt', 'AO': 'pt', 'MZ': 'pt', 'CV': 'pt', 'GW': 'pt', 'ST': 'pt', 'TL': 'pt',
  
  // Russian speaking countries
  'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'KG': 'ru', 'UZ': 'ru', 'AM': 'ru', 'AZ': 'ru',
  'GE': 'ru', 'MD': 'ru', 'UA': 'ru',
  
  // Chinese speaking countries/regions
  'CN': 'zh', 'HK': 'zh', 'TW': 'zh', 'SG': 'zh', 'MO': 'zh',
  
  // Japanese
  'JP': 'ja',
  
  // Korean
  'KR': 'ko',
  
  // Arabic speaking countries
  'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'IQ': 'ar', 'JO': 'ar', 'LB': 'ar', 'KW': 'ar', 'QA': 'ar',
  'BH': 'ar', 'OM': 'ar', 'YE': 'ar', 'SY': 'ar', 'PS': 'ar', 'MA': 'ar', 'DZ': 'ar', 'TN': 'ar',
  'LY': 'ar', 'SD': 'ar', 'SO': 'ar', 'DJ': 'ar', 'KM': 'ar', 'MR': 'ar',
  
  // Persian speaking countries
  'IR': 'fa', 'AF': 'fa', 'TJ': 'fa',
  
  // Turkish speaking countries
  'TR': 'tr', 'CY': 'tr',
  
  // Nordic countries
  'NO': 'nb', 'SE': 'sv', 'FI': 'fi', 'DK': 'da', 'IS': 'is',
  
  // Polish
  'PL': 'pl',
  
  // Thai
  'TH': 'th',
  
  // Vietnamese
  'VN': 'vi',
  
  // Filipino
  'PH': 'tl',
  
  // Indonesian
  'ID': 'id',
  
  // Hindi
  'IN': 'hi'
};

// Subdomain configurations
export const subdomainConfigs: SubdomainConfig[] = [
  { subdomain: 'de', language: 'de', country: 'DE', isDefault: false },
  { subdomain: 'fr', language: 'fr', country: 'FR', isDefault: false },
  { subdomain: 'es', language: 'es', country: 'ES', isDefault: false },
  { subdomain: 'it', language: 'it', country: 'IT', isDefault: false },
  { subdomain: 'pt', language: 'pt', country: 'PT', isDefault: false },
  { subdomain: 'ru', language: 'ru', country: 'RU', isDefault: false },
  { subdomain: 'zh', language: 'zh', country: 'CN', isDefault: false },
  { subdomain: 'ja', language: 'ja', country: 'JP', isDefault: false },
  { subdomain: 'ko', language: 'ko', country: 'KR', isDefault: false },
  { subdomain: 'ar', language: 'ar', country: 'SA', isDefault: false },
  { subdomain: 'tr', language: 'tr', country: 'TR', isDefault: false },
  { subdomain: 'pl', language: 'pl', country: 'PL', isDefault: false },
  { subdomain: 'th', language: 'th', country: 'TH', isDefault: false },
  { subdomain: 'vi', language: 'vi', country: 'VN', isDefault: false },
  { subdomain: 'id', language: 'id', country: 'ID', isDefault: false },
  { subdomain: 'hi', language: 'hi', country: 'IN', isDefault: false },
  { subdomain: 'www', language: 'en', country: 'US', isDefault: true }
];

// Geo IP Detection using multiple services for reliability
export class GeoDetector {
  private static instance: GeoDetector;
  private cache: Map<string, GeoLocation> = new Map();
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

  static getInstance(): GeoDetector {
    if (!GeoDetector.instance) {
      GeoDetector.instance = new GeoDetector();
    }
    return GeoDetector.instance;
  }

  async detectLocation(): Promise<GeoLocation | null> {
    try {
      // Try multiple services for better reliability
      const services = [
        this.getLocationFromIPAPI,
        this.getLocationFromIPInfo,
        this.getLocationFromIPGeolocation
      ];

      for (const service of services) {
        try {
          const location = await service();
          if (location) {
            this.cacheLocation(location);
            return location;
          }
        } catch (error) {
          console.warn('Geo detection service failed:', error);
          continue;
        }
      }

      return null;
    } catch (error) {
      console.error('Geo detection failed:', error);
      return null;
    }
  }

  private async getLocationFromIPAPI(): Promise<GeoLocation | null> {
    const response = await fetch('https://ipapi.co/json/', {
      timeout: 5000
    });
    
    if (!response.ok) throw new Error('IPAPI request failed');
    
    const data = await response.json();
    return {
      country: data.country_name,
      countryCode: data.country_code,
      region: data.region,
      city: data.city,
      timezone: data.timezone,
      currency: data.currency
    };
  }

  private async getLocationFromIPInfo(): Promise<GeoLocation | null> {
    const response = await fetch('https://ipinfo.io/json', {
      timeout: 5000
    });
    
    if (!response.ok) throw new Error('IPInfo request failed');
    
    const data = await response.json();
    return {
      country: data.country,
      countryCode: data.country,
      region: data.region,
      city: data.city,
      timezone: data.timezone,
      currency: this.getCurrencyFromCountry(data.country)
    };
  }

  private async getLocationFromIPGeolocation(): Promise<GeoLocation | null> {
    const response = await fetch('https://ipgeolocation.io/ipgeo?apiKey=free', {
      timeout: 5000
    });
    
    if (!response.ok) throw new Error('IPGeolocation request failed');
    
    const data = await response.json();
    return {
      country: data.country_name,
      countryCode: data.country_code2,
      region: data.state_prov,
      city: data.city,
      timezone: data.time_zone.name,
      currency: data.currency.code
    };
  }

  private getCurrencyFromCountry(countryCode: string): string {
    const currencyMap: Record<string, string> = {
      'US': 'USD', 'GB': 'GBP', 'EU': 'EUR', 'DE': 'EUR', 'FR': 'EUR', 'ES': 'EUR',
      'IT': 'EUR', 'PT': 'EUR', 'NL': 'EUR', 'BE': 'EUR', 'AT': 'EUR', 'CH': 'CHF',
      'JP': 'JPY', 'CN': 'CNY', 'KR': 'KRW', 'IN': 'INR', 'BR': 'BRL', 'AU': 'AUD',
      'CA': 'CAD', 'MX': 'MXN', 'RU': 'RUB', 'TR': 'TRY', 'PL': 'PLN', 'SE': 'SEK',
      'NO': 'NOK', 'DK': 'DKK', 'FI': 'EUR', 'TH': 'THB', 'VN': 'VND', 'ID': 'IDR',
      'PH': 'PHP', 'MY': 'MYR', 'SG': 'SGD', 'HK': 'HKD', 'TW': 'TWD', 'NZ': 'NZD',
      'ZA': 'ZAR', 'EG': 'EGP', 'SA': 'SAR', 'AE': 'AED', 'IL': 'ILS', 'AR': 'ARS',
      'CL': 'CLP', 'CO': 'COP', 'PE': 'PEN', 'UY': 'UYU', 'BO': 'BOB', 'PY': 'PYG'
    };
    return currencyMap[countryCode] || 'USD';
  }

  private cacheLocation(location: GeoLocation): void {
    const key = `${location.countryCode}-${location.region}`;
    this.cache.set(key, {
      ...location,
      timestamp: Date.now()
    } as any);
  }

  getCachedLocation(): GeoLocation | null {
    const now = Date.now();
    for (const [key, location] of this.cache.entries()) {
      if ((location as any).timestamp && (now - (location as any).timestamp) < this.CACHE_DURATION) {
        return location;
      }
    }
    return null;
  }
}

// Subdomain detection and management
export class SubdomainManager {
  static getCurrentSubdomain(): string | null {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    
    if (parts.length > 2) {
      return parts[0];
    }
    
    return null;
  }

  static getSubdomainConfig(subdomain: string): SubdomainConfig | null {
    return subdomainConfigs.find(config => config.subdomain === subdomain) || null;
  }

  static getLanguageFromSubdomain(subdomain: string): string {
    const config = this.getSubdomainConfig(subdomain);
    return config ? config.language : 'en';
  }

  static getCountryFromSubdomain(subdomain: string): string {
    const config = this.getSubdomainConfig(subdomain);
    return config ? config.country : 'US';
  }

  static shouldRedirectToSubdomain(countryCode: string, currentSubdomain: string | null): string | null {
    const targetLanguage = countryLanguageMap[countryCode];
    if (!targetLanguage || targetLanguage === 'en') return null;

    const targetConfig = subdomainConfigs.find(config => 
      config.language === targetLanguage && config.country === countryCode
    );

    if (!targetConfig) return null;

    // Don't redirect if already on correct subdomain
    if (currentSubdomain === targetConfig.subdomain) return null;

    return targetConfig.subdomain;
  }

  static buildSubdomainURL(subdomain: string, path: string = '/'): string {
    const protocol = window.location.protocol;
    const domain = window.location.hostname.replace(/^[^.]+\./, '');
    return `${protocol}//${subdomain}.${domain}${path}`;
  }

  static buildLanguageURL(language: string, path: string = '/'): string {
    const currentSubdomain = this.getCurrentSubdomain();
    
    if (currentSubdomain) {
      // If on subdomain, change to language-based subdomain
      const targetConfig = subdomainConfigs.find(config => config.language === language);
      if (targetConfig) {
        return this.buildSubdomainURL(targetConfig.subdomain, path);
      }
    }
    
    // Fallback to path-based routing
    return `/${language}${path}`;
  }
}

// Main geo detection and routing logic
export class GeoRouter {
  private static instance: GeoRouter;
  private geoDetector: GeoDetector;
  private hasRedirected = false;

  static getInstance(): GeoRouter {
    if (!GeoRouter.instance) {
      GeoRouter.instance = new GeoRouter();
    }
    return GeoRouter.instance;
  }

  constructor() {
    this.geoDetector = GeoDetector.getInstance();
  }

  async initializeGeoRouting(): Promise<void> {
    // Skip if already redirected or on subdomain
    if (this.hasRedirected || SubdomainManager.getCurrentSubdomain()) {
      return;
    }

    // Check for manual language override
    const manualLanguage = this.getManualLanguageOverride();
    if (manualLanguage) {
      this.hasRedirected = true;
      return;
    }

    try {
      // Try cached location first
      let location = this.geoDetector.getCachedLocation();
      
      if (!location) {
        // Detect location
        location = await this.geoDetector.detectLocation();
      }

      if (location) {
        const targetSubdomain = SubdomainManager.shouldRedirectToSubdomain(
          location.countryCode,
          SubdomainManager.getCurrentSubdomain()
        );

        if (targetSubdomain) {
          this.redirectToSubdomain(targetSubdomain);
        }
      }
    } catch (error) {
      console.warn('Geo routing initialization failed:', error);
    }
  }

  private getManualLanguageOverride(): string | null {
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam) {
      localStorage.setItem('manual-language-override', langParam);
      return langParam;
    }

    // Check localStorage
    return localStorage.getItem('manual-language-override');
  }

  private redirectToSubdomain(subdomain: string): void {
    this.hasRedirected = true;
    const newURL = SubdomainManager.buildSubdomainURL(subdomain, window.location.pathname);
    
    // Store redirect info to prevent loops
    sessionStorage.setItem('geo-redirect', 'true');
    sessionStorage.setItem('redirected-from', window.location.href);
    
    window.location.href = newURL;
  }

  clearManualOverride(): void {
    localStorage.removeItem('manual-language-override');
  }

  setManualOverride(language: string): void {
    localStorage.setItem('manual-language-override', language);
  }
}

// Export singleton instances
export const geoDetector = GeoDetector.getInstance();
export const geoRouter = GeoRouter.getInstance();
export const subdomainManager = SubdomainManager;
