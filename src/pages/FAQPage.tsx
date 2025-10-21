import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { insertFAQSchema } from '../utils/faqSchema';
import { faqTranslations } from '../utils/faqTranslations';
import { japaneseVPNFAQs } from '../data/japaneseVPNFAQs';

// Define the structure for Korean FAQs
interface KoreanFAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

// Load Korean FAQs dynamically
const loadKoreanFAQs = (): KoreanFAQ[] => {
  // In a real implementation, this would load from the many Korean FAQ files
  // For now, we'll simulate with a few sample FAQs
  try {
    // This is a simplified version - in reality, you would import or fetch
    // the actual Korean FAQ data from the numerous korean-vpn-faq-*.json files
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

const FAQPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Get FAQs for current language with fallback to English
  const faqs = useMemo(() => {
    let currentFAQs: any[] = [];
    
    // Language-specific FAQ handling
    if (currentLanguage.code === 'ko') {
      // For Korean, load Korean-specific FAQs
      currentFAQs = loadKoreanFAQs();
    } else if (currentLanguage.code === 'ja') {
      // For Japanese, use Japanese-specific FAQs
      currentFAQs = japaneseVPNFAQs.slice(0, 20); // First 20 FAQs
    } else {
      // For other languages, use the standard FAQ translations
      currentFAQs = faqTranslations[currentLanguage.code] || faqTranslations['en'];
    }
    
    // Filter by search term if provided
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      return currentFAQs.filter(faq => 
        faq.question.toLowerCase().includes(term) || 
        faq.answer.toLowerCase().includes(term) ||
        (faq.category && faq.category.toLowerCase().includes(term))
      );
    }
    
    return currentFAQs;
  }, [currentLanguage, searchTerm]);

  // Insert FAQ Schema on component mount and when language changes
  useEffect(() => {
    const faqSchemaData = faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }));
    
    insertFAQSchema(faqSchemaData);
  }, [currentLanguage, faqs]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <Helmet>
        <title>{`${t('faq.title')} | ${t('brand.name')} - ${currentLanguage.name}`}</title>
        <meta name="description" content={t('faq.subtitle')} />
        <meta name="keywords" content={`VPN FAQ, ${t('brand.name')}, VPN questions, VPN help, VPN guide, ${currentLanguage.name}`} />
        <link rel="canonical" href={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}faq`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${t('faq.title')} | ${t('brand.name')}`} />
        <meta property="og:description" content={t('faq.subtitle')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}faq`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${t('faq.title')} | ${t('brand.name')}`} />
        <meta name="twitter:description" content={t('faq.subtitle')} />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4 rounded-2xl mb-8">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl font-bold mb-4">
            {t('faq.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder={t('faq.search')}
              className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Hero Image */}
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="VPN FAQ Help Center" 
            className="w-full max-w-2xl mx-auto mt-8 rounded-xl shadow-2xl"
          />
        </div>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
            >
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{faq.question}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200">
                  {faq.category || 'General'}
                </span>
              </div>
              <div className="flex-shrink-0 ml-4">
                {openItems.includes(faq.id) ? (
                  <ChevronUp className="h-6 w-6 text-blue-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </div>
            </button>
            
            {openItems.includes(faq.id) && (
              <div className="px-6 pb-6 bg-gradient-to-b from-transparent to-gray-50">
                <div className="border-t-2 border-gray-100 pt-5">
                  <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {faqs.length === 0 && (
        <div className="text-center py-12">
          <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">{t('noFaqsFound')}</p>
          <p className="text-gray-400 text-sm mt-2">{t('adjustSearch')}</p>
        </div>
      )}

      {/* Results count */}
      <div className="mt-8 text-center text-sm text-gray-500">
        {t('showingResults').replace('{count}', faqs.length.toString()).replace('{total}', faqs.length.toString())}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-center text-white shadow-2xl">
        <HelpCircle className="w-12 h-12 mx-auto mb-4 text-blue-100" />
        <h2 className="text-2xl font-bold mb-4">{t('stillHaveQuestions')}</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
          {t('cantFindAnswer')}
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
          {t('contactExperts')}
        </button>
      </div>
    </div>
    </>
  );
};

export default FAQPage;