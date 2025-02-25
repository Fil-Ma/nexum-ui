import React from "react";

export type TVariant = "filled" | "outlined";

export type TSpacing = string | number | Record<"x" | "y", number>;

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  variant?: TVariant;
  label?: string;
  disableHoverShrink?: boolean;
  fullWidth?: boolean;
  spacing?: TSpacing;
}
