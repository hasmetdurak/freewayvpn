// Cloudflare Worker for CDN optimization of high-profit languages
// This worker implements caching strategies for German, French, Spanish, and Portuguese content

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    // Identify language from URL path
    const languageMatch = pathname.match(/^\/([a-z]{2})(?:\/|$)/);
    const language = languageMatch ? languageMatch[1] : 'en';
    
    // High-profit languages that need acceleration
    const highProfitLanguages = ['de', 'fr', 'es', 'pt'];
    const isHighProfitLanguage = highProfitLanguages.includes(language);
    
    // Fetch the original response
    const response = await fetch(request);
    
    // If this is a high-profit language, apply CDN optimization
    if (isHighProfitLanguage) {
      // Clone the response to modify headers
      const newResponse = new Response(response.body, response);
      
      // Set cache headers for optimal performance
      newResponse.headers.set('Cache-Control', 'public, max-age=7200'); // 2 hours browser cache
      newResponse.headers.set('Edge-Cache-Tag', `language-${language},content-deals`);
      newResponse.headers.set('CDN-Cache-Control', 'max-age=3600'); // 1 hour CDN cache
      
      // Add language-specific cache key
      newResponse.headers.set('Cloudflare-CDN-Cache-Control', `max-age=3600, stale-while-revalidate=1800`);
      
      // Set cache tags for better cache management
      const cacheTags = [`lang:${language}`, 'type:deals'];
      if (pathname.includes('/vpn-angebote') || pathname.includes('/offres-vpn') || 
          pathname.includes('/ofertas-vpn') || pathname.includes('/promocoes-vpn')) {
        cacheTags.push('page:deals');
      }
      newResponse.headers.set('Cache-Tag', cacheTags.join(','));
      
      // Set early hints for critical resources
      if (language === 'de') {
        newResponse.headers.set('Link', '</vpn-logos/nordvpn.png>; rel=preload; as=image, </vpn-logos/surfshark.png>; rel=preload; as=image');
      } else if (language === 'fr') {
        newResponse.headers.set('Link', '</vpn-logos/nordvpn.png>; rel=preload; as=image, </vpn-logos/surfshark.png>; rel=preload; as=image');
      } else if (language === 'es') {
        newResponse.headers.set('Link', '</vpn-logos/nordvpn.png>; rel=preload; as=image, </vpn-logos/surfshark.png>; rel=preload; as=image');
      } else if (language === 'pt') {
        newResponse.headers.set('Link', '</vpn-logos/nordvpn.png>; rel=preload; as=image, </vpn-logos/surfshark.png>; rel=preload; as=image');
      }
      
      return newResponse;
    }
    
    // For non-high-profit languages, return the original response
    return response;
  }
};