// Script to add missing translation keys for all languages
const fs = require('fs');
const path = require('path');

const translationsFile = path.join(__dirname, '../src/utils/translations.ts');

// Read the current translations file
let content = fs.readFileSync(translationsFile, 'utf8');

// Define the missing keys for each language
const missingKeys = {
  // Swedish (sv)
  sv: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'Din pålitliga källa för omfattande VPN-recensioner och jämförelser',
      description: 'Din pålitliga källa för omfattande VPN-recensioner och jämförelser. Hitta den perfekta VPN-tjänsten för dina integritets- och säkerhetsbehov.'
    },
    navigation: {
      vpns: 'VPNer',
      faq: 'FAQ',
      blog: 'Blogg',
      contact: 'Kontakt'
    },
    pages: {
      compareVpns: 'Jämför VPNer',
      findPerfectVpn: 'Hitta den perfekta VPNen för dina behov',
      exclusiveDeals: 'Exklusiva erbjudanden och rabatter',
      blogTitle: 'VPN Blogg och Guider',
      blogSubtitle: 'Senaste VPN-nyheter, recensioner och omfattande guider för att hjälpa dig hålla dig säker online',
      contactTitle: 'Kontakta oss',
      contactSubtitle: 'Ta kontakt med våra VPN-experter för personaliserade rekommendationer och support'
    }
  },
  
  // Finnish (fi)
  fi: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'Luotettava lähteesi kattaviin VPN-arvosteluihin ja -vertailuihin',
      description: 'Luotettava lähteesi kattaviin VPN-arvosteluihin ja -vertailuihin. Löydä täydellinen VPN-palvelu yksityisyys- ja turvallisuustarpeisiisi.'
    },
    navigation: {
      vpns: 'VPN:t',
      faq: 'FAQ',
      blog: 'Blogi',
      contact: 'Yhteystiedot'
    },
    pages: {
      compareVpns: 'Vertaa VPN:itä',
      findPerfectVpn: 'Löydä täydellinen VPN tarpeisiisi',
      exclusiveDeals: 'Eksklusiiviset tarjoukset ja alennukset',
      blogTitle: 'VPN Blogi ja Oppaat',
      blogSubtitle: 'Uusimmat VPN-uutiset, arvostelut ja kattavat oppaat auttamaan sinua pysymään turvassa verkossa',
      contactTitle: 'Ota yhteyttä',
      contactSubtitle: 'Ota yhteyttä VPN-asiantuntijoihimme henkilökohtaisten suositusten ja tuen saamiseksi'
    }
  },
  
  // Japanese (ja)
  ja: {
    brand: {
      name: 'bestvpn.digital',
      tagline: '包括的なVPNレビューと比較の信頼できるソース',
      description: '包括的なVPNレビューと比較の信頼できるソース。プライバシーとセキュリティのニーズに最適なVPNサービスを見つけてください。'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'ブログ',
      contact: 'お問い合わせ'
    },
    pages: {
      compareVpns: 'VPNを比較',
      findPerfectVpn: 'あなたのニーズに最適なVPNを見つける',
      exclusiveDeals: '限定オファーと割引',
      blogTitle: 'VPNブログとガイド',
      blogSubtitle: '最新のVPNニュース、レビュー、オンラインで安全を保つための包括的なガイド',
      contactTitle: 'お問い合わせ',
      contactSubtitle: 'パーソナライズされた推奨事項とサポートのためにVPN専門家にお問い合わせください'
    }
  },
  
  // Korean (ko)
  ko: {
    brand: {
      name: 'bestvpn.digital',
      tagline: '포괄적인 VPN 리뷰와 비교를 위한 신뢰할 수 있는 소스',
      description: '포괄적인 VPN 리뷰와 비교를 위한 신뢰할 수 있는 소스. 프라이버시와 보안 요구사항에 완벽한 VPN 서비스를 찾아보세요.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: '블로그',
      contact: '문의'
    },
    pages: {
      compareVpns: 'VPN 비교',
      findPerfectVpn: '당신의 요구에 맞는 완벽한 VPN 찾기',
      exclusiveDeals: '독점 혜택과 할인',
      blogTitle: 'VPN 블로그 및 가이드',
      blogSubtitle: '최신 VPN 뉴스, 리뷰 및 온라인에서 안전하게 지내는 데 도움이 되는 포괄적인 가이드',
      contactTitle: '문의하기',
      contactSubtitle: '개인화된 추천과 지원을 위해 VPN 전문가에게 문의하세요'
    }
  },
  
  // Hindi (hi)
  hi: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'व्यापक VPN समीक्षाओं और तुलनाओं के लिए आपका विश्वसनीय स्रोत',
      description: 'व्यापक VPN समीक्षाओं और तुलनाओं के लिए आपका विश्वसनीय स्रोत। अपनी गोपनीयता और सुरक्षा आवश्यकताओं के लिए सही VPN सेवा खोजें।'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'ब्लॉग',
      contact: 'संपर्क'
    },
    pages: {
      compareVpns: 'VPN की तुलना करें',
      findPerfectVpn: 'अपनी आवश्यकताओं के लिए सही VPN खोजें',
      exclusiveDeals: 'विशेष ऑफर और छूट',
      blogTitle: 'VPN ब्लॉग और गाइड',
      blogSubtitle: 'नवीनतम VPN समाचार, समीक्षाएं और ऑनलाइन सुरक्षित रहने में मदद करने वाले व्यापक गाइड',
      contactTitle: 'संपर्क करें',
      contactSubtitle: 'व्यक्तिगत सिफारिशों और सहायता के लिए हमारे VPN विशेषज्ञों से संपर्क करें'
    }
  },
  
  // Arabic (ar)
  ar: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'مصدرك الموثوق لمراجعات ومقارنات VPN الشاملة',
      description: 'مصدرك الموثوق لمراجعات ومقارنات VPN الشاملة. اعثر على خدمة VPN المثالية لاحتياجات الخصوصية والأمان الخاصة بك.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'الأسئلة الشائعة',
      blog: 'المدونة',
      contact: 'اتصل بنا'
    },
    pages: {
      compareVpns: 'قارن VPN',
      findPerfectVpn: 'اعثر على VPN المثالي لاحتياجاتك',
      exclusiveDeals: 'عروض حصرية وخصومات',
      blogTitle: 'مدونة VPN والأدلة',
      blogSubtitle: 'أحدث أخبار VPN والمراجعات والأدلة الشاملة لمساعدتك في البقاء آمنًا عبر الإنترنت',
      contactTitle: 'اتصل بنا',
      contactSubtitle: 'تواصل مع خبراء VPN لدينا للحصول على توصيات مخصصة ودعم'
    }
  },
  
  // Filipino (tl)
  tl: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'Ang iyong mapagkakatiwalaang mapagkukunan para sa komprehensibong mga review at paghahambing ng VPN',
      description: 'Ang iyong mapagkakatiwalaang mapagkukunan para sa komprehensibong mga review at paghahambing ng VPN. Hanapin ang perpektong serbisyo ng VPN para sa iyong mga pangangailangan sa privacy at seguridad.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Makipag-ugnayan'
    },
    pages: {
      compareVpns: 'Ihambing ang mga VPN',
      findPerfectVpn: 'Hanapin ang perpektong VPN para sa iyong mga pangangailangan',
      exclusiveDeals: 'Eksklusibong mga alok at diskwento',
      blogTitle: 'VPN Blog at Mga Gabay',
      blogSubtitle: 'Pinakabagong mga balita ng VPN, review at komprehensibong mga gabay upang matulungan kang manatiling ligtas online',
      contactTitle: 'Makipag-ugnayan sa amin',
      contactSubtitle: 'Makipag-ugnayan sa aming mga eksperto sa VPN para sa mga personalisadong rekomendasyon at suporta'
    }
  },
  
  // Indonesian (id)
  id: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'Sumber terpercaya Anda untuk ulasan dan perbandingan VPN yang komprehensif',
      description: 'Sumber terpercaya Anda untuk ulasan dan perbandingan VPN yang komprehensif. Temukan layanan VPN yang sempurna untuk kebutuhan privasi dan keamanan Anda.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Kontak'
    },
    pages: {
      compareVpns: 'Bandingkan VPN',
      findPerfectVpn: 'Temukan VPN yang sempurna untuk kebutuhan Anda',
      exclusiveDeals: 'Penawaran eksklusif dan diskon',
      blogTitle: 'Blog VPN dan Panduan',
      blogSubtitle: 'Berita VPN terbaru, ulasan dan panduan komprehensif untuk membantu Anda tetap aman online',
      contactTitle: 'Hubungi kami',
      contactSubtitle: 'Hubungi pakar VPN kami untuk rekomendasi yang dipersonalisasi dan dukungan'
    }
  },
  
  // Persian (fa)
  fa: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'منبع قابل اعتماد شما برای بررسی و مقایسه جامع VPN',
      description: 'منبع قابل اعتماد شما برای بررسی و مقایسه جامع VPN. سرویس VPN مناسب برای نیازهای حریم خصوصی و امنیتی خود را پیدا کنید.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'سوالات متداول',
      blog: 'وبلاگ',
      contact: 'تماس با ما'
    },
    pages: {
      compareVpns: 'مقایسه VPN',
      findPerfectVpn: 'VPN مناسب برای نیازهای خود را پیدا کنید',
      exclusiveDeals: 'پیشنهادات انحصاری و تخفیف',
      blogTitle: 'وبلاگ VPN و راهنماها',
      blogSubtitle: 'آخرین اخبار VPN، بررسی‌ها و راهنماهای جامع برای کمک به شما در امن ماندن آنلاین',
      contactTitle: 'با ما تماس بگیرید',
      contactSubtitle: 'با متخصصان VPN ما برای توصیه‌های شخصی‌سازی شده و پشتیبانی تماس بگیرید'
    }
  },
  
  // Polish (pl)
  pl: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'Twoje zaufane źródło kompleksowych recenzji i porównań VPN',
      description: 'Twoje zaufane źródło kompleksowych recenzji i porównań VPN. Znajdź idealną usługę VPN dla swoich potrzeb prywatności i bezpieczeństwa.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Kontakt'
    },
    pages: {
      compareVpns: 'Porównaj VPN',
      findPerfectVpn: 'Znajdź idealny VPN dla swoich potrzeb',
      exclusiveDeals: 'Ekskluzywne oferty i zniżki',
      blogTitle: 'Blog VPN i Przewodniki',
      blogSubtitle: 'Najnowsze wiadomości VPN, recenzje i kompleksowe przewodniki, które pomogą Ci zachować bezpieczeństwo online',
      contactTitle: 'Skontaktuj się z nami',
      contactSubtitle: 'Skontaktuj się z naszymi ekspertami VPN w celu uzyskania spersonalizowanych rekomendacji i wsparcia'
    }
  },
  
  // Portuguese (pt)
  pt: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'Sua fonte confiável para análises e comparações abrangentes de VPN',
      description: 'Sua fonte confiável para análises e comparações abrangentes de VPN. Encontre o serviço VPN perfeito para suas necessidades de privacidade e segurança.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Contato'
    },
    pages: {
      compareVpns: 'Comparar VPNs',
      findPerfectVpn: 'Encontre o VPN perfeito para suas necessidades',
      exclusiveDeals: 'Ofertas exclusivas e descontos',
      blogTitle: 'Blog VPN e Guias',
      blogSubtitle: 'Últimas notícias de VPN, análises e guias abrangentes para ajudá-lo a se manter seguro online',
      contactTitle: 'Entre em contato',
      contactSubtitle: 'Entre em contato com nossos especialistas em VPN para recomendações personalizadas e suporte'
    }
  },
  
  // Thai (th)
  th: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'แหล่งที่เชื่อถือได้ของคุณสำหรับการรีวิวและเปรียบเทียบ VPN ที่ครอบคลุม',
      description: 'แหล่งที่เชื่อถือได้ของคุณสำหรับการรีวิวและเปรียบเทียบ VPN ที่ครอบคลุม ค้นหาบริการ VPN ที่สมบูรณ์แบบสำหรับความต้องการความเป็นส่วนตัวและความปลอดภัยของคุณ'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'คำถามที่พบบ่อย',
      blog: 'บล็อก',
      contact: 'ติดต่อ'
    },
    pages: {
      compareVpns: 'เปรียบเทียบ VPN',
      findPerfectVpn: 'ค้นหา VPN ที่สมบูรณ์แบบสำหรับความต้องการของคุณ',
      exclusiveDeals: 'ข้อเสนอพิเศษและส่วนลด',
      blogTitle: 'บล็อก VPN และคู่มือ',
      blogSubtitle: 'ข่าว VPN ล่าสุด บทวิจารณ์ และคู่มือที่ครอบคลุมเพื่อช่วยให้คุณปลอดภัยออนไลน์',
      contactTitle: 'ติดต่อเรา',
      contactSubtitle: 'ติดต่อผู้เชี่ยวชาญ VPN ของเราสำหรับคำแนะนำส่วนตัวและการสนับสนุน'
    }
  },
  
  // Vietnamese (vi)
  vi: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'Nguồn đáng tin cậy của bạn cho các đánh giá và so sánh VPN toàn diện',
      description: 'Nguồn đáng tin cậy của bạn cho các đánh giá và so sánh VPN toàn diện. Tìm dịch vụ VPN hoàn hảo cho nhu cầu riêng tư và bảo mật của bạn.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Liên hệ'
    },
    pages: {
      compareVpns: 'So sánh VPN',
      findPerfectVpn: 'Tìm VPN hoàn hảo cho nhu cầu của bạn',
      exclusiveDeals: 'Ưu đãi độc quyền và giảm giá',
      blogTitle: 'Blog VPN và Hướng dẫn',
      blogSubtitle: 'Tin tức VPN mới nhất, đánh giá và hướng dẫn toàn diện để giúp bạn an toàn trực tuyến',
      contactTitle: 'Liên hệ với chúng tôi',
      contactSubtitle: 'Liên hệ với các chuyên gia VPN của chúng tôi để được tư vấn cá nhân hóa và hỗ trợ'
    }
  },
  
  // French (fr)
  fr: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'Votre source de confiance pour des avis et comparaisons complets de VPN',
      description: 'Votre source de confiance pour des avis et comparaisons complets de VPN. Trouvez le service VPN parfait pour vos besoins de confidentialité et de sécurité.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Contact'
    },
    pages: {
      compareVpns: 'Comparer les VPN',
      findPerfectVpn: 'Trouvez le VPN parfait pour vos besoins',
      exclusiveDeals: 'Offres exclusives et réductions',
      blogTitle: 'Blog VPN et Guides',
      blogSubtitle: 'Dernières actualités VPN, avis et guides complets pour vous aider à rester en sécurité en ligne',
      contactTitle: 'Contactez-nous',
      contactSubtitle: 'Contactez nos experts VPN pour des recommandations personnalisées et un support'
    }
  },
  
  // Italian (it)
  it: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'La tua fonte affidabile per recensioni e confronti completi di VPN',
      description: 'La tua fonte affidabile per recensioni e confronti completi di VPN. Trova il servizio VPN perfetto per le tue esigenze di privacy e sicurezza.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'Blog',
      contact: 'Contatto'
    },
    pages: {
      compareVpns: 'Confronta VPN',
      findPerfectVpn: 'Trova il VPN perfetto per le tue esigenze',
      exclusiveDeals: 'Offerte esclusive e sconti',
      blogTitle: 'Blog VPN e Guide',
      blogSubtitle: 'Ultime notizie VPN, recensioni e guide complete per aiutarti a rimanere sicuro online',
      contactTitle: 'Contattaci',
      contactSubtitle: 'Contatta i nostri esperti VPN per raccomandazioni personalizzate e supporto'
    }
  },
  
  // Russian (ru)
  ru: {
    brand: {
      name: 'bestvpn.digital',
      tagline: 'Ваш надежный источник для всесторонних обзоров и сравнений VPN',
      description: 'Ваш надежный источник для всесторонних обзоров и сравнений VPN. Найдите идеальный VPN-сервис для ваших потребностей в конфиденциальности и безопасности.'
    },
    navigation: {
      vpns: 'VPN',
      faq: 'FAQ',
      blog: 'Блог',
      contact: 'Контакты'
    },
    pages: {
      compareVpns: 'Сравнить VPN',
      findPerfectVpn: 'Найдите идеальный VPN для ваших потребностей',
      exclusiveDeals: 'Эксклюзивные предложения и скидки',
      blogTitle: 'Блог VPN и Руководства',
      blogSubtitle: 'Последние новости VPN, обзоры и всесторонние руководства, чтобы помочь вам оставаться в безопасности в сети',
      contactTitle: 'Свяжитесь с нами',
      contactSubtitle: 'Свяжитесь с нашими экспертами VPN для персонализированных рекомендаций и поддержки'
    }
  },
  
  // Chinese (zh)
  zh: {
    brand: {
      name: 'bestvpn.digital',
      tagline: '您值得信赖的VPN评论和比较综合来源',
      description: '您值得信赖的VPN评论和比较综合来源。为您的隐私和安全需求找到完美的VPN服务。'
    },
    navigation: {
      vpns: 'VPN',
      faq: '常见问题',
      blog: '博客',
      contact: '联系我们'
    },
    pages: {
      compareVpns: '比较VPN',
      findPerfectVpn: '找到适合您需求的完美VPN',
      exclusiveDeals: '独家优惠和折扣',
      blogTitle: 'VPN博客和指南',
      blogSubtitle: '最新的VPN新闻、评论和综合指南，帮助您在线保持安全',
      contactTitle: '联系我们',
      contactSubtitle: '联系我们的VPN专家，获得个性化推荐和支持'
    }
  }
};

// Function to add missing keys to a language section
function addMissingKeys(langCode, keys) {
  const langPattern = new RegExp(`^  ${langCode}: \\{`, 'm');
  const langMatch = content.match(langPattern);
  
  if (!langMatch) {
    console.log(`Language ${langCode} not found`);
    return;
  }
  
  const langStart = langMatch.index;
  const langEnd = content.indexOf('\n  },', langStart);
  
  if (langEnd === -1) {
    console.log(`Could not find end of ${langCode} section`);
    return;
  }
  
  // Check if keys already exist
  const langSection = content.substring(langStart, langEnd);
  
  if (langSection.includes("'brand.name'")) {
    console.log(`Keys already exist for ${langCode}`);
    return;
  }
  
  // Insert the missing keys before the closing brace
  const insertPoint = langEnd;
  const keysToInsert = `
    
    // Brand
    'brand.name': '${keys.brand.name}',
    'brand.tagline': '${keys.brand.tagline}',
    'brand.description': '${keys.brand.description}',
    
    // Navigation
    'nav.vpns': '${keys.navigation.vpns}',
    'nav.faq': '${keys.navigation.faq}',
    'nav.blog': '${keys.navigation.blog}',
    'nav.contact': '${keys.navigation.contact}',
    
    // VPNs Page
    'compareVpns': '${keys.pages.compareVpns}',
    'findPerfectVpn': '${keys.pages.findPerfectVpn}',
    'exclusiveDeals': '${keys.pages.exclusiveDeals}',
    
    // Blog Page
    'blog.title': '${keys.pages.blogTitle}',
    'blog.subtitle': '${keys.pages.blogSubtitle}',
    
    // Contact Page
    'contactTitle': '${keys.pages.contactTitle}',
    'contactSubtitle': '${keys.pages.contactSubtitle}',
`;
  
  content = content.substring(0, insertPoint) + keysToInsert + content.substring(insertPoint);
  console.log(`Added missing keys for ${langCode}`);
}

// Add missing keys for all languages
Object.entries(missingKeys).forEach(([langCode, keys]) => {
  addMissingKeys(langCode, keys);
});

// Write the updated content back to the file
fs.writeFileSync(translationsFile, content, 'utf8');
console.log('Translation keys added successfully!');
