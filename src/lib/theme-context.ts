import { createContext } from "react";
import type { Theme } from "@/lib/themes";

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
