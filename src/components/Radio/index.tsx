import { IRadioProps } from "./types";
import {
  RadioContainer,
  RadioWrapper,
  RadioCircle,
  RadioLabel,
  RippleEffect,
} from "./styles";
import { useState } from "react";

const RadioInput = ({
  label,
  color = "#6200ee",
  size = 24,
  ...props
}: IRadioProps) => {
  const [ripples, setRipples] = useState<Array<number>>([]);

  const handleRipple = (e: React.MouseEvent<HTMLSpanElement>) => {
    const id = Date.now();
    setRipples((prev) => [...prev, id]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple !== id));
    }, 600);
  };
  return (
    <RadioWrapper size={size}>
      <input type="radio" {...props} />
      <RadioContainer size={size} color={color} onClick={handleRipple}>
        {ripples.map((ripple) => (
          <RippleEffect key={ripple} color={color} size={size} />
        ))}
        {props.checked && <RadioCircle color={color} />}
      </RadioContainer>
      {label && <RadioLabel>{label}</RadioLabel>}
    </RadioWrapper>
  );
};

export default RadioInput;
