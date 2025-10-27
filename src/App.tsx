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
import KoreanVPNsPage from './pages/KoreanVPNsPage';
import KoreanFAQPage from './pages/KoreanFAQPage';
import KoreanBlogPage from './pages/KoreanBlogPage';
import JapaneseBlogPage from './pages/JapaneseBlogPage';
import VPNPlansPage from './pages/VPNPlansPage';
import NorwegianBlogPage from './pages/NorwegianBlogPage';

// German Pages
import GermanBlogPage from './pages/GermanBlogPage';
import GermanFAQPage from './pages/GermanFAQPage';
import GermanSitemapPage from './pages/GermanSitemapPage';
import GermanVPNsPage from './pages/GermanVPNsPage';
import GermanContactPage from './pages/GermanContactPage';
import GermanDealsPage from './pages/GermanDealsPage';
import GermanQuizPage from './pages/GermanQuizPage';
import GermanVPNDealsPage from './pages/GermanVPNDealsPage';
import BestVPN2026VergleichBlogPost from './pages/BestVPN2026VergleichBlogPost';

// Spanish Pages
import SpanishVPNDealsPage from './pages/SpanishVPNDealsPage';

// Portuguese Pages
import PortugueseVPNDealsPage from './pages/PortugueseVPNDealsPage';

// Test Pages
import FAQTestPage from './pages/FAQTestPage';

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
            <Route path="/:lang/vpns" element={<GermanVPNsPage />} />
            <Route path="/:lang/faq" element={<GermanFAQPage />} />
            <Route path="/:lang/blog" element={<GermanBlogPage />} />
            <Route path="/:lang/blog/:slug" element={<DynamicBlogPost />} />
            <Route path="/:lang/blog/vpn-vergleich-2026" element={<BestVPN2026VergleichBlogPost />} />
            <Route path="/:lang/contact" element={<GermanContactPage />} />
            <Route path="/:lang/deals" element={<GermanDealsPage />} />
            <Route path="/:lang/quiz" element={<GermanQuizPage />} />
            <Route path="/:lang/stream-test" element={<StreamSmartPage />} />
            <Route path="/:lang/sitemap" element={<GermanSitemapPage />} />
            <Route path="/:lang/vpn-plans" element={<VPNPlansPage />} />
            <Route path="/:lang/vpn-angebote" element={<GermanVPNDealsPage />} />
            
            {/* Spanish routes */}
            <Route path="/:lang/ofertas-vpn" element={<SpanishVPNDealsPage />} />
            
            {/* Portuguese routes */}
            <Route path="/:lang/promocoes-vpn" element={<PortugueseVPNDealsPage />} />
            
            {/* Test routes */}
            <Route path="/:lang/faq-test" element={<FAQTestPage />} />
            
            {/* Korean-specific routes */}
            <Route path="/ko" element={<KoreanVPNsPage />} />
            <Route path="/ko/vpns" element={<KoreanVPNsPage />} />
            <Route path="/ko/faq" element={<KoreanFAQPage />} />
            <Route path="/ko/blog" element={<KoreanBlogPage />} />
            <Route path="/ko/blog/:slug" element={<DynamicBlogPost />} />
            
            {/* Japanese-specific routes */}
            <Route path="/ja" element={<VPNsPage />} />
            <Route path="/ja/vpns" element={<VPNsPage />} />
            <Route path="/ja/faq" element={<FAQPage />} />
            <Route path="/ja/blog" element={<JapaneseBlogPage />} />
            <Route path="/ja/blog/:slug" element={<DynamicBlogPost />} />
            <Route path="/ja/contact" element={<ContactPage />} />
            <Route path="/ja/deals" element={<DealsPage />} />
            <Route path="/ja/quiz" element={<QuizPage />} />
            <Route path="/ja/stream-test" element={<StreamSmartPage />} />
            
            {/* Norwegian-specific routes */}
            <Route path="/nb" element={<VPNsPage />} />
            <Route path="/nb/vpns" element={<VPNsPage />} />
            <Route path="/nb/faq" element={<FAQPage />} />
            <Route path="/nb/blog" element={<NorwegianBlogPage />} />
            <Route path="/nb/blog/:slug" element={<DynamicBlogPost />} />
            <Route path="/nb/contact" element={<ContactPage />} />
            <Route path="/nb/deals" element={<DealsPage />} />
            <Route path="/nb/quiz" element={<QuizPage />} />
            <Route path="/nb/stream-test" element={<StreamSmartPage />} />
            
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
            <Route path="/vpn-plans" element={<VPNPlansPage />} />
            
            {/* Redirects for language-specific root paths */}
            <Route path="/:lang" element={<Navigate to="/:lang/vpns" replace />} />
            
            {/* Catch-all route for 404 */}
            <Route path="*" element={<Navigate to="/vpns" replace />} />
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