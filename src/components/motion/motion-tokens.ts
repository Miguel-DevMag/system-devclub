export const motionTokens = {
  duration: {
    instant: 0.12,
    responsive: 0.2,
    expressive: 0.55,
    cinematic: 1.05,
  },
  easing: {
    standard: [0.22, 1, 0.36, 1] as const,
    emphasized: [0.16, 1, 0.3, 1] as const,
    flow: [0.65, 0, 0.35, 1] as const,
    linear: "linear" as const,
  },
  depth: {
    small: 8,
    tilt: 0.38,
  },
  pointer: {
    lightRange: 9,
    spring: {
      stiffness: 120,
      damping: 28,
      mass: 0.42,
    },
  },
  hero: {
    visualDelay: 0.12,
    portraitDelay: 0.2,
  },
  authority: {
    nearDistance: 48,
    farDistance: 30,
    nearDuration: 18,
    farDuration: 22,
  },
  overview: {
    layerDistance: 14,
  },
  journey: {
    stageDuration: 0.42,
  },
  platform: {
    stageDuration: 0.42,
  },
} as const;
