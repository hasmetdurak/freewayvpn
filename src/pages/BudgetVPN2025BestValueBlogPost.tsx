import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { DollarSign, CheckCircle, Clock, Calendar, Users } from 'lucide-react';
import AffiliateButton from '../components/AffiliateButton';

const BudgetVPN2025BestValueBlogPost: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const isKorean = currentLanguage.code === 'ko';

  const getContent = () => {
    if (isKorean) {
      return {
        title: '2025년 가성비 VPN | 월 3,000원대로 만족스러운 서비스 TOP 3',
        metaDescription: '장기 계약 꿀팁 공개. Surfshark, NordVPN, CyberGhost의 가격, 기능, 성능을 종합 분석.',
        content: (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">2025년 가성비 VPN</h1>
              <p className="text-xl text-gray-600 mb-6">월 3,000원대로 만족스러운 서비스 TOP 3</p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" />2025년 2월 4일</div>
                <div className="flex items-center"><Clock className="w-4 h-4 mr-2" />13분 읽기</div>
                <div className="flex items-center"><Users className="w-4 h-4 mr-2" />가성비 분석 팀</div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-8 rounded-xl mb-8 border-2 border-cyan-300">
                  <div className="flex items-center mb-4">
                    <span className="bg-cyan-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-3">1</span>
                    <h3 className="text-2xl font-bold">Surfshark - 무제한 기기, 가성비의 심장</h3>
                  </div>
                  <p className="text-lg mb-4">"월 3,000원대로 가족과 함께, 모든 기기를 보호"</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">월 요금 (2년 플랜)</div>
                      <div className="text-2xl font-bold text-green-600">₩3,200</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">동시 접속</div>
                      <div className="text-2xl font-bold text-cyan-600">무제한</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">가성비</div>
                      <div className="text-2xl font-bold text-yellow-600">★★★★★</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      가성비가 뛰어난 이유
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>무제한 동시 접속:</strong> 스마트폰, 노트북, 태블릿, TV 추가 비용 없이 모두 보호</li>
                      <li><strong>압도적인 장기 할인:</strong> 월 3,000원대는 업계 최저 수준</li>
                      <li><strong>부족하지 않은 성능:</strong> 속도 테스트 상위권, 주요 스트리밍 서비스 우회</li>
                    </ul>
                  </div>

                  <AffiliateButton
                    href="https://surfshark.com/ko?deal=bestvpn-digital-ko"
                    text="Surfshark 가성비 최고 플랜 시작하기"
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg"
                  />
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl mb-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-3">2</span>
                    <h3 className="text-2xl font-bold">NordVPN - 합리적인 투자, 최고의 성능</h3>
                  </div>
                  <p className="text-lg mb-4">"조금만 더 투자해서 최고의 성능과 안정성"</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">월 요금 (2년 플랜)</div>
                      <div className="text-2xl font-bold text-blue-600">₩4,500</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">동시 접속</div>
                      <div className="text-2xl font-bold text-blue-600">10대</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">성능</div>
                      <div className="text-2xl font-bold text-yellow-600">최상</div>
                    </div>
                  </div>

                  <AffiliateButton
                    href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=105790"
                    text="NordVPN 합리적인 플랜 시작하기"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg"
                  />
                </div>
              </section>

              <section className="mb-12 bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-8 h-8 text-green-600 mr-3" />
                  결론: 당신의 지갑과 라이프스타일에 맞는 선택
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>"가성비의 끝을 보고 싶다면?"</strong> → <strong>Surfshark</strong> (무제한 기기와 최저가)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <strong>"조금 더 비싸도 최고를 원한다면?"</strong> → <strong>NordVPN</strong> (합리적인 투자로 최고 만족)
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        )
      };
    }
    
    return {
      title: 'Budget VPN 2025 | Best Value Services',
      metaDescription: 'Affordable VPN services under $3/month.',
      content: (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Budget VPN 2025</h1>
          <p>Full English content coming soon.</p>
        </div>
      )
    };
  };

  const { title, metaDescription, content } = getContent();

  return (
    <>
      <Helmet>
        <title>{title} | BestVPN.digital</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <article className="min-h-screen bg-gray-50 py-8">{content}</article>
    </>
  );
};

export default BudgetVPN2025BestValueBlogPost;

