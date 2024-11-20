import { useState } from "react";
import { ICheckboxProps } from "./types";
import {
  CheckboxWrapper,
  CheckboxContainer,
  CheckboxInput,
  CheckboxBox,
  CheckboxLabel,
  Ripple,
} from "./styles";

const Checkbox = ({
  label,
  size = 20,
  color = "#6200ee",
  checked,
  onChange,
  Icon = CheckmarkIcon,
  ...props
}: ICheckboxProps) => {
  const [isRippling, setIsRippling] = useState(false);

  const handleRipple = (e: React.MouseEvent<HTMLLabelElement>) => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 600);
  };

  return (
    <CheckboxWrapper>
      <CheckboxContainer
        size={size}
        onClick={handleRipple}
        role="checkbox"
        aria-checked={checked}
      >
        <CheckboxInput
          type="checkbox"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <CheckboxBox size={size} color={color} checked={!!checked}>
          <Icon />
        </CheckboxBox>
        {isRippling && <Ripple />}
      </CheckboxContainer>
      {label && <CheckboxLabel>{label}</CheckboxLabel>}
    </CheckboxWrapper>
  );
};

export default Checkbox;

const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="18"
    viewBox="0 96 960 960"
    width="18"
  >
    <path d="M382 810L206 634l56-56 120 120 312-312 56 56-368 368Z" />
  </svg>
);
