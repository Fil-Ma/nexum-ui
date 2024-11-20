import { StylesOverride } from "@customTypes/index";
import React from "react";

type Atoms = "overlay" | "container";
type AtomProps = {
  as?: React.ElementType;
  customStyles?: StylesOverride;
};

export interface IDialogProps {
  open: boolean;
  onClickOutside?: VoidFunction;
  children: React.ReactNode;
  delayOnExit?: number;
  atoms?: Record<Atoms, AtomProps>;
}
