import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getBestAffiliateOffer } from '../utils/dynamicAffiliate';

interface NaturalAffiliateProps {
  context: 'streaming' | 'privacy' | 'gaming' | 'banking';
  className?: string;
}

const NaturalAffiliate: React.FC<NaturalAffiliateProps> = ({ context, className = '' }) => {
  const { language, t } = useLanguage();
  
  // Get country from language code
  const getCountryFromLanguage = (langCode: string): string => {
    const mapping: { [key: string]: string } = {
      'de': 'DE', 'tr': 'TR', 'es': 'ES', 'fr': 'FR', 'it': 'IT', 'pt': 'BR', 'ru': 'RU',
      'zh': 'CN', 'ja': 'JP', 'ko': 'KR', 'ar': 'SA', 'hi': 'IN', 'id': 'ID', 'vi': 'VN',
      'nb': 'NO', 'sv': 'SE', 'fi': 'FI', 'pl': 'PL', 'th': 'TH', 'fa': 'IR', 'tl': 'PH'
    };
    return mapping[langCode] || 'US';
  };

  const country = getCountryFromLanguage(language.code);
  const bestOffer = getBestAffiliateOffer(country, language.code);

  // Natural affiliate sentences based on context and language
  const getNaturalAffiliateSentence = () => {
    const sentences = {
      // German - High conversion focus on ARD/ZDF
      de: {
        streaming: "Ich nutze NordVPN seit 2022 – besonders weil es mit ARD Mediathek im Ausland funktioniert. Perfekt für deutsches Streaming!",
        privacy: "Als Datenschutz-Experte empfehle ich NordVPN wegen der DSGVO-konformen No-Logs-Policy. Seit 3 Jahren zufrieden.",
        gaming: "Für Gaming nutze ich Surfshark – deutsche Server, niedrige Latenz, DDoS-Schutz. Funktioniert perfekt mit Steam.",
        banking: "Für Online-Banking verwende ich NordVPN. Deutsche Server, militärische Verschlüsselung, DSGVO-konform."
      },
      
      // Turkish - Price and unlimited devices focus
      tr: {
        streaming: "Surfshark kullanıyorum 2022'den beri – özellikle sınırsız cihaz özelliği için. Netflix TR, BluTV, Bein Sports hepsi çalışıyor.",
        privacy: "Gizlilik için PureVPN tercih ediyorum. Türkçe destek, ucuz fiyat, 31 gün para iade garantisi. Çok memnunum.",
        gaming: "Oyun için Surfshark ideal – PUBG, Mobile Legends, Valorant hepsi düşük ping ile çalışıyor. Sınırsız cihaz bonusu.",
        banking: "Online bankacılık için NordVPN kullanıyorum. Güvenli, hızlı, Türkçe arayüz. 2 yıldır sorunsuz."
      },
      
      // French - Quality and RGPD focus
      fr: {
        streaming: "J'utilise NordVPN depuis 2022 – surtout pour accéder à TF1 et MyCanal depuis l'étranger. Parfait pour le streaming français!",
        privacy: "En tant qu'expert en vie privée, je recommande NordVPN pour sa politique RGPD conforme. Satisfait depuis 3 ans.",
        gaming: "Pour le gaming, j'utilise Surfshark – serveurs français, faible latence, protection DDoS. Fonctionne parfaitement avec Steam.",
        banking: "Pour la banque en ligne, j'utilise NordVPN. Serveurs français, chiffrement militaire, conforme RGPD."
      },
      
      // Spanish - Mobile and football focus
      es: {
        streaming: "Uso Surfshark desde 2022 – especialmente para ver fútbol en vivo desde cualquier país. Netflix LATAM, Disney+ perfectos.",
        privacy: "Para privacidad recomiendo PureVPN. Soporte en español, precios accesibles, garantía de 31 días. Muy satisfecho.",
        gaming: "Para gaming uso Surfshark – servidores latinos, baja latencia, protección DDoS. Funciona perfecto con Steam.",
        banking: "Para banca online uso NordVPN. Seguro, rápido, interfaz en español. 2 años sin problemas."
      },
      
      // English - Premium quality focus
      en: {
        streaming: "I've been using NordVPN since 2022 – especially for accessing BBC iPlayer and Hulu from abroad. Perfect for US/UK streaming!",
        privacy: "As a privacy expert, I recommend NordVPN for its military-grade encryption and no-logs policy. Satisfied for 3 years.",
        gaming: "For gaming, I use Surfshark – US servers, low latency, DDoS protection. Works perfectly with Steam and Epic Games.",
        banking: "For online banking, I use NordVPN. Secure, fast, US servers. 2 years without any issues."
      }
    };

    return sentences[language.code as keyof typeof sentences]?.[context] || sentences.en[context];
  };

  const getAffiliateLink = () => {
    if (!bestOffer) return '#';
    return bestOffer.affiliateLink;
  };

  const getProviderName = () => {
    if (!bestOffer) return 'NordVPN';
    return bestOffer.provider;
  };

  return (
    <div className={`bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 text-sm font-bold">💡</span>
          </div>
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm text-gray-700 leading-relaxed">
            {getNaturalAffiliateSentence()}
          </p>
          <div className="mt-3">
            <a
              href={getAffiliateLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {t('cultural.cta')} - {getProviderName()}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaturalAffiliate;
