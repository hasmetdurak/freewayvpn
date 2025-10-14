// Korean SEO utilities and meta tags
export const koreanSEOMeta = {
  // Homepage SEO
  home: {
    title: "최고의 VPN 서비스 2025 | 한국 VPN 추천 | BestVPN.digital",
    description: "한국에서 가장 빠르고 안전한 VPN 서비스 추천. 넷플릭스, 디즈니+, 게임 최적화. 30일 무료 환불 보장.",
    keywords: "VPN 한국, 한국 VPN, 넷플릭스 VPN, 디즈니+ VPN, 게임 VPN, 빠른 VPN, 안전한 VPN, VPN 추천"
  },
  
  // VPN Page SEO
  vpns: {
    title: "VPN 비교 및 추천 2025 | 한국 서버 지원 VPN | BestVPN.digital",
    description: "100개 이상의 VPN 서비스 비교. 한국 서버, 빠른 속도, 안전한 보안. 전문가 리뷰와 독점 할인.",
    keywords: "VPN 비교, VPN 추천, 한국 서버 VPN, 빠른 VPN, 안전한 VPN, VPN 리뷰, VPN 할인"
  },
  
  // FAQ Page SEO
  faq: {
    title: "VPN 자주 묻는 질문 | 1000개 FAQ | BestVPN.digital",
    description: "VPN 사용법, 설정, 문제 해결 등 1000개의 자주 묻는 질문과 답변. 한국어 완벽 지원.",
    keywords: "VPN FAQ, VPN 질문, VPN 사용법, VPN 설정, VPN 문제해결, VPN 가이드"
  },
  
  // Blog Page SEO
  blog: {
    title: "VPN 블로그 | 최신 VPN 뉴스 및 가이드 | BestVPN.digital",
    description: "VPN 관련 최신 뉴스, 사용법 가이드, 리뷰. 한국어로 제공되는 전문적인 VPN 정보.",
    keywords: "VPN 블로그, VPN 뉴스, VPN 가이드, VPN 리뷰, VPN 사용법, VPN 정보"
  },
  
  // Contact Page SEO
  contact: {
    title: "문의하기 | VPN 전문가 상담 | BestVPN.digital",
    description: "VPN 관련 문의사항이나 상담이 필요하시면 언제든 연락주세요. 한국어 지원.",
    keywords: "VPN 문의, VPN 상담, VPN 고객지원, VPN 도움말"
  },
  
  // Deals Page SEO
  deals: {
    title: "VPN 특가 및 할인 | 최대 70% 할인 | BestVPN.digital",
    description: "프리미엄 VPN 서비스 특가 및 할인 정보. 독점 거래로 최대 70% 절약하세요.",
    keywords: "VPN 할인, VPN 특가, VPN 쿠폰, VPN 프로모션, VPN 거래"
  },
  
  // Quiz Page SEO
  quiz: {
    title: "나에게 맞는 VPN 찾기 | VPN 추천 퀴즈 | BestVPN.digital",
    description: "간단한 질문으로 당신에게 가장 적합한 VPN을 찾아보세요. 개인 맞춤형 VPN 추천.",
    keywords: "VPN 추천, VPN 퀴즈, 맞춤형 VPN, 개인 VPN, VPN 선택"
  },
  
  // Stream Test Page SEO
  streamTest: {
    title: "VPN 속도 테스트 | 스트리밍 최적화 | BestVPN.digital",
    description: "VPN 속도를 테스트하고 스트리밍에 최적화된 서버를 찾아보세요. 실시간 속도 측정.",
    keywords: "VPN 속도테스트, 스트리밍 VPN, 빠른 VPN, VPN 성능, 인터넷 속도"
  }
};

export const koreanStructuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BestVPN.digital",
    "alternateName": "베스트VPN",
    "url": "https://bestvpn.digital",
    "logo": "https://bestvpn.digital/logo.png",
    "description": "한국 최고의 VPN 비교 및 추천 서비스",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Korean", "English"]
    }
  },
  
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BestVPN.digital",
    "alternateName": "베스트VPN",
    "url": "https://bestvpn.digital",
    "description": "한국 최고의 VPN 비교 및 추천 서비스",
    "inLanguage": "ko-KR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bestvpn.digital/ko/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  
  breadcrumb: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  })
};

export const generateKoreanMetaTags = (page: keyof typeof koreanSEOMeta, additionalData?: any) => {
  const meta = koreanSEOMeta[page];
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      locale: 'ko_KR',
      siteName: 'BestVPN.digital',
      url: `https://bestvpn.digital/ko/${page}`
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      site: '@BestVPNDigital'
    },
    canonical: `https://bestvpn.digital/ko/${page}`,
    alternate: {
      'ko': `https://bestvpn.digital/ko/${page}`,
      'en': `https://bestvpn.digital/en/${page}`,
      'x-default': `https://bestvpn.digital/en/${page}`
    }
  };
};
