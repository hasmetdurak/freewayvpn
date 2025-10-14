const fs = require('fs');
const path = require('path');

// Tüm Korece FAQ dosyalarını oku ve birleştir
const koreanFAQs = [];

// Part 1-70 dosyalarını oku (5'er 5'er)
for (let i = 1; i <= 70; i++) {
  const filename = `korean-vpn-faq-part-${i.toString().padStart(2, '0')}.json`;
  if (fs.existsSync(filename)) {
    const content = JSON.parse(fs.readFileSync(filename, 'utf8'));
    koreanFAQs.push(...content);
    console.log(`Loaded ${filename}: ${content.length} FAQs`);
  }
}

// Part 71-2000 dosyalarını oku (100'er 100'er) - farklı isimlendirme
const hundredPartFiles = [
  'korean-vpn-faq-part-71-100.json',
  'korean-vpn-faq-part-101-200.json',
  'korean-vpn-faq-part-201-300.json',
  'korean-vpn-faq-part-301-400.json',
  'korean-vpn-faq-part-401-500.json',
  'korean-vpn-faq-part-501-600.json',
  'korean-vpn-faq-part-601-700.json',
  'korean-vpn-faq-part-701-800.json',
  'korean-vpn-faq-part-801-900.json',
  'korean-vpn-faq-part-901-1000.json',
  'korean-vpn-faq-part-1001-1100.json',
  'korean-vpn-faq-part-1101-1200.json',
  'korean-vpn-faq-part-1201-1300.json',
  'korean-vpn-faq-part-1301-1400.json',
  'korean-vpn-faq-part-1401-1500.json',
  'korean-vpn-faq-part-1501-1600.json',
  'korean-vpn-faq-part-1601-1700.json',
  'korean-vpn-faq-part-1701-1800.json',
  'korean-vpn-faq-part-1801-1900.json',
  'korean-vpn-faq-part-1901-2000.json'
];

hundredPartFiles.forEach(filename => {
  if (fs.existsSync(filename)) {
    const content = JSON.parse(fs.readFileSync(filename, 'utf8'));
    koreanFAQs.push(...content);
    console.log(`Loaded ${filename}: ${content.length} FAQs`);
  }
});

// Eksik dosyaları kontrol et
console.log('\nChecking for missing files...');
const expectedFiles = [];
for (let i = 71; i <= 2000; i += 100) {
  const endPart = Math.min(i + 99, 2000);
  expectedFiles.push(`korean-vpn-faq-part-${i}-${endPart}.json`);
}

expectedFiles.forEach(filename => {
  if (!fs.existsSync(filename)) {
    console.log(`Missing: ${filename}`);
  }
});

console.log(`Total Korean FAQs loaded: ${koreanFAQs.length}`);

// FAQ'leri Korece formatına çevir
const koreanFormattedFAQs = koreanFAQs.map((faq, index) => ({
  question: faq.question,
  answer: faq.answer,
  category: faq.category
}));

// JSON dosyası olarak kaydet
fs.writeFileSync('korean-faqs-complete.json', JSON.stringify(koreanFormattedFAQs, null, 2));
console.log(`Saved complete Korean FAQs to korean-faqs-complete.json`);

// TypeScript formatında da kaydet
const tsContent = `// Korean VPN FAQs - Complete Collection
export const koreanFAQs = ${JSON.stringify(koreanFormattedFAQs, null, 2)};`;

fs.writeFileSync('korean-faqs-complete.ts', tsContent);
console.log(`Saved TypeScript format to korean-faqs-complete.ts`);
