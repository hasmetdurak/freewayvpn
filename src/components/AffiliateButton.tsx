import React from 'react';
import { ExternalLink, Star, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AffiliateButtonProps {
  provider: string;
  description: string;
  features: string[];
  ctaText: string;
  affiliateUrl: string;
  discount?: string;
  rating?: number;
  className?: string;
}

const AffiliateButton: React.FC<AffiliateButtonProps> = ({
  provider,
  description,
  features,
  ctaText,
  affiliateUrl,
  discount,
  rating = 4.8,
  className = ''
}) => {
  const { t } = useLanguage();
  
  const handleClick = () => {
    // Track affiliate click for analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: provider,
        value: 1
      });
    }
    
    window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`premium-card p-6 my-6 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-6 w-6 text-blue-600" />
            <h4 className="font-bold text-gray-900 text-lg">{t('affiliate.ourRecommendation')}: {provider}</h4>
            {rating && (
              <div className="flex items-center gap-1 ml-auto">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold text-gray-700">{rating}/5</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-700 text-base mb-4 leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {features.map((feature, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full border border-blue-200"
              >
                <Zap className="h-4 w-4" />
                {feature}
              </span>
            ))}
          </div>
          
          {discount && (
            <div className="deal-badge bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg">
              🎉 {discount}
            </div>
          )}
        </div>
      </div>
      
      <button
        onClick={handleClick}
        className="btn-affiliate w-full mt-4"
      >
        {ctaText}
        <ExternalLink className="h-5 w-5 ml-2" />
      </button>
      
      <div className="flex items-center justify-center gap-3 mt-4 text-xs text-gray-600">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          {t('affiliate.moneyBackGuarantee')}
        </span>
        <span className="text-gray-400">•</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          {t('affiliate.noLogsPolicy')}
        </span>
        <span className="text-gray-400">•</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
          {t('affiliate.support247')}
        </span>
      </div>
    </div>
  );
};

export default AffiliateButton;