import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { quizQuestions, calculateResults, QuizResult } from '../data/quizData';
import { ArrowRight, ArrowLeft, CheckCircle, ExternalLink, Copy, Check, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function QuizPage() {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [results, setResults] = useState<QuizResult[] | null>(null);
  const [email, setEmail] = useState('');
  const [emailSaved, setEmailSaved] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Quiz tamamlandı, sonuçları hesapla
      const calculatedResults = calculateResults(answers);
      setResults(calculatedResults);
      
      // Analytics tracking
      if (window.gtag) {
        window.gtag('event', 'quiz_complete', {
          answers: Object.keys(answers).length
        });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Email kaydetme işlemi (Netlify Functions veya email service)
    setEmailSaved(true);
    
    // Analytics tracking
    if (window.gtag) {
      window.gtag('event', 'quiz_email_capture', {
        email: email
      });
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const trackResultClick = (provider: string) => {
    if (window.gtag) {
      window.gtag('event', 'quiz_aff_click', {
        provider: provider,
        position: results?.findIndex(r => r.provider === provider) || 0
      });
    }
  };

  const currentQuestion = quizQuestions[currentStep];
  const selectedAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  if (results) {
    return (
      <>
        <Helmet>
          <title>{t('metaTitle') || 'VPN Recommendation Quiz - Find Your Perfect VPN'} | BestVPN.digital</title>
          <meta name="description" content={t('metaDescription') || 'Take our smart VPN quiz to get personalized recommendations based on your needs.'} />
        </Helmet>

        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-6 sm:py-8 lg:py-12 px-4">
          <div className="responsive-container max-w-4xl">
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="responsive-heading text-gray-900 mb-2">
                {t('resultsTitle') || 'Perfect Matches Found!'}
              </h1>
              <p className="responsive-subheading text-gray-600">
                {t('resultsSubtitle') || 'Based on your answers, here are your top 3 personalized VPN recommendations'}
              </p>
            </div>

            {/* Email Capture (if not saved) */}
            {!emailSaved && (
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-6 mb-8 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {t('emailCapture') || 'Get Your Results via Email'}
                </h3>
                <p className="mb-4 text-sm">
                  {t('emailCaptureDesc') || 'Receive exclusive deals and updates for your recommended VPNs'}
                </p>
                <form onSubmit={handleEmailSubmit} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('emailPlaceholder') || 'your.email@example.com'}
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-2 border-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-orange-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                </form>
              </div>
            )}

            {/* Results */}
            <div className="space-y-6">
              {results.map((result, index) => (
                <div
                  key={result.provider}
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 transition-all duration-300 ${
                    index === 0 ? 'border-purple-400 ring-4 ring-purple-200' : 'border-gray-200'
                  }`}
                >
                  {index === 0 && (
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 px-4 text-sm font-bold">
                      {t('topMatch') || 'YOUR BEST MATCH'}
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-3xl font-bold text-gray-900">{result.provider}</h2>
                          {index === 0 && <span className="text-3xl">👑</span>}
                        </div>
                        <p className="text-gray-600 mb-4">{result.reason}</p>
                        
                        {/* Match Score */}
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                          <span>{t('matchScore') || 'Match Score'}:</span>
                          <span className="text-lg">{Math.round((result.score / 60) * 100)}%</span>
                        </div>
                      </div>
                      
                      {result.deal && result.deal.discount > 0 && (
                        <div className="text-right">
                          <div className="text-5xl font-black text-orange-600">{result.deal.discount}%</div>
                          <div className="text-sm text-gray-500">{t('deals.off') || 'OFF'}</div>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="bg-blue-50 rounded-xl p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-3">{t('keyFeatures') || 'Key Features'}:</h4>
                      <ul className="space-y-2">
                        {result.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Coupon Code */}
                    {result.deal && result.deal.couponCode && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-dashed border-orange-400 rounded-lg px-4 py-3">
                            <div className="text-xs text-gray-600 mb-1">{t('exclusiveCoupon') || 'Exclusive Coupon'}</div>
                            <div className="text-xl font-mono font-black text-gray-900">{result.deal.couponCode}</div>
                          </div>
                          <button
                            onClick={() => copyCode(result.deal!.couponCode)}
                            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 rounded-lg transition-colors"
                          >
                            {copiedCode === result.deal.couponCode ? (
                              <Check className="w-5 h-5" />
                            ) : (
                              <Copy className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <a
                      href={`/r/aff?to=${encodeURIComponent(result.provider.toLowerCase())}&utm_source=quiz&utm_campaign=recommendation`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackResultClick(result.provider)}
                      className={`block w-full font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl ${
                        index === 0
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                          : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        {t('getThisDeal') || `Get ${result.provider} Now`}
                        <ExternalLink className="w-5 h-5" />
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Retake Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setAnswers({});
                  setResults(null);
                  setEmail('');
                  setEmailSaved(false);
                }}
                className="text-purple-600 hover:text-purple-700 font-semibold underline"
              >
                {t('retake') || 'Retake Quiz'}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{t('metaTitle') || 'VPN Recommendation Quiz'} | BestVPN.digital</title>
        <meta name="description" content={t('metaDescription') || 'Find your perfect VPN in 60 seconds'} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-6 sm:py-8 lg:py-12 px-4">
        <div className="responsive-container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="responsive-heading text-gray-900 mb-2">
              {t('title') || 'Find Your Perfect VPN'}
            </h1>
            <p className="responsive-subheading text-gray-600">
              {t('subtitle') || 'Answer 5 quick questions to get personalized recommendations'}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{t('question') || 'Question'} {currentStep + 1} / {quizQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-full transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="responsive-card rounded-2xl shadow-xl mb-6">
            <div className="text-center mb-6 sm:mb-8">
              <div className="text-4xl sm:text-6xl mb-4">{currentQuestion.icon}</div>
              <h2 className="responsive-heading text-gray-900">{currentQuestion.question}</h2>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(currentQuestion.id, option.id)}
                  className={`touch-target p-4 sm:p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                    selectedAnswer === option.id
                      ? 'border-purple-600 bg-purple-50 ring-4 ring-purple-200'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{option.label}</span>
                    {selectedAnswer === option.id && (
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`mobile-button flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-purple-600 hover:text-purple-700 hover:bg-purple-50'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              {t('back') || 'Back'}
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className={`mobile-button flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all duration-300 w-full sm:w-auto ${
                selectedAnswer
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === quizQuestions.length - 1
                ? t('seeResults') || 'See Results'
                : t('next') || 'Next'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

