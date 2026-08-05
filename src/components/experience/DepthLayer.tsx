import type { ReactNode } from "react";
import { motion, useTransform } from "motion/react";

import { useExperienceSurface } from "@/components/experience/experience-context";
import { motionTokens } from "@/components/motion/motion-tokens";
import { cn } from "@/lib/utils";

interface DepthLayerProps {
  children: ReactNode;
  className?: string;
  entryDelay?: number;
  entryX?: number;
  entryY?: number;
  strength?: number;
}

export function DepthLayer({
  children,
  className,
  entryDelay = motionTokens.hero.visualDelay,
  entryX = 0,
  entryY = 0,
  strength = 0.5,
}: DepthLayerProps) {
  const { pointerX, pointerY, reducedMotion } = useExperienceSurface();
  const amplitude = motionTokens.depth.small * Math.min(Math.max(strength, 0), 1);
  const tilt = motionTokens.depth.tilt * Math.min(Math.max(strength, 0), 1);
  const x = useTransform(pointerX, [-1, 1], [-amplitude, amplitude]);
  const y = useTransform(pointerY, [-1, 1], [-amplitude, amplitude]);
  const rotateX = useTransform(pointerY, [-1, 1], [tilt, -tilt]);
  const rotateY = useTransform(pointerX, [-1, 1], [-tilt, tilt]);

  return (
    <motion.div
      style={
        reducedMotion
          ? undefined
          : { x, y, rotateX, rotateY, transformPerspective: 1400 }
      }
      className={cn("absolute transform-gpu", className)}
    >
      <motion.div
        initial={
          reducedMotion
            ? false
            : { x: entryX, y: entryY, scale: 0.992 }
        }
        animate={{ x: 0, y: 0, scale: 1 }}
        transition={{
          delay: reducedMotion ? 0 : entryDelay,
          duration: reducedMotion ? 0 : motionTokens.duration.expressive,
          ease: motionTokens.easing.emphasized,
        }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
