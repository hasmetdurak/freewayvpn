// Affiliate recommendations for specific FAQ questions

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

export const affiliateRecommendations: AffiliateRecommendation[] = [
  {
    faqId: 1, // "What is a VPN and how does it work?"
    provider: "ExpressVPN",
    description: "Industry-leading VPN with military-grade encryption and lightning-fast speeds across 94+ countries.",
    features: ["30-day guarantee", "24/7 support", "No-logs policy", "5 devices"],
    ctaText: "Try ExpressVPN Risk-Free",
    affiliateUrl: "https://expressvpn.com/order",
    discount: "Save 49% + 3 months free",
    rating: 4.9
  },
  {
    faqId: 2, // "Are VPNs legal to use?"
    provider: "NordVPN",
    description: "Audited no-logs VPN with advanced security features and global server network.",
    features: ["Double VPN", "CyberSec", "Kill switch", "6 devices"],
    ctaText: "Get NordVPN Now",
    affiliateUrl: "https://nordvpn.com/order",
    discount: "Save 68% + 3 months free",
    rating: 4.8
  },
  {
    faqId: 3, // "Do VPNs slow down internet speed?"
    provider: "Surfshark",
    description: "Unlimited devices with WireGuard protocol for maximum speed and security.",
    features: ["Unlimited devices", "WireGuard", "CleanWeb", "MultiHop"],
    ctaText: "Start with Surfshark",
    affiliateUrl: "https://surfshark.com/order",
    discount: "Save 82% + 2 months free",
    rating: 4.7
  },
  {
    faqId: 4, // "Can I use a VPN for streaming Netflix?"
    provider: "ExpressVPN",
    description: "Best VPN for Netflix with optimized streaming servers and 4K support.",
    features: ["Netflix unblocking", "4K streaming", "Smart DNS", "Router support"],
    ctaText: "Stream Netflix with ExpressVPN",
    affiliateUrl: "https://expressvpn.com/order",
    discount: "Save 49% + 3 months free",
    rating: 4.9
  },
  {
    faqId: 5, // "What is the best VPN protocol?"
    provider: "NordVPN",
    description: "Advanced protocol selection including NordLynx (WireGuard) for optimal performance.",
    features: ["NordLynx protocol", "OpenVPN", "IKEv2", "Custom protocols"],
    ctaText: "Choose NordVPN Protocols",
    affiliateUrl: "https://nordvpn.com/order",
    discount: "Save 68% + 3 months free",
    rating: 4.8
  },
  {
    faqId: 6, // "Can I use a VPN on my phone?"
    provider: "CyberGhost",
    description: "User-friendly mobile apps with one-click connection and optimized servers.",
    features: ["Easy mobile apps", "Auto-connect", "7 devices", "45-day guarantee"],
    ctaText: "Get CyberGhost Mobile",
    affiliateUrl: "https://cyberghostvpn.com/order",
    discount: "Save 84% + 4 months free",
    rating: 4.6
  },
  {
    faqId: 7, // "How much does a VPN cost?"
    provider: "Surfshark",
    description: "Most affordable premium VPN with unlimited devices and all features included.",
    features: ["Unlimited devices", "All features", "30-day guarantee", "24/7 support"],
    ctaText: "Get Best VPN Deal",
    affiliateUrl: "https://surfshark.com/order",
    discount: "Save 82% + 2 months free",
    rating: 4.7
  },
  {
    faqId: 8, // "Can I use a VPN for torrenting?"
    provider: "ExpressVPN",
    description: "P2P-optimized servers with port forwarding and strict no-logs policy for safe torrenting.",
    features: ["P2P servers", "Port forwarding", "Kill switch", "No-logs audited"],
    ctaText: "Torrent Safely with ExpressVPN",
    affiliateUrl: "https://expressvpn.com/order",
    discount: "Save 49% + 3 months free",
    rating: 4.9
  },
  {
    faqId: 9, // "What is a kill switch?"
    provider: "NordVPN",
    description: "Advanced kill switch technology that instantly blocks internet if VPN disconnects.",
    features: ["App kill switch", "System kill switch", "Auto-reconnect", "DNS leak protection"],
    ctaText: "Secure with NordVPN Kill Switch",
    affiliateUrl: "https://nordvpn.com/order",
    discount: "Save 68% + 3 months free",
    rating: 4.8
  },
  {
    faqId: 10, // "Can I get a free VPN?"
    provider: "CyberGhost",
    description: "Premium VPN with 45-day money-back guarantee - longer than any free trial.",
    features: ["45-day guarantee", "No data limits", "Full features", "7 devices"],
    ctaText: "Try CyberGhost Risk-Free",
    affiliateUrl: "https://cyberghostvpn.com/order",
    discount: "Save 84% + 4 months free",
    rating: 4.6
  }
];

export const getAffiliateRecommendation = (faqId: number): AffiliateRecommendation | null => {
  return affiliateRecommendations.find(rec => rec.faqId === faqId) || null;
};