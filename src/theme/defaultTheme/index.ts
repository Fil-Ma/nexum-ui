import { ThemeSchema } from "./types";
import defaultColors from "./colors";
import typography from "./typography";

const defaultTheme: ThemeSchema = {
  components: {
    button: {},
  },
  colors: defaultColors,
  typography,
  spacing: {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "16px",
    full: "9999px",
  },
  breakpoints: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
} as const;

export default defaultTheme;
