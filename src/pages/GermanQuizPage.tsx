import React, { useState } from 'react';

const GermanQuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  // Quiz questions in German
  const questions = [
    {
      id: "usage",
      question: "Wofür möchten Sie hauptsächlich ein VPN nutzen?",
      options: [
        { value: "streaming", label: "Streaming (Netflix, Disney+, etc.)" },
        { value: "privacy", label: "Datenschutz & Anonymität" },
        { value: "security", label: "Sicherheit in öffentlichen WLANs" },
        { value: "bypass", label: "Umgehung von Zensur/Geoblocking" },
        { value: "gaming", label: "Online-Gaming" },
        { value: "business", label: "Geschäftlich/Remote-Arbeit" }
      ]
    },
    {
      id: "devices",
      question: "Auf wie vielen Geräten werden Sie das VPN gleichzeitig nutzen?",
      options: [
        { value: "1", label: "1 Gerät (persönlich)" },
        { value: "2-3", label: "2-3 Geräte (persönlich + Familie)" },
        { value: "4-5", label: "4-5 Geräte (Familie)" },
        { value: "unlimited", label: "Viele Geräte (unbegrenzt)" }
      ]
    },
    {
      id: "budget",
      question: "Was ist Ihr monatliches Budget für ein VPN?",
      options: [
        { value: "low", label: "Unter 3€/Monat" },
        { value: "medium", label: "3€-6€/Monat" },
        { value: "high", label: "Über 6€/Monat" }
      ]
    },
    {
      id: "experience",
      question: "Wie viel Erfahrung haben Sie mit VPNs?",
      options: [
        { value: "beginner", label: "Anfänger - brauche einfache Lösung" },
        { value: "intermediate", label: "Fortgeschritten - kenne mich etwas aus" },
        { value: "expert", label: "Experte - will maximale Kontrolle" }
      ]
    },
    {
      id: "priority",
      question: "Was ist Ihnen am wichtigsten bei einem VPN?",
      options: [
        { value: "speed", label: "Geschwindigkeit" },
        { value: "security", label: "Sicherheit" },
        { value: "price", label: "Preis" },
        { value: "features", label: "Funktionen" }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the email and answers to a server
    console.log('Email:', email);
    console.log('Answers:', answers);
    alert('Vielen Dank! Ihre Ergebnisse werden an Ihre E-Mail gesendet.');
  };

  // Sample results based on answers
  const getResults = () => {
    // This is a simplified recommendation logic
    if (answers.usage === "streaming") {
      return {
        title: "Für Streaming optimiert",
        recommendation: "Surfshark",
        reason: "Surfshark ist hervorragend für Streaming geeignet mit unbegrenzten Geräteverbindungen und optimierten Servern für Netflix, Disney+ und andere Plattformen.",
        features: ["Unbegrenzte Geräte", "Whitelister", "CleanWeb", "30 Tage Geld-zurück"]
      };
    } else if (answers.usage === "privacy") {
      return {
        title: "Für maximale Privatsphäre",
        recommendation: "NordVPN",
        reason: "NordVPN bleibt die sicherste Wahl mit RAM-only-Servern, strenger No-Logs-Politik und Post-Quanten-Verschlüsselung.",
        features: ["Post-Quanten-Verschlüsselung", "RAM-only Server", "Double VPN", "30 Tage Geld-zurück"]
      };
    } else {
      return {
        title: "Unsere Top-Empfehlung",
        recommendation: "NordVPN",
        reason: "NordVPN ist der klare Testsieger für alle Anwendungsbereiche – ob Sicherheit, Geschwindigkeit oder Streaming.",
        features: ["Post-Quanten-Verschlüsselung", "5.800+ Server", "30 Tage Geld-zurück", "6 Geräte"]
      };
    }
  };

  const results = showResults ? getResults() : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Finden Sie Ihr perfektes VPN</h1>
        <p className="text-xl text-gray-600">
          Beantworten Sie 5 schnelle Fragen, um personalisierte Empfehlungen zu erhalten
        </p>
      </div>

      {!showResults ? (
        <div className="bg-white shadow rounded-lg p-8">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Frage {currentQuestion + 1} von {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}% abgeschlossen
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4 mb-8">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors duration-300 ${
                  answers[questions[currentQuestion].id] === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-semibold ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Zurück
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!answers[questions[currentQuestion].id]}
              className={`px-6 py-3 rounded-lg font-semibold ${
                !answers[questions[currentQuestion].id]
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Ergebnisse anzeigen' : 'Weiter'}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Perfekte Matches gefunden!</h2>
            <p className="text-lg text-gray-600">
              Basierend auf Ihren Antworten ist hier Ihre personalisierte VPN-Empfehlung
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{results?.title}</h3>
            <div className="text-5xl font-bold text-blue-600 mb-4">{results?.recommendation}</div>
            <p className="text-gray-700 mb-6">{results?.reason}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {results?.features.map((feature: string, index: number) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow">
                  <div className="text-sm font-semibold text-gray-900">{feature}</div>
                </div>
              ))}
            </div>
            
            <a 
              href={results?.recommendation === "NordVPN" 
                ? "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=132118&url_id=902" 
                : results?.recommendation === "Surfshark" 
                  ? "https://surfshark.hasoffers.com/signup/41263" 
                  : "https://billing.purevpn.com/aff.php?aff=49387047"}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg"
            >
              {results?.recommendation} Angebot sichern
            </a>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Erhalten Sie Ihre Ergebnisse</h3>
            <p className="text-gray-700 mb-4">
              Geben Sie Ihre E-Mail ein, um Ihre personalisierten VPN-Empfehlungen und exklusive Angebote zu erhalten
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                required
                className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Ergebnisse erhalten
              </button>
            </form>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setShowResults(false);
                setEmail('');
              }}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Quiz wiederholen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GermanQuizPage;