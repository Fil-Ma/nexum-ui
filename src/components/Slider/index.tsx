import React, { useState } from "react";
import { ISliderProps } from "./types";
import {
  SliderContainer,
  Track,
  TrackHighlight,
  Thumb,
  SliderInput,
} from "./styles";

const DEFAULT_TRACK_WIDTH = "100%";
const DEFAULT_TRACK_HEIGHT = 6;
const DEFAULT_THUMB_SIZE = 16;

const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  color = "#6200ee",
  track,
  thumb,
}: ISliderProps) => {
  const [currentValue, setCurrentValue] = useState(value || min);

  const progress = ((currentValue - min) / (max - min)) * 100;
  const clampedProgress = Math.min(100, Math.max(0, progress));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setCurrentValue(newValue);
    onChange?.(newValue);
  };

  const trackWidth = track?.width || DEFAULT_TRACK_WIDTH;
  const trackHeight = track?.height || DEFAULT_TRACK_HEIGHT;

  const thumbSize = thumb?.size || DEFAULT_THUMB_SIZE;

  return (
    <SliderContainer $width={trackWidth}>
      <Track $height={trackHeight}>
        <TrackHighlight
          $progress={clampedProgress}
          $color={color}
          $height={trackHeight}
        />
        <Thumb $progress={clampedProgress} $color={color} $size={thumbSize} />
        <SliderInput
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onInput={handleInput}
        />
      </Track>
    </SliderContainer>
  );
};

export default Slider;
