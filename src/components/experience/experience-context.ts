import { createContext, useContext } from "react";
import type { MotionValue } from "motion/react";

export interface ExperienceContextValue {
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  reducedMotion: boolean;
}

export const ExperienceContext =
  createContext<ExperienceContextValue | null>(null);

export function useExperienceSurface() {
  const context = useContext(ExperienceContext);

  if (!context) {
    throw new Error(
      "Experience components must be rendered inside ExperienceSurface.",
    );
  }

  return context;
}
