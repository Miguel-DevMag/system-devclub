// Tipo dos depoimentos da página

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location?: string;
  quote: string;
  avatar: string;
  result?: string;
}