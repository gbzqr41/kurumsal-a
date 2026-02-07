
export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  imageUrl: string;
  price?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
