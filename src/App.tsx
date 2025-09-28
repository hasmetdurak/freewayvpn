import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import VPNsPage from './pages/VPNsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
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
            
            {/* Default routes (English) */}
            <Route path="/" element={<VPNsPage />} />
            <Route path="/vpns" element={<VPNsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<DynamicBlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Redirects for language-specific root paths */}
            <Route path="/:lang" element={<Navigate to="/:lang/vpns" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
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