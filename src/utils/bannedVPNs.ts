// Banned VPN providers - DO NOT USE THESE IN ANY CONTENT
export const BANNED_VPNS = [
  'ExpressVPN',
  'CyberGhost',
  'Private Internet Access',
  'PIA', 
  'ZenMate',
  'Intego Antivirus',
  'Webselenese'
];

export const PREMIUM_PARTNERS = [
  'NordVPN',
  'Surfshark'
];

// Function to check if a VPN is banned
export function isBannedVPN(vpnName: string): boolean {
  return BANNED_VPNS.some(banned => 
    vpnName.toLowerCase().includes(banned.toLowerCase())
  );
}

// Function to get premium partner alternative
export function getPremiumAlternative(): string {
  return PREMIUM_PARTNERS[Math.floor(Math.random() * PREMIUM_PARTNERS.length)];
}
