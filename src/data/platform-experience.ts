export type PlatformExperienceStage = {
  id: string;
  index: string;
  label: string;
  title: string;
  description: string;
  outcome: string;
  scene: "trail" | "lesson" | "practice" | "project" | "continuity";
};

export const platformExperience = {
  eyebrow: "Aprendizado em movimento",
  title: "Tudo organizado para você aprender, praticar e continuar avançando.",
  description:
    "Trilhas conectam conteúdo, exercícios e projetos em uma experiência criada para transformar estudo em execução.",
  disclosure:
    "Visualização demonstrativa da experiência — não representa uma captura oficial da plataforma.",
  stages: [
    {
      id: "trail",
      index: "01",
      label: "Trilha",
      title: "Um caminho organiza o próximo passo.",
      description:
        "Formações e módulos aparecem em sequência para dar contexto ao que estudar agora e ao que vem depois.",
      outcome: "Conteúdo conectado em uma rota de evolução.",
      scene: "trail",
    },
    {
      id: "lesson",
      index: "02",
      label: "Aula",
      title: "O conteúdo chega com objetivo claro.",
      description:
        "Cada módulo aproxima conceito e aplicação para que a aula prepare a próxima ação, sem virar um destino isolado.",
      outcome: "Do conceito para uma tarefa compreensível.",
      scene: "lesson",
    },
    {
      id: "practice",
      index: "03",
      label: "Prática",
      title: "Aprender ganha forma na execução.",
      description:
        "Um espaço de prática orientada transforma o conteúdo em decisões, código e resultado observável.",
      outcome: "Conhecimento aplicado em uma entrega pequena.",
      scene: "practice",
    },
    {
      id: "project",
      index: "04",
      label: "Projeto",
      title: "As entregas passam a trabalhar juntas.",
      description:
        "A prática evolui para um projeto demonstrativo que conecta interface responsiva, dados e uma camada de API.",
      outcome: "Um produto completo como síntese da jornada.",
      scene: "project",
    },
    {
      id: "continuity",
      index: "05",
      label: "Continuidade",
      title: "O projeto abre a próxima conversa.",
      description:
        "Comunidade e suporte dão contexto para revisar decisões, compartilhar dúvidas e escolher a próxima etapa.",
      outcome: "Feedback, troca e um novo ciclo de construção.",
      scene: "continuity",
    },
  ] satisfies PlatformExperienceStage[],
} as const;
