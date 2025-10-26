import { faqTranslations } from './faqTranslations';

/**
 * Content Localization Utility
 * 
 * This utility ensures 100% localization by only showing content in the selected language.
 * When a language is selected, only content in that language is displayed.
 */

interface LocalizedFAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  language?: string;
}

interface LocalizedBlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  language?: string;
}

/**
 * Get localized FAQs for a specific language
 * @param languageCode The language code (e.g., 'en', 'ko', 'ja')
 * @returns Array of FAQs in the specified language
 */
export const getLocalizedFAQs = (languageCode: string): LocalizedFAQ[] => {
  return loadLocalizedFAQs(languageCode);
};

/**
 * Load ALL FAQs from all languages
 * @returns Array of all FAQs from all languages
 */
export const getAllFAQs = (): LocalizedFAQ[] => {
  const allFAQs: LocalizedFAQ[] = [];
  const supportedLanguages = ['en', 'ko', 'ja', 'de', 'fr', 'nl', 'nb'];
  
  supportedLanguages.forEach(lang => {
    try {
      const langFAQs = loadLocalizedFAQs(lang);
      // Add language indicator to each FAQ
      const faqsWithLanguage = langFAQs.map(faq => ({
        ...faq,
        language: lang
      }));
      allFAQs.push(...faqsWithLanguage);
    } catch (error) {
      console.warn(`Could not load FAQs for language: ${lang}`, error);
    }
  });
  
  return allFAQs;
};

/**
 * Load FAQs for a specific language
 * @param languageCode The language code (e.g., 'en', 'ko', 'ja')
 * @returns Array of FAQs in the specified language
 */
export const loadLocalizedFAQs = (languageCode: string): LocalizedFAQ[] => {
  try {
    // Language-specific FAQ handling
    switch (languageCode) {
      case 'ko':
        // For Korean, load Korean-specific FAQs
        return loadKoreanFAQs();
      
      case 'ja':
        // For Japanese, use Japanese-specific FAQs
        // Import Japanese FAQs
        const { japaneseVPNFAQs } = require('../data/japaneseVPNFAQs');
        return japaneseVPNFAQs;
      
      case 'de':
        // For German, load German-specific FAQs
        return loadGermanFAQs();
      
      case 'en':
        // For English, load English FAQs
        return faqTranslations.en || [];
      
      case 'fr':
        // For French, load French FAQs if available
        return faqTranslations.fr || [];
      
      case 'nl':
        // For Dutch, load Dutch FAQs if available
        return faqTranslations.nl || [];
      
      case 'nb':
        // For Norwegian, load Norwegian FAQs if available
        return faqTranslations.nb || [];
      
      default:
        // For unsupported languages, return empty array
        return [];
    }
  } catch (error) {
    console.error(`Error loading FAQs for language ${languageCode}:`, error);
    return [];
  }
};

/**
 * Load ALL blog posts from all languages
 * @param blogPosts The main blog posts data
 * @returns Array of all blog posts from all languages
 */
export const getAllBlogPosts = (blogPosts: any[]): LocalizedBlogPost[] => {
  const allPosts: LocalizedBlogPost[] = [];
  const supportedLanguages = ['en', 'ko', 'ja', 'de', 'fr', 'nl', 'nb'];
  
  // Add English posts (base content)
  const englishPosts = blogPosts.map((post, index) => ({
    ...post,
    id: index + 1,
    language: 'en'
  }));
  allPosts.push(...englishPosts);
  
  // Load language-specific posts
  supportedLanguages.forEach(langCode => {
    if (langCode !== 'en') {
      try {
        const localizedPosts = loadLocalizedBlogPosts(langCode, blogPosts);
        // Add language indicator to each post
        const postsWithLanguage = localizedPosts.map(post => ({
          ...post,
          language: langCode
        }));
        allPosts.push(...postsWithLanguage);
      } catch (error) {
        console.warn(`Could not load blog posts for language: ${langCode}`, error);
      }
    }
  });
  
  // Remove duplicates based on slug
  const uniquePosts = Array.from(
    new Map(allPosts.map(post => [post.slug, post])).values()
  );
  
  return uniquePosts;
};

/**
 * Load blog posts for a specific language
 * @param languageCode The language code (e.g., 'en', 'ko', 'ja')
 * @param blogPosts The main blog posts data
 * @returns Array of blog posts in the specified language
 */
export const loadLocalizedBlogPosts = (languageCode: string, blogPosts: any[]): LocalizedBlogPost[] => {
  try {
    // Language-specific content handling
    switch (languageCode) {
      case 'ko':
        // For Korean, use Korean-specific blog data
        const { koreanBlogsData } = require('../data/koreanBlogsContent');
        return koreanBlogsData.map((post: any) => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          author: 'VPN 전문가 팀',
          date: '2025-02-09',
          readTime: '8 min read',
          category: 'VPN Guides',
          tags: ['VPN', 'Korean', 'Guide'],
          image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800',
          featured: post.id <= 20
        }));
      
      case 'ja':
        // For Japanese, use Japanese-specific blog data
        const { japaneseBlogsData } = require('../data/japaneseBlogsContent');
        const japanesePosts = Object.values(japaneseBlogsData);
        return japanesePosts.map((post: any, index: number) => ({
          id: index + 1,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          date: post.publishedAt,
          readTime: post.readTime,
          category: post.category,
          tags: post.tags,
          image: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=800',
          featured: index < 3
        })) || [];
      
      case 'de':
        // Show German-specific posts only when German is selected
        return blogPosts.filter(post =>
          post.slug.includes('deutschland') ||
          post.slug.includes('ard-mediathek') ||
          post.slug.includes('rtl-plus') ||
          post.slug.includes('online-banking') ||
          (post.title && (
            post.title.includes('Deutschland') ||
            post.title.includes('ARD') ||
            post.title.includes('RTL')
          ))
        ).map((post, index) => ({
          ...post,
          id: index + 1
        }));
      
      // Other languages will use the default translation handling
      
      case 'en':
        // For English, show only English-specific posts (exclude all language-specific content)
        return blogPosts.filter(post =>
          // Exclude Korean Archive posts
          post.component !== 'KoreanBlogArchive' &&
          // Exclude German posts
          !post.slug.includes('deutschland') &&
          !post.slug.includes('ard-mediathek') &&
          !post.slug.includes('rtl-plus') &&
          !post.slug.includes('online-banking') &&
          // Exclude other Korean posts
          !post.slug.includes('korea') &&
          !post.slug.includes('wavve') &&
          !post.slug.includes('tving') &&
          !post.slug.includes('coupang-play') &&
          !post.slug.includes('best-vpn-korea-2025') &&
          !post.slug.includes('netflix-working-vpn-2025') &&
          !post.slug.includes('free-vpn-honest-review-2025') &&
          !post.slug.includes('fastest-vpn-2025-ranking') &&
          !post.slug.includes('budget-vpn-2025-best-value') &&
          !post.slug.includes('torrenting-p2p-2025') &&
          !post.slug.includes('gaming-2025') &&
          !post.slug.includes('windows-10-11-2025') &&
          !post.slug.includes('mac-macos-2025') &&
          !(post.title && (
            post.title.includes('Deutschland') ||
            post.title.includes('ARD') ||
            post.title.includes('RTL') ||
            post.title.includes('한국') ||
            post.title.includes('넷플릭스') ||
            post.title.includes('와브') ||
            post.title.includes('티빙') ||
            post.title.includes('쿠팡') ||
            post.title.includes('2025년') ||
            post.title.includes('최고의 VPN') ||
            post.title.includes('무료 VPN') ||
            post.title.includes('가장 빠른') ||
            post.title.includes('가성비') ||
            post.title.includes('토렌트') ||
            post.title.includes('게이머') ||
            post.title.includes('윈도우') ||
            post.title.includes('맥북')
          ))
        ).map((post, index) => ({
          ...post,
          id: index + 1
        }));
      
      case 'fr':
        // For French, show only content that has been translated to French
        return blogPosts
          .filter(post => post.translations?.fr) // Only posts with French translations
          .map(post => {
            const translation = post.translations.fr;
            return {
              ...post,
              title: translation.title,
              excerpt: translation.excerpt,
              category: translation.category,
              tags: translation.tags
            };
          });
      
      case 'nl':
        // For Dutch, show only content that has been translated to Dutch
        return blogPosts
          .filter(post => post.translations?.nl) // Only posts with Dutch translations
          .map(post => {
            const translation = post.translations.nl;
            return {
              ...post,
              title: translation.title,
              excerpt: translation.excerpt,
              category: translation.category,
              tags: translation.tags
            };
          });
      
      case 'nb':
        // For Norwegian, use Norwegian-specific blog data
        const { norwegianBlogsData } = require('../data/norwegianBlogsContent');
        return norwegianBlogsData.map((post: any) => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          date: post.date,
          readTime: post.readTime,
          category: post.category,
          tags: post.tags,
          image: post.image,
          featured: post.featured
        }));
      
      default:
        // For unsupported languages, return empty array
        return [];
    }
  } catch (error) {
    console.error(`Error loading blog posts for language ${languageCode}:`, error);
    return [];
  }
};

/**
 * Load Korean FAQs dynamically
 */
const loadKoreanFAQs = (): LocalizedFAQ[] => {
  try {
    // In a real implementation, this would load from the many Korean FAQ files
    // For now, we'll simulate with sample FAQs
    return [
      {
        id: 1,
        question: "VPN이란 무엇인가요?",
        answer: "VPN(가상 사설망)은 인터넷에서 귀하의 위치와 신원을 숨기는 서비스입니다. 귀하의 인터넷 트래픽을 암호화하고 귀하의 실제 IP 주소를 다른 IP 주소로 바꿉니다.",
        category: "기초"
      },
      {
        id: 2,
        question: "VPN을 사용하는 것이 합법적인가요?",
        answer: "대한민국을 포함한 대부분의 국가에서 VPN 사용은 합법입니다. 그러나 VPN을 사용하여 불법적인 활동을 하는 것은 여전히 불법입니다.",
        category: "법률"
      },
      {
        id: 3,
        question: "VPN은 내 개인정보를 100% 보호할 수 있나요?",
        answer: "VPN은 인터넷 트래픽을 암호화하고 IP 주소를 숨기지만, 100% 보호는 아닙니다. 추가 보안 조치(예: 암호 관리, 정기적인 소프트웨어 업데이트 등)를 함께 사용해야 합니다.",
        category: "보안"
      }
    ];
  } catch (error) {
    console.error('Error loading Korean FAQs:', error);
    return [];
  }
};

/**
 * Load German FAQs from JSON files
 */
const loadGermanFAQs = (): LocalizedFAQ[] => {
  try {
    let germanFAQs: any[] = [];
    
    // Load German FAQ parts
    const faqPart1 = require('../../faq/de/faq-part-001.json');
    const faqPart2 = require('../../faq/de/faq-part-002.json');
    const faqPart3 = require('../../faq/de/faq-part-003.json');
    const faqPart4 = require('../../faq/de/faq-part-004.json');
    const faqPart5 = require('../../faq/de/faq-part-005.json');
    const faqPart6 = require('../../faq/de/faq-part-006.json');
    const faqPart7 = require('../../faq/de/faq-part-007.json');
    const faqPart8 = require('../../faq/de/faq-part-008.json');
    
    // Combine all German FAQs
    germanFAQs.push(...faqPart1);
    germanFAQs.push(...faqPart2);
    germanFAQs.push(...faqPart3);
    germanFAQs.push(...faqPart4);
    germanFAQs.push(...faqPart5);
    germanFAQs.push(...faqPart6);
    germanFAQs.push(...faqPart7);
    germanFAQs.push(...faqPart8);
    
    return germanFAQs;
  } catch (error) {
    console.error('Error loading German FAQs:', error);
    return [];
  }
};

/**
 * Filter content by search term
 * @param content Array of content items (FAQs or blog posts)
 * @param searchTerm Search term to filter by
 * @returns Filtered array of content items
 */
export const filterContentBySearchTerm = (content: any[], searchTerm: string): any[] => {
  if (!searchTerm) return content;
  
  const term = searchTerm.toLowerCase();
  return content.filter(item => 
    item.question?.toLowerCase().includes(term) || 
    item.answer?.toLowerCase().includes(term) ||
    item.title?.toLowerCase().includes(term) ||
    item.excerpt?.toLowerCase().includes(term) ||
    item.category?.toLowerCase().includes(term) ||
    item.tags?.some((tag: string) => tag.toLowerCase().includes(term))
  );
};