export type TThemeOptions = "light" | "dark";
export type TThemeMode = TThemeOptions | "auto";

type TComponents = "button";

type ColorKeys = "primary" | "secondary" | "neutral";
type ColorShades = Record<
  50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  string
>;
type TColorValues = Record<TThemeOptions, ColorShades>;

export type ThemeTypography = {
  fontFamily: string;
  fontSize: Record<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl", string>;
  fontWeight: Record<"light" | "normal" | "medium" | "bold", string>;
};

type Spacing = Record<"none" | "xs" | "sm" | "md" | "lg" | "xl", string>;

type BorderRadius = Record<"none" | "sm" | "md" | "lg" | "full", string>;

type Breakpoints = Record<"xs" | "sm" | "md" | "lg" | "xl", string>;

export type ThemeSchema = {
  components: Record<TComponents, any>;
  colors: Record<ColorKeys, TColorValues>;
  typography: ThemeTypography;
  spacing: Spacing;
  borderRadius: BorderRadius;
  breakpoints: Breakpoints;
};

export type TComputedSchema = Omit<ThemeSchema, "colors"> & {
  mode: TThemeOptions;
  colors: Record<ColorKeys, TColorValues[TThemeOptions]>;
};
