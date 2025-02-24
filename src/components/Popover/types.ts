type Verticals = "top" | "bottom";
type Horizontals = "right" | "left";
type BasePositions = Verticals | Horizontals;

type Position<FirstPosition extends BasePositions> =
  FirstPosition extends Verticals
    ? `${FirstPosition}-${Horizontals | "center"}`
    : `${FirstPosition}-${Verticals | "center"}`;

type AllPositions = Position<BasePositions>;

export type FinalPopoverPosition = Partial<Record<BasePositions, number>>;

type TOffset = {
  x?: number;
  y?: number;
};

export interface IPopoverProps {
  anchorEl: HTMLElement | null;
  onClose: VoidFunction;
  position?: AllPositions;
  offset?: TOffset;
  children: React.ReactNode;
  width?: number;
}

type TParams = {
  offset?: TOffset;
  width: number;
  height: number;
};

export type ComputePopoverPosition = (
  anchorRect: DOMRect,
  popoverPosition: AllPositions,
  params: TParams
) => Partial<Record<BasePositions, number>>;
