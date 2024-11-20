import { createContext, useContext, useMemo } from "react";
import { ThemeSchema } from "./defaultTheme/types";
import defaultTheme from "./defaultTheme";
import { RecursivePartial } from "../customTypes/utils";
import merge from "lodash.merge";

const ThemeContext = createContext<ThemeSchema>(defaultTheme);

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

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
