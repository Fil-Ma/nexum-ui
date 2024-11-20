import { StylesOverride } from "@customTypes/index";
import React from "react";
import { Styles } from "styled-components/dist/types";

export type TDialogVariant = "modal" | "bottom" | "side";
export type TSheetSide = "right" | "left";

type Atoms = "overlay" | "container";
type AtomProps = {
  as?: React.ElementType;
  customStyles?: StylesOverride;
};

export interface IDialogContainerProps {
  $isExiting: boolean;
  $customStyles?: Styles<object>;
  $variant: TDialogVariant;
  $side: TSheetSide;
}

export interface IDialogProps {
  open: boolean;
  variant?: TDialogVariant;
  side?: TSheetSide;
  onClickOutside?: VoidFunction;
  children: React.ReactNode;
  delayOnExit?: number;
  atoms?: Record<Atoms, AtomProps>;
}
