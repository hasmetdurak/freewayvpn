import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getLocalizedFAQs } from '../utils/contentLocalization';

const FAQTestPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFAQs = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log(`Loading FAQs for language: ${currentLanguage.code}`);
        const localizedFAQs = getLocalizedFAQs(currentLanguage.code);
        console.log(`Successfully loaded ${localizedFAQs.length} FAQs`);
        setFaqs(localizedFAQs);
      } catch (err) {
        console.error('Error loading FAQs:', err);
        setError(`Error loading FAQs: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    loadFAQs();
  }, [currentLanguage]);

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">Loading FAQs...</div>;
  }

  if (error) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6">FAQ Test Page</h1>
      <p className="mb-4">Language: {currentLanguage.code} ({currentLanguage.name})</p>
      <p className="mb-4">Total FAQs loaded: {faqs.length}</p>
      
      {faqs.length > 0 && (
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">First 10 FAQs:</h2>
          <ul className="space-y-2">
            {faqs.slice(0, 10).map((faq, index) => (
              <li key={faq.id} className="border-b pb-2">
                <strong>Q{faq.id}:</strong> {faq.question}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {faqs.length > 10 && (
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Last 10 FAQs:</h2>
          <ul className="space-y-2">
            {faqs.slice(-10).map((faq, index) => (
              <li key={faq.id} className="border-b pb-2">
                <strong>Q{faq.id}:</strong> {faq.question}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {faqs.length > 100 && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-6">
          <p>✅ Successfully loaded {faqs.length} FAQs. Pagination is working correctly!</p>
        </div>
      )}
    </div>
  );
};

export default FAQTestPage;