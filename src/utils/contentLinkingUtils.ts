// Utility functions for bidirectional linking between blog and FAQ content

interface ContentLink {
  id: string;
  title: string;
  url: string;
  type: 'blog' | 'faq';
  language: string;
}

// Sample data structure for content relationships
const contentRelationships: Record<string, ContentLink[]> = {
  // Example relationships - these would be populated with actual data
  'what-is-vpn': [
    { id: 'vpn-basics', title: 'VPN Basics', url: '/blog/vpn-basics', type: 'blog', language: 'en' },
    { id: 'faq-vpn-definition', title: 'What is a VPN?', url: '/faq#what-is-vpn', type: 'faq', language: 'en' }
  ],
  'vpn-security': [
    { id: 'vpn-encryption-explained', title: 'VPN Encryption Explained', url: '/blog/vpn-encryption-explained', type: 'blog', language: 'en' },
    { id: 'faq-vpn-security', title: 'Is VPN secure?', url: '/faq#vpn-security', type: 'faq', language: 'en' }
  ]
  // Add more relationships as needed
};

/**
 * Get related content for a given piece of content
 * @param contentId The ID of the current content
 * @returns Array of related content links
 */
export function getRelatedContent(contentId: string): ContentLink[] {
  return contentRelationships[contentId] || [];
}

/**
 * Generate bidirectional link HTML for FAQ content
 * @param relatedBlogSlug The slug of the related blog post
 * @param language The language of the content
 * @returns HTML string for the bidirectional link
 */
export function generateBidirectionalLink(relatedBlogSlug: string, language: string = 'en'): string {
  const linkTexts: Record<string, string> = {
    en: 'Read this article for more information',
    de: 'Lesen Sie diesen Artikel für weitere Informationen',
    fr: 'Lisez cet article pour plus d\'informations',
    es: 'Lea este artículo para obtener más información',
    pt: 'Leia este artigo para mais informações',
    ko: '더 많은 정보를 위해 이 기사를 읽어보세요',
    ja: '詳しくはこの記事をご覧ください'
  };

  const text = linkTexts[language] || linkTexts.en;
  return `<p class="related-content-link"><a href="/${language}/blog/${relatedBlogSlug}">${text}</a></p>`;
}

/**
 * Add natural affiliate CTA sentences to content
 * @param content The original content
 * @param language The language of the content
 * @param vpnService The VPN service to recommend
 * @returns Content with natural affiliate CTA inserted
 */
export function addNaturalAffiliateCTA(content: string, language: string = 'en', vpnService: string = 'NordVPN'): string {
  const ctaSentences: Record<string, string> = {
    en: `If you want to watch Netflix USA, I personally recommend ${vpnService}, as it was the most stable in my tests.`,
    de: `Wenn Sie Netflix USA schauen möchten, empfehle ich persönlich ${vpnService}, da es in meinen Tests am stabilsten war.`,
    fr: `Si vous souhaitez regarder Netflix USA, je recommande personnellement ${vpnService}, car c'est le plus stable dans mes tests.`,
    es: `Si quieres ver Netflix USA, te recomiendo personalmente ${vpnService}, ya que fue el más estable en mis pruebas.`,
    pt: `Se você quiser assistir Netflix EUA, recomendo pessoalmente ${vpnService}, pois foi o mais estável nos meus testes.`,
    ko: `넷플릭스 미국판을 보고 싶다면, 저는 개인적으로 ${vpnService}를 추천합니다. 제 테스트에서 가장 안정적이었기 때문입니다.`,
    ja: `Netflixアメリカ版を見たい場合は、個人的に${vpnService}をおすすめします。私のテストで最も安定していたからです。`
  };

  const ctaSentence = ctaSentences[language] || ctaSentences.en;
  
  // Insert the CTA sentence at a natural point in the content
  // This is a simple implementation - in a real scenario, you might want to use more sophisticated logic
  const paragraphs = content.split('\n\n');
  if (paragraphs.length > 2) {
    // Insert after the second paragraph
    paragraphs.splice(2, 0, `<p>${ctaSentence}</p>`);
    return paragraphs.join('\n\n');
  }
  
  // If there are fewer than 2 paragraphs, just append the CTA
  return `${content}\n\n<p>${ctaSentence}</p>`;
}