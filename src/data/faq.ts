// Perguntas frequentes da página 

import type { FAQItem } from "@/types/faq"; 

export const faq: FAQItem[] = [
  {
    id: "ponto-de-partida",
    category: "Começo",
    question: "Preciso saber programar para começar?",
    answer:
      "A jornada apresenta uma etapa de Fundamentos antes de avançar para front-end, back-end e integrações. Ela organiza o primeiro contato com estrutura, interface e lógica.",
  },
  {
    id: "orientacao",
    category: "Orientação",
    question: "Como o suporte participa do aprendizado?",
    answer:
      "Suporte humano, mentorias e comunidade aparecem como camadas de contexto para interpretar obstáculos, trocar conhecimento e encontrar o próximo passo.",
  },
  {
    id: "pratica",
    category: "Prática",
    question: "Onde o conhecimento vira construção?",
    answer:
      "Exercícios e projetos conectam conteúdo à execução. A progressão apresentada passa por interface responsiva, aplicação interativa, serviço de API, produto full stack e automação.",
  },
  {
    id: "integracao",
    category: "Percurso",
    question: "Como front-end e back-end se conectam?",
    answer:
      "A etapa Full Stack aproxima experiência, regras e dados para que interface e serviço funcionem como partes de um mesmo produto.",
  },
  {
    id: "comunidade",
    category: "Comunidade",
    question: "Qual é o papel das outras pessoas na jornada?",
    answer:
      "Discussões, orientação e projetos compartilhados ampliam perspectivas. A comunidade não substitui a prática individual; ela adiciona contexto e circulação de conhecimento.",
  },
  {
    id: "resultado",
    category: "Resultado",
    question: "A formação garante emprego ou um resultado profissional específico?",
    answer:
      "Não. A proposta organiza aprendizado, prática e repertório para desenvolver capacidade de construir. Resultados profissionais dependem também de continuidade, contexto e decisões individuais.",
  },
];
