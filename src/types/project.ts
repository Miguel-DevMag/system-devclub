// Tipo dos projetos reais exibidos na página

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  href?: string;
}