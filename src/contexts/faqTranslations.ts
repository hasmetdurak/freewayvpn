// Define FAQ translations structure
interface FAQTranslations {
  [key: string]: {
    question: string;
    answer: string;
    category: string;
  }[];
}

// FAQ translations for all languages
export const faqTranslations: FAQTranslations = {
  en: [
    {
      question: "What is a VPN and how does it work?",
      answer: "A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and a VPN server. This masks your IP address and encrypts your internet traffic, providing privacy and security online.",
      category: "General"
    },
    {
      question: "Are VPNs legal to use?",
      answer: "VPNs are legal in most countries worldwide, including the US, Canada, UK, and most European countries. However, some countries like China, Russia, and Iran have restrictions or bans on VPN usage. Always check local laws before using a VPN.",
      category: "General"
    },
    {
      question: "Do VPNs slow down internet speed?",
      answer: "VPNs can reduce internet speed due to encryption overhead and server distance. However, premium VPNs typically cause minimal speed loss (5-15%). Some VPNs may even improve speeds by bypassing ISP throttling.",
      category: "Performance"
    },
    {
      question: "Can I use a VPN for streaming?",
      answer: "Yes, many VPNs work with streaming services like Netflix, Hulu, and BBC iPlayer. However, streaming platforms actively block VPN traffic, so you'll need a VPN with dedicated streaming servers and regular IP updates.",
      category: "Streaming"
    },
    {
      question: "How much do VPNs cost?",
      answer: "VPN prices range from $2-15 per month depending on the provider and plan length. Annual plans offer better value than monthly subscriptions. Many providers offer money-back guarantees and free trials.",
      category: "Pricing"
    }
  ],
  
  es: [
    {
      question: "¿Qué es una VPN y cómo funciona?",
      answer: "Una VPN (Red Privada Virtual) crea una conexión segura y cifrada entre tu dispositivo y un servidor VPN. Esto oculta tu dirección IP y cifra tu tráfico de internet, proporcionando privacidad y seguridad en línea.",
      category: "General"
    },
    {
      question: "¿Es legal usar VPNs?",
      answer: "Las VPNs son legales en la mayoría de países del mundo, incluyendo EE.UU., Canadá, Reino Unido y la mayoría de países europeos. Sin embargo, algunos países como China, Rusia e Irán tienen restricciones o prohibiciones sobre el uso de VPN. Siempre verifica las leyes locales antes de usar una VPN.",
      category: "General"
    },
    {
      question: "¿Las VPNs ralentizan la velocidad de internet?",
      answer: "Las VPNs pueden reducir la velocidad de internet debido a la sobrecarga de cifrado y la distancia del servidor. Sin embargo, las VPNs premium típicamente causan una pérdida mínima de velocidad (5-15%). Algunas VPNs pueden incluso mejorar las velocidades evitando la limitación del ISP.",
      category: "Rendimiento"
    },
    {
      question: "¿Puedo usar una VPN para streaming?",
      answer: "Sí, muchas VPNs funcionan con servicios de streaming como Netflix, Hulu y BBC iPlayer. Sin embargo, las plataformas de streaming bloquean activamente el tráfico VPN, por lo que necesitarás una VPN con servidores dedicados para streaming y actualizaciones regulares de IP.",
      category: "Streaming"
    },
    {
      question: "¿Cuánto cuestan las VPNs?",
      answer: "Los precios de VPN van desde $2-15 por mes dependiendo del proveedor y la duración del plan. Los planes anuales ofrecen mejor valor que las suscripciones mensuales. Muchos proveedores ofrecen garantías de devolución de dinero y pruebas gratuitas.",
      category: "Precios"
    }
  ],
  
  de: [
    {
      question: "Was ist ein VPN und wie funktioniert es?",
      answer: "Ein VPN (Virtual Private Network) erstellt eine sichere, verschlüsselte Verbindung zwischen Ihrem Gerät und einem VPN-Server. Dies verbirgt Ihre IP-Adresse und verschlüsselt Ihren Internetverkehr, wodurch Privatsphäre und Sicherheit online gewährleistet werden.",
      category: "Allgemein"
    },
    {
      question: "Ist die Nutzung von VPNs legal?",
      answer: "VPNs sind in den meisten Ländern weltweit legal, einschließlich USA, Kanada, Großbritannien und den meisten europäischen Ländern. Einige Länder wie China, Russland und Iran haben jedoch Beschränkungen oder Verbote für die VPN-Nutzung. Überprüfen Sie immer die örtlichen Gesetze, bevor Sie ein VPN verwenden.",
      category: "Allgemein"
    },
    {
      question: "Verlangsamen VPNs die Internetgeschwindigkeit?",
      answer: "VPNs können die Internetgeschwindigkeit aufgrund von Verschlüsselungsoverhead und Serverentfernung reduzieren. Premium-VPNs verursachen jedoch typischerweise minimalen Geschwindigkeitsverlust (5-15%). Einige VPNs können sogar Geschwindigkeiten verbessern, indem sie ISP-Drosselung umgehen.",
      category: "Leistung"
    },
    {
      question: "Kann ich ein VPN für Streaming verwenden?",
      answer: "Ja, viele VPNs funktionieren mit Streaming-Diensten wie Netflix, Hulu und BBC iPlayer. Streaming-Plattformen blockieren jedoch aktiv VPN-Traffic, daher benötigen Sie ein VPN mit dedizierten Streaming-Servern und regelmäßigen IP-Updates.",
      category: "Streaming"
    },
    {
      question: "Wie viel kosten VPNs?",
      answer: "VPN-Preise reichen von $2-15 pro Monat, abhängig vom Anbieter und der Planlaufzeit. Jahrespläne bieten besseren Wert als monatliche Abonnements. Viele Anbieter bieten Geld-zurück-Garantien und kostenlose Testversionen.",
      category: "Preise"
    }
  ]
};

export type { FAQTranslations };