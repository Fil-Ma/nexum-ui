import { createContext, useContext, useMemo } from "react";
import {
  TComputedSchema,
  ThemeSchema,
  TThemeMode,
  TThemeOptions,
} from "./defaultTheme/types";
import defaultTheme from "./defaultTheme";
import { RecursivePartial } from "../customTypes/utils";
import merge from "lodash.merge";
import usePreferredColorScheme from "./usePreferredColorScheme";

const ThemeContext = createContext<{
  theme: TComputedSchema;
  mode: TThemeOptions;
}>({
  theme: {
    ...defaultTheme,
    mode: "light",
    colors: {
      primary: defaultTheme.colors.primary.light,
      secondary: defaultTheme.colors.secondary.light,
      neutral: defaultTheme.colors.neutral.light,
    },
  },
  mode: "light",
});

interface IThemeProvider {
  mode?: TThemeMode;
  theme?: RecursivePartial<ThemeSchema>;
  children: React.ReactNode;
}

const ThemeProvider = ({
  theme = {},
  mode = "auto",
  children,
}: IThemeProvider) => {
  const systemPreference = usePreferredColorScheme();
  const themeModifier: TThemeOptions =
    mode === "auto" ? systemPreference : mode;

  const mergedTheme: ThemeSchema = useMemo(
    () => merge(defaultTheme, theme),
    [theme]
  );

  const computedTheme: TComputedSchema = useMemo(() => {
    return {
      ...mergedTheme,
      mode: themeModifier,
      colors: {
        primary: mergedTheme.colors.primary[themeModifier],
        secondary: mergedTheme.colors.secondary[themeModifier],
        neutral: mergedTheme.colors.neutral[themeModifier],
      },
    };
  }, [mergedTheme, themeModifier]);

  return (
    <ThemeContext.Provider
      value={{ theme: computedTheme, mode: themeModifier }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
