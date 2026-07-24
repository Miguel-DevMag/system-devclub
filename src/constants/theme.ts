// Configurações globais de tema, identidade e comportamento visual

import { designTokens } from "@/config/design-tokens";

export const theme = {
  name: "DevClub Concurso",
  version: "1.0.0",
  mode: "dark",
  palette: {
    background: designTokens.colors.background,
    surface: designTokens.colors.surface,
    surfaceAlt: designTokens.colors.surfaceAlt,
    border: designTokens.colors.border,
    text: designTokens.colors.text,
    textMuted: designTokens.colors.textMuted,
    textSoft: designTokens.colors.textSoft,
    primary: designTokens.colors.primary,
    secondary: designTokens.colors.secondary,
    accent: designTokens.colors.accent,
  },
  motion: {
    duration: {
      fast: designTokens.motion.fast,
      normal: designTokens.motion.normal,
      slow: designTokens.motion.slow,
      extraSlow: designTokens.motion.extraSlow,
    },
    easing: {
      easeOut: designTokens.motion.easeOut,
      easeInOut: designTokens.motion.easeInOut,
    },
    stagger: designTokens.motion.stagger,
    distance: designTokens.motion.distance,
  },
  radii: designTokens.radii,
  shadows: designTokens.shadows,
  layout: designTokens.layout,
} as const;