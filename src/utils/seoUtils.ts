// SEO utilities for multilingual support and hreflang tags

export interface HrefLangTag {
  hreflang: string;
  href: string;
}

export const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'ru', name: 'Русский' },
  { code: 'ar', name: 'العربية' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' }
];

export const generateHrefLangTags = (currentPath: string = '', baseUrl: string = 'https://bestvpn.digital'): HrefLangTag[] => {
  const hrefLangTags: HrefLangTag[] = [];
  
  // Clean path by removing language prefix if present
  const cleanPath = currentPath.replace(/^\/[a-z]{2,3}/, '') || '/';
  
  // Add hreflang tags for all supported languages
  supportedLanguages.forEach(lang => {
    const href = `${baseUrl}/${lang.code}${cleanPath}`;
    
    hrefLangTags.push({
      hreflang: lang.code,
      href: href
    });
  });
  
  // Add x-default for English
  hrefLangTags.push({
    hreflang: 'x-default',
    href: `${baseUrl}/en${cleanPath}`
  });
  
  return hrefLangTags;
};

export const insertHrefLangTags = (hrefLangTags: HrefLangTag[]) => {
  // Remove existing hreflang tags
  const existingTags = document.querySelectorAll('link[rel="alternate"][hreflang]');
  existingTags.forEach(tag => tag.remove());
  
  // Insert new hreflang tags
  const head = document.head;
  hrefLangTags.forEach(tag => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'alternate';
    linkElement.hreflang = tag.hreflang;
    linkElement.href = tag.href;
    head.appendChild(linkElement);
  });
};

export const updateCanonicalUrl = (canonicalUrl: string) => {
  let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.rel = 'canonical';
    document.head.appendChild(canonicalTag);
  }
  
  canonicalTag.href = canonicalUrl;
};

export const updateMetaLanguage = (languageCode: string) => {
  // Update html lang attribute
  document.documentElement.lang = languageCode;
  
  // Update meta content-language
  let metaLang = document.querySelector('meta[http-equiv="content-language"]') as HTMLMetaElement;
  if (!metaLang) {
    metaLang = document.createElement('meta');
    metaLang.httpEquiv = 'content-language';
    document.head.appendChild(metaLang);
  }
  metaLang.content = languageCode;
};