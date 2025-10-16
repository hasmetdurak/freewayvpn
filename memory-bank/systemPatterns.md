# System Patterns: BestVPN.digital

## Architecture Overview

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 7.9.1
- **State Management**: React Context API
- **Deployment**: Netlify + Cloudflare Workers
- **Analytics**: Google Analytics 4

### Project Structure
```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts for state management
├── data/              # Static data and configurations
├── hooks/             # Custom React hooks
├── pages/             # Page components and routes
├── utils/             # Utility functions and helpers
└── main.tsx           # Application entry point
```

## Key Design Patterns

### 1. Component Architecture
**Pattern**: Functional Components with Hooks
```typescript
// Standard component structure
const ComponentName: React.FC<Props> = ({ prop1, prop2 }) => {
  const [state, setState] = useState<Type>(initialValue);
  const context = useContext(ContextName);
  
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  );
};
```

### 2. Context Pattern for Global State
**Pattern**: Language and Theme Management
```typescript
// LanguageContext.tsx
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);
```

### 3. Data Management Pattern
**Pattern**: Centralized Static Data
```typescript
// data/vpnData.ts
export interface VPNData {
  name: string;
  price: number;
  features: string[];
  rating: number;
  affiliateUrl: string;
}

export const vpnData: VPNData[] = [
  // VPN data array
];
```

### 4. SEO Pattern
**Pattern**: Dynamic Meta Tags with React Helmet
```typescript
// SEO implementation
<Helmet>
  <title>{t('page.title')}</title>
  <meta name="description" content={t('page.description')} />
  <link rel="canonical" href={canonicalUrl} />
</Helmet>
```

## Component Relationships

### Core Components
1. **Header**: Navigation and language switcher
2. **Footer**: Links and legal information
3. **VPNComparisonTable**: Main comparison interface
4. **AffiliateButton**: Monetization component
5. **BlogPost**: Content display component

### Data Flow
```
User Action → Component → Context → Utility → API/Data
     ↓
State Update → Re-render → UI Update
```

## Critical Implementation Paths

### 1. Multi-language System
**Path**: URL → Language Detection → Context Update → Content Rendering
```typescript
// Language routing pattern
const language = useParams().lang || 'en';
const { setLanguage, t } = useContext(LanguageContext);

useEffect(() => {
  setLanguage(language);
}, [language, setLanguage]);
```

### 2. SEO Optimization
**Path**: Page Load → Meta Tag Generation → Schema Markup → Sitemap
```typescript
// SEO utility pattern
export const generateSEOMeta = (pageData: PageData) => ({
  title: `${pageData.title} | BestVPN.digital`,
  description: pageData.description,
  canonical: `https://bestvpn.digital/${pageData.slug}`,
  hreflang: generateHreflangTags(pageData.slug)
});
```

### 3. Affiliate Integration
**Path**: User Click → Analytics Tracking → Affiliate Redirect
```typescript
// Affiliate tracking pattern
const handleAffiliateClick = (vpnName: string, url: string) => {
  trackEvent('vpn_click', { vpn: vpnName });
  window.open(url, '_blank');
};
```

## Performance Patterns

### 1. Code Splitting
**Pattern**: Route-based Code Splitting
```typescript
// Lazy loading pattern
const BlogPage = lazy(() => import('./pages/BlogPage'));
const VPNsPage = lazy(() => import('./pages/VPNsPage'));
```

### 2. Image Optimization
**Pattern**: Lazy Loading with Placeholders
```typescript
// Image optimization pattern
const OptimizedImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative">
      {!loaded && <div className="skeleton-placeholder" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={loaded ? 'opacity-100' : 'opacity-0'}
        {...props}
      />
    </div>
  );
};
```

### 3. Caching Strategy
**Pattern**: Static Asset Caching
```typescript
// Cache configuration
const cacheConfig = {
  static: '1 year',
  images: '1 year',
  html: 'no-cache',
  api: '1 hour'
};
```

## Security Patterns

### 1. Content Security Policy
**Pattern**: Strict CSP Headers
```typescript
// Security headers
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff'
};
```

### 2. Affiliate Link Security
**Pattern**: Safe External Links
```typescript
// Secure affiliate links
const createAffiliateLink = (url: string) => {
  return {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer sponsored'
  };
};
```

## Error Handling Patterns

### 1. Component Error Boundaries
**Pattern**: Graceful Error Recovery
```typescript
// Error boundary pattern
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
}
```

### 2. API Error Handling
**Pattern**: Consistent Error Responses
```typescript
// API error pattern
const handleApiError = (error: Error) => {
  console.error('API Error:', error);
  // Fallback to cached data or default state
  return fallbackData;
};
```

## Testing Patterns

### 1. Component Testing
**Pattern**: Isolated Component Tests
```typescript
// Component test pattern
describe('VPNComparisonTable', () => {
  it('renders VPN data correctly', () => {
    render(<VPNComparisonTable data={mockVPNData} />);
    expect(screen.getByText('NordVPN')).toBeInTheDocument();
  });
});
```

### 2. Integration Testing
**Pattern**: User Journey Testing
```typescript
// Integration test pattern
describe('VPN Selection Flow', () => {
  it('allows user to compare and select VPN', async () => {
    // Test complete user journey
  });
});
```

## Deployment Patterns

### 1. Build Optimization
**Pattern**: Production Build with Optimization
```bash
# Build command
npm run build:seo  # Includes sitemap and RSS generation
```

### 2. CDN Integration
**Pattern**: Cloudflare + Netlify
```typescript
// CDN configuration
const cdnConfig = {
  staticAssets: 'https://cdn.bestvpn.digital',
  images: 'https://images.bestvpn.digital',
  api: 'https://api.bestvpn.digital'
};
```

## Monitoring Patterns

### 1. Performance Monitoring
**Pattern**: Core Web Vitals Tracking
```typescript
// Performance monitoring
const trackWebVitals = (metric: any) => {
  gtag('event', metric.name, {
    value: Math.round(metric.value),
    event_category: 'Web Vitals'
  });
};
```

### 2. Error Monitoring
**Pattern**: Client-side Error Tracking
```typescript
// Error tracking
window.addEventListener('error', (event) => {
  gtag('event', 'exception', {
    description: event.error?.message,
    fatal: false
  });
});
```

## Scalability Considerations

### 1. Content Management
**Pattern**: Static Content with Dynamic Updates
- Blog posts as static files
- VPN data as JSON files
- Translations as TypeScript objects

### 2. Performance Scaling
**Pattern**: Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced features with JavaScript enabled
- Graceful degradation for older browsers

### 3. International Scaling
**Pattern**: Locale-based Routing
- URL structure: `/lang/page`
- Hreflang tags for SEO
- GeoIP-based language detection
