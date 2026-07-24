// Tipo das tecnologias exibidas na seção técnica

export interface Technology {
  id: string;
  name: string;
  category: string;
  description?: string;
  icon?: string;
}