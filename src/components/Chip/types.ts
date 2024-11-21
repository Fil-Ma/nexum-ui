export type TChipSize = "small" | "medium";
export type TChipVariant = "filled" | "outlined";

export interface IChipProps {
  label: string;
  icon?: React.ReactNode;
  color?: string;
  size?: TChipSize;
  variant?: TChipVariant;
  customStyles?: React.CSSProperties;
  rounded?: boolean;
  onClick?: VoidFunction;
}
