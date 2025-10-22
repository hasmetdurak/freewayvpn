export interface GermanVpnDeal {
  id: number;
  name: string;
  logo: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  feature: string;
  affiliateLink: string;
}

export const germanVpnDealsData: GermanVpnDeal[] = [
  {
    id: 1,
    name: "NordVPN",
    logo: "/vpn-logos/nordvpn.png",
    price: 3.71,
    originalPrice: 12.99,
    discount: 71,
    rating: 9.6,
    feature: "Schnellste Server + Double VPN",
    affiliateLink: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902"
  },
  {
    id: 2,
    name: "Surfshark",
    logo: "/vpn-logos/surfshark.png",
    price: 2.30,
    originalPrice: 12.95,
    discount: 82,
    rating: 9.4,
    feature: "Unbegrenzte Geräte",
    affiliateLink: "https://get.surfshark.net/aff_c?offer_id=926&aff_id=41263"
  },
  {
    id: 3,
    name: "ExpressVPN",
    logo: "/vpn-logos/expressvpn.png",
    price: 6.67,
    originalPrice: 12.95,
    discount: 48,
    rating: 9.5,
    feature: "Beste Streaming-Fähigkeit",
    affiliateLink: "https://www.expressrefer.com/refer-a-friend?referrer_id=857294&campaign_id=130&offer_id=3&source=website"
  },
  {
    id: 4,
    name: "CyberGhost",
    logo: "/vpn-logos/cyberghost.png",
    price: 2.25,
    originalPrice: 12.99,
    discount: 83,
    rating: 9.2,
    feature: "Spezialisierte Server",
    affiliateLink: "https://www.cyberghostvpn.com/offer/cyberghost-vpn?a_aid=bestvpndigital"
  },
  {
    id: 5,
    name: "PureVPN",
    logo: "/vpn-logos/purevpn.png",
    price: 2.08,
    originalPrice: 10.99,
    discount: 81,
    rating: 9.0,
    feature: "6500+ Server weltweit",
    affiliateLink: "https://billing.purevpn.com/aff.php?aff=49387047"
  },
  {
    id: 6,
    name: "ProtonVPN",
    logo: "/vpn-logos/proton-vpn.png",
    price: 4.99,
    originalPrice: 9.99,
    discount: 50,
    rating: 9.1,
    feature: "Schweizer Datenschutz",
    affiliateLink: "https://account.protonvpn.com/login"
  },
  {
    id: 7,
    name: "IPVanish",
    logo: "/vpn-logos/ipvanish.png",
    price: 3.99,
    originalPrice: 10.99,
    discount: 64,
    rating: 8.8,
    feature: "Eigene Serverinfrastruktur",
    affiliateLink: "https://account.ipvanish.com/login"
  },
  {
    id: 8,
    name: "PrivateVPN",
    logo: "/vpn-logos/private-vpn.png",
    price: 2.00,
    originalPrice: 8.99,
    discount: 78,
    rating: 8.7,
    feature: "Starke Verschlüsselung",
    affiliateLink: "https://privatevpn.com/account/login"
  }
];