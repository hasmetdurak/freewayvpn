import React, { useState } from 'react';
import { Calculator, TrendingDown, Award, AlertCircle } from 'lucide-react';

interface VPNPlan {
  name: string;
  monthly: number;
  yearly: number;
  twoYear: number;
  logo: string;
  color: string;
}

const vpnPlans: VPNPlan[] = [
  {
    name: 'NordVPN',
    monthly: 14000,
    yearly: 7500,
    twoYear: 4500,
    logo: '🛡️',
    color: 'blue'
  },
  {
    name: 'ExpressVPN',
    monthly: 16000,
    yearly: 10000,
    twoYear: 6000,
    logo: '⚡',
    color: 'red'
  },
  {
    name: 'Surfshark',
    monthly: 16000,
    yearly: 5900,
    twoYear: 3200,
    logo: '🦈',
    color: 'green'
  },
  {
    name: 'CyberGhost',
    monthly: 15000,
    yearly: 5500,
    twoYear: 2800,
    logo: '👻',
    color: 'yellow'
  }
];

const VPNPriceCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly' | 'twoYear'>('twoYear');
  const [selectedProviders, setSelectedProviders] = useState<string[]>(['NordVPN', 'ExpressVPN', 'Surfshark']);

  const toggleProvider = (providerName: string) => {
    if (selectedProviders.includes(providerName)) {
      setSelectedProviders(selectedProviders.filter(p => p !== providerName));
    } else {
      setSelectedProviders([...selectedProviders, providerName]);
    }
  };

  const getPrice = (provider: VPNPlan) => {
    switch (selectedPlan) {
      case 'monthly':
        return provider.monthly;
      case 'yearly':
        return provider.yearly;
      case 'twoYear':
        return provider.twoYear;
    }
  };

  const getSavings = (provider: VPNPlan) => {
    const monthlyTotal = provider.monthly;
    const currentPrice = getPrice(provider);
    const savings = ((monthlyTotal - currentPrice) / monthlyTotal) * 100;
    return Math.round(savings);
  };

  const filteredProviders = vpnPlans.filter(p => selectedProviders.includes(p.name));
  const cheapest = filteredProviders.reduce((min, p) => 
    getPrice(p) < getPrice(min) ? p : min
  , filteredProviders[0]);

  return (
    <div className="my-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          💰 VPN 가격 비교 계산기
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          플랜과 VPN을 선택하면 자동으로 최저가를 찾아드립니다
        </p>
      </div>

      {/* Plan Selector */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
          📅 구독 기간 선택
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedPlan === 'monthly'
                ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30'
                : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
            }`}
          >
            <div className="text-sm text-gray-600 dark:text-gray-400">월간</div>
            <div className="font-bold text-lg text-gray-900 dark:text-white">1개월</div>
            <div className="text-xs text-red-600 dark:text-red-400 mt-1">할인 없음</div>
          </button>

          <button
            onClick={() => setSelectedPlan('yearly')}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedPlan === 'yearly'
                ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30'
                : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
            }`}
          >
            <div className="text-sm text-gray-600 dark:text-gray-400">연간</div>
            <div className="font-bold text-lg text-gray-900 dark:text-white">12개월</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">~50% 할인</div>
          </button>

          <button
            onClick={() => setSelectedPlan('twoYear')}
            className={`p-4 rounded-xl border-2 transition-all relative ${
              selectedPlan === 'twoYear'
                ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30'
                : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
            }`}
          >
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              최대 할인!
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">장기</div>
            <div className="font-bold text-lg text-gray-900 dark:text-white">24개월</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">~70% 할인</div>
          </button>
        </div>
      </div>

      {/* Provider Selector */}
      <div className="mb-8">
        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
          🎯 비교할 VPN 선택 (여러 개 선택 가능)
        </label>
        <div className="flex flex-wrap gap-3">
          {vpnPlans.map(provider => (
            <button
              key={provider.name}
              onClick={() => toggleProvider(provider.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${
                selectedProviders.includes(provider.name)
                  ? `border-${provider.color}-600 bg-${provider.color}-50 dark:bg-${provider.color}-900/30`
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
              }`}
            >
              <span className="text-2xl">{provider.logo}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {provider.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filteredProviders.length > 0 ? (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              가격 비교 결과
            </h3>
          </div>

          {filteredProviders
            .sort((a, b) => getPrice(a) - getPrice(b))
            .map((provider, index) => {
              const price = getPrice(provider);
              const savings = getSavings(provider);
              const isCheapest = provider.name === cheapest.name;

              return (
                <div
                  key={provider.name}
                  className={`relative p-6 rounded-xl border-2 transition-all ${
                    isCheapest
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 shadow-lg'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                  }`}
                >
                  {isCheapest && (
                    <div className="absolute -top-3 left-6 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      최저가!
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{provider.logo}</span>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {provider.name}
                        </h4>
                        {savings > 0 && (
                          <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
                            월간 대비 {savings}% 절약
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">
                        ₩{price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        / 월
                      </div>
                      {selectedPlan !== 'monthly' && (
                        <div className="text-xs text-gray-500 mt-1">
                          총 ₩{(price * (selectedPlan === 'yearly' ? 12 : 24)).toLocaleString()}
                        </div>
                      )}
                    </div>
                  </div>

                  {isCheapest && (
                    <div className="mt-4 pt-4 border-t border-green-300 dark:border-green-700">
                      <p className="text-sm text-green-700 dark:text-green-300 font-semibold">
                        ✨ 지금 구매하면 가장 저렴하게 이용할 수 있습니다!
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          {/* Savings Summary */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-2">💡 절약 팁</h4>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• 24개월 플랜이 가장 저렴하지만, 환불 보장 기간을 확인하세요</li>
                  <li>• 대부분 30일 환불 보장이 있어 위험 부담 없이 테스트 가능합니다</li>
                  <li>• 할인 쿠폰이나 프로모션을 추가로 받을 수 있는지 확인하세요</li>
                  <li>• {cheapest.name}이(가) 현재 선택한 조건에서 가장 저렴합니다</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">
            비교할 VPN을 하나 이상 선택해주세요
          </p>
        </div>
      )}
    </div>
  );
};

export default VPNPriceCalculator;

