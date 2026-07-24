// Tipo das perguntas frequentes

export interface Formation {
  id: string;
  title: string;
  description: string;
  level: "Iniciante" | "Intermediário" | "Avançado" | "Todos os níveis";
  category: string;
  duration?: string;
  icon?: string;
}