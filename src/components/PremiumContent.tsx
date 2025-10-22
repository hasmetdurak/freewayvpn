import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Lock, BookOpen, Award, CreditCard } from 'lucide-react';

const PremiumContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 mb-8">
      <div className="text-center mb-6">
        <Lock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('premiumContent.title') || 'Premium VPN Insights'}</h3>
        <p className="text-gray-600">
          {t('premiumContent.subtitle') || 'Exclusive content for our premium subscribers'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">
            {t('premiumContent.guide') || 'Advanced VPN Guide'}
          </h4>
          <p className="text-sm text-gray-600">
            {t('premiumContent.guideDesc') || 'In-depth tutorials and expert insights'}
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <Award className="h-8 w-8 text-green-600 mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">
            {t('premiumContent.reviews') || 'Premium Reviews'}
          </h4>
          <p className="text-sm text-gray-600">
            {t('premiumContent.reviewsDesc') || 'Exclusive in-depth VPN service reviews'}
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <CreditCard className="h-8 w-8 text-orange-600 mb-2" />
          <h4 className="font-semibold text-gray-900 mb-1">
            {t('premiumContent.deals') || 'Special Deals'}
          </h4>
          <p className="text-sm text-gray-600">
            {t('premiumContent.dealsDesc') || 'Exclusive discounts for subscribers'}
          </p>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
          {t('premiumContent.subscribe') || 'Subscribe for $4.99/month'}
        </button>
        <p className="text-xs text-gray-500 mt-2">
          {t('premiumContent.cancelAnytime') || 'Cancel anytime • 30-day money-back guarantee'}
        </p>
      </div>
    </div>
  );
};

export default PremiumContent;