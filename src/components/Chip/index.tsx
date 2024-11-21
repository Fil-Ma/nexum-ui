import React from "react";
import { ChipContainer, ChipLabel, ChipIcon } from "./styles";
import { IChipProps } from "./types";

const Chip = ({
  label,
  icon,
  color = "#6200ee",
  size = "medium",
  variant = "filled",
  customStyles,
  onClick,
  rounded = true,
}: IChipProps) => {
  return (
    <ChipContainer
      $color={color}
      $size={size}
      $variant={variant}
      style={customStyles}
      $rounded={rounded}
      onClick={onClick}
    >
      {icon && <ChipIcon>{icon}</ChipIcon>}
      <ChipLabel>{label}</ChipLabel>
    </ChipContainer>
  );
};

export default Chip;
