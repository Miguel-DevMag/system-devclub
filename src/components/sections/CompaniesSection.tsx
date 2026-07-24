// Seção de autoridade — empresas parceiras e métricas de credibilidade.
// Objetivo: transmitir seriedade, mercado real e escala do DevClub.

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { companies } from "@/data/companies";
import { statistics } from "@/data/statistics";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────
// Curvas de easing premium — consistentes com o HeroSection
// ─────────────────────────────────────────────────────────────────

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

// ─────────────────────────────────────────────────────────────────
// Variantes de animação reutilizáveis
// ─────────────────────────────────────────────────────────────────

// Container com stagger — orquestra a revelação sequencial dos filhos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// Item padrão: sobe com blur — materialização suave
const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_PREMIUM },
  },
};

// Entrada lateral para blocos de peso visual maior
const blockVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_PREMIUM },
  },
};

// ─────────────────────────────────────────────────────────────────
// Paleta de acentos para os cards de métricas — por índice
// ─────────────────────────────────────────────────────────────────

const STAT_ACCENTS = [
  {
    bar: "bg-cyan-400",
    glow: "hover:shadow-[0_0_28px_-6px_rgba(34,211,238,0.45)]",
    border: "hover:border-cyan-500/30",
    text: "text-cyan-300",
  },
  {
    bar: "bg-violet-400",
    glow: "hover:shadow-[0_0_28px_-6px_rgba(167,139,250,0.45)]",
    border: "hover:border-violet-500/30",
    text: "text-violet-300",
  },
  {
    bar: "bg-emerald-400",
    glow: "hover:shadow-[0_0_28px_-6px_rgba(52,211,153,0.45)]",
    border: "hover:border-emerald-500/30",
    text: "text-emerald-300",
  },
  {
    bar: "bg-amber-400",
    glow: "hover:shadow-[0_0_28px_-6px_rgba(251,191,36,0.45)]",
    border: "hover:border-amber-500/30",
    text: "text-amber-300",
  },
];

// ─────────────────────────────────────────────────────────────────
// Subcomponente: card de métrica premium
// ─────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  description,
  index,
  reduced,
}: {
  label: string;
  value: string;
  description?: string;
  index: number;
  reduced: boolean | null;
}) {
  const accent = STAT_ACCENTS[index % STAT_ACCENTS.length];

  return (
    <motion.div
      variants={itemVariants}
      whileHover={reduced ? undefined : { y: -5, scale: 1.02 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn(
        // Base glass
        "group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.04] p-6 backdrop-blur-sm",
        // Sombra e transição
        "cursor-default shadow-xl shadow-black/30 transition-all duration-300",
        "hover:border-white/20 hover:bg-white/[0.07]",
        accent.glow,
        accent.border
      )}
    >
      {/* Barra de accent colorida — identidade visual do card */}
      <span
        className={cn("mb-4 block h-[3px] w-10 rounded-full", accent.bar)}
        aria-hidden="true"
      />

      {/* Rótulo da métrica */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
        {label}
      </p>

      {/* Valor numérico — hierarquia dominante */}
      <p className={cn("mt-2 text-[2.2rem] font-semibold leading-none tracking-[-0.02em]", accent.text)}>
        {value}
      </p>

      {/* Descrição de apoio */}
      {description && (
        <p className="mt-3 text-[13px] leading-relaxed text-white/40">
          {description}
        </p>
      )}

      {/* Linha de vidro iluminado no topo — aparece no hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Subcomponente: card de empresa premium
// ─────────────────────────────────────────────────────────────────

function CompanyCard({
  name,
  sector,
  reduced,
}: {
  name: string;
  sector?: string;
  reduced: boolean | null;
}) {
  // Iniciais da empresa — máximo 2 caracteres
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.div
      variants={itemVariants}
      whileHover={reduced ? undefined : { y: -4, scale: 1.015 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.06] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-4">
        {/* Avatar de iniciais — simula logo monocromático */}
        <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.05] backdrop-blur-sm transition-all duration-300 group-hover:border-white/[0.2] group-hover:bg-white/[0.1]">
          <span className="text-sm font-bold tracking-wide text-white/60 transition-colors duration-300 group-hover:text-white/90">
            {initials}
          </span>
          {/* Glow sutil atrás do avatar no hover */}
          <div
            className="pointer-events-none absolute inset-0 rounded-xl bg-white/0 blur-md transition-all duration-300 group-hover:bg-white/[0.04]"
            aria-hidden="true"
          />
        </div>

        {/* Informações da empresa */}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white/80 transition-colors duration-300 group-hover:text-white">
            {name}
          </p>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/35 transition-colors duration-300 group-hover:text-white/55">
            {sector ?? "Setor não informado"}
          </p>
        </div>
      </div>

      {/* Linha de destaque superior — aparece no hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Componente principal
// ─────────────────────────────────────────────────────────────────

export function CompaniesSection() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Dispara animações somente quando a seção entra na viewport
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <Section id="empresas" className="relative overflow-hidden bg-neutral-950">
      {/* ── Fundo atmosférico — iluminação de suporte ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Glow violeta — âncora de profundidade superior */}
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.3, 0.5, 0.3], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[120px]"
        />

        {/* Glow ciano — complemento de luz inferior */}
        <motion.div
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.2, 0.38, 0.2], scale: [1, 1.1, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/4 h-[22rem] w-[22rem] rounded-full bg-cyan-500/[0.07] blur-[100px]"
        />

        {/* Separador superior — linha editorial sutil */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      <Container>
        <div ref={sectionRef} className="space-y-16">

          {/* ════════════════════════════════
              CABEÇALHO EDITORIAL
              ════════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-3xl"
          >
            {/* Eyebrow label — autoridade imediata */}
            <motion.div variants={itemVariants} className="mb-6 inline-flex">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-violet-500/25 bg-violet-500/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-300/75 backdrop-blur-sm">
                <span
                  className="h-1 w-4 rounded-full bg-violet-400/70"
                  aria-hidden="true"
                />
                Autoridade no mercado
              </span>
            </motion.div>

            {/* Headline da seção */}
            <motion.h2
              variants={itemVariants}
              className="text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[2.4rem] md:text-[2.8rem]"
            >
              Alunos conectados às empresas que{" "}
              <span className="bg-gradient-to-r from-violet-300 via-white/90 to-cyan-300 bg-clip-text text-transparent">
                valorizam prática e entrega.
              </span>
            </motion.h2>

            {/* Linha separadora editorial */}
            <motion.div
              variants={itemVariants}
              className="my-6 h-px w-16 rounded-full bg-white/[0.12]"
              aria-hidden="true"
            />

            {/* Descrição de suporte */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-[1.025rem] leading-[1.75] text-white/45"
            >
              O DevClub existe para aproximar aprendizado e mercado. A comunidade
              cresce com trilhas, projetos e uma rede que abre espaço para novas
              oportunidades.
            </motion.p>
          </motion.div>

          {/* ════════════════════════════════
              CARDS DE MÉTRICAS
              ════════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {statistics.map((item, i) => (
              <StatCard
                key={item.id}
                label={item.label}
                value={item.value}
                description={item.description}
                index={i}
                reduced={prefersReducedMotion}
              />
            ))}
          </motion.div>

          {/* ════════════════════════════════
              BLOCO DE EMPRESAS
              ════════════════════════════════ */}
          <motion.div
            variants={blockVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm md:p-8"
          >
            {/* Borda superior iluminada — vidro refinado */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[2rem] bg-gradient-to-r from-transparent via-white/15 to-transparent"
              aria-hidden="true"
            />

            {/* Cabeçalho do bloco */}
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
                Empresas conectadas ao ecossistema
              </p>

              {/* Contador de empresas — detalhe de autoridade */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-white/40">
                +180 parceiras
              </span>
            </div>

            {/* Separador sutil abaixo do header */}
            <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden="true" />

            {/* Grid de cards de empresas */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delayChildren: 0.5 }}
              className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {companies.map((company) => (
                <CompanyCard
                  key={company.id}
                  name={company.name}
                  sector={company.sector}
                  reduced={prefersReducedMotion}
                />
              ))}
            </motion.div>

            {/* Rodapé do bloco — nota de credibilidade */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden="true" />
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/25">
                ecossistema em expansão
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" aria-hidden="true" />
            </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}