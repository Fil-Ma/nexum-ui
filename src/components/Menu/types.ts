type TMenuPosition = "bottom" | "top" | "left" | "right";

export interface IMenuProps {
  items: Array<{ label: string; onClick: () => void }>;
  position?: TMenuPosition;
  animationDuration?: number;
  onClose: VoidFunction;
  open: boolean;
  anchorEl: HTMLElement | null;
  offset?: number;
}
