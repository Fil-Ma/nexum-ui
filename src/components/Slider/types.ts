type TrackAttributes = {
  width: number | string;
  height: number;
};

type ThumbAttributes = {
  size: number;
};

export interface ISliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => void;
  color?: string;
  track?: Partial<TrackAttributes>;
  thumb?: Partial<ThumbAttributes>;
}
