/**
 * Performance Monitoring & Optimization Utilities
 * Tracks Core Web Vitals and provides performance insights
 */

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

let metrics: PerformanceMetrics = {
  fcp: null,
  lcp: null,
  fid: null,
  cls: null,
  ttfb: null
};

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  if ('PerformanceObserver' in window) {
    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.lcp = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          metrics.fid = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            metrics.cls = clsValue;
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // CLS not supported
    }
  }

  // Navigation Timing API
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        metrics.ttfb = perfData.responseStart - perfData.navigationStart;
        metrics.fcp = perfData.domContentLoadedEventEnd - perfData.navigationStart;

        // Report to analytics
        reportPerformanceMetrics();
      }, 0);
    });
  }
}

/**
 * Report performance metrics to analytics
 */
function reportPerformanceMetrics() {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'performance_metrics', {
    event_category: 'Performance',
    lcp: metrics.lcp,
    fid: metrics.fid,
    cls: metrics.cls,
    ttfb: metrics.ttfb
  });
}

/**
 * Get current performance metrics
 */
export function getPerformanceMetrics(): PerformanceMetrics {
  return { ...metrics };
}

/**
 * Check if performance is good (meets thresholds)
 */
export function isPerformanceGood(): boolean {
  return (
    (metrics.lcp === null || metrics.lcp < 2500) &&
    (metrics.fid === null || metrics.fid < 100) &&
    (metrics.cls === null || metrics.cls < 0.1)
  );
}

/**
 * Lazy load images with IntersectionObserver
 */
export function enableLazyLoading() {
  if (typeof window === 'undefined') return;

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  // Observe all images with data-src
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

/**
 * Prefetch critical resources
 */
export function prefetchCriticalResources(urls: string[]) {
  if (typeof window === 'undefined') return;

  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Preconnect to external domains
 */
export function preconnectDomains(domains: string[]) {
  if (typeof window === 'undefined') return;

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Debounce function for performance
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Initialize all performance optimizations
 */
export function initializePerformanceOptimizations() {
  if (typeof window === 'undefined') return;

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initPerformanceMonitoring();
      enableLazyLoading();
    });
  } else {
    initPerformanceMonitoring();
    enableLazyLoading();
  }

  // Preconnect to critical domains
  preconnectDomains([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com'
  ]);
}

// Auto-initialize
if (typeof window !== 'undefined') {
  initializePerformanceOptimizations();
}

export default {
  initPerformanceMonitoring,
  getPerformanceMetrics,
  isPerformanceGood,
  enableLazyLoading,
  prefetchCriticalResources,
  preconnectDomains,
  debounce,
  throttle,
  initializePerformanceOptimizations
};




