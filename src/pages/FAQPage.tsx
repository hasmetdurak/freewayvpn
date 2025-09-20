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
const getFAQs = (language: string): FAQ[] => [
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
    answer: "Beginner-friendly VPNs should have easy-to-use apps, reliable connections, good customer support, and clear privacy policies. ExpressVPN, NordVPN, and Surfshark are popular choices for beginners due to their user-friendly interfaces.",
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
    question: getTranslation(currentLanguage, 'faq.question64'),
    answer: getTranslation(currentLanguage, 'faq.answer64'),
    category: getTranslation(currentLanguage, 'faq.category.trust')
  },
  {
    id: 65,
    question: getTranslation(currentLanguage, 'faq.question65'),
    answer: getTranslation(currentLanguage, 'faq.answer65'),
    category: getTranslation(currentLanguage, 'faq.category.gaming')
  },
  {
    id: 66,
    question: getTranslation(currentLanguage, 'faq.question66'),
    answer: getTranslation(currentLanguage, 'faq.answer66'),
    category: getTranslation(currentLanguage, 'faq.category.p2p')
  },
  {
    id: 67,
    question: getTranslation(currentLanguage, 'faq.question67'),
    answer: getTranslation(currentLanguage, 'faq.answer67'),
    category: getTranslation(currentLanguage, 'faq.category.business')
  },
  {
    id: 68,
    question: getTranslation(currentLanguage, 'faq.question68'),
    answer: getTranslation(currentLanguage, 'faq.answer68'),
    category: getTranslation(currentLanguage, 'faq.category.devices')
  },
  {
    id: 69,
    question: getTranslation(currentLanguage, 'faq.question69'),
    answer: getTranslation(currentLanguage, 'faq.answer69'),
    category: getTranslation(currentLanguage, 'faq.category.protocols')
  },
  {
    id: 70,
    question: getTranslation(currentLanguage, 'faq.question70'),
    answer: getTranslation(currentLanguage, 'faq.answer70'),
    category: getTranslation(currentLanguage, 'faq.category.privacy')
  },
  {
    id: 71,
    question: getTranslation(currentLanguage, 'faq.question71'),
    answer: getTranslation(currentLanguage, 'faq.answer71'),
    category: getTranslation(currentLanguage, 'faq.category.streaming')
  },
  {
    id: 72,
    question: getTranslation(currentLanguage, 'faq.question72'),
    answer: getTranslation(currentLanguage, 'faq.answer72'),
    category: getTranslation(currentLanguage, 'faq.category.streaming')
  },
  {
    id: 73,
    question: getTranslation(currentLanguage, 'faq.question73'),
    answer: getTranslation(currentLanguage, 'faq.answer73'),
    category: getTranslation(currentLanguage, 'faq.category.devices')
  },
  {
    id: 74,
    question: getTranslation(currentLanguage, 'faq.question74'),
    answer: getTranslation(currentLanguage, 'faq.answer74'),
    category: getTranslation(currentLanguage, 'faq.category.streaming')
  },
  {
    id: 75,
    question: getTranslation(currentLanguage, 'faq.question75'),
    answer: getTranslation(currentLanguage, 'faq.answer75'),
    category: getTranslation(currentLanguage, 'faq.category.troubleshooting')
  },
  {
    id: 76,
    question: getTranslation(currentLanguage, 'faq.question76'),
    answer: getTranslation(currentLanguage, 'faq.answer76'),
    category: getTranslation(currentLanguage, 'faq.category.advanced')
  },
  {
    id: 77,
    question: getTranslation(currentLanguage, 'faq.question77'),
    answer: getTranslation(currentLanguage, 'faq.answer77'),
    category: getTranslation(currentLanguage, 'faq.category.technical')
  },
  {
    id: 78,
    question: getTranslation(currentLanguage, 'faq.question78'),
    answer: getTranslation(currentLanguage, 'faq.answer78'),
    category: getTranslation(currentLanguage, 'faq.category.security')
  },
  {
    id: 79,
    question: getTranslation(currentLanguage, 'faq.question79'),
    answer: getTranslation(currentLanguage, 'faq.answer79'),
    category: getTranslation(currentLanguage, 'faq.category.troubleshooting')
  },
  {
    id: 80,
    question: getTranslation(currentLanguage, 'faq.question80'),
    answer: getTranslation(currentLanguage, 'faq.answer80'),
    category: getTranslation(currentLanguage, 'faq.category.pricing')
  },
  {
    id: 81,
    question: getTranslation(currentLanguage, 'faq.question81'),
    answer: getTranslation(currentLanguage, 'faq.answer81'),
    category: getTranslation(currentLanguage, 'faq.category.pricing')
  },
  {
    id: 82,
    question: getTranslation(currentLanguage, 'faq.question82'),
    answer: getTranslation(currentLanguage, 'faq.answer82'),
    category: getTranslation(currentLanguage, 'faq.category.privacy')
  },
  {
    id: 83,
    question: getTranslation(currentLanguage, 'faq.question83'),
    answer: getTranslation(currentLanguage, 'faq.answer83'),
    category: getTranslation(currentLanguage, 'faq.category.privacy')
  },
  {
    id: 84,
    question: getTranslation(currentLanguage, 'faq.question84'),
    answer: getTranslation(currentLanguage, 'faq.answer84'),
    category: getTranslation(currentLanguage, 'faq.category.mobile')
  },
  {
    id: 85,
    question: getTranslation(currentLanguage, 'faq.question85'),
    answer: getTranslation(currentLanguage, 'faq.answer85'),
    category: getTranslation(currentLanguage, 'faq.category.devices')
  },

  {
    id: 86,
    question: getTranslation(currentLanguage, 'faq.question86'),
    answer: getTranslation(currentLanguage, 'faq.answer86'),
    category: getTranslation(currentLanguage, 'faq.category.legal')
  },
  {
    id: 88,
    question: getTranslation(currentLanguage, 'faq.question88'),
    answer: getTranslation(currentLanguage, 'faq.answer88'),
    category: getTranslation(currentLanguage, 'faq.category.privacy')
  },
  {
    id: 89,
    question: getTranslation(currentLanguage, 'faq.question89'),
    answer: getTranslation(currentLanguage, 'faq.answer89'),
    category: getTranslation(currentLanguage, 'faq.category.comparison')
  },
  {
    id: 90,
    question: getTranslation(currentLanguage, 'faq.question90'),
    answer: getTranslation(currentLanguage, 'faq.answer90'),
    category: getTranslation(currentLanguage, 'faq.category.performance')
  },
  {
    id: 91,
    question: getTranslation(currentLanguage, 'faq.question91'),
    answer: getTranslation(currentLanguage, 'faq.answer91'),
    category: getTranslation(currentLanguage, 'faq.category.devices')
  },
  {
    id: 92,
    question: getTranslation(currentLanguage, 'faq.question92'),
    answer: getTranslation(currentLanguage, 'faq.answer92'),
    category: getTranslation(currentLanguage, 'faq.category.security')
  },
  {
    id: 93,
    question: getTranslation(currentLanguage, 'faq.question93'),
    answer: getTranslation(currentLanguage, 'faq.answer93'),
    category: getTranslation(currentLanguage, 'faq.category.privacy')
  },
  {
    id: 94,
    question: getTranslation(currentLanguage, 'faq.question94'),
    answer: getTranslation(currentLanguage, 'faq.answer94'),
    category: getTranslation(currentLanguage, 'faq.category.privacy')
  },
  {
    id: 95,
    question: getTranslation(currentLanguage, 'faq.question95'),
    answer: getTranslation(currentLanguage, 'faq.answer95'),
    category: getTranslation(currentLanguage, 'faq.category.security')
  },
  {
    id: 96,
    question: getTranslation(currentLanguage, 'faq.question96'),
    answer: getTranslation(currentLanguage, 'faq.answer96'),
    category: getTranslation(currentLanguage, 'faq.category.pricing')
  },
  {
    id: 97,
    question: getTranslation(currentLanguage, 'faq.question97'),
    answer: getTranslation(currentLanguage, 'faq.answer97'),
    category: getTranslation(currentLanguage, 'faq.category.features')
  },
  {
    id: 98,
    question: getTranslation(currentLanguage, 'faq.question98'),
    answer: getTranslation(currentLanguage, 'faq.answer98'),
    category: getTranslation(currentLanguage, 'faq.category.streaming')
  },
  {
    id: 99,
    question: getTranslation(currentLanguage, 'faq.question99'),
    answer: getTranslation(currentLanguage, 'faq.answer99'),
    category: getTranslation(currentLanguage, 'faq.category.technical')
  },
  {
    id: 100,
    question: getTranslation(currentLanguage, 'faq.question100'),
    answer: getTranslation(currentLanguage, 'faq.answer100'),
    category: getTranslation(currentLanguage, 'faq.category.testing')
  },
  {
    id: 101,
    question: getTranslation(currentLanguage, 'faq.question101'),
    answer: getTranslation(currentLanguage, 'faq.answer101'),
    category: getTranslation(currentLanguage, 'faq.category.gaming')
  },
  {
    id: 102,
    question: getTranslation(currentLanguage, 'faq.question102'),
    answer: getTranslation(currentLanguage, 'faq.answer102'),
    category: getTranslation(currentLanguage, 'faq.category.advanced')
  },
  {
    id: 103,
    question: getTranslation(currentLanguage, 'faq.question103'),
    answer: getTranslation(currentLanguage, 'faq.answer103'),
    category: getTranslation(currentLanguage, 'faq.category.censorship')
  },
  {
    id: 104,
    question: getTranslation(currentLanguage, 'faq.question104'),
    answer: getTranslation(currentLanguage, 'faq.answer104'),
    category: getTranslation(currentLanguage, 'faq.category.p2p')
  },
  {
    id: 105,
    question: getTranslation(currentLanguage, 'faq.question105'),
    answer: getTranslation(currentLanguage, 'faq.answer105'),
    category: getTranslation(currentLanguage, 'faq.category.features')
  },
  {
    id: 106,
    question: getTranslation(currentLanguage, 'faq.question106'),
    answer: getTranslation(currentLanguage, 'faq.answer106'),
    category: getTranslation(currentLanguage, 'faq.category.pricing')
  },
  {
    id: 107,
    question: getTranslation(currentLanguage, 'faq.question107'),
    answer: getTranslation(currentLanguage, 'faq.answer107'),
    category: getTranslation(currentLanguage, 'faq.category.privacy')
  },
  {
    id: 108,
    question: getTranslation(currentLanguage, 'faq.question108'),
    answer: getTranslation(currentLanguage, 'faq.answer108'),
    category: getTranslation(currentLanguage, 'faq.category.privacy')
  },
  {
    id: 109,
    question: getTranslation(currentLanguage, 'faq.question109'),
    answer: getTranslation(currentLanguage, 'faq.answer109'),
    category: getTranslation(currentLanguage, 'faq.category.performance')
  },
  {
    id: 110,
    question: getTranslation(currentLanguage, 'faq.question110'),
    answer: getTranslation(currentLanguage, 'faq.answer110'),
    category: getTranslation(currentLanguage, 'faq.category.recommendations')
  },

  {
    id: 112,
    question: getTranslation(currentLanguage, 'faq.question112'),
    answer: getTranslation(currentLanguage, 'faq.answer112'),
    category: getTranslation(currentLanguage, 'faq.category.general')
  },

  {
    id: 114,
    question: getTranslation(currentLanguage, 'faq.question114'),
    answer: getTranslation(currentLanguage, 'faq.answer114'),
    category: getTranslation(currentLanguage, 'faq.category.general')
  },
  {
    id: 115,
    question: getTranslation(currentLanguage, 'faq.question115'),
    answer: getTranslation(currentLanguage, 'faq.answer115'),
    category: getTranslation(currentLanguage, 'faq.category.general')
  },
  {
    id: 116,
    question: getTranslation(currentLanguage, 'faq.question116'),
    answer: getTranslation(currentLanguage, 'faq.answer116'),
    category: getTranslation(currentLanguage, 'faq.category.general')
  },
  {
    id: 117,
    question: getTranslation(currentLanguage, 'faq.question117'),
    answer: getTranslation(currentLanguage, 'faq.answer117'),
    category: getTranslation(currentLanguage, 'faq.category.general')
  }
];

const FAQPage: React.FC = () => {
  const { t, currentLanguage, translateFAQs } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Get translated FAQs - this will return localized content if available, otherwise fallback to English
  const translatedFAQs = translateFAQs(faqs);
  
  // Get categories from translated FAQs to ensure they're also localized
  const categories = Array.from(new Set(translatedFAQs.map(faq => faq.category))).sort();

  // Insert FAQ Schema on component mount and when language changes
  useEffect(() => {
    const faqSchemaData = translatedFAQs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }));
    
    insertFAQSchema(faqSchemaData);
  }, [currentLanguage, translatedFAQs]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = translatedFAQs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <HelpCircle className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('faqTitle')}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('faqSubtitle')}
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder={t('searchFaqs')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">{t('allCategories')}</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => (
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
                    const internalLinks = getInternalLinks(faq.id, currentLanguage);
                    return internalLinks.length > 0 ? (
                      <div className="mt-4">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">{getTranslation(currentLanguage, 'faq.relatedGuides')}</h5>
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
                    const recommendation = getAffiliateRecommendation(faq.id, currentLanguage);
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

      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">{t('noFaqsFound')}</p>
          <p className="text-gray-400 text-sm mt-2">{t('adjustSearch')}</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-8 text-center text-sm text-gray-500">
        {t('showingResults').replace('{count}', filteredFAQs.length.toString()).replace('{total}', faqs.length.toString())}
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