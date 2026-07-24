// Tipo da chamada para ação final da página

export interface CTA {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}