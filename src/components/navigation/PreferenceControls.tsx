import { Languages, Moon, Sun } from "lucide-react";

import { targetedContent } from "@/data/targeted-content";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/preferences/usePreferences";

export function PreferenceControls({ mobile = false }: { mobile?: boolean }) {
  const { language, theme, toggleLanguage, toggleTheme } = usePreferences();
  const labels = targetedContent[language].navigation;

  return (
    <div className={cn("preference-controls", mobile && "preference-controls--mobile")}>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? labels.themeLight : labels.themeDark}
        title={theme === "dark" ? labels.themeLight : labels.themeDark}
      >
        {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
      </button>
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={labels.language}
        title={labels.language}
      >
        <Languages aria-hidden="true" />
        <span>{language.toUpperCase()}</span>
      </button>
    </div>
  );
}
