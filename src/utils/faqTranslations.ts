export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  language?: string; // Optional language property to indicate the language of the FAQ
}

export const faqTranslations: Record<string, FAQItem[]> = {
  en: [
    { id: 1, question: "What is a VPN?", answer: "A VPN (Virtual Private Network) creates an encrypted connection between your device and the internet, masking your IP address and protecting your privacy.", category: "Basics" },
    { id: 2, question: "Is using a VPN legal?", answer: "Yes, VPNs are legal in most countries for legitimate purposes. Always check your local laws.", category: "Legal" },
    { id: 3, question: "Does a VPN slow down internet?", answer: "VPNs may reduce speed by 5-20% due to encryption. Premium VPNs minimize this impact.", category: "Performance" },
    { id: 4, question: "Can I use VPN for streaming?", answer: "Yes! VPNs help access geo-restricted content from Netflix, Hulu, and other platforms.", category: "Streaming" },
    { id: 5, question: "Are free VPNs safe?", answer: "Free VPNs often compromise privacy. Premium VPNs offer better security and faster speeds.", category: "Pricing" },
    { id: 6, question: "How many devices can I use?", answer: "Most premium VPNs allow 5-10 simultaneous connections, some offer unlimited devices.", category: "Devices" },
    { id: 7, question: "What is a no-logs policy?", answer: "VPN providers don't record your browsing history, connection times, or IP addresses.", category: "Privacy" },
    // Additional FAQs would be added here
  ],
  // Other language translations would be added here
};

