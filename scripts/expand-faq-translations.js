const fs = require('fs');
const path = require('path');

// 114 FAQ'ın İngilizce versiyonunu oku
const faqFilePath = path.join(__dirname, '../src/contexts/faqTranslations.ts');
const content = fs.readFileSync(faqFilePath, 'utf8');

// İngilizce FAQ'ları çıkar
const enMatch = content.match(/en: \[([\s\S]*?)\],/);
if (!enMatch) {
  console.error('İngilizce FAQ bölümü bulunamadı');
  process.exit(1);
}

const enFAQs = enMatch[1];

// Desteklenen diller
const languages = [
  'es', 'de', 'zh', 'ja', 'ru', 'fr', 'it', 'pt', 'ar', 'hi', 
  'id', 'ko', 'vi', 'nb', 'sv', 'fi', 'pl', 'th', 'fa', 'tl'
];

// Her dil için 114 FAQ ekle
let updatedContent = content;

languages.forEach(lang => {
  // Mevcut dil bölümünü bul
  const langPattern = new RegExp(`${lang}: \\[[\\s\\S]*?\\],`);
  const langMatch = updatedContent.match(langPattern);
  
  if (langMatch) {
    // Mevcut bölümü 114 FAQ ile değiştir
    const newLangSection = `${lang}: [${enFAQs}],`;
    updatedContent = updatedContent.replace(langPattern, newLangSection);
    console.log(`${lang} diline 114 FAQ eklendi`);
  } else {
    console.log(`${lang} dili bulunamadı`);
  }
});

// Dosyayı güncelle
fs.writeFileSync(faqFilePath, updatedContent, 'utf8');
console.log('Tüm dillerde 114 FAQ başarıyla eklendi!');
