import { AffiliatePartner } from '../data/affiliateData';
import { AutoAffiliateUpdater, validatePartnerData } from './autoAffiliateUpdater';

export interface QuickPartnerInput {
  name: string;
  affiliateUrl: string;
  commission?: number;
  features?: string[];
  priority?: number;
}

export class QuickAffiliateAdd {
  /**
   * Quickly add a premium partner with minimal input
   */
  public static async addPremiumPartner(input: QuickPartnerInput): Promise<{
    success: boolean;
    message: string;
    partner?: AffiliatePartner;
    updateInstructions?: string[];
  }> {
    try {
      // Validate input
      if (!input.name || !input.affiliateUrl) {
        return {
          success: false,
          message: 'Name and affiliate URL are required'
        };
      }

      // Create full partner object
      const partner: AffiliatePartner = {
        id: this.generatePartnerId(input.name),
        name: input.name,
        tier: 'premium',
        affiliateUrl: input.affiliateUrl,
        commission: input.commission || 30,
        trackingEnabled: true,
        features: input.features || ['high-commission', 'priority-placement'],
        priority: input.priority || 1
      };

      // Validate the complete partner data
      const validationErrors = validatePartnerData(partner);
      if (validationErrors.length > 0) {
        return {
          success: false,
          message: `Validation failed: ${validationErrors.join(', ')}`
        };
      }

      // Generate update operations
      const updateResult = await AutoAffiliateUpdater.addPremiumPartnerAndUpdateFiles(partner);
      
      if (updateResult.success) {
        const instructions = this.generateUpdateInstructions(partner, updateResult.operations);
        
        return {
          success: true,
          message: `${partner.name} premium partner created successfully!`,
          partner,
          updateInstructions: instructions
        };
      } else {
        return {
          success: false,
          message: updateResult.message
        };
      }

    } catch (error) {
      return {
        success: false,
        message: `Error adding partner: ${error}`
      };
    }
  }

  /**
   * Generate a unique partner ID from name
   */
  private static generatePartnerId(name: string): string {
    return name.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .substring(0, 20);
  }

  /**
   * Generate step-by-step update instructions
   */
  private static generateUpdateInstructions(
    partner: AffiliatePartner, 
    operations: any[]
  ): string[] {
    const instructions: string[] = [
      `✅ Premium partner "${partner.name}" has been configured`,
      `🔗 Affiliate URL: ${partner.affiliateUrl}`,
      `💰 Commission: ${partner.commission}%`,
      '',
      '📝 Manual Updates Required:',
      '',
      '1. Add to affiliateData.ts premiumPartners array:',
      `   ${this.formatPartnerForArray(partner)}`,
      '',
      '2. Update VPN data files:',
      `   - Search for "${partner.name}" in src/data/vpnData.ts`,
      `   - Replace affiliateLink with: "${partner.affiliateUrl}"`,
      '',
      '3. Update affiliate recommendations:',
      `   - Search for "${partner.name}" in src/utils/affiliateRecommendations.ts`,
      `   - Replace affiliateUrl with: "${partner.affiliateUrl}"`,
      '',
      '4. Update DNS prefetch (if needed):',
      `   - Check index.html for DNS prefetch links`,
      `   - Update to affiliate domain if different`,
      '',
      '🎯 All NordVPN-style links will be automatically replaced!'
    ];

    return instructions;
  }

  /**
   * Format partner object for array insertion
   */
  private static formatPartnerForArray(partner: AffiliatePartner): string {
    return `{
    id: "${partner.id}",
    name: "${partner.name}",
    tier: "${partner.tier}",
    affiliateUrl: "${partner.affiliateUrl}",
    commission: ${partner.commission},
    trackingEnabled: ${partner.trackingEnabled},
    features: ${JSON.stringify(partner.features)},
    priority: ${partner.priority}
  }`;
  }

  /**
   * Pre-configured popular VPN partners for quick setup
   */
  public static getPopularVPNTemplates(): { [key: string]: Partial<QuickPartnerInput> } {
    return {
      expressvpn: {
        name: 'ExpressVPN',
        commission: 35,
        features: ['premium-speed', 'global-servers', 'high-commission'],
        priority: 1
      },
      surfshark: {
        name: 'Surfshark',
        commission: 40,
        features: ['budget-friendly', 'unlimited-devices', 'high-commission'],
        priority: 2
      },
      cyberghost: {
        name: 'CyberGhost',
        commission: 30,
        features: ['user-friendly', 'streaming-optimized', 'good-commission'],
        priority: 3
      },
      purevpn: {
        name: 'PureVPN',
        commission: 25,
        features: ['multi-purpose', 'business-friendly', 'standard-commission'],
        priority: 4
      },
      ipvanish: {
        name: 'IPVanish',
        commission: 30,
        features: ['no-logs', 'fast-speeds', 'good-commission'],
        priority: 5
      }
    };
  }

  /**
   * Quick setup for popular VPN with just affiliate URL
   */
  public static async addPopularVPN(
    vpnKey: string, 
    affiliateUrl: string
  ): Promise<ReturnType<typeof QuickAffiliateAdd.addPremiumPartner>> {
    const templates = this.getPopularVPNTemplates();
    const template = templates[vpnKey.toLowerCase()];
    
    if (!template) {
      return {
        success: false,
        message: `Unknown VPN template: ${vpnKey}. Available: ${Object.keys(templates).join(', ')}`
      };
    }

    return this.addPremiumPartner({
      ...template,
      affiliateUrl
    } as QuickPartnerInput);
  }
}

// Export convenience functions
export const addPremiumPartnerQuick = (input: QuickPartnerInput) =>
  QuickAffiliateAdd.addPremiumPartner(input);

export const addPopularVPN = (vpnKey: string, affiliateUrl: string) =>
  QuickAffiliateAdd.addPopularVPN(vpnKey, affiliateUrl);

export const getVPNTemplates = () =>
  QuickAffiliateAdd.getPopularVPNTemplates();

// Example usage:
/*
// Add ExpressVPN with affiliate URL
const result = await addPopularVPN('expressvpn', 'https://go.expressvpn.com/aff_c?offer_id=15&aff_id=12345');

// Add custom VPN
const customResult = await addPremiumPartnerQuick({
  name: 'MyCustomVPN',
  affiliateUrl: 'https://mycustomvpn.com/affiliate/12345',
  commission: 45,
  features: ['custom-feature', 'high-performance'],
  priority: 1
});
*/