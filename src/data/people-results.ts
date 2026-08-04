export type PeopleResultCapability = {
  index: string;
  action: string;
  title: string;
  description: string;
};

export const peopleResults = {
  eyebrow: "A camada humana",
  title: "Conhecimento ganha direção quando existe experiência por trás.",
  description:
    "A jornada conecta autoria, orientação e prática para transformar conteúdo em capacidade de construir.",
  disclosure:
    "Identidade e função verificadas em canais oficiais do DevClub. Capacidades baseadas na jornada apresentada nesta página.",
  people: [
    {
      name: "Rodolfo Mori",
      role: "Fundador do DevClub",
      context:
        "Uma presença humana por trás da direção da formação — sem personagens, biografias ou resultados fabricados.",
    },
  ],
  result: {
    eyebrow: "Resultado esperado da jornada",
    title: "Capacidade para seguir construindo.",
    description:
      "Não é uma promessa pronta: o percurso busca desenvolver repertório técnico e autonomia progressiva. Cada capacidade depende de estudo, prática e continuidade.",
  },
  capabilities: [
    {
      index: "01",
      action: "Construir",
      title: "interfaces e aplicações",
      description:
        "Dar forma a experiências responsivas, interativas e organizadas em componentes.",
    },
    {
      index: "02",
      action: "Conectar",
      title: "front-end e back-end",
      description:
        "Integrar interface, regras e dados em um fluxo de produto mais completo.",
    },
    {
      index: "03",
      action: "Transformar",
      title: "aprendizado em projetos",
      description:
        "Aplicar fundamentos e tecnologias em entregas que tornam o conhecimento observável.",
    },
    {
      index: "04",
      action: "Desenvolver",
      title: "autonomia progressiva",
      description:
        "Ganhar critérios para interpretar desafios, testar caminhos e encontrar o próximo passo.",
    },
    {
      index: "05",
      action: "Ampliar",
      title: "repertório profissional",
      description:
        "Articular tecnologia, produto e colaboração para atuar em contextos diferentes.",
    },
  ] satisfies PeopleResultCapability[],
} as const;
