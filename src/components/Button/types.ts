import { ThemeSchema } from "@theme/defaultTheme/types";
import type { ComponentProps, CSSProperties, ElementType } from "react";

export type TVariant = "text" | "contained" | "outlined";
export type TColor = "primary" | "secondary";
export type TSize = "small" | "medium" | "large";

type ButtonUniqueProps<E extends ElementType = ElementType> = {
  variant?: TVariant;
  color?: TColor;
  size?: TSize;
  as?: E;
  customStyles?: CSSProperties | ((theme: ThemeSchema) => CSSProperties);
};

export type ButtonProps<E extends ElementType> = ButtonUniqueProps<E> &
  Omit<ComponentProps<E>, keyof ButtonUniqueProps>;
