import { ElementType } from "react";
import { ButtonProps, ButtonState } from "./types";
import ButtonBase from "./ButtonBase";
import useStylesOverride from "@hooks/useStylesOverride";
import { getColors } from "./getColors";
import { useThemeContext } from "@theme/ThemeProvider";

function Button<E extends ElementType>({
  as,
  variant = "contained",
  color = "primary",
  size = "medium",
  className = "",
  customStyles,
  ...props
}: ButtonProps<E>) {
  const { theme } = useThemeContext();
  const stylesOverride = useStylesOverride(theme, customStyles);

  const themeColors = getColors(theme, variant, color);

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
          "&:hover": {
            ...themeColors[ButtonState.HOVER],
            ...(stylesOverride as any)?.[":hover"],
          },

          "&:active": {
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
