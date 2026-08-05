import { useLayoutEffect, useMemo, useState, type ReactNode } from "react";

import {
  PreferencesContext,
  type Language,
  type PreferencesValue,
  type Theme,
} from "@/preferences/preferences-context";

function initialTheme(): Theme {
  const stored = localStorage.getItem("devclub-theme");
  if (stored === "dark" || stored === "light") return stored;
  return matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function initialLanguage(): Language {
  const stored = localStorage.getItem("devclub-language");
  if (stored === "pt" || stored === "en") return stored;
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "pt";
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("devclub-theme", theme);
  }, [theme]);

  useLayoutEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    localStorage.setItem("devclub-language", language);
  }, [language]);

  const value = useMemo<PreferencesValue>(
    () => ({
      language,
      theme,
      toggleLanguage: () => setLanguage((current) => (current === "pt" ? "en" : "pt")),
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [language, theme],
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
