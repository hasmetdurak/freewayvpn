const fs = require('fs');
const path = require('path');

// Read the extracted FAQ content
const extractedFAQPath = path.join(__dirname, '..', 'extracted_faq_content.json');
const contextPath = path.join(__dirname, '..', 'src', 'contexts', 'LanguageContext.tsx');

async function convertFAQToContext() {
  try {
    // Read extracted FAQ data
    const extractedData = JSON.parse(fs.readFileSync(extractedFAQPath, 'utf8'));
    
    console.log('📊 Extracted FAQ Summary:');
    Object.keys(extractedData).forEach(lang => {
      console.log(`${lang}: ${extractedData[lang].length} FAQs`);
    });
    
    // Read current LanguageContext
    const contextContent = fs.readFileSync(contextPath, 'utf8');
    
    // Generate new faqTranslations object
    const faqTranslations = {};
    
    Object.keys(extractedData).forEach(langCode => {
      const faqs = extractedData[langCode];
      
      // Filter out invalid FAQs - use all valid FAQs
      const validFAQs = faqs
        .filter(faq => 
          faq.question && 
          faq.answer && 
          faq.question.length > 10 && 
          faq.answer.length > 10 &&
          faq.question !== faq.answer
        ); // Use all valid FAQs without limit
      
      faqTranslations[langCode] = validFAQs;
      console.log(`✅ Processed ${validFAQs.length} valid FAQs for ${langCode}`);
    });
    
    // Generate the new faqTranslations code
    const faqTranslationsCode = generateFAQTranslationsCode(faqTranslations);
    
    // Replace the faqTranslations in the context file
    const updatedContent = contextContent.replace(
      /const faqTranslations: FAQTranslations = \{[\s\S]*?\n\};/,
      `const faqTranslations: FAQTranslations = ${faqTranslationsCode};`
    );
    
    // Write back to file
    fs.writeFileSync(contextPath, updatedContent, 'utf8');
    
    console.log('\n✅ Successfully updated LanguageContext.tsx with comprehensive FAQ translations!');
    console.log('\n📊 Final Summary:');
    Object.keys(faqTranslations).forEach(lang => {
      console.log(`${lang}: ${faqTranslations[lang].length} FAQs`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

function generateFAQTranslationsCode(faqTranslations) {
  let code = '{\n';
  
  Object.keys(faqTranslations).forEach((langCode, index) => {
    const faqs = faqTranslations[langCode];
    code += `  ${langCode}: [\n`;
    
    faqs.forEach((faq, faqIndex) => {
      const question = escapeString(faq.question);
      const answer = escapeString(faq.answer);
      const category = escapeString(faq.category || 'General');
      
      code += `    {\n`;
      code += `      question: "${question}",\n`;
      code += `      answer: "${answer}",\n`;
      code += `      category: "${category}"\n`;
      code += `    }${faqIndex < faqs.length - 1 ? ',' : ''}\n`;
    });
    
    code += `  ]${index < Object.keys(faqTranslations).length - 1 ? ',' : ''}\n`;
  });
  
  code += '}';
  return code;
}

function escapeString(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

// Run the conversion
convertFAQToContext().catch(console.error);