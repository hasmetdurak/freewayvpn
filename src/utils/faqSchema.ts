interface FAQItem {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: FAQItem[]): string => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return JSON.stringify(schema, null, 2);
};

export const insertFAQSchema = (faqs: FAQItem[]): void => {
  // Remove existing FAQ schema if present
  const existingSchema = document.querySelector('script[data-faq-schema]');
  if (existingSchema) {
    existingSchema.remove();
  }

  // Create and insert new FAQ schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-faq-schema', 'true');
  script.textContent = generateFAQSchema(faqs);
  
  document.head.appendChild(script);
};