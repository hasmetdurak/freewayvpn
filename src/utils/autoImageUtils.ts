/**
 * Auto Image Utils - Automatically generates high-quality images for blog posts
 * This utility provides functions to automatically select appropriate images based on blog content
 * with support for modern image formats (WebP/AVIF) and responsive loading
 */

export interface ImageConfig {
  width: number;
  height: number;
  quality: string;
  category: string;
  keywords: string[];
  format: 'webp' | 'avif' | 'auto'; // Added format support
}

export interface AutoImageResult {
  url: string;
  alt: string;
  title: string;
  category: string;
  format: 'webp' | 'avif' | 'auto'; // Added format to result
}

/**
 * Detect the best image format supported by the user's browser
 */
export function detectBestImageFormat(): 'webp' | 'avif' | 'auto' {
  // In a real implementation, you would detect browser support
  // For now, we'll default to webp as it has wide support
  return 'webp';
}

/**
 * Category-based image mapping for different blog post types
 */
const categoryImageMap: Record<string, string[]> = {
  'Streaming': [
    'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&h=600&q=80', // Netflix streaming
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&h=600&q=80', // TV streaming
    'https://images.unsplash.com/photo-1489599735734-79b4169c2a78?auto=format&fit=crop&w=1200&h=600&q=80', // Entertainment
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&h=600&q=80', // Movie theater
    'https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=1200&h=600&q=80'  // Streaming devices
  ],
  'Gaming': [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&h=600&q=80', // Gaming setup
    'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&h=600&q=80', // Gaming controller
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&h=600&q=80', // Gaming keyboard
    'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&h=600&q=80', // Gaming monitor
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&h=600&q=80'  // Esports
  ],
  'Security': [
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=600&q=80', // Cybersecurity
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=600&q=80', // Digital security
    'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=600&q=80', // Privacy protection
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=600&q=80', // Network security
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=600&q=80'  // Data protection
  ],
  'Privacy': [
    'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&h=600&q=80', // Privacy shield
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=600&q=80', // Digital privacy
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=600&q=80', // Online privacy
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=600&q=80', // Data privacy
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=600&q=80'  // Internet privacy
  ],
  'Business': [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=600&q=80', // Business meeting
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=600&q=80', // Office work
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=600&q=80', // Business technology
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&h=600&q=80', // Corporate
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=600&q=80'  // Enterprise
  ],
  'Technical': [
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&h=600&q=80', // Code/Programming
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=600&q=80', // Technology
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=600&q=80', // Tech setup
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=600&q=80', // Network tech
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&h=600&q=80'  // Computer tech
  ],
  'Comparison': [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600&q=80', // Analytics/Charts
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=600&q=80', // Data comparison
    'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1200&h=600&q=80', // Business analysis
    'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&h=600&q=80', // Performance metrics
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=600&q=80'  // Comparison charts
  ],
  'Performance': [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600&q=80', // Performance charts
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=600&q=80', // Speed metrics
    'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&h=600&q=80', // Performance analysis
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&h=600&q=80', // Tech performance
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=600&q=80'  // System performance
  ],
  'Guides': [
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=600&q=80', // Tutorial/Guide
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=600&q=80', // Learning
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=600&q=80', // Step by step
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=600&q=80', // How-to guide
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=600&q=80'  // Instructions
  ],
  'Education': [
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=600&q=80', // Education
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=600&q=80', // Learning
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=600&q=80', // Knowledge
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&h=600&q=80', // Study
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=600&q=80'  // Research
  ]
};

/**
 * Keyword-based image selection for more specific content
 */
const keywordImageMap: Record<string, string> = {
  'netflix': 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&h=600&q=80',
  'gaming': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&h=600&q=80',
  'mobile legends': 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&h=600&q=80',
  'pubg': 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&h=600&q=80',
  'korean drama': 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&h=600&q=80',
  'anime': 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&h=600&q=80',
  'china': 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&h=600&q=80',
  'business': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=600&q=80',
  'macbook': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&h=600&q=80',
  'linux': 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&h=600&q=80',
  'speed test': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600&q=80',
  'comparison': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=600&q=80'
};

/**
 * Generates an appropriate image for a blog post based on its content
 * with support for modern image formats
 */
export function generateAutoImage(
  title: string,
  category: string,
  tags: string[],
  excerpt?: string,
  preferredFormat: 'webp' | 'avif' | 'auto' = 'auto'
): AutoImageResult {
  const lowerTitle = title.toLowerCase();
  const lowerTags = tags.map(tag => tag.toLowerCase());
  const lowerExcerpt = excerpt?.toLowerCase() || '';
  
  // Determine the best format to use
  const format = preferredFormat === 'auto' ? detectBestImageFormat() : preferredFormat;
  
  // First, try to match specific keywords
  for (const [keyword, imageUrl] of Object.entries(keywordImageMap)) {
    if (lowerTitle.includes(keyword) || lowerTags.some(tag => tag.includes(keyword)) || lowerExcerpt.includes(keyword)) {
      // Add format parameter to URL
      const formatParam = format !== 'auto' ? `&fm=${format}` : '';
      const optimizedUrl = `${imageUrl}${formatParam}`;
      
      return {
        url: optimizedUrl,
        alt: `${title} - ${keyword} related image`,
        title: `High-quality image for ${title}`,
        category: keyword,
        format: format
      };
    }
  }
  
  // If no specific keyword match, use category-based selection
  const categoryImages = categoryImageMap[category];
  if (categoryImages && categoryImages.length > 0) {
    // Use a simple hash of the title to consistently select the same image for the same post
    const titleHash = title.split('').reduce((hash, char) => {
      return ((hash << 5) - hash) + char.charCodeAt(0);
    }, 0);
    const imageIndex = Math.abs(titleHash) % categoryImages.length;
    
    // Add format parameter to URL
    const formatParam = format !== 'auto' ? `&fm=${format}` : '';
    const optimizedUrl = `${categoryImages[imageIndex]}${formatParam}`;
    
    return {
      url: optimizedUrl,
      alt: `${title} - ${category} category image`,
      title: `Professional ${category.toLowerCase()} image for ${title}`,
      category: category.toLowerCase(),
      format: format
    };
  }
  
  // Fallback to a general tech/VPN image
  const fallbackImage = 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=600&q=80';
  const formatParam = format !== 'auto' ? `&fm=${format}` : '';
  const optimizedUrl = `${fallbackImage}${formatParam}`;
  
  return {
    url: optimizedUrl,
    alt: `${title} - VPN and technology image`,
    title: `Professional image for ${title}`,
    category: 'technology',
    format: format
  };
}

/**
 * Generates a hero image component JSX string for blog posts
 * with responsive image loading
 */
export function generateHeroImageJSX(
  title: string,
  category: string,
  tags: string[],
  excerpt?: string
): string {
  const imageData = generateAutoImage(title, category, tags, excerpt);
  
  return `        {/* Auto-generated Hero Image */}
        <div className="mb-8">
          <img
            src="${imageData.url}"
            alt="${imageData.alt}"
            title="${imageData.title}"
            className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>`;
}

/**
 * Generates inline image JSX for content sections
 * with lazy loading
 */
export function generateInlineImageJSX(
  title: string,
  category: string,
  tags: string[],
  sectionTitle?: string
): string {
  const imageData = generateAutoImage(title, category, tags);
  
  return `        <div className="my-8">
          <img
            src="${imageData.url}"
            alt="${sectionTitle ? `${sectionTitle} - ${imageData.alt}` : imageData.alt}"
            title="${imageData.title}"
            className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
            loading="lazy"
            decoding="async"
          />
        </div>`;
}

/**
 * Generates responsive image set for different screen sizes
 */
export function generateResponsiveImageSet(
  baseImageUrl: string,
  sizes: number[] = [320, 640, 768, 1024, 1280, 1536]
): string {
  return sizes.map(size => 
    `${baseImageUrl}&w=${size} ${size}w`
  ).join(', ');
}

/**
 * Updates blog data with auto-generated images
 */
export function updateBlogPostWithAutoImage(blogPost: any): any {
  if (!blogPost.image || blogPost.image.includes('placeholder')) {
    const autoImage = generateAutoImage(
      blogPost.title,
      blogPost.category,
      blogPost.tags,
      blogPost.excerpt
    );
    
    return {
      ...blogPost,
      image: autoImage.url
    };
  }
  
  return blogPost;
}