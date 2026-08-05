import { createContext } from "react";

export type Language = "pt" | "en";
export type Theme = "dark" | "light";

export interface PreferencesValue {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
}

export const PreferencesContext = createContext<PreferencesValue | null>(null);
