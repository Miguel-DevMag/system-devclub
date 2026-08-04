export interface CommunityExperienceZone {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  outcome: string;
  accent: string;
}

export const communityExperience = {
  eyebrow: "Comunidade em movimento",
  title: "Você aprende melhor quando não precisa evoluir sozinho.",
  description:
    "Trocas, projetos, orientação e pessoas percorrendo desafios parecidos transformam estudo em uma experiência compartilhada.",
  disclosure:
    "Representação visual dos modos de colaboração que acompanham a jornada.",
  zones: [
    {
      id: "estudo-em-conjunto",
      index: "01",
      eyebrow: "Estudo em conjunto",
      title: "Uma dúvida deixa de ser um ponto isolado.",
      description:
        "Discussões e troca de conhecimento colocam diferentes perspectivas ao redor do mesmo desafio.",
      outcome: "conhecimento em circulação",
      accent: "#67e8f9",
    },
    {
      id: "mentorias-e-suporte",
      index: "02",
      eyebrow: "Mentorias e suporte",
      title: "Contexto ajuda a enxergar o próximo passo.",
      description:
        "Orientação e suporte ajudam a interpretar obstáculos e seguir a jornada com mais direção.",
      outcome: "direção durante o percurso",
      accent: "#a78bfa",
    },
    {
      id: "projetos-e-desafios",
      index: "03",
      eyebrow: "Projetos e desafios",
      title: "Partes diferentes encontram uma entrega comum.",
      description:
        "Prática e colaboração transformam aprendizados individuais em construção compartilhada.",
      outcome: "repertório construído junto",
      accent: "#f0abfc",
    },
    {
      id: "conexoes-e-oportunidades",
      index: "04",
      eyebrow: "Conexões e oportunidades",
      title: "A jornada ganha outras perspectivas.",
      description:
        "Networking e aproximação com o mercado ampliam repertório e conectam aprendizado a novos contextos.",
      outcome: "pessoas aproximam possibilidades",
      accent: "#f6b981",
    },
  ] satisfies CommunityExperienceZone[],
} as const;
