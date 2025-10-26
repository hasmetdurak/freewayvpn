export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  language?: string; // Optional language property to indicate the language of the FAQ
}