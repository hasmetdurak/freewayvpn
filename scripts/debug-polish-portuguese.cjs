const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function debugPolishPortuguese() {
  const faqDir = path.join(__dirname, '..', 'faq');
  
  const files = ['faq polish.docx', 'faq portuguese.docx'];
  
  for (const file of files) {
    const filePath = path.join(faqDir, file);
    console.log(`\n=== Debugging ${file} ===`);
    
    try {
      // Extract raw text
      const result = await mammoth.extractRawText({ path: filePath });
      const text = result.value;
      
      console.log(`Text length: ${text.length}`);
      console.log(`First 1000 characters:`);
      console.log(text.substring(0, 1000));
      console.log(`\nLast 500 characters:`);
      console.log(text.substring(Math.max(0, text.length - 500)));
      
      // Check for common question patterns
      const questionMarks = (text.match(/\?/g) || []).length;
      console.log(`\nQuestion marks found: ${questionMarks}`);
      
      // Check for different language patterns
      const patterns = {
        polish: /(?:Co to jest|Jak|Dlaczego|Kiedy|Gdzie|Czy|Jakie|Które)/gi,
        portuguese: /(?:O que é|Como|Por que|Quando|Onde|Posso|Qual|Quais)/gi
      };
      
      const lang = file.includes('polish') ? 'polish' : 'portuguese';
      const matches = text.match(patterns[lang]) || [];
      console.log(`${lang} question patterns found: ${matches.length}`);
      console.log(`Sample matches:`, matches.slice(0, 5));
      
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
}

debugPolishPortuguese().catch(console.error);