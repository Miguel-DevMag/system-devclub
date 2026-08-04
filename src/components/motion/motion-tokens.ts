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
    small: 6,
    tilt: 0.55,
  },
  pointer: {
    lightRange: 28,
    spring: {
      stiffness: 120,
      damping: 28,
      mass: 0.42,
    },
  },
  build: {
    wakeDelay: 0.15,
    channelDelay: 0.4,
    channelDuration: 0.45,
    settleDelay: 0.85,
    settleDuration: 0.25,
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
