import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is a VPN and how does it work?",
    answer: "A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and a remote server operated by the VPN service. This connection masks your IP address and encrypts all data transmitted between your device and the internet, providing privacy and security online.",
    category: "Basics"
  },
  {
    id: 2,
    question: "Are VPNs legal to use?",
    answer: "VPNs are legal in most countries around the world, including the United States, Canada, UK, and most European countries. However, some countries like China, Russia, and Iran have restrictions or bans on VPN usage. Always check local laws before using a VPN.",
    category: "Legal"
  },
  {
    id: 3,
    question: "Do VPNs slow down internet speed?",
    answer: "VPNs can reduce internet speed due to encryption overhead and the additional distance data travels through VPN servers. However, premium VPNs typically cause minimal speed loss (5-15%), and some may even improve speeds by bypassing ISP throttling.",
    category: "Performance"
  },
  {
    id: 4,
    question: "Can I use a VPN for streaming Netflix, Hulu, and other services?",
    answer: "Many VPNs can access geo-restricted content on streaming platforms, but not all VPNs work reliably with every streaming service. Look for VPNs that specifically advertise streaming capabilities and have servers optimized for popular platforms.",
    category: "Streaming"
  },
  {
    id: 5,
    question: "What's the difference between free and paid VPNs?",
    answer: "Free VPNs typically have limited servers, slower speeds, data caps, and fewer security features. They may also log user data or show ads. Paid VPNs offer better security, faster speeds, more servers, and stronger privacy policies with no-logs guarantees.",
    category: "Pricing"
  },
  {
    id: 6,
    question: "How many devices can I connect to a VPN?",
    answer: "This varies by provider. Some VPNs allow 5-10 simultaneous connections, while others like Surfshark and IPVanish offer unlimited connections. Check the device limit before choosing a VPN if you have many devices.",
    category: "Devices"
  },
  {
    id: 7,
    question: "What is a no-logs VPN policy?",
    answer: "A no-logs policy means the VPN provider doesn't record or store any information about your online activities, connection times, IP addresses, or browsing history. This ensures your privacy even if the VPN company is compromised or legally compelled to share data.",
    category: "Privacy"
  },
  {
    id: 8,
    question: "Which VPN protocol should I use?",
    answer: "The best protocols are WireGuard (fastest and most modern), OpenVPN (most secure and widely supported), and IKEv2 (great for mobile). Avoid PPTP as it's outdated and insecure. Most users should choose WireGuard when available.",
    category: "Technical"
  },
  {
    id: 9,
    question: "Can I use a VPN on my router?",
    answer: "Yes, many VPN providers support router installation, which protects all devices on your network. You'll need a compatible router that supports VPN clients, or you can buy a pre-configured VPN router. This counts as one connection for device limits.",
    category: "Technical"
  },
  {
    id: 10,
    question: "Do I need a VPN for mobile devices?",
    answer: "Yes, mobile VPNs are important for protecting your data on public Wi-Fi, preventing mobile tracking, and accessing geo-restricted content. Most VPN providers offer dedicated mobile apps for iOS and Android with the same security features as desktop versions.",
    category: "Mobile"
  },
  {
    id: 11,
    question: "What is split tunneling?",
    answer: "Split tunneling allows you to route some of your internet traffic through the VPN while letting other traffic access the internet directly. This is useful for accessing local services while maintaining VPN protection for sensitive activities.",
    category: "Features"
  },
  {
    id: 12,
    question: "How do I choose the best VPN server location?",
    answer: "Choose servers closest to your physical location for best speeds. For streaming, choose servers in the country whose content you want to access. For maximum privacy, choose servers in privacy-friendly countries like Switzerland or Iceland.",
    category: "Usage"
  },
  {
    id: 13,
    question: "What is a kill switch and why do I need it?",
    answer: "A kill switch automatically cuts your internet connection if the VPN connection drops unexpectedly. This prevents your real IP address and unencrypted data from being exposed. It's essential for maintaining privacy and security.",
    category: "Security"
  },
  {
    id: 14,
    question: "Can VPNs be detected?",
    answer: "Yes, VPNs can sometimes be detected through various methods including IP blacklists, deep packet inspection, and behavioral analysis. Some VPNs offer obfuscation features to hide VPN usage, making detection much harder.",
    category: "Privacy"
  },
  {
    id: 15,
    question: "Are there any risks to using a VPN?",
    answer: "Risks include choosing an untrustworthy provider that logs data, malware in fake VPN apps, slower internet speeds, and potential incompatibility with some services. Always choose reputable, audited VPN providers with strong privacy policies.",
    category: "Security"
  },
  {
    id: 16,
    question: "How much should I pay for a VPN?",
    answer: "Quality VPNs typically cost $2-12 per month, with longer subscriptions offering better value. Prices under $2/month may indicate compromise on security or features. Consider annual plans for savings, but start with shorter terms to test the service.",
    category: "Pricing"
  },
  {
    id: 17,
    question: "Can I use a VPN for torrenting?",
    answer: "Many VPNs support P2P traffic and torrenting, but not all. Look for VPNs with dedicated P2P servers, strong encryption, no-logs policies, and kill switches. Some providers specifically allow torrenting while others prohibit it.",
    category: "P2P"
  },
  {
    id: 18,
    question: "What's the difference between VPN and proxy?",
    answer: "VPNs encrypt all your internet traffic and work system-wide, while proxies only redirect traffic from specific applications without encryption. VPNs provide much better security and privacy protection than proxies.",
    category: "Comparison"
  },
  {
    id: 19,
    question: "Do VPNs work in China?",
    answer: "VPN usage is restricted in China, and the Great Firewall blocks many VPN services. Some VPNs still work with special obfuscation technology, but reliability can be inconsistent. Check current reports and choose VPNs with proven China bypass capabilities.",
    category: "Censorship"
  },
  {
    id: 20,
    question: "Can I get a dedicated IP with a VPN?",
    answer: "Yes, some VPN providers offer dedicated/static IP addresses for an additional fee. This gives you the same IP address every time you connect, which can be useful for accessing IP-restricted services or avoiding CAPTCHAs.",
    category: "Features"
  },
  {
    id: 21,
    question: "How do I test if my VPN is working?",
    answer: "Check your IP address before and after connecting to ensure it changes. Test for DNS leaks using online tools, verify your location appears as the VPN server location, and confirm the kill switch works by disconnecting the VPN.",
    category: "Testing"
  },
  {
    id: 22,
    question: "What happens if I forget to turn on my VPN?",
    answer: "Your real IP address and location will be visible, your ISP can see your traffic, and you won't have VPN protection. Some VPNs offer auto-connect features that automatically start the VPN when you connect to the internet or untrusted networks.",
    category: "Usage"
  },
  {
    id: 23,
    question: "Can employers see my internet activity with a VPN?",
    answer: "If you're using company equipment or networks, employers may still monitor your activity through other methods like endpoint monitoring software, even with a VPN. Personal VPNs on personal devices provide better privacy from employer monitoring.",
    category: "Privacy"
  },
  {
    id: 24,
    question: "Do I need antivirus if I have a VPN?",
    answer: "VPNs and antivirus serve different purposes. VPNs protect privacy and data in transit, while antivirus protects against malware and malicious files. You should use both for comprehensive protection - they complement each other.",
    category: "Security"
  },
  {
    id: 25,
    question: "What is double VPN or multi-hop?",
    answer: "Double VPN routes your traffic through two VPN servers instead of one, adding an extra layer of encryption and making your online activity extremely difficult to trace. However, it significantly reduces speed and is usually overkill for most users.",
    category: "Advanced"
  },
  {
    id: 26,
    question: "Can I use a VPN with smart TVs?",
    answer: "Yes, you can use VPNs with smart TVs by installing the VPN on your router, sharing VPN connection from your computer, or using VPN-enabled fire sticks/Apple TVs. Some smart TVs also support VPN apps directly.",
    category: "Devices"
  },
  {
    id: 27,
    question: "What is obfuscation in VPNs?",
    answer: "Obfuscation disguises VPN traffic to make it look like regular HTTPS traffic, helping bypass VPN blocks in restrictive countries or networks. It's also called stealth mode and is useful in countries with internet censorship.",
    category: "Advanced"
  },
  {
    id: 28,
    question: "How often should I change VPN servers?",
    answer: "There's no set rule, but you might want to change servers if experiencing slow speeds, if the server is blocked by a service you're trying to access, or periodically for additional privacy. Many users find a few preferred servers and stick with them.",
    category: "Usage"
  },
  {
    id: 29,
    question: "Can I use a VPN for gaming?",
    answer: "VPNs can be used for gaming to reduce ping to certain servers, bypass geo-restrictions, avoid DDoS attacks, or access games early in different regions. However, VPNs may increase latency, so choose servers close to game servers.",
    category: "Gaming"
  },
  {
    id: 30,
    question: "What is DNS leak and how do I prevent it?",
    answer: "DNS leak occurs when your DNS requests bypass the VPN tunnel, revealing your browsing activity to your ISP. Prevent it by using VPNs with built-in DNS leak protection, changing your DNS settings, or using the VPN's DNS servers.",
    category: "Security"
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
  }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category))).sort();

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get answers to the most common questions about VPNs, privacy, security, and choosing the right service for your needs.
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Search FAQs..."
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
              <option value="All">All Categories</option>
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
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No FAQs found matching your criteria.</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your search or category filter.</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-8 text-center text-sm text-gray-500">
        Showing {filteredFAQs.length} of {faqs.length} frequently asked questions
      </div>

      {/* Contact CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Our VPN experts are here to help you choose the perfect VPN service for your needs.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Contact Our Experts
        </button>
      </div>
    </div>
  );
};

export default FAQPage;