// Schema Markup for SEO - Product, Review, Organization schemas
// Improves rich snippets and search engine understanding

export interface ProductSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  brand: {
    "@type": string;
    name: string;
  };
  offers: {
    "@type": string;
    price: string;
    priceCurrency: string;
    availability: string;
    url: string;
    seller: {
      "@type": string;
      name: string;
    };
  };
  aggregateRating?: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
    bestRating: string;
    worstRating: string;
  };
  review?: {
    "@type": string;
    reviewRating: {
      "@type": string;
      ratingValue: string;
      bestRating: string;
    };
    author: {
      "@type": string;
      name: string;
    };
    reviewBody: string;
  };
}

export interface ReviewSchema {
  "@context": string;
  "@type": string;
  itemReviewed: {
    "@type": string;
    name: string;
  };
  reviewRating: {
    "@type": string;
    ratingValue: string;
    bestRating: string;
  };
  author: {
    "@type": string;
    name: string;
  };
  reviewBody: string;
  datePublished: string;
}

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    email: string;
  };
}

// Generate Product Schema for VPN
export function generateProductSchema(
  vpnName: string,
  price: string,
  currency: string,
  affiliateLink: string,
  rating: number,
  reviewCount: number,
  language: string = 'en'
): ProductSchema {
  const descriptions = {
    en: `${vpnName} - Premium VPN service with military-grade encryption, unlimited bandwidth, and 24/7 support. Perfect for streaming, gaming, and online privacy.`,
    de: `${vpnName} - Premium VPN-Service mit militärischer Verschlüsselung, unbegrenzter Bandbreite und 24/7-Support. Perfekt für Streaming, Gaming und Online-Privatsphäre.`,
    tr: `${vpnName} - Askeri seviye şifreleme, sınırsız bant genişliği ve 7/24 destek ile premium VPN hizmeti. Streaming, oyun ve online gizlilik için mükemmel.`,
    es: `${vpnName} - Servicio VPN premium con cifrado militar, ancho de banda ilimitado y soporte 24/7. Perfecto para streaming, gaming y privacidad online.`,
    fr: `${vpnName} - Service VPN premium avec chiffrement militaire, bande passante illimitée et support 24/7. Parfait pour le streaming, le gaming et la confidentialité en ligne.`,
    it: `${vpnName} - Servizio VPN premium con crittografia militare, larghezza di banda illimitata e supporto 24/7. Perfetto per streaming, gaming e privacy online.`,
    pt: `${vpnName} - Serviço VPN premium com criptografia militar, largura de banda ilimitada e suporte 24/7. Perfeito para streaming, gaming e privacidade online.`,
    ru: `${vpnName} - Премиум VPN-сервис с военным шифрованием, неограниченной пропускной способностью и поддержкой 24/7. Идеально для стриминга, игр и онлайн-приватности.`,
    zh: `${vpnName} - 具有军事级加密、无限带宽和24/7支持的优质VPN服务。非常适合流媒体、游戏和在线隐私。`,
    ja: `${vpnName} - 軍事級暗号化、無制限帯域幅、24/7サポートを備えたプレミアムVPNサービス。ストリーミング、ゲーミング、オンラインプライバシーに最適。`,
    ko: `${vpnName} - 군사급 암호화, 무제한 대역폭, 24/7 지원을 갖춘 프리미엄 VPN 서비스. 스트리밍, 게이밍, 온라인 프라이버시에 완벽합니다.`,
    ar: `${vpnName} - خدمة VPN متميزة مع تشفير عسكري وعرض نطاق غير محدود ودعم 24/7. مثالية للبث والألعاب والخصوصية عبر الإنترنت.`,
    hi: `${vpnName} - सैन्य-ग्रेड एन्क्रिप्शन, असीमित बैंडविड्थ और 24/7 सहायता के साथ प्रीमियम VPN सेवा। स्ट्रीमिंग, गेमिंग और ऑनलाइन गोपनीयता के लिए बिल्कुल सही।`,
    id: `${vpnName} - Layanan VPN premium dengan enkripsi tingkat militer, bandwidth tak terbatas, dan dukungan 24/7. Sempurna untuk streaming, gaming, dan privasi online.`,
    vi: `${vpnName} - Dịch vụ VPN cao cấp với mã hóa cấp quân sự, băng thông không giới hạn và hỗ trợ 24/7. Hoàn hảo cho streaming, gaming và quyền riêng tư trực tuyến.`,
    nb: `${vpnName} - Premium VPN-tjeneste med militærgrad kryptering, ubegrenset båndbredde og 24/7-støtte. Perfekt for streaming, gaming og online personvern.`,
    sv: `${vpnName} - Premium VPN-tjänst med militärgrad kryptering, obegränsad bandbredd och 24/7-support. Perfekt för streaming, gaming och onlineintegritet.`,
    fi: `${vpnName} - Premium VPN-palvelu sotilasluokan salauksella, rajoittamattomalla kaistanleveydellä ja 24/7-tuella. Täydellinen streaming-, peli- ja online-yksityisyydelle.`,
    pl: `${vpnName} - Premium usługa VPN z szyfrowaniem wojskowym, nieograniczoną przepustowością i wsparciem 24/7. Idealna do streamingu, gier i prywatności online.`,
    th: `${vpnName} - บริการ VPN พรีเมียมด้วยการเข้ารหัสระดับทหาร แบนด์วิธไม่จำกัด และการสนับสนุน 24/7 เหมาะสำหรับสตรีมมิ่ง เกม และความเป็นส่วนตัวออนไลน์`,
    fa: `${vpnName} - سرویس VPN پریمیوم با رمزگذاری درجه نظامی، پهنای باند نامحدود و پشتیبانی 24/7. عالی برای استریمینگ، گیمینگ و حریم خصوصی آنلاین.`,
    tl: `${vpnName} - Premium na serbisyo ng VPN na may military-grade encryption, walang limitasyong bandwidth, at 24/7 na suporta. Perpekto para sa streaming, gaming, at online privacy.`
  };

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: vpnName,
    description: descriptions[language as keyof typeof descriptions] || descriptions.en,
    brand: {
      "@type": "Brand",
      name: vpnName
    },
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url: affiliateLink,
      seller: {
        "@type": "Organization",
        name: vpnName
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: "10",
      worstRating: "1"
    }
  };
}

// Generate Review Schema for VPN
export function generateReviewSchema(
  vpnName: string,
  rating: number,
  reviewText: string,
  authorName: string,
  datePublished: string,
  language: string = 'en'
): ReviewSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: vpnName
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: rating.toString(),
      bestRating: "10"
    },
    author: {
      "@type": "Person",
      name: authorName
    },
    reviewBody: reviewText,
    datePublished: datePublished
  };
}

// Generate Organization Schema
export function generateOrganizationSchema(language: string = 'en'): OrganizationSchema {
  const descriptions = {
    en: "BestVPN.digital - Your trusted source for comprehensive VPN reviews and comparisons. Find the perfect VPN service for your privacy and security needs.",
    de: "BestVPN.digital - Ihre vertrauenswürdige Quelle für umfassende VPN-Bewertungen und -Vergleiche. Finden Sie den perfekten VPN-Service für Ihre Privatsphäre und Sicherheitsbedürfnisse.",
    tr: "BestVPN.digital - Kapsamlı VPN incelemeleri ve karşılaştırmaları için güvenilir kaynağınız. Gizlilik ve güvenlik ihtiyaçlarınız için mükemmel VPN hizmetini bulun.",
    es: "BestVPN.digital - Tu fuente confiable para reseñas y comparaciones completas de VPN. Encuentra el servicio VPN perfecto para tus necesidades de privacidad y seguridad.",
    fr: "BestVPN.digital - Votre source de confiance pour des avis et comparaisons complets de VPN. Trouvez le service VPN parfait pour vos besoins de confidentialité et de sécurité.",
    it: "BestVPN.digital - La tua fonte affidabile per recensioni e confronti completi di VPN. Trova il servizio VPN perfetto per le tue esigenze di privacy e sicurezza.",
    pt: "BestVPN.digital - Sua fonte confiável para análises e comparações abrangentes de VPN. Encontre o serviço VPN perfeito para suas necessidades de privacidade e segurança.",
    ru: "BestVPN.digital - Ваш надежный источник для всесторонних обзоров и сравнений VPN. Найдите идеальный VPN-сервис для ваших потребностей в конфиденциальности и безопасности.",
    zh: "BestVPN.digital - 您值得信赖的VPN评论和比较综合来源。为您的隐私和安全需求找到完美的VPN服务。",
    ja: "BestVPN.digital - 包括的なVPNレビューと比較の信頼できるソース。プライバシーとセキュリティのニーズに最適なVPNサービスを見つけてください。",
    ko: "BestVPN.digital - 포괄적인 VPN 리뷰와 비교를 위한 신뢰할 수 있는 소스. 프라이버시와 보안 요구사항에 완벽한 VPN 서비스를 찾아보세요.",
    ar: "BestVPN.digital - مصدرك الموثوق لمراجعات ومقارنات VPN الشاملة. اعثر على خدمة VPN المثالية لاحتياجات الخصوصية والأمان الخاصة بك.",
    hi: "BestVPN.digital - व्यापक VPN समीक्षाओं और तुलनाओं के लिए आपका विश्वसनीय स्रोत। अपनी गोपनीयता और सुरक्षा आवश्यकताओं के लिए सही VPN सेवा खोजें।",
    id: "BestVPN.digital - Sumber terpercaya Anda untuk ulasan dan perbandingan VPN yang komprehensif. Temukan layanan VPN yang sempurna untuk kebutuhan privasi dan keamanan Anda.",
    vi: "BestVPN.digital - Nguồn đáng tin cậy của bạn cho các đánh giá và so sánh VPN toàn diện. Tìm dịch vụ VPN hoàn hảo cho nhu cầu riêng tư và bảo mật của bạn.",
    nb: "BestVPN.digital - Din pålitelige kilde for omfattende VPN-anmeldelser og sammenligninger. Finn den perfekte VPN-tjenesten for dine personvern- og sikkerhetsbehov.",
    sv: "BestVPN.digital - Din pålitliga källa för omfattande VPN-recensioner och jämförelser. Hitta den perfekta VPN-tjänsten för dina integritets- och säkerhetsbehov.",
    fi: "BestVPN.digital - Luotettava lähteesi kattaviin VPN-arvosteluihin ja -vertailuihin. Löydä täydellinen VPN-palvelu yksityisyys- ja turvallisuustarpeisiisi.",
    pl: "BestVPN.digital - Twoje zaufane źródło kompleksowych recenzji i porównań VPN. Znajdź idealną usługę VPN dla swoich potrzeb prywatności i bezpieczeństwa.",
    th: "BestVPN.digital - แหล่งที่เชื่อถือได้ของคุณสำหรับการรีวิวและเปรียบเทียบ VPN ที่ครอบคลุม ค้นหาบริการ VPN ที่สมบูรณ์แบบสำหรับความต้องการความเป็นส่วนตัวและความปลอดภัยของคุณ",
    fa: "BestVPN.digital - منبع قابل اعتماد شما برای بررسی و مقایسه جامع VPN. سرویس VPN مناسب برای نیازهای حریم خصوصی و امنیتی خود را پیدا کنید.",
    tl: "BestVPN.digital - Ang iyong mapagkakatiwalaang mapagkukunan para sa komprehensibong mga review at paghahambing ng VPN. Hanapin ang perpektong serbisyo ng VPN para sa iyong mga pangangailangan sa privacy at seguridad."
  };

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "bestvpn.digital",
    url: "https://bestvpn.digital",
    logo: "https://bestvpn.digital/logo.png",
    description: descriptions[language as keyof typeof descriptions] || descriptions.en,
    sameAs: [
      "https://twitter.com/bestvpndigital",
      "https://facebook.com/bestvpndigital",
      "https://linkedin.com/company/bestvpndigital"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      email: "support@bestvpn.digital"
    }
  };
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>, language: string = 'en'): any {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(items: Array<{name: string, url: string}>): any {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

// Generate Article Schema for Blog Posts
export function generateArticleSchema(
  title: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified: string,
  url: string,
  image: string,
  language: string = 'en'
): any {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author
    },
    publisher: {
      "@type": "Organization",
      name: "bestvpn.digital",
      logo: {
        "@type": "ImageObject",
        url: "https://bestvpn.digital/logo.png"
      }
    },
    datePublished: datePublished,
    dateModified: dateModified,
    url: url,
    image: image,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };
}
