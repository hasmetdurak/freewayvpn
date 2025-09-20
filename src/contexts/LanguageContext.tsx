import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { generateHrefLangTags, insertHrefLangTags, updateCanonicalUrl, updateMetaLanguage } from '../utils/seoUtils';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

// Define the structure of our translations
interface Translations {
  [key: string]: string;
}

// Define the structure of our translations object
interface TranslationsObject {
  [key: string]: Translations;
}

// Define FAQ translations structure
interface FAQTranslations {
  [key: string]: {
    question: string;
    answer: string;
    category: string;
  }[];
}

// FAQ translations for all languages
const faqTranslations: FAQTranslations = {
  en: [
    {
      question: "What is a VPN and how does it work?",
      answer: "A VPN (Virtual Private Network) creates a secure, encrypted connection between your device and the internet, routing traffic through a remote server to mask your IP address. This shields your data from hackers, ISPs, and trackers, ensuring privacy. In 2025, VPNs are vital due to rising cyber threats, widespread data tracking, and increasing content restrictions. They're perfect for secure browsing on public Wi-Fi, accessing geo-blocked content like Netflix libraries, and bypassing censorship in restrictive regions.",
      category: "Basics"
    },
    {
      question: "Are VPNs legal to use?",
      answer: "VPNs are legal in most countries around the world, including the United States, Canada, UK, and most European countries. However, some countries like China, Russia, and Iran have restrictions or bans on VPN usage. Always check local laws before using a VPN.",
      category: "Legal"
    },
    {
      question: "Do VPNs slow down internet speed?",
      answer: "VPNs can reduce internet speed due to encryption overhead and the additional distance data travels through VPN servers. However, premium VPNs typically cause minimal speed loss (5-15%), and some may even improve speeds by bypassing ISP throttling.",
      category: "Performance"
    }
  ],
  tr: [
    {
      question: "VPN nedir ve nasıl çalışır?",
      answer: "VPN (Sanal Özel Ağ), cihazınız ile internet arasında güvenli, şifreli bir bağlantı oluşturur ve IP adresinizi gizlemek için trafiği uzak bir sunucu üzerinden yönlendirir. Bu, verilerinizi bilgisayar korsanlarından, ISS'lerden ve izleyicilerden koruyarak gizliliği sağlar. 2025 yılında artan siber tehditler, yaygın veri izleme ve artan içerik kısıtlamaları nedeniyle VPN'ler hayati öneme sahiptir. Halka açık Wi-Fi üzerinde güvenli gezinme, Netflix kitaplıkları gibi coğrafi olarak engellenmiş içeriğe erişme ve kısıtlayıcı bölgelerde sansürü aşmak için mükemmeldirler.",
      category: "Temel Bilgiler"
    },
    {
      question: "VPN'leri kullanmak yasal mıdır?",
      answer: "VPN'ler, Amerika Birleşik Devletleri, Kanada, Birleşik Krallık ve çoğu Avrupa ülkesi dahil olmak üzere dünyanın çoğu ülkesinde yasaldır. Ancak Çin, Rusya ve İran gibi bazı ülkelerde VPN kullanımı ile ilgili kısıtlamalar veya yasaklar vardır. VPN kullanmadan önce her zaman yerel yasaları kontrol edin.",
      category: "Yasal"
    },
    {
      question: "VPN'ler internet hızını yavaşlatır mı?",
      answer: "VPN'ler, şifreleme ek yükü ve VPN sunucuları aracılığıyla verilerin kat ettiği ek mesafe nedeniyle internet hızını azaltabilir. Ancak, premium VPN'ler genellikle minimum hız kaybına (5-15%) neden olur ve bazıları ISP daraltmasını atlayarak hızları bile artırabilir.",
      category: "Performans"
    }
  ],
  pt: [
    {
      question: "O que é uma VPN e como funciona?",
      answer: "Uma VPN (Rede Privada Virtual) cria uma conexão segura e criptografada entre seu dispositivo e a internet, roteando o tráfego através de um servidor remoto para mascarar seu endereço IP. Isso protege seus dados de hackers, ISPs e rastreadores, garantindo privacidade. Em 2025, as VPNs são vitais devido ao aumento das ameaças cibernéticas, rastreamento generalizado de dados e crescentes restrições de conteúdo. São perfeitas para navegação segura em Wi-Fi público, acesso a conteúdo geo-bloqueado como bibliotecas Netflix e contornar censura em regiões restritivas.",
      category: "Básico"
    },
    {
      question: "É legal usar VPNs?",
      answer: "VPNs são legais na maioria dos países ao redor do mundo, incluindo Estados Unidos, Canadá, Reino Unido e a maioria dos países europeus. No entanto, alguns países como China, Rússia e Irã têm restrições ou proibições no uso de VPN. Sempre verifique as leis locais antes de usar uma VPN.",
      category: "Legal"
    },
    {
      question: "VPNs diminuem a velocidade da internet?",
      answer: "VPNs podem reduzir a velocidade da internet devido à sobrecarga de criptografia e à distância adicional que os dados percorrem através dos servidores VPN. No entanto, VPNs premium geralmente causam perda mínima de velocidade (5-15%), e algumas podem até melhorar as velocidades contornando o throttling do ISP.",
      category: "Desempenho"
    }
  ],
  vi: [
    {
      question: "VPN là gì và hoạt động như thế nào?",
      answer: "VPN (Mạng Riêng Ảo) tạo ra một kết nối an toàn, được mã hóa giữa thiết bị của bạn và internet, định tuyến lưu lượng qua một máy chủ từ xa để che giấu địa chỉ IP của bạn. Điều này bảo vệ dữ liệu của bạn khỏi tin tặc, ISP và trình theo dõi, đảm bảo quyền riêng tư. Năm 2025, VPN rất quan trọng do các mối đe dọa mạng ngày càng tăng, việc theo dõi dữ liệu rộng rãi và các hạn chế nội dung ngày càng nhiều. Chúng hoàn hảo cho việc duyệt web an toàn trên Wi-Fi công cộng, truy cập nội dung bị chặn địa lý như thư viện Netflix và vượt qua kiểm duyệt ở các khu vực hạn chế.",
      category: "Cơ bản"
    },
    {
      question: "Sử dụng VPN có hợp pháp không?",
      answer: "VPN hợp pháp ở hầu hết các quốc gia trên thế giới, bao gồm Hoa Kỳ, Canada, Anh và hầu hết các nước châu Âu. Tuy nhiên, một số quốc gia như Trung Quốc, Nga và Iran có các hạn chế hoặc cấm sử dụng VPN. Luôn kiểm tra luật pháp địa phương trước khi sử dụng VPN.",
      category: "Pháp lý"
    },
    {
      question: "VPN có làm chậm tốc độ internet không?",
      answer: "VPN có thể giảm tốc độ internet do chi phí mã hóa và khoảng cách bổ sung mà dữ liệu phải đi qua các máy chủ VPN. Tuy nhiên, các VPN cao cấp thường chỉ gây ra mất tốc độ tối thiểu (5-15%), và một số thậm chí có thể cải thiện tốc độ bằng cách bỏ qua việc điều chỉnh ISP.",
      category: "Hiệu suất"
    }
  ],
  th: [
    {
      question: "VPN คืออะไรและทำงานอย่างไร?",
      answer: "VPN (Virtual Private Network) สร้างการเชื่อมต่อที่ปลอดภัยและเข้ารหัสระหว่างอุปกรณ์ของคุณกับอินเทอร์เน็ต โดยส่งข้อมูลผ่านเซิร์ฟเวอร์ระยะไกลเพื่อซ่อนที่อยู่ IP ของคุณ สิ่งนี้ปกป้องข้อมูลของคุณจากแฮกเกอร์ ISP และตัวติดตาม รับประกันความเป็นส่วนตัว ในปี 2025 VPN มีความสำคัญเนื่องจากภัยคุกคามทางไซเบอร์ที่เพิ่มขึ้น การติดตามข้อมูลอย่างแพร่หลาย และข้อจำกัดเนื้อหาที่เพิ่มขึ้น เหมาะสำหรับการเรียกดูอย่างปลอดภัยบน Wi-Fi สาธารณะ การเข้าถึงเนื้อหาที่ถูกบล็อกทางภูมิศาสตร์เช่นไลบรารี Netflix และการหลีกเลี่ยงการเซ็นเซอร์ในภูมิภาคที่มีข้อจำกัด",
      category: "พื้นฐาน"
    },
    {
      question: "การใช้ VPN ถูกกฎหมายหรือไม่?",
      answer: "VPN ถูกกฎหมายในประเทศส่วนใหญ่ทั่วโลก รวมถึงสหรัฐอเมริกา แคนาดา สหราชอาณาจักร และประเทศในยุโรปส่วนใหญ่ อย่างไรก็ตาม บางประเทศเช่นจีน รัสเซีย และอิหร่านมีข้อจำกัดหรือการห้ามใช้ VPN ตรวจสอบกฎหมายท้องถิ่นก่อนใช้ VPN เสมอ",
      category: "กฎหมาย"
    },
    {
      question: "VPN ทำให้ความเร็วอินเทอร์เน็ตช้าลงหรือไม่?",
      answer: "VPN สามารถลดความเร็วอินเทอร์เน็ตได้เนื่องจากภาระการเข้ารหัสและระยะทางเพิ่มเติมที่ข้อมูลต้องเดินทางผ่านเซิร์ฟเวอร์ VPN อย่างไรก็ตาม VPN พรีเมียมมักจะทำให้เสียความเร็วน้อยที่สุด (5-15%) และบางตัวอาจปรับปรุงความเร็วได้โดยการหลีกเลี่ยงการจำกัดของ ISP",
      category: "ประสิทธิภาพ"
    }
  ],
  id: [
    {
      question: "Apa itu VPN dan bagaimana cara kerjanya?",
      answer: "VPN (Virtual Private Network) menciptakan koneksi yang aman dan terenkripsi antara perangkat Anda dan internet, merutekan lalu lintas melalui server jarak jauh untuk menyamarkan alamat IP Anda. Ini melindungi data Anda dari peretas, ISP, dan pelacak, memastikan privasi. Pada tahun 2025, VPN sangat penting karena meningkatnya ancaman siber, pelacakan data yang meluas, dan pembatasan konten yang meningkat. Mereka sempurna untuk browsing aman di Wi-Fi publik, mengakses konten yang diblokir geografis seperti perpustakaan Netflix, dan melewati sensor di wilayah yang membatasi.",
      category: "Dasar"
    },
    {
      question: "Apakah VPN legal untuk digunakan?",
      answer: "VPN legal di sebagian besar negara di dunia, termasuk Amerika Serikat, Kanada, Inggris, dan sebagian besar negara Eropa. Namun, beberapa negara seperti China, Rusia, dan Iran memiliki pembatasan atau larangan penggunaan VPN. Selalu periksa hukum lokal sebelum menggunakan VPN.",
      category: "Hukum"
    },
    {
      question: "Apakah VPN memperlambat kecepatan internet?",
      answer: "VPN dapat mengurangi kecepatan internet karena overhead enkripsi dan jarak tambahan yang harus ditempuh data melalui server VPN. Namun, VPN premium biasanya menyebabkan kehilangan kecepatan minimal (5-15%), dan beberapa bahkan dapat meningkatkan kecepatan dengan melewati throttling ISP.",
      category: "Kinerja"
    }
  ],
  es: [
    {
      question: "¿Qué es una VPN y cómo funciona?",
      answer: "Una VPN (Red Privada Virtual) crea una conexión segura y encriptada entre tu dispositivo e internet, enrutando el tráfico a través de un servidor remoto para enmascarar tu dirección IP. Esto protege tus datos de hackers, ISPs y rastreadores, asegurando privacidad. En 2025, las VPNs son vitales debido al aumento de amenazas cibernéticas, seguimiento generalizado de datos y crecientes restricciones de contenido. Son perfectas para navegación segura en Wi-Fi público, acceder a contenido geo-bloqueado como bibliotecas de Netflix y eludir censura en regiones restrictivas.",
      category: "Básico"
    },
    {
      question: "¿Es legal usar VPNs?",
      answer: "Las VPNs son legales en la mayoría de países del mundo, incluyendo Estados Unidos, Canadá, Reino Unido y la mayoría de países europeos. Sin embargo, algunos países como China, Rusia e Irán tienen restricciones o prohibiciones en el uso de VPN. Siempre verifica las leyes locales antes de usar una VPN.",
      category: "Legal"
    },
    {
      question: "¿Las VPNs ralentizan la velocidad de internet?",
      answer: "Las VPNs pueden reducir la velocidad de internet debido a la sobrecarga de encriptación y la distancia adicional que los datos deben viajar a través de servidores VPN. Sin embargo, las VPNs premium típicamente causan pérdida mínima de velocidad (5-15%), y algunas incluso pueden mejorar velocidades evitando la limitación del ISP.",
      category: "Rendimiento"
    }
  ],
  pl: [
    {
      question: "Czym jest VPN i jak działa?",
      answer: "VPN (Wirtualna Sieć Prywatna) tworzy bezpieczne, zaszyfrowane połączenie między Twoim urządzeniem a internetem, kierując ruch przez zdalny serwer w celu zamaskowania Twojego adresu IP. To chroni Twoje dane przed hakerami, dostawcami internetu i trackerami, zapewniając prywatność. W 2025 roku VPN-y są niezbędne ze względu na rosnące zagrożenia cybernetyczne, powszechne śledzenie danych i rosnące ograniczenia treści. Są idealne do bezpiecznego przeglądania w publicznym Wi-Fi, dostępu do treści zablokowanych geograficznie jak biblioteki Netflix i omijania censury w restrykcyjnych regionach.",
      category: "Podstawy"
    },
    {
      question: "Czy używanie VPN jest legalne?",
      answer: "VPN-y są legalne w większości krajów na świecie, w tym w Stanach Zjednoczonych, Kanadzie, Wielkiej Brytanii i większości krajów europejskich. Jednak niektóre kraje jak Chiny, Rosja i Iran mają ograniczenia lub zakazy używania VPN. Zawsze sprawdź lokalne prawo przed używaniem VPN.",
      category: "Prawne"
    },
    {
      question: "Czy VPN-y spowalniają prędkość internetu?",
      answer: "VPN-y mogą zmniejszyć prędkość internetu ze względu na narzut szyfrowania i dodatkową odległość, jaką dane muszą pokonać przez serwery VPN. Jednak premium VPN-y zazwyczaj powodują minimalną utratę prędkości (5-15%), a niektóre mogą nawet poprawić prędkości omijając ograniczenia dostawcy internetu.",
      category: "Wydajność"
    }
  ],
  fa: [
    {
      question: "VPN چیست و چگونه کار می‌کند؟",
      answer: "VPN (شبکه خصوصی مجازی) یک اتصال امن و رمزگذاری شده بین دستگاه شما و اینترنت ایجاد می‌کند و ترافیک را از طریق یک سرور راه دور هدایت می‌کند تا آدرس IP شما را پنهان کند. این کار داده‌های شما را از هکرها، ارائه‌دهندگان اینترنت و ردیاب‌ها محافظت می‌کند و حریم خصوصی را تضمین می‌کند. در سال 2025، VPN ها به دلیل افزایش تهدیدات سایبری، ردیابی گسترده داده‌ها و افزایش محدودیت‌های محتوا حیاتی هستند. آنها برای مرور امن در Wi-Fi عمومی، دسترسی به محتوای مسدود شده جغرافیایی مانند کتابخانه‌های Netflix و دور زدن سانسور در مناطق محدود کننده عالی هستند.",
      category: "مبانی"
    },
    {
      question: "آیا استفاده از VPN قانونی است؟",
      answer: "VPN ها در اکثر کشورهای جهان قانونی هستند، از جمله ایالات متحده، کانادا، انگلستان و اکثر کشورهای اروپایی. با این حال، برخی کشورها مانند چین، روسیه و ایران محدودیت‌ها یا ممنوعیت‌هایی در استفاده از VPN دارند. همیشه قبل از استفاده از VPN قوانین محلی را بررسی کنید.",
      category: "حقوقی"
    },
    {
      question: "آیا VPN ها سرعت اینترنت را کاهش می‌دهند؟",
      answer: "VPN ها می‌توانند سرعت اینترنت را به دلیل سربار رمزگذاری و مسافت اضافی که داده‌ها باید از طریق سرورهای VPN طی کنند، کاهش دهند. با این حال، VPN های پریمیوم معمولاً باعث کاهش حداقلی سرعت (5-15%) می‌شوند و برخی حتی ممکن است با دور زدن محدودیت ارائه‌دهنده اینترنت، سرعت را بهبود بخشند.",
      category: "عملکرد"
    }
  ],
  ar: [
    {
      question: "ما هو VPN وكيف يعمل؟",
      answer: "VPN (الشبكة الافتراضية الخاصة) ينشئ اتصالاً آمناً ومشفراً بين جهازك والإنترنت، ويوجه حركة المرور عبر خادم بعيد لإخفاء عنوان IP الخاص بك. هذا يحمي بياناتك من المتسللين ومقدمي خدمة الإنترنت والمتتبعين، مما يضمن الخصوصية. في عام 2025، تعتبر شبكات VPN حيوية بسبب تزايد التهديدات السيبرانية وتتبع البيانات الواسع النطاق وزيادة قيود المحتوى. إنها مثالية للتصفح الآمن على Wi-Fi العام والوصول إلى المحتوى المحظور جغرافياً مثل مكتبات Netflix وتجاوز الرقابة في المناطق المقيدة.",
      category: "الأساسيات"
    },
    {
      question: "هل استخدام VPN قانوني؟",
      answer: "شبكات VPN قانونية في معظم دول العالم، بما في ذلك الولايات المتحدة وكندا والمملكة المتحدة ومعظم الدول الأوروبية. ومع ذلك، بعض البلدان مثل الصين وروسيا وإيران لديها قيود أو حظر على استخدام VPN. تحقق دائماً من القوانين المحلية قبل استخدام VPN.",
      category: "قانوني"
    },
    {
      question: "هل تبطئ شبكات VPN سرعة الإنترنت؟",
      answer: "يمكن لشبكات VPN أن تقلل من سرعة الإنترنت بسبب عبء التشفير والمسافة الإضافية التي يجب أن تقطعها البيانات عبر خوادم VPN. ومع ذلك، شبكات VPN المتميزة عادة ما تسبب فقداناً أدنى للسرعة (5-15%)، وقد تحسن بعضها السرعات عن طريق تجاوز اختناق مقدم خدمة الإنترنت.",
      category: "الأداء"
    }
  ],
  fil: [
    {
      question: "Ano ang VPN at paano ito gumagana?",
      answer: "Ang VPN (Virtual Private Network) ay lumilikha ng secure, encrypted na koneksyon sa pagitan ng inyong device at internet, na nagru-route ng traffic sa pamamagitan ng remote server upang itago ang inyong IP address. Ito ay nagpoprotekta sa inyong data mula sa mga hacker, ISP, at tracker, na nagsisiguro ng privacy. Sa 2025, ang mga VPN ay mahalaga dahil sa tumataas na cyber threats, malawakang data tracking, at tumataas na content restrictions. Perpekto sila para sa secure browsing sa public Wi-Fi, pag-access sa geo-blocked content tulad ng Netflix libraries, at pag-bypass ng censorship sa restrictive regions.",
      category: "Pangunahing Kaalaman"
    },
    {
      question: "Legal ba ang paggamit ng mga VPN?",
      answer: "Ang mga VPN ay legal sa karamihan ng mga bansa sa buong mundo, kasama ang United States, Canada, UK, at karamihan ng European countries. Gayunpaman, ang ilang mga bansa tulad ng China, Russia, at Iran ay may mga restrictions o ban sa paggamit ng VPN. Laging suriin ang mga lokal na batas bago gumamit ng VPN.",
      category: "Legal"
    },
    {
      question: "Binabagalan ba ng mga VPN ang internet speed?",
      answer: "Maaaring bawasan ng mga VPN ang internet speed dahil sa encryption overhead at karagdagang distansya na dapat tahakin ng data sa pamamagitan ng VPN servers. Gayunpaman, ang mga premium VPN ay karaniwang nagdudulot ng minimal na pagkawala ng bilis (5-15%), at ang ilan ay maaaring magpabuti pa ng mga bilis sa pamamagitan ng pag-bypass sa ISP throttling.",
      category: "Performance"
    }
  ]
};

export const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', dir: 'ltr' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', dir: 'ltr' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', dir: 'ltr' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', dir: 'ltr' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷', dir: 'rtl' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'fil', name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭', dir: 'ltr' }
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  translateFAQs: (faqs: any[]) => any[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: TranslationsObject = {
  en: {
    // Navigation
    vpns: 'VPNs',
    faq: 'FAQ',
    blog: 'Blog',
    contact: 'Contact Us',
    
    // Language selector
    selectLanguage: 'Select Language',
    moreLanguages: 'More languages coming soon',
    
    // Hero section
     heroTitle: 'Compare the Best VPN Services in 2025',
     heroSubtitle: 'Find the perfect VPN for your needs with our comprehensive comparison',
     exclusiveDeals: 'Exclusive deals available - Save up to 70% on premium VPNs!',
     
     // VPN Page
     compareVpns: 'Compare 100+ Top VPN Services in 2025',
     findPerfectVpn: 'Find the perfect VPN for your needs. Compare features, prices, and performance of the world\'s leading VPN services.',
     
     // Blog Page
     blogTitle: 'VPN News & Guides',
     blogSubtitle: 'Stay updated with the latest VPN news, security tips, and comprehensive guides.',
     
     // Contact Page
     contactTitle: 'Contact Us',
     contactSubtitle: 'Have questions? We\'re here to help you find the perfect VPN solution.',
     
     // Footer
     quickLinks: 'Quick Links',
     
     // Common UI elements
     getStarted: 'Get Started',
    learnMore: 'Learn More',
    readMore: 'Read More',
    viewAll: 'View All',
    search: 'Search',
    filter: 'Filter',
    category: 'Category',
    allCategories: 'All Categories',
    loading: 'Loading...',
    error: 'Error',
    tryAgain: 'Try Again',
    
    // FAQ Page
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Get answers to the most common questions about VPNs, privacy, security, and choosing the right service for your needs.',
    searchFaqs: 'Search FAQs...',
    noFaqsFound: 'No FAQs found matching your criteria.',
    adjustSearch: 'Try adjusting your search or category filter.',
    showingResults: 'Showing {count} of {total} frequently asked questions',
    stillHaveQuestions: 'Still Have Questions?',
    cantFindAnswer: "Can't find the answer you're looking for? Our VPN experts are here to help you choose the perfect VPN service for your needs.",
    contactExperts: 'Contact Our Experts'
  },
  pt: {
    // Navigation
    vpns: 'VPNs',
    faq: 'Perguntas Frequentes',
    blog: 'Blog',
    contact: 'Contate-Nos',
    
    // Language selector
    selectLanguage: 'Selecionar Idioma',
    moreLanguages: 'Mais idiomas em breve',
    
    // Hero section
    heroTitle: 'Compare os Melhores Serviços de VPN em 2025',
    heroSubtitle: 'Encontre a VPN perfeita para suas necessidades com nossa comparação abrangente',
    exclusiveDeals: 'Ofertas exclusivas disponíveis - Economize até 70% em VPNs premium!',
    
    // VPN Page
    compareVpns: 'Compare 100+ Principais Serviços de VPN em 2025',
    findPerfectVpn: 'Encontre a VPN perfeita para suas necessidades. Compare recursos, preços e desempenho dos principais serviços de VPN do mundo.',
    
    // Blog Page
    blogTitle: 'Notícias e Guias sobre VPN',
    blogSubtitle: 'Mantenha-se atualizado com as últimas notícias sobre VPN, dicas de segurança e guias abrangentes.',
    
    // Contact Page
    contactTitle: 'Contate-Nos',
    contactSubtitle: 'Tem perguntas? Estamos aqui para ajudá-lo a encontrar a solução VPN perfeita.',
    
    // Footer
    quickLinks: 'Links Rápidos',
    
    // Common UI elements
    getStarted: 'Começar',
    learnMore: 'Saiba Mais',
    readMore: 'Leia Mais',
    viewAll: 'Ver Todos',
    search: 'Pesquisar',
    filter: 'Filtrar',
    category: 'Categoria',
    allCategories: 'Todas as Categorias',
    loading: 'Carregando...',
    error: 'Erro',
    tryAgain: 'Tentar Novamente',
    
    // FAQ Page
    faqTitle: 'Perguntas Frequentes',
    faqSubtitle: 'Obtenha respostas para as perguntas mais comuns sobre VPNs, privacidade, segurança e como escolher o serviço certo para suas necessidades.',
    searchFaqs: 'Pesquisar Perguntas...',
    noFaqsFound: 'Nenhuma pergunta encontrada com seus critérios.',
    adjustSearch: 'Tente ajustar sua pesquisa ou filtro de categoria.',
    showingResults: 'Mostrando {count} de {total} perguntas frequentes',
    stillHaveQuestions: 'Ainda Tem Dúvidas?',
    cantFindAnswer: 'Não consegue encontrar a resposta que procura? Nossos especialistas em VPN estão aqui para ajudá-lo a escolher o serviço VPN perfeito para suas necessidades.',
    contactExperts: 'Contate Nossos Especialistas'
  },
  vi: {
    // Navigation
    vpns: 'VPN',
    faq: 'Câu hỏi thường gặp',
    blog: 'Blog',
    contact: 'Liên hệ',
    
    // Language selector
    selectLanguage: 'Chọn ngôn ngữ',
    moreLanguages: 'Thêm ngôn ngữ sắp ra mắt',
    
    // Hero section
    heroTitle: 'So sánh các Dịch vụ VPN Tốt nhất năm 2025',
    heroSubtitle: 'Tìm VPN hoàn hảo cho nhu cầu của bạn với sự so sánh toàn diện của chúng tôi',
    exclusiveDeals: 'Ưu đãi độc quyền có sẵn - Tiết kiệm tới 70% cho các VPN cao cấp!',
    
    // VPN Page
    compareVpns: 'So sánh 100+ Dịch vụ VPN Hàng đầu năm 2025',
    findPerfectVpn: 'Tìm VPN hoàn hảo cho nhu cầu của bạn. So sánh tính năng, giá cả và hiệu suất của các dịch vụ VPN hàng đầu thế giới.',
    
    // Blog Page
    blogTitle: 'Tin tức & Hướng dẫn VPN',
    blogSubtitle: 'Luôn cập nhật với tin tức VPN mới nhất, mẹo bảo mật và hướng dẫn toàn diện.',
    
    // Contact Page
    contactTitle: 'Liên hệ',
    contactSubtitle: 'Có câu hỏi? Chúng tôi ở đây để giúp bạn tìm ra giải pháp VPN hoàn hảo.',
    
    // Footer
    quickLinks: 'Liên kết nhanh',
    
    // Common UI elements
    getStarted: 'Bắt đầu',
    learnMore: 'Tìm hiểu thêm',
    readMore: 'Đọc thêm',
    viewAll: 'Xem tất cả',
    search: 'Tìm kiếm',
    filter: 'Lọc',
    category: 'Danh mục',
    allCategories: 'Tất cả danh mục',
    loading: 'Đang tải...',
    error: 'Lỗi',
    tryAgain: 'Thử lại',
    
    // FAQ Page
    faqTitle: 'Câu hỏi thường gặp',
    faqSubtitle: 'Nhận câu trả lời cho các câu hỏi phổ biến nhất về VPN, quyền riêng tư, bảo mật và cách chọn dịch vụ phù hợp với nhu cầu của bạn.',
    searchFaqs: 'Tìm kiếm câu hỏi...',
    noFaqsFound: 'Không tìm thấy câu hỏi nào phù hợp với tiêu chí của bạn.',
    adjustSearch: 'Hãy thử điều chỉnh tìm kiếm hoặc bộ lọc danh mục.',
    showingResults: 'Hiển thị {count} trong số {total} câu hỏi thường gặp',
    stillHaveQuestions: 'Vẫn còn câu hỏi?',
    cantFindAnswer: 'Không thể tìm thấy câu trả lời bạn đang tìm? Các chuyên gia VPN của chúng tôi ở đây để giúp bạn chọn dịch vụ VPN hoàn hảo cho nhu cầu của bạn.',
    contactExperts: 'Liên hệ Chuyên gia của chúng tôi'
  },
  th: {
    // Navigation
    vpns: 'วีพีเอ็น',
    faq: 'คำถามที่พบบ่อย',
    blog: 'บล็อก',
    contact: 'ติดต่อเรา',
    
    // Language selector
    selectLanguage: 'เลือกภาษา',
    moreLanguages: 'ภาษาอื่นๆ เร็วๆ นี้',
    
    // Hero section
    heroTitle: 'เปรียบเทียบบริการวีพีเอ็นที่ดีที่สุดในปี 2025',
    heroSubtitle: 'ค้นหาวีพีเอ็นที่เหมาะกับความต้องการของคุณด้วยการเปรียบเทียบที่ครอบคลุมของเรา',
    exclusiveDeals: 'ดีลพิเศษที่มี - ประหยัดสูงสุด 70% สำหรับวีพีเอ็นพรีเมียม!',
    
    // VPN Page
    compareVpns: 'เปรียบเทียบบริการวีพีเอ็น 100+ อันดับต้นในปี 2025',
    findPerfectVpn: 'ค้นหาวีพีเอ็นที่เหมาะกับความต้องการของคุณ เปรียบเทียบฟีเจอร์ ราคา และประสิทธิภาพของบริการวีพีเอ็นชั้นนำของโลก',
    
    // Blog Page
    blogTitle: 'ข่าวสารและคู่มือวีพีเอ็น',
    blogSubtitle: 'อัปเดตข่าววีพีเอ็นล่าสุด เคล็ดลับความปลอดภัย และคู่มือที่ครอบคลุม',
    
    // Contact Page
    contactTitle: 'ติดต่อเรา',
    contactSubtitle: 'มีคำถาม? เรามาช่วยคุณหาทางแก้ปัญหาวีพีเอ็นที่สมบูรณ์แบบ',
    
    // Footer
    quickLinks: 'ลิงก์ด่วน',
    
    // Common UI elements
    getStarted: 'เริ่มต้น',
    learnMore: 'เรียนรู้เพิ่มเติม',
    readMore: 'อ่านเพิ่มเติม',
    viewAll: 'ดูทั้งหมด',
    search: 'ค้นหา',
    filter: 'กรอง',
    category: 'หมวดหมู่',
    allCategories: 'หมวดหมู่ทั้งหมด',
    loading: 'กำลังโหลด...',
    error: 'ข้อผิดพลาด',
    tryAgain: 'ลองใหม่',
    
    // FAQ Page
    faqTitle: 'คำถามที่พบบ่อย',
    faqSubtitle: 'รับคำตอบสำหรับคำถามที่พบบ่อยที่สุดเกี่ยวกับวีพีเอ็น ความเป็นส่วนตัว ความปลอดภัย และการเลือกบริการที่เหมาะสมกับความต้องการของคุณ',
    searchFaqs: 'ค้นหาคำถาม...',
    noFaqsFound: 'ไม่พบคำถามที่ตรงกับเกณฑ์ของคุณ',
    adjustSearch: 'ลองปรับการค้นหาหรือตัวกรองหมวดหมู่',
    showingResults: 'แสดง {count} จาก {total} คำถามที่พบบ่อย',
    stillHaveQuestions: 'ยังมีคำถาม?',
    cantFindAnswer: 'ไม่สามารถหาคำตอบที่คุณต้องการได้? ผู้เชี่ยวชาญด้านวีพีเอ็นของเราอยู่ที่นี่เพื่อช่วยคุณเลือกบริการวีพีเอ็นที่สมบูรณ์แบบสำหรับความต้องการของคุณ',
    contactExperts: 'ติดต่อผู้เชี่ยวชาญของเรา'
  },
  id: {
    // Navigation
    vpns: 'VPN',
    faq: 'FAQ',
    blog: 'Blog',
    contact: 'Hubungi Kami',
    
    // Language selector
    selectLanguage: 'Pilih Bahasa',
    moreLanguages: 'Bahasa lainnya segera hadir',
    
    // Hero section
     heroTitle: 'Bandingkan Layanan VPN Terbaik di 2025',
     heroSubtitle: 'Temukan VPN yang sempurna untuk kebutuhan Anda dengan perbandingan komprehensif kami',
     exclusiveDeals: 'Penawaran eksklusif tersedia - Hemat hingga 70% untuk VPN premium!',
     
     // VPN Page
     compareVpns: 'Bandingkan 100+ Layanan VPN Teratas di 2025',
     findPerfectVpn: 'Temukan VPN yang sempurna untuk kebutuhan Anda. Bandingkan fitur, harga, dan kinerja layanan VPN terkemuka di dunia.',
     
     // Blog Page
     blogTitle: 'Berita & Panduan VPN',
     blogSubtitle: 'Tetap update dengan berita VPN terbaru, tips keamanan, dan panduan komprehensif.',
     
     // Contact Page
     contactTitle: 'Hubungi Kami',
     contactSubtitle: 'Ada pertanyaan? Kami di sini untuk membantu Anda menemukan solusi VPN yang sempurna.',
     
     // Footer
     quickLinks: 'Tautan Cepat',
     
     // Common UI elements
     getStarted: 'Mulai',
    learnMore: 'Pelajari Lebih Lanjut',
    readMore: 'Baca Selengkapnya',
    viewAll: 'Lihat Semua',
    search: 'Cari',
    filter: 'Filter',
    category: 'Kategori',
    allCategories: 'Semua Kategori',
    loading: 'Memuat...',
    error: 'Kesalahan',
    tryAgain: 'Coba Lagi',
    
    // FAQ Page
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqSubtitle: 'Dapatkan jawaban untuk pertanyaan paling umum tentang VPN, privasi, keamanan, dan memilih layanan yang tepat untuk kebutuhan Anda.',
    searchFaqs: 'Cari FAQ...',
    noFaqsFound: 'Tidak ada FAQ yang ditemukan sesuai kriteria Anda.',
    adjustSearch: 'Coba sesuaikan pencarian atau filter kategori Anda.',
    showingResults: 'Menampilkan {count} dari {total} pertanyaan yang sering diajukan',
    stillHaveQuestions: 'Masih Ada Pertanyaan?',
    cantFindAnswer: 'Tidak dapat menemukan jawaban yang Anda cari? Para ahli VPN kami di sini untuk membantu Anda memilih layanan VPN yang sempurna untuk kebutuhan Anda.',
    contactExperts: 'Hubungi Ahli Kami'
  },
  es: {
    // Navigation
    vpns: 'VPNs',
    faq: 'Preguntas Frecuentes',
    blog: 'Blog',
    contact: 'Contáctenos',
    
    // Language selector
    selectLanguage: 'Seleccionar Idioma',
    moreLanguages: 'Más idiomas próximamente',
    
    // Hero section
    heroTitle: 'Compare los Mejores Servicios VPN en 2025',
    heroSubtitle: 'Encuentre la VPN perfecta para sus necesidades con nuestra comparación completa',
    exclusiveDeals: 'Ofertas exclusivas disponibles - Ahorre hasta un 70% en VPN premium',
    
    // VPN Page
    compareVpns: 'Compare 100+ Servicios VPN Principales en 2025',
    findPerfectVpn: 'Encuentre la VPN perfecta para sus necesidades. Compare características, precios y rendimiento de los principales servicios VPN del mundo.',
    
    // Blog Page
    blogTitle: 'Noticias y Guías VPN',
    blogSubtitle: 'Manténgase actualizado con las últimas noticias VPN, consejos de seguridad y guías completas.',
    
    // Contact Page
    contactTitle: 'Contáctenos',
    contactSubtitle: '¿Tiene preguntas? Estamos aquí para ayudarle a encontrar la solución VPN perfecta.',
    
    // Footer
    quickLinks: 'Enlaces Rápidos',
    
    // Common UI elements
    getStarted: 'Comenzar',
    learnMore: 'Aprender Más',
    readMore: 'Leer Más',
    viewAll: 'Ver Todo',
    search: 'Buscar',
    filter: 'Filtrar',
    category: 'Categoría',
    allCategories: 'Todas las Categorías',
    loading: 'Cargando...',
    error: 'Error',
    tryAgain: 'Intentar de Nuevo',
    
    // FAQ Page
    faqTitle: 'Preguntas Frecuentes',
    faqSubtitle: 'Obtenga respuestas a las preguntas más comunes sobre VPN, privacidad, seguridad y cómo elegir el servicio adecuado para sus necesidades.',
    searchFaqs: 'Buscar Preguntas...',
    noFaqsFound: 'No se encontraron preguntas que coincidan con sus criterios.',
    adjustSearch: 'Intente ajustar su búsqueda o filtro de categoría.',
    showingResults: 'Mostrando {count} de {total} preguntas frecuentes',
    stillHaveQuestions: '¿Aún Tiene Preguntas?',
    cantFindAnswer: '¿No encuentra la respuesta que busca? Nuestros expertos en VPN están aquí para ayudarle a elegir el servicio VPN perfecto para sus necesidades.',
    contactExperts: 'Contactar a Nuestros Expertos'
  },
  pl: {
    // Navigation
    vpns: 'VPN',
    faq: 'FAQ',
    blog: 'Blog',
    contact: 'Kontakt',
    
    // Language selector
    selectLanguage: 'Wybierz język',
    moreLanguages: 'Więcej języków wkrótce',
    
    // Hero section
    heroTitle: 'Porównaj Najlepsze Usługi VPN w 2025',
    heroSubtitle: 'Znajdź idealną VPN dla swoich potrzeb dzięki naszemu kompleksowemu porównaniu',
    exclusiveDeals: 'Ekskluzywne oferty dostępne - Oszczędź do 70% na premium VPN!',
    
    // VPN Page
    compareVpns: 'Porównaj 100+ Najlepszych Usług VPN w 2025',
    findPerfectVpn: 'Znajdź idealną VPN dla swoich potrzeb. Porównaj funkcje, ceny i wydajność światowych liderów usług VPN.',
    
    // Blog Page
    blogTitle: 'Wiadomości i Poradniki VPN',
    blogSubtitle: 'Bądź na bieżąco z najnowszymi wiadomościami o VPN, wskazówkami dotyczącymi bezpieczeństwa i kompleksowymi poradnikami.',
    
    // Contact Page
    contactTitle: 'Kontakt',
    contactSubtitle: 'Masz pytania? Jesteśmy tutaj, aby pomóc Ci znaleźć idealne rozwiązanie VPN.',
    
    // Footer
    quickLinks: 'Szybkie linki',
    
    // Common UI elements
    getStarted: 'Rozpocznij',
    learnMore: 'Dowiedz się więcej',
    readMore: 'Czytaj więcej',
    viewAll: 'Zobacz wszystko',
    search: 'Szukaj',
    filter: 'Filtruj',
    category: 'Kategoria',
    allCategories: 'Wszystkie kategorie',
    loading: 'Ładowanie...',
    error: 'Błąd',
    tryAgain: 'Spróbuj ponownie',
    
    // FAQ Page
    faqTitle: 'Często Zadawane Pytania',
    faqSubtitle: 'Uzyskaj odpowiedzi na najczęstsze pytania dotyczące VPN, prywatności, bezpieczeństwa i wyboru odpowiedniej usługi dla swoich potrzeb.',
    searchFaqs: 'Szukaj pytań...',
    noFaqsFound: 'Nie znaleziono pytań spełniających Twoje kryteria.',
    adjustSearch: 'Spróbuj dostosować wyszukiwanie lub filtr kategorii.',
    showingResults: 'Wyświetlanie {count} z {total} często zadawanych pytań',
    stillHaveQuestions: 'Nadal Masz Pytania?',
    cantFindAnswer: 'Nie możesz znaleźć odpowiedzi, której szukasz? Nasi eksperci ds. VPN są tutaj, aby pomóc Ci wybrać idealną usługę VPN dla Twoich potrzeb.',
    contactExperts: 'Skontaktuj się z Naszymi Ekspertami'
  },
  fa: {
    // Navigation
    vpns: 'وی‌پی‌ان‌ها',
    faq: 'سؤالات متداول',
    blog: 'بلاگ',
    contact: 'تماس با ما',
    
    // Language selector
    selectLanguage: 'انتخاب زبان',
    moreLanguages: 'زبان‌های بیشتر به زودی',
    
    // Hero section
    heroTitle: 'مقایسه بهترین سرویس‌های وی‌پی‌ان در سال 2025',
    heroSubtitle: 'وی‌پی‌ان مناسب نیازهای خود را با مقایسه جامع ما پیدا کنید',
    exclusiveDeals: 'معاملات انحصاری موجود - تا 70٪ در وی‌پی‌ان‌های پریمیوم صرفه‌جویی کنید!',
    
    // VPN Page
    compareVpns: 'مقایسه 100+ سرویس وی‌پی‌ان برتر در سال 2025',
    findPerfectVpn: 'وی‌پی‌ان مناسب نیازهای خود را پیدا کنید. ویژگی‌ها، قیمت‌ها و عملکرد بهترین سرویس‌های وی‌پی‌ان جهان را مقایسه کنید.',
    
    // Blog Page
    blogTitle: 'اخبار و راهنماهای وی‌پی‌ان',
    blogSubtitle: 'با آخرین اخبار وی‌پی‌ان، نکات امنیتی و راهنماهای جامع به‌روز بمانید.',
    
    // Contact Page
    contactTitle: 'تماس با ما',
    contactSubtitle: 'سؤال دارید؟ ما اینجا هستیم تا به شما کمک کنیم راه‌حل وی‌پی‌ان مناسب را پیدا کنید.',
    
    // Footer
    quickLinks: 'لینک‌های سریع',
    
    // Common UI elements
    getStarted: 'شروع کنید',
    learnMore: 'بیشتر بدانید',
    readMore: 'بیشتر بخوانید',
    viewAll: 'مشاهده همه',
    search: 'جستجو',
    filter: 'فیلتر',
    category: 'دسته‌بندی',
    allCategories: 'همه دسته‌بندی‌ها',
    loading: 'در حال بارگذاری...',
    error: 'خطا',
    tryAgain: 'دوباره تلاش کنید',
    
    // FAQ Page
    faqTitle: 'سؤالات متداول',
    faqSubtitle: 'پاسخ‌هایی برای رایج‌ترین سؤالات درباره وی‌پی‌ان، حریم خصوصی، امنیت و انتخاب سرویس مناسب برای نیازهای شما.',
    searchFaqs: 'جستجوی سؤالات...',
    noFaqsFound: 'هیچ سؤالی مطابق با معیارهای شما یافت نشد.',
    adjustSearch: 'سعی کنید جستجو یا فیلتر دسته‌بندی را تنظیم کنید.',
    showingResults: 'نمایش {count} از {total} سؤال متداول',
    stillHaveQuestions: 'هنوز سؤال دارید؟',
    cantFindAnswer: 'نمی‌توانید پاسخی که به دنبالش هستید را پیدا کنید؟ کارشناسان وی‌پی‌ان ما اینجا هستند تا به شما کمک کنند سرویس وی‌پی‌ان مناسب نیازهای شما را انتخاب کنید.',
    contactExperts: 'با کارشناسان ما تماس بگیرید'
  },
  ar: {
    // Navigation
    vpns: 'شبكات VPN',
    faq: 'الأسئلة الشائعة',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    
    // Language selector
    selectLanguage: 'اختر اللغة',
    moreLanguages: 'المزيد من اللغات قريباً',
    
    // Hero section
     heroTitle: 'قارن أفضل خدمات VPN في 2025',
     heroSubtitle: 'اعثر على VPN المثالي لاحتياجاتك من خلال مقارنتنا الشاملة',
     exclusiveDeals: 'عروض حصرية متاحة - وفر حتى 70% على VPN المميزة!',
     
     // VPN Page
     compareVpns: 'قارن أكثر من 100 خدمة VPN رائدة في 2025',
     findPerfectVpn: 'اعثر على VPN المثالي لاحتياجاتك. قارن الميزات والأسعار والأداء لخدمات VPN الرائدة في العالم.',
     
     // Blog Page
     blogTitle: 'أخبار وأدلة VPN',
     blogSubtitle: 'ابق محدثاً مع أحدث أخبار VPN ونصائح الأمان والأدلة الشاملة.',
     
     // Contact Page
     contactTitle: 'اتصل بنا',
     contactSubtitle: 'لديك أسئلة؟ نحن هنا لمساعدتك في العثور على حل VPN المثالي.',
     
     // Footer
     quickLinks: 'روابط سريعة',
     
     // Common UI elements
     getStarted: 'ابدأ الآن',
    learnMore: 'اعرف المزيد',
    readMore: 'اقرأ المزيد',
    viewAll: 'عرض الكل',
    search: 'بحث',
    filter: 'تصفية',
    category: 'الفئة',
    allCategories: 'جميع الفئات',
    loading: 'جاري التحميل...',
    error: 'خطأ',
    tryAgain: 'حاول مرة أخرى',
    
    // FAQ Page
    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'احصل على إجابات لأكثر الأسئلة شيوعاً حول VPN والخصوصية والأمان واختيار الخدمة المناسبة لاحتياجاتك.',
    searchFaqs: 'البحث في الأسئلة الشائعة...',
    noFaqsFound: 'لم يتم العثور على أسئلة شائعة تطابق معاييرك.',
    adjustSearch: 'حاول تعديل البحث أو مرشح الفئة.',
    showingResults: 'عرض {count} من {total} سؤال شائع',
    stillHaveQuestions: 'لا تزال لديك أسئلة؟',
    cantFindAnswer: 'لا يمكنك العثور على الإجابة التي تبحث عنها؟ خبراء VPN لدينا هنا لمساعدتك في اختيار خدمة VPN المثالية لاحتياجاتك.',
    contactExperts: 'اتصل بخبرائنا'
  },
  tr: {
    // Navigation
    vpns: 'VPN\'ler',
    faq: 'SSS',
    blog: 'Blog',
    contact: 'Bize Ulaşın',
    
    // Language selector
    selectLanguage: 'Dil Seçin',
    moreLanguages: 'Daha fazla dil yakında',
    
    // Hero section
    heroTitle: '2025 yılında En İyi VPN Hizmetlerini Karşılaştırın',
    heroSubtitle: 'Kapsamlı karşılaştırmamızla ihtiyaçlarınıza uygun mükemmel VPN\'i bulun',
    exclusiveDeals: 'Özel fırsatlardan yararlanın - Premium VPN\'lerde %70\'e varan tasarruf edin!',
    
    // VPN Page
    compareVpns: '2025 yılında 100+ En İyi VPN Hizmetini Karşılaştırın',
    findPerfectVpn: 'İhtiyaçlarınıza uygun mükemmel VPN\'i bulun. Dünyanın önde gelen VPN hizmetlerinin özelliklerini, fiyatlarını ve performansını karşılaştırın.',
    
    // Blog Page
    blogTitle: 'VPN Haberleri ve Rehberleri',
    blogSubtitle: 'En son VPN haberleri, güvenlik ipuçları ve kapsamlı rehberlerle güncel kalın.',
    
    // Contact Page
    contactTitle: 'Bize Ulaşın',
    contactSubtitle: 'Sorularınız mı var? Mükemmel VPN çözümünü bulmanıza yardımcı olmak için buradayız.',
    
    // Footer
    quickLinks: 'Hızlı Bağlantılar',
    
    // Common UI elements
    getStarted: 'Başlayın',
    learnMore: 'Daha Fazla Bilgi',
    readMore: 'Devamını Okuyun',
    viewAll: 'Tümünü Görüntüle',
    search: 'Ara',
    filter: 'Filtrele',
    category: 'Kategori',
    allCategories: 'Tüm Kategoriler',
    loading: 'Yükleniyor...',
    error: 'Hata',
    tryAgain: 'Tekrar Dene',
    
    // FAQ Page
    faqTitle: 'Sıkça Sorulan Sorular',
    faqSubtitle: 'VPN\'ler, gizlilik, güvenlik ve ihtiyaçlarınıza uygun hizmet seçimiyle ilgili en yaygın soruların cevaplarını alın.',
    searchFaqs: 'SSS\'de Ara...',
    noFaqsFound: 'Kriterlerinize uygun SSS bulunamadı.',
    adjustSearch: 'Aramanızı veya kategori filtrenizi ayarlamayı deneyin.',
    showingResults: '{total} sık sorulan sorudan {count} tanesi gösteriliyor',
    stillHaveQuestions: 'Hâlâ Sorularınız mı Var?',
    cantFindAnswer: 'Aradığınız cevabı bulamıyor musunuz? VPN uzmanlarımız ihtiyaçlarınıza uygun mükemmel VPN hizmeti seçmenize yardımcı olmak için burada.',
    contactExperts: 'Uzmanlarımızla İletişime Geçin'
  },
  fil: {
    // Navigation
    vpns: 'Mga VPN',
    faq: 'Mga Madalas na Tanong',
    blog: 'Blog',
    contact: 'Makipag-ugnayan sa Amin',
    
    // Language selector
    selectLanguage: 'Pumili ng Wika',
    moreLanguages: 'Higit pang mga wika malapit na',
    
    // Hero section
    heroTitle: 'Ikumpara ang Pinakamahuhusay na Mga Serbisyo ng VPN sa 2025',
    heroSubtitle: 'Hanapin ang perpektong VPN para sa iyong mga pangangailangan sa aming komprehensibong paghahambing',
    exclusiveDeals: 'Available ang eksklusibong mga deal - Makatipid ng hanggang 70% sa premium VPNs!',
    
    // VPN Page
    compareVpns: 'Ikumpara ang 100+ Nangungunang Mga Serbisyo ng VPN sa 2025',
    findPerfectVpn: 'Hanapin ang perpektong VPN para sa iyong mga pangangailangan. Ikumpara ang mga tampok, presyo, at pagganap ng mga nangungunang serbisyo ng VPN sa mundo.',
    
    // Blog Page
    blogTitle: 'Mga Balita at Gabay sa VPN',
    blogSubtitle: 'Manatiling updated sa pinakabagong balita sa VPN, mga tip sa seguridad, at komprehensibong gabay.',
    
    // Contact Page
    contactTitle: 'Makipag-ugnayan sa Amin',
    contactSubtitle: 'May mga katanungan? Narito kami upang tulungan kang makahanap ng perpektong solusyon sa VPN.',
    
    // Footer
    quickLinks: 'Mga Mabilisang Link',
    
    // Common UI elements
    getStarted: 'Magsimula',
    learnMore: 'Matuto pa',
    readMore: 'Magbasa pa',
    viewAll: 'Tingnan Lahat',
    search: 'Maghanap',
    filter: 'I-filter',
    category: 'Kategorya',
    allCategories: 'Lahat ng Kategorya',
    loading: 'Naglo-load...',
    error: 'Error',
    tryAgain: 'Subukan Muli',
    
    // FAQ Page
    faqTitle: 'Mga Madalas na Tanong',
    faqSubtitle: 'Kumuha ng mga sagot sa pinakakaraniwang mga katanungan tungkol sa mga VPN, privacy, seguridad, at pagpili ng tamang serbisyo para sa iyong mga pangangailangan.',
    searchFaqs: 'Maghanap ng mga Madalas na Tanong...',
    noFaqsFound: 'Walang nahanap na mga Madalas na Tanong na tumutugma sa iyong pamantayan.',
    adjustSearch: 'Subukang i-adjust ang iyong paghahanap o filter ng kategorya.',
    showingResults: 'Ipinapakita ang {count} sa {total} mga madalas na tanong',
    stillHaveQuestions: 'Mayroon Pa Ring Mga Katanungan?',
    cantFindAnswer: 'Hindi makahanap ng sagot na hinahanap mo? Ang aming mga eksperto sa VPN ay narito upang tulungan kang pumili ng perpektong serbisyo ng VPN para sa iyong mga pangangailangan.',
    contactExperts: 'Makipag-ugnayan sa Aming mga Eksperto'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(supportedLanguages[0]);

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage) {
      const language = supportedLanguages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
        updateDocumentLanguage(language);
      }
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      const language = supportedLanguages.find(lang => lang.code === browserLang);
      if (language) {
        setCurrentLanguage(language);
        updateDocumentLanguage(language);
      }
    }
  }, []);

  const updateDocumentLanguage = (language: Language) => {
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.dir;
    
    // Add RTL class for Arabic
    if (language.dir === 'rtl') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
    
    // Update SEO meta tags
    updateMetaLanguage(language.code);
    
    // Generate and insert hreflang tags
    const currentPath = window.location.pathname;
    const hrefLangTags = generateHrefLangTags(currentPath);
    insertHrefLangTags(hrefLangTags);
    
    // Update canonical URL
    const baseUrl = 'https://bestvpn.digital';
    const canonicalUrl = language.code === 'en' 
      ? `${baseUrl}${currentPath}` 
      : `${baseUrl}/${language.code}${currentPath}`;
    updateCanonicalUrl(canonicalUrl);
  };

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language.code);
    updateDocumentLanguage(language);
    
    // Future: Navigate to subdirectory
    // window.location.href = `/${language.code}${window.location.pathname}`;
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  const translateFAQs = (faqs: any[]): any[] => {
    // For now, return original FAQs
    // In the future, we'll implement FAQ translation logic here
    return faqs;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, translateFAQs }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};