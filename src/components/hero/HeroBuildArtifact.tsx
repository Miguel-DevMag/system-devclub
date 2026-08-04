import type { CSSProperties } from "react";
import { motion } from "motion/react";

import { DepthLayer } from "@/components/experience/DepthLayer";
import { useExperienceSurface } from "@/components/experience/experience-context";
import type { ArtifactIntent } from "@/components/hero/HeroContent";
import { motionTokens } from "@/components/motion/motion-tokens";
import { designTokens } from "@/config/design-tokens";

interface HeroBuildArtifactProps {
  intent: ArtifactIntent;
}

const codeLines = [
  ["const", " knowledge = learn();"],
  ["const", " product = build(knowledge);"],
  ["await", " product.publish();"],
] as const;

export function HeroBuildArtifact({ intent }: HeroBuildArtifactProps) {
  const { reducedMotion } = useExperienceSurface();
  const energyStyles = {
    "--build-cyan": designTokens.energy.cyan,
    "--build-cyan-bright": designTokens.energy.cyanBright,
    "--build-violet": designTokens.energy.violet,
    "--build-complete": designTokens.energy.complete,
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      style={energyStyles}
      className="relative z-10 -ml-[4%] w-[108%] max-w-[46rem] sm:-ml-[2%] sm:w-[104%] lg:-ml-24 lg:w-[calc(100%+12rem)] lg:max-w-[59rem] xl:-ml-28"
    >
      <div className="relative aspect-[1.5/1] [perspective:1500px] lg:aspect-[1.58/1]">
        <div className="absolute bottom-[4%] left-[8%] h-[17%] w-[84%] -rotate-2 bg-black/82 blur-2xl [clip-path:polygon(5%_12%,100%_0,91%_100%,0_76%)]" />

        <DepthLayer
          strength={0.2}
          entryY={5}
          className="inset-[8%_1%_9%_2%]"
        >
          <div className="relative h-full w-full bg-[linear-gradient(145deg,#132029_0%,#05080a_45%,#020304_100%)] shadow-[0_42px_90px_-28px_rgba(0,0,0,.96)] [clip-path:polygon(1%_13%,55%_1%,99%_8%,95%_87%,43%_99%,5%_91%)]">
            <div className="absolute inset-[1px] bg-[#05090c] [clip-path:inherit]" />
          </div>
        </DepthLayer>

        <DepthLayer
          strength={0.46}
          entryX={-8}
          className="inset-[9%_2%_10%_1%]"
        >
          <InputPlane />
        </DepthLayer>

        <DepthLayer
          strength={0.95}
          entryX={10}
          entryDelay={motionTokens.build.wakeDelay + 0.08}
          className="inset-[6%_0_8%_2%]"
        >
          <ProductPlane intent={intent} reducedMotion={reducedMotion} />
        </DepthLayer>

        <CompilationChannel intent={intent} reducedMotion={reducedMotion} />
        <OutputSignal intent={intent} reducedMotion={reducedMotion} />

        <div className="absolute bottom-[8.2%] left-[9%] z-30 h-[4.2%] w-[83%] origin-top -skew-x-[23deg] bg-[linear-gradient(180deg,rgba(215,247,255,.12),rgba(9,15,19,.84)_42%,#010203)] shadow-[0_14px_26px_rgba(0,0,0,.72)] [clip-path:polygon(0_0,100%_0,96%_100%,3%_100%)]" />
        <div className="absolute bottom-[6.1%] left-[15%] z-20 h-px w-[66%] bg-gradient-to-r from-transparent via-cyan-100/22 to-transparent" />
      </div>
    </div>
  );
}

function InputPlane() {
  return (
    <div className="relative h-full w-full overflow-hidden border-y border-l border-white/[0.085] bg-[linear-gradient(142deg,#0c1217_0%,#05080b_72%)] shadow-[-18px_20px_48px_-28px_rgba(0,0,0,.9)] [clip-path:polygon(0_9%,59%_0,49%_88%,5%_100%)]">
      <div className="absolute inset-0 opacity-[0.27] [background-image:repeating-linear-gradient(122deg,transparent_0,transparent_13px,rgba(255,255,255,.022)_14px,transparent_15px)]" />
      <div className="absolute left-[14%] top-[15%] hidden items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/36 sm:flex">
        <span className="h-px w-5 bg-cyan-100/42" />
        input / conhecimento
      </div>

      <div className="absolute left-[14%] top-[30%] w-[37%] font-mono text-[clamp(7px,1.08vw,10px)] leading-[1.9] text-white/48">
        {codeLines.map(([keyword, line], index) => (
          <div
            key={`${keyword}-${index}`}
            className={index === 2 ? "hidden sm:block" : ""}
          >
            <span className="mr-2 inline-block w-3 text-right text-white/15">
              {index + 1}
            </span>
            <span className="text-[var(--build-violet)] opacity-80">
              {keyword}
            </span>
            <span>{line}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[20%] left-[14%] h-px w-[26%] bg-gradient-to-r from-cyan-100/28 to-transparent" />
      <p className="absolute bottom-[14%] left-[14%] hidden font-mono text-[8px] uppercase tracking-[0.19em] text-white/24 sm:block">
        estrutura bruta
      </p>
    </div>
  );
}

function ProductPlane({
  intent,
  reducedMotion,
}: {
  intent: ArtifactIntent;
  reducedMotion: boolean;
}) {
  const active = intent === "secondary";

  return (
    <motion.div
      data-build-product
      animate={{
        x: active && !reducedMotion ? -4 : 0,
        y: active && !reducedMotion ? -2 : 0,
      }}
      transition={{
        duration: reducedMotion ? 0 : motionTokens.duration.responsive,
        ease: motionTokens.easing.standard,
      }}
      className="relative h-full w-full overflow-hidden border-y border-r border-cyan-50/[0.12] bg-[linear-gradient(142deg,#183440_0%,#0a1820_52%,#061015_100%)] shadow-[24px_28px_72px_-34px_rgba(35,191,222,.42)] [clip-path:polygon(48%_8%,96%_0,100%_86%,40%_100%)]"
    >
      <motion.div
        initial={reducedMotion ? false : { opacity: 0.72 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: reducedMotion ? 0 : motionTokens.build.channelDelay,
          duration: reducedMotion ? 0 : motionTokens.build.channelDuration,
          ease: motionTokens.easing.emphasized,
        }}
        className="absolute bottom-[15%] left-[53%] right-[6%] top-[14%] border-l border-cyan-100/16 bg-[linear-gradient(116deg,rgba(157,232,255,.075),rgba(4,15,20,.2)_54%,rgba(1,7,10,.5))] pl-[7%] pr-[4%] pt-[7%] shadow-[-18px_18px_42px_-26px_rgba(0,0,0,.8)]"
      >
        <div className="hidden items-center justify-between font-mono text-[8px] uppercase tracking-[0.18em] sm:flex">
          <span className="text-cyan-100/54">product / live</span>
          <span className="text-emerald-200/54">ready</span>
        </div>

        <p className="mt-[13%] max-w-[11ch] text-[clamp(13px,2.05vw,24px)] font-semibold leading-[0.93] tracking-[-0.052em] text-white">
          Sua aplicação ganhou forma.
        </p>

        <div className="mt-[10%] space-y-[5%]">
          <motion.div
            initial={reducedMotion ? false : { scaleX: 0.3 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: reducedMotion ? 0 : motionTokens.build.channelDelay,
              duration: reducedMotion ? 0 : motionTokens.build.channelDuration,
              ease: motionTokens.easing.emphasized,
            }}
            className="h-1 origin-left bg-gradient-to-r from-violet-300/70 via-cyan-200/76 to-emerald-200/60"
          />
          <div className="h-px w-[72%] bg-white/13" />
          <div className="h-px w-[48%] bg-white/[0.08]" />
        </div>

        <div className="absolute bottom-[8%] left-[7%] flex items-center gap-2 font-mono text-[6px] uppercase tracking-[0.16em] text-white/34 sm:text-[8px]">
          <span className="size-1.5 bg-emerald-200/76 shadow-[0_0_12px_rgba(110,231,183,.5)]" />
          output construído
        </div>
      </motion.div>
    </motion.div>
  );
}

function CompilationChannel({
  intent,
  reducedMotion,
}: {
  intent: ArtifactIntent;
  reducedMotion: boolean;
}) {
  const energized = intent === "primary";

  return (
    <div className="pointer-events-none absolute inset-[7%_1%_9%_2%] z-30 overflow-hidden [clip-path:polygon(53.6%_0,58.1%_0,47.6%_100%,42.9%_100%)]">
      <motion.div
        data-build-channel
        animate={{
          opacity: energized ? 1 : 0.62,
          boxShadow: energized
            ? "0 0 30px rgba(103,232,249,.72), 0 0 68px rgba(110,231,183,.24)"
            : "0 0 18px rgba(103,232,249,.36), 0 0 42px rgba(167,139,250,.12)",
        }}
        transition={{
          duration: reducedMotion ? 0 : motionTokens.duration.responsive,
          ease: motionTokens.easing.standard,
        }}
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(103,232,249,.08),var(--build-cyan-bright)_45%,var(--build-complete)_76%,rgba(3,8,9,.14))]"
      />

      {!reducedMotion && (
        <motion.div
          initial={{ y: "-140%", opacity: 0 }}
          animate={{ y: "330%", opacity: [0, 0.92, 0] }}
          transition={{
            delay: motionTokens.build.channelDelay,
            duration: motionTokens.build.channelDuration,
            ease: motionTokens.easing.linear,
            times: [0, 0.42, 1],
          }}
          className="absolute left-0 top-0 h-[34%] w-full bg-gradient-to-b from-transparent via-white/76 to-transparent mix-blend-screen"
        />
      )}
    </div>
  );
}

function OutputSignal({
  intent,
  reducedMotion,
}: {
  intent: ArtifactIntent;
  reducedMotion: boolean;
}) {
  const published = intent === "primary";

  return (
    <motion.div
      data-build-output
      initial={reducedMotion ? false : { opacity: 0.48, scaleY: 0.76 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{
        delay: reducedMotion ? 0 : motionTokens.build.settleDelay,
        duration: reducedMotion ? 0 : motionTokens.build.settleDuration,
        ease: motionTokens.easing.standard,
      }}
      className="absolute bottom-[1%] left-[77%] z-40 h-[18%] w-[14%] origin-top"
    >
      <motion.div
        animate={{
          opacity: published ? 1 : 0.58,
          boxShadow: published
            ? "0 0 18px rgba(110,231,183,.76)"
            : "0 0 10px rgba(103,232,249,.32)",
        }}
        transition={{
          duration: reducedMotion ? 0 : motionTokens.duration.responsive,
          ease: motionTokens.easing.standard,
        }}
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-emerald-100 via-cyan-200/68 to-transparent"
      />
      <span className="absolute -left-1 top-0 size-2 rotate-45 border border-emerald-100/64 bg-[#071410] shadow-[0_0_14px_rgba(110,231,183,.46)]" />
      <span className="absolute left-3 top-0 whitespace-nowrap font-mono text-[6px] uppercase tracking-[0.18em] text-emerald-100/58 sm:text-[8px]">
        output publicado
      </span>
    </motion.div>
  );
}
