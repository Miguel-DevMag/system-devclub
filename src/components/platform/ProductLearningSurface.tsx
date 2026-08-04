import { motion, useTransform } from "motion/react";
import type { CSSProperties } from "react";

import { ExperienceSurface } from "@/components/experience/ExperienceSurface";
import { useExperienceSurface } from "@/components/experience/experience-context";
import { motionTokens } from "@/components/motion/motion-tokens";
import {
  platformExperience,
  type PlatformExperienceStage,
} from "@/data/platform-experience";

interface ProductLearningSurfaceProps {
  activeStage: number;
  reducedMotion: boolean;
  onStageChange: (stage: number) => void;
}

function SurfaceLight() {
  const { pointerX, pointerY, reducedMotion } = useExperienceSurface();
  const x = useTransform(pointerX, [-1, 1], [-4, 4]);
  const y = useTransform(pointerY, [-1, 1], [-4, 4]);

  return (
    <motion.div
      aria-hidden="true"
      className="product-surface__light"
      style={reducedMotion ? undefined : { x, y }}
    />
  );
}

function TrailVisual() {
  return (
    <div className="platform-visual platform-visual--trail" aria-hidden="true">
      <div className="platform-trail__route">
        {["Base", "Interface", "Dados", "Produto"].map((label, index) => (
          <span key={label} data-current={index === 1}>
            <i>{String(index + 1).padStart(2, "0")}</i>
            {label}
          </span>
        ))}
      </div>
      <div className="platform-trail__focus">
        <span>módulo em foco</span>
        <strong>Interfaces que respondem</strong>
        <i />
      </div>
    </div>
  );
}

function LessonVisual() {
  return (
    <div className="platform-visual platform-visual--lesson" aria-hidden="true">
      <div className="platform-lesson__outline">
        <span>contexto</span><i />
        <span>conceito</span><i />
        <span>aplicação</span><i />
      </div>
      <div className="platform-lesson__content">
        <small>aula / interface responsiva</small>
        <strong>O layout muda quando o contexto muda.</strong>
        <p>Estrutura, prioridade e comportamento trabalham como um sistema.</p>
        <div><i /><i /><i /></div>
      </div>
    </div>
  );
}

function PracticeVisual() {
  return (
    <div className="platform-visual platform-visual--practice" aria-hidden="true">
      <div className="platform-practice__editor">
        <span>practice.tsx</span>
        <code>
          <i>01</i><b>const</b> interfaceState = context;<br />
          <i>02</i><b>return</b> adapt(interfaceState);<br />
          <i>03</i><em>// observe, ajuste, execute</em>
        </code>
      </div>
      <div className="platform-practice__result">
        <span>resultado</span>
        <div><i /><i /><i /></div>
        <small>recorte demonstrativo</small>
      </div>
    </div>
  );
}

function ProjectVisual() {
  return (
    <div className="platform-visual platform-visual--project" aria-hidden="true">
      <div className="platform-project__shell">
        <div className="platform-project__nav"><i /><i /><i /></div>
        <div className="platform-project__content">
          <span>aplicação com dados</span>
          <strong>Um produto conecta as partes.</strong>
          <div className="platform-project__data"><i /><i /><i /><i /></div>
        </div>
        <div className="platform-project__api">API <span>conectada ao fluxo</span></div>
      </div>
    </div>
  );
}

function ContinuityVisual() {
  return (
    <div className="platform-visual platform-visual--continuity" aria-hidden="true">
      <div className="platform-continuity__project">
        <span>projeto demonstrativo</span>
        <strong>Aplicação com dados</strong>
        <div><i /><i /><i /></div>
      </div>
      <div className="platform-continuity__signal">
        <span>contexto para evoluir</span>
        <p>Revisar uma decisão</p>
        <p>Compartilhar uma dúvida</p>
        <p>Definir o próximo passo</p>
      </div>
    </div>
  );
}

function StageVisual({ stage }: { stage: PlatformExperienceStage }) {
  switch (stage.scene) {
    case "trail":
      return <TrailVisual />;
    case "lesson":
      return <LessonVisual />;
    case "practice":
      return <PracticeVisual />;
    case "project":
      return <ProjectVisual />;
    case "continuity":
      return <ContinuityVisual />;
  }
}

function DesktopSurface({
  activeStage,
  reducedMotion,
  onStageChange,
}: ProductLearningSurfaceProps) {
  const stage = platformExperience.stages[activeStage];

  return (
    <ExperienceSurface className="product-surface">
      <SurfaceLight />
      <div className="product-surface__topbar">
        <div className="product-surface__brand">
          <span>DC</span>
          <strong>Learning Surface</strong>
        </div>
        <span className="product-surface__disclosure">demonstração da experiência</span>
        <span className="product-surface__phase">{stage.label}</span>
      </div>

      <div className="product-surface__body">
        <nav className="product-surface__navigation" aria-label="Etapas da experiência de aprendizagem">
          <span>percurso</span>
          {platformExperience.stages.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={index === activeStage}
              onClick={() => onStageChange(index)}
              onFocus={() => onStageChange(index)}
              onMouseEnter={() => onStageChange(index)}
            >
              <i>{item.index}</i>
              <b>{item.label}</b>
            </button>
          ))}
        </nav>

        <div className="product-surface__workspace">
          <div className="product-surface__workspace-meta">
            <span>formação / produto completo</span>
            <span>{stage.index} — {stage.label}</span>
          </div>

          <div className="product-surface__viewport">
            <motion.div
              className="product-surface__track"
              animate={{ x: `-${activeStage * 20}%` }}
              transition={{
                duration: reducedMotion ? 0 : motionTokens.platform.stageDuration,
                ease: motionTokens.easing.flow,
              }}
            >
              {platformExperience.stages.map((item, index) => (
                <section
                  key={item.id}
                  aria-hidden={index !== activeStage}
                  className="product-surface__stage"
                  style={{ "--platform-stage": index } as CSSProperties}
                >
                  <StageVisual stage={item} />
                </section>
              ))}
            </motion.div>
          </div>
        </div>

        <aside className="product-surface__context" aria-live="polite">
          <span>{stage.index} / 05</span>
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
          <div>
            <small>o que muda</small>
            <strong>{stage.outcome}</strong>
          </div>
        </aside>
      </div>
    </ExperienceSurface>
  );
}

function MobileSurface() {
  return (
    <div className="product-learning-mobile">
      <p className="product-learning-mobile__disclosure">
        {platformExperience.disclosure}
      </p>
      <ol>
        {platformExperience.stages.map((stage) => (
          <li key={stage.id}>
            <article>
              <div className="product-learning-mobile__meta">
                <span>{stage.index}</span>
                <span>{stage.label}</span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <div className="product-learning-mobile__frame">
                <StageVisual stage={stage} />
              </div>
              <div className="product-learning-mobile__outcome">
                <span>continuidade</span>
                <strong>{stage.outcome}</strong>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProductLearningSurface(props: ProductLearningSurfaceProps) {
  return (
    <>
      <div className="product-learning-desktop">
        <DesktopSurface {...props} />
      </div>
      <MobileSurface />
    </>
  );
}
