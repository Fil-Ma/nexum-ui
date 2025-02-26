import { useState, useEffect } from "react";
import { TThemeOptions } from "./defaultTheme/types";

const getInitialMode = (): TThemeOptions => {
  const attr = document.documentElement.getAttribute("data-color-scheme");
  if (attr === "dark" || attr === "light") {
    return attr;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const usePreferredColorScheme = (): TThemeOptions => {
  if (typeof window === "undefined") {
    return "light";
  }

  const [scheme, setScheme] = useState<TThemeOptions>(getInitialMode);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) =>
      setScheme(e.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return scheme;
};

export default usePreferredColorScheme;
