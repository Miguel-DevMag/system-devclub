// Tokens visuais e de motion do projeto DevClub

export const designTokens = {
  energy: {
    cyan: "#67e8f9",
    cyanBright: "#cffafe",
    violet: "#a78bfa",
    complete: "#6ee7b7",
  },

  colors: {
    background: "bg-neutral-950",
    surface: "bg-neutral-900",
    surfaceAlt: "bg-neutral-800",
    border: "border-white/10",
    text: "text-white",
    textMuted: "text-white/70",
    textSoft: "text-white/50",
    primary: "text-cyan-400",
    primaryBg: "bg-cyan-400",
    primaryBgSoft: "bg-cyan-400/10",
    secondary: "text-violet-400",
    secondaryBg: "bg-violet-400",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-400",
  },

  radii: {
    sm: "rounded-xl",
    md: "rounded-2xl",
    lg: "rounded-3xl",
    xl: "rounded-[2rem]",
  },

  shadows: {
    soft: "shadow-[0_10px_40px_rgba(0,0,0,0.25)]",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.18)]",
    card: "shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
  },

  spacing: {
    sectionY: "py-20 md:py-28",
    sectionX: "px-4 sm:px-6 lg:px-8",
    container: "mx-auto max-w-7xl",
    gapSm: "gap-4",
    gapMd: "gap-6",
    gapLg: "gap-8",
  },

  layout: {
    container: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
    section: "relative overflow-hidden py-20 md:py-28",
    inner: "relative z-10",
  },

  typography: {
    heroTitle:
      "text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl",
    sectionTitle:
      "text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl",
    sectionSubtitle: "text-base leading-7 text-white/70 md:text-lg",
    body: "text-sm leading-6 text-white/70 md:text-base md:leading-7",
    label: "text-xs font-medium uppercase tracking-[0.24em] text-white/50",
  },

  motion: {
    fast: 0.2,
    normal: 0.35,
    slow: 0.6,
    extraSlow: 0.9,
    easeOut: [0.16, 1, 0.3, 1] as const,
    easeInOut: [0.65, 0, 0.35, 1] as const,
    stagger: 0.08,
    distance: 24,
  },

  zIndex: {
    base: 0,
    content: 10,
    sticky: 20,
    overlay: 30,
    modal: 40,
  },

  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  },
} as const;
