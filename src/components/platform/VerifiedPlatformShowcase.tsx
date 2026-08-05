import { useState } from "react";
import { ArrowUpRight, BookOpen, FolderKanban, PlayCircle } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import platformOfficial from "@/assets/images/devclub-platform-official.webp";
import { motionTokens } from "@/components/motion/motion-tokens";
import { officialLinks } from "@/config/official-links";
import { targetedContent } from "@/data/targeted-content";
import { usePreferences } from "@/preferences/usePreferences";

const stepIcons = [BookOpen, PlayCircle, FolderKanban] as const;

export function VerifiedPlatformShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const reducedMotion = useReducedMotion() ?? false;
  const { language } = usePreferences();
  const content = targetedContent[language].platform;
  const active = content.steps[activeStep];

  const labels = language === "pt"
    ? {
        official: "Imagem oficial de apresentação",
        source: "Fonte: DevClub",
        device: "Aprenda no seu ritmo e acesse as aulas de qualquer dispositivo conectado.",
        formations: "Conhecer as formações",
        student: "Acessar área do aluno",
      }
    : {
        official: "Official presentation image",
        source: "Source: DevClub",
        device: "Learn at your own pace and access lessons from any connected device.",
        formations: "Explore programs",
        student: "Open student area",
      };

  return (
    <div className="platform-verified">
      <header className="platform-refined__intro">
        <p className="institutional-eyebrow">{content.eyebrow}</p>
        <h2 id="platform-showcase-title">{content.title}</h2>
        <p>{content.description}</p>
      </header>

      <div className="platform-verified__stage">
        <motion.figure
          className="platform-verified__visual"
          initial={reducedMotion ? false : { opacity: 0.72, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.expressive,
            ease: motionTokens.easing.emphasized,
          }}
        >
          <div className="platform-verified__source">
            <span>{labels.official}</span>
            <small>{labels.source}</small>
          </div>
          <div className="platform-verified__media">
            <img
              src={platformOfficial}
              width={1024}
              height={585}
              loading="lazy"
              decoding="async"
              alt={language === "pt"
                ? "Apresentação oficial das formações DevClub em computador, notebook, tablet e celular"
                : "Official DevClub programs presented on desktop, laptop, tablet and phone"}
            />
          </div>
          <figcaption>{labels.device}</figcaption>
        </motion.figure>

        <aside className="platform-verified__details" aria-label={content.eyebrow}>
          <div className="platform-verified__tabs" role="tablist" aria-label={content.eyebrow}>
            {content.steps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <button
                  key={step.index}
                  type="button"
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-controls="platform-verified-panel"
                  onClick={() => setActiveStep(index)}
                >
                  <span>{step.index}</span>
                  <Icon aria-hidden="true" />
                  <strong>{step.label}</strong>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              id="platform-verified-panel"
              role="tabpanel"
              key={active.index}
              className="platform-verified__panel"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reducedMotion ? 0 : motionTokens.duration.responsive }}
            >
              <span>{active.index} / 03</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="platform-verified__actions">
            <a href={officialLinks.formationsPage} target="_blank" rel="noopener noreferrer">
              {labels.formations}
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={officialLinks.studentArea} target="_blank" rel="noopener noreferrer">
              {labels.student}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
