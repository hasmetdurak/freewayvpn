/**
 * Google Analytics 4 & Tracking Utilities
 * Comprehensive analytics and conversion tracking
 */

// Google Analytics 4 Types
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * Initialize Google Analytics 4
 */
export function initGA4(measurementId: string = 'G-XXXXXXXXXX') {
  if (typeof window === 'undefined') return;

  // Create gtag function
    window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
      window.dataLayer.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
      page_title: document.title,
    send_page_view: true
  });

  // Analytics initialized (production mode)
}

/**
 * Track page view
 */
export function trackPageView(url: string, title: string) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', 'G-XXXXXXXXXX', {
    page_path: url,
    page_title: title
  });
}

/**
 * Track event
 */
export function trackEvent(
  eventName: string,
  parameters?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, parameters);
}

/**
 * Track VPN click (affiliate conversion)
 */
export function trackVPNClick(vpnName: string, price: number, affiliateUrl: string) {
  trackEvent('vpn_click', {
    event_category: 'Affiliate',
    event_label: vpnName,
    vpn_name: vpnName,
    vpn_price: price,
    affiliate_url: affiliateUrl,
    value: price
  });

  // Also track as conversion
  trackConversion('affiliate_click', {
    currency: 'USD',
    value: price,
    items: [{
      item_name: vpnName,
      item_category: 'VPN Service',
      price: price
    }]
  });
}

/**
 * Track conversion
 */
export function trackConversion(conversionName: string, parameters?: any) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: `AW-XXXXXXXXX/${conversionName}`,
    ...parameters
  });
}

/**
 * Track blog read
 */
export function trackBlogRead(title: string, category: string, readTime: string) {
  trackEvent('blog_read', {
    event_category: 'Content',
    event_label: title,
    blog_title: title,
    blog_category: category,
    reading_time: readTime
  });
}

/**
 * Track search
 */
export function trackSearch(searchTerm: string, resultsCount: number) {
  trackEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount
  });
}

/**
 * Track language change
 */
export function trackLanguageChange(fromLang: string, toLang: string) {
  trackEvent('language_change', {
    event_category: 'User Interaction',
    from_language: fromLang,
    to_language: toLang
  });
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup() {
  trackEvent('newsletter_signup', {
    event_category: 'Lead Generation',
    event_label: 'Newsletter',
    method: 'email'
  });

  // Track as conversion
  trackConversion('newsletter_signup', {
    value: 5 // Estimated lead value
  });
}

/**
 * Track contact form submission
 */
export function trackContactFormSubmit(subject: string) {
  trackEvent('contact_form_submit', {
    event_category: 'Lead Generation',
    event_label: subject,
    form_type: 'Contact'
  });

  // Track as conversion
  trackConversion('contact_form', {
    value: 10 // Estimated lead value
  });
}

/**
 * Track video play (if you add videos)
 */
export function trackVideoPlay(videoTitle: string, videoUrl: string) {
  trackEvent('video_play', {
    event_category: 'Video',
    event_label: videoTitle,
    video_url: videoUrl
  });
}

/**
 * Track file download
 */
export function trackDownload(fileName: string, fileType: string) {
  trackEvent('file_download', {
    event_category: 'Download',
    event_label: fileName,
    file_type: fileType
  });
}

/**
 * Track outbound link click
 */
export function trackOutboundLink(url: string, linkText: string) {
  trackEvent('outbound_link', {
    event_category: 'External Link',
    event_label: linkText,
    outbound_url: url
  });
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(percentage: number) {
  trackEvent('scroll_depth', {
    event_category: 'Engagement',
    scroll_percentage: percentage
  });
}

/**
 * Track time on page
 */
export function trackTimeOnPage(seconds: number) {
  trackEvent('time_on_page', {
    event_category: 'Engagement',
    time_seconds: seconds
  });
}

/**
 * Initialize scroll tracking
 */
export function initScrollTracking() {
  if (typeof window === 'undefined') return;

  const milestones = [25, 50, 75, 100];
  const reached: { [key: number]: boolean } = {};

  const handleScroll = () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    milestones.forEach(milestone => {
      if (scrollPercentage >= milestone && !reached[milestone]) {
        reached[milestone] = true;
        trackScrollDepth(milestone);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Initialize time tracking
 */
export function initTimeTracking() {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();

  const trackTime = () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackTimeOnPage(timeOnPage);
  };

  // Track when user leaves
  window.addEventListener('beforeunload', trackTime);

  // Track every 30 seconds
  setInterval(() => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    if (timeOnPage % 30 === 0) {
      trackTimeOnPage(timeOnPage);
    }
  }, 30000);
}

/**
 * Initialize all analytics
 */
export function initializeAnalytics() {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initGA4();
      initScrollTracking();
      initTimeTracking();
    });
  } else {
    initGA4();
    initScrollTracking();
    initTimeTracking();
  }
}

// Auto-initialize on import
if (typeof window !== 'undefined') {
  initializeAnalytics();
}