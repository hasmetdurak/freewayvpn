# Technical Context: BestVPN.digital

## Technology Stack

### Frontend Framework
- **React 18.3.1**: Modern React with concurrent features
- **TypeScript 5.5.3**: Type-safe development
- **Vite 5.4.2**: Fast build tool and dev server

### Styling and UI
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Lucide React 0.344.0**: Icon library
- **PostCSS 8.4.35**: CSS processing
- **Autoprefixer 10.4.18**: CSS vendor prefixing

### Routing and Navigation
- **React Router DOM 7.9.1**: Client-side routing
- **React Helmet Async 2.0.5**: Dynamic head management

### Data and State Management
- **React Context API**: Global state management
- **Custom Hooks**: Reusable stateful logic
- **Static Data Files**: JSON/TypeScript data structures

### Development Tools
- **ESLint 9.9.1**: Code linting
- **TypeScript ESLint 8.3.0**: TypeScript-specific linting
- **Vite Plugin React 4.3.1**: React support for Vite

### External Services
- **Google Analytics 4**: Web analytics
- **Supabase 2.57.4**: Backend-as-a-Service (if needed)
- **Axios 1.12.2**: HTTP client
- **Mammoth 1.11.0**: Document processing

## Development Environment

### Prerequisites
- **Node.js**: Version 18+ required
- **npm**: Package manager
- **Git**: Version control

### Local Development Setup
```bash
# Clone repository
git clone <repository-url>
cd bestvpn.digital

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts
```json
{
  "dev": "vite",
  "build": "vite build",
  "build:multilang": "node scripts/build-multilang.js",
  "build:seo": "npm run build && npm run sitemap && npm run rss",
  "lint": "eslint .",
  "preview": "vite preview",
  "sitemap": "node scripts/generate-sitemap.js",
  "rss": "node scripts/generate-rss.js",
  "seo": "npm run sitemap && npm run rss"
}
```

## Build Configuration

### Vite Configuration
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  }
});
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b'
      }
    },
  },
  plugins: [],
}
```

## Deployment Architecture

### Hosting Platform
- **Netlify**: Primary hosting platform
- **Cloudflare**: CDN and edge computing
- **Custom Domain**: bestvpn.digital

### Deployment Process
```bash
# Production deployment
npm run build:seo
netlify deploy --prod

# Or with Vercel
vercel --prod
```

### Environment Configuration
```bash
# Environment variables
NODE_VERSION=18
VITE_SITE_URL=https://bestvpn.digital
```

## Performance Optimization

### Bundle Optimization
- **Code Splitting**: Route-based lazy loading
- **Tree Shaking**: Unused code elimination
- **Minification**: JavaScript and CSS compression
- **Gzip Compression**: Server-side compression

### Asset Optimization
- **Image Optimization**: WebP format with fallbacks
- **Font Loading**: Preload critical fonts
- **CSS Optimization**: Critical CSS inlining
- **JavaScript Optimization**: Async loading for non-critical scripts

### Caching Strategy
```typescript
// Cache headers configuration
const cacheHeaders = {
  static: 'Cache-Control: public, max-age=31536000, immutable',
  html: 'Cache-Control: public, max-age=0, must-revalidate',
  api: 'Cache-Control: public, max-age=3600'
};
```

## SEO Implementation

### Meta Tags Management
```typescript
// SEO utility functions
export const generateMetaTags = (pageData: PageData) => ({
  title: `${pageData.title} | BestVPN.digital`,
  description: pageData.description,
  keywords: pageData.keywords,
  canonical: `https://bestvpn.digital${pageData.path}`,
  ogTitle: pageData.title,
  ogDescription: pageData.description,
  ogImage: pageData.image,
  twitterCard: 'summary_large_image'
});
```

### Sitemap Generation
```javascript
// scripts/generate-sitemap.js
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
        <url>
          <loc>https://bestvpn.digital${url.path}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;
};
```

### Schema Markup
```typescript
// Schema.org structured data
const generateSchemaMarkup = (data: any) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "BestVPN.digital",
  "url": "https://bestvpn.digital",
  "description": "Compare 100+ VPN services with detailed reviews",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://bestvpn.digital/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});
```

## Analytics and Monitoring

### Google Analytics 4
```typescript
// Analytics implementation
export const initAnalytics = (measurementId: string) => {
  gtag('config', measurementId, {
    page_title: document.title,
    page_location: window.location.href
  });
};

export const trackEvent = (eventName: string, parameters: any) => {
  gtag('event', eventName, parameters);
};
```

### Performance Monitoring
```typescript
// Core Web Vitals tracking
export const trackWebVitals = (metric: any) => {
  gtag('event', metric.name, {
    value: Math.round(metric.value),
    event_category: 'Web Vitals',
    event_label: metric.id
  });
};
```

## Security Implementation

### Content Security Policy
```typescript
// CSP headers
const cspHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://www.google-analytics.com"
  ].join('; ')
};
```

### Security Headers
```typescript
// Security headers configuration
const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};
```

## Internationalization

### Language Support
- **22 Languages**: EN, DE, FR, ES, IT, RU, ZH, JA, KO, AR, FA, HI, ID, VI, TR, NB, SV, FI, PL, TH, TL, PT
- **URL Structure**: `/lang/page` format
- **Hreflang Tags**: SEO optimization for multiple languages

### Translation Management
```typescript
// Translation context
interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

// Translation data structure
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.vpns': 'VPNs',
    'nav.blog': 'Blog'
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.vpns': 'VPN\'ler',
    'nav.blog': 'Blog'
  }
};
```

## Data Management

### Static Data Structure
```typescript
// VPN data interface
interface VPNData {
  name: string;
  price: number;
  features: string[];
  rating: number;
  affiliateUrl: string;
  logo: string;
  description: string;
}

// Blog data interface
interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
}
```

### Data Loading Patterns
```typescript
// Data loading utility
export const loadVPNData = async (): Promise<VPNData[]> => {
  try {
    const response = await fetch('/data/vpnData.json');
    return await response.json();
  } catch (error) {
    console.error('Failed to load VPN data:', error);
    return [];
  }
};
```

## Testing Strategy

### Unit Testing
```typescript
// Component testing example
import { render, screen } from '@testing-library/react';
import VPNComparisonTable from './VPNComparisonTable';

describe('VPNComparisonTable', () => {
  it('renders VPN data correctly', () => {
    const mockData = [
      { name: 'NordVPN', price: 3.71, rating: 9.6 }
    ];
    
    render(<VPNComparisonTable data={mockData} />);
    expect(screen.getByText('NordVPN')).toBeInTheDocument();
  });
});
```

### Integration Testing
```typescript
// User journey testing
describe('VPN Selection Flow', () => {
  it('allows user to compare and select VPN', async () => {
    render(<App />);
    
    // Navigate to VPNs page
    fireEvent.click(screen.getByText('VPNs'));
    
    // Select VPN
    fireEvent.click(screen.getByText('NordVPN'));
    
    // Verify affiliate link
    expect(screen.getByRole('link')).toHaveAttribute('href', expect.stringContaining('nordvpn.com'));
  });
});
```

## Browser Support

### Supported Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Progressive Enhancement
- **Core Functionality**: Works without JavaScript
- **Enhanced Features**: JavaScript-enabled improvements
- **Graceful Degradation**: Fallbacks for older browsers

## Development Workflow

### Code Quality
- **ESLint**: Code linting and formatting
- **TypeScript**: Type checking
- **Prettier**: Code formatting (if configured)
- **Husky**: Git hooks for quality checks

### Version Control
- **Git**: Version control system
- **Branching Strategy**: Feature branches with main branch
- **Commit Messages**: Conventional commit format
- **Pull Requests**: Code review process

### Continuous Integration
- **Build Verification**: Automated build testing
- **Lint Checking**: Automated code quality checks
- **Type Checking**: Automated TypeScript validation
- **Deployment**: Automated deployment to staging/production
