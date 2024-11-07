import { ElementType } from "react";
import { ButtonProps } from "./types";
import ButtonBase from "./ButtonBase";

function Button<E extends ElementType>({
  as,
  variant = "contained",
  color = "primary",
  size = "medium",
  className = "",
  ...props
}: ButtonProps<E>) {
  return (
    <ButtonBase
      className={className}
      as={as}
      variant={variant}
      color={color}
      size={size}
      {...props}
    />
  );
}

export default Button;
