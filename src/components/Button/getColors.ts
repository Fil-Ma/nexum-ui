import { TGetColors, ButtonState, TVariant } from "./types";

export const getColors: TGetColors = (theme, variant, color) => {
  const { primary, secondary, neutral } = theme.colors;

  const variantStyles: Record<TVariant, any> = {
    contained: {
      primary: {
        [ButtonState.IDLE]: {
          color: neutral[50],
          backgroundColor: primary[500],
        },
        [ButtonState.HOVER]: {
          color: neutral[50],
          backgroundColor: primary[600],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[50],
          backgroundColor: primary[700],
        },
        [ButtonState.DISABLED]: {
          color: neutral[600],
          backgroundColor: neutral[300],
        },
      },
      secondary: {
        [ButtonState.IDLE]: {
          color: neutral[100],
          backgroundColor: secondary[500],
        },
        [ButtonState.HOVER]: {
          color: neutral[100],
          backgroundColor: secondary[600],
        },
        [ButtonState.ACTIVE]: {
          color: neutral[100],
          backgroundColor: secondary[700],
        },
        [ButtonState.DISABLED]: {
          color: neutral[600],
          backgroundColor: neutral[300],
        },
      },
    },
    outlined: {
      primary: {
        [ButtonState.IDLE]: {
          color: primary[500],
          backgroundColor: "transparent",
          border: `1px solid ${primary[500]}`,
        },
        [ButtonState.HOVER]: {
          color: primary[600],
          backgroundColor: neutral[200],
          border: `1px solid ${primary[600]}`,
        },
        [ButtonState.ACTIVE]: {
          color: primary[700],
          backgroundColor: neutral[200],
          border: `1px solid ${primary[700]}`,
        },
        [ButtonState.DISABLED]: {
          color: neutral[600],
          backgroundColor: neutral[300],
          borderColor: neutral[600],
        },
      },
      secondary: {
        [ButtonState.IDLE]: {
          color: secondary[500],
          backgroundColor: "transparent",
          border: `1px solid ${secondary[500]}`,
        },
        [ButtonState.HOVER]: {
          color: secondary[600],
          backgroundColor: neutral[200],
          border: `1px solid ${secondary[600]}`,
        },
        [ButtonState.ACTIVE]: {
          color: secondary[700],
          backgroundColor: neutral[200],
          border: `1px solid ${secondary[700]}`,
        },
        [ButtonState.DISABLED]: {
          color: neutral[600],
          backgroundColor: neutral[300],
          borderColor: neutral[600],
        },
      },
    },
    text: {
      primary: {
        [ButtonState.IDLE]: {
          color: primary[500],
          backgroundColor: "transparent",
        },
        [ButtonState.HOVER]: {
          color: primary[600],
          backgroundColor: neutral[200],
        },
        [ButtonState.ACTIVE]: {
          color: primary[700],
          backgroundColor: neutral[200],
        },
        [ButtonState.DISABLED]: {
          color: neutral[600],
          backgroundColor: neutral[300],
        },
      },
      secondary: {
        [ButtonState.IDLE]: {
          color: secondary[500],
          backgroundColor: "transparent",
        },
        [ButtonState.HOVER]: {
          color: secondary[600],
          backgroundColor: neutral[200],
        },
        [ButtonState.ACTIVE]: {
          color: secondary[700],
          backgroundColor: neutral[200],
        },
        [ButtonState.DISABLED]: {
          color: neutral[600],
          backgroundColor: neutral[300],
        },
      },
    },
  };

  return variantStyles[variant][color];
};
