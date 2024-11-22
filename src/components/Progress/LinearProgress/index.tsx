import React from "react";
import { LinearContainer, LinearBar, LinearBackground } from "./styles";

interface ILinearProgressProps {
  progress?: number;
  color?: string;
  height?: number;
}

const LinearProgress: React.FC<ILinearProgressProps> = ({
  progress = 0,
  color = "#6200ee",
  height = 4,
}) => {
  return (
    <LinearContainer $height={height}>
      <LinearBackground />
      <LinearBar $progress={progress} $color={color} />
    </LinearContainer>
  );
};

export default LinearProgress;
