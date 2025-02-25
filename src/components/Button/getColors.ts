import { TGetColors, ButtonState, TVariant } from "./types";

export const getColors: TGetColors = (theme, variant, color, isDark) => {
  const { primary, secondary, neutral } = theme.colors;
  const themeModifier = isDark ? "dark" : "light";

  const variantStyles: Record<TVariant, any> = {
    contained: {
      primary: {
        [ButtonState.IDLE]: {
          color: "#FFF",
          backgroundColor: primary[themeModifier][500],
        },
        [ButtonState.HOVER]: {
          color: "#FFF",
          backgroundColor: primary[themeModifier][600],
        },
        [ButtonState.ACTIVE]: {
          color: "#FFF",
          backgroundColor: primary[themeModifier][700],
        },
        [ButtonState.DISABLED]: {
          color: neutral[themeModifier][300],
          backgroundColor: primary[themeModifier][400],
        },
      },
      secondary: {
        [ButtonState.IDLE]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][300],
        },
        [ButtonState.HOVER]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][400],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][500],
        },
        [ButtonState.DISABLED]: {
          color: neutral[themeModifier][300],
          backgroundColor: primary[themeModifier][400],
        },
      },
    },
    outlined: {
      primary: {
        [ButtonState.IDLE]: {
          color: primary[themeModifier][400],
          backgroundColor: "transparent",
          border: `1px solid ${primary[themeModifier][400]}`,
        },
        [ButtonState.HOVER]: {
          color: "#FFF",
          backgroundColor: primary[themeModifier][500],
        },
        [ButtonState.ACTIVE]: {
          color: "#FFF",
          backgroundColor: primary[themeModifier][600],
        },
        [ButtonState.DISABLED]: {
          color: neutral[themeModifier][300],
          backgroundColor: primary[themeModifier][400],
          borderColor: neutral[themeModifier][300],
        },
      },
      secondary: {
        [ButtonState.IDLE]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][300],
        },
        [ButtonState.HOVER]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][400],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][500],
        },
        [ButtonState.DISABLED]: {
          color: neutral[themeModifier][300],
          backgroundColor: primary[themeModifier][400],
        },
      },
    },
    text: {
      primary: {
        [ButtonState.IDLE]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][300],
        },
        [ButtonState.HOVER]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][400],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][500],
        },
        [ButtonState.DISABLED]: {
          color: neutral[themeModifier][300],
          backgroundColor: primary[themeModifier][400],
        },
      },
      secondary: {
        [ButtonState.IDLE]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][300],
        },
        [ButtonState.HOVER]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][400],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[themeModifier][800],
          backgroundColor: neutral[themeModifier][500],
        },
        [ButtonState.DISABLED]: {
          color: neutral[themeModifier][300],
          backgroundColor: primary[themeModifier][400],
        },
      },
    },
  };

  return variantStyles[variant][color];
};
