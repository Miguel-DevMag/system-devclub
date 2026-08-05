import guilhermePortrait from "@/assets/images/guilherme.jpeg";
import lucasPortrait from "@/assets/images/lucas.webp";
import rodolfoPortrait from "@/assets/images/rodolfo-hero.jpg";
import saraPortrait from "@/assets/images/sara.jpeg";

export type CommunityScene = {
  id: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  stage: string;
  statement: string;
  context: string;
  position: "main" | "upper" | "middle" | "lower";
};

export const communityExperience = {
  eyebrow: "Comunidade DevClub",
  title: "Você não precisa evoluir sozinho.",
  description:
    "Pessoas, professores e projetos conectam diferentes experiências em uma jornada de aprendizado compartilhada.",
  scenes: [
    {
      id: "presenca",
      image: rodolfoPortrait,
      width: 960,
      height: 1440,
      alt: "Rodolfo Mori",
      stage: "Pessoa",
      statement: "Avance acompanhado.",
      context: "Presença humana transforma conteúdo em uma jornada com direção.",
      position: "main",
    },
    {
      id: "troca",
      image: guilhermePortrait,
      width: 480,
      height: 480,
      alt: "Guilherme",
      stage: "Troca",
      statement: "Troque experiências.",
      context: "Diferentes repertórios ajudam a enxergar novos caminhos.",
      position: "upper",
    },
    {
      id: "orientacao",
      image: lucasPortrait,
      width: 1000,
      height: 1000,
      alt: "Lucas",
      stage: "Orientação",
      statement: "Construa com direção.",
      context: "Orientação aproxima cada desafio do próximo passo possível.",
      position: "middle",
    },
    {
      id: "construcao",
      image: saraPortrait,
      width: 480,
      height: 480,
      alt: "Sara",
      stage: "Construção",
      statement: "Aprenda em movimento.",
      context: "Prática compartilhada transforma conhecimento em construção.",
      position: "lower",
    },
  ] satisfies CommunityScene[],
  exit: "Histórias compartilhadas ganham nome, rosto e trajetória.",
} as const;
