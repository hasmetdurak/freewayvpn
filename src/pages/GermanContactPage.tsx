import React, { useState } from 'react';

const GermanContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontaktieren Sie uns</h1>
        <p className="text-xl text-gray-600">
          Haben Sie Fragen? Wir sind hier, um Ihnen bei der Suche nach der perfekten VPN-Lösung zu helfen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Senden Sie uns eine Nachricht</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Nachricht gesendet!</h3>
                <p className="text-green-700">
                  Vielen Dank für Ihre Nachricht. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Betreff
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Wählen Sie einen Betreff</option>
                    <option value="general">Allgemeine Anfrage</option>
                    <option value="vpn-recommendation">VPN-Empfehlung</option>
                    <option value="technical-support">Technischer Support</option>
                    <option value="partnership">Partnerschaftsanfrage</option>
                    <option value="press">Presse & Medien</option>
                    <option value="feedback">Feedback & Vorschläge</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="rounded text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Ich bin kein Roboter - Ich stimme der <a href="/de/privacy-policy" className="text-blue-600 hover:underline">Datenschutzrichtlinie</a> zu
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Senden...' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Contact Information */}
        <div>
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontaktinformationen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">E-Mail Support</h3>
                <p className="text-gray-600">contact@bestvpn.digital</p>
                <p className="text-sm text-gray-500 mt-1">Wir antworten normalerweise innerhalb von 24 Stunden</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Büro Standort</h3>
                <p className="text-gray-600">Berlin, Deutschland</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Folgen Sie uns</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Twitter
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Facebook
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Datenschutz an erster Stelle</h3>
            <p className="text-gray-700 mb-4">
              Ihre Privatsphäre ist uns wichtig. Alle Kommunikationen sind verschlüsselt und sicher.
            </p>
            <a 
              href="/de/privacy-policy" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Erfahren Sie mehr über unseren Datenschutz
            </a>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Häufig gestellte Fragen</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Wie schnell antworten Sie?</h3>
            <p className="text-gray-700">
              Wir antworten normalerweise innerhalb von 24 Stunden an Werktagen auf alle Anfragen.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Können Sie eine bestimmte VPN-Bewertung anfordern?</h3>
            <p className="text-gray-700">
              Auf jeden Fall! Wir sind immer offen für neue VPN-Dienste. Kontaktieren Sie uns mit Ihren Vorschlägen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanContactPage;