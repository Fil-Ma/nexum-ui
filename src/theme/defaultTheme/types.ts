type ThemeOptions = "light" | "dark";

type TComponents = "button";

type ColorKeys = "primary" | "secondary" | "neutral";
type ColorShades = Record<
  50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  string
>;
type TColorValues = Record<ThemeOptions, ColorShades>;

export type ThemeSchema = {
  components: Record<TComponents, any>;
  colors: Record<ColorKeys, TColorValues>;
};
