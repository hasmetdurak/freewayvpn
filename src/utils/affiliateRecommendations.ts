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
    faqId: 2, // "Are VPNs legal to use?"
    provider: "NordVPN",
    descriptionKey: "affiliates.nordvpn.description1",
    featuresKeys: ["affiliates.nordvpn.feature1", "affiliates.nordvpn.feature2", "affiliates.nordvpn.feature3", "affiliates.nordvpn.feature4"],
    ctaTextKey: "affiliates.nordvpn.cta1",
    affiliateUrl: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902",
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
    faqId: 5, // "What is the best VPN protocol?"
    provider: "NordVPN",
    descriptionKey: "affiliates.nordvpn.description2",
    featuresKeys: ["affiliates.nordvpn.feature5", "affiliates.nordvpn.feature6", "affiliates.nordvpn.feature7", "affiliates.nordvpn.feature8"],
    ctaTextKey: "affiliates.nordvpn.cta2",
    affiliateUrl: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902",
    discountKey: "affiliates.nordvpn.discount1",
    rating: 4.8
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
    faqId: 9, // "What is a kill switch?"
    provider: "NordVPN",
    descriptionKey: "affiliates.nordvpn.description3",
    featuresKeys: ["affiliates.nordvpn.feature9", "affiliates.nordvpn.feature10", "affiliates.nordvpn.feature11", "affiliates.nordvpn.feature12"],
    ctaTextKey: "affiliates.nordvpn.cta3",
    affiliateUrl: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902",
    discountKey: "affiliates.nordvpn.discount1",
    rating: 4.8
  }];

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