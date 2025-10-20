/**
 * FAQ Generator Script
 * Generates localized FAQ content for multiple languages
 * Usage: node scripts/generateFAQs.js <language> <count>
 */

const fs = require('fs');
const path = require('path');

// Language configurations
const languageConfigs = {
  de: {
    name: 'Deutsch',
    region: 'Deutschland',
    tone: 'Ciddi, güven odaklı, Tech Advisor/CHIP.de tarzı',
    topics: ['VPN Test', 'Netflix entsperren', 'Datenschutz', 'Sicherheit', 'Streaming']
  },
  fr: {
    name: 'Français',
    region: 'France',
    tone: 'Zarif, editoryal, Clubic/Le Monde Informatique tarzı',
    topics: ['VPN gratuit', 'streaming sécurisé', 'confidentialité', 'Netflix France']
  },
  ja: {
    name: '日本語',
    region: '日本',
    tone: 'Kısa, açıklayıcı, Nikkei Tech/ASCII.jp tarzı',
    topics: ['VPN 使い方', 'セキュリティ 対策', 'Netflix 日本', 'プライバシー']
  },
  es: {
    name: 'Español',
    region: 'España/LATAM',
    tone: 'Enerjik, eğitici, Xataka/Hipertextual tarzı',
    topics: ['VPN gratis', 'Netflix España', 'seguridad online', 'privacidad']
  },
  pt: {
    name: 'Português',
    region: 'Brasil',
    tone: 'Samimi, rehber tonu, TecMundo/Canaltech tarzı',
    topics: ['VPN grátis', 'melhor VPN', 'proteger dados', 'Netflix Brasil']
  },
  ru: {
    name: 'Русский',
    region: 'Россия',
    tone: 'Analitik, profesyonel, TJournal/CNews tarzı',
    topics: ['VPN Россия', 'анонимность', 'стриминг VPN', 'безопасность']
  },
  ar: {
    name: 'العربية',
    region: 'MENA',
    tone: 'Açıklayıcı, güven verici, ArabHardware/TechVoice tarzı',
    topics: ['VPN مجاني', 'أفضل VPN', 'حماية الخصوصية', 'نتفليكس']
  }
};

// Sample FAQ templates (will be expanded with AI generation)
const faqTemplates = {
  de: [
    {
      question: "Was ist ein VPN und wie funktioniert es im Detail?",
      answer: "Ein VPN (Virtual Private Network) ist eine verschlüsselte Verbindung zwischen Ihrem Gerät und dem Internet. Stellen Sie sich vor, Sie schicken einen Brief in einem versiegelten Umschlag statt auf einer Postkarte – genau so schützt ein VPN Ihre Daten. Wenn Sie sich mit einem VPN-Server verbinden, wird Ihre echte IP-Adresse maskiert und Ihr gesamter Datenverkehr durch einen verschlüsselten Tunnel geleitet. Das bedeutet: Ihr Internetanbieter, Hacker in öffentlichen WLAN-Netzen oder sogar staatliche Überwachung können nicht sehen, welche Websites Sie besuchen oder welche Daten Sie übertragen. In Deutschland ist das besonders wichtig, da die Vorratsdatenspeicherung immer wieder diskutiert wird. Ein gutes VPN nutzt militärische AES-256-Verschlüsselung und speichert keine Logs Ihrer Aktivitäten. Profi-Tipp: Achten Sie bei der Auswahl auf Anbieter mit Sitz außerhalb der 14-Eyes-Allianz, um maximalen Datenschutz zu gewährleisten.",
      category: "Grundlagen"
    },
    {
      question: "Kann ich mit einem VPN wirklich Netflix Deutschland im Ausland schauen?",
      answer: "Ja, das funktioniert tatsächlich – allerdings nicht mit jedem VPN. Netflix blockiert aktiv viele VPN-Server, weshalb Sie einen Premium-Anbieter benötigen, der seine Server regelmäßig aktualisiert. Wenn Sie beispielsweise im Urlaub in Spanien sind und Ihre deutschen Lieblingsserien weiterschauen möchten, verbinden Sie sich einfach mit einem deutschen VPN-Server. Netflix erkennt dann eine deutsche IP-Adresse und schaltet die deutschen Inhalte frei. Wichtig: Kostenlose VPNs funktionieren hier fast nie, da Netflix deren Server-IPs kennt und sperrt. ExpressVPN, NordVPN und Surfshark haben sich in Tests als besonders zuverlässig erwiesen. Diese Dienste investieren kontinuierlich in neue Server-Infrastruktur, um den Streaming-Zugang aufrechtzuerhalten. Profi-Tipp: Wenn ein Server blockiert wird, wechseln Sie einfach zu einem anderen Server in Deutschland – die meisten Premium-VPNs bieten mehrere Standorte an.",
      category: "Streaming"
    }
  ],
  fr: [
    {
      question: "Un VPN ralentit-il vraiment ma connexion Internet ?",
      answer: "C'est une question légitime que beaucoup se posent avant de souscrire à un VPN. La réponse courte : oui, mais de manière souvent imperceptible avec un bon service. Lorsque vous utilisez un VPN, vos données font un détour par un serveur distant avant d'atteindre leur destination finale. Ce trajet supplémentaire, combiné au processus de chiffrement, peut théoriquement ralentir votre connexion. Cependant, les VPN premium modernes comme NordVPN ou ExpressVPN utilisent des protocoles ultra-rapides comme WireGuard qui minimisent cette perte. Dans la pratique, avec une connexion fibre française standard, vous ne remarquerez probablement aucune différence pour la navigation ou le streaming en HD. Les tests montrent une réduction de vitesse de seulement 5 à 15% avec les meilleurs services. Astuce pro : choisissez toujours un serveur géographiquement proche pour optimiser la vitesse – un serveur à Paris sera plus rapide qu'un serveur à Tokyo.",
      category: "Performance"
    }
  ],
  ja: [
    {
      question: "VPNを使うと本当にネット速度が遅くなりますか？",
      answer: "VPNを使うと多少速度が落ちるのは事実ですが、優れたサービスなら体感できないレベルです。VPN接続では、データが暗号化され、VPNサーバーを経由してから目的地に届くため、理論上は遅延が発生します。しかし、NordVPNやExpressVPNのような最新のVPNサービスは、WireGuardなどの高速プロトコルを採用しており、速度低下を最小限に抑えています。実際のテストでは、日本の光回線で5〜15%程度の速度低下に留まり、Netflix視聴やウェブ閲覧には全く支障がありません。むしろ、ISPによる帯域制限を回避できるため、特定のサービスでは速度が向上することもあります。プロのコツ：東京や大阪など、物理的に近いサーバーを選ぶことで、さらに高速な接続が可能になります。",
      category: "パフォーマンス"
    }
  ],
  es: [
    {
      question: "¿Es legal usar una VPN en España?",
      answer: "Sí, usar una VPN en España es completamente legal y cada vez más común entre usuarios conscientes de su privacidad. La legislación española no prohíbe el uso de redes privadas virtuales para proteger tus datos personales o acceder a contenido de forma segura. De hecho, muchas empresas españolas requieren que sus empleados usen VPN para trabajar de forma remota. Lo que sí es importante entender es que, aunque la herramienta es legal, lo que hagas con ella debe serlo también. Por ejemplo, usar una VPN para protegerte en WiFi públicas o acceder a tu cuenta bancaria de forma segura está perfectamente bien. Sin embargo, utilizarla para actividades ilegales como piratería o fraude sigue siendo delito. La mayoría de servicios VPN premium como NordVPN o Surfshark operan legalmente en España y cumplen con el RGPD europeo. Consejo pro: elige siempre proveedores con política de no registros auditada independientemente para máxima privacidad.",
      category: "Legal"
    }
  ],
  pt: [
    {
      question: "VPN grátis é seguro ou devo pagar por um serviço?",
      answer: "Essa é uma das perguntas mais importantes sobre VPNs, e a resposta pode surpreender você. VPNs gratuitas parecem tentadoras, mas na maioria dos casos você acaba pagando de outra forma – com seus dados pessoais. Muitos serviços gratuitos ganham dinheiro vendendo informações sobre seus hábitos de navegação para anunciantes, o que derrota completamente o propósito de usar uma VPN. Além disso, VPNs grátis geralmente têm limites de dados (tipo 500MB por mês), velocidades muito lentas e poucos servidores disponíveis. Para assistir Netflix ou proteger suas compras online, isso simplesmente não funciona. Um VPN pago como NordVPN ou Surfshark custa menos de R$15 por mês em planos anuais e oferece velocidade ilimitada, servidores no mundo todo e criptografia de nível militar. Dica de ouro: aproveite os períodos de teste com garantia de reembolso de 30 dias para testar antes de se comprometer.",
      category: "Segurança"
    }
  ],
  ru: [
    {
      question: "Можно ли использовать VPN в России в 2025 году?",
      answer: "Ситуация с VPN в России действительно сложная, но использование остается возможным. С 2017 года в России действует закон, обязывающий VPN-сервисы блокировать доступ к запрещенным сайтам, однако многие международные провайдеры не подчиняются этому требованию. Роскомнадзор периодически блокирует IP-адреса VPN-серверов, но ведущие сервисы вроде ExpressVPN и NordVPN постоянно обновляют свою инфраструктуру, добавляя новые серверы. Важно понимать: использование VPN для личных целей – защиты данных, безопасного онлайн-банкинга или доступа к заблокированным соцсетям – не преследуется для обычных пользователей. Проблемы возникают только при использовании VPN для коммерческих целей без регистрации. Совет эксперта: выбирайте VPN с функцией обфускации (маскировки VPN-трафика) и протоколом WireGuard для максимальной стабильности соединения в российских условиях.",
      category: "Юридические вопросы"
    }
  ],
  ar: [
    {
      question: "هل استخدام VPN قانوني في الدول العربية؟",
      answer: "الوضع القانوني لاستخدام VPN يختلف من دولة عربية لأخرى، لذا من المهم فهم القوانين المحلية. في معظم دول الخليج مثل الإمارات والسعودية، استخدام VPN للأغراض الشخصية المشروعة مثل حماية الخصوصية أو الوصول الآمن للخدمات المصرفية قانوني تماماً. المشكلة تحدث فقط عند استخدام VPN لأنشطة غير قانونية مثل الاحتيال أو الوصول لمحتوى محظور. في مصر والأردن والمغرب، لا توجد قيود صريحة على استخدام VPN الشخصي. الشركات الكبرى تستخدم VPN بشكل روتيني لحماية بيانات الموظفين. المفتاح هو اختيار خدمة VPN موثوقة مثل ExpressVPN أو NordVPN التي تلتزم بسياسة عدم الاحتفاظ بالسجلات. نصيحة الخبراء: استخدم VPN دائماً عند الاتصال بشبكات واي فاي العامة في المقاهي والفنادق لحماية معلوماتك الشخصية من القرصنة.",
      category: "القانونية"
    }
  ]
};

// Generate FAQ content
function generateFAQs(language, count) {
  const config = languageConfigs[language];
  if (!config) {
    console.error(`Language ${language} not supported`);
    return;
  }

  console.log(`Generating ${count} FAQs for ${config.name}...`);
  
  // For now, use templates and repeat/modify them
  // In production, this would call an AI API
  const templates = faqTemplates[language] || [];
  const faqs = [];
  
  for (let i = 0; i < count; i++) {
    const template = templates[i % templates.length];
    if (template) {
      faqs.push({
        ...template,
        id: i + 1
      });
    }
  }

  return faqs;
}

// Save FAQs to file
function saveFAQs(language, faqs, partNumber = 1, faqsPerPart = 50) {
  const dir = path.join(__dirname, '..', 'faq', language);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Split into parts
  const totalParts = Math.ceil(faqs.length / faqsPerPart);
  
  for (let i = 0; i < totalParts; i++) {
    const start = i * faqsPerPart;
    const end = Math.min(start + faqsPerPart, faqs.length);
    const partFaqs = faqs.slice(start, end);
    
    const filename = `faq-part-${String(i + 1).padStart(3, '0')}.json`;
    const filepath = path.join(dir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(partFaqs, null, 2), 'utf-8');
    console.log(`✓ Saved ${partFaqs.length} FAQs to ${filename}`);
  }
}

// Main execution
const args = process.argv.slice(2);
const language = args[0] || 'de';
const count = parseInt(args[1]) || 200;

const faqs = generateFAQs(language, count);
if (faqs && faqs.length > 0) {
  saveFAQs(language, faqs);
  console.log(`\n✓ Successfully generated ${faqs.length} FAQs for ${language}`);
} else {
  console.error('Failed to generate FAQs');
}
