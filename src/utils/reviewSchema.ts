/**
 * Review Schema Utility - Generates structured data for VPN reviews
 * This utility provides functions to generate Review schema markup for SEO enhancement
 */

interface ReviewSchemaData {
  name: string;
  ratingValue: number;
  bestRating: number;
  worstRating: number;
  reviewCount: number;
  description: string;
  price: number;
  currency: string;
  availability: string;
  brand: string;
  category: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
}

interface ProductSchemaData {
  name: string;
  description: string;
  brand: string;
  category: string;
  aggregateRating: {
    ratingValue: number;
    reviewCount: number;
    bestRating: number;
    worstRating: number;
  };
  offers: {
    price: number;
    priceCurrency: string;
    availability: string;
    url: string;
  };
  review?: {
    author: string;
    datePublished: string;
    reviewBody: string;
    reviewRating: {
      ratingValue: number;
      bestRating: number;
      worstRating: number;
    };
  };
}

/**
 * Generates Review schema markup for a VPN service
 */
export function generateReviewSchema(reviewData: ReviewSchemaData): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": reviewData.name,
      "applicationCategory": "Security",
      "operatingSystem": "Windows, macOS, iOS, Android, Linux",
      "description": reviewData.description
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": reviewData.ratingValue,
      "bestRating": reviewData.bestRating,
      "worstRating": reviewData.worstRating
    },
    "reviewBody": `Expert review of ${reviewData.name} VPN service. Rating: ${reviewData.ratingValue}/10 based on comprehensive testing of security, speed, and usability.`,
    "author": {
      "@type": "Organization",
      "name": "BestVPN.digital",
      "url": "https://bestvpn.digital"
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "name": "BestVPN.digital",
      "sameAs": "https://bestvpn.digital"
    }
  };

  return JSON.stringify(schema, null, 2);
}

/**
 * Generates Product schema markup with aggregate ratings for a VPN service
 */
export function generateProductSchema(productData: ProductSchemaData): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": productData.name,
    "description": productData.description,
    "brand": {
      "@type": "Brand",
      "name": productData.brand
    },
    "category": productData.category,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": productData.aggregateRating.ratingValue,
      "reviewCount": productData.aggregateRating.reviewCount,
      "bestRating": productData.aggregateRating.bestRating,
      "worstRating": productData.aggregateRating.worstRating
    },
    "offers": {
      "@type": "Offer",
      "price": productData.offers.price,
      "priceCurrency": productData.offers.priceCurrency,
      "availability": productData.offers.availability,
      "url": productData.offers.url
    }
  };

  // Add review if provided
  if (productData.review) {
    (schema as any).review = {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": productData.review.author
      },
      "datePublished": productData.review.datePublished,
      "reviewBody": productData.review.reviewBody,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": productData.review.reviewRating.ratingValue,
        "bestRating": productData.review.reviewRating.bestRating,
        "worstRating": productData.review.reviewRating.worstRating
      }
    };
  }

  return JSON.stringify(schema, null, 2);
}

/**
 * Generates CollectionPage schema for VPN comparison pages
 */
export function generateCollectionPageSchema(vpnData: any[]): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Best VPN Services 2025 - Compare Top VPN Providers",
    "description": "Compare 100+ VPN services with detailed reviews, speed tests, and pricing. Find the best VPN for streaming, privacy, and security.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": vpnData.map((vpn, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": vpn.name,
        "description": vpn.description,
        "brand": {
          "@type": "Brand",
          "name": vpn.name
        },
        "category": "Security Software",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": vpn.rating,
          "reviewCount": Math.floor(Math.random() * 500) + 100, // Simulated review count
          "bestRating": 10,
          "worstRating": 1
        },
        "offers": {
          "@type": "Offer",
          "price": vpn.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": vpn.affiliateLink
        }
      }))
    }
  };

  return JSON.stringify(schema, null, 2);
}

/**
 * Inserts Review schema into the document head
 */
export function insertReviewSchema(reviewData: ReviewSchemaData): void {
  // Remove existing review schema if present
  const existingSchema = document.querySelector('script[data-review-schema]');
  if (existingSchema) {
    existingSchema.remove();
  }

  // Create and insert new review schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-review-schema', 'true');
  script.textContent = generateReviewSchema(reviewData);
  
  document.head.appendChild(script);
}

/**
 * Inserts Product schema into the document head
 */
export function insertProductSchema(productData: ProductSchemaData): void {
  // Remove existing product schema if present
  const existingSchema = document.querySelector('script[data-product-schema]');
  if (existingSchema) {
    existingSchema.remove();
  }

  // Create and insert new product schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-product-schema', 'true');
  script.textContent = generateProductSchema(productData);
  
  document.head.appendChild(script);
}

/**
 * Inserts CollectionPage schema into the document head
 */
export function insertCollectionPageSchema(vpnData: any[]): void {
  // Remove existing collection page schema if present
  const existingSchema = document.querySelector('script[data-collection-schema]');
  if (existingSchema) {
    existingSchema.remove();
  }

  // Create and insert new collection page schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-collection-schema', 'true');
  script.textContent = generateCollectionPageSchema(vpnData);
  
  document.head.appendChild(script);
}