import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import VPNsPage from './pages/VPNsPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('vpns');

  const renderPage = () => {
    switch (currentPage) {
      case 'vpns':
        return <VPNsPage />;
      case 'faq':
        return <FAQPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <VPNsPage />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;