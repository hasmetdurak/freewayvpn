import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Download, CheckCircle } from 'lucide-react';

interface EmailSignupProps {
  context?: string;
  className?: string;
}

const EmailSignup: React.FC<EmailSignupProps> = ({ context = 'general', className = '' }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    try {
      // In a real implementation, you would send the email to your email marketing service
      // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email, context }) });
      
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      // Track conversion for analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'email_signup', {
          'event_category': 'engagement',
          'event_label': context,
          'value': 1
        });
      }
    } catch (error) {
      console.error('Email signup error:', error);
      // In a real implementation, you would show an error message
    } finally {
      setIsLoading(false);
    }
  };

  // Get lead magnet title based on context
  const getLeadMagnetTitle = () => {
    switch (context) {
      case 'vpn':
        return t('leadMagnet.vpnTitle') || 'Free VPN Security Guide';
      case 'privacy':
        return t('leadMagnet.privacyTitle') || 'Ultimate Privacy Protection Checklist';
      case 'streaming':
        return t('leadMagnet.streamingTitle') || 'Best VPNs for Streaming 2025';
      default:
        return t('leadMagnet.generalTitle') || 'Free VPN Security Guide';
    }
  };

  // Get lead magnet description based on context
  const getLeadMagnetDescription = () => {
    switch (context) {
      case 'vpn':
        return t('leadMagnet.vpnDescription') || 'Get our comprehensive guide to VPN security with 10 expert tips to protect your online privacy.';
      case 'privacy':
        return t('leadMagnet.privacyDescription') || 'Download our checklist of 25 essential privacy protection techniques for 2025.';
      case 'streaming':
        return t('leadMagnet.streamingDescription') || 'Discover the top 10 VPNs for streaming Netflix, Disney+, and other services without geo-restrictions.';
      default:
        return t('leadMagnet.generalDescription') || 'Get our comprehensive guide to VPN security with 10 expert tips to protect your online privacy.';
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-gradient-to-r from-green-500 to-teal-600 rounded-xl p-6 text-center text-white ${className}`}>
        <CheckCircle className="h-16 w-16 mx-auto mb-4 text-white" />
        <h3 className="text-2xl font-bold mb-2">{t('thankYou')}</h3>
        <p className="mb-4 opacity-90">
          {t('checkYourEmail')}
        </p>
        <p className="text-sm opacity-75">
          {t('didntReceiveEmail')} <a href="#" className="underline hover:no-underline">{t('resendEmail')}</a>
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-6 text-white ${className}`}>
      <div className="flex items-start mb-4">
        <Download className="h-8 w-8 mr-3 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold">{getLeadMagnetTitle()}</h3>
          <p className="opacity-90 mt-1">{getLeadMagnetDescription()}</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-grow">
            <label htmlFor="email" className="sr-only">{t('enterEmail')}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('enterEmail')}
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-75"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('sending')}
              </>
            ) : (
              <>
                <Mail className="h-4 w-4 mr-2" />
                {t('getGuide')}
              </>
            )}
          </button>
        </div>
        <p className="text-xs opacity-75 mt-2 text-center">
          {t('weRespectPrivacy')} <a href="/privacy" className="underline hover:no-underline">{t('privacyPolicy')}</a>
        </p>
      </form>
    </div>
  );
};

export default EmailSignup;