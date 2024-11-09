import { ElementType, useMemo } from "react";
import { ButtonProps, TColor, TVariant } from "./types";
import ButtonBase from "./ButtonBase";
import { useTheme } from "@theme/ThemeProvider";
import { ThemeSchema } from "@theme/defaultTheme/types";

enum ButtonState {
  IDLE = "idle",
  HOVER = "hover",
  ACTIVE = "active",
  DISABLED = "disabled",
}

function Button<E extends ElementType>({
  as,
  variant = "contained",
  color = "primary",
  size = "medium",
  className = "",
  customStyles,
  ...props
}: ButtonProps<E>) {
  const theme = useTheme();

  const stylesOverride = useMemo(() => {
    if (typeof customStyles === "function") {
      return customStyles(theme);
    } else {
      return customStyles;
    }
  }, [customStyles]);

  const themeColors = getColors(theme, variant, color, false);

  return (
    <ButtonBase
      className={className}
      as={as}
      variant={variant}
      color={color}
      size={size}
      customStyles={{
        ...themeColors[ButtonState.IDLE],
        ...stylesOverride,

        ...(!props?.disabled && {
          ":hover": {
            ...themeColors[ButtonState.HOVER],
            ...(stylesOverride as any)?.[":hover"],
          },

          ":active": {
            ...themeColors[ButtonState.ACTIVE],
            ...(stylesOverride as any)?.[":active"],
          },
        }),

        ...(props?.disabled && {
          ...themeColors[ButtonState.DISABLED],
          ...(stylesOverride as any)?.[":disabled"],
          cursor: "default",
        }),
      }}
      {...props}
    />
  );
}

export default Button;

type ColorKeys = Record<"color" | "backgroundColor", string>;
type GetColors = (
  theme: ThemeSchema,
  variant: TVariant,
  color: TColor,
  isDark: boolean
) => Record<ButtonState, ColorKeys>;

const getColors: GetColors = (theme, variant, color, isDark) => {
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
          color: "",
          backgroundColor: "",
        },
        [ButtonState.HOVER]: {
          color: "",
          backgroundColor: "",
        },
        [ButtonState.ACTIVE]: {
          color: "",
          backgroundColor: "",
        },
        [ButtonState.DISABLED]: {
          color: "",
          backgroundColor: "",
        },
      },
    },
  };

  return variantStyles[variant][color];
};
