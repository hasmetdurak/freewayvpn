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
      
      default:
        // For other languages, load translated FAQs if available
        return faqTranslations[languageCode] || [];
    }
  } catch (error) {
    console.error(`Error loading FAQs for language ${languageCode}:`, error);
    return [];
  }
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
        const { japaneseBlogsData } = require('../data/japaneseBlogsContent.backup');
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
        }));
      
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
        );
      
      case 'tr':
        // Show Turkish-specific posts only when Turkish is selected
        try {
          const { turkishBlogsData } = require('../data/turkishBlogsContent');
          const turkishPosts = Object.values(turkishBlogsData);
          return turkishPosts.map((post: any, index: number) => ({
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
        } catch (error) {
          console.error('Error loading Turkish blog posts:', error);
          return [];
        }
      
      case 'hi':
        // Hindi content is not yet available
        return [];
      
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
        );
      
      default:
        // For other languages, show only content that has been translated to that language
        return blogPosts
          .filter(post => post.translations?.[languageCode]) // Only posts with translations
          .map(post => {
            const translation = post.translations[languageCode];
            return {
              ...post,
              title: translation.title,
              excerpt: translation.excerpt,
              category: translation.category,
              tags: translation.tags
            };
          });
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
        question: "VPN이 인터넷 속도를 느리게 하나요?",
        answer: "VPN은 암호화 및 서버를 통한 라우팅으로 인해 인터넷 속도를 약간 느리게 할 수 있습니다. 그러나 고품질 VPN은 이러한 영향을 최소화합니다.",
        category: "성능"
      },
      {
        id: 4,
        question: "VPN으로 Netflix를 시청할 수 있나요?",
        answer: "예! VPN을 사용하면 Netflix, Hulu 및 기타 플랫폼의 지리적 제한 콘텐츠에 액세스할 수 있습니다.",
        category: "스트리밍"
      },
      {
        id: 5,
        question: "무료 VPN이 안전한가요?",
        answer: "무료 VPN은 종종 프라이버시를 침해합니다. 프리미엄 VPN은 더 나은 보안과 더 빠른 속도를 제공합니다.",
        category: "가격"
      }
    ];
  } catch (error) {
    console.error('Error loading Korean FAQs:', error);
    return [];
  }
};

/**
 * Load German FAQs from multiple JSON files
 */
const loadGermanFAQs = (): LocalizedFAQ[] => {
  try {
    // Dynamically import all German FAQ JSON files
    const germanFAQs: LocalizedFAQ[] = [];
    
    // Load all German FAQ parts
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
    (item.question && item.question.toLowerCase().includes(term)) || 
    (item.answer && item.answer.toLowerCase().includes(term)) ||
    (item.title && item.title.toLowerCase().includes(term)) ||
    (item.excerpt && item.excerpt.toLowerCase().includes(term)) ||
    (item.category && item.category.toLowerCase().includes(term)) ||
    (item.tags && Array.isArray(item.tags) && item.tags.some((tag: string) => tag.toLowerCase().includes(term)))
  );
};