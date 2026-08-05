// Chamada final da página 

import { officialLinks } from "@/config/official-links";
import type { CTA } from "@/types/cta"; 

export const cta: CTA = { 
    eyebrow: "O próximo movimento",
    title: "O caminho está visível. Agora, escolha onde começar.",
    description: "Formação, prática, comunidade e direção já fazem parte do mesmo percurso. O próximo passo é encontrar seu ponto de entrada e começar a construir.",
    primaryLabel: "Conversar sobre matrícula",
    primaryHref: officialLinks.enrollment,
    destination: "Abre o canal oficial de atendimento do DevClub em uma nova aba.",
};
