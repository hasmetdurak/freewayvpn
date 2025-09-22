import { AffiliatePartner } from '../data/affiliateData';

export interface FileUpdateOperation {
  filePath: string;
  searchPattern: string | RegExp;
  replacement: string;
  description: string;
}

export interface AutoUpdateResult {
  success: boolean;
  message: string;
  operations: FileUpdateOperation[];
  errors: string[];
}

export class AutoAffiliateUpdater {
  /**
   * Automatically add a new premium partner and update all related files
   */
  public static async addPremiumPartnerAndUpdateFiles(
    partner: AffiliatePartner
  ): Promise<AutoUpdateResult> {
    const result: AutoUpdateResult = {
      success: true,
      message: '',
      operations: [],
      errors: []
    };

    try {
      // 1. Update affiliateData.ts - Add to premiumPartners array
      const affiliateDataOperation = this.createAffiliateDataOperation(partner);
      result.operations.push(affiliateDataOperation);

      // 2. Update vpnData.ts - Replace affiliate link if VPN exists
      const vpnDataOperations = this.createVpnDataOperations(partner);
      result.operations.push(...vpnDataOperations);

      // 3. Update affiliateRecommendations.ts - Replace affiliate URLs
      const recommendationOperations = this.createRecommendationOperations(partner);
      result.operations.push(...recommendationOperations);

      // 4. Update index.html - Update DNS prefetch if needed
      const htmlOperations = this.createHtmlOperations(partner);
      result.operations.push(...htmlOperations);

      result.message = `Successfully prepared ${result.operations.length} update operations for ${partner.name}`;

    } catch (error) {
      result.success = false;
      result.message = `Failed to prepare updates: ${error}`;
      result.errors.push(String(error));
    }

    return result;
  }

  /**
   * Create operation to add partner to affiliateData.ts
   */
  private static createAffiliateDataOperation(partner: AffiliatePartner): FileUpdateOperation {
    const partnerCode = `  {
    id: "${partner.id}",
    name: "${partner.name}",
    tier: "${partner.tier}",
    affiliateUrl: "${partner.affiliateUrl}",
    commission: ${partner.commission},
    trackingEnabled: ${partner.trackingEnabled},
    features: ${JSON.stringify(partner.features)},
    priority: ${partner.priority}
  }`;

    return {
      filePath: 'src/data/affiliateData.ts',
      searchPattern: /export const premiumPartners: AffiliatePartner\[\] = \[([\s\S]*?)\];/,
      replacement: `export const premiumPartners: AffiliatePartner[] = [$1,\n${partnerCode}\n];`,
      description: `Add ${partner.name} to premium partners array`
    };
  }

  /**
   * Create operations to update vpnData.ts
   */
  private static createVpnDataOperations(partner: AffiliatePartner): FileUpdateOperation[] {
    const operations: FileUpdateOperation[] = [];
    const partnerNameLower = partner.name.toLowerCase();

    // Common patterns for VPN names
    const nameVariations = [
      partner.name,
      partnerNameLower,
      partner.name.replace(/\s+/g, ''),
      partnerNameLower.replace(/\s+/g, '')
    ];

    nameVariations.forEach(nameVar => {
      operations.push({
        filePath: 'src/data/vpnData.ts',
        searchPattern: new RegExp(`(name:\\s*["']${nameVar}["'][\\s\\S]*?affiliateLink:\\s*)["']([^"']+)["']`, 'gi'),
        replacement: `$1"${partner.affiliateUrl}"`,
        description: `Update ${nameVar} affiliate link in VPN data`
      });
    });

    return operations;
  }

  /**
   * Create operations to update affiliateRecommendations.ts
   */
  private static createRecommendationOperations(partner: AffiliatePartner): FileUpdateOperation[] {
    const operations: FileUpdateOperation[] = [];
    const partnerNameLower = partner.name.toLowerCase();

    // Update all affiliate recommendations for this provider
    operations.push({
      filePath: 'src/utils/affiliateRecommendations.ts',
      searchPattern: new RegExp(`(provider:\\s*["']${partner.name}["'][\\s\\S]*?affiliateUrl:\\s*)["']([^"']+)["']`, 'gi'),
      replacement: `$1"${partner.affiliateUrl}"`,
      description: `Update ${partner.name} affiliate URL in recommendations`
    });

    // Also check for lowercase variations
    operations.push({
      filePath: 'src/utils/affiliateRecommendations.ts',
      searchPattern: new RegExp(`(provider:\\s*["']${partnerNameLower}["'][\\s\\S]*?affiliateUrl:\\s*)["']([^"']+)["']`, 'gi'),
      replacement: `$1"${partner.affiliateUrl}"`,
      description: `Update ${partnerNameLower} affiliate URL in recommendations`
    });

    return operations;
  }

  /**
   * Create operations to update index.html
   */
  private static createHtmlOperations(partner: AffiliatePartner): FileUpdateOperation[] {
    const operations: FileUpdateOperation[] = [];
    
    try {
      const affiliateUrl = new URL(partner.affiliateUrl);
      const domain = affiliateUrl.hostname.replace('www.', '');
      const partnerDomain = partner.name.toLowerCase().replace(/\s+/g, '') + '.com';

      // Update DNS prefetch for the partner's original domain to affiliate domain
      operations.push({
        filePath: 'index.html',
        searchPattern: new RegExp(`<link\\s+rel=["']dns-prefetch["']\\s+href=["']//${partnerDomain}["']`, 'gi'),
        replacement: `<link rel="dns-prefetch" href="//${domain}"`,
        description: `Update DNS prefetch from ${partnerDomain} to ${domain}`
      });

    } catch (error) {
      // If URL parsing fails, skip HTML operations
      console.warn(`Could not parse affiliate URL for HTML operations: ${error}`);
    }

    return operations;
  }

  /**
   * Generate code to add partner to affiliateData.ts premiumPartners array
   */
  public static generatePartnerAdditionCode(partner: AffiliatePartner): string {
    return `
// Add this to premiumPartners array in src/data/affiliateData.ts
{
  id: "${partner.id}",
  name: "${partner.name}",
  tier: "${partner.tier}",
  affiliateUrl: "${partner.affiliateUrl}",
  commission: ${partner.commission},
  trackingEnabled: ${partner.trackingEnabled},
  features: ${JSON.stringify(partner.features, null, 2)},
  priority: ${partner.priority}
}`;
  }

  /**
   * Generate search and replace patterns for manual updates
   */
  public static generateUpdatePatterns(partner: AffiliatePartner): {
    vpnData: string[];
    recommendations: string[];
    html: string[];
  } {
    const partnerNameLower = partner.name.toLowerCase();
    
    return {
      vpnData: [
        `Search: affiliateLink: "https://${partnerNameLower}.com/*"`,
        `Replace: affiliateLink: "${partner.affiliateUrl}"`,
        `Search: affiliateLink: "https://my.${partnerNameLower}account.com/*"`,
        `Replace: affiliateLink: "${partner.affiliateUrl}"`
      ],
      recommendations: [
        `Search: affiliateUrl: "https://${partnerNameLower}.com/*"`,
        `Replace: affiliateUrl: "${partner.affiliateUrl}"`,
        `Search: provider: "${partner.name}" ... affiliateUrl: "*"`,
        `Replace: provider: "${partner.name}" ... affiliateUrl: "${partner.affiliateUrl}"`
      ],
      html: [
        `Search: <link rel="dns-prefetch" href="//${partnerNameLower}.com"`,
        `Replace: <link rel="dns-prefetch" href="//${this.extractDomain(partner.affiliateUrl)}"`
      ]
    };
  }

  /**
   * Extract domain from URL
   */
  private static extractDomain(url: string): string {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return url;
    }
  }

  /**
   * Validate partner data before processing
   */
  public static validatePartner(partner: Partial<AffiliatePartner>): string[] {
    const errors: string[] = [];

    if (!partner.name) errors.push('Partner name is required');
    if (!partner.affiliateUrl) errors.push('Affiliate URL is required');
    if (!partner.id) errors.push('Partner ID is required');
    if (!partner.tier) errors.push('Partner tier is required');

    if (partner.affiliateUrl) {
      try {
        new URL(partner.affiliateUrl);
      } catch {
        errors.push('Invalid affiliate URL format');
      }
    }

    if (partner.tier && !['premium', 'standard', 'basic'].includes(partner.tier)) {
      errors.push('Invalid tier. Must be premium, standard, or basic');
    }

    return errors;
  }
}

// Export convenience functions
export const addPremiumPartnerAuto = (partner: AffiliatePartner) =>
  AutoAffiliateUpdater.addPremiumPartnerAndUpdateFiles(partner);

export const generatePartnerCode = (partner: AffiliatePartner) =>
  AutoAffiliateUpdater.generatePartnerAdditionCode(partner);

export const generateUpdatePatterns = (partner: AffiliatePartner) =>
  AutoAffiliateUpdater.generateUpdatePatterns(partner);

export const validatePartnerData = (partner: Partial<AffiliatePartner>) =>
  AutoAffiliateUpdater.validatePartner(partner);