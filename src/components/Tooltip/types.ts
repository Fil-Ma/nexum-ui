export type TooltipPostion = "top" | "bottom" | "left" | "right";

export interface ITooltipProps {
  children: React.ReactNode;
  content: string;
  position?: TooltipPostion;
}
