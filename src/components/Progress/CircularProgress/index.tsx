import React from "react";
import { CircularContainer, CircularSVG, Circle } from "./styles";

interface ICircularProgressProps {
  size?: number;
  thickness?: number;
  progress?: number;
  color?: string;
}

const CircularProgress: React.FC<ICircularProgressProps> = ({
  size = 40,
  thickness = 4,
  progress = 50,
  color = "#6200ee",
}) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <CircularContainer $size={size}>
      <CircularSVG $size={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          $circumference={circumference}
          $offset={offset}
          $color={color}
          $thickness={thickness}
        />
      </CircularSVG>
    </CircularContainer>
  );
};

export default CircularProgress;
