// Cloudflare Worker for GeoIP-based language routing
// This worker detects user's country and redirects to appropriate language subdirectory

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    
    // Bot detection - don't redirect bots to preserve SEO
    const userAgent = request.headers.get("user-agent") || ""
    const isBot = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|applebot|discordbot|slackbot|skypeuripreview|viberbot|linebot|kakaotalk|wechatbot|sogou|exabot|ia_archiver|msnbot|yandexbot|ahrefsbot|semrushbot|mj12bot|dotbot|blexbot|petalbot|seznambot|applebot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|slackbot|skypeuripreview|viberbot|linebot|kakaotalk|wechatbot|sogou|exabot|ia_archiver|msnbot|yandexbot|ahrefsbot|semrushbot|mj12bot|dotbot|blexbot|petalbot|seznambot/i.test(userAgent)
    
    if (isBot) {
      // Let bots access the original request without redirect
      return fetch(request)
    }

    // Only redirect root path requests
    if (url.pathname === "/") {
      // Get country from Cloudflare's CF-IPCountry header
      const country = request.cf?.country || "US"
      
      // Country to language mapping
      const countryLanguageMap = {
        // English speaking countries
        'US': 'en', 'GB': 'en', 'AU': 'en', 'CA': 'en', 'NZ': 'en', 'IE': 'en', 'ZA': 'en', 'IN': 'en',
        
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
        'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'KG': 'ru', 'TJ': 'ru', 'UZ': 'ru', 'AM': 'ru', 'AZ': 'ru',
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
      }
      
      // Get target language
      const targetLanguage = countryLanguageMap[country] || 'en'
      
      // Build redirect URL
      const redirectUrl = `${url.protocol}//${url.hostname}/${targetLanguage}/`
      
      // Return redirect response
      return Response.redirect(redirectUrl, 302)
    }

    // For all other requests, pass through normally
    return fetch(request)
  }
}
