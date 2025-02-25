import { ElementType } from "react";
import { ButtonProps, ButtonState } from "./types";
import ButtonBase from "./ButtonBase";
import { useTheme } from "@theme/ThemeProvider";
import { ThemeSchema } from "@theme/defaultTheme/types";
import useStylesOverride from "@hooks/useStylesOverride";
import { getColors } from "./getColors";

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
  const stylesOverride = useStylesOverride(theme, customStyles);

  const themeColors = getColors(theme, variant, color, false);

  return (
    <ButtonBase
      className={className}
      as={as}
      $variant={variant}
      $color={color}
      $size={size}
      $customStyles={{
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
