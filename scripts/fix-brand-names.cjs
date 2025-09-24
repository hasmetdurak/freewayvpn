const fs = require('fs');
const path = require('path');

const translationsFile = path.join(__dirname, '../src/utils/translations.ts');

// Read the current translations file
let content = fs.readFileSync(translationsFile, 'utf8');

// Fix brand names for all languages
const brandFixes = [
  // Norwegian
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'Din pålitelige kilde for omfattende VPN-anmeldelser og sammenligninger',", to: "'brand.tagline': 'Uavhengig Sammenligningsside'," },
  
  // Swedish
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'Din pålitliga källa för omfattande VPN-recensioner och jämförelser',", to: "'brand.tagline': 'Oberoende Jämförelsesida'," },
  
  // Finnish
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'Luotettava lähteesi kattaviin VPN-arvosteluihin ja -vertailuihin',", to: "'brand.tagline': 'Riippumaton Vertailusivusto'," },
  
  // Japanese
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': '包括的なVPNレビューと比較の信頼できるソース',", to: "'brand.tagline': '独立比較サイト'," },
  
  // Korean
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': '포괄적인 VPN 리뷰와 비교를 위한 신뢰할 수 있는 소스',", to: "'brand.tagline': '독립 비교 사이트'," },
  
  // Hindi
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'व्यापक VPN समीक्षाओं और तुलनाओं के लिए आपका विश्वसनीय स्रोत',", to: "'brand.tagline': 'स्वतंत्र तुलना साइट'," },
  
  // Arabic
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'مصدرك الموثوق لمراجعات ومقارنات VPN الشاملة',", to: "'brand.tagline': 'موقع مقارنة مستقل'," },
  
  // Filipino
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'Ang iyong mapagkakatiwalaang mapagkukunan para sa komprehensibong mga review at paghahambing ng VPN',", to: "'brand.tagline': 'Malayang Site ng Paghahambing'," },
  
  // Indonesian
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'Sumber terpercaya Anda untuk ulasan dan perbandingan VPN yang komprehensif',", to: "'brand.tagline': 'Situs Perbandingan Independen'," },
  
  // Persian
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'منبع قابل اعتماد شما برای بررسی و مقایسه جامع VPN',", to: "'brand.tagline': 'سایت مقایسه مستقل'," },
  
  // Polish
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'Twoje zaufane źródło kompleksowych recenzji i porównań VPN',", to: "'brand.tagline': 'Niezależna Strona Porównawcza'," },
  
  // Portuguese
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'Sua fonte confiável para análises e comparações abrangentes de VPN',", to: "'brand.tagline': 'Site de Comparação Independente'," },
  
  // Thai
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'แหล่งที่เชื่อถือได้ของคุณสำหรับการรีวิวและเปรียบเทียบ VPN ที่ครอบคลุม',", to: "'brand.tagline': 'เว็บไซต์เปรียบเทียบอิสระ'," },
  
  // Vietnamese
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'Nguồn đáng tin cậy của bạn cho các đánh giá và so sánh VPN toàn diện',", to: "'brand.tagline': 'Trang So Sánh Độc Lập'," },
  
  // Italian
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'La tua fonte affidabile per recensioni e confronti completi di VPN',", to: "'brand.tagline': 'Sito di Confronto Indipendente'," },
  
  // Russian
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': 'Ваш надежный источник для всесторонних обзоров и сравнений VPN',", to: "'brand.tagline': 'Независимый Сайт Сравнений'," },
  
  // Chinese
  { from: "'brand.name': 'bestvpn.digital',", to: "'brand.name': 'BestVPN Reviews'," },
  { from: "'brand.tagline': '您值得信赖的VPN评论和比较综合来源',", to: "'brand.tagline': '独立比较网站'," }
];

// Apply all fixes
brandFixes.forEach(fix => {
  content = content.replace(fix.from, fix.to);
});

// Write the updated content back to the file
fs.writeFileSync(translationsFile, content, 'utf8');
console.log('Brand names fixed successfully!');
