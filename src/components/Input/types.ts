import React from "react";

export type TVariant = "filled" | "outlined";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  variant?: TVariant;
  label?: string;
  disableHoverShrink?: boolean;
}
