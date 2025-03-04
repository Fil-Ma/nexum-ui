import { InputHTMLAttributes } from "react";

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: string;
  size?: number;
  spacing?: number;
}
