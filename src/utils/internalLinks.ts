// Internal links for FAQ cross-references and related content
import { getTranslation } from './translations';

export interface InternalLinkData {
  faqId: number;
  links: {
    titleKey: string;
    descriptionKey: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export interface InternalLink {
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
}

export const internalLinksData: InternalLinkData[] = [
  {
    faqId: 2, // "Are VPNs legal to use?"
    links: [
      {
        titleKey: "internalLinks.vpnLawsByCountryTitle",
        descriptionKey: "internalLinks.vpnLawsByCountryDesc",
        href: "/guides/vpn-laws-by-country"
      },
      {
        titleKey: "internalLinks.legalVpnUsageTitle",
        descriptionKey: "internalLinks.legalVpnUsageDesc",
        href: "/guides/legal-vpn-usage"
      }
    ]
  },
  {
    faqId: 3, // "Do VPNs slow down internet speed?"
    links: [
      {
        titleKey: "internalLinks.vpnSpeedTestTitle",
        descriptionKey: "internalLinks.vpnSpeedTestDesc",
        href: "/guides/vpn-speed-tests"
      },
      {
        titleKey: "internalLinks.optimizeVpnSpeedTitle",
        descriptionKey: "internalLinks.optimizeVpnSpeedDesc",
        href: "/guides/optimize-vpn-speed"
      }
    ]
  },
  {
    faqId: 4, // "Can I use a VPN for streaming Netflix?"
    links: [
      {
        titleKey: "internalLinks.bestVpnsNetflixTitle",
        descriptionKey: "internalLinks.bestVpnsNetflixDesc",
        href: "/guides/best-vpns-for-netflix"
      },
      {
        titleKey: "internalLinks.netflixVpnSetupTitle",
        descriptionKey: "internalLinks.netflixVpnSetupDesc",
        href: "/guides/netflix-vpn-setup"
      }
    ]
  },
  {
    faqId: 5, // "What is the best VPN protocol?"
    links: [
      {
        titleKey: "internalLinks.wireguardVsOpenvpnTitle",
        descriptionKey: "internalLinks.wireguardVsOpenvpnDesc",
        href: "/guides/wireguard-vs-openvpn"
      },
      {
        titleKey: "internalLinks.vpnProtocolSecurityTitle",
        descriptionKey: "internalLinks.vpnProtocolSecurityDesc",
        href: "/guides/vpn-protocol-security"
      }
    ]
  },
  {
    faqId: 8, // "Can I use a VPN for torrenting?"
    links: [
      {
        titleKey: "internalLinks.bestVpnsTorrentingTitle",
        descriptionKey: "internalLinks.bestVpnsTorrentingDesc",
        href: "/guides/best-vpns-for-torrenting"
      },
      {
        titleKey: "internalLinks.safeTorrentingTitle",
        descriptionKey: "internalLinks.safeTorrentingDesc",
        href: "/guides/safe-torrenting-guide"
      }
    ]
  },
  {
    faqId: 9, // "What is a kill switch?"
    links: [
      {
        titleKey: "internalLinks.vpnKillSwitchTitle",
        descriptionKey: "internalLinks.vpnKillSwitchDesc",
        href: "/guides/vpn-kill-switch-guide"
      },
      {
        titleKey: "internalLinks.vpnSecurityFeaturesTitle",
        descriptionKey: "internalLinks.vpnSecurityFeaturesDesc",
        href: "/guides/vpn-security-features"
      }
    ]
  },
  {
    faqId: 10, // "Can I get a free VPN?"
    links: [
      {
        titleKey: "internalLinks.freeVsPaidVpnTitle",
        descriptionKey: "internalLinks.freeVsPaidVpnDesc",
        href: "/guides/free-vs-paid-vpn"
      },
      {
        titleKey: "internalLinks.vpnTrialsTitle",
        descriptionKey: "internalLinks.vpnTrialsDesc",
        href: "/guides/vpn-trials-guarantees"
      }
    ]
  },
  {
    faqId: 48, // "Is it safe to use a VPN on public Wi-Fi?"
    links: [
      {
        titleKey: "internalLinks.publicWifiSecurityTitle",
        descriptionKey: "internalLinks.publicWifiSecurityDesc",
        href: "/guides/public-wifi-security"
      },
      {
        titleKey: "internalLinks.mobileVpnSecurityTitle",
        descriptionKey: "internalLinks.mobileVpnSecurityDesc",
        href: "/guides/mobile-vpn-security"
      }
    ]
  },
  {
    faqId: 54, // "What are the common mistakes with IP leak in Streaming VPN setups?"
    links: [
      {
        titleKey: "internalLinks.vpnLeakTestTitle",
        descriptionKey: "internalLinks.vpnLeakTestDesc",
        href: "/guides/vpn-leak-test"
      },
      {
        titleKey: "internalLinks.streamingVpnSetupTitle",
        descriptionKey: "internalLinks.streamingVpnSetupDesc",
        href: "/guides/streaming-vpn-setup"
      }
    ]
  },
  {
    faqId: 62, // "What's the role of geo-blocking in enhancing Basics via VPN?"
    links: [
      {
        titleKey: "internalLinks.bypassGeoBlockingTitle",
        descriptionKey: "internalLinks.bypassGeoBlockingDesc",
        href: "/guides/bypass-geo-blocking"
      },
      {
        titleKey: "internalLinks.globalContentAccessTitle",
        descriptionKey: "internalLinks.globalContentAccessDesc",
        href: "/guides/global-content-access"
      }
    ]
  }
];

export const getInternalLinks = (faqId: number, language: string): InternalLink[] => {
  const linkData = internalLinksData.find(data => data.faqId === faqId);
  if (!linkData) return [];
  
  return linkData.links.map(link => ({
    title: getTranslation(language, link.titleKey),
    description: getTranslation(language, link.descriptionKey),
    href: link.href,
    isExternal: link.isExternal
  }));
};