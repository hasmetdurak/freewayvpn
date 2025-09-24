// Seasonal Campaigns - Black Friday, Cyber Monday, New Year optimizations
// Dynamic pricing and promotional content based on seasonal events

export interface SeasonalCampaign {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  discount: string;
  cta: string;
  banner: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  features: string[];
  urgency: string;
  countdown?: boolean;
}

export interface SeasonalOffer {
  provider: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  currency: string;
  country: string;
  language: string;
  cta: string;
  urgency: string;
  features: string[];
  affiliateLink: string;
}

// Seasonal campaigns for different regions
export const seasonalCampaigns: Record<string, SeasonalCampaign[]> = {
  // Black Friday - Global
  'black-friday': [
    {
      id: 'bf-global-2025',
      name: 'Black Friday 2025',
      startDate: '2025-11-24',
      endDate: '2025-11-30',
      discount: 'Up to 90% OFF',
      cta: 'Get Black Friday Deal',
      banner: '🔥 BLACK FRIDAY SALE 🔥',
      colors: {
        primary: '#FF0000',
        secondary: '#000000',
        accent: '#FFD700'
      },
      features: ['Limited Time', 'Best Prices Ever', 'Exclusive Deals', 'Free Months'],
      urgency: 'Only 7 days left!',
      countdown: true
    }
  ],

  // Cyber Monday - Global
  'cyber-monday': [
    {
      id: 'cm-global-2025',
      name: 'Cyber Monday 2025',
      startDate: '2025-12-01',
      endDate: '2025-12-02',
      discount: 'Up to 85% OFF',
      cta: 'Get Cyber Monday Deal',
      banner: '💻 CYBER MONDAY SALE 💻',
      colors: {
        primary: '#00FF00',
        secondary: '#000000',
        accent: '#00FFFF'
      },
      features: ['24 Hours Only', 'Tech Deals', 'Digital Security', 'Instant Activation'],
      urgency: 'Only 24 hours left!',
      countdown: true
    }
  ],

  // New Year - Global
  'new-year': [
    {
      id: 'ny-global-2025',
      name: 'New Year 2025',
      startDate: '2025-01-01',
      endDate: '2025-01-31',
      discount: 'Up to 75% OFF',
      cta: 'Start New Year Secure',
      banner: '🎉 NEW YEAR SALE 🎉',
      colors: {
        primary: '#FFD700',
        secondary: '#000000',
        accent: '#FF6B6B'
      },
      features: ['New Year Resolution', 'Fresh Start', 'Annual Plans', 'Resolution Support'],
      urgency: 'New Year, New Security!',
      countdown: false
    }
  ],

  // Valentine's Day - Global
  'valentines': [
    {
      id: 'vd-global-2025',
      name: 'Valentine\'s Day 2025',
      startDate: '2025-02-10',
      endDate: '2025-02-16',
      discount: 'Up to 70% OFF',
      cta: 'Share Security with Love',
      banner: '💕 VALENTINE\'S SALE 💕',
      colors: {
        primary: '#FF69B4',
        secondary: '#FFFFFF',
        accent: '#FF1493'
      },
      features: ['Couple Plans', 'Share with Partner', 'Love & Security', 'Romantic Privacy'],
      urgency: 'Show your love with security!',
      countdown: false
    }
  ],

  // Summer Sale - Global
  'summer': [
    {
      id: 'summer-global-2025',
      name: 'Summer Sale 2025',
      startDate: '2025-06-01',
      endDate: '2025-08-31',
      discount: 'Up to 65% OFF',
      cta: 'Summer Security Deal',
      banner: '☀️ SUMMER SALE ☀️',
      colors: {
        primary: '#FFA500',
        secondary: '#FFFFFF',
        accent: '#FF6347'
      },
      features: ['Summer Travel', 'Beach Security', 'Vacation Privacy', 'Travel Plans'],
      urgency: 'Secure your summer!',
      countdown: false
    }
  ]
};

// Seasonal offers for different VPN providers
export const seasonalOffers: Record<string, SeasonalOffer[]> = {
  // Black Friday Offers
  'black-friday': [
    {
      provider: 'NordVPN',
      originalPrice: '$11.95/month',
      discountedPrice: '$2.99/month',
      discount: '75% OFF',
      currency: 'USD',
      country: 'US',
      language: 'en',
      cta: 'Get Black Friday Deal - 75% OFF',
      urgency: 'Only 7 days left!',
      features: ['2-year plan', '3 months free', '30-day guarantee', 'All features included'],
      affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902'
    },
    {
      provider: 'Surfshark',
      originalPrice: '$12.95/month',
      discountedPrice: '$1.99/month',
      discount: '85% OFF',
      currency: 'USD',
      country: 'US',
      language: 'en',
      cta: 'Get Black Friday Deal - 85% OFF',
      urgency: 'Only 7 days left!',
      features: ['2-year plan', '4 months free', 'Unlimited devices', '30-day guarantee'],
      affiliateLink: 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263'
    },
    {
      provider: 'PureVPN',
      originalPrice: '$10.95/month',
      discountedPrice: '$1.99/month',
      discount: '82% OFF',
      currency: 'USD',
      country: 'US',
      language: 'en',
      cta: 'Get Black Friday Deal - 82% OFF',
      urgency: 'Only 7 days left!',
      features: ['2-year plan', '6 months free', '31-day guarantee', 'All features included'],
      affiliateLink: 'https://billing.purevpn.com/aff.php?aff=49387047'
    }
  ],

  // Cyber Monday Offers
  'cyber-monday': [
    {
      provider: 'NordVPN',
      originalPrice: '$11.95/month',
      discountedPrice: '$3.49/month',
      discount: '71% OFF',
      currency: 'USD',
      country: 'US',
      language: 'en',
      cta: 'Get Cyber Monday Deal - 71% OFF',
      urgency: 'Only 24 hours left!',
      features: ['2-year plan', '2 months free', '30-day guarantee', 'All features included'],
      affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902'
    },
    {
      provider: 'Surfshark',
      originalPrice: '$12.95/month',
      discountedPrice: '$2.49/month',
      discount: '81% OFF',
      currency: 'USD',
      country: 'US',
      language: 'en',
      cta: 'Get Cyber Monday Deal - 81% OFF',
      urgency: 'Only 24 hours left!',
      features: ['2-year plan', '3 months free', 'Unlimited devices', '30-day guarantee'],
      affiliateLink: 'https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263'
    }
  ],

  // New Year Offers
  'new-year': [
    {
      provider: 'NordVPN',
      originalPrice: '$11.95/month',
      discountedPrice: '$4.99/month',
      discount: '58% OFF',
      currency: 'USD',
      country: 'US',
      language: 'en',
      cta: 'Start New Year Secure - 58% OFF',
      urgency: 'New Year, New Security!',
      features: ['1-year plan', '1 month free', '30-day guarantee', 'All features included'],
      affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902'
    }
  ]
};

// Get current seasonal campaign
export function getCurrentSeasonalCampaign(): SeasonalCampaign | null {
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];

  // Check all campaigns
  for (const campaignType of Object.keys(seasonalCampaigns)) {
    const campaigns = seasonalCampaigns[campaignType];
    for (const campaign of campaigns) {
      if (currentDate >= campaign.startDate && currentDate <= campaign.endDate) {
        return campaign;
      }
    }
  }

  return null;
}

// Get seasonal offers for campaign
export function getSeasonalOffers(campaignType: string, country: string, language: string): SeasonalOffer[] {
  const offers = seasonalOffers[campaignType] || [];
  
  // Filter by country and language, with fallback to US/English
  let filteredOffers = offers.filter(offer => 
    offer.country === country && offer.language === language
  );

  // Fallback to US/English if no specific offers found
  if (filteredOffers.length === 0) {
    filteredOffers = offers.filter(offer => 
      offer.country === 'US' && offer.language === 'en'
    );
  }

  return filteredOffers;
}

// Get localized seasonal campaign
export function getLocalizedSeasonalCampaign(country: string, language: string): SeasonalCampaign | null {
  const campaign = getCurrentSeasonalCampaign();
  if (!campaign) return null;

  // Localize campaign based on country/language
  const localizedCampaign: SeasonalCampaign = {
    ...campaign,
    cta: getLocalizedCTA(campaign.cta, country, language),
    urgency: getLocalizedUrgency(campaign.urgency, country, language),
    features: getLocalizedFeatures(campaign.features, country, language)
  };

  return localizedCampaign;
}

// Get localized CTA
function getLocalizedCTA(cta: string, country: string, language: string): string {
  const localizedCTAs: { [key: string]: { [key: string]: string } } = {
    'black-friday': {
      'de': 'Black Friday Deal sichern',
      'tr': 'Black Friday Fırsatını Yakala',
      'es': 'Obtener Oferta Black Friday',
      'fr': 'Obtenir l\'offre Black Friday',
      'it': 'Ottieni l\'offerta Black Friday',
      'pt': 'Obter Oferta Black Friday',
      'ru': 'Получить скидку Black Friday',
      'zh': '获取黑色星期五优惠',
      'ja': 'ブラックフライデーセールを取得',
      'ko': '블랙프라이데이 딜 받기',
      'ar': 'احصل على عرض الجمعة السوداء',
      'hi': 'ब्लैक फ्राइडे डील प्राप्त करें',
      'id': 'Dapatkan Penawaran Black Friday',
      'vi': 'Nhận Ưu Đãi Black Friday',
      'nb': 'Få Black Friday-tilbud',
      'sv': 'Få Black Friday-erbjudande',
      'fi': 'Hanki Black Friday -tarjous',
      'pl': 'Uzyskaj ofertę Black Friday',
      'th': 'รับข้อเสนอ Black Friday',
      'fa': 'دریافت پیشنهاد جمعه سیاه',
      'tl': 'Kunin ang Black Friday Deal'
    },
    'cyber-monday': {
      'de': 'Cyber Monday Deal sichern',
      'tr': 'Cyber Monday Fırsatını Yakala',
      'es': 'Obtener Oferta Cyber Monday',
      'fr': 'Obtenir l\'offre Cyber Monday',
      'it': 'Ottieni l\'offerta Cyber Monday',
      'pt': 'Obter Oferta Cyber Monday',
      'ru': 'Получить скидку Cyber Monday',
      'zh': '获取网络星期一优惠',
      'ja': 'サイバーマンデーセールを取得',
      'ko': '사이버 먼데이 딜 받기',
      'ar': 'احصل على عرض الاثنين السيبراني',
      'hi': 'साइबर मंडे डील प्राप्त करें',
      'id': 'Dapatkan Penawaran Cyber Monday',
      'vi': 'Nhận Ưu Đãi Cyber Monday',
      'nb': 'Få Cyber Monday-tilbud',
      'sv': 'Få Cyber Monday-erbjudande',
      'fi': 'Hanki Cyber Monday -tarjous',
      'pl': 'Uzyskaj ofertę Cyber Monday',
      'th': 'รับข้อเสนอ Cyber Monday',
      'fa': 'دریافت پیشنهاد دوشنبه سایبری',
      'tl': 'Kunin ang Cyber Monday Deal'
    }
  };

  const campaignType = cta.toLowerCase().includes('black friday') ? 'black-friday' : 'cyber-monday';
  return localizedCTAs[campaignType]?.[language] || cta;
}

// Get localized urgency
function getLocalizedUrgency(urgency: string, country: string, language: string): string {
  const localizedUrgency: { [key: string]: { [key: string]: string } } = {
    'Only 7 days left!': {
      'de': 'Nur noch 7 Tage!',
      'tr': 'Sadece 7 gün kaldı!',
      'es': '¡Solo quedan 7 días!',
      'fr': 'Il ne reste que 7 jours !',
      'it': 'Rimangono solo 7 giorni!',
      'pt': 'Restam apenas 7 dias!',
      'ru': 'Осталось всего 7 дней!',
      'zh': '只剩7天了！',
      'ja': 'あと7日しかありません！',
      'ko': '7일밖에 남지 않았습니다!',
      'ar': 'لم يتبق سوى 7 أيام!',
      'hi': 'केवल 7 दिन बचे हैं!',
      'id': 'Hanya tersisa 7 hari!',
      'vi': 'Chỉ còn 7 ngày!',
      'nb': 'Bare 7 dager igjen!',
      'sv': 'Bara 7 dagar kvar!',
      'fi': 'Vain 7 päivää jäljellä!',
      'pl': 'Zostało tylko 7 dni!',
      'th': 'เหลือเพียง 7 วัน!',
      'fa': 'فقط 7 روز باقی مانده!',
      'tl': '7 araw na lang ang natitira!'
    },
    'Only 24 hours left!': {
      'de': 'Nur noch 24 Stunden!',
      'tr': 'Sadece 24 saat kaldı!',
      'es': '¡Solo quedan 24 horas!',
      'fr': 'Il ne reste que 24 heures !',
      'it': 'Rimangono solo 24 ore!',
      'pt': 'Restam apenas 24 horas!',
      'ru': 'Осталось всего 24 часа!',
      'zh': '只剩24小时了！',
      'ja': 'あと24時間しかありません！',
      'ko': '24시간밖에 남지 않았습니다!',
      'ar': 'لم يتبق سوى 24 ساعة!',
      'hi': 'केवल 24 घंटे बचे हैं!',
      'id': 'Hanya tersisa 24 jam!',
      'vi': 'Chỉ còn 24 giờ!',
      'nb': 'Bare 24 timer igjen!',
      'sv': 'Bara 24 timmar kvar!',
      'fi': 'Vain 24 tuntia jäljellä!',
      'pl': 'Zostało tylko 24 godziny!',
      'th': 'เหลือเพียง 24 ชั่วโมง!',
      'fa': 'فقط 24 ساعت باقی مانده!',
      'tl': '24 oras na lang ang natitira!'
    }
  };

  return localizedUrgency[urgency]?.[language] || urgency;
}

// Get localized features
function getLocalizedFeatures(features: string[], country: string, language: string): string[] {
  const localizedFeatures: { [key: string]: { [key: string]: string[] } } = {
    'Limited Time': {
      'de': ['Begrenzte Zeit'],
      'tr': ['Sınırlı Süre'],
      'es': ['Tiempo Limitado'],
      'fr': ['Temps Limité'],
      'it': ['Tempo Limitato'],
      'pt': ['Tempo Limitado'],
      'ru': ['Ограниченное Время'],
      'zh': ['限时'],
      'ja': ['限定時間'],
      'ko': ['제한된 시간'],
      'ar': ['وقت محدود'],
      'hi': ['सीमित समय'],
      'id': ['Waktu Terbatas'],
      'vi': ['Thời Gian Có Hạn'],
      'nb': ['Begrenset Tid'],
      'sv': ['Begränsad Tid'],
      'fi': ['Rajoitettu Aika'],
      'pl': ['Ograniczony Czas'],
      'th': ['เวลาจำกัด'],
      'fa': ['زمان محدود'],
      'tl': ['Limitadong Oras']
    }
  };

  // For now, return original features
  // In a real implementation, you would localize each feature
  return features;
}

// Check if seasonal campaign is active
export function isSeasonalCampaignActive(): boolean {
  return getCurrentSeasonalCampaign() !== null;
}

// Get countdown time for active campaign
export function getCampaignCountdown(): { days: number; hours: number; minutes: number; seconds: number } | null {
  const campaign = getCurrentSeasonalCampaign();
  if (!campaign || !campaign.countdown) return null;

  const now = new Date();
  const endDate = new Date(campaign.endDate + 'T23:59:59');
  const timeLeft = endDate.getTime() - now.getTime();

  if (timeLeft <= 0) return null;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

// Get seasonal banner text
export function getSeasonalBanner(country: string, language: string): string | null {
  const campaign = getLocalizedSeasonalCampaign(country, language);
  return campaign?.banner || null;
}

// Get seasonal CTA
export function getSeasonalCTA(country: string, language: string): string | null {
  const campaign = getLocalizedSeasonalCampaign(country, language);
  return campaign?.cta || null;
}

// Get seasonal urgency
export function getSeasonalUrgency(country: string, language: string): string | null {
  const campaign = getLocalizedSeasonalCampaign(country, language);
  return campaign?.urgency || null;
}
