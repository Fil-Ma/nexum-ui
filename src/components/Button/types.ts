import { StylesOverride } from "@customTypes/index";
import type { ComponentProps, ElementType } from "react";
import type { TComputedSchema, ThemeSchema } from "@theme/defaultTheme/types";

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

export enum ButtonState {
  IDLE = "idle",
  HOVER = "hover",
  ACTIVE = "active",
  DISABLED = "disabled",
}

type ColorKeys = Record<"color" | "backgroundColor", string>;
export type TGetColors = (
  theme: TComputedSchema,
  variant: TVariant,
  color: TColor
) => Record<ButtonState, ColorKeys>;
