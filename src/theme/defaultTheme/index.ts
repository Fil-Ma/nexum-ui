import { ThemeSchema } from "./types";
import defaultColors from "./colors";

const defaultTheme: ThemeSchema = {
  components: {
    button: {
      base: "px-4 py-2 rounded",
      variants: {
        outlined: "border border-gray-500",
        solid: "bg-gray-700 text-white",
      },
    },
  },
  colors: defaultColors,
  typography: {
    fontFamily: "sans-serif",
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "32px",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
    },
  },
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
};

export default defaultTheme;
