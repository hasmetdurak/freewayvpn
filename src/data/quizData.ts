export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  icon: string;
}

export interface QuizOption {
  id: string;
  label: string;
  scores: { [provider: string]: number };
}

export interface QuizResult {
  provider: string;
  score: number;
  reason: string;
  features: string[];
  deal?: {
    discount: number;
    couponCode: string;
  };
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'usage',
    question: 'What will you mainly use VPN for?',
    icon: '🎯',
    options: [
      {
        id: 'streaming',
        label: 'Streaming (Netflix, Disney+, etc.)',
        scores: {
          NordVPN: 10,
          Surfshark: 12,
          ExpressVPN: 9,
          CyberGhost: 11,
          'Private Internet Access': 7,
          ProtonVPN: 6
        }
      },
      {
        id: 'privacy',
        label: 'Privacy & Security',
        scores: {
          NordVPN: 11,
          Surfshark: 8,
          ExpressVPN: 10,
          CyberGhost: 7,
          'Private Internet Access': 9,
          ProtonVPN: 12
        }
      },
      {
        id: 'torrenting',
        label: 'Torrenting & P2P',
        scores: {
          NordVPN: 10,
          Surfshark: 9,
          ExpressVPN: 8,
          CyberGhost: 10,
          'Private Internet Access': 11,
          ProtonVPN: 7
        }
      },
      {
        id: 'gaming',
        label: 'Gaming & Low Latency',
        scores: {
          NordVPN: 11,
          Surfshark: 8,
          ExpressVPN: 12,
          CyberGhost: 7,
          'Private Internet Access': 8,
          ProtonVPN: 6
        }
      }
    ]
  },
  {
    id: 'location',
    question: 'Which regions do you need to access?',
    icon: '🌍',
    options: [
      {
        id: 'asia',
        label: 'Asia (Korea, Japan, China)',
        scores: {
          NordVPN: 12,
          Surfshark: 10,
          ExpressVPN: 11,
          CyberGhost: 8,
          'Private Internet Access': 7,
          ProtonVPN: 8
        }
      },
      {
        id: 'europe',
        label: 'Europe (UK, Germany, France)',
        scores: {
          NordVPN: 11,
          Surfshark: 10,
          ExpressVPN: 10,
          CyberGhost: 11,
          'Private Internet Access': 9,
          ProtonVPN: 12
        }
      },
      {
        id: 'americas',
        label: 'Americas (USA, Canada, Brazil)',
        scores: {
          NordVPN: 11,
          Surfshark: 10,
          ExpressVPN: 12,
          CyberGhost: 10,
          'Private Internet Access': 11,
          ProtonVPN: 9
        }
      },
      {
        id: 'worldwide',
        label: 'Worldwide Coverage',
        scores: {
          NordVPN: 11,
          Surfshark: 10,
          ExpressVPN: 12,
          CyberGhost: 10,
          'Private Internet Access': 9,
          ProtonVPN: 9
        }
      }
    ]
  },
  {
    id: 'budget',
    question: 'What\'s your budget?',
    icon: '💰',
    options: [
      {
        id: 'budget',
        label: 'Budget-friendly ($3-5/month)',
        scores: {
          NordVPN: 8,
          Surfshark: 12,
          ExpressVPN: 5,
          CyberGhost: 10,
          'Private Internet Access': 11,
          ProtonVPN: 7
        }
      },
      {
        id: 'mid',
        label: 'Mid-range ($5-8/month)',
        scores: {
          NordVPN: 11,
          Surfshark: 10,
          ExpressVPN: 8,
          CyberGhost: 10,
          'Private Internet Access': 9,
          ProtonVPN: 10
        }
      },
      {
        id: 'premium',
        label: 'Premium ($8+/month)',
        scores: {
          NordVPN: 10,
          Surfshark: 7,
          ExpressVPN: 12,
          CyberGhost: 8,
          'Private Internet Access': 7,
          ProtonVPN: 11
        }
      }
    ]
  },
  {
    id: 'devices',
    question: 'How many devices will you use?',
    icon: '📱',
    options: [
      {
        id: '1-3',
        label: '1-3 devices',
        scores: {
          NordVPN: 10,
          Surfshark: 8,
          ExpressVPN: 10,
          CyberGhost: 9,
          'Private Internet Access': 9,
          ProtonVPN: 10
        }
      },
      {
        id: '4-6',
        label: '4-6 devices',
        scores: {
          NordVPN: 11,
          Surfshark: 12,
          ExpressVPN: 10,
          CyberGhost: 11,
          'Private Internet Access': 10,
          ProtonVPN: 9
        }
      },
      {
        id: 'unlimited',
        label: 'Unlimited devices',
        scores: {
          NordVPN: 8,
          Surfshark: 15,
          ExpressVPN: 7,
          CyberGhost: 11,
          'Private Internet Access': 10,
          ProtonVPN: 8
        }
      }
    ]
  },
  {
    id: 'priority',
    question: 'What matters most to you?',
    icon: '⚡',
    options: [
      {
        id: 'speed',
        label: 'Speed & Performance',
        scores: {
          NordVPN: 11,
          Surfshark: 9,
          ExpressVPN: 12,
          CyberGhost: 8,
          'Private Internet Access': 9,
          ProtonVPN: 7
        }
      },
      {
        id: 'security',
        label: 'Maximum Security',
        scores: {
          NordVPN: 11,
          Surfshark: 9,
          ExpressVPN: 10,
          CyberGhost: 8,
          'Private Internet Access': 10,
          ProtonVPN: 12
        }
      },
      {
        id: 'price',
        label: 'Best Price',
        scores: {
          NordVPN: 8,
          Surfshark: 12,
          ExpressVPN: 5,
          CyberGhost: 10,
          'Private Internet Access': 11,
          ProtonVPN: 7
        }
      },
      {
        id: 'ease',
        label: 'Ease of Use',
        scores: {
          NordVPN: 11,
          Surfshark: 10,
          ExpressVPN: 11,
          CyberGhost: 12,
          'Private Internet Access': 8,
          ProtonVPN: 7
        }
      }
    ]
  }
];

export const providerDetails: { [key: string]: { features: string[]; deal: { discount: number; couponCode: string }; affiliateUrl: string } } = {
  'NordVPN': {
    features: [
      'Ultra-fast NordLynx protocol',
      '5,500+ servers in 60 countries',
      'Double VPN & Onion over VPN',
      'Threat Protection (ad blocker)',
      '24/7 customer support'
    ],
    deal: {
      discount: 73,
      couponCode: 'BESTVPN73'
    },
    affiliateUrl: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_ID'
  },
  'Surfshark': {
    features: [
      'Unlimited simultaneous devices',
      '3,200+ servers in 100 countries',
      'CleanWeb (ad & malware blocker)',
      'Camouflage mode for stealth',
      'Best value for families'
    ],
    deal: {
      discount: 86,
      couponCode: 'SURF86'
    },
    affiliateUrl: 'https://surfshark.com/deal/best-value?id=YOUR_ID'
  },
  'ExpressVPN': {
    features: [
      'Fastest VPN speeds globally',
      'TrustedServer technology (RAM-only)',
      '3,000+ servers in 94 countries',
      'MediaStreamer for smart TVs',
      'Best for streaming & gaming'
    ],
    deal: {
      discount: 49,
      couponCode: ''
    },
    affiliateUrl: 'https://www.expressvpn.com/order?a_aid=YOUR_ID'
  },
  'CyberGhost': {
    features: [
      'Optimized servers for streaming',
      '9,700+ servers in 91 countries',
      'Automatic kill switch',
      '45-day money-back guarantee',
      'User-friendly interface'
    ],
    deal: {
      discount: 83,
      couponCode: 'CYBER83'
    },
    affiliateUrl: 'https://www.cyberghostvpn.com/aff?id=YOUR_ID'
  },
  'Private Internet Access': {
    features: [
      'Open-source & audited',
      'Port forwarding support',
      '35,000+ servers worldwide',
      'Customizable encryption',
      'Best for torrenting'
    ],
    deal: {
      discount: 82,
      couponCode: 'PIA82'
    },
    affiliateUrl: 'https://www.privateinternetaccess.com/aff?id=YOUR_ID'
  },
  'ProtonVPN': {
    features: [
      'Swiss privacy laws',
      'Secure Core architecture',
      'Perfect forward secrecy',
      'No logs policy (audited)',
      'Free tier available'
    ],
    deal: {
      discount: 55,
      couponCode: ''
    },
    affiliateUrl: 'https://protonvpn.com/aff?id=YOUR_ID'
  }
};

export const calculateResults = (answers: { [questionId: string]: string }): QuizResult[] => {
  const scores: { [provider: string]: number } = {
    'NordVPN': 0,
    'Surfshark': 0,
    'ExpressVPN': 0,
    'CyberGhost': 0,
    'Private Internet Access': 0,
    'ProtonVPN': 0
  };

  // Her cevap için skorları topla
  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = quizQuestions.find(q => q.id === questionId);
    if (question) {
      const option = question.options.find(o => o.id === optionId);
      if (option) {
        Object.entries(option.scores).forEach(([provider, score]) => {
          scores[provider] += score;
        });
      }
    }
  });

  // Skorlara göre sırala ve top 3'ü al
  const sortedProviders = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  // Sonuçları oluştur
  return sortedProviders.map(([provider, score], index) => {
    const details = providerDetails[provider];
    let reason = '';
    
    if (index === 0) {
      reason = `Based on your answers, ${provider} is the perfect match. It excels in all your priority areas.`;
    } else if (index === 1) {
      reason = `${provider} is a strong alternative with excellent features for your needs.`;
    } else {
      reason = `${provider} offers great value and reliable performance.`;
    }

    return {
      provider,
      score,
      reason,
      features: details.features,
      deal: details.deal
    };
  });
};

