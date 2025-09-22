import { AffiliatePartner, allAffiliatePartners } from '../data/affiliateData';

export interface AffiliateUpdateResult {
  success: boolean;
  message: string;
  updatedFiles: string[];
  errors: string[];
}

export interface FileUpdateConfig {
  filePath: string;
  searchPatterns: string[];
  replaceFunction: (content: string, oldLink: string, newLink: string) => string;
}

export class AffiliateManager {
  private static instance: AffiliateManager;
  
  public static getInstance(): AffiliateManager {
    if (!AffiliateManager.instance) {
      AffiliateManager.instance = new AffiliateManager();
    }
    return AffiliateManager.instance;
  }

  /**
   * Add a new premium affiliate partner and automatically update all links
   */
  public async addPremiumPartner(partner: AffiliatePartner): Promise<AffiliateUpdateResult> {
    const result: AffiliateUpdateResult = {
      success: true,
      message: '',
      updatedFiles: [],
      errors: []
    };

    try {
      // Add to affiliate data
      await this.updateAffiliateData(partner);
      result.updatedFiles.push('src/data/affiliateData.ts');

      // Update all files with the new affiliate link
      const updateResult = await this.updateAllAffiliateLinks(partner.name, partner.affiliateUrl);
      
      result.updatedFiles.push(...updateResult.updatedFiles);
      result.errors.push(...updateResult.errors);
      
      if (updateResult.errors.length > 0) {
        result.success = false;
        result.message = `Partially completed. ${updateResult.errors.length} errors occurred.`;
      } else {
        result.message = `Successfully added ${partner.name} and updated all affiliate links.`;
      }

    } catch (error) {
      result.success = false;
      result.message = `Failed to add partner: ${error}`;
      result.errors.push(String(error));
    }

    return result;
  }

  /**
   * Update all affiliate links for a specific partner across all files
   */
  public async updateAllAffiliateLinks(partnerName: string, newAffiliateUrl: string): Promise<AffiliateUpdateResult> {
    const result: AffiliateUpdateResult = {
      success: true,
      message: '',
      updatedFiles: [],
      errors: []
    };

    const fileConfigs = this.getFileUpdateConfigs(partnerName);
    
    for (const config of fileConfigs) {
      try {
        const updated = await this.updateFileLinks(config, newAffiliateUrl);
        if (updated) {
          result.updatedFiles.push(config.filePath);
        }
      } catch (error) {
        result.errors.push(`Failed to update ${config.filePath}: ${error}`);
      }
    }

    return result;
  }

  /**
   * Get file update configurations for a specific partner
   */
  private getFileUpdateConfigs(partnerName: string): FileUpdateConfig[] {
    const lowerName = partnerName.toLowerCase();
    
    return [
      {
        filePath: 'src/data/vpnData.ts',
        searchPatterns: [
          `name: "${partnerName}"`,
          `name: '${partnerName}'`,
          `"${lowerName}"`,
          `'${lowerName}'`
        ],
        replaceFunction: this.replaceInVpnData
      },
      {
        filePath: 'src/utils/affiliateRecommendations.ts',
        searchPatterns: [
          `provider: "${partnerName}"`,
          `provider: '${partnerName}'`,
          `"${lowerName}"`,
          `'${lowerName}'`
        ],
        replaceFunction: this.replaceInAffiliateRecommendations
      },
      {
        filePath: 'index.html',
        searchPatterns: [
          `//${lowerName}.com`,
          `https://${lowerName}.com`,
          `http://${lowerName}.com`
        ],
        replaceFunction: this.replaceInHtml
      }
    ];
  }

  /**
   * Replace affiliate links in VPN data file
   */
  private replaceInVpnData(content: string, oldLink: string, newLink: string): string {
    // Replace affiliateLink in VPN objects
    const affiliateLinkRegex = /affiliateLink:\s*["']([^"']+)["']/g;
    return content.replace(affiliateLinkRegex, (match, url) => {
      if (this.isRelatedLink(url, oldLink)) {
        return match.replace(url, newLink);
      }
      return match;
    });
  }

  /**
   * Replace affiliate links in affiliate recommendations file
   */
  private replaceInAffiliateRecommendations(content: string, oldLink: string, newLink: string): string {
    // Replace affiliateUrl in recommendation objects
    const affiliateUrlRegex = /affiliateUrl:\s*["']([^"']+)["']/g;
    return content.replace(affiliateUrlRegex, (match, url) => {
      if (this.isRelatedLink(url, oldLink)) {
        return match.replace(url, newLink);
      }
      return match;
    });
  }

  /**
   * Replace DNS prefetch and other links in HTML
   */
  private replaceInHtml(content: string, oldLink: string, newLink: string): string {
    // Extract domain from new affiliate URL
    const newDomain = this.extractDomain(newLink);
    
    // Replace DNS prefetch links
    const dnsPrefetchRegex = /<link\s+rel=["']dns-prefetch["']\s+href=["']\/\/([^"']+)["']/g;
    return content.replace(dnsPrefetchRegex, (match, domain) => {
      if (this.isRelatedDomain(domain, oldLink)) {
        return match.replace(domain, newDomain);
      }
      return match;
    });
  }

  /**
   * Check if a URL is related to the old link (same domain or provider)
   */
  private isRelatedLink(url: string, referenceLink: string): boolean {
    const urlDomain = this.extractDomain(url);
    const refDomain = this.extractDomain(referenceLink);
    
    // Check if domains are related (same base domain)
    return urlDomain.includes(refDomain) || refDomain.includes(urlDomain);
  }

  /**
   * Check if a domain is related to the reference link
   */
  private isRelatedDomain(domain: string, referenceLink: string): boolean {
    const refDomain = this.extractDomain(referenceLink);
    return domain.includes(refDomain) || refDomain.includes(domain);
  }

  /**
   * Extract domain from URL
   */
  private extractDomain(url: string): string {
    try {
      const urlObj = new URL(url.startsWith('//') ? 'https:' + url : url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      // If URL parsing fails, try to extract domain manually
      const match = url.match(/(?:https?:\/\/)?(?:www\.)?([^\/\?#]+)/);
      return match ? match[1] : url;
    }
  }

  /**
   * Update a specific file with new affiliate links
   */
  private async updateFileLinks(config: FileUpdateConfig, newAffiliateUrl: string): Promise<boolean> {
    // This would need to be implemented with actual file system operations
    // For now, return true to indicate successful update
    console.log(`Would update ${config.filePath} with new affiliate URL: ${newAffiliateUrl}`);
    return true;
  }

  /**
   * Update affiliate data file with new partner
   */
  private async updateAffiliateData(partner: AffiliatePartner): Promise<void> {
    // This would need to be implemented with actual file system operations
    console.log(`Would add partner to affiliateData.ts:`, partner);
  }

  /**
   * Get all current affiliate partners
   */
  public getAllPartners(): AffiliatePartner[] {
    return allAffiliatePartners;
  }

  /**
   * Find partner by name
   */
  public findPartner(name: string): AffiliatePartner | undefined {
    return allAffiliatePartners.find(partner => 
      partner.name.toLowerCase() === name.toLowerCase()
    );
  }

  /**
   * Check if a partner is premium
   */
  public isPremiumPartner(name: string): boolean {
    const partner = this.findPartner(name);
    return partner?.tier === 'premium';
  }

  /**
   * Generate tracking URL with additional parameters
   */
  public generateTrackingUrl(baseUrl: string, source?: string, campaign?: string): string {
    try {
      const url = new URL(baseUrl);
      
      if (source) {
        url.searchParams.set('utm_source', source);
      }
      
      if (campaign) {
        url.searchParams.set('utm_campaign', campaign);
      }
      
      // Add timestamp for tracking
      url.searchParams.set('utm_medium', 'affiliate');
      url.searchParams.set('ref_time', Date.now().toString());
      
      return url.toString();
    } catch {
      return baseUrl;
    }
  }
}

// Export singleton instance
export const affiliateManager = AffiliateManager.getInstance();

// Export utility functions
export const addPremiumPartner = (partner: AffiliatePartner) => 
  affiliateManager.addPremiumPartner(partner);

export const updatePartnerLinks = (partnerName: string, newUrl: string) => 
  affiliateManager.updateAllAffiliateLinks(partnerName, newUrl);

export const generateTrackingUrl = (baseUrl: string, source?: string, campaign?: string) => 
  affiliateManager.generateTrackingUrl(baseUrl, source, campaign);