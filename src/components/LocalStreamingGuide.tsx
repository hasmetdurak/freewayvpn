import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LocalStreamingGuideProps {
  className?: string;
}

const LocalStreamingGuide: React.FC<LocalStreamingGuideProps> = ({ className = '' }) => {
  const { currentLanguage, t } = useLanguage();

  // Local streaming services by country/language
  const getLocalStreamingServices = () => {
    const services = {
      de: {
        title: "Deutsche Streaming-Dienste mit VPN entsperren",
        subtitle: "ARD Mediathek, ZDF Mediathek, Netflix DE, DAZN, Sky Go",
        services: [
          { name: "ARD Mediathek", description: "Tagesschau, Tatort, Sportschau kostenlos", icon: "📺" },
          { name: "ZDF Mediathek", description: "ZDF heute, Terra X, ZDF-Sport", icon: "📺" },
          { name: "Netflix Deutschland", description: "Deutsche Filme, Serien, Dokumentationen", icon: "🎬" },
          { name: "DAZN", description: "Bundesliga, Champions League, NFL", icon: "⚽" },
          { name: "Sky Go", description: "Sky Sports, Sky Cinema, Sky Atlantic", icon: "📡" }
        ],
        tip: "💡 Tipp: NordVPN funktioniert am besten mit deutschen Streaming-Diensten. DSGVO-konform und schnell!"
      },
      
      tr: {
        title: "Türk Streaming Hizmetlerini VPN ile Açın",
        subtitle: "Netflix TR, BluTV, Bein Sports, Turkcell TV+, Exxen",
        services: [
          { name: "Netflix Türkiye", description: "Türk dizileri, filmler, belgeseller", icon: "🎬" },
          { name: "BluTV", description: "Masum, Şahsiyet, 50m2", icon: "📺" },
          { name: "Bein Sports", description: "Süper Lig, Şampiyonlar Ligi, NBA", icon: "⚽" },
          { name: "Turkcell TV+", description: "Turkcell müşterileri için özel içerik", icon: "📱" },
          { name: "Exxen", description: "Yerli dizi ve film platformu", icon: "🎭" }
        ],
        tip: "💡 İpucu: Surfshark sınırsız cihaz ile tüm aile için ideal. Ucuz ve güvenilir!"
      },
      
      fr: {
        title: "Débloquer les services de streaming français avec un VPN",
        subtitle: "TF1, MyCanal, France.tv, Netflix FR, Amazon Prime Video",
        services: [
          { name: "TF1", description: "TF1, TMC, TFX, TF1 Séries Films", icon: "📺" },
          { name: "MyCanal", description: "Canal+, C8, CNews, Canal+ Sport", icon: "📡" },
          { name: "France.tv", description: "France 2, France 3, France 5", icon: "🇫🇷" },
          { name: "Netflix France", description: "Films français, séries, documentaires", icon: "🎬" },
          { name: "Amazon Prime Video", description: "Prime Video France, exclusivités", icon: "📦" }
        ],
        tip: "💡 Conseil: NordVPN fonctionne parfaitement avec les services français. Conforme RGPD et rapide!"
      },
      
      es: {
        title: "Desbloquear servicios de streaming latinoamericanos con VPN",
        subtitle: "Netflix LATAM, Disney+, HBO Max, Amazon Prime Video, fútbol en vivo",
        services: [
          { name: "Netflix Latinoamérica", description: "Contenido local, telenovelas, películas", icon: "🎬" },
          { name: "Disney+", description: "Disney, Marvel, Star Wars, National Geographic", icon: "🏰" },
          { name: "HBO Max", description: "HBO, Warner Bros, DC Comics", icon: "🎭" },
          { name: "Amazon Prime Video", description: "Prime Video LATAM, exclusivas", icon: "📦" },
          { name: "Fútbol en Vivo", description: "Liga MX, Copa Libertadores, Champions", icon: "⚽" }
        ],
        tip: "💡 Consejo: Surfshark es perfecto para streaming latino. Precio accesible y servidores rápidos!"
      },
      
      en: {
        title: "Unblock Local Streaming Services with VPN",
        subtitle: "BBC iPlayer, Hulu, Netflix US, Disney+, HBO Max",
        services: [
          { name: "BBC iPlayer", description: "BBC One, Two, Three, Four, News", icon: "📺" },
          { name: "Hulu", description: "Hulu Originals, ABC, NBC, Fox", icon: "🎬" },
          { name: "Netflix US", description: "US movies, series, documentaries", icon: "🎭" },
          { name: "Disney+", description: "Disney, Marvel, Star Wars, Pixar", icon: "🏰" },
          { name: "HBO Max", description: "HBO, Warner Bros, DC, Adult Swim", icon: "📡" }
        ],
        tip: "💡 Tip: NordVPN works best with US/UK streaming services. Military-grade encryption and fast!"
      }
    };

    return services[currentLanguage.code as keyof typeof services] || services.en;
  };

  const streamingData = getLocalStreamingServices();

  return (
    <div className={`bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {streamingData.title}
        </h3>
        <p className="text-gray-600">
          {streamingData.subtitle}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {streamingData.services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{service.icon}</span>
              <h4 className="font-semibold text-gray-800">{service.name}</h4>
            </div>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800 font-medium">
          {streamingData.tip}
        </p>
      </div>
    </div>
  );
};

export default LocalStreamingGuide;
