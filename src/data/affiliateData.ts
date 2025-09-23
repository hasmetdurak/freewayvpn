// Premium Affiliate Partners Data
// This file contains affiliate information for our premium VPN partners

export interface AffiliatePartner {
  id: string;
  name: string;
  displayName: string;
  affiliateLink: string;
  commission: string;
  tier: 'premium' | 'standard' | 'basic';
  isActive: boolean;
  description: string;
  specialOffers?: string[];
  trackingParams?: {
    [key: string]: string;
  };
}

// Premium Partners - Our top earning affiliate partners
export const premiumPartners: AffiliatePartner[] = [
  {
    id: 'nordvpn',
    name: 'NordVPN',
    displayName: 'NordVPN',
    affiliateLink: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902',
    commission: 'Premium Commission',
    tier: 'premium',
    isActive: true,
    description: 'Our #1 premium affiliate partner with highest conversion rates',
    specialOffers: [
      '68% discount on 2-year plan',
      '30-day money-back guarantee',
      'Free additional months'
    ],
    trackingParams: {
      offer_id: '15',
      aff_id: '132118',
      url_id: '902'
    }
  },
  {
    id: 'surfshark',
    name: 'Surfshark',
    displayName: 'Surfshark',
    affiliateLink: 'https://surfshark.hasoffers.com/signup/41263',
    commission: 'Premium Commission',
    tier: 'premium',
    isActive: true,
    description: 'Our #2 premium affiliate partner with unlimited device connections',
    specialOffers: [
      '86% discount on 2-year plan',
      '30-day money-back guarantee',
      'Unlimited simultaneous connections',
      'CleanWeb ad blocker included'
    ],
    trackingParams: {
      signup: '41263'
    }
  },
  {
    id: 'vpnac',
    name: 'VPN.ac',
    displayName: 'VPN.ac',
    affiliateLink: 'https://vpn.ac/aff.php?aff=3464',
    commission: 'Premium Commission',
    tier: 'premium',
    isActive: true,
    description: 'Our #3 premium affiliate partner with professional-grade security features',
    specialOffers: [
      'Starting from $3.75/month',
      '7-day money-back guarantee',
      'Advanced encryption protocols'
    ],
    trackingParams: {
      aff: '3464'
    }
  },
  {
    id: 'hideme',
    name: 'Hide.me',
    displayName: 'Hide.me',
    affiliateLink: 'https://member.hide.me/en/user/login',
    commission: 'Premium Commission',
    tier: 'premium',
    isActive: true,
    description: 'Our #4 premium affiliate partner with privacy-focused features and generous free tier',
    specialOffers: [
      'Starting from $2.59/month',
      '30-day money-back guarantee',
      'Generous free tier available'
    ],
    trackingParams: {}
  },
  {
    id: 'protonvpn',
    name: 'Proton VPN',
    displayName: 'Proton VPN',
    affiliateLink: 'https://account.protonvpn.com/login',
    commission: 'Premium Commission',
    tier: 'premium',
    isActive: true,
    description: 'Our #5 premium affiliate partner with Swiss-based privacy and strong security focus',
    specialOffers: [
      'Starting from $4.99/month',
      'Free tier available',
      'Swiss privacy laws protection'
    ],
    trackingParams: {}
  }
];

// Standard Partners (to be added later)
export const standardPartners: AffiliatePartner[] = [];

// Basic Partners (to be added later)
export const basicPartners: AffiliatePartner[] = [];

// All partners combined
export const allAffiliatePartners: AffiliatePartner[] = [
  ...premiumPartners,
  ...standardPartners,
  ...basicPartners
];

// Auto-update functions
export const addPremiumPartnerToData = (partner: AffiliatePartner): void => {
  // Check if partner already exists
  const existingIndex = premiumPartners.findIndex(p => p.id === partner.id);
  
  if (existingIndex >= 0) {
    // Update existing partner
    premiumPartners[existingIndex] = partner;
  } else {
    // Add new partner
    premiumPartners.push(partner);
  }
  
  // Refresh allAffiliatePartners array
  refreshAllPartners();
};

export const updatePartnerAffiliateUrl = (partnerId: string, newUrl: string): boolean => {
  const partner = allAffiliatePartners.find(p => p.id === partnerId);
  if (partner) {
    partner.affiliateLink = newUrl;
    return true;
  }
  return false;
};

export const refreshAllPartners = (): void => {
  // This would typically refresh the allAffiliatePartners array
  // In a real implementation, this might trigger a re-export or state update
  console.log('Refreshing all affiliate partners...');
};

// Helper functions
export const getAffiliatePartnerById = (id: string): AffiliatePartner | undefined => {
  return allAffiliatePartners.find(partner => partner.id === id);
};

export const getAffiliateLink = (partnerId: string): string | null => {
  const partner = getAffiliatePartnerById(partnerId);
  return partner ? partner.affiliateLink : null;
};

export const getPremiumPartners = (): AffiliatePartner[] => {
  return premiumPartners;
};

export const isAffiliatePartner = (name: string): boolean => {
  return allAffiliatePartners.some(partner => 
    partner.name.toLowerCase() === name.toLowerCase()
  );
};

export const generateAffiliateLink = (partnerId: string, source?: string): string | null => {
  const baseUrl = getAffiliateLink(partnerId);
  if (!baseUrl) return null;
  
  try {
    const url = new URL(baseUrl);
    if (source) {
      url.searchParams.set('utm_source', source);
      url.searchParams.set('utm_medium', 'affiliate');
    }
    return url.toString();
  } catch {
    return baseUrl;
  }
};

export default {
  premiumPartners,
  standardPartners,
  basicPartners,
  allAffiliatePartners,
  addPremiumPartnerToData,
  updatePartnerAffiliateUrl,
  refreshAllPartners,
  getAffiliatePartnerById,
  getAffiliateLink,
  getPremiumPartners,
  isAffiliatePartner,
  generateAffiliateLink
};