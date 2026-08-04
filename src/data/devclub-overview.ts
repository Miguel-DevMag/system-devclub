export type OverviewPillar = {
  id: string;
  index: string;
  title: string;
  description: string;
  stage: "foundation" | "support" | "acceleration";
  position: string;
  activation: readonly [number, number];
};

export const devclubOverview = {
  eyebrow: "DevClub por inteiro",
  title: "Tudo o que acelera sua evolução conectado em uma única experiência.",
  description:
    "O aprendizado acontece com direção, prática, suporte e pessoas que percorrem a mesma jornada.",
  stages: [
    { id: "foundation", label: "Fundação", range: "01—02" },
    { id: "support", label: "Estrutura", range: "03—05" },
    { id: "acceleration", label: "Direção", range: "06—07" },
  ],
  pillars: [
    {
      id: "structured-learning",
      index: "01",
      title: "Formação estruturada",
      description: "Trilhas organizam o aprendizado e tornam o próximo passo mais claro.",
      stage: "foundation",
      position: "overview-pillar--foundation-a",
      activation: [0.08, 0.25],
    },
    {
      id: "practical-projects",
      index: "02",
      title: "Projetos práticos",
      description: "O conhecimento ganha forma em entregas que constroem repertório.",
      stage: "foundation",
      position: "overview-pillar--foundation-b",
      activation: [0.16, 0.34],
    },
    {
      id: "teachers-mentoring",
      index: "03",
      title: "Professores e mentorias",
      description: "Experiência de quem vive tecnologia ajuda a orientar decisões e evolução.",
      stage: "support",
      position: "overview-pillar--support-a",
      activation: [0.34, 0.52],
    },
    {
      id: "human-support",
      index: "04",
      title: "Suporte humano",
      description: "Dúvidas encontram contexto para que o estudo continue avançando.",
      stage: "support",
      position: "overview-pillar--support-b",
      activation: [0.43, 0.61],
    },
    {
      id: "community",
      index: "05",
      title: "Comunidade",
      description: "Troca, colaboração e presença conectam pessoas na mesma jornada.",
      stage: "support",
      position: "overview-pillar--support-c",
      activation: [0.52, 0.7],
    },
    {
      id: "artificial-intelligence",
      index: "06",
      title: "Inteligência artificial",
      description: "IA amplia a prática e apoia uma rotina de aprendizado mais produtiva.",
      stage: "acceleration",
      position: "overview-pillar--acceleration-a",
      activation: [0.68, 0.84],
    },
    {
      id: "professional-growth",
      index: "07",
      title: "Evolução profissional",
      description: "Cada camada aproxima estudo, repertório e direção de carreira.",
      stage: "acceleration",
      position: "overview-pillar--acceleration-b",
      activation: [0.76, 0.92],
    },
  ] satisfies OverviewPillar[],
} as const;
