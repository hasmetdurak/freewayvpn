import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyDealsBanner from './components/StickyDealsBanner';
import VPNsPage from './pages/VPNsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import DealsPage from './pages/DealsPage';
import QuizPage from './pages/QuizPage';
import StreamSmartPage from './pages/StreamSmartPage';
import DynamicBlogPost from './components/DynamicBlogPost';

// Language-based routing component
function LanguageRouter() {
  const { lang } = useParams<{ lang: string }>();
  
  // Determine language from URL parameter
  const getLanguageFromUrl = (langParam?: string): string => {
    if (!langParam) return 'en'; // Default to English
    return langParam;
  };

  return (
    <LanguageProvider initialLanguage={getLanguageFromUrl(lang)}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Language-specific routes */}
            <Route path="/:lang/vpns" element={<VPNsPage />} />
            <Route path="/:lang/faq" element={<FAQPage />} />
            <Route path="/:lang/blog" element={<BlogPage />} />
            <Route path="/:lang/blog/:slug" element={<DynamicBlogPost />} />
            <Route path="/:lang/contact" element={<ContactPage />} />
            <Route path="/:lang/deals" element={<DealsPage />} />
            <Route path="/:lang/quiz" element={<QuizPage />} />
            <Route path="/:lang/stream-test" element={<StreamSmartPage />} />
            
            {/* Default routes (English) */}
            <Route path="/" element={<VPNsPage />} />
            <Route path="/vpns" element={<VPNsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<DynamicBlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/stream-test" element={<StreamSmartPage />} />
            
            {/* Redirects for language-specific root paths */}
            <Route path="/:lang" element={<Navigate to="/:lang/vpns" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <StickyDealsBanner />
      </div>
    </LanguageProvider>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LanguageRouter />} />
      </Routes>
    </Router>
  );
}

export default App;