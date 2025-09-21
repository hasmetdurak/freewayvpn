import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { LanguageProvider, supportedLanguages } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import VPNsPage from './pages/VPNsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import DynamicBlogPost from './components/DynamicBlogPost';

// Component to handle language-based routing
function LanguageRouter() {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  
  // Check if the language is supported
  const isValidLanguage = lang && supportedLanguages.some(l => l.code === lang);
  
  // If no language or invalid language, redirect to English
  if (!lang || !isValidLanguage) {
    const pathWithoutLang = location.pathname.replace(/^\/[a-z]{2,3}/, '');
    return <Navigate to={`/en${pathWithoutLang || '/'}`} replace />;
  }

  return (
    <LanguageProvider initialLanguage={lang}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<VPNsPage />} />
            <Route path="/vpns" element={<VPNsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<DynamicBlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
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
        {/* Root redirect to English */}
        <Route path="/" element={<Navigate to="/en/" replace />} />
        
        {/* Language-based routes */}
        <Route path="/:lang/*" element={<LanguageRouter />} />
        
        {/* Fallback for any other routes */}
        <Route path="*" element={<Navigate to="/en/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;