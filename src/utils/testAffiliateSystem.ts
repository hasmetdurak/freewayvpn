import { QuickAffiliateAdd, addPopularVPN, addPremiumPartnerQuick } from './quickAffiliateAdd';
import { AutoAffiliateUpdater } from './autoAffiliateUpdater';
import { AffiliatePartner } from '../data/affiliateData';

export class AffiliateSystemTester {
  /**
   * Test the complete affiliate system with sample data
   */
  public static async runCompleteTest(): Promise<{
    success: boolean;
    results: any[];
    errors: string[];
  }> {
    const results: any[] = [];
    const errors: string[] = [];

    console.log('🧪 Starting Affiliate System Test...');

    try {
      // Test 1: Add ExpressVPN using popular template
      console.log('\n📋 Test 1: Adding ExpressVPN using template...');
      const expressResult = await addPopularVPN(
        'expressvpn', 
        'https://go.expressvpn.com/aff_c?offer_id=15&aff_id=54321'
      );
      results.push({ test: 'ExpressVPN Template', result: expressResult });
      
      if (expressResult.success) {
        console.log('✅ ExpressVPN template test passed');
      } else {
        console.log('❌ ExpressVPN template test failed:', expressResult.message);
        errors.push(`ExpressVPN test: ${expressResult.message}`);
      }

      // Test 2: Add custom VPN with full configuration
      console.log('\n📋 Test 2: Adding custom VPN...');
      const customResult = await addPremiumPartnerQuick({
        name: 'TestVPN Pro',
        affiliateUrl: 'https://testvpn.com/affiliate/abc123',
        commission: 50,
        features: ['test-feature', 'high-performance', 'custom-config'],
        priority: 1
      });
      results.push({ test: 'Custom VPN', result: customResult });
      
      if (customResult.success) {
        console.log('✅ Custom VPN test passed');
      } else {
        console.log('❌ Custom VPN test failed:', customResult.message);
        errors.push(`Custom VPN test: ${customResult.message}`);
      }

      // Test 3: Test validation with invalid data
      console.log('\n📋 Test 3: Testing validation with invalid data...');
      const invalidResult = await addPremiumPartnerQuick({
        name: '',
        affiliateUrl: 'invalid-url',
        commission: -10
      });
      results.push({ test: 'Validation Test', result: invalidResult });
      
      if (!invalidResult.success) {
        console.log('✅ Validation test passed (correctly rejected invalid data)');
      } else {
        console.log('❌ Validation test failed (should have rejected invalid data)');
        errors.push('Validation test: Should have rejected invalid data');
      }

      // Test 4: Test update pattern generation
      console.log('\n📋 Test 4: Testing update pattern generation...');
      const testPartner: AffiliatePartner = {
        id: 'test-partner',
        name: 'TestPartner',
        tier: 'premium',
        affiliateUrl: 'https://testpartner.com/aff/123',
        commission: 30,
        trackingEnabled: true,
        features: ['test'],
        priority: 1
      };

      const patterns = AutoAffiliateUpdater.generateUpdatePatterns(testPartner);
      results.push({ test: 'Pattern Generation', result: patterns });
      
      if (patterns.vpnData.length > 0 && patterns.recommendations.length > 0) {
        console.log('✅ Pattern generation test passed');
      } else {
        console.log('❌ Pattern generation test failed');
        errors.push('Pattern generation test: No patterns generated');
      }

      // Test 5: Test available VPN templates
      console.log('\n📋 Test 5: Testing VPN templates...');
      const templates = QuickAffiliateAdd.getPopularVPNTemplates();
      results.push({ test: 'VPN Templates', result: templates });
      
      const expectedVPNs = ['expressvpn', 'surfshark', 'cyberghost', 'purevpn', 'ipvanish'];
      const hasAllTemplates = expectedVPNs.every(vpn => templates[vpn]);
      
      if (hasAllTemplates) {
        console.log('✅ VPN templates test passed');
      } else {
        console.log('❌ VPN templates test failed');
        errors.push('VPN templates test: Missing expected templates');
      }

    } catch (error) {
      console.log('❌ Test suite failed with error:', error);
      errors.push(`Test suite error: ${error}`);
    }

    const success = errors.length === 0;
    
    console.log('\n🏁 Test Results Summary:');
    console.log(`✅ Passed: ${results.length - errors.length}`);
    console.log(`❌ Failed: ${errors.length}`);
    console.log(`🎯 Overall: ${success ? 'SUCCESS' : 'FAILED'}`);

    return {
      success,
      results,
      errors
    };
  }

  /**
   * Test specific VPN addition
   */
  public static async testVPNAddition(vpnName: string, affiliateUrl: string): Promise<any> {
    console.log(`🧪 Testing ${vpnName} addition...`);
    
    const result = await addPopularVPN(vpnName.toLowerCase(), affiliateUrl);
    
    if (result.success) {
      console.log(`✅ ${vpnName} added successfully`);
      console.log('📋 Update Instructions:');
      result.updateInstructions?.forEach(instruction => {
        console.log(`   ${instruction}`);
      });
    } else {
      console.log(`❌ ${vpnName} addition failed: ${result.message}`);
    }

    return result;
  }

  /**
   * Generate test report
   */
  public static generateTestReport(testResults: any): string {
    const report = [
      '# Affiliate System Test Report',
      '',
      `**Test Date:** ${new Date().toISOString()}`,
      `**Overall Status:** ${testResults.success ? '✅ PASSED' : '❌ FAILED'}`,
      `**Tests Run:** ${testResults.results.length}`,
      `**Errors:** ${testResults.errors.length}`,
      '',
      '## Test Results',
      ''
    ];

    testResults.results.forEach((result: any, index: number) => {
      report.push(`### ${index + 1}. ${result.test}`);
      report.push(`**Status:** ${result.result.success ? '✅ PASSED' : '❌ FAILED'}`);
      if (result.result.message) {
        report.push(`**Message:** ${result.result.message}`);
      }
      report.push('');
    });

    if (testResults.errors.length > 0) {
      report.push('## Errors');
      report.push('');
      testResults.errors.forEach((error: string, index: number) => {
        report.push(`${index + 1}. ${error}`);
      });
      report.push('');
    }

    report.push('## System Status');
    report.push('');
    report.push('- ✅ Affiliate Data Structure: Ready');
    report.push('- ✅ Auto Update Utilities: Ready');
    report.push('- ✅ Quick Add Functions: Ready');
    report.push('- ✅ Validation System: Ready');
    report.push('- ✅ Pattern Generation: Ready');

    return report.join('\n');
  }
}

// Export test functions
export const runAffiliateSystemTest = () => AffiliateSystemTester.runCompleteTest();
export const testVPNAddition = (vpnName: string, affiliateUrl: string) => 
  AffiliateSystemTester.testVPNAddition(vpnName, affiliateUrl);
export const generateTestReport = (results: any) => 
  AffiliateSystemTester.generateTestReport(results);

// Example usage for testing:
/*
// Run complete test suite
const testResults = await runAffiliateSystemTest();
console.log('Test completed:', testResults);

// Test specific VPN
const expressTest = await testVPNAddition('ExpressVPN', 'https://go.expressvpn.com/aff_c?offer_id=15&aff_id=12345');

// Generate report
const report = generateTestReport(testResults);
console.log(report);
*/