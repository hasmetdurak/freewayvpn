import React, { useState } from 'react';
import { HelpCircle, ArrowRight, ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    icon: string;
  }[];
}

interface QuizResult {
  vpn: string;
  logo: string;
  score: number;
  title: string;
  description: string;
  pros: string[];
  price: string;
  affiliateUrl: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: '💰 VPN에 얼마를 지출할 수 있나요?',
    options: [
      { text: '월 3,000원 미만 (가성비 중시)', value: 'budget', icon: '💵' },
      { text: '월 4,000-6,000원 (합리적)', value: 'mid', icon: '💳' },
      { text: '월 6,000원 이상 (프리미엄)', value: 'premium', icon: '💎' }
    ]
  },
  {
    id: 2,
    question: '📱 몇 대의 기기를 동시에 사용하나요?',
    options: [
      { text: '1-2대 (개인 사용)', value: 'single', icon: '📱' },
      { text: '3-5대 (소규모)', value: 'family', icon: '👨‍👩‍👧' },
      { text: '6대 이상 (가족 전체)', value: 'unlimited', icon: '🏠' }
    ]
  },
  {
    id: 3,
    question: '🎯 VPN의 주요 사용 목적은?',
    options: [
      { text: '넷플릭스/스트리밍', value: 'streaming', icon: '📺' },
      { text: '토렌트/P2P 다운로드', value: 'torrenting', icon: '⬇️' },
      { text: '게임 (핑 감소)', value: 'gaming', icon: '🎮' },
      { text: '보안/프라이버시', value: 'security', icon: '🔒' }
    ]
  },
  {
    id: 4,
    question: '🌍 어느 지역의 콘텐츠에 접근하나요?',
    options: [
      { text: '한국 콘텐츠 (티빙, 웨이브)', value: 'korea', icon: '🇰🇷' },
      { text: '미국 콘텐츠 (Hulu, HBO)', value: 'us', icon: '🇺🇸' },
      { text: '일본 콘텐츠 (애니메이션)', value: 'japan', icon: '🇯🇵' },
      { text: '전 세계 (다양한 국가)', value: 'global', icon: '🌏' }
    ]
  },
  {
    id: 5,
    question: '⚙️ 기술적 경험 수준은?',
    options: [
      { text: '초보자 (쉬운 사용 중시)', value: 'beginner', icon: '👶' },
      { text: '중급자 (기본 설정 가능)', value: 'intermediate', icon: '👨‍💼' },
      { text: '고급자 (세부 설정 선호)', value: 'advanced', icon: '🧙' }
    ]
  }
];

const calculateResult = (answers: { [key: number]: string }): QuizResult => {
  const scores: { [key: string]: number } = {
    nordvpn: 0,
    expressvpn: 0,
    surfshark: 0,
    cyberghost: 0
  };

  // Budget scoring
  if (answers[1] === 'budget') {
    scores.surfshark += 3;
    scores.cyberghost += 2;
  } else if (answers[1] === 'mid') {
    scores.nordvpn += 3;
    scores.surfshark += 2;
  } else if (answers[1] === 'premium') {
    scores.expressvpn += 3;
    scores.nordvpn += 2;
  }

  // Devices scoring
  if (answers[2] === 'single') {
    scores.expressvpn += 2;
    scores.nordvpn += 2;
  } else if (answers[2] === 'unlimited') {
    scores.surfshark += 3;
  }

  // Purpose scoring
  if (answers[3] === 'streaming') {
    scores.expressvpn += 2;
    scores.cyberghost += 2;
    scores.nordvpn += 1;
  } else if (answers[3] === 'torrenting') {
    scores.nordvpn += 3;
  } else if (answers[3] === 'gaming') {
    scores.nordvpn += 3;
    scores.expressvpn += 2;
  } else if (answers[3] === 'security') {
    scores.nordvpn += 3;
    scores.expressvpn += 2;
  }

  // Region scoring
  if (answers[4] === 'korea') {
    scores.nordvpn += 2;
    scores.expressvpn += 2;
  } else if (answers[4] === 'global') {
    scores.expressvpn += 2;
    scores.nordvpn += 2;
  }

  // Experience scoring
  if (answers[5] === 'beginner') {
    scores.expressvpn += 2;
    scores.cyberghost += 2;
  } else if (answers[5] === 'advanced') {
    scores.nordvpn += 2;
  }

  // Find winner
  const winner = Object.keys(scores).reduce((a, b) => 
    scores[a] > scores[b] ? a : b
  );

  const results: { [key: string]: QuizResult } = {
    nordvpn: {
      vpn: 'NordVPN',
      logo: '🛡️',
      score: scores.nordvpn,
      title: '당신에게 NordVPN을 추천합니다!',
      description: '속도, 보안, 안정성의 완벽한 조화. 게임, 스트리밍, 토렌트 모두에 최적화된 올라운더 VPN입니다.',
      pros: [
        'NordLynx 프로토콜로 업계 최고 속도',
        '한국 서버 다수 보유 (서울, 부산)',
        'CyberSec 광고 차단 기능',
        '10대 동시 접속 지원',
        '24/7 한국어 고객 지원'
      ],
      price: '₩4,500/월',
      affiliateUrl: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=105790'
    },
    expressvpn: {
      vpn: 'ExpressVPN',
      logo: '⚡',
      score: scores.expressvpn,
      title: '당신에게 ExpressVPN을 추천합니다!',
      description: '초보자부터 전문가까지, 가장 쉽고 안정적인 VPN. MediaStreamer로 스마트 TV에서도 완벽 지원.',
      pros: [
        '업계 최고 수준의 안정성',
        'Lightway 프로토콜로 빠른 연결',
        'MediaStreamer (Smart TV 지원)',
        '5분 만에 설정 완료 가능',
        'Split tunneling 지원'
      ],
      price: '₩6,000/월',
      affiliateUrl: 'https://www.expressvpn.com/order'
    },
    surfshark: {
      vpn: 'Surfshark',
      logo: '🦈',
      score: scores.surfshark,
      title: '당신에게 Surfshark를 추천합니다!',
      description: '가성비 최강! 무제한 기기 동시 접속으로 가족 모두가 함께 사용하기 완벽한 VPN입니다.',
      pros: [
        '무제한 동시 접속 (기기 제한 없음)',
        '월 3,200원으로 가장 저렴',
        'CleanWeb 광고/멀웨어 차단',
        '전 세계 100개국 서버',
        '30일 환불 보장'
      ],
      price: '₩3,200/월',
      affiliateUrl: 'https://get.surfshark.net/aff_c?offer_id=786&aff_id=24928'
    },
    cyberghost: {
      vpn: 'CyberGhost',
      logo: '👻',
      score: scores.cyberghost,
      title: '당신에게 CyberGhost를 추천합니다!',
      description: '스트리밍 전문! 원클릭 버튼으로 넷플릭스, 디즈니+ 등을 즉시 접속. 45일 환불 보장으로 부담 없이 시작.',
      pros: [
        'OTT별 최적화 서버 (넷플릭스, 디즈니+)',
        '원클릭 스트리밍 버튼',
        '45일 환불 보장 (업계 최장)',
        '초보자 친화적 UI',
        '자동 킬 스위치'
      ],
      price: '₩2,800/월',
      affiliateUrl: 'https://www.cyberghostvpn.com'
    }
  };

  return results[winner];
};

const VPNQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // Calculate result
      const finalResult = calculateResult(newAnswers);
      setResult(finalResult);
      setShowResult(true);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult && result) {
    return (
      <div className="my-12 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          {/* Result Header */}
          <div className="text-center mb-8">
            <div className="text-8xl mb-4">{result.logo}</div>
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {result.title}
            </h2>
            <p className="text-xl text-blue-100">
              {result.description}
            </p>
          </div>

          {/* Pros */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              왜 {result.vpn}인가요?
            </h3>
            <ul className="space-y-3">
              {result.pros.map((pro, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">✓</span>
                  <span className="text-blue-100">{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-blue-200 mb-1">추천 플랜 가격</div>
                <div className="text-4xl font-bold">{result.price}</div>
                <div className="text-sm text-blue-200 mt-1">24개월 플랜 기준</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-green-400 font-semibold mb-2">
                  최대 70% 할인
                </div>
                <div className="text-sm text-blue-200">
                  30일 환불 보장
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a
              href={result.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-xl text-center hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              {result.vpn} 30일 무료 체험 시작하기
              <ExternalLink className="w-5 h-5" />
            </a>
            
            <button
              onClick={restartQuiz}
              className="block w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-xl text-center transition-all"
            >
              🔄 다시 테스트하기
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-blue-200 mt-6">
            💡 이 결과는 당신의 응답을 기반으로 한 추천입니다. 
            모든 VPN은 30일 환불 보장이 있어 위험 부담 없이 테스트할 수 있습니다.
          </p>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="my-12 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 md:p-8 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <HelpCircle className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  VPN 추천 Quiz
                </h2>
                <p className="text-blue-100">5가지 질문으로 완벽한 VPN 찾기</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{currentQuestion + 1}</div>
              <div className="text-sm text-blue-200">/ {questions.length}</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className={`w-full p-4 md:p-6 rounded-xl border-2 text-left transition-all transform hover:scale-102 hover:shadow-lg ${
                  answers[question.id] === option.value
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30'
                    : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{option.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-lg text-gray-900 dark:text-white">
                      {option.text}
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={goToPrevious}
              disabled={currentQuestion === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentQuestion === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              이전
            </button>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              선택하면 자동으로 다음 질문으로 넘어갑니다
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPNQuiz;

