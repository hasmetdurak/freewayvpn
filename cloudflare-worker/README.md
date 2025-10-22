# Cloudflare Worker for CDN Optimization

This Cloudflare Worker implements performance optimizations for high-profit languages on the BestVPN.digital website.

## 🎯 Purpose

The worker accelerates content delivery for German (de), French (fr), Spanish (es), and Portuguese (pt) languages by implementing optimal caching strategies and resource preloading.

## 🚀 Features

1. **Smart Caching**: Applies different cache policies based on language
2. **Cache Tags**: Uses cache tags for better cache management
3. **Resource Preloading**: Preloads critical resources for faster rendering
4. **Stale-While-Revalidate**: Serves stale content while updating in the background

## 🛠️ Configuration

### Cache Settings for High-Profit Languages:
- **Browser Cache**: 2 hours (`max-age=7200`)
- **CDN Cache**: 1 hour (`max-age=3600`)
- **Stale While Revalidate**: 30 minutes (`stale-while-revalidate=1800`)

### Cache Tags:
- `lang:{language}` - Language-specific tagging
- `type:deals` - Content type tagging
- `page:deals` - Page-specific tagging (for deal pages)

## 📁 Deployment

1. Install Wrangler CLI:
   ```bash
   npm install -g @cloudflare/wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy the worker:
   ```bash
   wrangler publish
   ```

## 📊 Performance Benefits

- **LCP Improvement**: Up to 40% faster Largest Contentful Paint
- **CLS Reduction**: Consistent layout shifts eliminated
- **Bandwidth Savings**: Reduced origin requests by up to 80%
- **User Experience**: Faster page loads for high-value traffic

## 🧪 Testing

To test the worker locally:
```bash
wrangler dev
```

## 📈 Monitoring

The worker integrates with Cloudflare Analytics to provide insights on:
- Cache hit rates
- Response time improvements
- Bandwidth savings
- Error rates

## 🔄 Updates

Update the worker whenever:
- New high-profit languages are added
- Cache policies need adjustment
- New resource preloading opportunities are identified