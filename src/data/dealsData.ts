export interface Deal {
  id: string;
  provider: string;
  title: string;
  discountPercent: number;
  couponCode?: string;
  expiresAt: string;
  affiliateUrl: string;
  verified: boolean;
  notes: string;
  priority: number;
  badge?: string;
}

export const dealsData: Deal[] = [
  {
    id: 'nordvpn-2025-exclusive',
    provider: 'NordVPN',
    title: 'NordVPN 73% OFF + 3 Months FREE',
    discountPercent: 73,
    couponCode: 'BESTVPN73',
    expiresAt: '2025-10-15T23:59:59Z',
    affiliateUrl: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_ID',
    verified: true,
    notes: '2-year plan - Best value ever',
    priority: 1,
    badge: 'EDITOR\'S CHOICE'
  },
  {
    id: 'surfshark-2025-flash',
    provider: 'Surfshark',
    title: 'Surfshark 86% OFF - Flash Sale',
    discountPercent: 86,
    couponCode: 'SURF86',
    expiresAt: '2025-10-12T23:59:59Z',
    affiliateUrl: 'https://surfshark.com/deal/best-value?id=YOUR_ID',
    verified: true,
    notes: 'Unlimited devices + 2 months extra',
    priority: 2,
    badge: 'FLASH SALE'
  },
  {
    id: 'expressvpn-exclusive',
    provider: 'ExpressVPN',
    title: 'ExpressVPN 49% OFF + 3 Months',
    discountPercent: 49,
    expiresAt: '2025-10-20T23:59:59Z',
    affiliateUrl: 'https://www.expressvpn.com/order?a_aid=YOUR_ID',
    verified: true,
    notes: 'Fastest VPN - Premium choice',
    priority: 3,
    badge: 'FASTEST'
  },
  {
    id: 'cyberghost-limited',
    provider: 'CyberGhost',
    title: 'CyberGhost 83% OFF + 4 Months FREE',
    discountPercent: 83,
    couponCode: 'CYBER83',
    expiresAt: '2025-10-18T23:59:59Z',
    affiliateUrl: 'https://www.cyberghostvpn.com/aff?id=YOUR_ID',
    verified: true,
    notes: 'Best for streaming - 7 devices',
    priority: 4,
    badge: 'BEST STREAMING'
  },
  {
    id: 'pia-anniversary',
    provider: 'Private Internet Access',
    title: 'PIA 82% OFF - Anniversary Deal',
    discountPercent: 82,
    couponCode: 'PIA82',
    expiresAt: '2025-10-10T23:59:59Z',
    affiliateUrl: 'https://www.privateinternetaccess.com/aff?id=YOUR_ID',
    verified: true,
    notes: 'Open source + port forwarding',
    priority: 5,
    badge: 'OPEN SOURCE'
  },
  {
    id: 'protonvpn-secure',
    provider: 'ProtonVPN',
    title: 'ProtonVPN 55% OFF - Secure Swiss VPN',
    discountPercent: 55,
    expiresAt: '2025-10-25T23:59:59Z',
    affiliateUrl: 'https://protonvpn.com/aff?id=YOUR_ID',
    verified: true,
    notes: 'Swiss privacy laws - No logs',
    priority: 6,
    badge: 'MOST PRIVATE'
  }
];

// Deals'leri priority ve expiry'ye göre sırala
export const getActiveDeals = (): Deal[] => {
  const now = new Date().getTime();
  return dealsData
    .filter(deal => new Date(deal.expiresAt).getTime() > now)
    .sort((a, b) => {
      // Önce priority'ye göre, sonra discount'a göre
      if (a.priority !== b.priority) return a.priority - b.priority;
      return b.discountPercent - a.discountPercent;
    });
};

// Belirli bir provider için deal bul
export const getDealByProvider = (provider: string): Deal | undefined => {
  return getActiveDeals().find(deal => 
    deal.provider.toLowerCase() === provider.toLowerCase()
  );
};

// En iyi deal'i getir (sticky banner için)
export const getTopDeal = (): Deal | null => {
  const activeDeals = getActiveDeals();
  return activeDeals.length > 0 ? activeDeals[0] : null;
};

