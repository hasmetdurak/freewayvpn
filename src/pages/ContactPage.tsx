import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageCircle, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptchaVerified(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaVerified) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setCaptchaVerified(false);
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const subjectOptions = [
    t('contact.generalInquiry'),
    t('contact.vpnRecommendation'),
    t('contact.technicalSupport'),
    t('contact.partnershipInquiry'),
    t('contact.pressMedia'),
    t('contact.feedbackSuggestions')
  ];

  return (
    <>
      <Helmet>
        <title>{`${t('contact.title')} | ${t('brand.name')} - ${currentLanguage.name}`}</title>
        <meta name="description" content={t('contact.subtitle')} />
        <meta name="keywords" content={`VPN contact, ${t('brand.name')}, VPN support, VPN help, ${currentLanguage.name}`} />
        <link rel="canonical" href={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}contact`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${t('contact.title')} | ${t('brand.name')}`} />
        <meta property="og:description" content={t('contact.subtitle')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://bestvpn.digital/${currentLanguage.code === 'en' ? '' : currentLanguage.code + '/'}contact`} />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageCircle className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('contactTitle')}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('contactSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.getInTouch')}</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{t('contact.emailSupport')}</p>
                  <p className="text-gray-600">support@bestvpn.digital</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{t('contact.phoneSupport')}</p>
                  <p className="text-gray-600">+1 (828) 555-9876</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">{t('contact.office')}</p>
                  <p className="text-gray-600">
                    742 Guardian Boulevard<br />
                    Goshen, MA 01032<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Assurance */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">{t('contact.privacyFirst')}</h3>
            </div>
            <p className="text-gray-700 text-sm">
              {t('contact.privacyText')}
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.sendMessage')}</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <p className="text-green-800 font-medium">{t('contact.messageSent')}</p>
                  <p className="text-green-700 text-sm mt-1">{t('contact.messageResponse')}</p>
                </div>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                <div>
                  <p className="text-red-800 font-medium">{t('contact.verifyHuman')}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.fullName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.emailAddress')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.subject')} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">{t('contact.selectSubject')}</option>
                  {subjectOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </div>
              
              {/* Simple Captcha */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="captcha"
                  checked={captchaVerified}
                  onChange={handleCaptchaChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="captcha" className="ml-3 text-sm text-gray-700">
                  {t('contact.notRobot')}{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700">{t('contact.privacyPolicy')}</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700">{t('contact.termsOfService')}</a>
                  . *
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || !captchaVerified}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      {t('contact.sendMessageButton')}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.faqTitle')}</h2>
          <p className="text-gray-600">{t('contact.faqSubtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('contact.faq1Title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('contact.faq1Text')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('contact.faq2Title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('contact.faq2Text')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('contact.faq3Title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('contact.faq3Text')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('contact.faq4Title')}</h3>
            <p className="text-gray-600 text-sm">
              {t('contact.faq4Text')}
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('contact.followUs')}</h3>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <div className="text-sm mt-1">{t('contact.newsletter')}</div>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <div className="text-sm mt-1">{t('contact.twitter')}</div>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <div className="text-sm mt-1">{t('contact.facebook')}</div>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <div className="text-sm mt-1">{t('contact.linkedin')}</div>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;