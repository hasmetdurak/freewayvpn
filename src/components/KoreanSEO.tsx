import React from 'react';
import { Helmet } from 'react-helmet-async';
import { koreanSEOMeta, koreanStructuredData, generateKoreanMetaTags } from '../utils/koreanSEO';

interface KoreanSEOProps {
  page: keyof typeof koreanSEOMeta;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: any;
  breadcrumbs?: Array<{name: string, url: string}>;
}

const KoreanSEO: React.FC<KoreanSEOProps> = ({
  page,
  title,
  description,
  keywords,
  canonical,
  noindex = false,
  structuredData,
  breadcrumbs
}) => {
  const meta = generateKoreanMetaTags(page);
  
  const finalTitle = title || meta.title;
  const finalDescription = description || meta.description;
  const finalKeywords = keywords || meta.keywords;
  const finalCanonical = canonical || meta.canonical;
  
  // Generate breadcrumb structured data if provided
  const breadcrumbStructuredData = breadcrumbs ? koreanStructuredData.breadcrumb(breadcrumbs) : null;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="language" content="ko-KR" />
      <meta name="geo.region" content="KR" />
      <meta name="geo.country" content="Korea" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Hreflang Tags */}
      <link rel="alternate" hreflang="ko" href={`https://bestvpn.digital/ko/${page}`} />
      <link rel="alternate" hreflang="en" href={`https://bestvpn.digital/en/${page}`} />
      <link rel="alternate" hreflang="x-default" href={`https://bestvpn.digital/en/${page}`} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="BestVPN.digital" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content="https://bestvpn.digital/og-image-ko.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="BestVPN.digital - 한국 최고의 VPN 비교 서비스" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content="https://bestvpn.digital/twitter-image-ko.png" />
      <meta name="twitter:site" content="@BestVPNDigital" />
      <meta name="twitter:creator" content="@BestVPNDigital" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="googlebot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="bingbot" content={noindex ? "noindex,nofollow" : "index,follow"} />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(koreanStructuredData.organization)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(koreanStructuredData.website)}
      </script>
      
      {breadcrumbStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      )}
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.pexels.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default KoreanSEO;
