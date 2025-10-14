const fs = require('fs');

// Yeni Korece FAQ'leri oku
const newKoreanFAQs = JSON.parse(fs.readFileSync('korean-faqs-final-1000.json', 'utf8'));

// Mevcut faqTranslations.ts dosyasını oku
let faqTranslationsContent = fs.readFileSync('src/contexts/faqTranslations.ts', 'utf8');

// Korece bölümün başlangıç ve bitiş pozisyonlarını bul
const koStartPattern = /  ko: \[/;
const koEndPattern = /  \],\s*vi: \[/;

const koStartMatch = faqTranslationsContent.match(koStartPattern);
const koEndMatch = faqTranslationsContent.match(koEndPattern);

if (!koStartMatch || !koEndMatch) {
  console.error('Korean section not found in faqTranslations.ts');
  process.exit(1);
}

const koStartIndex = koStartMatch.index;
const koEndIndex = koEndMatch.index + koEndMatch[0].length - 6; // 'vi: [' kısmını çıkar

// Yeni Korece FAQ'leri TypeScript formatına çevir
const newKoreanSection = `  ko: [
    // Korean VPN FAQs - Final Collection (${newKoreanFAQs.length} FAQs)
${newKoreanFAQs.map(faq => `    {
      question: "${faq.question.replace(/"/g, '\\"')}",
      answer: "${faq.answer.replace(/"/g, '\\"')}",
      category: "${faq.category}"
    }`).join(',\n')}
  ],`;

// Eski Korece bölümü yeni bölümle değiştir
const beforeKo = faqTranslationsContent.substring(0, koStartIndex);
const afterKo = faqTranslationsContent.substring(koEndIndex);

const updatedContent = beforeKo + newKoreanSection + afterKo;

// Dosyayı güncelle
fs.writeFileSync('src/contexts/faqTranslations.ts', updatedContent);

console.log(`Successfully updated Korean FAQs in faqTranslations.ts`);
console.log(`Total Korean FAQs: ${newKoreanFAQs.length}`);
console.log(`Categories: ${[...new Set(newKoreanFAQs.map(faq => faq.category))].join(', ')}`);
