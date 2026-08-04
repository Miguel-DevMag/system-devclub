export type LearningTechnology = {
  name: string;
  role: string;
};

export type LearningStage = {
  id: string;
  index: string;
  title: string;
  phase: string;
  objective: string;
  technologies: LearningTechnology[];
  project: {
    title: string;
    description: string;
    kind: "structure" | "interface" | "service" | "product" | "automation";
  };
  continuity: string;
  accent: string;
};

export const learningJourney = {
  eyebrow: "Jornada de aprendizado",
  title: "Do primeiro código à capacidade de construir produtos completos.",
  description:
    "Escolha seu ponto de partida, avance por trilhas conectadas e transforme conhecimento em projetos.",
  stages: [
    {
      id: "fundamentals",
      index: "01",
      title: "Fundamentos",
      phase: "Estruturar",
      objective:
        "Compreender a lógica da web e transformar uma ideia em uma primeira entrega funcional.",
      technologies: [
        { name: "HTML5", role: "estrutura" },
        { name: "CSS3", role: "interface" },
        { name: "JavaScript", role: "lógica" },
        { name: "Git", role: "evolução" },
      ],
      project: {
        title: "Interface responsiva",
        description:
          "Uma página estruturada, adaptável e pronta para receber comportamento.",
        kind: "structure",
      },
      continuity: "A base passa a responder ao usuário.",
      accent: "#67e8f9",
    },
    {
      id: "front-end",
      index: "02",
      title: "Front-end",
      phase: "Interagir",
      objective:
        "Construir interfaces organizadas em componentes e experiências que reagem a dados.",
      technologies: [
        { name: "React", role: "componentes" },
        { name: "TypeScript", role: "segurança" },
        { name: "Tailwind CSS", role: "sistema visual" },
      ],
      project: {
        title: "Aplicação interativa",
        description:
          "Uma interface composta por estados, componentes e informação dinâmica.",
        kind: "interface",
      },
      continuity: "A interface encontra regras e dados.",
      accent: "#60a5fa",
    },
    {
      id: "back-end",
      index: "03",
      title: "Back-end",
      phase: "Conectar",
      objective:
        "Organizar regras de negócio e disponibilizar informação para diferentes experiências.",
      technologies: [
        { name: "Node.js", role: "servidor" },
        { name: "APIs", role: "integração" },
        { name: "TypeScript", role: "contratos" },
      ],
      project: {
        title: "Serviço de API",
        description:
          "Uma camada de aplicação capaz de receber, organizar e devolver dados.",
        kind: "service",
      },
      continuity: "Interface e serviço tornam-se um produto.",
      accent: "#a78bfa",
    },
    {
      id: "full-stack",
      index: "04",
      title: "Full Stack",
      phase: "Integrar",
      objective:
        "Conectar experiência, lógica e entrega em um fluxo de produto completo.",
      technologies: [
        { name: "React", role: "experiência" },
        { name: "Node.js", role: "aplicação" },
        { name: "APIs", role: "conexão" },
        { name: "TypeScript", role: "consistência" },
      ],
      project: {
        title: "Produto full stack",
        description:
          "Uma aplicação em que interface e serviço trabalham como um único sistema.",
        kind: "product",
      },
      continuity: "O produto ganha novos canais e automação.",
      accent: "#6ee7b7",
    },
    {
      id: "ai-automation",
      index: "05",
      title: "IA & Automações",
      phase: "Orquestrar",
      objective:
        "Aplicar inteligência artificial e fluxos automatizados a tarefas e integrações.",
      technologies: [
        { name: "IA aplicada", role: "assistência" },
        { name: "N8N", role: "workflows" },
        { name: "APIs", role: "integrações" },
      ],
      project: {
        title: "Fluxo automatizado",
        description:
          "Um processo que conecta entradas, decisões e entregas com menos trabalho repetitivo.",
        kind: "automation",
      },
      continuity: "Capacidade pronta para ganhar forma na plataforma.",
      accent: "#f0abfc",
    },
  ] satisfies LearningStage[],
  extensions: [
    {
      title: "Mobile",
      description: "Aplicações para dispositivos móveis com foco em produto.",
    },
    {
      title: "Dados",
      description: "Análise e visualização com Power BI.",
    },
  ],
} as const;
