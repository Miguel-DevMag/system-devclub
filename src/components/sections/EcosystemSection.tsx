// Seção do ecossistema além do código — pilares de suporte, comunidade e crescimento

import { motion, useReducedMotion } from "motion/react";
import {
  Users,
  MessageSquare,
  HeartPulse,
  Bot,
  LifeBuoy,
  MessageCircleMore,
  Briefcase,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/shared/Badge";
import { ecosystem } from "@/data/ecosystem";

// ─── Mapeamento de ícones Lucide por nome ───────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  "users-round": Users,
  "messages-square": MessageSquare,
  "heart-pulse": HeartPulse,
  bot: Bot,
  "life-buoy": LifeBuoy,
  "message-circle-more": MessageCircleMore,
  briefcase: Briefcase,
};

// ─── Paleta de cores por pilar (índice circular) ─────────────────────────────
const PILLAR_COLORS: {
  glow: string;
  border: string;
  iconBg: string;
  iconColor: string;
}[] = [
  {
    glow: "rgba(99,102,241,0.12)",
    border: "rgba(99,102,241,0.25)",
    iconBg: "rgba(99,102,241,0.12)",
    iconColor: "#a5b4fc",
  },
  {
    glow: "rgba(20,184,166,0.12)",
    border: "rgba(20,184,166,0.25)",
    iconBg: "rgba(20,184,166,0.10)",
    iconColor: "#5eead4",
  },
  {
    glow: "rgba(245,158,11,0.10)",
    border: "rgba(245,158,11,0.22)",
    iconBg: "rgba(245,158,11,0.10)",
    iconColor: "#fcd34d",
  },
  {
    glow: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.25)",
    iconBg: "rgba(139,92,246,0.12)",
    iconColor: "#c4b5fd",
  },
  {
    glow: "rgba(236,72,153,0.10)",
    border: "rgba(236,72,153,0.22)",
    iconBg: "rgba(236,72,153,0.10)",
    iconColor: "#f9a8d4",
  },
  {
    glow: "rgba(34,211,238,0.10)",
    border: "rgba(34,211,238,0.22)",
    iconBg: "rgba(34,211,238,0.10)",
    iconColor: "#67e8f9",
  },
  {
    glow: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.22)",
    iconBg: "rgba(16,185,129,0.10)",
    iconColor: "#6ee7b7",
  },
];

const EASE_PREMIUM = [0.25, 0.46, 0.45, 0.94] as const;

// ─── Variantes de animação do container (stagger nos filhos) ─────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

// ─── Variantes de animação de cada card ──────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE_PREMIUM,
    },
  },
};

// ─── Variantes do cabeçalho ───────────────────────────────────────────────────
const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

// ─── Componente principal ────────────────────────────────────────────────────
export function EcosystemSection() {
  // Respeita prefers-reduced-motion para acessibilidade
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="ecossistema" className="bg-neutral-950">
      {/* ── Atmosfera de fundo: luzes radiais e gradientes suaves ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Glow central superior */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: "55%",
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.09) 0%, transparent 70%)",
            filter: "blur(1px)",
          }}
        />
        {/* Glow inferior esquerdo */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-5%",
            width: "40%",
            height: "45%",
            background:
              "radial-gradient(ellipse at bottom left, rgba(20,184,166,0.07) 0%, transparent 65%)",
          }}
        />
        {/* Glow inferior direito */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "-5%",
            width: "35%",
            height: "40%",
            background:
              "radial-gradient(ellipse at bottom right, rgba(139,92,246,0.07) 0%, transparent 65%)",
          }}
        />
        {/* Linha de separação sutil no topo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.06) 70%, transparent)",
          }}
        />
      </div>

      <Container>
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* ── Cabeçalho editorial ── */}
          <motion.div
            variants={prefersReducedMotion ? undefined : headingVariants}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl"
          >
            <Badge>Ecossistema</Badge>
            <div className="mt-6">
              <SectionHeading
                title="Tudo além do código para acelerar a evolução."
                description="Aprender tecnologia também envolve suporte, direção, comunidade e acompanhamento. O DevClub reúne tudo isso em um só ambiente."
              />
            </div>

            {/* Linha decorativa — separador editorial */}
            <div
              aria-hidden="true"
              style={{
                marginTop: "2.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "2rem",
                  height: "2px",
                  borderRadius: "9999px",
                  background: "rgba(99,102,241,0.7)",
                }}
              />
              <div
                style={{
                  width: "0.5rem",
                  height: "2px",
                  borderRadius: "9999px",
                  background: "rgba(99,102,241,0.35)",
                }}
              />
            </div>
          </motion.div>

          {/* ── Grade de pilares ── */}
          <motion.div
            variants={prefersReducedMotion ? undefined : containerVariants}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-60px" }}
            style={{
              marginTop: "3.5rem",
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(1, 1fr)",
            }}
            className="ecosystem-grid"
          >
            {ecosystem.map((item, index) => {
              const palette = PILLAR_COLORS[index % PILLAR_COLORS.length];
              const IconComponent = ICON_MAP[item.icon] ?? Bot;

              return (
                <EcosystemCard
                  key={item.id}
                  item={item}
                  palette={palette}
                  IconComponent={IconComponent}
                  prefersReducedMotion={prefersReducedMotion ?? false}
                />
              );
            })}
          </motion.div>
        </div>
      </Container>

      {/* ── Estilos responsivos da grade ── */}
      <style>{`
        @media (min-width: 640px) {
          .ecosystem-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .ecosystem-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        @media (min-width: 1280px) {
          .ecosystem-grid {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </Section>
  );
}

// ─── Tipos do card ───────────────────────────────────────────────────────────
interface EcosystemCardProps {
  item: { id: string; title: string; description: string; icon: string };
  palette: (typeof PILLAR_COLORS)[number];
  IconComponent: React.ElementType;
  prefersReducedMotion: boolean;
}

// ─── Card individual de pilar do ecossistema ─────────────────────────────────
function EcosystemCard({
  item,
  palette,
  IconComponent,
  prefersReducedMotion,
}: EcosystemCardProps) {
  return (
    <motion.article
      variants={prefersReducedMotion ? undefined : cardVariants}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -5,
              transition: { duration: 0.22, ease: "easeOut" },
            }
      }
      style={{
        position: "relative",
        borderRadius: "1.25rem",
        border: `1px solid ${palette.border}`,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "1.625rem",
        cursor: "default",
        overflow: "hidden",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        if (prefersReducedMotion) return;
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = palette.border.replace("0.25", "0.55").replace("0.22", "0.50");
        el.style.boxShadow = `0 0 28px ${palette.glow}, 0 8px 32px rgba(0,0,0,0.35)`;
      }}
      onMouseLeave={(e) => {
        if (prefersReducedMotion) return;
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = palette.border;
        el.style.boxShadow = "none";
      }}
    >
      {/* Glow interno sutil no canto superior esquerdo */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-30%",
          left: "-20%",
          width: "60%",
          height: "60%",
          background: `radial-gradient(ellipse at top left, ${palette.glow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* ── Cabeçalho do card: ícone + numeração editorial ── */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          position: "relative",
        }}
      >
        {/* Ícone premium com fundo colorido */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.75rem",
            height: "2.75rem",
            borderRadius: "0.875rem",
            background: palette.iconBg,
            border: `1px solid ${palette.border}`,
            flexShrink: 0,
          }}
        >
          <IconComponent
            size={18}
            strokeWidth={1.6}
            color={palette.iconColor}
            aria-hidden="true"
          />
        </div>

        {/* Numeração discreta — referência editorial (01, 02, ...) */}
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.22)",
            textTransform: "uppercase",
            paddingTop: "0.25rem",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {String(parseInt(item.id, 10)).padStart(2, "0")}
        </span>
      </div>

      {/* ── Título do pilar ── */}
      <h3
        style={{
          marginTop: "1.25rem",
          fontSize: "1rem",
          fontWeight: 600,
          letterSpacing: "-0.01em",
          lineHeight: "1.35",
          color: "rgba(255,255,255,0.92)",
          position: "relative",
        }}
      >
        {item.title}
      </h3>

      {/* ── Descrição do pilar ── */}
      <p
        style={{
          marginTop: "0.625rem",
          fontSize: "0.8125rem",
          lineHeight: "1.65",
          color: "rgba(255,255,255,0.52)",
          position: "relative",
        }}
      >
        {item.description}
      </p>

      {/* Linha de destaque colorida na base do card */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "20%",
          right: "20%",
          height: "1px",
          background: `linear-gradient(to right, transparent, ${palette.iconColor}44, transparent)`,
        }}
      />
    </motion.article>
  );
}