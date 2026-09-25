import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ThemeContext } from "@/lib/theme-context";
import {
  defaultTheme,
  isTheme,
  themeStorageKey,
  type Theme,
} from "@/lib/themes";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  try {
    const storedTheme = window.localStorage.getItem(themeStorageKey);
    return isTheme(storedTheme) ? storedTheme : defaultTheme;
  } catch {
    return defaultTheme;
  }
}

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);

    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // Theme selection still works when browser storage is unavailable.
    }
  }, []);

  const contextValue = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
