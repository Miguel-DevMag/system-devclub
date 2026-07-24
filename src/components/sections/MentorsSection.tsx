// Seção de mentores e professores — vitrine de autoridade humana

import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { mentors } from "@/data/mentors";
import type { Mentor } from "@/types/mentor";

// ─── Variantes de animação ────────────────────────────────────────────────────

// Orquestra a entrada escalonada dos cards filhos
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

// Cada card entra com fade + translação vertical suave
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Paleta de identidade por mentor ─────────────────────────────────────────

/*
  Cada mentor recebe uma cor de acento que reforça sua especialidade
  sem tornar os cards genéricos nem uniformes:
    - Rodolfo  → azul índigo  (visão, liderança, produto)
    - Fernanda → rosa chá     (design, interface, UX)
    - Henrique → ciano        (arquitetura, backend, estrutura)
    - Juliana  → violeta      (IA, automação, inovação)
*/
const MENTOR_PALETTE = [
  {
    accentColor: "#818cf8",
    avatarFrom: "rgba(99,102,241,0.30)",
    avatarTo: "rgba(67,56,202,0.15)",
    avatarBorder: "rgba(99,102,241,0.40)",
    ringColor: "rgba(99,102,241,0.18)",
    expertiseBg: "rgba(99,102,241,0.10)",
    expertiseBorder: "rgba(99,102,241,0.25)",
    expertiseText: "#a5b4fc",
    glowColor: "rgba(99,102,241,0.10)",
    hoverBorderGlow: "rgba(99,102,241,0.35)",
    indicatorColor: "#6366f1",
  },
  {
    accentColor: "#f472b6",
    avatarFrom: "rgba(236,72,153,0.28)",
    avatarTo: "rgba(190,24,93,0.12)",
    avatarBorder: "rgba(236,72,153,0.40)",
    ringColor: "rgba(236,72,153,0.15)",
    expertiseBg: "rgba(236,72,153,0.10)",
    expertiseBorder: "rgba(236,72,153,0.25)",
    expertiseText: "#f9a8d4",
    glowColor: "rgba(236,72,153,0.08)",
    hoverBorderGlow: "rgba(236,72,153,0.32)",
    indicatorColor: "#ec4899",
  },
  {
    accentColor: "#22d3ee",
    avatarFrom: "rgba(6,182,212,0.28)",
    avatarTo: "rgba(14,116,144,0.12)",
    avatarBorder: "rgba(6,182,212,0.40)",
    ringColor: "rgba(6,182,212,0.15)",
    expertiseBg: "rgba(6,182,212,0.10)",
    expertiseBorder: "rgba(6,182,212,0.25)",
    expertiseText: "#67e8f9",
    glowColor: "rgba(6,182,212,0.08)",
    hoverBorderGlow: "rgba(6,182,212,0.32)",
    indicatorColor: "#06b6d4",
  },
  {
    accentColor: "#c084fc",
    avatarFrom: "rgba(168,85,247,0.28)",
    avatarTo: "rgba(109,40,217,0.12)",
    avatarBorder: "rgba(168,85,247,0.40)",
    ringColor: "rgba(168,85,247,0.15)",
    expertiseBg: "rgba(168,85,247,0.10)",
    expertiseBorder: "rgba(168,85,247,0.25)",
    expertiseText: "#e9d5ff",
    glowColor: "rgba(168,85,247,0.09)",
    hoverBorderGlow: "rgba(168,85,247,0.32)",
    indicatorColor: "#a855f7",
  },
] as const;

// ─── Utilitário: iniciais do nome ─────────────────────────────────────────────

// Extrai até duas iniciais maiúsculas do nome completo
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ─── Card individual de mentor ────────────────────────────────────────────────

interface MentorCardProps {
  mentor: Mentor;
  index: number;
  reduced: boolean | null;
}

function MentorCard({ mentor, index, reduced }: MentorCardProps) {
  const palette = MENTOR_PALETTE[index % MENTOR_PALETTE.length];
  const initials = getInitials(mentor.name);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={
        reduced
          ? {}
          : {
              y: -5,
              transition: { duration: 0.28, ease: "easeOut" },
            }
      }
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm"
      style={{
        // Profundidade: highlight inset no topo + sombra externa
        boxShadow:
          "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 8px 32px rgba(0,0,0,0.35)",
      }}
      aria-label={`Mentor ${mentor.name} — ${mentor.role}`}
    >
      {/* Brilho de borda superior no hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent 5%, ${palette.hoverBorderGlow} 50%, transparent 95%)`,
        }}
      />

      {/* Glow difuso de canto — cor do mentor */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${palette.glowColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex flex-col gap-5">
        {/* ── Avatar monograma com anéis decorativos ── */}
        <div className="relative w-fit">
          {/* Anel externo translúcido — decoração sutil */}
          <div
            aria-hidden
            className="absolute -inset-2 rounded-2xl"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${palette.ringColor} 0%, transparent 65%)`,
              border: `1px solid ${palette.ringColor}`,
            }}
          />

          {/* Avatar principal com gradiente da paleta do mentor */}
          <div
            className="relative flex h-16 w-16 items-center justify-center rounded-xl border text-base font-semibold tracking-wider"
            style={{
              background: `linear-gradient(145deg, ${palette.avatarFrom} 0%, ${palette.avatarTo} 100%)`,
              borderColor: palette.avatarBorder,
              color: palette.accentColor,
              // Sombra colorida sutil sob o avatar
              boxShadow: `0 4px 16px ${palette.glowColor}`,
            }}
          >
            {initials}
          </div>

          {/* Indicador de presença — ponto colorido no canto inferior direito */}
          <div
            aria-hidden
            className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-neutral-950"
            style={{ background: palette.indicatorColor }}
          />
        </div>

        {/* ── Identidade textual ── */}
        <div className="space-y-0.5">
          {/* Nome com hierarquia forte */}
          <p className="text-base font-semibold leading-snug text-white/95">
            {mentor.name}
          </p>
          {/* Cargo em tom secundário */}
          <p className="text-sm text-white/50">{mentor.role}</p>
        </div>

        {/* ── Biografia — leitura suave ── */}
        <p className="text-sm leading-6 text-white/60">{mentor.bio}</p>

        {/* Separador refinado */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
          }}
        />

        {/* ── Expertise como chip técnico premium ── */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Label descritivo para leitores de tela */}
          <span className="sr-only">Especialidade:</span>

          {/* Chips separados por vírgula — cada expertise como tag individual */}
          {mentor.expertise.split(",").map((skill) => (
            <span
              key={skill.trim()}
              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium leading-none"
              style={{
                background: palette.expertiseBg,
                borderColor: palette.expertiseBorder,
                color: palette.expertiseText,
              }}
            >
              {/* Ponto de ênfase dentro do chip */}
              <span
                aria-hidden
                className="h-1 w-1 flex-shrink-0 rounded-full"
                style={{ background: palette.expertiseText }}
              />
              {skill.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export function MentorsSection() {
  // Respeita a preferência de redução de movimento do sistema
  const reduced = useReducedMotion();

  return (
    <Section id="mentores" className="bg-neutral-950">
      {/* Atmosfera de fundo — luzes ambientes com gradientes radiais */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Luz índigo à esquerda */}
        <div
          className="absolute -left-1/4 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Luz violeta à direita */}
        <div
          className="absolute -right-1/4 top-1/3 h-[420px] w-[420px] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
          }}
        />
        {/* Grade pontilhada discreta */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
      </div>

      <Container>
        <div className="space-y-14">
          {/* ── Cabeçalho da seção ── */}
          <motion.div
            className="max-w-3xl"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge>Mentores</Badge>
            <div className="mt-6">
              <SectionHeading
                title="Aprenda com pessoas que entendem carreira e tecnologia."
                description="A presença de mentores fortes deixa a jornada mais humana, mais confiável e mais próxima do mercado."
              />
            </div>
          </motion.div>

          {/* ── Grid de mentores ── */}
          {/*
            Mobile: coluna única com espaçamento generoso.
            Tablet (md): 2 colunas.
            Desktop (xl): 4 colunas — showcase balanceado de pessoas.
          */}
          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={containerVariants}
            initial={reduced ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {mentors.map((mentor, index) => (
              <MentorCard
                key={mentor.id}
                mentor={mentor}
                index={index}
                reduced={reduced}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}