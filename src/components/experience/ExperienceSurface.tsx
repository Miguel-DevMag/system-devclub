import {
  useMemo,
  useRef,
  type PointerEvent,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { ExperienceContext } from "@/components/experience/experience-context";
import { motionTokens } from "@/components/motion/motion-tokens";
import { cn } from "@/lib/utils";

interface ExperienceSurfaceProps {
  children: ReactNode;
  className?: string;
}

export function ExperienceSurface({
  children,
  className,
}: ExperienceSurfaceProps) {
  const boundsRef = useRef<DOMRect | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const pointerX = useSpring(rawX, motionTokens.pointer.spring);
  const pointerY = useSpring(rawY, motionTokens.pointer.spring);

  const resetPointer = () => {
    boundsRef.current = null;
    rawX.set(0);
    rawY.set(0);
  };

  const handlePointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    boundsRef.current = event.currentTarget.getBoundingClientRect();
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = boundsRef.current;
    if (reducedMotion || event.pointerType !== "mouse" || !bounds) return;

    rawX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    rawY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  const value = useMemo(
    () => ({ pointerX, pointerY, reducedMotion }),
    [pointerX, pointerY, reducedMotion],
  );

  return (
    <ExperienceContext.Provider value={value}>
      <motion.div
        onPointerEnter={handlePointerEnter}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
        onPointerCancel={resetPointer}
        className={cn("relative", className)}
      >
        {children}
      </motion.div>
    </ExperienceContext.Provider>
  );
}
