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
    { 
      id: 1, 
      question: "Was ist ein VPN und wie funktioniert die VPN-Technologie?", 
      answer: "Ein VPN (Virtual Private Network) ist eine essenzielle Sicherheitstechnologie, die eine verschlüsselte Verbindung zwischen Ihrem Gerät und dem Internet herstellt. Die VPN-Software erstellt einen sicheren Tunnel, durch den Ihr gesamter Datenverkehr geleitet wird. Dabei wird Ihre echte IP-Adresse maskiert und durch die IP-Adresse des VPN-Servers ersetzt. Die moderne VPN-Verschlüsselung nutzt militärische AES-256-Bit-Standards, die selbst von Supercomputern nicht geknackt werden können. VPN-Protokolle wie WireGuard, OpenVPN oder IKEv2 sorgen für die sichere Datenübertragung. Besonders wichtig: Ein VPN schützt nicht nur vor Hackern in öffentlichen WLAN-Netzwerken, sondern verhindert auch, dass Ihr Internetanbieter (ISP) Ihre Online-Aktivitäten überwacht. Für deutsche Nutzer ist ein VPN unverzichtbar, um die digitale Privatsphäre gemäß DSGVO-Standards zu wahren und gleichzeitig geografische Beschränkungen bei Streaming-Diensten zu umgehen. Die VPN-Technologie kombiniert Sicherheit, Anonymität und Freiheit im Internet.", 
      category: "Grundlagen" 
    },
    { 
      id: 2, 
      question: "Ist die Nutzung von VPN in Deutschland und Europa legal?", 
      answer: "Die VPN-Nutzung ist in Deutschland, Österreich, der Schweiz und der gesamten Europäischen Union vollständig legal. VPN-Dienste sind legitime Datenschutz-Tools, die von Millionen Privatpersonen und Unternehmen täglich genutzt werden. Das deutsche Telemediengesetz und die EU-Datenschutz-Grundverordnung (DSGVO) schützen ausdrücklich das Recht auf digitale Privatsphäre. Wichtig zu verstehen: Legal ist die VPN-Technologie selbst – illegal können nur die Handlungen sein, die Sie damit ausführen. Das bedeutet: VPN für sicheres Online-Banking, Schutz im öffentlichen WLAN, Zugriff auf Streaming-Dienste oder anonymes Surfen ist absolut rechtmäßig. Illegale Aktivitäten wie Urheberrechtsverletzungen, Hacking oder der Zugriff auf verbotene Inhalte bleiben auch mit VPN strafbar. In autoritären Ländern wie China, Russland, Iran oder den Vereinigten Arabischen Emiraten ist die VPN-Nutzung eingeschränkt oder verboten. Deutsche Reisende sollten sich vor Auslandsreisen über die lokale Rechtslage informieren. Für den europäischen Raum gilt: VPN-Nutzung ist Ihr gutes Recht.", 
      category: "Rechtliches" 
    },
    { 
      id: 3, 
      question: "Verlangsamt ein VPN meine Internetgeschwindigkeit wirklich?", 
      answer: "Ja, ein VPN kann die Internetgeschwindigkeit beeinflussen, aber moderne Premium-VPN-Dienste minimieren diesen Effekt erheblich. Die Geschwindigkeitsreduktion entsteht durch drei Faktoren: Erstens die Verschlüsselung Ihrer Daten, zweitens die zusätzliche Distanz zum VPN-Server und drittens die Serverauslastung. Bei hochwertigen VPN-Anbietern wie NordVPN, ExpressVPN oder Surfshark liegt der Geschwindigkeitsverlust typischerweise zwischen 5-15%, was im Alltag kaum spürbar ist. Entscheidend für optimale Performance: Wählen Sie VPN-Server in geografischer Nähe, nutzen Sie das moderne WireGuard-Protokoll statt älterer Protokolle, und achten Sie auf VPN-Anbieter mit 10-Gbit/s-Servern. Interessanterweise kann ein VPN Ihre Geschwindigkeit sogar verbessern, wenn Ihr Internetanbieter gezielt bestimmte Dienste drosselt (Throttling). Durch die VPN-Verschlüsselung kann Ihr ISP nicht mehr erkennen, welche Dienste Sie nutzen, und die Drosselung wird umgangen. Für 4K-Streaming, Gaming oder große Downloads empfehlen wir VPN-Server mit niedriger Latenz unter 50ms. Kostenlose VPNs verursachen oft 50-70% Geschwindigkeitsverlust – ein weiterer Grund für Premium-Dienste.", 
      category: "Leistung" 
    },
    { 
      id: 4, 
      question: "Funktioniert VPN für Netflix, Disney+ und andere Streaming-Dienste?", 
      answer: "Ja, Premium-VPN-Dienste funktionieren hervorragend für Streaming-Plattformen wie Netflix, Disney+, Amazon Prime Video, HBO Max und BBC iPlayer. Streaming-Anbieter nutzen Geoblocking-Technologie, um Inhalte regional zu beschränken – ein VPN umgeht diese Sperren, indem es Ihre IP-Adresse ändert. Beispiel: Mit einem US-VPN-Server greifen Sie auf die amerikanische Netflix-Bibliothek zu, die deutlich mehr Filme und Serien bietet als die deutsche Version. Wichtig: Nicht alle VPNs funktionieren mit Streaming-Diensten. Netflix, Disney+ und Co. setzen fortschrittliche VPN-Erkennungssysteme ein und blockieren bekannte VPN-IP-Adressen. Unsere Tests zeigen: NordVPN, ExpressVPN, Surfshark und CyberGhost umgehen diese Sperren zuverlässig durch dedizierte Streaming-Server und regelmäßige IP-Rotationen. Für optimales Streaming-Erlebnis benötigen Sie mindestens 25 Mbit/s für 4K-Inhalte. Achten Sie auf VPN-Anbieter mit unbegrenzter Bandbreite und Smart DNS-Funktionen für Geräte, die keine native VPN-App unterstützen, wie Smart-TVs oder Spielkonsolen. Mit dem richtigen VPN genießen Sie weltweite Streaming-Freiheit ohne Pufferung.", 
      category: "Streaming" 
    },
    { 
      id: 5, 
      question: "Warum sind kostenlose VPNs gefährlich und welche Risiken bestehen?", 
      answer: "Kostenlose VPN-Dienste sind ein erhebliches Sicherheitsrisiko und gefährden Ihre Privatsphäre massiv. Untersuchungen zeigen: Über 80% der kostenlosen VPN-Apps sammeln und verkaufen Nutzerdaten an Werbefirmen und Datenbroker. Das Geschäftsmodell ist einfach: Wenn Sie nicht für das Produkt bezahlen, sind Sie das Produkt. Konkrete Gefahren kostenloser VPNs: Erstens werden Ihre Browsing-Daten, Suchanfragen und Online-Aktivitäten protokolliert und monetarisiert. Zweitens enthalten viele kostenlose VPN-Apps Malware, Spyware oder aggressive Werbe-Tracker. Drittens ist die Verschlüsselung oft schwach oder nicht vorhanden – Ihre Daten sind ungeschützt. Viertens sind die Server hoffnungslos überlastet, was zu extrem langsamen Geschwindigkeiten führt. Fünftens gibt es strikte Datenlimits von 500MB-2GB pro Monat. Besonders problematisch: Viele kostenlose VPNs stammen aus China und unterliegen chinesischen Datenschutzgesetzen. Premium-VPNs kosten nur 3-5 Euro monatlich bei Jahresabonnements und bieten echte No-Logs-Richtlinien, militärische Verschlüsselung, unbegrenzte Bandbreite und geprüfte Sicherheit. Investieren Sie in Ihre digitale Sicherheit – kostenlose VPNs sind das Risiko nicht wert.", 
      category: "Preise" 
    },
    { 
      id: 6, 
      question: "Auf wie vielen Geräten kann ich ein VPN gleichzeitig nutzen?", 
      answer: "Die Anzahl gleichzeitiger VPN-Verbindungen variiert je nach Anbieter erheblich. Die meisten Premium-VPN-Dienste erlauben 5-10 simultane Geräteverbindungen pro Account. Konkret: NordVPN bietet 6 gleichzeitige Verbindungen, ExpressVPN erlaubt 8 Geräte, während Surfshark unbegrenzte simultane Verbindungen ermöglicht – ideal für Familien oder Nutzer mit vielen Geräten. Typische Geräte-Szenarien: Smartphone (iOS/Android), Laptop (Windows/Mac), Tablet, Smart-TV, Router und Spielkonsole. Profi-Tipp: Installieren Sie das VPN direkt auf Ihrem WLAN-Router, dann sind automatisch alle verbundenen Geräte geschützt, ohne dass die Verbindungslimits greifen. Die VPN-Router-Installation schützt auch Geräte ohne native VPN-Unterstützung wie Smart-Home-Geräte, Streaming-Sticks oder IoT-Devices. Wichtig für Familien: Mit einem VPN-Account können alle Familienmitglieder gleichzeitig geschützt surfen, streamen und arbeiten. Die besten VPN-Apps bieten plattformübergreifende Synchronisation, sodass Ihre Einstellungen und Favoriten auf allen Geräten verfügbar sind. Achten Sie bei der VPN-Auswahl auf großzügige Gerätelimits, besonders wenn Sie ein digitales Zuhause mit vielen vernetzten Geräten haben.", 
      category: "Geräte" 
    },
    { 
      id: 7, 
      question: "Was bedeutet No-Logs-Policy und warum ist sie wichtig?", 
      answer: "Eine No-Logs-Policy (Keine-Protokollierung-Richtlinie) ist das wichtigste Datenschutz-Merkmal eines VPN-Dienstes. Sie garantiert, dass der VPN-Anbieter keinerlei Daten über Ihre Online-Aktivitäten speichert. Konkret bedeutet No-Logs: Keine Aufzeichnung Ihrer besuchten Websites, keine Speicherung Ihrer Verbindungszeiten, keine Protokollierung Ihrer IP-Adresse, keine Logs über heruntergeladene Dateien und keine Aufzeichnung Ihrer Suchanfragen. Warum ist das kritisch? Selbst wenn Behörden oder Gerichte den VPN-Anbieter zur Datenherausgabe zwingen, existieren keine Daten, die herausgegeben werden könnten. Wichtig: Nicht alle No-Logs-Versprechen sind echt. Vertrauenswürdige VPN-Anbieter lassen ihre No-Logs-Policy durch unabhängige Sicherheitsfirmen wie PwC, Deloitte oder Cure53 auditieren. Beispiele geprüfter VPNs: ExpressVPN (TrustedServer-Technologie), NordVPN (jährliche Audits) und Surfshark (RAM-only-Server). Zusätzlicher Schutz: VPNs mit Sitz in datenschutzfreundlichen Ländern wie Panama, Schweiz oder Britische Jungferninseln unterliegen keinen Vorratsdatenspeicherungsgesetzen. Für maximale Anonymität kombinieren Sie No-Logs-VPN mit anonymen Zahlungsmethoden wie Kryptowährungen. Eine verifizierte No-Logs-Policy ist Ihr Schutzschild für digitale Privatsphäre.", 
      category: "Datenschutz" 
    },
    { 
      id: 8, 
      question: "Was ist ein VPN-Kill-Switch und warum brauche ich ihn?", 
      answer: "Ein VPN-Kill-Switch ist eine essenzielle Sicherheitsfunktion, die Ihre Internetverbindung automatisch trennt, wenn die VPN-Verbindung unerwartet abbricht. Ohne Kill-Switch würde Ihr Gerät bei VPN-Ausfall sofort zur normalen, ungeschützten Internetverbindung zurückkehren – Ihre echte IP-Adresse und alle Daten wären plötzlich sichtbar. Der Kill-Switch verhindert diese gefährlichen IP-Lecks. Technisch funktioniert es so: Der Kill-Switch überwacht kontinuierlich die VPN-Verbindung. Bei Unterbrechung blockiert er sofort den gesamten Internetverkehr auf Netzwerkebene, bis die sichere VPN-Verbindung wiederhergestellt ist. Besonders wichtig für: Torrenting und P2P-Downloads, wo IP-Lecks rechtliche Konsequenzen haben können; Online-Banking in öffentlichen WLANs; Journalisten und Aktivisten in Risikoländern; Geschäftsreisende mit sensiblen Firmendaten. Es gibt zwei Kill-Switch-Typen: App-Level-Kill-Switch stoppt nur bestimmte Anwendungen, während System-Level-Kill-Switch den gesamten Internetverkehr blockiert – letzterer bietet maximale Sicherheit. Premium-VPNs wie NordVPN, ExpressVPN und ProtonVPN bieten zuverlässige Kill-Switch-Funktionen. Prüfen Sie regelmäßig, ob Ihr Kill-Switch aktiviert ist – er ist Ihre letzte Verteidigungslinie gegen Datenlecks und sollte niemals deaktiviert werden.", 
      category: "Sicherheit" 
    },
    { 
      id: 9, 
      question: "Wie nutze ich VPN auf meinem Smartphone (iOS und Android)?", 
      answer: "Die VPN-Nutzung auf Smartphones ist denkbar einfach und essentiell für mobile Sicherheit. Alle führenden VPN-Anbieter bieten native Apps für iOS (iPhone/iPad) und Android-Geräte. Installation in 3 Schritten: Erstens, laden Sie die offizielle VPN-App aus dem Apple App Store oder Google Play Store herunter. Zweitens, melden Sie sich mit Ihren Zugangsdaten an. Drittens, tippen Sie auf den Verbinden-Button – fertig, Ihr Smartphone ist geschützt. Mobile VPN-Apps bieten volle Funktionalität: automatische Server-Auswahl für optimale Geschwindigkeit, Kill-Switch-Schutz, Split-Tunneling für App-spezifische VPN-Nutzung und Quick-Connect für schnelle Verbindungen. Besonders nützlich: Auto-Connect-Funktion aktiviert das VPN automatisch bei unsicheren WLAN-Netzwerken. Warum mobile VPNs unverzichtbar sind: Smartphones verbinden sich ständig mit öffentlichen WLANs in Cafés, Flughäfen, Hotels oder Bahnhöfen – perfekte Angriffsziele für Hacker. Ein VPN verschlüsselt Ihren mobilen Datenverkehr und schützt vor Man-in-the-Middle-Angriffen. Zusätzlich umgehen Sie mobile Datendrosselung durch Ihren Mobilfunkanbieter. Batterieverbrauch: Moderne VPN-Apps mit WireGuard-Protokoll verbrauchen nur 5-10% zusätzliche Batterie. Für optimale Performance wählen Sie VPN-Server in Ihrer Nähe und aktivieren Sie die automatische Protokollwahl.", 
      category: "Mobil" 
    },
    { 
      id: 10, 
      question: "Welches ist das beste VPN für Netflix-Streaming in Deutschland?", 
      answer: "Für zuverlässiges Netflix-Streaming empfehlen wir nach ausführlichen Tests drei Premium-VPNs: NordVPN, ExpressVPN und Surfshark. Diese VPN-Dienste umgehen Netflixs VPN-Erkennungssysteme konsistent und bieten Zugriff auf internationale Netflix-Bibliotheken. NordVPN punktet mit über 5.400 Servern in 60 Ländern, speziellen Streaming-Servern und SmartPlay-Technologie für automatische Geo-Unblocking. Die Geschwindigkeiten sind exzellent für 4K-Streaming ohne Pufferung. ExpressVPN bietet die schnellsten Verbindungen dank Lightway-Protokoll und funktioniert mit allen Netflix-Regionen inklusive US, UK, Japan und Kanada. Besonders praktisch: MediaStreamer-Funktion für Smart-TVs ohne native VPN-App. Surfshark ist der Preis-Leistungs-Sieger mit unbegrenzten Geräteverbindungen – perfekt für Familien. Funktioniert zuverlässig mit Netflix, Disney+, Amazon Prime, HBO Max und BBC iPlayer. Wichtige Features für Netflix-VPN: Unbegrenzte Bandbreite für HD/4K-Streaming, keine Datenlimits, Server-Netzwerk mit niedrigen Latenzen unter 50ms, 24/7-Kundensupport bei Verbindungsproblemen und regelmäßige IP-Rotationen gegen VPN-Blockaden. Profi-Tipp: Verbinden Sie sich mit VPN-Servern in Großstädten wie New York, London oder Tokyo für beste Netflix-Performance. Mit dem richtigen VPN genießen Sie Zugriff auf über 15.000 zusätzliche Filme und Serien.", 
      category: "Streaming" 
    }
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

