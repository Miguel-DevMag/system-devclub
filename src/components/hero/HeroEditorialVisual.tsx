import { motion } from "motion/react";

import platformCapture from "@/assets/images/devclub-platform-official.webp";
import rodolfoPortrait from "@/assets/images/rodolfo-hero.jpg";
import { useExperienceSurface } from "@/components/experience/experience-context";
import type { HeroIntent } from "@/components/hero/HeroContent";
import { motionTokens } from "@/components/motion/motion-tokens";
import { targetedContent } from "@/data/targeted-content";
import { usePreferences } from "@/preferences/usePreferences";

interface HeroEditorialVisualProps {
  intent: HeroIntent;
}

export function HeroEditorialVisual({ intent }: HeroEditorialVisualProps) {
  const { reducedMotion } = useExperienceSurface();
  const { language } = usePreferences();
  const hero = targetedContent[language].hero;

  return (
    <div className="hero-world hero-world--refined" data-intent={intent ?? undefined}>
      <motion.figure
        className="hero-founder hero-founder--refined"
        animate={{
          x: intent === "ecosystem" && !reducedMotion ? 3 : 0,
          opacity: intent === "platform" ? 0.88 : 1,
        }}
        transition={{ duration: reducedMotion ? 0 : motionTokens.duration.responsive, ease: motionTokens.easing.standard }}
      >
        <div className="hero-founder__portrait">
          <img
            src={rodolfoPortrait}
            alt={language === "pt" ? "Rodolfo Mori, fundador do DevClub" : "Rodolfo Mori, founder of DevClub"}
            width={960}
            height={1440}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <span aria-hidden="true" className="hero-founder__veil" />
        </div>
        <figcaption>
          <span>{hero.founder}</span>
          <small>{hero.founderRole}</small>
        </figcaption>
      </motion.figure>

      <motion.figure
        className="hero-product hero-product--refined"
        animate={{
          y: intent === "platform" && !reducedMotion ? -4 : 0,
          opacity: intent === "ecosystem" ? 0.82 : 1,
        }}
        transition={{ duration: reducedMotion ? 0 : motionTokens.duration.responsive, ease: motionTokens.easing.standard }}
      >
        <div className="hero-product__media">
          <img
            src={platformCapture}
            alt={language === "pt" ? "Apresentação oficial das formações DevClub em diferentes dispositivos" : "Official DevClub programs presented on different devices"}
            width={1240}
            height={400}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <figcaption>
          <span>{hero.productEyebrow}</span>
          <strong>{hero.productTitle}</strong>
          <small>{hero.productCaption}</small>
        </figcaption>
      </motion.figure>

      <div className="hero-world__axis" aria-hidden="true">
        <span />
        <small>DevClub / 01</small>
      </div>
    </div>
  );
}
