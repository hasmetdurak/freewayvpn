import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { insertFAQSchema } from '../utils/faqSchema';
import AffiliateButton from '../components/AffiliateButton';
import InternalLink from '../components/InternalLink';
import { getAffiliateRecommendation } from '../utils/affiliateRecommendations';
import { getInternalLinks } from '../utils/internalLinks';
import { getTranslation } from '../utils/translations';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// Consolidated and optimized FAQ list - duplicates removed and content enhanced
const getFAQs = (language: string): FAQ[] => {
  return [
  {
    id: 1,
    question: getTranslation('faq.question.1', language),
    answer: getTranslation('faq.answer.1', language),
    category: getTranslation('faq.category.basics', language)
  },
  {
    id: 2,
    question: getTranslation('faq.question.2', language),
    answer: getTranslation('faq.answer.2', language),
    category: getTranslation('faq.category.legal', language)
  },
  {
    id: 3,
    question: getTranslation('faq.question.3', language),
    answer: getTranslation('faq.answer.3', language),
    category: getTranslation('faq.category.performance', language)
  },
  {
    id: 4,
    question: getTranslation('faq.question.4', language),
    answer: getTranslation('faq.answer.4', language),
    category: getTranslation('faq.category.streaming', language)
  },
  {
    id: 5,
    question: getTranslation('faq.question.5', language),
    answer: getTranslation('faq.answer.5', language),
    category: getTranslation('faq.category.pricing', language)
  },
  {
    id: 6,
    question: getTranslation('faq.question.6', language),
    answer: getTranslation('faq.answer.6', language),
    category: getTranslation('faq.category.devices', language)
  },
  {
    id: 7,
    question: getTranslation('faq.question.7', language),
    answer: getTranslation('faq.answer.7', language),
    category: getTranslation('faq.category.privacy', language)
  },
  {
    id: 8,
    question: getTranslation('faq.question.8', language),
    answer: getTranslation('faq.answer.8', language),
    category: getTranslation('faq.category.technical', language)
  },
  {
    id: 9,
    question: getTranslation('faq.question.9', language),
    answer: getTranslation('faq.answer.9', language),
    category: getTranslation('faq.category.technical', language)
  },
  {
    id: 10,
    question: getTranslation('faq.question.10', language),
    answer: getTranslation('faq.answer.10', language),
    category: getTranslation('faq.category.mobile', language)
  },
  {
    id: 11,
    question: getTranslation('faq.question.11', language),
    answer: getTranslation('faq.answer.11', language),
    category: getTranslation('faq.category.features', language)
  },
  {
    id: 12,
    question: getTranslation('faq.question.12', language),
    answer: getTranslation('faq.answer.12', language),
    category: getTranslation('faq.category.usage', language)
  },
  {
    id: 13,
    question: getTranslation('faq.question.13', language),
    answer: getTranslation('faq.answer.13', language),
    category: getTranslation('faq.category.security', language)
  },
  {
    id: 14,
    question: getTranslation('faq.question.14', language),
    answer: getTranslation('faq.answer.14', language),
    category: getTranslation('faq.category.privacy', language)
  },
  {
    id: 15,
    question: getTranslation('faq.question.15', language),
    answer: getTranslation('faq.answer.15', language),
    category: getTranslation('faq.category.security', language)
  },
  {
    id: 16,
    question: getTranslation('faq.question.16', language),
    answer: getTranslation('faq.answer.16', language),
    category: getTranslation('faq.category.pricing', language)
  },
  {
    id: 17,
    question: getTranslation('faq.question.17', language),
    answer: getTranslation('faq.answer.17', language),
    category: getTranslation('faq.category.p2p', language)
  },
  {
    id: 18,
    question: getTranslation('faq.question.18', language),
    answer: getTranslation('faq.answer.18', language),
    category: getTranslation('faq.category.comparison', language)
  },
  {
    id: 19,
    question: getTranslation('faq.question.19', language),
    answer: getTranslation('faq.answer.19', language),
    category: getTranslation('faq.category.censorship', language)
  },
  {
    id: 20,
    question: getTranslation('faq.question.20', language),
    answer: getTranslation('faq.answer.20', language),
    category: getTranslation('faq.category.features', language)
  },
  {
    id: 21,
    question: getTranslation('faq.question.21', language),
    answer: getTranslation('faq.answer.21', language),
    category: getTranslation('faq.category.testing', language)
  },
  {
    id: 22,
    question: getTranslation('faq.question.22', language),
    answer: getTranslation('faq.answer.22', language),
    category: getTranslation('faq.category.usage', language)
  },
  {
    id: 23,
    question: getTranslation('faq.question.23', language),
    answer: getTranslation('faq.answer.23', language),
    category: getTranslation('faq.category.privacy', language)
  },
  {
    id: 24,
    question: getTranslation('faq.question.24', language),
    answer: getTranslation('faq.answer.24', language),
    category: getTranslation('faq.category.security', language)
  },
  {
    id: 25,
    question: getTranslation('faq.question.25', language),
    answer: getTranslation('faq.answer.25', language),
    category: getTranslation('faq.category.advanced', language)
  },
  {
    id: 26,
    question: getTranslation('faq.question.26', language),
    answer: getTranslation('faq.answer.26', language),
    category: getTranslation('faq.category.devices', language)
  },
  {
    id: 27,
    question: getTranslation('faq.question.27', language),
    answer: getTranslation('faq.answer.27', language),
    category: getTranslation('faq.category.advanced', language)
  },
  {
    id: 28,
    question: getTranslation('faq.question.28', language),
    answer: getTranslation('faq.answer.28', language),
    category: getTranslation('faq.category.usage', language)
  },
  {
    id: 29,
    question: getTranslation('faq.question.29', language),
    answer: getTranslation('faq.answer.29', language),
    category: getTranslation('faq.category.gaming', language)
  },
  {
    id: 30,
    question: getTranslation('faq.question.30', language),
    answer: getTranslation('faq.answer.30', language),
    category: getTranslation('faq.category.security', language)
  },
  {
    id: 31,
    question: "Are there VPNs specifically for businesses?",
    answer: "Yes, business VPNs offer features like centralized management, dedicated IP addresses, team accounts, increased simultaneous connections, and enterprise-grade security. They typically cost more but provide better control and support.",
    category: "Business"
  },
  {
    id: 32,
    question: "What is IPv6 and do VPNs support it?",
    answer: "IPv6 is the newer internet protocol replacing IPv4. Not all VPNs support IPv6, which can cause IPv6 leaks. Look for VPNs that either support IPv6 or block IPv6 traffic to prevent leaks, as most users still primarily use IPv4.",
    category: "Technical"
  },
  {
    id: 33,
    question: "Can I set up my own VPN server?",
    answer: "Yes, you can set up a personal VPN server using cloud services like AWS or DigitalOcean, or on your home router. However, this provides privacy from ISPs but not anonymity, as the server is linked to you. Commercial VPNs offer better anonymity.",
    category: "DIY"
  },
  {
    id: 34,
    question: "What is WireGuard and why is it popular?",
    answer: "WireGuard is a modern VPN protocol that's faster, more secure, and uses less battery than older protocols like OpenVPN. It has simpler code (making it easier to audit), better performance, and is becoming the preferred choice for many VPN providers.",
    category: "Technical"
  },
  {
    id: 35,
    question: "Do VPNs protect against malware?",
    answer: "VPNs primarily protect data in transit through encryption, not against malware. However, some VPNs include additional security features like ad blockers, malware protection, and dangerous website blocking. You still need separate antivirus protection.",
    category: "Security"
  },
  {
    id: 36,
    question: "Can I use a VPN to get cheaper online prices?",
    answer: "Some online services show different prices based on location, so changing your VPN server might reveal different pricing. However, this may violate terms of service, and payment methods often reveal your real location anyway.",
    category: "Shopping"
  },
  {
    id: 37,
    question: "What is the best VPN for beginners?",
    answer: "Beginner-friendly VPNs should have easy-to-use apps, reliable connections, good customer support, and clear privacy policies. NordVPN, NordVPN, and Surfshark are popular choices for beginners due to their user-friendly interfaces.",
    category: "Recommendations"
  },
  {
    id: 38,
    question: "How do I cancel my VPN subscription?",
    answer: "Cancellation methods vary by provider. Most allow cancellation through your account dashboard, some require contacting customer support. Check the cancellation policy and money-back guarantee terms before subscribing. Keep records of your cancellation.",
    category: "Account"
  },
  {
    id: 39,
    question: "What is port forwarding in VPNs?",
    answer: "Port forwarding allows external connections to reach specific ports on your device through the VPN connection. It's useful for hosting servers, improving P2P connections, or accessing devices remotely. Not all VPNs support port forwarding.",
    category: "Advanced"
  },
  {
    id: 40,
    question: "Can I use multiple VPNs at once?",
    answer: "While technically possible, using multiple VPNs simultaneously (VPN chaining) is complex, significantly reduces speed, and is usually unnecessary. Most users' privacy needs are met with a single quality VPN service.",
    category: "Advanced"
  },
  {
    id: 41,
    question: "What bandwidth do VPNs use?",
    answer: "VPNs add encryption overhead, typically increasing bandwidth usage by 5-15%. The exact amount depends on the protocol used and encryption level. WireGuard generally has lower overhead than OpenVPN. Factor this into data caps if applicable.",
    category: "Performance"
  },
  {
    id: 42,
    question: "Are there VPNs that don't require registration?",
    answer: "Some VPN providers allow anonymous registration using only email addresses or even cryptocurrency payments without personal information. However, completely registration-free VPNs are rare and may have limited features or security.",
    category: "Privacy"
  },
  {
    id: 43,
    question: "What is a VPN audit and why does it matter?",
    answer: "A VPN audit is an independent security review of a VPN provider's systems, code, and privacy practices by third-party security firms. Audited VPNs provide more trustworthy assurance of their security claims and no-logs policies.",
    category: "Trust"
  },
  {
    id: 44,
    question: "Can I use a VPN to access my home network remotely?",
    answer: "Yes, you can set up a VPN server on your home router to securely access your home network from anywhere. This is different from commercial VPN services and is primarily for remote access rather than privacy or anonymity.",
    category: "Remote Access"
  },
  {
    id: 45,
    question: "What happens to my VPN if the company goes out of business?",
    answer: "If a VPN company closes, you lose access to their service immediately. Choose established providers with transparent ownership and funding. Consider VPNs that offer longer money-back guarantees and avoid extremely long subscription commitments.",
    category: "Business"
  },
  {
    id: 46,
    question: "Do I need different VPNs for different activities?",
    answer: "Generally, one good VPN should handle all your needs. However, some users choose different VPNs for specific purposes - like one optimized for streaming and another for maximum privacy. This depends on your specific requirements and budget.",
    category: "Usage"
  },
  {
    id: 47,
    question: "What is RAM-only server architecture?",
    answer: "RAM-only servers store no data on hard drives - everything runs from memory that's wiped clean when servers restart. This provides an additional layer of privacy protection since no persistent logs or data can be stored on the servers.",
    category: "Privacy"
  },
  {
    id: 48,
    question: "Can I use a VPN on public Wi-Fi?",
    answer: "Yes, using a VPN on public Wi-Fi is highly recommended. Public networks are often insecure, allowing others to intercept your data. A VPN encrypts your connection, protecting sensitive information like passwords and personal data from hackers.",
    category: "Security"
  },
  {
    id: 49,
    question: "What is the difference between shared and dedicated IP addresses?",
    answer: "Shared IP addresses are used by multiple VPN users simultaneously, providing better anonymity but may face service blocks. Dedicated IPs are assigned to you alone, reducing blocks and CAPTCHAs but offering less anonymity.",
    category: "Features"
  },
  {
    id: 50,
    question: "How do I troubleshoot VPN connection issues?",
    answer: "Common fixes include switching servers, changing VPN protocols, restarting the app, checking firewall settings, updating the VPN app, or contacting customer support. Many connection issues are resolved by trying different servers or protocols.",
    category: "Troubleshooting"
  },
  {
    id: 51,
    question: "What should I know about router for Security VPN usage?",
    answer: "Router configuration is crucial for security when using a VPN. Setting up a VPN on your router protects all connected devices automatically. Choose routers that support VPN clients, ensure firmware is updated, and configure proper firewall settings. Our recommended VPN services offer router setup guides and support.",
    category: "Security"
  },
  {
    id: 52,
    question: "What's the role of WebRTC in enhancing Protocols via VPN?",
    answer: "WebRTC can significantly affect your online experience when using VPN protocols. Properly managing WebRTC helps bypass censorship, secure your data, and enjoy better speeds. Top VPNs include advanced WebRTC leak protection features that prevent your real IP from being exposed through browser WebRTC requests.",
    category: "Technical"
  },
  {
    id: 53,
    question: "What's the role of logging in enhancing Basics via VPN?",
    answer: "Understanding logging policies is essential when choosing a VPN. No-logs policies ensure your browsing history, connection times, and IP addresses aren't recorded. This provides crucial privacy protection and prevents data from being shared with third parties or authorities.",
    category: "Privacy"
  },
  {
    id: 54,
    question: "What are the common mistakes with IP leak in Streaming VPN setups?",
    answer: "IP leaks can compromise your streaming experience and privacy. Common mistakes include not checking for DNS leaks, WebRTC leaks, or IPv6 leaks. Properly configured VPNs with kill switches and leak protection ensure your real IP stays hidden while streaming geo-restricted content.",
    category: "Streaming"
  },
  {
    id: 55,
    question: "What's the role of DNS in enhancing Basics via VPN?",
    answer: "DNS configuration is fundamental to VPN functionality. Using your VPN provider's DNS servers prevents DNS leaks and ensures all your traffic is properly routed through the VPN tunnel. This enhances both security and performance while maintaining privacy.",
    category: "Technical"
  },
  {
    id: 56,
    question: "Does port forwarding affect performance in Basics for VPN users?",
    answer: "Port forwarding can significantly impact VPN performance and functionality. It's essential for P2P activities, gaming, and running servers. However, not all VPN providers support port forwarding, and it may slightly reduce security by opening specific ports.",
    category: "Performance"
  },
  {
    id: 57,
    question: "What should I know about catapult hydra for Usage Tips VPN usage?",
    answer: "Catapult Hydra is a proprietary VPN protocol that offers enhanced speed and security. It's designed to provide better performance than traditional protocols while maintaining strong encryption. This protocol is particularly effective for streaming and general browsing.",
    category: "Protocols"
  },
  {
    id: 58,
    question: "Does lag affect performance in Security for VPN users?",
    answer: "Latency (lag) can impact both security and performance when using a VPN. Higher latency may indicate connection issues or server problems. Choose VPN servers closer to your location and use faster protocols like WireGuard to minimize lag while maintaining security.",
    category: "Performance"
  },
  {
    id: 59,
    question: "What's the role of key exchange in enhancing Basics via VPN?",
    answer: "Key exchange is a fundamental security process in VPN connections. It establishes secure encryption keys between your device and the VPN server. Modern protocols use advanced key exchange methods like Elliptic Curve Diffie-Hellman for better security and performance.",
    category: "Security"
  },
  {
    id: 60,
    question: "What's the role of gateway in enhancing Usage Tips via VPN?",
    answer: "The VPN gateway is crucial for proper traffic routing. It determines how your internet traffic is directed through the VPN tunnel. Proper gateway configuration prevents DNS leaks, improves streaming quality, and ensures all traffic is protected.",
    category: "Technical"
  },
  {
    id: 61,
    question: "Is gateway essential for better Advanced Features with a VPN?",
    answer: "Gateway configuration is essential for advanced VPN features. It enables proper traffic routing, supports split tunneling, and ensures compatibility with specialized servers. Advanced users benefit from understanding gateway settings for optimal performance.",
    category: "Advanced"
  },
  {
    id: 62,
    question: "What's the role of geo-blocking in enhancing Basics via VPN?",
    answer: "Understanding geo-blocking is fundamental to VPN usage. VPNs help bypass geographical restrictions by masking your location. This allows access to region-locked content, websites, and services while maintaining privacy and security.",
    category: "Streaming"
  },
  {
    id: 63,
    question: "Why should I care about simultaneous connections in Devices?",
    answer: "Simultaneous connections determine how many devices you can protect with one VPN account. This is crucial for households with multiple devices. Look for VPNs offering unlimited connections or sufficient device limits for your needs.",
    category: "Devices"
  },
  {
    id: 64,
    question: getTranslation('faq.question64', language),
    answer: getTranslation('faq.answer64', language),
    category: getTranslation('faq.category.trust', language)
  },
  {
    id: 65,
    question: getTranslation('faq.question65', language),
    answer: getTranslation('faq.answer65', language),
    category: getTranslation('faq.category.gaming', language)
  },
  {
    id: 66,
    question: getTranslation('faq.question66', language),
    answer: getTranslation('faq.answer66', language),
    category: getTranslation('faq.category.p2p', language)
  },
  {
    id: 67,
    question: getTranslation('faq.question67', language),
    answer: getTranslation('faq.answer67', language),
    category: getTranslation('faq.category.business', language)
  },
  {
    id: 68,
    question: "What is split tunneling in VPNs?",
    answer: "Split tunneling allows you to route some traffic through the VPN while other traffic uses your regular internet connection. This is useful for accessing local services while protecting sensitive activities through the VPN.",
    category: "Advanced"
  },
  {
    id: 69,
    question: "Can I use a VPN on my smart TV?",
    answer: "Yes, many smart TVs support VPN apps directly, or you can install a VPN on your router to protect all connected devices including smart TVs. Some VPNs offer dedicated smart TV apps.",
    category: "Devices"
  },
  {
    id: 70,
    question: "What is a VPN kill switch?",
    answer: "A kill switch automatically disconnects your internet if the VPN connection drops, preventing your real IP address from being exposed. This is crucial for maintaining privacy and security.",
    category: "Security"
  },
  {
    id: 71,
    question: "Do VPNs slow down internet speed?",
    answer: "VPNs can reduce speed by 5-20% due to encryption overhead and server distance. However, premium VPNs with optimized servers often provide speeds close to your original connection.",
    category: "Performance"
  },
  {
    id: 72,
    question: "Can I use multiple VPN servers simultaneously?",
    answer: "Most VPNs don't support multiple simultaneous connections to different servers. However, you can use VPN chaining with some advanced setups, though this significantly reduces speed.",
    category: "Advanced"
  },
  {
    id: 73,
    question: "What is DNS leak protection?",
    answer: "DNS leak protection ensures your DNS queries go through the VPN's secure servers instead of your ISP's servers, preventing your browsing activity from being tracked through DNS requests.",
    category: "Privacy"
  },
  {
    id: 74,
    question: "Are VPNs legal in my country?",
    answer: "VPN legality varies by country. Most countries allow VPNs for legitimate purposes, but some restrict or ban them entirely. Check your local laws before using a VPN.",
    category: "Legal"
  },
  {
    id: 75,
    question: "Can I use a VPN for online banking?",
    answer: "Yes, VPNs can enhance banking security by encrypting your connection. However, some banks may block VPN traffic, so you might need to whitelist your VPN's IP addresses.",
    category: "Security"
  },
  {
    id: 76,
    question: "What is the difference between VPN protocols?",
    answer: "Different protocols (OpenVPN, WireGuard, IKEv2) offer varying levels of speed, security, and compatibility. WireGuard is fastest, OpenVPN is most secure, and IKEv2 is best for mobile devices.",
    category: "Technical"
  },
  {
    id: 77,
    question: "Can I get a free VPN?",
    answer: "Yes, but free VPNs often have limitations like data caps, slower speeds, fewer servers, and may compromise your privacy. Premium VPNs offer better security and performance.",
    category: "Pricing"
  },
  {
    id: 78,
    question: "How do I know if my VPN is secure?",
    answer: "Look for features like AES-256 encryption, no-logs policy, kill switch, DNS leak protection, and independent security audits. Check if the VPN has been audited by third-party security firms.",
    category: "Security"
  },
  {
    id: 79,
    question: "Can I use a VPN on public Wi-Fi?",
    answer: "Yes, using a VPN on public Wi-Fi is highly recommended. It encrypts your connection and protects your data from hackers who might be monitoring the network.",
    category: "Security"
  },
  {
    id: 80,
    question: "What is a dedicated IP address?",
    answer: "A dedicated IP is an IP address assigned only to you, reducing the chance of being blocked by websites and services. It's useful for business use or accessing services that block shared IPs.",
    category: "Features"
  },
  {
    id: 81,
    question: "Can I use a VPN for torrenting?",
    answer: "Yes, but choose VPNs that explicitly allow P2P traffic and have servers optimized for torrenting. Look for features like port forwarding and no bandwidth limits.",
    category: "P2P"
  },
  {
    id: 82,
    question: "What is obfuscated servers?",
    answer: "Obfuscated servers disguise VPN traffic as regular internet traffic, helping bypass VPN blocks in restrictive countries like China or Iran.",
    category: "Advanced"
  },
  {
    id: 83,
    question: "Can I use a VPN on my gaming console?",
    answer: "Yes, you can set up a VPN on your router to protect gaming consoles, or use a VPN-enabled router. Some VPNs offer specific gaming optimizations.",
    category: "Gaming"
  },
  {
    id: 84,
    question: "What is the best VPN for streaming?",
    answer: "The best streaming VPNs have fast speeds, reliable connections, and can bypass geo-restrictions. Look for VPNs with dedicated streaming servers and good Netflix unblocking capabilities.",
    category: "Streaming"
  },
  {
    id: 85,
    question: "Can I use a VPN for work?",
    answer: "Yes, VPNs can secure remote work connections and access company resources. However, check with your employer's IT policy as some companies have specific VPN requirements.",
    category: "Business"
  },

  {
    id: 86,
    question: "What is a VPN server?",
    answer: "A VPN server is a computer that acts as an intermediary between your device and the internet, routing your traffic through an encrypted tunnel to protect your privacy and security.",
    category: "Technical"
  },
  {
    id: 88,
    question: "Can I use a VPN on my mobile device?",
    answer: "Yes, most VPNs offer mobile apps for iOS and Android. Mobile VPNs are essential for protecting your data on public Wi-Fi and maintaining privacy on mobile networks.",
    category: "Mobile"
  },
  {
    id: 89,
    question: "What is the difference between VPN and proxy?",
    answer: "VPNs encrypt all your traffic and work at the operating system level, while proxies only handle browser traffic without encryption. VPNs provide better security and privacy protection.",
    category: "Comparison"
  },
  {
    id: 90,
    question: "Can I use a VPN for online shopping?",
    answer: "Yes, VPNs can protect your payment information and help you access better deals by changing your virtual location. Some retailers offer different prices based on location.",
    category: "Shopping"
  },
  {
    id: 91,
    question: "What is a VPN client?",
    answer: "A VPN client is the software application you install on your device to connect to VPN servers. It handles the encryption and connection management for secure browsing.",
    category: "Technical"
  },
  {
    id: 92,
    question: "Can I use a VPN for social media?",
    answer: "Yes, VPNs can help you access social media platforms in countries where they're blocked and protect your social media activity from surveillance and tracking.",
    category: "Privacy"
  },
  {
    id: 93,
    question: "What is a VPN tunnel?",
    answer: "A VPN tunnel is an encrypted connection between your device and the VPN server that protects your data from being intercepted by hackers, ISPs, or government surveillance.",
    category: "Technical"
  },
  {
    id: 94,
    question: "Can I use a VPN for video calls?",
    answer: "Yes, VPNs can secure video calls and help you access video calling services in restricted regions. However, they may slightly increase latency.",
    category: "Communication"
  },
  {
    id: 95,
    question: "What is a VPN certificate?",
    answer: "A VPN certificate is a digital document that verifies the authenticity of the VPN server and ensures secure communication between your device and the server.",
    category: "Security"
  },
  {
    id: 96,
    question: "Can I use a VPN for cryptocurrency trading?",
    answer: "Yes, VPNs can protect your cryptocurrency trading activities and help you access trading platforms that might be restricted in your region.",
    category: "Finance"
  },
  {
    id: 97,
    question: "What is a VPN gateway?",
    answer: "A VPN gateway is a network device that connects your local network to a VPN server, allowing all devices on your network to use the VPN connection.",
    category: "Technical"
  },
  {
    id: 98,
    question: "Can I use a VPN for online dating?",
    answer: "Yes, VPNs can protect your privacy on dating apps and websites, helping you maintain anonymity and security while meeting people online.",
    category: "Privacy"
  },
  {
    id: 99,
    question: "What is a VPN concentrator?",
    answer: "A VPN concentrator is a hardware device that manages multiple VPN connections simultaneously, commonly used in enterprise environments for secure remote access.",
    category: "Business"
  },
  {
    id: 100,
    question: "Can I use a VPN for online education?",
    answer: "Yes, VPNs can help you access educational content and platforms that might be restricted in your region, and protect your learning activities from surveillance.",
    category: "Education"
  },
  {
    id: 101,
    question: "What is a VPN firewall?",
    answer: "A VPN firewall is a security feature that monitors and controls traffic passing through the VPN connection, providing additional protection against malicious activities.",
    category: "Security"
  },
  {
    id: 102,
    question: "Can I use a VPN for online gaming?",
    answer: "Yes, VPNs can reduce DDoS attacks, help you access region-locked games, and provide better ping to gaming servers in different locations.",
    category: "Gaming"
  },
  {
    id: 103,
    question: "What is a VPN load balancer?",
    answer: "A VPN load balancer distributes VPN traffic across multiple servers to improve performance and reliability, ensuring optimal connection speeds.",
    category: "Performance"
  },
  {
    id: 104,
    question: "Can I use a VPN for online research?",
    answer: "Yes, VPNs can help you access research databases and academic resources that might be geo-restricted, and protect your research activities from tracking.",
    category: "Research"
  },
  {
    id: 105,
    question: "What is a VPN endpoint?",
    answer: "A VPN endpoint is the final destination of your VPN connection, typically the VPN server that your traffic is routed through for security and privacy.",
    category: "Technical"
  },
  {
    id: 106,
    question: "Can I use a VPN for online journalism?",
    answer: "Yes, VPNs are essential for journalists working in restrictive environments, helping them access information and communicate securely with sources.",
    category: "Journalism"
  },
  {
    id: 107,
    question: "What is a VPN mesh network?",
    answer: "A VPN mesh network connects multiple devices in a secure, encrypted network where each device can communicate directly with others through VPN tunnels.",
    category: "Advanced"
  },
  {
    id: 108,
    question: "Can I use a VPN for online activism?",
    answer: "Yes, VPNs can protect activists' communications and help them access information and platforms that might be restricted in their countries.",
    category: "Privacy"
  },
  {
    id: 109,
    question: "What is a VPN failover?",
    answer: "VPN failover automatically switches to a backup server if the primary VPN server becomes unavailable, ensuring continuous protection and connectivity.",
    category: "Reliability"
  },
  {
    id: 110,
    question: "Can I use a VPN for online therapy?",
    answer: "Yes, VPNs can protect the privacy of online therapy sessions and help you access mental health services that might be restricted in your region.",
    category: "Healthcare"
  },

  {
    id: 112,
    question: "What is a VPN split DNS?",
    answer: "VPN split DNS allows you to use different DNS servers for different domains, providing more control over how your DNS queries are resolved.",
    category: "Advanced"
  },

  {
    id: 114,
    question: "What is a VPN bandwidth throttling?",
    answer: "VPN bandwidth throttling occurs when your ISP limits your internet speed. A VPN can help bypass this throttling by encrypting your traffic.",
    category: "Performance"
  },
  {
    id: 115,
    question: "What is a VPN session timeout?",
    answer: "A VPN session timeout automatically disconnects your VPN after a period of inactivity to save bandwidth and maintain security.",
    category: "Security"
  },
  {
    id: 116,
    question: "What is a VPN compression?",
    answer: "VPN compression reduces the size of data packets to improve transfer speeds, though it may slightly increase CPU usage on your device.",
    category: "Performance"
  },
  {
    id: 117,
    question: "What is a VPN authentication?",
    answer: "VPN authentication verifies your identity before allowing you to connect to the VPN server, typically using usernames, passwords, or certificates.",
    category: "Security"
  }
  ];
};

const FAQPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Get FAQs for current language
  const faqs = getFAQs(currentLanguage.code);

  // Insert FAQ Schema on component mount and when language changes
  useEffect(() => {
    const faqSchemaData = faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }));
    
    insertFAQSchema(faqSchemaData);
  }, [currentLanguage, faqs]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4 rounded-2xl mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl font-bold mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
          
          {/* Hero Image */}
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="VPN FAQ Help Center" 
            className="w-full max-w-2xl mx-auto mt-8 rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{faq.question}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {faq.category}
                </span>
              </div>
              {openItems.includes(faq.id) ? (
                <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            
            {openItems.includes(faq.id) && (
              <div className="px-6 pb-4">
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  
                  {/* Internal Links */}
                  {(() => {
                    const internalLinks = getInternalLinks(faq.id, currentLanguage.code);
                    return internalLinks.length > 0 ? (
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">{t('faq.relatedGuides')}</h5>
                        <div className="space-y-2">
                          {internalLinks.map((link, index) => (
                            <InternalLink
                              key={index}
                              title={link.title}
                              description={link.description}
                              href={link.href}
                              isExternal={link.isExternal}
                              className="w-full"
                            />
                          ))}
                        </div>
                      </div>
                    ) : null;
                  })()}
                  
                  {/* Affiliate Recommendation */}
                  {(() => {
                    const recommendation = getAffiliateRecommendation(faq.id, currentLanguage.code);
                    return recommendation ? (
                      <AffiliateButton
                        provider={recommendation.provider}
                        description={recommendation.description}
                        features={recommendation.features}
                        ctaText={recommendation.ctaText}
                        affiliateUrl={recommendation.affiliateUrl}
                        discount={recommendation.discount}
                        rating={recommendation.rating}
                      />
                    ) : null;
                  })()}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {faqs.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">{t('noFaqsFound')}</p>
          <p className="text-gray-400 text-sm mt-2">{t('adjustSearch')}</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-8 text-center text-sm text-gray-500">
        {t('showingResults').replace('{count}', faqs.length.toString()).replace('{total}', faqs.length.toString())}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">{t('stillHaveQuestions')}</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          {t('cantFindAnswer')}
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          {t('contactExperts')}
        </button>
      </div>
    </div>
  );
};

export default FAQPage;
