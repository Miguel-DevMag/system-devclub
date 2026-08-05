/**
 * platform-showcase.ts
 * Dados da seção Plataforma — etapas narrativas do fluxo de aprendizado.
 * Cada etapa direciona o foco para uma área do screenshot de produto.
 */

export type PlatformStep = {
  id: string;
  index: string;
  label: string;
  /** object-position do screenshot principal ao ativar este step */
  focusX: string;
  focusY: string;
  /** Acento de cor da etapa */
  accent: "cyan" | "violet" | "emerald" | "amber";
  /** Tag descritiva institucional */
  tag: string;
};

export const platformShowcase = {
  eyebrow: "Plataforma DevClub",
  headline: "Aprender, praticar e construir\nno mesmo lugar.",
  description:
    "Trilhas, aulas e projetos conectam o conteúdo ao próximo passo da sua evolução.",
  steps: [
    {
      id: "trilha",
      index: "01",
      label: "Trilha",
      focusX: "10%",
      focusY: "50%",
      accent: "cyan",
      tag: "Formação organizada",
    },
    {
      id: "aula",
      index: "02",
      label: "Aula",
      focusX: "35%",
      focusY: "45%",
      accent: "violet",
      tag: "Conteúdo com objetivo",
    },
    {
      id: "pratica",
      index: "03",
      label: "Prática",
      focusX: "58%",
      focusY: "50%",
      accent: "cyan",
      tag: "Execução orientada",
    },
    {
      id: "projeto",
      index: "04",
      label: "Projeto",
      focusX: "78%",
      focusY: "48%",
      accent: "emerald",
      tag: "Produto completo",
    },
    {
      id: "comunidade",
      index: "05",
      label: "Comunidade",
      focusX: "92%",
      focusY: "52%",
      accent: "amber",
      tag: "Evolução contínua",
    },
  ] satisfies PlatformStep[],
} as const;

export type PlatformShowcase = typeof platformShowcase;
