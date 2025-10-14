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
    expiresAt: '2025-12-31T23:59:59Z',
    affiliateUrl: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902',
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
    expiresAt: '2025-12-31T23:59:59Z',
    affiliateUrl: 'https://surfshark.hasoffers.com/signup/41263',
    verified: true,
    notes: 'Unlimited devices + 2 months extra',
    priority: 2,
    badge: 'FLASH SALE'
  },
  {
    id: 'purevpn-exclusive',
    provider: 'PureVPN',
    title: 'PureVPN 82% OFF + 2 Months FREE',
    discountPercent: 82,
    couponCode: 'PURE82',
    expiresAt: '2025-12-31T23:59:59Z',
    affiliateUrl: 'https://billing.purevpn.com/aff.php?aff=49387047',
    verified: true,
    notes: 'Best for streaming - 10 devices',
    priority: 3,
    badge: 'BEST STREAMING'
  },
  {
    id: 'vpnac-secure',
    provider: 'VPN.ac',
    title: 'VPN.ac 75% OFF - Secure Choice',
    discountPercent: 75,
    couponCode: 'VPNAC75',
    expiresAt: '2025-12-31T23:59:59Z',
    affiliateUrl: 'https://vpn.ac/aff.php?aff=3464',
    verified: true,
    notes: 'Military-grade security + port forwarding',
    priority: 4,
    badge: 'MOST SECURE'
  },
  {
    id: 'hideme-premium',
    provider: 'Hide.me',
    title: 'Hide.me 70% OFF - Premium Deal',
    discountPercent: 70,
    couponCode: 'HIDEME70',
    expiresAt: '2025-12-31T23:59:59Z',
    affiliateUrl: 'https://hide.me/?friend=bestvpndigital',
    verified: true,
    notes: 'Free plan available + premium features',
    priority: 5,
    badge: 'FREE PLAN'
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

