import { motion, useTransform } from "motion/react";

import { useExperienceSurface } from "@/components/experience/experience-context";
import { motionTokens } from "@/components/motion/motion-tokens";
import { cn } from "@/lib/utils";

interface ReactiveLightProps {
  className?: string;
  energized?: boolean;
}

export function ReactiveLight({
  className,
  energized = false,
}: ReactiveLightProps) {
  const { pointerX, pointerY, reducedMotion } = useExperienceSurface();
  const x = useTransform(
    pointerX,
    [-1, 1],
    [-motionTokens.pointer.lightRange, motionTokens.pointer.lightRange],
  );
  const y = useTransform(
    pointerY,
    [-1, 1],
    [-motionTokens.pointer.lightRange, motionTokens.pointer.lightRange],
  );

  return (
    <motion.div
      aria-hidden="true"
      style={reducedMotion ? undefined : { x, y }}
      animate={{ opacity: energized ? 1 : 0.72 }}
      transition={{
        duration: reducedMotion ? 0 : motionTokens.duration.responsive,
        ease: motionTokens.easing.standard,
      }}
      className={cn("pointer-events-none absolute", className)}
    />
  );
}
