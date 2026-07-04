"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const THEME_KEY = "theme";

const themeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [localTheme, setLocalTheme] = useState<Theme>("light");

  useEffect(() => {
    const theme = document.documentElement.getAttribute("data-theme");
    setLocalTheme(theme as Theme);
  }, []);

  const setTheme = (theme: Theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    setLocalTheme(theme);
  };

  return (
    <themeContext.Provider value={{ theme: localTheme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(themeContext);
  if (!ctx) {
    throw new Error("Theme contex is not ready.");
  }
  return ctx;
};
