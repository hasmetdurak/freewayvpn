// Affiliate recommendations for specific FAQ questions
import { getTranslation } from './translations';

export interface AffiliateRecommendationData {
  faqId: number;
  provider: string;
  descriptionKey: string;
  featuresKeys: string[];
  ctaTextKey: string;
  affiliateUrl: string;
  discountKey?: string;
  rating?: number;
}

export interface AffiliateRecommendation {
  faqId: number;
  provider: string;
  description: string;
  features: string[];
  ctaText: string;
  affiliateUrl: string;
  discount?: string;
  rating?: number;
}

export const affiliateRecommendationsData: AffiliateRecommendationData[] = [
  {
    faqId: 1, // "What is a VPN and how does it work?"
    provider: "ExpressVPN",
    descriptionKey: "affiliates.expressvpn.description1",
    featuresKeys: ["affiliates.expressvpn.feature1", "affiliates.expressvpn.feature2", "affiliates.expressvpn.feature3", "affiliates.expressvpn.feature4"],
    ctaTextKey: "affiliates.expressvpn.cta1",
    affiliateUrl: "https://expressvpn.com/order",
    discountKey: "affiliates.expressvpn.discount1",
    rating: 4.9
  },
  {
    faqId: 2, // "Are VPNs legal to use?"
    provider: "NordVPN",
    descriptionKey: "affiliates.nordvpn.description1",
    featuresKeys: ["affiliates.nordvpn.feature1", "affiliates.nordvpn.feature2", "affiliates.nordvpn.feature3", "affiliates.nordvpn.feature4"],
    ctaTextKey: "affiliates.nordvpn.cta1",
    affiliateUrl: "https://nordvpn.com/order",
    discountKey: "affiliates.nordvpn.discount1",
    rating: 4.8
  },
  {
    faqId: 3, // "Do VPNs slow down internet speed?"
    provider: "Surfshark",
    descriptionKey: "affiliates.surfshark.description1",
    featuresKeys: ["affiliates.surfshark.feature1", "affiliates.surfshark.feature2", "affiliates.surfshark.feature3", "affiliates.surfshark.feature4"],
    ctaTextKey: "affiliates.surfshark.cta1",
    affiliateUrl: "https://surfshark.com/order",
    discountKey: "affiliates.surfshark.discount1",
    rating: 4.7
  },
  {
    faqId: 4, // "Can I use a VPN for streaming Netflix?"
    provider: "ExpressVPN",
    descriptionKey: "affiliates.expressvpn.description2",
    featuresKeys: ["affiliates.expressvpn.feature5", "affiliates.expressvpn.feature6", "affiliates.expressvpn.feature7", "affiliates.expressvpn.feature8"],
    ctaTextKey: "affiliates.expressvpn.cta2",
    affiliateUrl: "https://expressvpn.com/order",
    discountKey: "affiliates.expressvpn.discount1",
    rating: 4.9
  },
  {
    faqId: 5, // "What is the best VPN protocol?"
    provider: "NordVPN",
    descriptionKey: "affiliates.nordvpn.description2",
    featuresKeys: ["affiliates.nordvpn.feature5", "affiliates.nordvpn.feature6", "affiliates.nordvpn.feature7", "affiliates.nordvpn.feature8"],
    ctaTextKey: "affiliates.nordvpn.cta2",
    affiliateUrl: "https://nordvpn.com/order",
    discountKey: "affiliates.nordvpn.discount1",
    rating: 4.8
  },
  {
    faqId: 6, // "Can I use a VPN on my phone?"
    provider: "CyberGhost",
    descriptionKey: "affiliates.cyberghost.description1",
    featuresKeys: ["affiliates.cyberghost.feature1", "affiliates.cyberghost.feature2", "affiliates.cyberghost.feature3", "affiliates.cyberghost.feature4"],
    ctaTextKey: "affiliates.cyberghost.cta1",
    affiliateUrl: "https://cyberghostvpn.com/order",
    discountKey: "affiliates.cyberghost.discount1",
    rating: 4.6
  },
  {
    faqId: 7, // "How much does a VPN cost?"
    provider: "Surfshark",
    descriptionKey: "affiliates.surfshark.description2",
    featuresKeys: ["affiliates.surfshark.feature5", "affiliates.surfshark.feature6", "affiliates.surfshark.feature7", "affiliates.surfshark.feature8"],
    ctaTextKey: "affiliates.surfshark.cta2",
    affiliateUrl: "https://surfshark.com/order",
    discountKey: "affiliates.surfshark.discount1",
    rating: 4.7
  },
  {
    faqId: 8, // "Can I use a VPN for torrenting?"
    provider: "ExpressVPN",
    descriptionKey: "affiliates.expressvpn.description3",
    featuresKeys: ["affiliates.expressvpn.feature9", "affiliates.expressvpn.feature10", "affiliates.expressvpn.feature11", "affiliates.expressvpn.feature12"],
    ctaTextKey: "affiliates.expressvpn.cta3",
    affiliateUrl: "https://expressvpn.com/order",
    discountKey: "affiliates.expressvpn.discount1",
    rating: 4.9
  },
  {
    faqId: 9, // "What is a kill switch?"
    provider: "NordVPN",
    descriptionKey: "affiliates.nordvpn.description3",
    featuresKeys: ["affiliates.nordvpn.feature9", "affiliates.nordvpn.feature10", "affiliates.nordvpn.feature11", "affiliates.nordvpn.feature12"],
    ctaTextKey: "affiliates.nordvpn.cta3",
    affiliateUrl: "https://nordvpn.com/order",
    discountKey: "affiliates.nordvpn.discount1",
    rating: 4.8
  },
  {
    faqId: 10, // "Can I get a free VPN?"
    provider: "CyberGhost",
    descriptionKey: "affiliates.cyberghost.description2",
    featuresKeys: ["affiliates.cyberghost.feature5", "affiliates.cyberghost.feature6", "affiliates.cyberghost.feature7", "affiliates.cyberghost.feature8"],
    ctaTextKey: "affiliates.cyberghost.cta2",
    affiliateUrl: "https://cyberghostvpn.com/order",
    discountKey: "affiliates.cyberghost.discount1",
    rating: 4.6
  }
];

export const getAffiliateRecommendation = (faqId: number, language: string): AffiliateRecommendation | null => {
  const data = affiliateRecommendationsData.find(rec => rec.faqId === faqId);
  if (!data) return null;
  
  return {
    faqId: data.faqId,
    provider: data.provider,
    description: getTranslation(language, data.descriptionKey),
    features: data.featuresKeys.map(key => getTranslation(language, key)),
    ctaText: getTranslation(language, data.ctaTextKey),
    affiliateUrl: data.affiliateUrl,
    discount: data.discountKey ? getTranslation(language, data.discountKey) : undefined,
    rating: data.rating
  };
};