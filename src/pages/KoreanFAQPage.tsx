import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import KoreanSEO from '../components/KoreanSEO';
import { faqTranslations } from '../contexts/faqTranslations';

const KoreanFAQPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  // Only render Korean content when Korean is selected
  if (currentLanguage.code !== 'ko') {
    return null;
  }

  const koreanFAQs = faqTranslations.ko || [];
  
  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(koreanFAQs.map(faq => faq.category))];
    return ['전체', ...uniqueCategories];
  }, [koreanFAQs]);

  // Filter FAQs based on search term and category
  const filteredFAQs = useMemo(() => {
    return koreanFAQs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === '전체' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [koreanFAQs, searchTerm, selectedCategory]);

  const breadcrumbs = [
    { name: '홈', url: 'https://bestvpn.digital/ko' },
    { name: '자주 묻는 질문', url: 'https://bestvpn.digital/ko/faq' }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": koreanFAQs.slice(0, 50).map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <KoreanSEO 
        page="faq" 
        breadcrumbs={breadcrumbs}
        structuredData={faqStructuredData}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                VPN 자주 묻는 질문
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                1000개의 자주 묻는 질문과 답변으로 VPN에 대한 모든 것을 알아보세요
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="VPN 관련 질문을 검색해보세요..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Results */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                검색 결과: {filteredFAQs.length}개
              </h2>
              {searchTerm && (
                <p className="text-gray-600 dark:text-gray-300">
                  "{searchTerm}"에 대한 검색 결과입니다.
                </p>
              )}
            </div>

            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Q</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {faq.question}
                      </h3>
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                      <div className="mt-4">
                        <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  검색 결과가 없습니다
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  다른 검색어를 시도해보거나 카테고리를 변경해보세요.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('전체');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  전체 FAQ 보기
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Popular Categories */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                인기 카테고리
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                가장 많이 찾는 VPN 관련 질문들을 카테고리별로 확인해보세요
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(1, 7).map(category => {
                const categoryFAQs = koreanFAQs.filter(faq => faq.category === category);
                return (
                  <div key={category} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {categoryFAQs.length}개의 질문과 답변
                    </p>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      자세히 보기 →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KoreanFAQPage;
