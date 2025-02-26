import { TGetColors, ButtonState, TVariant } from "./types";

export const getColors: TGetColors = (theme, variant, color) => {
  const { primary, secondary, neutral } = theme.colors;

  const variantStyles: Record<TVariant, any> = {
    contained: {
      primary: {
        [ButtonState.IDLE]: {
          color: "#FFF",
          backgroundColor: primary[500],
        },
        [ButtonState.HOVER]: {
          color: "#FFF",
          backgroundColor: primary[600],
        },
        [ButtonState.ACTIVE]: {
          color: "#FFF",
          backgroundColor: primary[700],
        },
        [ButtonState.DISABLED]: {
          color: neutral[300],
          backgroundColor: primary[400],
        },
      },
      secondary: {
        [ButtonState.IDLE]: {
          color: neutral[800],
          backgroundColor: neutral[300],
        },
        [ButtonState.HOVER]: {
          color: neutral[800],
          backgroundColor: neutral[400],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[800],
          backgroundColor: neutral[500],
        },
        [ButtonState.DISABLED]: {
          color: neutral[300],
          backgroundColor: primary[400],
        },
      },
    },
    outlined: {
      primary: {
        [ButtonState.IDLE]: {
          color: primary[400],
          backgroundColor: "transparent",
          border: `1px solid ${primary[400]}`,
        },
        [ButtonState.HOVER]: {
          color: "#FFF",
          backgroundColor: primary[500],
        },
        [ButtonState.ACTIVE]: {
          color: "#FFF",
          backgroundColor: primary[600],
        },
        [ButtonState.DISABLED]: {
          color: neutral[300],
          backgroundColor: primary[400],
          borderColor: neutral[300],
        },
      },
      secondary: {
        [ButtonState.IDLE]: {
          color: neutral[800],
          backgroundColor: neutral[300],
        },
        [ButtonState.HOVER]: {
          color: neutral[800],
          backgroundColor: neutral[400],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[800],
          backgroundColor: neutral[500],
        },
        [ButtonState.DISABLED]: {
          color: neutral[300],
          backgroundColor: primary[400],
        },
      },
    },
    text: {
      primary: {
        [ButtonState.IDLE]: {
          color: neutral[800],
          backgroundColor: neutral[300],
        },
        [ButtonState.HOVER]: {
          color: neutral[800],
          backgroundColor: neutral[400],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[800],
          backgroundColor: neutral[500],
        },
        [ButtonState.DISABLED]: {
          color: neutral[300],
          backgroundColor: primary[400],
        },
      },
      secondary: {
        [ButtonState.IDLE]: {
          color: neutral[800],
          backgroundColor: neutral[300],
        },
        [ButtonState.HOVER]: {
          color: neutral[800],
          backgroundColor: neutral[400],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[800],
          backgroundColor: neutral[500],
        },
        [ButtonState.DISABLED]: {
          color: neutral[300],
          backgroundColor: primary[400],
        },
      },
    },
  };

  return variantStyles[variant][color];
};
