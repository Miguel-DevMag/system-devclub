import logoAws from "@/assets/images/si-amazonwebservices.svg";
import logoAzure from "@/assets/images/si-microsoftazure.svg";
import logoClaude from "@/assets/images/si-claude.svg";
import logoFigma from "@/assets/images/si-figma.svg";
import logoGitKraken from "@/assets/images/si-gitkraken.svg";
import logoGoogle from "@/assets/images/si-google.svg";
import logoGoogleCloud from "@/assets/images/si-googlecloud.svg";
import logoMeta from "@/assets/images/si-meta.svg";
import logoMicrosoft from "@/assets/images/si-microsoft.svg";
import logoMongoDb from "@/assets/images/si-mongodb.svg";
import logoN8n from "@/assets/images/si-n8n.svg";
import logoOpenAi from "@/assets/images/si-openai.svg";
import logoSirius from "@/assets/images/logo-sirius.png";
import photoArnobio from "@/assets/images/Arnobio.jpg";
import photoFernanda from "@/assets/images/fernanda.jpeg";
import photoGuilherme from "@/assets/images/guilherme.jpeg";
import photoLucas from "@/assets/images/lucas.webp";
import photoRodolfo from "@/assets/images/rodolfo.jpg";
import photoSara from "@/assets/images/sara.jpeg";

import type { EcosystemRelation } from "@/types/ecosystem";

export const ecosystemRelations = [
  {
    id: "people",
    index: "01",
    label: "Professores",
    verb: "orientam",
    description: "Experiência e direção dão contexto ao próximo passo.",
    assets: [
      { src: photoRodolfo, alt: "Rodolfo", kind: "portrait" },
      { src: photoSara, alt: "Sara", kind: "portrait" },
      { src: photoFernanda, alt: "Fernanda", kind: "portrait" },
      { src: photoArnobio, alt: "Arnobio", kind: "portrait" },
    ],
  },
  {
    id: "community",
    index: "02",
    label: "Comunidade",
    verb: "acompanha",
    description: "Troca e repertório mantêm o aprendizado em movimento.",
    assets: [
      { src: photoGuilherme, alt: "Guilherme", kind: "portrait" },
      { src: photoLucas, alt: "Lucas", kind: "portrait" },
    ],
  },
  {
    id: "technologies",
    index: "03",
    label: "Tecnologias",
    verb: "ampliam o repertório",
    description: "Ferramentas atuais aproximam estudo e construção.",
    assets: [
      { src: logoFigma, alt: "Figma", kind: "logo" },
      { src: logoGitKraken, alt: "GitKraken", kind: "logo" },
      { src: logoMongoDb, alt: "MongoDB", kind: "logo" },
    ],
  },
  {
    id: "ai",
    index: "04",
    label: "Inteligência artificial",
    verb: "acelera decisões",
    description: "IA entra como ferramenta de criação, análise e automação.",
    assets: [
      { src: logoOpenAi, alt: "OpenAI", kind: "logo" },
      { src: logoClaude, alt: "Claude", kind: "logo" },
      { src: logoN8n, alt: "n8n", kind: "logo" },
    ],
  },
  {
    id: "infrastructure",
    index: "05",
    label: "Infraestrutura",
    verb: "sustenta entregas",
    description: "Cloud aproxima projetos do ambiente em que produtos vivem.",
    assets: [
      { src: logoAws, alt: "AWS", kind: "logo" },
      { src: logoAzure, alt: "Microsoft Azure", kind: "logo" },
      { src: logoGoogleCloud, alt: "Google Cloud", kind: "logo" },
    ],
  },
  {
    id: "practice",
    index: "06",
    label: "Prática",
    verb: "transforma conhecimento",
    description: "Conceitos ganham forma em código, decisões e projetos.",
    assets: [],
    markers: ["conceito", "código", "produto"],
  },
  {
    id: "platform",
    index: "07",
    label: "Plataforma",
    verb: "organiza o caminho",
    description: "Trilhas, aulas e suporte mantêm o próximo passo visível.",
    assets: [{ src: logoSirius, alt: "Sirius", kind: "logo" }],
    markers: ["trilhas", "aulas", "suporte"],
  },
  {
    id: "market",
    index: "08",
    label: "Mercado",
    verb: "dá contexto",
    description: "Referências do setor aproximam repertório e direção profissional.",
    assets: [
      { src: logoGoogle, alt: "Google", kind: "logo" },
      { src: logoMicrosoft, alt: "Microsoft", kind: "logo" },
      { src: logoMeta, alt: "Meta", kind: "logo" },
    ],
  },
] as const satisfies readonly EcosystemRelation[];
