// CDN Utility for accelerating high-profit languages
// This utility helps configure Cloudflare caching for specific languages

interface CDNConfig {
  language: string;
  cacheTtl: number; // in seconds
  edgeCacheTtl: number; // in seconds
  browserCacheTtl: number; // in seconds
  cacheEverything: boolean;
  cacheKey: string[];
}

// High-profit languages that should be accelerated
const highProfitLanguages = ['de', 'fr', 'es', 'pt'];

// CDN configurations for different languages
const cdnConfigurations: Record<string, CDNConfig> = {
  de: {
    language: 'de',
    cacheTtl: 3600, // 1 hour
    edgeCacheTtl: 7200, // 2 hours
    browserCacheTtl: 86400, // 24 hours
    cacheEverything: true,
    cacheKey: ['language:de', 'content:faq', 'content:blog']
  },
  fr: {
    language: 'fr',
    cacheTtl: 3600, // 1 hour
    edgeCacheTtl: 7200, // 2 hours
    browserCacheTtl: 86400, // 24 hours
    cacheEverything: true,
    cacheKey: ['language:fr', 'content:faq', 'content:blog']
  },
  es: {
    language: 'es',
    cacheTtl: 3600, // 1 hour
    edgeCacheTtl: 7200, // 2 hours
    browserCacheTtl: 86400, // 24 hours
    cacheEverything: true,
    cacheKey: ['language:es', 'content:faq', 'content:blog']
  },
  pt: {
    language: 'pt',
    cacheTtl: 3600, // 1 hour
    edgeCacheTtl: 7200, // 2 hours
    browserCacheTtl: 86400, // 24 hours
    cacheEverything: true,
    cacheKey: ['language:pt', 'content:faq', 'content:blog']
  }
};

/**
 * Check if a language should be accelerated with CDN
 * @param language The language code
 * @returns Boolean indicating if the language should be accelerated
 */
export function shouldAccelerateLanguage(language: string): boolean {
  return highProfitLanguages.includes(language);
}

/**
 * Get CDN configuration for a specific language
 * @param language The language code
 * @returns CDN configuration or null if not found
 */
export function getCDNConfiguration(language: string): CDNConfig | null {
  return cdnConfigurations[language] || null;
}

/**
 * Generate Cloudflare cache headers for a specific language
 * @param language The language code
 * @returns Headers object with cache configuration
 */
export function generateCacheHeaders(language: string): Record<string, string> {
  const config = getCDNConfiguration(language);
  
  if (!config) {
    return {
      'Cache-Control': 'public, max-age=3600' // Default 1 hour cache
    };
  }
  
  return {
    'Cache-Control': `public, max-age=${config.browserCacheTtl}`,
    'Edge-Cache-Ttl': config.edgeCacheTtl.toString(),
    'CDN-Cache-Control': `max-age=${config.cacheTtl}`,
    'Cloudflare-CDN-Cache-Control': `max-age=${config.cacheTtl}`
  };
}

/**
 * Apply CDN optimization for high-profit languages
 * This function should be called in server-side rendering or API routes
 * @param language The language code
 * @param res The response object (Express.js style)
 */
export function applyCDNOptimization(language: string, res: any): void {
  if (shouldAccelerateLanguage(language)) {
    const headers = generateCacheHeaders(language);
    Object.entries(headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
  }
}

/**
 * Get performance optimization tips for a language
 * @param language The language code
 * @returns Array of optimization tips
 */
export function getPerformanceTips(language: string): string[] {
  const tips: string[] = [];
  
  if (shouldAccelerateLanguage(language)) {
    tips.push('Enable Cloudflare caching for faster LCP');
    tips.push('Use edge caching to reduce CLS scores');
    tips.push('Implement browser caching for static assets');
    tips.push('Enable Brotli compression for better transfer speeds');
    tips.push('Use Cloudflare Image Resizing for responsive images');
  }
  
  return tips;
}