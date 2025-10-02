export interface TestConfig {
  device: string;
  service: string;
  location: string;
}

export interface TestResult {
  provider: string;
  speed: number; // Mbps
  ping: number; // ms
  reliability: number; // 0-100
  works: boolean;
  badge?: string;
  affiliateUrl: string;
  features: string[];
  discount?: number;
}

export interface LeaderboardEntry {
  provider: string;
  avgSpeed: number;
  testsCount: number;
  successRate: number;
  badge: string;
}

export const devices = [
  { id: 'pc', name: 'PC / Desktop', icon: '🖥️' },
  { id: 'mac', name: 'MacBook / iMac', icon: '💻' },
  { id: 'android', name: 'Android Phone', icon: '📱' },
  { id: 'iphone', name: 'iPhone / iPad', icon: '📱' },
  { id: 'smart-tv', name: 'Smart TV', icon: '📺' },
  { id: 'firestick', name: 'Fire TV Stick', icon: '🔥' }
];

export const services = [
  { id: 'netflix-us', name: 'Netflix USA', icon: '🎬', color: 'red' },
  { id: 'netflix-kr', name: 'Netflix Korea', icon: '🇰🇷', color: 'red' },
  { id: 'netflix-jp', name: 'Netflix Japan', icon: '🇯🇵', color: 'red' },
  { id: 'disney-plus', name: 'Disney+', icon: '🏰', color: 'blue' },
  { id: 'hulu', name: 'Hulu', icon: '📺', color: 'green' },
  { id: 'hbo-max', name: 'HBO Max', icon: '🎭', color: 'purple' },
  { id: 'prime-video', name: 'Prime Video', icon: '📦', color: 'orange' },
  { id: 'bbc-iplayer', name: 'BBC iPlayer', icon: '🇬🇧', color: 'gray' },
  { id: 'youtube', name: 'YouTube Premium', icon: '▶️', color: 'red' }
];

export const locations = [
  { id: 'us', name: 'United States', flag: '🇺🇸' },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
  { id: 'kr', name: 'South Korea', flag: '🇰🇷' },
  { id: 'jp', name: 'Japan', flag: '🇯🇵' },
  { id: 'de', name: 'Germany', flag: '🇩🇪' },
  { id: 'ca', name: 'Canada', flag: '🇨🇦' },
  { id: 'au', name: 'Australia', flag: '🇦🇺' },
  { id: 'fr', name: 'France', flag: '🇫🇷' },
  { id: 'nl', name: 'Netherlands', flag: '🇳🇱' }
];

// Simulate test results based on config
export const runStreamTest = (config: TestConfig): Promise<TestResult[]> => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const baseResults: TestResult[] = [
        {
          provider: 'NordVPN',
          speed: Math.floor(Math.random() * 50) + 150, // 150-200 Mbps
          ping: Math.floor(Math.random() * 20) + 15, // 15-35 ms
          reliability: Math.floor(Math.random() * 10) + 90, // 90-100%
          works: true,
          badge: '⚡ FASTEST',
          affiliateUrl: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=YOUR_ID',
          features: ['Ultra-fast streaming', 'SmartPlay DNS', '6 devices'],
          discount: 73
        },
        {
          provider: 'Surfshark',
          speed: Math.floor(Math.random() * 40) + 130, // 130-170 Mbps
          ping: Math.floor(Math.random() * 25) + 20, // 20-45 ms
          reliability: Math.floor(Math.random() * 12) + 88, // 88-100%
          works: true,
          badge: '💰 BEST VALUE',
          affiliateUrl: 'https://surfshark.com/deal/best-value?id=YOUR_ID',
          features: ['Unlimited devices', 'No buffering', 'CleanWeb'],
          discount: 86
        },
        {
          provider: 'ExpressVPN',
          speed: Math.floor(Math.random() * 60) + 160, // 160-220 Mbps
          ping: Math.floor(Math.random() * 15) + 10, // 10-25 ms
          reliability: Math.floor(Math.random() * 8) + 92, // 92-100%
          works: true,
          badge: '🏆 PREMIUM',
          affiliateUrl: 'https://www.expressvpn.com/order?a_aid=YOUR_ID',
          features: ['MediaStreamer', '4K streaming', 'Lightning speed'],
          discount: 49
        },
        {
          provider: 'CyberGhost',
          speed: Math.floor(Math.random() * 35) + 120, // 120-155 Mbps
          ping: Math.floor(Math.random() * 30) + 25, // 25-55 ms
          reliability: Math.floor(Math.random() * 15) + 85, // 85-100%
          works: true,
          badge: '📺 STREAMING',
          affiliateUrl: 'https://www.cyberghostvpn.com/aff?id=YOUR_ID',
          features: ['Optimized servers', 'Auto-connect', '45-day guarantee'],
          discount: 83
        },
        {
          provider: 'Private Internet Access',
          speed: Math.floor(Math.random() * 30) + 110, // 110-140 Mbps
          ping: Math.floor(Math.random() * 35) + 30, // 30-65 ms
          reliability: Math.floor(Math.random() * 18) + 82, // 82-100%
          works: Math.random() > 0.2, // 80% success rate
          affiliateUrl: 'https://www.privateinternetaccess.com/aff?id=YOUR_ID',
          features: ['Split tunneling', 'MACE ad blocker', 'Customizable'],
          discount: 82
        }
      ];

      // Sort by speed descending
      const sortedResults = baseResults.sort((a, b) => b.speed - a.speed);
      resolve(sortedResults);
    }, 2000); // 2 second simulated test time
  });
};

// Weekly leaderboard data
export const getLeaderboard = (): LeaderboardEntry[] => {
  return [
    {
      provider: 'ExpressVPN',
      avgSpeed: 195,
      testsCount: 1247,
      successRate: 98.5,
      badge: '🥇'
    },
    {
      provider: 'NordVPN',
      avgSpeed: 178,
      testsCount: 2156,
      successRate: 97.2,
      badge: '🥈'
    },
    {
      provider: 'Surfshark',
      avgSpeed: 156,
      testsCount: 1893,
      successRate: 96.8,
      badge: '🥉'
    },
    {
      provider: 'CyberGhost',
      avgSpeed: 142,
      testsCount: 1524,
      successRate: 94.3,
      badge: '4️⃣'
    },
    {
      provider: 'Private Internet Access',
      avgSpeed: 128,
      testsCount: 1102,
      successRate: 91.7,
      badge: '5️⃣'
    }
  ];
};

// Achievement badges
export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
}

export const achievements: Achievement[] = [
  { id: 'first-test', name: 'First Test', icon: '🎯', description: 'Complete your first stream test', unlocked: false },
  { id: 'speed-demon', name: 'Speed Demon', icon: '⚡', description: 'Find a VPN with 200+ Mbps', unlocked: false },
  { id: 'globe-trotter', name: 'Globe Trotter', icon: '🌍', description: 'Test 5 different locations', unlocked: false },
  { id: 'binge-watcher', name: 'Binge Watcher', icon: '🍿', description: 'Test all streaming services', unlocked: false },
  { id: 'share-master', name: 'Share Master', icon: '📢', description: 'Share your results 3 times', unlocked: false }
];

