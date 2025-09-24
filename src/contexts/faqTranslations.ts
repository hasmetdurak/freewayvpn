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
  ],
  
  zh: [
    {
      question: "什么是VPN，它是如何工作的？",
      answer: "VPN（虚拟专用网络）在您的设备和VPN服务器之间创建安全、加密的连接。这会隐藏您的IP地址并加密您的互联网流量，提供在线隐私和安全保护。",
      category: "基础知识"
    },
    {
      question: "使用VPN是否合法？",
      answer: "VPN在大多数国家都是合法的，包括美国、加拿大、英国和大多数欧洲国家。但是，中国、俄罗斯和伊朗等一些国家对VPN使用有限制或禁令。使用VPN前请务必检查当地法律。",
      category: "基础知识"
    },
    {
      question: "VPN会降低网速吗？",
      answer: "由于加密开销和服务器距离，VPN可能会降低网速。但是，优质VPN通常只会造成最小的速度损失（5-15%）。某些VPN甚至可以通过绕过ISP限速来提高速度。",
      category: "性能表现"
    },
    {
      question: "我可以使用VPN进行流媒体播放吗？",
      answer: "是的，许多VPN可以与Netflix、Hulu和BBC iPlayer等流媒体服务配合使用。但是，流媒体平台会主动阻止VPN流量，因此您需要具有专用流媒体服务器和定期IP更新的VPN。",
      category: "流媒体"
    },
    {
      question: "VPN的价格是多少？",
      answer: "VPN价格根据提供商和计划长度从每月2-15美元不等。年度计划比月度订阅提供更好的价值。许多提供商提供退款保证和免费试用。",
      category: "价格费用"
    }
  ],
  
  ja: [
    {
      question: "VPNとは何ですか？どのように動作しますか？",
      answer: "VPN（仮想プライベートネットワーク）は、お使いのデバイスとVPNサーバー間に安全で暗号化された接続を作成します。これによりIPアドレスが隠され、インターネットトラフィックが暗号化され、オンラインでのプライバシーとセキュリティが提供されます。",
      category: "基本知識"
    },
    {
      question: "VPNの使用は合法ですか？",
      answer: "VPNは、米国、カナダ、英国、およびほとんどのヨーロッパ諸国を含む世界のほとんどの国で合法です。ただし、中国、ロシア、イランなどの一部の国ではVPN使用に制限や禁止があります。VPNを使用する前に必ず現地の法律を確認してください。",
      category: "基本知識"
    },
    {
      question: "VPNはインターネット速度を遅くしますか？",
      answer: "暗号化のオーバーヘッドとサーバー距離により、VPNはインターネット速度を低下させる可能性があります。ただし、プレミアムVPNは通常最小限の速度低下（5-15%）しか引き起こしません。一部のVPNはISPのスロットリングを回避することで速度を向上させることもあります。",
      category: "パフォーマンス"
    },
    {
      question: "VPNでストリーミングできますか？",
      answer: "はい、多くのVPNがNetflix、Hulu、BBC iPlayerなどのストリーミングサービスで動作します。ただし、ストリーミングプラットフォームはVPNトラフィックを積極的にブロックするため、専用ストリーミングサーバーと定期的なIP更新を持つVPNが必要です。",
      category: "ストリーミング"
    },
    {
      question: "VPNの料金はいくらですか？",
      answer: "VPNの料金は、プロバイダーとプラン期間によって月額2-15ドルです。年間プランは月次サブスクリプションよりも良い価値を提供します。多くのプロバイダーが返金保証と無料トライアルを提供しています。",
      category: "料金"
    }
  ],
  
  ru: [
    {
      question: "Что такое VPN и как он работает?",
      answer: "VPN (виртуальная частная сеть) создает безопасное зашифрованное соединение между вашим устройством и VPN-сервером. Это скрывает ваш IP-адрес и шифрует интернет-трафик, обеспечивая конфиденциальность и безопасность в сети.",
      category: "Основы"
    },
    {
      question: "Законно ли использовать VPN?",
      answer: "VPN законны в большинстве стран мира, включая США, Канаду, Великобританию и большинство европейских стран. Однако в некоторых странах, таких как Китай, Россия и Иран, действуют ограничения или запреты на использование VPN. Всегда проверяйте местные законы перед использованием VPN.",
      category: "Основы"
    },
    {
      question: "Замедляют ли VPN скорость интернета?",
      answer: "VPN могут снижать скорость интернета из-за накладных расходов на шифрование и удаленности сервера. Однако премиум VPN обычно вызывают минимальную потерю скорости (5-15%). Некоторые VPN могут даже улучшать скорость, обходя ограничения интернет-провайдера.",
      category: "Производительность"
    },
    {
      question: "Можно ли использовать VPN для стриминга?",
      answer: "Да, многие VPN работают со стриминговыми сервисами, такими как Netflix, Hulu и BBC iPlayer. Однако стриминговые платформы активно блокируют VPN-трафик, поэтому вам понадобится VPN с выделенными стриминговыми серверами и регулярными обновлениями IP.",
      category: "Стриминг"
    },
    {
      question: "Сколько стоят VPN?",
      answer: "Цены на VPN варьируются от $2-15 в месяц в зависимости от провайдера и продолжительности плана. Годовые планы предлагают лучшую ценность, чем месячные подписки. Многие провайдеры предлагают гарантии возврата денег и бесплатные пробные версии.",
      category: "Цены"
    }
  ]
};

export type { FAQTranslations };