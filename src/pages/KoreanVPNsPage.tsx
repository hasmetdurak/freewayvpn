import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import KoreanSEO from '../components/KoreanSEO';
import VPNComparisonTable from '../components/VPNComparisonTable';
import PremiumPartnerPromotion from '../components/PremiumPartnerPromotion';
import NaturalAffiliate from '../components/NaturalAffiliate';
import LocalStreamingGuide from '../components/LocalStreamingGuide';

const KoreanVPNsPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  
  // Only render Korean content when Korean is selected
  if (currentLanguage.code !== 'ko') {
    return null;
  }

  const breadcrumbs = [
    { name: '홈', url: 'https://bestvpn.digital/ko' },
    { name: 'VPN 비교', url: 'https://bestvpn.digital/ko/vpns' }
  ];

  return (
    <>
      <KoreanSEO 
        page="vpns" 
        breadcrumbs={breadcrumbs}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "한국 VPN 서비스 비교",
          "description": "한국에서 사용 가능한 최고의 VPN 서비스 비교 및 추천",
          "numberOfItems": 50,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "NordVPN",
              "description": "한국 서버 지원, 빠른 속도, 강력한 보안"
            },
            {
              "@type": "ListItem", 
              "position": 2,
              "name": "ExpressVPN",
              "description": "전 세계 서버, 안정적인 연결, 우수한 고객지원"
            }
          ]
        }}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                한국 최고의 VPN 서비스
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                넷플릭스, 디즈니+, 게임 최적화. 한국 서버 지원으로 빠르고 안전한 인터넷 경험
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                  지금 VPN 비교하기
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                  무료 속도 테스트
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Korean Streaming Services */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                한국 스트리밍 서비스 최적화
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                넷플릭스, 와브, 티빙, 쿠팡플레이 등 한국 인기 스트리밍 서비스에 최적화된 VPN
              </p>
            </div>
            
            <LocalStreamingGuide 
              services={[
                { name: "넷플릭스", description: "한국 콘텐츠 + 해외 콘텐츠", icon: "🎬" },
                { name: "와브", description: "KBS, MBC, SBS 드라마", icon: "📺" },
                { name: "티빙", description: "TVN, JTBC 드라마", icon: "🎭" },
                { name: "쿠팡플레이", description: "독점 드라마 & 영화", icon: "🛒" },
                { name: "디즈니+", description: "마블, 스타워즈 콘텐츠", icon: "🏰" },
                { name: "유튜브 프리미엄", description: "광고 없는 시청", icon: "📱" }
              ]}
              tip="💡 팁: NordVPN이 한국 스트리밍 서비스와 가장 잘 작동합니다. 빠르고 안정적!"
            />
          </div>
        </section>

        {/* VPN Comparison Table */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                VPN 서비스 비교
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                한국에서 테스트한 최고의 VPN 서비스들을 비교해보세요
              </p>
            </div>
            
            <VPNComparisonTable language="ko" />
          </div>
        </section>

        {/* Premium Partner Promotion */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PremiumPartnerPromotion />
          </div>
        </section>

        {/* Natural Affiliate */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <NaturalAffiliate />
          </div>
        </section>

        {/* Korean Gaming Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                한국 게임 최적화
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                리그 오브 레전드, 배틀그라운드, 오버워치 등 한국 인기 게임에 최적화
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold mb-2">게임 최적화</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  한국 게임 서버에 최적화된 VPN으로 낮은 핑과 안정적인 연결
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">빠른 속도</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  한국 서버를 통한 빠른 속도로 게임 지연 없이 플레이
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-2">DDoS 보호</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  DDoS 공격으로부터 보호받으며 안전하게 게임 플레이
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KoreanVPNsPage;
