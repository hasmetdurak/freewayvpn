import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { insertFAQSchema } from '../utils/faqSchema';
import { faqTranslations } from '../utils/faqTranslations';

const FAQPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Get FAQs for current language with fallback to English
  const faqs = faqTranslations[currentLanguage.code] || faqTranslations['en'];

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
                  {faq.category}
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
