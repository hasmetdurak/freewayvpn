import { useLanguage } from '../contexts/LanguageContext';
import { blogTranslations } from '../contexts/blogTranslations';

export const useBlogTranslation = (blogKey: string) => {
  const { currentLanguage } = useLanguage();
  
  const getBlogTranslation = (key: string, fallbackKey?: string) => {
    const language = currentLanguage.code;
    const blog = blogTranslations[language]?.[blogKey];
    
    if (!blog) {
      // Fallback to English if current language not available
      const englishBlog = blogTranslations['en']?.[blogKey];
      if (!englishBlog) {
        console.warn(`Blog translation not found for key: ${blogKey}`);
        return fallbackKey || key;
      }
      return englishBlog[key as keyof typeof englishBlog] || fallbackKey || key;
    }
    
    return blog[key as keyof typeof blog] || fallbackKey || key;
  };
  
  const getBlogContent = () => {
    const language = currentLanguage.code;
    const blog = blogTranslations[language]?.[blogKey] || blogTranslations['en']?.[blogKey];
    
    if (!blog) {
      console.warn(`Blog content not found for key: ${blogKey}`);
      return null;
    }
    
    return blog;
  };
  
  return {
    getBlogTranslation,
    getBlogContent,
    currentLanguage: currentLanguage.code
  };
};

export default useBlogTranslation;
