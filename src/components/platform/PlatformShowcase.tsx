/**
 * PlatformShowcase.tsx
 *
 * Composição editorial assimétrica da Plataforma DevClub.
 *
 * Creative Decision Brief:
 * - Asset único real: platform-product-slice.jpg (screenshot da interface de aprendizado)
 * - Protagonista: screenshot grande (≈60% largura desktop)
 * - Dois crops do mesmo screenshot com clip-path/object-position diferente criam profundidade
 * - Interação principal: foco de cursor suave (max 4px deslocamento) — sem tilt exagerado
 * - Step navigation: 5 labels horizontais com indicador deslizante
 * - Quando step muda: object-position do protagonista transita suavemente para revelar
 *   a área correspondente da interface
 *
 * Motion Intent:
 * - 0–150ms: headline e screenshot principal já visíveis (sem opacity: 0 no início)
 * - 150–350ms: luz do screenshot ganha presença (overlay de brilho)
 * - 300–600ms: primeiro recorte secundário se alinha (translateY: 12px → 0)
 * - 450–750ms: segundo recorte se alinha
 * - 650–900ms: indicador de progressão estabiliza (scale + opacity)
 */

import {
  useRef,
  useState,
  useCallback,
  type PointerEvent,
} from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";

import { motionTokens } from "@/components/motion/motion-tokens";
import { platformShowcase, type PlatformStep } from "@/data/platform-showcase";
import platformImg from "@/assets/images/platform-product-slice.jpg";

// ─── Accent tokens ────────────────────────────────────────────────────────────
const ACCENT: Record<PlatformStep["accent"], {
  line: string;
  dot: string;
  label: string;
  glow: string;
}> = {
  cyan: {
    line: "rgba(103,232,249,0.8)",
    dot: "rgba(103,232,249,0.9)",
    label: "rgba(207,250,254,0.85)",
    glow: "rgba(103,232,249,0.15)",
  },
  violet: {
    line: "rgba(167,139,250,0.8)",
    dot: "rgba(167,139,250,0.9)",
    label: "rgba(196,181,253,0.85)",
    glow: "rgba(167,139,250,0.15)",
  },
  emerald: {
    line: "rgba(110,231,183,0.8)",
    dot: "rgba(110,231,183,0.9)",
    label: "rgba(167,243,208,0.85)",
    glow: "rgba(110,231,183,0.12)",
  },
  amber: {
    line: "rgba(251,191,36,0.7)",
    dot: "rgba(251,191,36,0.9)",
    label: "rgba(253,230,138,0.85)",
    glow: "rgba(251,191,36,0.12)",
  },
};

// ─── StepNav ──────────────────────────────────────────────────────────────────

function StepNav({
  activeStep,
  onStepChange,
  reducedMotion,
  isInView,
}: {
  activeStep: number;
  onStepChange: (i: number) => void;
  reducedMotion: boolean;
  isInView: boolean;
}) {
  const step = platformShowcase.steps[activeStep];
  const accent = ACCENT[step.accent];

  return (
    <div className="pshow__nav" role="tablist" aria-label="Etapas da plataforma">
      {/* Indicador deslizante */}
      <motion.div
        className="pshow__nav-indicator"
        animate={{
          left: `calc(${activeStep} * (100% / ${platformShowcase.steps.length}))`,
          width: `calc(100% / ${platformShowcase.steps.length})`,
          background: accent.line,
        }}
        transition={{
          duration: reducedMotion ? 0 : 0.36,
          ease: motionTokens.easing.emphasized,
        }}
        aria-hidden="true"
      />

      {platformShowcase.steps.map((s, i) => {
        const isActive = i === activeStep;
        const a = ACCENT[s.accent];
        return (
          <motion.button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`pshow-panel-${s.id}`}
            className="pshow__nav-step"
            onClick={() => onStepChange(i)}
            onFocus={() => onStepChange(i)}
            initial={reducedMotion ? undefined : { opacity: 0, y: 6 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: reducedMotion ? 0 : 0.4,
              delay: reducedMotion ? 0 : 0.65 + i * 0.06,
              ease: motionTokens.easing.emphasized,
            }}
            style={{ color: isActive ? a.label : "rgba(255,255,255,0.38)" }}
          >
            <span className="pshow__nav-index" style={{ color: isActive ? a.dot : "rgba(255,255,255,0.2)" }}>
              {s.index}
            </span>
            <span className="pshow__nav-label">{s.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}

// ─── ProductComposition ───────────────────────────────────────────────────────

function ProductComposition({
  activeStep,
  reducedMotion,
  pointerX,
  pointerY,
  isInView,
}: {
  activeStep: number;
  reducedMotion: boolean;
  pointerX: ReturnType<typeof useSpring>;
  pointerY: ReturnType<typeof useSpring>;
  isInView: boolean;
}) {
  const step = platformShowcase.steps[activeStep];
  const accent = ACCENT[step.accent];

  // Micro-deslocamento por cursor — max 4px cada eixo
  const mainX = useTransform(pointerX, [-1, 1], [-3, 3]);
  const mainY = useTransform(pointerY, [-1, 1], [-3, 3]);

  // Recortes secundários: deslocamento levemente maior (mais profundidade)
  const cut1X = useTransform(pointerX, [-1, 1], [-5, 5]);
  const cut1Y = useTransform(pointerY, [-1, 1], [-4, 4]);
  const cut2X = useTransform(pointerX, [-1, 1], [-6, 6]);
  const cut2Y = useTransform(pointerY, [-1, 1], [-3, 3]);

  // Luz do cursor
  const lightX = useTransform(pointerX, [-1, 1], ["28%", "72%"]);
  const lightY = useTransform(pointerY, [-1, 1], ["18%", "82%"]);

  return (
    <div className="pshow__composition" aria-hidden="true">
      {/* ── Luz de ambiente que segue cursor ── */}
      {!reducedMotion && (
        <motion.div
          className="pshow__cursor-light"
          style={{
            left: lightX,
            top: lightY,
            background: `radial-gradient(circle at center, ${accent.glow}, transparent 60%)`,
          }}
        />
      )}

      {/* ── Screenshot principal protagonista ── */}
      <motion.div
        className="pshow__main"
        style={reducedMotion ? undefined : { x: mainX, y: mainY }}
        initial={reducedMotion ? undefined : { opacity: 0.6 }}
        animate={isInView ? { opacity: 1 } : undefined}
        transition={{
          duration: reducedMotion ? 0 : 0.15,
          ease: motionTokens.easing.standard,
        }}
      >
        {/* Borda superior luminosa — muda com o step ativo */}
        <motion.div
          className="pshow__main-glow"
          animate={{ background: `linear-gradient(90deg, transparent 8%, ${accent.line} 40%, ${accent.line} 60%, transparent 92%)` }}
          transition={{ duration: reducedMotion ? 0 : 0.42, ease: motionTokens.easing.standard }}
        />

        <motion.img
          src={platformImg}
          width={1240}
          height={400}
          loading="lazy"
          decoding="async"
          alt="Interface da Plataforma DevClub — trilhas, módulos e progresso de aprendizado"
          className="pshow__main-img"
          animate={{
            objectPosition: `${step.focusX} ${step.focusY}`,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.56,
            ease: motionTokens.easing.emphasized,
          }}
          draggable={false}
        />

        {/* Tag da etapa ativa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            className="pshow__main-tag"
            initial={reducedMotion ? undefined : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -3 }}
            transition={{ duration: reducedMotion ? 0 : 0.28, ease: motionTokens.easing.standard }}
            style={{ borderColor: accent.glow, color: accent.label }}
          >
            <span
              className="pshow__main-tag-dot"
              style={{ background: accent.dot }}
            />
            {step.tag}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ── Recorte secundário 1 — esquerda/topo, sobreposto ── */}
      <motion.div
        className="pshow__cut pshow__cut--1"
        style={reducedMotion ? undefined : { x: cut1X, y: cut1Y }}
        initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: reducedMotion ? 0 : 0.52,
          delay: reducedMotion ? 0 : 0.3,
          ease: motionTokens.easing.emphasized,
        }}
      >
        <img
          src={platformImg}
          width={1240}
          height={400}
          loading="lazy"
          decoding="async"
          alt=""
          className="pshow__cut-img"
          style={{ objectPosition: "18% 35%" }}
          draggable={false}
        />
        <div className="pshow__cut-label">
          <span style={{ color: ACCENT.cyan.label }}>Trilha</span>
          <span className="pshow__cut-sublabel">em progresso</span>
        </div>
      </motion.div>

      {/* ── Recorte secundário 2 — direita/inferior, sobreposto ── */}
      <motion.div
        className="pshow__cut pshow__cut--2"
        style={reducedMotion ? undefined : { x: cut2X, y: cut2Y }}
        initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{
          duration: reducedMotion ? 0 : 0.52,
          delay: reducedMotion ? 0 : 0.45,
          ease: motionTokens.easing.emphasized,
        }}
      >
        <img
          src={platformImg}
          width={1240}
          height={400}
          loading="lazy"
          decoding="async"
          alt=""
          className="pshow__cut-img"
          style={{ objectPosition: "85% 55%" }}
          draggable={false}
        />
        <div className="pshow__cut-label">
          <span style={{ color: ACCENT.emerald.label }}>Projeto</span>
          <span className="pshow__cut-sublabel">em construção</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── MobileShowcase ───────────────────────────────────────────────────────────

function MobileShowcase({
  activeStep,
  onStepChange,
  isInView,
  reducedMotion,
}: {
  activeStep: number;
  onStepChange: (i: number) => void;
  isInView: boolean;
  reducedMotion: boolean;
}) {
  const step = platformShowcase.steps[activeStep];
  const accent = ACCENT[step.accent];

  return (
    <div className="pshow__mobile">
      {/* Screenshot principal fullbleed mobile */}
      <motion.div
        className="pshow__mobile-main"
        initial={reducedMotion ? undefined : { opacity: 0.7 }}
        animate={isInView ? { opacity: 1 } : undefined}
        transition={{ duration: reducedMotion ? 0 : 0.22 }}
      >
        <motion.div
          className="pshow__main-glow"
          animate={{ background: `linear-gradient(90deg, transparent 8%, ${accent.line} 40%, ${accent.line} 60%, transparent 92%)` }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
        />
        <motion.img
          src={platformImg}
          width={1240}
          height={400}
          loading="lazy"
          decoding="async"
          alt="Interface da Plataforma DevClub"
          className="pshow__mobile-img"
          animate={{ objectPosition: `${step.focusX} ${step.focusY}` }}
          transition={{ duration: reducedMotion ? 0 : 0.5, ease: motionTokens.easing.emphasized }}
          draggable={false}
        />
      </motion.div>

      {/* Navegação mobile: dots simples */}
      <div className="pshow__mobile-nav" role="tablist" aria-label="Etapas da plataforma">
        {platformShowcase.steps.map((s, i) => {
          const isActive = i === activeStep;
          const a = ACCENT[s.accent];
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`pshow-panel-mobile-${s.id}`}
              className="pshow__mobile-dot"
              onClick={() => onStepChange(i)}
              aria-label={s.label}
              style={{
                background: isActive ? a.dot : "rgba(255,255,255,0.18)",
                boxShadow: isActive ? `0 0 8px ${a.glow}` : "none",
                width: isActive ? "20px" : "6px",
              }}
            />
          );
        })}
      </div>

      {/* Label e tag do step ativo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          className="pshow__mobile-step-info"
          id={`pshow-panel-mobile-${step.id}`}
          initial={reducedMotion ? undefined : { opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, x: -6 }}
          transition={{ duration: reducedMotion ? 0 : 0.28, ease: motionTokens.easing.standard }}
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="pshow__mobile-step-index" style={{ color: accent.label }}>
            {step.index} / {platformShowcase.steps.length.toString().padStart(2, "0")}
          </span>
          <span className="pshow__mobile-step-label">{step.label}</span>
          <span className="pshow__mobile-step-tag" style={{ color: accent.label }}>
            {step.tag}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Recorte secundário mobile */}
      <motion.div
        className="pshow__mobile-cut"
        initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: reducedMotion ? 0 : 0.46, delay: reducedMotion ? 0 : 0.3 }}
      >
        <img
          src={platformImg}
          width={1240}
          height={400}
          loading="lazy"
          decoding="async"
          alt=""
          className="pshow__cut-img"
          style={{ objectPosition: "85% 55%" }}
          draggable={false}
        />
        <div className="pshow__cut-label">
          <span style={{ color: ACCENT.emerald.label }}>Projeto</span>
          <span className="pshow__cut-sublabel">em construção</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── PlatformShowcase (main export) ───────────────────────────────────────────

export function PlatformShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const [activeStep, setActiveStep] = useState(0);
  const isInView = useInView(sectionRef, { once: true, margin: "-8% 0px" });

  // Pointer tracking local — spring suave
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pointerX = useSpring(rawX, { stiffness: 90, damping: 26, mass: 0.5 });
  const pointerY = useSpring(rawY, { stiffness: 90, damping: 26, mass: 0.5 });

  const handlePointerEnter = useCallback((e: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || e.pointerType !== "mouse") return;
    boundsRef.current = e.currentTarget.getBoundingClientRect();
  }, [reducedMotion]);

  const handlePointerMove = useCallback((e: PointerEvent<HTMLDivElement>) => {
    const b = boundsRef.current;
    if (reducedMotion || e.pointerType !== "mouse" || !b) return;
    rawX.set(((e.clientX - b.left) / b.width - 0.5) * 2);
    rawY.set(((e.clientY - b.top) / b.height - 0.5) * 2);
  }, [reducedMotion, rawX, rawY]);

  const resetPointer = useCallback(() => {
    boundsRef.current = null;
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  const step = platformShowcase.steps[activeStep];
  const accent = ACCENT[step.accent];

  return (
    <div
      ref={sectionRef}
      className="pshow"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
    >
      {/* ── Desktop layout ─────────────────────────────────────────────── */}
      <div className="pshow__desktop">
        {/* Painel editorial esquerdo */}
        <motion.aside
          className="pshow__editorial"
          initial={reducedMotion ? undefined : { opacity: 0.4, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : undefined}
          transition={{
            duration: reducedMotion ? 0 : 0.52,
            ease: motionTokens.easing.emphasized,
          }}
        >
          {/* Eyebrow */}
          <div className="pshow__eyebrow">
            <span className="pshow__eyebrow-line" aria-hidden="true" />
            <span>{platformShowcase.eyebrow}</span>
          </div>

          {/* Headline — visível desde o início, sem opacity:0 */}
          <h2 id="platform-showcase-title" className="pshow__headline">
            {platformShowcase.headline.split("\n").map((line, i) => (
              <span key={i} className="pshow__headline-line">
                {i === 1 ? (
                  <span className="pshow__headline-accent">{line}</span>
                ) : line}
              </span>
            ))}
          </h2>

          {/* Descrição */}
          <p className="pshow__description">{platformShowcase.description}</p>

          {/* Step indicator vertical — step ativo com acento */}
          <div className="pshow__step-context" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.id}
                id={`pshow-panel-${step.id}`}
                className="pshow__step-active"
                initial={reducedMotion ? undefined : { opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: reducedMotion ? 0 : 0.28, ease: motionTokens.easing.standard }}
              >
                <span
                  className="pshow__step-active-dot"
                  style={{ background: accent.dot, boxShadow: `0 0 8px ${accent.glow}` }}
                  aria-hidden="true"
                />
                <div>
                  <span className="pshow__step-active-index" style={{ color: accent.label }}>
                    {step.index} de {platformShowcase.steps.length.toString().padStart(2, "0")}
                  </span>
                  <span className="pshow__step-active-label">{step.label}</span>
                  <span className="pshow__step-active-tag" style={{ color: accent.label }}>
                    {step.tag}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.aside>

        {/* Composição de produto */}
        <ProductComposition
          activeStep={activeStep}
          reducedMotion={reducedMotion}
          pointerX={pointerX}
          pointerY={pointerY}
          isInView={isInView}
        />
      </div>

      {/* ── Step navigation (desktop + mobile) ─────────────────────────── */}
      <StepNav
        activeStep={activeStep}
        onStepChange={setActiveStep}
        reducedMotion={reducedMotion}
        isInView={isInView}
      />

      {/* ── Mobile layout ──────────────────────────────────────────────── */}
      <MobileShowcase
        activeStep={activeStep}
        onStepChange={setActiveStep}
        isInView={isInView}
        reducedMotion={reducedMotion}
      />
    </div>
  );
}
