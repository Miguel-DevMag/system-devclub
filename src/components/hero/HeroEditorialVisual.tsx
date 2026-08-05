import { motion } from "motion/react";

import platformCapture from "@/assets/images/platform-product-slice.jpg";
import amazonWebServices from "@/assets/images/si-amazonwebservices.svg";
import ibm from "@/assets/images/si-ibm.svg";
import microsoft from "@/assets/images/si-microsoft.svg";
import n8n from "@/assets/images/si-n8n.svg";
import nubank from "@/assets/images/si-nubank.svg";
import rodolfoPortrait from "@/assets/images/rodolfo-hero.jpg";
import devclubMark from "@/assets/images/logo-devclub-green.png";
import { DepthLayer } from "@/components/experience/DepthLayer";
import { useExperienceSurface } from "@/components/experience/experience-context";
import type { HeroIntent } from "@/components/hero/HeroContent";
import { motionTokens } from "@/components/motion/motion-tokens";
import { TechIcons } from "@/components/shared/TechIcons";
import { hero } from "@/data/hero";

interface HeroEditorialVisualProps {
  intent: HeroIntent;
}

const marketMarks = [
  { src: microsoft, name: "Microsoft" },
  { src: amazonWebServices, name: "AWS" },
  { src: ibm, name: "IBM" },
  { src: nubank, name: "Nubank" },
] as const;

function TechnologyGlyph({ name }: { name: string }) {
  if (name === "N8N") {
    return <img src={n8n} alt="" aria-hidden="true" />;
  }

  return <>{TechIcons[name]}</>;
}

export function HeroEditorialVisual({ intent }: HeroEditorialVisualProps) {
  const { reducedMotion } = useExperienceSurface();
  const ecosystemActive = intent === "ecosystem";
  const platformActive = intent === "platform";

  return (
    <div className="hero-world" data-intent={intent ?? undefined}>
      <DepthLayer strength={0.12} className="hero-world__mark">
        <img src={devclubMark} alt="" aria-hidden="true" />
      </DepthLayer>

      <DepthLayer strength={0.46} className="hero-product-plane">
        <motion.figure
          animate={{ opacity: platformActive ? 1 : 0.9 }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.responsive,
            ease: motionTokens.easing.standard,
          }}
          className="hero-product"
        >
          <div className="hero-product__media">
            <img
              src={platformCapture}
              alt="Recorte demonstrativo da experiência de aprendizagem do projeto DevClub"
              width={1240}
              height={400}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <span aria-hidden="true" className="hero-product__light" />
          </div>

          <figcaption>
            <span>{hero.product.eyebrow}</span>
            <strong>{hero.product.title}</strong>
            <small>{hero.product.caption}</small>
          </figcaption>
        </motion.figure>
      </DepthLayer>

      <DepthLayer strength={0.76} className="hero-founder-plane">
        <motion.figure
          animate={{
            x: ecosystemActive && !reducedMotion ? 2 : 0,
            opacity: platformActive ? 0.92 : 1,
          }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.responsive,
            ease: motionTokens.easing.standard,
          }}
          className="hero-founder"
        >
          <div className="hero-founder__portrait">
            <img
              src={rodolfoPortrait}
              alt="Rodolfo Mori, fundador do DevClub"
              width={960}
              height={1440}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <span aria-hidden="true" className="hero-founder__veil" />
          </div>
          <figcaption>
            <span>{hero.founder.name}</span>
            <small>{hero.founder.role}</small>
          </figcaption>
        </motion.figure>
      </DepthLayer>

      <DepthLayer strength={0.34} className="hero-tech-plane">
        <motion.div
          animate={{
            x: ecosystemActive && !reducedMotion ? 3 : 0,
            opacity: ecosystemActive ? 1 : 0.82,
          }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.responsive,
            ease: motionTokens.easing.standard,
          }}
          className="hero-tech-route"
        >
          <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M4 78 C20 76 19 48 38 49 S57 72 70 50 S82 22 96 20" />
          </svg>
          <ol aria-label="Tecnologias presentes na formação">
            {hero.technologies.map((technology, index) => (
              <li key={technology}>
                <span className="hero-tech-route__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="hero-tech-route__icon">
                  <TechnologyGlyph name={technology} />
                </span>
                <span className="hero-tech-route__name">{technology}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      </DepthLayer>

      <DepthLayer strength={0.22} className="hero-market-plane">
        <motion.div
          animate={{
            x: ecosystemActive && !reducedMotion ? 2 : 0,
            opacity: ecosystemActive ? 1 : 0.76,
          }}
          transition={{
            duration: reducedMotion ? 0 : motionTokens.duration.responsive,
            ease: motionTokens.easing.standard,
          }}
          className="hero-market"
        >
          <div className="hero-market__copy">
            <span>{hero.market.label}</span>
            <small>{hero.market.caption}</small>
          </div>
          <ul aria-label="Marcas que simbolizam o contexto amplo do mercado de tecnologia">
            {marketMarks.map((mark) => (
              <li key={mark.name}>
                <img src={mark.src} alt={mark.name} />
              </li>
            ))}
          </ul>
        </motion.div>
      </DepthLayer>

      <div aria-hidden="true" className="hero-world__coordinate hero-world__coordinate--top">
        DC / 01
      </div>
      <div aria-hidden="true" className="hero-world__coordinate hero-world__coordinate--side">
        aprender · construir · pertencer
      </div>
    </div>
  );
}
