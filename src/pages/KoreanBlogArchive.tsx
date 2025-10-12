import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { koreanBlogsData } from '../data/koreanBlogsContent';
import { Shield, Globe, Zap, Lock, CheckCircle, AlertTriangle, Star, Users, Clock, Calendar, ExternalLink } from 'lucide-react';
import VPNComparisonTable from '../components/VPNComparisonTable';
import VPNPriceCalculator from '../components/VPNPriceCalculator';
import VPNQuiz from '../components/VPNQuiz';
import YouTubeEmbed from '../components/YouTubeEmbed';

const KoreanBlogArchive: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { currentLanguage } = useLanguage();

  // Find the blog post by slug
  const blogPost = koreanBlogsData.find(post => post.slug === slug);

  // If blog post not found, redirect to blog page
  if (!blogPost) {
    return <Navigate to="/blog" replace />;
  }

  const isKorean = currentLanguage.code === 'ko';

  const getContent = () => {
    if (isKorean) {
      return {
        title: blogPost.title,
        metaDescription: blogPost.excerpt,
        content: (
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-blue-600 mb-4">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">2025년 1월</span>
                <span className="text-gray-400">•</span>
                <Clock className="w-5 h-5" />
                <span className="text-sm">15 min read</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {blogPost.excerpt}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 py-6 border-y border-gray-200 dark:border-gray-700 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">VPN 전문가 팀</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">보안 및 프라이버시 전문가</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      이 글의 핵심 요약
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {blogPost.content}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Quiz */}
              <VPNQuiz />

              {/* Key Features Section */}
              <div className="my-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  핵심 포인트
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Zap className="w-6 h-6 text-yellow-500" />
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">빠른 속도</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      최신 프로토콜 지원으로 기존 인터넷 속도의 90% 이상 유지
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Lock className="w-6 h-6 text-blue-500" />
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">강력한 보안</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      군사급 AES-256 암호화와 독립 감사 통과 No-Logs 정책
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-purple-500" />
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">전 세계 접속</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      90개국 이상의 서버로 어디서나 원하는 콘텐츠 접근
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Star className="w-6 h-6 text-orange-500" />
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">검증된 신뢰</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      수백만 사용자가 선택한 업계 최고 수준의 VPN 서비스
                    </p>
                  </div>
                </div>
              </div>

              {/* VPN Comparison Table */}
              <VPNComparisonTable language="ko" />

              {/* Price Calculator */}
              <VPNPriceCalculator />

              {/* Recommendation Section */}
              <div className="my-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6">추천 VPN 서비스</h2>
                <div className="space-y-6">
                  {/* NordVPN */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">🏆 NordVPN</h3>
                        <p className="text-blue-100">종합 성능 1위 - 속도, 보안, 가성비 모두 완벽</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-blue-100 mb-1">월 요금</div>
                        <div className="text-3xl font-bold">₩4,500</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">NordLynx 프로토콜</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">10대 동시 접속</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">4회 감사 통과</span>
                      </div>
                    </div>
                    <a
                      href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=105790"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-all"
                    >
                      NordVPN 자세히 보기
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* ExpressVPN */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">⚡ ExpressVPN</h3>
                        <p className="text-blue-100">최고의 안정성 - 초보자부터 전문가까지</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-blue-100 mb-1">월 요금</div>
                        <div className="text-3xl font-bold">₩6,000</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Lightway 프로토콜</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">8대 동시 접속</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">30일 환불 보장</span>
                      </div>
                    </div>
                    <a
                      href="https://www.expressvpn.com/order"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-all"
                    >
                      ExpressVPN 자세히 보기
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Surfshark */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">💰 Surfshark</h3>
                        <p className="text-blue-100">가성비 최강 - 무제한 동시 접속</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-blue-100 mb-1">월 요금</div>
                        <div className="text-3xl font-bold">₩3,200</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">WireGuard 프로토콜</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">무제한 접속</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">30일 환불 보장</span>
                      </div>
                    </div>
                    <a
                      href="https://get.surfshark.net/aff_c?offer_id=786&aff_id=24928"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-6 rounded-lg text-center flex items-center justify-center gap-2 transition-all"
                    >
                      Surfshark 자세히 보기
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Warning Section */}
              <div className="my-12 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      ⚠️ 주의사항
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      무료 VPN은 사용자 데이터를 판매하거나 악성코드를 포함할 수 있어 매우 위험합니다. 
                      신뢰할 수 있는 유료 VPN 서비스를 사용하시는 것을 강력히 권장합니다. 
                      대부분의 프리미엄 VPN은 30일 환불 보장을 제공하므로 위험 부담 없이 테스트해보실 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="my-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  자주 묻는 질문 (FAQ)
                </h2>
                <div className="space-y-4">
                  <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                      Q1: VPN 사용이 한국에서 합법인가요?
                    </summary>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      네, 대한민국에서 VPN 사용은 완전히 합법입니다. 개인정보 보호 및 보안 목적의 VPN 사용은 전혀 문제가 되지 않습니다. 
                      다만, VPN을 이용한 불법 활동은 처벌 대상입니다.
                    </p>
                  </details>
                  <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                      Q2: VPN을 사용하면 인터넷 속도가 느려지나요?
                    </summary>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      최신 프리미엄 VPN들은 WireGuard와 같은 최신 프로토콜을 사용하여 속도 저하를 최소화합니다. 
                      NordVPN이나 ExpressVPN의 경우 기존 속도의 90% 이상을 유지하며, 오히려 ISP의 쓰로틀링을 우회하여 더 빨라지는 경우도 있습니다.
                    </p>
                  </details>
                  <details className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                      Q3: 무료 VPN과 유료 VPN의 차이는 무엇인가요?
                    </summary>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      무료 VPN은 데이터 판매, 광고 삽입, 속도 제한 등으로 수익을 창출하며 보안이 취약합니다. 
                      반면 유료 VPN은 강력한 암호화, No-Logs 정책, 빠른 속도, 안정적인 연결을 제공합니다. 
                      개인정보 보호를 위해서는 반드시 신뢰할 수 있는 유료 VPN을 사용해야 합니다.
                    </p>
                  </details>
                </div>
              </div>

              {/* Final CTA */}
              <div className="my-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요!</h2>
                <p className="text-xl text-blue-100 mb-8">
                  30일 환불 보장으로 위험 부담 없이 프리미엄 VPN을 경험해보세요.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=105790"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg text-center flex items-center justify-center gap-2 transition-all"
                  >
                    NordVPN 시작하기
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.expressvpn.com/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg text-center flex items-center justify-center gap-2 transition-all"
                  >
                    ExpressVPN 시작하기
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      };
    }

    // Default English content
    return {
      title: `VPN Guide: ${blogPost.title}`,
      metaDescription: blogPost.excerpt,
      content: (
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-6">{blogPost.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{blogPost.excerpt}</p>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>{blogPost.content}</p>
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <p className="font-semibold">This content is primarily available in Korean. Please switch to Korean language for the full experience.</p>
            </div>
          </div>
        </div>
      )
    };
  };

  const content = getContent();

  return (
    <>
      <Helmet>
        <title>{content.title} | BestVPN.digital</title>
        <meta name="description" content={content.metaDescription} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.metaDescription} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.metaDescription} />
        <link rel="canonical" href={`https://bestvpn.digital/blog/${blogPost.slug}`} />
      </Helmet>

      <article className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        {content.content}
      </article>
    </>
  );
};

export default KoreanBlogArchive;

