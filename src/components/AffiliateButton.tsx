import React from 'react';
import { ExternalLink, Star, Shield, Zap } from 'lucide-react';

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
    <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 my-4 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-gray-900">Our Recommendation: {provider}</h4>
            {rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">{rating}/5</span>
              </div>
            )}
          </div>
          
          <p className="text-gray-700 text-sm mb-3">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {features.map((feature, index) => (
              <span 
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
              >
                <Zap className="h-3 w-3" />
                {feature}
              </span>
            ))}
          </div>
          
          {discount && (
            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full inline-block mb-3">
              🎉 {discount}
            </div>
          )}
        </div>
      </div>
      
      <button
        onClick={handleClick}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {ctaText}
        <ExternalLink className="h-4 w-4" />
      </button>
      
      <p className="text-xs text-gray-500 mt-2 text-center">
        30-day money-back guarantee • No-logs policy • 24/7 support
      </p>
    </div>
  );
};

export default AffiliateButton;