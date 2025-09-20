// Comprehensive translations for all hardcoded text in the application

export interface TranslationKey {
  [key: string]: string;
}

export interface AllTranslations {
  [languageCode: string]: TranslationKey;
}

export const faqTranslations: AllTranslations = {
  en: {
    // FAQ Page UI
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to the most common questions about VPNs, privacy, and online security.',
    'faq.searchPlaceholder': 'Search FAQs...',
    'faq.allCategories': 'All Categories',
    'faq.noFaqsFound': 'No FAQs found',
    'faq.adjustSearch': 'Try adjusting your search terms or category filter.',
    'faq.showingResults': 'Showing {count} of {total} results',
    'faq.stillHaveQuestions': 'Still Have Questions?',
    'faq.cantFindAnswer': "Can't find the answer you're looking for? Our VPN experts are here to help you choose the perfect solution.",
    'faq.contactExperts': 'Contact Our Experts',
    'faq.relatedGuides': 'Related Guides:',
    
    // FAQ Questions 99-117
    'faq.question99': 'What is WireGuard?',
    'faq.answer99': 'WireGuard is the newest VPN protocol, offering faster speeds and stronger encryption than OpenVPN. Most top VPNs now support it (e.g., NordLynx by NordVPN).',
    'faq.question100': 'How do I know if my VPN is working?',
    'faq.answer100': 'Visit ipleak.net before and after connecting. If your IP and DNS change, it\'s working. Also check for WebRTC leaks in your browser.',
    'faq.question101': 'Can I use a VPN for gaming?',
    'faq.answer101': 'Yes! A VPN reduces DDoS attacks, bypasses IP bans, and lets you access geo-locked games early. Choose a VPN with low ping servers like ExpressVPN or CyberGhost.',
    'faq.question102': 'What is obfuscation?',
    'faq.answer102': 'Obfuscation disguises VPN traffic as regular HTTPS, bypassing VPN blocks in countries like China or Iran. Look for \'stealth mode\' or \'OpenVPN Scramble\' features.',
    'faq.question103': 'Do VPNs work in China?',
    'faq.answer103': 'Only a few VPNs (e.g., ExpressVPN, Astrill, NordVPN) work reliably in China due to Deep Packet Inspection. Always download the VPN before traveling.',
    'faq.question104': 'Can I torrent with a VPN?',
    'faq.answer104': 'Yes, but only use P2P-optimized servers with a kill switch enabled. Our top picks: NordVPN, Surfshark, and Private Internet Access—all with port forwarding and no bandwidth limits.',
    'faq.question105': 'What is a dedicated IP?',
    'faq.answer105': 'A dedicated IP is an IP address only you use, reducing CAPTCHAs and blacklisting. Useful for banking or remote work. Available as an add-on with NordVPN, CyberGhost, and PureVPN.',
    'faq.question106': 'How much does a VPN cost?',
    'faq.answer106': 'Premium VPNs range from $2–$12/month depending on the plan length. Our exclusive deals drop prices to $1.99/month (Surfshark 2-year plan) with 3 months free.',
    'faq.question107': 'Can I pay for a VPN anonymously?',
    'faq.answer107': 'Yes, top VPNs accept Bitcoin, Monero, or cash. Mullvad even generates an account number—no email required.',
    'faq.question108': 'What is the Five/Nine/Fourteen Eyes alliance?',
    'faq.answer108': 'These are intelligence-sharing agreements between countries. Avoid VPNs based in these jurisdictions (e.g., US, UK) unless they have a proven no-logs policy (like PIA).',
    'faq.question109': 'Can a VPN bypass ISP throttling?',
    'faq.answer109': 'Yes, if your ISP throttles streaming (e.g., Netflix), a VPN hides your traffic, restoring full speeds. Test with and without a VPN to confirm.',
    'faq.question110': 'What is the best VPN for beginners?',
    'faq.answer110': 'CyberGhost and ExpressVPN have 1-click apps, 24/7 support, and no setup required. Perfect for non-tech users.',
    'faq.question112': 'Why should someone use a VPN for everyday browsing?',
    'faq.answer112': 'Using a VPN for daily browsing enhances your online privacy and security. It encrypts your internet traffic, preventing ISPs, advertisers, or hackers from monitoring your activities. This is especially crucial on unsecured networks like public Wi-Fi in cafes or airports, where data theft is a risk. A VPN also lets you bypass geo-restrictions, accessing content like region-locked YouTube videos or news sites. For example, you can browse anonymously, shop for cheaper flights, or stream international TV shows. In 2025, with data breaches on the rise, a VPN adds a layer of protection. ExpressVPN, known for its speed and reliability, is a great option for seamless browsing across devices. Its intuitive interface suits all users.',
    'faq.question114': 'How does a VPN improve online security for beginners?',
    'faq.answer114': 'For beginners, a VPN simplifies online security by encrypting your internet connection, which protects sensitive data like passwords or credit card details from hackers. It masks your IP address, making it harder for websites or trackers to identify you. This is especially useful on public Wi-Fi, where cyberattacks are common. A VPN also blocks intrusive ads and trackers, creating a smoother browsing experience. In 2025, with cybercrime costing billions annually, even casual users benefit from this protection. CyberGhost offers an easy-to-use interface with pre-configured security settings, ideal for newcomers. Its no-logs policy ensures your data stays private. By exploring options like CyberGhost, you can start securing your online activities without technical expertise.',
    'faq.question115': 'What\'s the difference between a VPN and a proxy server?',
    'faq.answer115': 'A VPN and a proxy server both mask your IP address, but they differ significantly. A VPN encrypts all your internet traffic, routing it through a secure server, ensuring privacy and security across apps and websites. Proxies only redirect specific traffic (e.g., browser data) without encryption, leaving you vulnerable to snooping. VPNs are ideal for sensitive tasks like banking or bypassing geo-restrictions, while proxies are better for quick, non-sensitive access to blocked sites. For example, a VPN lets you stream Netflix securely, while a proxy might not. PureVPN provides affordable, encrypted connections with servers in 70+ countries, making it a stronger choice than proxies.',
    'faq.question116': 'Can a VPN hide my browsing history from my ISP?',
    'faq.answer116': 'Yes, a VPN hides your browsing history from your ISP by encrypting your traffic and routing it through a remote server. This prevents your ISP from seeing which websites you visit or what you do online, protecting your privacy. For instance, if you\'re streaming or researching sensitive topics, a VPN keeps your activity private. In 2025, with ISPs increasingly monetizing user data, this is a key benefit. NordVPN, with its audited no-logs policy, ensures even the VPN provider can\'t see your activity. Its 5,500+ servers offer flexibility for private browsing. By choosing a service like NordVPN, you can maintain control over your digital footprint and browse worry-free.',
    'faq.question117': 'Do I need a VPN when using my home Wi-Fi?',
    'faq.answer117': 'While home Wi-Fi is generally safer than public networks, a VPN still offers benefits. It prevents your ISP from tracking your browsing habits, protects against potential router vulnerabilities, and allows access to geo-blocked content. If privacy is important to you, using a VPN at home is recommended.'
  },
  tr: {
    // FAQ Page UI
    'faq.title': 'Sık Sorulan Sorular',
    'faq.subtitle': 'VPN, gizlilik ve çevrimiçi güvenlik hakkında en yaygın soruların cevaplarını bulun.',
    'faq.searchPlaceholder': 'SSS ara...',
    'faq.allCategories': 'Tüm Kategoriler',
    'faq.noFaqsFound': 'SSS bulunamadı',
    'faq.adjustSearch': 'Arama terimlerinizi veya kategori filtrenizi ayarlamayı deneyin.',
    'faq.showingResults': '{total} sonuçtan {count} tanesi gösteriliyor',
    'faq.stillHaveQuestions': 'Hala Sorularınız Var mı?',
    'faq.cantFindAnswer': "Aradığınız cevabı bulamıyor musunuz? VPN uzmanlarımız mükemmel çözümü seçmenizde size yardımcı olmak için burada.",
    'faq.contactExperts': 'Uzmanlarımızla İletişime Geçin',
    'faq.relatedGuides': 'İlgili Kılavuzlar:'
  }
};

export function getTranslation(key: string, language: string = 'en'): string {
  return faqTranslations[language]?.[key] || faqTranslations['en']?.[key] || key;
}