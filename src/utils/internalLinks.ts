// Internal links for FAQ cross-references and related content

export interface InternalLinkData {
  faqId: number;
  links: {
    title: string;
    description: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export const internalLinksData: InternalLinkData[] = [
  {
    faqId: 2, // "Are VPNs legal to use?"
    links: [
      {
        title: "VPN Laws by Country Guide",
        description: "Complete guide to VPN legality in different countries and regions",
        href: "/guides/vpn-laws-by-country"
      },
      {
        title: "Legal VPN Usage Tips",
        description: "Best practices for using VPNs legally and responsibly",
        href: "/guides/legal-vpn-usage"
      }
    ]
  },
  {
    faqId: 3, // "Do VPNs slow down internet speed?"
    links: [
      {
        title: "VPN Speed Test Results",
        description: "Real-world speed tests comparing top VPN providers",
        href: "/guides/vpn-speed-tests"
      },
      {
        title: "How to Optimize VPN Speed",
        description: "Tips and tricks to maximize your VPN connection speed",
        href: "/guides/optimize-vpn-speed"
      }
    ]
  },
  {
    faqId: 4, // "Can I use a VPN for streaming Netflix?"
    links: [
      {
        title: "Best VPNs for Netflix",
        description: "Top VPN services that reliably unblock Netflix content",
        href: "/guides/best-vpns-for-netflix"
      },
      {
        title: "Netflix VPN Setup Guide",
        description: "Step-by-step guide to streaming Netflix with a VPN",
        href: "/guides/netflix-vpn-setup"
      }
    ]
  },
  {
    faqId: 5, // "What is the best VPN protocol?"
    links: [
      {
        title: "WireGuard vs OpenVPN Comparison",
        description: "Detailed comparison of the two most popular VPN protocols",
        href: "/guides/wireguard-vs-openvpn"
      },
      {
        title: "VPN Protocol Security Guide",
        description: "Understanding different VPN protocols and their security features",
        href: "/guides/vpn-protocol-security"
      }
    ]
  },
  {
    faqId: 8, // "Can I use a VPN for torrenting?"
    links: [
      {
        title: "Best VPNs for Torrenting",
        description: "Top P2P-friendly VPN services with port forwarding support",
        href: "/guides/best-vpns-for-torrenting"
      },
      {
        title: "Safe Torrenting Guide",
        description: "How to torrent safely and anonymously with a VPN",
        href: "/guides/safe-torrenting-guide"
      }
    ]
  },
  {
    faqId: 9, // "What is a kill switch?"
    links: [
      {
        title: "VPN Kill Switch Explained",
        description: "Complete guide to VPN kill switches and how they protect you",
        href: "/guides/vpn-kill-switch-guide"
      },
      {
        title: "VPN Security Features",
        description: "Essential security features to look for in a VPN service",
        href: "/guides/vpn-security-features"
      }
    ]
  },
  {
    faqId: 10, // "Can I get a free VPN?"
    links: [
      {
        title: "Free vs Paid VPN Comparison",
        description: "Why paid VPNs are worth the investment over free alternatives",
        href: "/guides/free-vs-paid-vpn"
      },
      {
        title: "VPN Trial and Money-Back Guarantees",
        description: "How to try premium VPNs risk-free with trial periods",
        href: "/guides/vpn-trials-guarantees"
      }
    ]
  },
  {
    faqId: 48, // "Is it safe to use a VPN on public Wi-Fi?"
    links: [
      {
        title: "Public Wi-Fi Security Guide",
        description: "Complete guide to staying safe on public wireless networks",
        href: "/guides/public-wifi-security"
      },
      {
        title: "Mobile VPN Security",
        description: "Best practices for using VPNs on mobile devices",
        href: "/guides/mobile-vpn-security"
      }
    ]
  },
  {
    faqId: 54, // "What are the common mistakes with IP leak in Streaming VPN setups?"
    links: [
      {
        title: "VPN Leak Test Guide",
        description: "How to test your VPN for DNS, WebRTC, and IP leaks",
        href: "/guides/vpn-leak-test"
      },
      {
        title: "Streaming VPN Setup",
        description: "Optimal VPN configuration for streaming services",
        href: "/guides/streaming-vpn-setup"
      }
    ]
  },
  {
    faqId: 62, // "What's the role of geo-blocking in enhancing Basics via VPN?"
    links: [
      {
        title: "Bypass Geo-Blocking Guide",
        description: "How to access geo-restricted content with VPNs",
        href: "/guides/bypass-geo-blocking"
      },
      {
        title: "Global Content Access",
        description: "Accessing international content and services with VPNs",
        href: "/guides/global-content-access"
      }
    ]
  }
];

export const getInternalLinks = (faqId: number) => {
  const linkData = internalLinksData.find(data => data.faqId === faqId);
  return linkData ? linkData.links : [];
};