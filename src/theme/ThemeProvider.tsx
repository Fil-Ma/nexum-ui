import { createContext, useContext, useMemo } from "react";
import { ThemeSchema } from "./defaultTheme/types";
import defaultTheme from "./defaultTheme";
import { RecursivePartial } from "../types/utils";
import merge from "lodash.merge";

type TThemeContext = ThemeSchema | undefined;

const ThemeContext = createContext<TThemeContext>(undefined);

interface IThemeProvider {
  customTheme?: RecursivePartial<ThemeSchema>;
  children: React.ReactNode;
}

const ThemeProvider = ({ customTheme, children }: IThemeProvider) => {
  const mergedTheme = useMemo(
    () => merge(defaultTheme, customTheme),
    [customTheme]
  );

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
