import { StylesOverride } from "@customTypes/index";
import type { ComponentProps, ElementType } from "react";

export type TVariant = "text" | "contained" | "outlined";
export type TColor = "primary" | "secondary";
export type TSize = "small" | "medium" | "large";

type ButtonUniqueProps<E extends ElementType = ElementType> = {
  variant?: TVariant;
  color?: TColor;
  size?: TSize;
  as?: E;
  customStyles?: StylesOverride;
};

export type ButtonProps<E extends ElementType> = ButtonUniqueProps<E> &
  Omit<ComponentProps<E>, keyof ButtonUniqueProps>;
