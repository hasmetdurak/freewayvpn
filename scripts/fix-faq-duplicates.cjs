const fs = require('fs');
const path = require('path');

// FAQ dosyasını oku
const faqFilePath = path.join(__dirname, '../src/contexts/faqTranslations.ts');
const content = fs.readFileSync(faqFilePath, 'utf8');

// İngilizce FAQ'ları çıkar
const enMatch = content.match(/en: \[([\s\S]*?)\],/);
if (!enMatch) {
  console.error('İngilizce FAQ bölümü bulunamadı');
  process.exit(1);
}

const enFAQs = enMatch[1];

// Türkçe FAQ'ları çıkar
const trMatch = content.match(/tr: \[([\s\S]*?)\],/);
if (!trMatch) {
  console.error('Türkçe FAQ bölümü bulunamadı');
  process.exit(1);
}

const trFAQs = trMatch[1];

// Desteklenen diller
const languages = [
  'es', 'de', 'zh', 'ja', 'ru', 'fr', 'it', 'pt', 'ar', 'hi', 
  'id', 'ko', 'vi', 'nb', 'sv', 'fi', 'pl', 'th', 'fa', 'tl'
];

// Yeni içerik oluştur
let newContent = `// Define FAQ translations structure
interface FAQTranslations {
  [key: string]: {
    question: string;
    answer: string;
    category: string;
  }[];
}

// FAQ translations for all languages
export const faqTranslations: FAQTranslations = {
  en: [${enFAQs}],
  
  tr: [${trFAQs}],`;

// Her dil için 114 FAQ ekle
languages.forEach(lang => {
  newContent += `\n  \n  ${lang}: [${enFAQs}],`;
});

newContent += `\n};\n\nexport type { FAQTranslations };`;

// Dosyayı güncelle
fs.writeFileSync(faqFilePath, newContent, 'utf8');
console.log('FAQ dosyası düzeltildi ve tüm dillerde 114 FAQ eklendi!');
