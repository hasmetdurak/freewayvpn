import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { 
  devices, 
  services, 
  locations, 
  runStreamTest, 
  getLeaderboard,
  TestConfig,
  TestResult,
  achievements
} from '../data/streamTestData';
import { 
  Play, 
  Zap, 
  Activity, 
  CheckCircle, 
  Share2, 
  Trophy,
  ExternalLink,
  Copy,
  Check,
  Award,
  TrendingUp
} from 'lucide-react';

export default function StreamSmartPage() {
  const { t } = useLanguage();
  const [config, setConfig] = useState<TestConfig>({
    device: '',
    service: '',
    location: ''
  });
  const [isTestin, setIsTesting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<TestResult[] | null>(null);
  const [testsCompleted, setTestsCompleted] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [userAchievements, setUserAchievements] = useState(achievements);
  
  const leaderboard = getLeaderboard();

  // Load user stats from localStorage
  useEffect(() => {
    const savedTests = localStorage.getItem('streamTestsCount');
    if (savedTests) {
      setTestsCompleted(parseInt(savedTests));
    }
  }, []);

  const handleTest = async () => {
    if (!config.device || !config.service || !config.location) {
      alert('Please fill all fields!');
      return;
    }

    setIsTesting(true);
    setProgress(0);
    setResults(null);

    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 5;
      });
    }, 100);

    // Run test
    const testResults = await runStreamTest(config);
    
    clearInterval(interval);
    setProgress(100);
    
    setTimeout(() => {
      setResults(testResults);
      setIsTesting(false);
      
      // Update stats
      const newTestCount = testsCompleted + 1;
      setTestsCompleted(newTestCount);
      localStorage.setItem('streamTestsCount', newTestCount.toString());
      
      // Check achievements
      checkAchievements(testResults, newTestCount);
      
      // Show share modal after first test
      if (newTestCount === 1) {
        setTimeout(() => setShowShareModal(true), 1500);
      }

      // Analytics
      if (window.gtag) {
        window.gtag('event', 'stream_test_complete', {
          device: config.device,
          service: config.service,
          location: config.location
        });
      }
    }, 500);
  };

  const checkAchievements = (results: TestResult[], testCount: number) => {
    const updated = [...userAchievements];
    
    // First test
    if (testCount === 1) {
      const idx = updated.findIndex(a => a.id === 'first-test');
      if (idx !== -1) updated[idx].unlocked = true;
    }
    
    // Speed demon
    if (results.some(r => r.speed >= 200)) {
      const idx = updated.findIndex(a => a.id === 'speed-demon');
      if (idx !== -1) updated[idx].unlocked = true;
    }
    
    setUserAchievements(updated);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const shareResults = (platform: string) => {
    if (!results) return;
    
    const topResult = results[0];
    const text = `I just tested ${topResult.provider} for streaming - ${topResult.speed} Mbps! 🚀 Find your perfect VPN: `;
    const url = window.location.href;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + url)}`;
        break;
      case 'reddit':
        shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
        break;
    }
    
    window.open(shareUrl, '_blank');
    
    // Analytics
    if (window.gtag) {
      window.gtag('event', 'share', {
        method: platform,
        content_type: 'stream_test_result'
      });
    }
  };

  const trackAffiliateClick = (provider: string) => {
    if (window.gtag) {
      window.gtag('event', 'stream_test_aff_click', {
        provider: provider
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>StreamSmart - Test Your VPN Speed for Streaming | BestVPN.digital</title>
        <meta name="description" content="Test your VPN speed for Netflix, Disney+, Hulu & more. Real-time results, leaderboard & recommendations." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 animate-pulse shadow-lg">
              <Zap className="w-5 h-5" />
              LIVE SPEED TESTING
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Test Your VPN Speed
              </span>
              <br />
              <span className="text-gray-800">Find the Fastest for Streaming</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Real-time testing for Netflix, Disney+, Hulu & more. Get instant results with speed, ping & reliability scores.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-600" />
                {testsCompleted.toLocaleString()}+ tests completed
              </span>
              <span className="flex items-center gap-1">
                <Activity className="w-4 h-4 text-blue-600" />
                Live results
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Test Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-purple-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Play className="w-6 h-6 text-purple-600" />
                  Start Your Speed Test
                </h2>

                {/* Form */}
                <div className="space-y-6">
                  {/* Device Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Your Device
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {devices.map((device) => (
                        <button
                          key={device.id}
                          onClick={() => setConfig({ ...config, device: device.id })}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            config.device === device.id
                              ? 'border-purple-600 bg-purple-50 ring-4 ring-purple-200'
                              : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                          }`}
                        >
                          <div className="text-3xl mb-2">{device.icon}</div>
                          <div className="text-sm font-medium text-gray-900">{device.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Streaming Service
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => setConfig({ ...config, service: service.id })}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            config.service === service.id
                              ? 'border-purple-600 bg-purple-50 ring-4 ring-purple-200'
                              : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                          }`}
                        >
                          <div className="text-2xl mb-2">{service.icon}</div>
                          <div className="text-sm font-medium text-gray-900">{service.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Location Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Server Location
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {locations.map((location) => (
                        <button
                          key={location.id}
                          onClick={() => setConfig({ ...config, location: location.id })}
                          className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                            config.location === location.id
                              ? 'border-purple-600 bg-purple-50 ring-4 ring-purple-200'
                              : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
                          }`}
                        >
                          <div className="text-2xl mb-1">{location.flag}</div>
                          <div className="text-xs font-medium text-gray-900">{location.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Test Button */}
                  <button
                    onClick={handleTest}
                    disabled={isTestin || !config.device || !config.service || !config.location}
                    className={`w-full py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      isTestin || !config.device || !config.service || !config.location
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105'
                    }`}
                  >
                    {isTestin ? (
                      <>
                        <Activity className="w-6 h-6 animate-spin" />
                        Testing... {progress}%
                      </>
                    ) : (
                      <>
                        <Zap className="w-6 h-6" />
                        Start Speed Test
                      </>
                    )}
                  </button>

                  {/* Progress Bar */}
                  {isTestin && (
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-full transition-all duration-300 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Results */}
              {results && (
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">📊 Your Results</h3>
                    <button
                      onClick={() => setShowShareModal(true)}
                      className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>

                  {results.map((result, index) => (
                    <div
                      key={result.provider}
                      className={`bg-white rounded-2xl shadow-xl p-6 border-2 transition-all hover:shadow-2xl ${
                        index === 0 ? 'border-purple-400 ring-4 ring-purple-200' : 'border-gray-200'
                      }`}
                    >
                      {result.badge && index === 0 && (
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                          {result.badge}
                        </div>
                      )}

                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">{result.provider}</h4>
                          
                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="bg-blue-50 rounded-lg p-3">
                              <div className="text-xs text-gray-600 mb-1">Speed</div>
                              <div className="text-2xl font-black text-blue-600">{result.speed}</div>
                              <div className="text-xs text-gray-500">Mbps</div>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3">
                              <div className="text-xs text-gray-600 mb-1">Ping</div>
                              <div className="text-2xl font-black text-green-600">{result.ping}</div>
                              <div className="text-xs text-gray-500">ms</div>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-3">
                              <div className="text-xs text-gray-600 mb-1">Reliability</div>
                              <div className="text-2xl font-black text-purple-600">{result.reliability}</div>
                              <div className="text-xs text-gray-500">%</div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {result.features.map((feature, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                <CheckCircle className="w-3 h-3 text-green-600" />
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        {result.discount && (
                          <div className="text-right ml-4">
                            <div className="text-4xl font-black text-orange-600">{result.discount}%</div>
                            <div className="text-sm text-gray-500">OFF</div>
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <a
                        href={result.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackAffiliateClick(result.provider)}
                        className={`block w-full font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 ${
                          index === 0
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                            : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl'
                        }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Get {result.provider} Now
                          <ExternalLink className="w-5 h-5" />
                        </span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Leaderboard */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                  Weekly Leaderboard
                </h3>
                <div className="space-y-3">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={entry.provider}
                      className={`p-3 rounded-lg ${
                        index === 0 ? 'bg-gradient-to-r from-yellow-100 to-orange-100' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{entry.badge}</span>
                          <span className="font-bold text-gray-900">{entry.provider}</span>
                        </div>
                        <span className="text-lg font-black text-blue-600">{entry.avgSpeed} Mbps</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>{entry.testsCount.toLocaleString()} tests</span>
                        <span className="text-green-600 font-semibold">{entry.successRate}% success</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-600" />
                  Your Achievements
                </h3>
                <div className="space-y-3">
                  {userAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-3 rounded-lg ${
                        achievement.unlocked ? 'bg-purple-50 border-2 border-purple-200' : 'bg-gray-50 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900">{achievement.name}</div>
                          <div className="text-xs text-gray-600">{achievement.description}</div>
                        </div>
                        {achievement.unlocked && <CheckCircle className="w-5 h-5 text-green-600" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Your Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tests Completed</span>
                    <span className="text-2xl font-black">{testsCompleted}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Achievements</span>
                    <span className="text-2xl font-black">
                      {userAchievements.filter(a => a.unlocked).length}/{userAchievements.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && results && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎉 Share Your Results!</h3>
            <p className="text-gray-600 mb-6">
              Help your friends find the best VPN for streaming. Share your test results and earn bonus tests!
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => shareResults('twitter')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                🐦 Twitter
              </button>
              <button
                onClick={() => shareResults('facebook')}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                📘 Facebook
              </button>
              <button
                onClick={() => shareResults('whatsapp')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                💬 WhatsApp
              </button>
              <button
                onClick={() => shareResults('reddit')}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                🔴 Reddit
              </button>
            </div>

            <button
              onClick={() => setShowShareModal(false)}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

