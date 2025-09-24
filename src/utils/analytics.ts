// Analytics & Tracking - GA4 + Hotjar integration
// Advanced tracking for conversion optimization and user behavior analysis

export interface AnalyticsEvent {
  event_name: string;
  parameters: {
    [key: string]: any;
  };
}

export interface ConversionEvent {
  event_name: string;
  value: number;
  currency: string;
  country: string;
  language: string;
  vpn_provider: string;
  plan_type: string;
  user_segment: string;
}

// GA4 Event Tracking
export class GA4Analytics {
  private measurementId: string;
  private isInitialized: boolean = false;

  constructor(measurementId: string) {
    this.measurementId = measurementId;
  }

  // Initialize GA4
  initialize(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;

    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', this.measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        'custom_parameter_1': 'country',
        'custom_parameter_2': 'language',
        'custom_parameter_3': 'vpn_provider'
      }
    });

    this.isInitialized = true;
  }

  // Track page view
  trackPageView(pagePath: string, pageTitle: string, country: string, language: string): void {
    if (!this.isInitialized) return;

    window.gtag('config', this.measurementId, {
      page_path: pagePath,
      page_title: pageTitle,
      custom_map: {
        'country': country,
        'language': language
      }
    });
  }

  // Track VPN affiliate click
  trackVPNClick(vpnProvider: string, country: string, language: string, planType: string): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'vpn_affiliate_click', {
      vpn_provider: vpnProvider,
      country: country,
      language: language,
      plan_type: planType,
      event_category: 'affiliate',
      event_label: `${vpnProvider}_${planType}`,
      value: this.getPlanValue(planType)
    });
  }

  // Track conversion (purchase)
  trackConversion(conversionData: ConversionEvent): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'purchase', {
      transaction_id: this.generateTransactionId(),
      value: conversionData.value,
      currency: conversionData.currency,
      country: conversionData.country,
      language: conversionData.language,
      vpn_provider: conversionData.vpn_provider,
      plan_type: conversionData.plan_type,
      user_segment: conversionData.user_segment
    });
  }

  // Track user engagement
  trackEngagement(action: string, element: string, country: string, language: string): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'user_engagement', {
      engagement_action: action,
      engagement_element: element,
      country: country,
      language: language,
      event_category: 'engagement'
    });
  }

  // Track scroll depth
  trackScrollDepth(depth: number, country: string, language: string): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'scroll_depth', {
      scroll_depth: depth,
      country: country,
      language: language,
      event_category: 'engagement'
    });
  }

  // Track time on page
  trackTimeOnPage(timeInSeconds: number, country: string, language: string): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'time_on_page', {
      time_in_seconds: timeInSeconds,
      country: country,
      language: language,
      event_category: 'engagement'
    });
  }

  // Track FAQ interaction
  trackFAQInteraction(question: string, country: string, language: string): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'faq_interaction', {
      faq_question: question,
      country: country,
      language: language,
      event_category: 'content'
    });
  }

  // Track blog post view
  trackBlogView(blogTitle: string, country: string, language: string): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'blog_view', {
      blog_title: blogTitle,
      country: country,
      language: language,
      event_category: 'content'
    });
  }

  // Track language switch
  trackLanguageSwitch(fromLanguage: string, toLanguage: string, country: string): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'language_switch', {
      from_language: fromLanguage,
      to_language: toLanguage,
      country: country,
      event_category: 'navigation'
    });
  }

  // Track geo detection
  trackGeoDetection(detectedCountry: string, redirectedLanguage: string): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'geo_detection', {
      detected_country: detectedCountry,
      redirected_language: redirectedLanguage,
      event_category: 'geo'
    });
  }

  // Get plan value for tracking
  private getPlanValue(planType: string): number {
    const values: { [key: string]: number } = {
      'monthly': 10,
      'yearly': 50,
      '2year': 80,
      '3year': 120
    };
    return values[planType] || 0;
  }

  // Generate transaction ID
  private generateTransactionId(): string {
    return `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Hotjar Integration
export class HotjarAnalytics {
  private siteId: string;
  private isInitialized: boolean = false;

  constructor(siteId: string) {
    this.siteId = siteId;
  }

  // Initialize Hotjar
  initialize(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;

    // Load Hotjar script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${this.siteId},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.head.appendChild(script);

    this.isInitialized = true;
  }

  // Track user identification
  identify(userId: string, attributes: { [key: string]: any }): void {
    if (!this.isInitialized || !window.hj) return;

    window.hj('identify', userId, attributes);
  }

  // Track custom event
  trackEvent(eventName: string, properties: { [key: string]: any }): void {
    if (!this.isInitialized || !window.hj) return;

    window.hj('event', eventName, properties);
  }

  // Track conversion funnel
  trackFunnelStep(step: string, country: string, language: string): void {
    if (!this.isInitialized || !window.hj) return;

    window.hj('event', 'funnel_step', {
      step: step,
      country: country,
      language: language
    });
  }
}

// Analytics Manager
export class AnalyticsManager {
  private ga4: GA4Analytics;
  private hotjar: HotjarAnalytics;
  private country: string;
  private language: string;

  constructor(ga4MeasurementId: string, hotjarSiteId: string) {
    this.ga4 = new GA4Analytics(ga4MeasurementId);
    this.hotjar = new HotjarAnalytics(hotjarSiteId);
    this.country = 'US';
    this.language = 'en';
  }

  // Initialize all analytics
  initialize(country: string, language: string): void {
    this.country = country;
    this.language = language;
    
    this.ga4.initialize();
    this.hotjar.initialize();
    
    // Track geo detection
    this.ga4.trackGeoDetection(country, language);
  }

  // Track VPN affiliate click
  trackVPNAffiliateClick(vpnProvider: string, planType: string): void {
    this.ga4.trackVPNClick(vpnProvider, this.country, this.language, planType);
    this.hotjar.trackEvent('vpn_affiliate_click', {
      vpn_provider: vpnProvider,
      plan_type: planType,
      country: this.country,
      language: this.language
    });
  }

  // Track conversion
  trackConversion(vpnProvider: string, planType: string, value: number, currency: string): void {
    const conversionData: ConversionEvent = {
      event_name: 'purchase',
      value: value,
      currency: currency,
      country: this.country,
      language: this.language,
      vpn_provider: vpnProvider,
      plan_type: planType,
      user_segment: this.getUserSegment()
    };

    this.ga4.trackConversion(conversionData);
    this.hotjar.trackEvent('conversion', conversionData);
  }

  // Track user engagement
  trackEngagement(action: string, element: string): void {
    this.ga4.trackEngagement(action, element, this.country, this.language);
    this.hotjar.trackEvent('user_engagement', {
      action: action,
      element: element,
      country: this.country,
      language: this.language
    });
  }

  // Track scroll depth
  trackScrollDepth(depth: number): void {
    this.ga4.trackScrollDepth(depth, this.country, this.language);
  }

  // Track time on page
  trackTimeOnPage(timeInSeconds: number): void {
    this.ga4.trackTimeOnPage(timeInSeconds, this.country, this.language);
  }

  // Track FAQ interaction
  trackFAQInteraction(question: string): void {
    this.ga4.trackFAQInteraction(question, this.country, this.language);
    this.hotjar.trackEvent('faq_interaction', {
      question: question,
      country: this.country,
      language: this.language
    });
  }

  // Track blog view
  trackBlogView(blogTitle: string): void {
    this.ga4.trackBlogView(blogTitle, this.country, this.language);
    this.hotjar.trackEvent('blog_view', {
      blog_title: blogTitle,
      country: this.country,
      language: this.language
    });
  }

  // Track language switch
  trackLanguageSwitch(fromLanguage: string, toLanguage: string): void {
    this.ga4.trackLanguageSwitch(fromLanguage, toLanguage, this.country);
    this.hotjar.trackEvent('language_switch', {
      from_language: fromLanguage,
      to_language: toLanguage,
      country: this.country
    });
  }

  // Track funnel step
  trackFunnelStep(step: string): void {
    this.hotjar.trackFunnelStep(step, this.country, this.language);
  }

  // Get user segment based on behavior
  private getUserSegment(): string {
    // This would be determined by user behavior, country, language, etc.
    if (this.country === 'DE') return 'quality_focused';
    if (this.country === 'TR') return 'price_sensitive';
    if (this.country === 'US') return 'premium_seeker';
    if (this.country === 'BR') return 'mobile_first';
    return 'general';
  }

  // Update country and language
  updateLocation(country: string, language: string): void {
    this.country = country;
    this.language = language;
  }
}

// Global analytics instance
export const analytics = new AnalyticsManager(
  process.env.REACT_APP_GA4_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  process.env.REACT_APP_HOTJAR_SITE_ID || '1234567'
);

// React hook for analytics
export function useAnalytics() {
  return {
    trackVPNClick: (vpnProvider: string, planType: string) => 
      analytics.trackVPNAffiliateClick(vpnProvider, planType),
    trackConversion: (vpnProvider: string, planType: string, value: number, currency: string) => 
      analytics.trackConversion(vpnProvider, planType, value, currency),
    trackEngagement: (action: string, element: string) => 
      analytics.trackEngagement(action, element),
    trackFAQInteraction: (question: string) => 
      analytics.trackFAQInteraction(question),
    trackBlogView: (blogTitle: string) => 
      analytics.trackBlogView(blogTitle),
    trackLanguageSwitch: (fromLanguage: string, toLanguage: string) => 
      analytics.trackLanguageSwitch(fromLanguage, toLanguage),
    trackFunnelStep: (step: string) => 
      analytics.trackFunnelStep(step)
  };
}

// Declare global types for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    hj: (...args: any[]) => void;
  }
}
