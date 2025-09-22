// VPN Comparison utilities with premium partner priority

export interface VPNComparison {
  id: number;
  name: string;
  rating: number;
  price: number;
  isPremiumPartner: boolean;
  features: string[];
}

// Premium partners always get priority in comparisons
const PREMIUM_PARTNERS = ['NordVPN', 'Surfshark', 'VPN.ac'];

export function sortVPNsForComparison(vpns: any[]): any[] {
  return vpns.sort((a, b) => {
    // Premium partners always come first
    const aIsPremium = PREMIUM_PARTNERS.includes(a.name);
    const bIsPremium = PREMIUM_PARTNERS.includes(b.name);
    
    if (aIsPremium && !bIsPremium) return -1;
    if (!aIsPremium && bIsPremium) return 1;
    
    // Among premium partners, sort by predefined order
    if (aIsPremium && bIsPremium) {
      return PREMIUM_PARTNERS.indexOf(a.name) - PREMIUM_PARTNERS.indexOf(b.name);
    }
    
    // For non-premium, sort by rating
    return b.rating - a.rating;
  });
}

export function getTopVPNRecommendations(vpns: any[], count: number = 5): any[] {
  const sorted = sortVPNsForComparison(vpns);
  return sorted.slice(0, count);
}

export function isPremiumPartner(vpnName: string): boolean {
  return PREMIUM_PARTNERS.includes(vpnName);
}

export function getPremiumPartnerBadge(vpnName: string): string {
  if (vpnName === 'NordVPN') return '🏆 #1 Premium Partner';
  if (vpnName === 'Surfshark') return '🥈 #2 Premium Partner';
  if (vpnName === 'VPN.ac') return '🥉 #3 Premium Partner';
  return '';
}