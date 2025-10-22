import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FAQItem } from '../data/faqData';
import { getLocalizedFAQs } from '../utils/contentLocalization';
import { generateBidirectionalLink } from '../utils/contentLinkingUtils';
import Breadcrumb from '../components/Breadcrumb';

const FAQPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [filteredFaqs, setFilteredFaqs] = useState<FAQItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const faqsPerPage = 50; // Show 50 FAQs per page

  useEffect(() => {
    const localizedFAQs = getLocalizedFAQs(currentLanguage.code);
    setFaqs(localizedFAQs);
    setFilteredFaqs(localizedFAQs);
    setCurrentPage(1); // Reset to first page when language changes
  }, [currentLanguage]);

  useEffect(() => {
    let result = faqs;
    
    if (searchTerm) {
      result = result.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'all') {
      result = result.filter(faq => faq.category === selectedCategory);
    }
    
    setFilteredFaqs(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, faqs]);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  // Pagination logic
  const indexOfLastFAQ = currentPage * faqsPerPage;
  const indexOfFirstFAQ = indexOfLastFAQ - faqsPerPage;
  const currentFAQs = filteredFaqs.slice(indexOfFirstFAQ, indexOfLastFAQ);
  const totalPages = Math.ceil(filteredFaqs.length / faqsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of FAQ list when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb 
        items={[
          { label: t('navigation.home'), url: `/${currentLanguage.code}` },
          { label: t('navigation.faq'), url: `/${currentLanguage.code}/faq` }
        ]} 
      />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('faq.title')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('faq.subtitle')}
        </p>
        {filteredFaqs.length > 0 && (
          <p className="text-gray-500 mt-2">
            {t('faq.showingResults', { 
              count: currentFAQs.length, 
              total: filteredFaqs.length 
            })}
          </p>
        )}
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              placeholder={t('faq.searchPlaceholder')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? t('faq.allCategories') : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {currentFAQs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => toggleFaq(faq.id)}
            >
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <svg
                className={`h-5 w-5 text-gray-500 transform transition-transform ${
                  openFaqId === faq.id ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {openFaqId === faq.id && (
              <div className="px-6 pb-6 pt-2 border-t border-gray-200">
                <div 
                  className="prose max-w-none text-gray-600"
                  dangerouslySetInnerHTML={{ __html: faq.answer }} 
                />
                {/* Add bidirectional link to related blog content */}
                <div 
                  className="mt-4"
                  dangerouslySetInnerHTML={{ 
                    __html: generateBidirectionalLink('vpn-guide', currentLanguage.code) 
                  }} 
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md ${
                currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {t('pagination.previous')}
            </button>
            
            {/* Page numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              // Only show first, last, current, and nearby pages
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2)
              ) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-4 py-2 rounded-md ${
                      currentPage === pageNumber
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              } else if (
                pageNumber === currentPage - 3 ||
                pageNumber === currentPage + 3
              ) {
                return (
                  <span key={pageNumber} className="px-2 py-2 text-gray-400">
                    ...
                  </span>
                );
              }
              return null;
            })}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md ${
                currentPage === totalPages 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {t('pagination.next')}
            </button>
          </nav>
        </div>
      )}

      {filteredFaqs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">{t('faq.noResults')}</p>
        </div>
      )}
    </div>
  );
};

export default FAQPage;