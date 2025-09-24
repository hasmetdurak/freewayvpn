# 🚀 Kopyala-Yapıştır Hazır Cloudflare Worker Kodu

## 📋 22 Dil Desteği ile Production-Ready Worker

Bu Worker kodu direkt olarak Cloudflare dashboard'dan kopyala-yapıştır yapabilirsin:

```javascript
// 🚀 Production-Ready Cloudflare Worker for GeoIP Language Routing
// 22 dil desteği, bot koruması, country-based cache ile

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Bot kontrolü (Google, Bing, DuckDuckBot, Yandex vb.)
    const ua = request.headers.get("user-agent") || "";
    if (ua.match(/googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot|applebot|discordbot|slackbot|skypeuripreview|viberbot|linebot|kakaotalk|wechatbot|sogou|exabot|ia_archiver|msnbot|yandexbot|ahrefsbot|semrushbot|mj12bot|dotbot|blexbot|petalbot|seznambot/i)) {
      return fetch(request); // Botları yönlendirme - SEO koruması
    }

    // 2. GeoIP tespiti
    const country = request.cf?.country || "US";

    // 3. Cache için country bazlı varyasyon
    const cache = caches.default;
    const cacheKey = `${country}:${url.pathname}`;
    let response = await cache.match(cacheKey);

    if (!response) {
      // 4. Root path yönlendirmesi
      if (url.pathname === "/") {
        let target = "https://bestvpn.digital/en/"; // default
        
        // 22 dil desteği ile ülke-dil eşleştirmesi
        switch (country) {
          // German speaking countries
          case "DE":
          case "AT":
          case "CH":
          case "LI":
            target = "https://bestvpn.digital/de/";
            break;
            
          // Turkish speaking countries
          case "TR":
          case "CY":
            target = "https://bestvpn.digital/tr/";
            break;
            
          // Spanish speaking countries
          case "ES":
          case "MX":
          case "AR":
          case "CO":
          case "PE":
          case "VE":
          case "CL":
          case "EC":
          case "GT":
          case "CU":
          case "BO":
          case "DO":
          case "HN":
          case "PY":
          case "SV":
          case "NI":
          case "CR":
          case "PA":
          case "UY":
          case "PR":
            target = "https://bestvpn.digital/es/";
            break;
            
          // French speaking countries
          case "FR":
          case "BE":
          case "LU":
          case "MC":
          case "SN":
          case "CI":
          case "ML":
          case "BF":
            target = "https://bestvpn.digital/fr/";
            break;
            
          // Italian speaking countries
          case "IT":
          case "SM":
          case "VA":
            target = "https://bestvpn.digital/it/";
            break;
            
          // Portuguese speaking countries
          case "PT":
          case "BR":
          case "AO":
          case "MZ":
          case "CV":
          case "GW":
          case "ST":
          case "TL":
            target = "https://bestvpn.digital/pt/";
            break;
            
          // Russian speaking countries
          case "RU":
          case "BY":
          case "KZ":
          case "KG":
          case "TJ":
          case "UZ":
          case "AM":
          case "AZ":
          case "GE":
          case "MD":
          case "UA":
            target = "https://bestvpn.digital/ru/";
            break;
            
          // Chinese speaking countries/regions
          case "CN":
          case "HK":
          case "TW":
          case "SG":
          case "MO":
            target = "https://bestvpn.digital/zh/";
            break;
            
          // Japanese
          case "JP":
            target = "https://bestvpn.digital/ja/";
            break;
            
          // Korean
          case "KR":
            target = "https://bestvpn.digital/ko/";
            break;
            
          // Arabic speaking countries
          case "SA":
          case "AE":
          case "EG":
          case "IQ":
          case "JO":
          case "LB":
          case "KW":
          case "QA":
          case "BH":
          case "OM":
          case "YE":
          case "SY":
          case "PS":
          case "MA":
          case "DZ":
          case "TN":
          case "LY":
          case "SD":
          case "SO":
          case "DJ":
          case "KM":
          case "MR":
            target = "https://bestvpn.digital/ar/";
            break;
            
          // Persian speaking countries
          case "IR":
          case "AF":
            target = "https://bestvpn.digital/fa/";
            break;
            
          // Nordic countries
          case "NO":
            target = "https://bestvpn.digital/nb/";
            break;
          case "SE":
            target = "https://bestvpn.digital/sv/";
            break;
          case "FI":
            target = "https://bestvpn.digital/fi/";
            break;
          case "DK":
          case "IS":
            target = "https://bestvpn.digital/en/"; // Danish/Icelandic fallback to English
            break;
            
          // Polish
          case "PL":
            target = "https://bestvpn.digital/pl/";
            break;
            
          // Thai
          case "TH":
            target = "https://bestvpn.digital/th/";
            break;
            
          // Vietnamese
          case "VN":
            target = "https://bestvpn.digital/vi/";
            break;
            
          // Filipino
          case "PH":
            target = "https://bestvpn.digital/tl/";
            break;
            
          // Indonesian
          case "ID":
            target = "https://bestvpn.digital/id/";
            break;
            
          // Hindi (India)
          case "IN":
            target = "https://bestvpn.digital/hi/";
            break;
            
          // English speaking countries (default)
          case "US":
          case "GB":
          case "AU":
          case "CA":
          case "NZ":
          case "IE":
          case "ZA":
          default:
            target = "https://bestvpn.digital/en/";
            break;
        }
        
        response = Response.redirect(target, 302);
      } else {
        // Normal sayfa request - pass through
        response = await fetch(request);
      }

      // 5. Cache'e kaydet (1 saat)
      response = new Response(response.body, response);
      response.headers.append("Cache-Control", "max-age=3600");
      response.headers.append("Vary", "CF-IPCountry"); // Country-based cache variation
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    }

    return response;
  }
};
```

## 🎯 Özellikler

### ✅ Bot Koruması
- Googlebot, Bingbot, DuckDuckBot, Yandex vb. redirect edilmez
- SEO kaybı yok
- Social media botları da korunur

### ✅ 22 Dil Desteği
- **Almanca**: DE, AT, CH, LI → `/de/`
- **Türkçe**: TR, CY → `/tr/`
- **İspanyolca**: ES, MX, AR, CO, PE, VE, CL, EC, GT, CU, BO, DO, HN, PY, SV, NI, CR, PA, UY, PR → `/es/`
- **Fransızca**: FR, BE, LU, MC, SN, CI, ML, BF → `/fr/`
- **İtalyanca**: IT, SM, VA → `/it/`
- **Portekizce**: PT, BR, AO, MZ, CV, GW, ST, TL → `/pt/`
- **Rusça**: RU, BY, KZ, KG, TJ, UZ, AM, AZ, GE, MD, UA → `/ru/`
- **Çince**: CN, HK, TW, SG, MO → `/zh/`
- **Japonca**: JP → `/ja/`
- **Korece**: KR → `/ko/`
- **Arapça**: SA, AE, EG, IQ, JO, LB, KW, QA, BH, OM, YE, SY, PS, MA, DZ, TN, LY, SD, SO, DJ, KM, MR → `/ar/`
- **Farsça**: IR, AF → `/fa/`
- **Norveççe**: NO → `/nb/`
- **İsveççe**: SE → `/sv/`
- **Fince**: FI → `/fi/`
- **Lehçe**: PL → `/pl/`
- **Tayca**: TH → `/th/`
- **Vietnamca**: VN → `/vi/`
- **Filipince**: PH → `/tl/`
- **Endonezce**: ID → `/id/`
- **Hintçe**: IN → `/hi/`
- **İngilizce**: US, GB, AU, CA, NZ, IE, ZA → `/en/` (default)

### ✅ Country-Based Cache
- Her ülke için ayrı cache
- Cache çakışması yok
- 1 saat cache süresi
- `Vary: CF-IPCountry` header

### ✅ Performance
- Sadece root path (`/`) redirect edilir
- Diğer sayfalar normal akış
- Async cache operations
- Minimal latency

## 🚀 Deployment Adımları

### 1. Cloudflare Dashboard
1. Cloudflare dashboard'a git
2. "Workers & Pages" → "Create application" → "Worker"
3. Yukarıdaki kodu kopyala-yapıştır
4. "Save and Deploy"

### 2. Route Ayarla
1. Worker'da "Triggers" sekmesi
2. "Add route":
   - **Route**: `bestvpn.digital/*`
   - **Zone**: `bestvpn.digital`

### 3. Cache Rules (Opsiyonel)
1. Cloudflare dashboard'da "Rules" → "Cache Rules"
2. "Create rule":
   - **Condition**: Hostname = bestvpn.digital
   - **Action**: Cache Key → Include Headers → CF-IPCountry

## 🧪 Test Et

### VPN ile Test
```bash
# Almanya VPN ile
curl -H "CF-IPCountry: DE" https://bestvpn.digital/
# → 302 redirect to /de/

# Türkiye VPN ile  
curl -H "CF-IPCountry: TR" https://bestvpn.digital/
# → 302 redirect to /tr/

# Bot simülasyonu
curl -H "User-Agent: Googlebot/2.1" https://bestvpn.digital/
# → No redirect (bot protection)
```

### Browser Test
1. VPN ile farklı ülkelerden siteye git
2. Root path (`/`) otomatik redirect olmalı
3. Bot simülasyonu ile redirect olmamalı

## ⚙️ Özelleştirme

### Cache Süresi Değiştir
```javascript
response.headers.append("Cache-Control", "max-age=7200"); // 2 saat
```

### Yeni Ülke Ekle
```javascript
case "NEW_COUNTRY":
  target = "https://bestvpn.digital/new_lang/";
  break;
```

### Bot Listesi Güncelle
```javascript
if (ua.match(/newbot|anotherbot/i)) {
  return fetch(request);
}
```

## 🎉 Sonuç

Bu Worker ile:
- ✅ **22 dil otomatik yönlendirme**
- ✅ **Bot koruması (SEO güvenli)**
- ✅ **Country-based cache**
- ✅ **Production-ready**
- ✅ **Kopyala-yapıştır hazır**

**Trafik kaybı yok, conversion maksimum!** 🚀
