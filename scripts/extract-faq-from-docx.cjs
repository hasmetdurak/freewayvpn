const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

// Language mapping for file names to language codes
const languageMapping = {
  'faq english.docx': 'en',
  'faq spanish.docx': 'es',
  'faq arabic.docx': 'ar',
  'faq indonesian.docx': 'id',
  'faq persian.docx': 'fa',
  'faq filipino.docx': 'fil',
  'faq hindi.docx': 'hi',
  'faq polish.docx': 'pl',
  'faq portuguese.docx': 'pt',
  'faq thai.docx': 'th',
  'faq vietnamese.docx': 'vi'
};

async function extractFAQFromDocx() {
  const faqDir = path.join(__dirname, '..', 'faq');
  const outputFile = path.join(__dirname, '..', 'extracted_faq_content.json');
  
  const allFAQs = {};
  
  try {
    const files = fs.readdirSync(faqDir);
    
    for (const file of files) {
      if (file.endsWith('.docx') && languageMapping[file]) {
        const filePath = path.join(faqDir, file);
        const langCode = languageMapping[file];
        
        console.log(`Processing ${file} for language ${langCode}...`);
        
        try {
          const result = await mammoth.extractRawText({ path: filePath });
          const text = result.value;
          
          // Parse FAQ content - assuming Q: and A: format
          const faqs = parseFAQText(text, langCode);
          allFAQs[langCode] = faqs;
          
          console.log(`✅ Extracted ${faqs.length} FAQs for ${langCode}`);
        } catch (error) {
          console.error(`❌ Error processing ${file}:`, error.message);
        }
      }
    }
    
    // Write extracted content to JSON file
    fs.writeFileSync(outputFile, JSON.stringify(allFAQs, null, 2), 'utf8');
    console.log(`\n✅ All FAQ content extracted to: ${outputFile}`);
    
    // Generate summary
    console.log('\n📊 Summary:');
    Object.keys(allFAQs).forEach(lang => {
      console.log(`${lang}: ${allFAQs[lang].length} FAQs`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

function parseFAQText(text, langCode) {
  const faqs = [];
  
  console.log(`Raw text length for ${langCode}: ${text.length}`);
  console.log(`First 500 characters: ${text.substring(0, 500)}`);
  
  // Try different parsing strategies
  
  // Strategy 1: Split by double newlines (paragraph breaks)
  let sections = text.split(/\n\s*\n/).filter(section => section.trim().length > 10);
  
  if (sections.length < 5) {
    // Strategy 2: Split by single newlines
    sections = text.split('\n').filter(line => line.trim().length > 10);
  }
  
  console.log(`Found ${sections.length} sections for ${langCode}`);
  
  let currentQuestion = '';
  let currentAnswer = '';
  let questionCount = 0;
  
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i].trim();
    
    // Skip very short sections
    if (section.length < 10) continue;
    
    // Check if this looks like a question (contains question mark or question indicators)
    const isQuestion = section.includes('?') || 
                      section.match(/^(\d+\.|\d+\)|Q:|Question:|Soru:|¿|Pregunta:|سؤال:|Pertanyaan:|سوال:|Tanong:|प्रश्न:|Pytanie:|Pergunta:|คำถาม:|Câu hỏi:|What|How|Why|When|Where|Can|Is|Are|Do|Does|Will|Would)/i);
    
    if (isQuestion && !currentQuestion) {
      // This is a new question
      currentQuestion = section;
    } else if (currentQuestion && !currentAnswer) {
      // This might be the answer to the current question
      currentAnswer = section;
      
      // Save the FAQ pair
      faqs.push({
        question: cleanText(currentQuestion),
        answer: cleanText(currentAnswer),
        category: getCategoryForFAQ(currentQuestion, langCode)
      });
      
      questionCount++;
      currentQuestion = '';
      currentAnswer = '';
    } else if (isQuestion && currentQuestion) {
      // This is a new question, but we have an incomplete previous one
      // Try to use the previous section as answer if available
      if (i > 0 && !currentAnswer) {
        currentAnswer = sections[i-1].trim();
        if (currentAnswer.length > 10) {
          faqs.push({
            question: cleanText(currentQuestion),
            answer: cleanText(currentAnswer),
            category: getCategoryForFAQ(currentQuestion, langCode)
          });
          questionCount++;
        }
      }
      
      // Start new question
      currentQuestion = section;
      currentAnswer = '';
    }
  }
  
  // Handle last question if exists
  if (currentQuestion && !currentAnswer && sections.length > 0) {
    const lastSection = sections[sections.length - 1];
    if (lastSection !== currentQuestion && lastSection.length > 10) {
      faqs.push({
        question: cleanText(currentQuestion),
        answer: cleanText(lastSection),
        category: getCategoryForFAQ(currentQuestion, langCode)
      });
      questionCount++;
    }
  }
  
  console.log(`Extracted ${questionCount} FAQ pairs for ${langCode}`);
  
  return faqs;
}

function cleanText(text) {
  return text
    .replace(/^(\d+\.|\d+\)|Q:|A:|Question:|Answer:|Soru:|Cevap:|¿|Pregunta:|Respuesta:|سؤال:|إجابة:|Pertanyaan:|Jawaban:|سوال:|جواب:|Tanong:|Sagot:|प्रश्न:|उत्तर:|Pytanie:|Odpowiedź:|Pergunta:|Resposta:|คำถาม:|คำตอบ:|Câu hỏi:|Trả lời:)\s*/i, '')
    .trim()
    .replace(/\s+/g, ' ');
}

function getCategoryForFAQ(question, langCode) {
  const questionLower = question.toLowerCase();
  
  // Category keywords for different languages
  const categoryKeywords = {
    en: {
      'Basics': ['what is', 'how does', 'basic', 'introduction', 'beginner'],
      'Security': ['secure', 'safe', 'privacy', 'encryption', 'protect'],
      'Technical': ['setup', 'install', 'configure', 'technical', 'connection'],
      'Pricing': ['price', 'cost', 'payment', 'subscription', 'plan'],
      'Performance': ['speed', 'fast', 'slow', 'performance', 'bandwidth'],
      'Legal': ['legal', 'law', 'terms', 'policy', 'compliance']
    },
    es: {
      'Básicos': ['qué es', 'cómo funciona', 'básico', 'introducción', 'principiante'],
      'Seguridad': ['seguro', 'privacidad', 'encriptación', 'proteger'],
      'Técnico': ['configurar', 'instalar', 'técnico', 'conexión'],
      'Precios': ['precio', 'costo', 'pago', 'suscripción', 'plan'],
      'Rendimiento': ['velocidad', 'rápido', 'lento', 'rendimiento'],
      'Legal': ['legal', 'ley', 'términos', 'política']
    }
    // Add more languages as needed
  };
  
  const keywords = categoryKeywords[langCode] || categoryKeywords['en'];
  
  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(word => questionLower.includes(word))) {
      return category;
    }
  }
  
  return langCode === 'en' ? 'General' : 'Genel';
}

// Run the extraction
extractFAQFromDocx().catch(console.error);