// Dynamic Affiliate Links - GeoIP + Language Based
// Optimizes affiliate revenue by showing country-specific offers

export interface AffiliateOffer {
  provider: string;
  country: string;
  language: string;
  price: string;
  currency: string;
  discount: string;
  cta: string;
  features: string[];
  affiliateLink: string;
  localContent: string[];
  culturalAppeal: string[];
}

// Country-specific affiliate offers
export const dynamicAffiliateOffers: Record<string, AffiliateOffer[]> = {
  // Germany - Focus on quality, privacy, DSGVO compliance
  DE: [
    {
      provider: 'NordVPN',
      country: 'DE',
      language: 'de',
      price: '€3,39',
      currency: 'EUR',
      discount: '68% Rabatt auf 2-Jahres-Plan',
      cta: 'Jetzt testen - 30 Tage Geld-zurück',
      features: ['DSGVO-konform', 'Deutsche Server', '24/7 Support auf Deutsch', 'Militärische Verschlüsselung'],
      affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902',
      localContent: ['Netflix DE', 'ARD', 'ZDF', 'DAZN', 'Sky Go'],
      culturalAppeal: ['Datenschutz', 'Qualität', 'Vertrauen', 'Zuverlässigkeit']
    },
    {
      provider: 'Surfshark',
      country: 'DE',
      language: 'de',
      price: '€2,19',
      currency: 'EUR',
      discount: '86% Rabatt + 3 Monate gratis',
      cta: 'Sofort starten - 30 Tage Garantie',
      features: ['Unbegrenzte Geräte', 'Deutsche Server', 'Kill Switch', 'No-Logs-Policy'],
      affiliateLink: 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263',
      localContent: ['Netflix DE', 'Amazon Prime Video', 'Disney+', 'HBO Max'],
      culturalAppeal: ['Preis-Leistung', 'Einfachheit', 'Sicherheit', 'Innovation']
    }
  ],

  // Turkey - Focus on price, unlimited devices, promotions
  TR: [
    {
      provider: 'Surfshark',
      country: 'TR',
      language: 'tr',
      price: '₺20/ay',
      currency: 'TRY',
      discount: '86% İndirim + 3 Ay Ücretsiz',
      cta: 'Hemen Başla - 30 Gün Para İade Garantili',
      features: ['Sınırsız Cihaz', 'Türkçe Destek', 'Hızlı Bağlantı', 'Güvenli İndirme'],
      affiliateLink: 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263',
      localContent: ['Netflix TR', 'BluTV', 'Bein Sports', 'Turkcell TV+', 'Exxen'],
      culturalAppeal: ['Ucuz Planlar', 'Sınırsız Cihaz', 'Promosyonlar', 'Hızlı Kurulum']
    },
    {
      provider: 'PureVPN',
      country: 'TR',
      language: 'tr',
      price: '₺15/ay',
      currency: 'TRY',
      discount: '82% İndirim - 2 Yıllık Plan',
      cta: 'Şimdi Dene - 31 Gün Garanti',
      features: ['6500+ Sunucu', 'Türkçe Arayüz', '7/24 Destek', 'Para İade Garantisi'],
      affiliateLink: 'https://billing.purevpn.com/aff.php?aff=49387047',
      localContent: ['Netflix TR', 'YouTube Premium', 'Spotify', 'Online Oyunlar'],
      culturalAppeal: ['En Uygun Fiyat', 'Kolay Kullanım', 'Güvenilir', 'Hızlı']
    }
  ],

  // USA - Focus on streaming, gaming, privacy
  US: [
    {
      provider: 'NordVPN',
      country: 'US',
      language: 'en',
      price: '$3.71/month',
      currency: 'USD',
      discount: '68% OFF 2-year plan',
      cta: 'Try Now - 30 Days Money Back',
      features: ['US Servers', 'Netflix US', 'Gaming Optimized', 'Military-Grade Encryption'],
      affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902',
      localContent: ['Netflix US', 'Hulu', 'Disney+', 'HBO Max', 'Amazon Prime Video'],
      culturalAppeal: ['Trust', 'Security', 'Privacy', 'Reliability']
    },
    {
      provider: 'ExpressVPN',
      country: 'US',
      language: 'en',
      price: '$8.32/month',
      currency: 'USD',
      discount: '49% OFF + 3 months free',
      cta: 'Get ExpressVPN - 30 Days Guarantee',
      features: ['Fastest Speeds', 'US Servers', '24/7 Support', 'No-Logs Policy'],
      affiliateLink: 'https://www.expressvpn.com/order?affiliate_id=123456',
      localContent: ['Netflix US', 'Hulu', 'Disney+', 'HBO Max', 'YouTube TV'],
      culturalAppeal: ['Premium Quality', 'Speed', 'Reliability', 'Customer Service']
    }
  ],

  // Spain - Focus on streaming, mobile usage
  ES: [
    {
      provider: 'Surfshark',
      country: 'ES',
      language: 'es',
      price: '€2,19/mes',
      currency: 'EUR',
      discount: '86% Descuento + 3 meses gratis',
      cta: 'Probar ahora - 30 días de garantía',
      features: ['Dispositivos ilimitados', 'Servidores españoles', 'Soporte en español', 'Cifrado militar'],
      affiliateLink: 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263',
      localContent: ['Netflix ES', 'Movistar+', 'HBO Max', 'Amazon Prime Video', 'Disney+'],
      culturalAppeal: ['Mejor Precio', 'Fácil de usar', 'Seguro', 'Rápido']
    }
  ],

  // France - Focus on privacy, quality
  FR: [
    {
      provider: 'NordVPN',
      country: 'FR',
      language: 'fr',
      price: '€3,39/mois',
      currency: 'EUR',
      discount: '68% de réduction - Plan 2 ans',
      cta: 'Essayer maintenant - 30 jours garantis',
      features: ['Serveurs français', 'Support en français', 'RGPD conforme', 'Chiffrement militaire'],
      affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902',
      localContent: ['Netflix FR', 'Canal+', 'Amazon Prime Video', 'Disney+', 'HBO Max'],
      culturalAppeal: ['Qualité', 'Confiance', 'Sécurité', 'Fiabilité']
    }
  ],

  // Italy - Focus on streaming, gaming
  IT: [
    {
      provider: 'Surfshark',
      country: 'IT',
      language: 'it',
      price: '€2,19/mese',
      currency: 'EUR',
      discount: '86% di sconto + 3 mesi gratis',
      cta: 'Prova ora - 30 giorni di garanzia',
      features: ['Dispositivi illimitati', 'Server italiani', 'Supporto in italiano', 'Crittografia militare'],
      affiliateLink: 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263',
      localContent: ['Netflix IT', 'Sky Go', 'Amazon Prime Video', 'Disney+', 'HBO Max'],
      culturalAppeal: ['Miglior Prezzo', 'Facile da usare', 'Sicuro', 'Veloce']
    }
  ],

  // Brazil - Focus on mobile, streaming, football
  BR: [
    {
      provider: 'PureVPN',
      country: 'BR',
      language: 'pt',
      price: 'R$ 8,99/mês',
      currency: 'BRL',
      discount: '82% de desconto - Plano 2 anos',
      cta: 'Testar agora - 31 dias de garantia',
      features: ['Dispositivos ilimitados', 'Servidores brasileiros', 'Suporte em português', 'Criptografia militar'],
      affiliateLink: 'https://billing.purevpn.com/aff.php?aff=49387047',
      localContent: ['Netflix BR', 'Globoplay', 'Amazon Prime Video', 'Disney+', 'Futebol ao vivo'],
      culturalAppeal: ['Melhor Preço', 'Fácil de usar', 'Seguro', 'Rápido']
    }
  ],

  // Japan - Focus on speed, reliability
  JP: [
    {
      provider: 'NordVPN',
      country: 'JP',
      language: 'ja',
      price: '¥400/月',
      currency: 'JPY',
      discount: '68% オフ - 2年プラン',
      cta: '今すぐ試す - 30日間保証',
      features: ['日本サーバー', '日本語サポート', '軍事級暗号化', 'ノーログポリシー'],
      affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902',
      localContent: ['Netflix JP', 'Amazon Prime Video', 'Disney+', 'Hulu JP', 'AbemaTV'],
      culturalAppeal: ['品質', '信頼性', '速度', '安全性']
    }
  ],

  // South Korea - Focus on gaming, streaming
  KR: [
    {
      provider: 'Surfshark',
      country: 'KR',
      language: 'ko',
      price: '₩3,000/월',
      currency: 'KRW',
      discount: '86% 할인 + 3개월 무료',
      cta: '지금 시작 - 30일 보장',
      features: ['무제한 기기', '한국 서버', '한국어 지원', '군사급 암호화'],
      affiliateLink: 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263',
      localContent: ['Netflix KR', 'Disney+', 'Amazon Prime Video', 'YouTube Premium', '온라인 게임'],
      culturalAppeal: ['최고 가격', '쉬운 사용', '안전', '빠름']
    }
  ],

  // China - Focus on bypassing restrictions
  CN: [
    {
      provider: 'NordVPN',
      country: 'CN',
      language: 'zh',
      price: '¥25/月',
      currency: 'CNY',
      discount: '68% 折扣 - 2年计划',
      cta: '立即试用 - 30天保证',
      features: ['中国服务器', '中文支持', '军事级加密', '无日志政策'],
      affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902',
      localContent: ['Netflix CN', 'YouTube', 'Google', 'Facebook', 'Twitter'],
      culturalAppeal: ['质量', '可靠性', '速度', '安全性']
    }
  ],

  // Russia - Focus on privacy, security
  RU: [
    {
      provider: 'Surfshark',
      country: 'RU',
      language: 'ru',
      price: '₽200/месяц',
      currency: 'RUB',
      discount: '86% скидка + 3 месяца бесплатно',
      cta: 'Начать сейчас - 30 дней гарантии',
      features: ['Неограниченные устройства', 'Российские серверы', 'Поддержка на русском', 'Военное шифрование'],
      affiliateLink: 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263',
      localContent: ['Netflix RU', 'YouTube', 'Google', 'Facebook', 'Instagram'],
      culturalAppeal: ['Лучшая цена', 'Простота', 'Безопасность', 'Скорость']
    }
  ]
};

// Get best affiliate offer for country
export function getBestAffiliateOffer(country: string, language: string): AffiliateOffer | null {
  const offers = dynamicAffiliateOffers[country];
  if (!offers || offers.length === 0) {
    // Fallback to US offers
    return dynamicAffiliateOffers['US']?.[0] || null;
  }
  
  // Return first offer (best one) for the country
  return offers[0];
}

// Get all offers for country
export function getAllAffiliateOffers(country: string): AffiliateOffer[] {
  return dynamicAffiliateOffers[country] || dynamicAffiliateOffers['US'] || [];
}

// Get cultural appeal keywords for country
export function getCulturalAppeal(country: string): string[] {
  const offer = getBestAffiliateOffer(country, '');
  return offer?.culturalAppeal || ['Trust', 'Security', 'Privacy', 'Reliability'];
}

// Get local content for country
export function getLocalContent(country: string): string[] {
  const offer = getBestAffiliateOffer(country, '');
  return offer?.localContent || ['Netflix', 'YouTube', 'Google', 'Facebook'];
}

// Format price for country
export function formatPrice(price: string, currency: string, country: string): string {
  // Add country-specific formatting
  switch (country) {
    case 'DE':
    case 'FR':
    case 'ES':
    case 'IT':
      return `${price} ${currency}`;
    case 'US':
      return `$${price}`;
    case 'TR':
      return `${price} ${currency}`;
    case 'JP':
      return `${price} ${currency}`;
    case 'KR':
      return `${price} ${currency}`;
    case 'CN':
      return `${price} ${currency}`;
    case 'RU':
      return `${price} ${currency}`;
    default:
      return `${price} ${currency}`;
  }
}

// Get CTA text for country
export function getCTAText(country: string, language: string): string {
  const offer = getBestAffiliateOffer(country, language);
  return offer?.cta || 'Try Now - 30 Days Money Back';
}

// Get discount text for country
export function getDiscountText(country: string, language: string): string {
  const offer = getBestAffiliateOffer(country, language);
  return offer?.discount || 'Save up to 68% on 2-year plan';
}
