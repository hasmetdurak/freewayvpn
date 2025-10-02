export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqTranslations: Record<string, FAQItem[]> = {
  en: [
    { id: 1, question: "What is a VPN?", answer: "A VPN (Virtual Private Network) creates an encrypted connection between your device and the internet, masking your IP address and protecting your privacy.", category: "Basics" },
    { id: 2, question: "Is using a VPN legal?", answer: "Yes, VPNs are legal in most countries for legitimate purposes. Always check your local laws.", category: "Legal" },
    { id: 3, question: "Does a VPN slow down internet?", answer: "VPNs may reduce speed by 5-20% due to encryption. Premium VPNs minimize this impact.", category: "Performance" },
    { id: 4, question: "Can I use VPN for streaming?", answer: "Yes! VPNs help access geo-restricted content from Netflix, Hulu, and other platforms.", category: "Streaming" },
    { id: 5, question: "Are free VPNs safe?", answer: "Free VPNs often compromise privacy. Premium VPNs offer better security and faster speeds.", category: "Pricing" },
    { id: 6, question: "How many devices can I use?", answer: "Most premium VPNs allow 5-10 simultaneous connections, some offer unlimited devices.", category: "Devices" },
    { id: 7, question: "What is a no-logs policy?", answer: "VPN providers don't record your browsing history, connection times, or IP addresses.", category: "Privacy" },
    { id: 8, question: "What is a VPN kill switch?", answer: "Automatically disconnects internet if VPN connection drops, preventing IP exposure.", category: "Security" },
    { id: 9, question: "Can I use VPN on mobile?", answer: "Yes, most VPNs offer dedicated apps for iOS and Android devices.", category: "Mobile" },
    { id: 10, question: "Best VPN for Netflix?", answer: "NordVPN, ExpressVPN, and Surfshark are excellent for Netflix streaming.", category: "Streaming" }
  ],
  de: [
    { id: 1, question: "Was ist ein VPN?", answer: "Ein VPN erstellt eine verschlüsselte Verbindung zwischen Ihrem Gerät und dem Internet und schützt Ihre Privatsphäre.", category: "Grundlagen" },
    { id: 2, question: "Ist VPN legal?", answer: "Ja, VPNs sind in den meisten Ländern für legitime Zwecke legal. Prüfen Sie lokale Gesetze.", category: "Rechtliches" },
    { id: 3, question: "Verlangsamt VPN das Internet?", answer: "VPNs können die Geschwindigkeit um 5-20% reduzieren. Premium-VPNs minimieren dies.", category: "Leistung" },
    { id: 4, question: "VPN für Streaming?", answer: "Ja! VPNs helfen beim Zugriff auf geo-beschränkte Inhalte von Netflix, Hulu usw.", category: "Streaming" },
    { id: 5, question: "Sind kostenlose VPNs sicher?", answer: "Kostenlose VPNs gefährden oft die Privatsphäre. Premium-VPNs sind sicherer.", category: "Preise" },
    { id: 6, question: "Wie viele Geräte?", answer: "Die meisten Premium-VPNs erlauben 5-10 gleichzeitige Verbindungen.", category: "Geräte" },
    { id: 7, question: "Was ist No-Logs?", answer: "VPN-Anbieter zeichnen keine Browserverlauf, Verbindungszeiten oder IP-Adressen auf.", category: "Datenschutz" },
    { id: 8, question: "Was ist Kill-Switch?", answer: "Trennt automatisch das Internet, wenn die VPN-Verbindung abbricht.", category: "Sicherheit" },
    { id: 9, question: "VPN auf Handy?", answer: "Ja, die meisten VPNs bieten Apps für iOS und Android.", category: "Mobil" },
    { id: 10, question: "Bestes VPN für Netflix?", answer: "NordVPN, ExpressVPN und Surfshark sind hervorragend für Netflix.", category: "Streaming" }
  ],
  fr: [
    { id: 1, question: "Qu'est-ce qu'un VPN?", answer: "Un VPN crée une connexion cryptée entre votre appareil et Internet, protégeant votre vie privée.", category: "Bases" },
    { id: 2, question: "VPN est-il légal?", answer: "Oui, les VPN sont légaux dans la plupart des pays à des fins légitimes.", category: "Légal" },
    { id: 3, question: "VPN ralentit Internet?", answer: "Les VPN peuvent réduire la vitesse de 5-20%. Les VPN premium minimisent cet impact.", category: "Performance" },
    { id: 4, question: "VPN pour streaming?", answer: "Oui! Les VPN aident à accéder au contenu géo-restreint de Netflix, Hulu, etc.", category: "Streaming" },
    { id: 5, question: "VPN gratuits sûrs?", answer: "Les VPN gratuits compromettent souvent la vie privée. Les VPN premium sont plus sûrs.", category: "Tarification" },
    { id: 6, question: "Combien d'appareils?", answer: "La plupart des VPN premium autorisent 5-10 connexions simultanées.", category: "Appareils" },
    { id: 7, question: "Qu'est-ce que no-logs?", answer: "Les fournisseurs VPN n'enregistrent pas l'historique, les temps de connexion ou les IP.", category: "Confidentialité" },
    { id: 8, question: "Qu'est-ce que kill switch?", answer: "Déconnecte automatiquement Internet si la connexion VPN est interrompue.", category: "Sécurité" },
    { id: 9, question: "VPN sur mobile?", answer: "Oui, la plupart des VPN proposent des applications pour iOS et Android.", category: "Mobile" },
    { id: 10, question: "Meilleur VPN Netflix?", answer: "NordVPN, ExpressVPN et Surfshark sont excellents pour Netflix.", category: "Streaming" }
  ],
  ja: [
    { id: 1, question: "VPNとは?", answer: "VPNはデバイスとインターネット間に暗号化された接続を作成し、プライバシーを保護します。", category: "基本" },
    { id: 2, question: "VPNは合法?", answer: "はい、VPNはほとんどの国で合法的な目的のために合法です。", category: "法律" },
    { id: 3, question: "VPNは遅い?", answer: "VPNは速度を5-20%低下させる可能性があります。プレミアムVPNはこれを最小化します。", category: "パフォーマンス" },
    { id: 4, question: "ストリーミングVPN?", answer: "はい！VPNはNetflix、Huluなどの地域制限コンテンツにアクセスできます。", category: "ストリーミング" },
    { id: 5, question: "無料VPN安全?", answer: "無料VPNはプライバシーを侵害することが多いです。プレミアムVPNはより安全です。", category: "価格" },
    { id: 6, question: "何台のデバイス?", answer: "ほとんどのプレミアムVPNは5-10の同時接続を許可します。", category: "デバイス" },
    { id: 7, question: "ノーログとは?", answer: "VPNプロバイダーはブラウジング履歴、接続時間、IPアドレスを記録しません。", category: "プライバシー" },
    { id: 8, question: "キルスイッチとは?", answer: "VPN接続が切断された場合、自動的にインターネットを切断します。", category: "セキュリティ" },
    { id: 9, question: "モバイルVPN?", answer: "はい、ほとんどのVPNはiOSとAndroid用のアプリを提供しています。", category: "モバイル" },
    { id: 10, question: "Netflix最適VPN?", answer: "NordVPN、ExpressVPN、SurfsharkはNetflixに最適です。", category: "ストリーミング" }
  ],
  ko: [
    { id: 1, question: "VPN이란?", answer: "VPN은 기기와 인터넷 사이에 암호화된 연결을 생성하여 개인 정보를 보호합니다.", category: "기본" },
    { id: 2, question: "VPN 합법?", answer: "네, VPN은 대부분의 국가에서 합법적인 목적으로 합법입니다.", category: "법률" },
    { id: 3, question: "VPN 느림?", answer: "VPN은 속도를 5-20% 감소시킬 수 있습니다. 프리미엄 VPN은 이를 최소화합니다.", category: "성능" },
    { id: 4, question: "스트리밍 VPN?", answer: "네! VPN은 Netflix, Hulu 등의 지역 제한 콘텐츠에 액세스할 수 있습니다.", category: "스트리밍" },
    { id: 5, question: "무료 VPN 안전?", answer: "무료 VPN은 종종 개인 정보를 침해합니다. 프리미엄 VPN이 더 안전합니다.", category: "가격" },
    { id: 6, question: "몇 대의 기기?", answer: "대부분의 프리미엄 VPN은 5-10개의 동시 연결을 허용합니다.", category: "기기" },
    { id: 7, question: "노로그란?", answer: "VPN 제공업체는 브라우징 기록, 연결 시간, IP 주소를 기록하지 않습니다.", category: "개인정보" },
    { id: 8, question: "킬 스위치란?", answer: "VPN 연결이 끊어지면 자동으로 인터넷을 차단합니다.", category: "보안" },
    { id: 9, question: "모바일 VPN?", answer: "네, 대부분의 VPN은 iOS 및 Android용 앱을 제공합니다.", category: "모바일" },
    { id: 10, question: "Netflix 최고 VPN?", answer: "NordVPN, ExpressVPN, Surfshark가 Netflix에 최적입니다.", category: "스트리밍" }
  ]
};

