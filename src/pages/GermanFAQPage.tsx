import React from 'react';

const GermanFAQPage: React.FC = () => {
  // Sample FAQ data in German
  const faqs = [
    {
      id: 1,
      question: "Was ist ein VPN und wie funktioniert es?",
      answer: "Ein VPN (Virtual Private Network) erstellt eine sichere, verschlüsselte Verbindung zwischen Ihrem Gerät und dem Internet. Es versteckt Ihre IP-Adresse und leitet Ihren Datenverkehr durch einen Server an einem anderen Standort, wodurch Sie anonym im Internet surfen können."
    },
    {
      id: 2,
      question: "Ist die Nutzung eines VPN legal in Deutschland?",
      answer: "Ja, die Nutzung eines VPN ist in Deutschland vollständig legal. Viele Unternehmen verwenden VPNs täglich für sichere Remote-Verbindungen. Allerdings ist es wichtig zu beachten, dass alles, was Sie tun, während Sie mit einem VPN verbunden sind, dennoch den geltenden Gesetzen entsprechen muss."
    },
    {
      id: 3,
      question: "Welches VPN ist 2026 das sicherste?",
      answer: "NordVPN bleibt 2026 die sicherste Wahl mit RAM-only-Servern, strenger No-Logs-Politik und regelmäßigen Sicherheitsaudits durch unabhängige Prüfer. Die Implementierung von Post-Quanten-Verschlüsselung macht es zukunftssicher."
    },
    {
      id: 4,
      question: "Verlangsamt ein VPN meine Internetgeschwindigkeit?",
      answer: "Ein VPN kann Ihre Internetgeschwindigkeit etwas verlangsamen, da Ihr Datenverkehr durch einen zusätzlichen Server geleitet wird. Mit Premium-Anbietern wie NordVPN oder Surfshark beträgt der Geschwindigkeitsverlust jedoch normalerweise nur 5-15%, was in den meisten Fällen nicht spürbar ist."
    },
    {
      id: 5,
      question: "Kann ich Netflix mit einem VPN streamen?",
      answer: "Ja, viele VPNs ermöglichen den Zugriff auf Netflix und andere Streaming-Dienste. NordVPN und Surfshark sind besonders zuverlässig für Streaming, da sie dedizierte Server für verschiedene Regionen anbieten und regelmäßig aktualisieren, um Geoblocking zu umgehen."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen</h1>
        <p className="text-xl text-gray-600">
          Antworten auf die wichtigsten Fragen rund um VPNs
        </p>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <div key={faq.id} className={`border-b border-gray-200 ${index === 0 ? 'border-t' : ''}`}>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-6">
          Haben Sie weitere Fragen? Unser VPN-Experten-Team steht Ihnen gerne zur Verfügung.
        </p>
        <a 
          href="/de/contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Kontaktieren Sie uns
        </a>
      </div>
    </div>
  );
};

export default GermanFAQPage;