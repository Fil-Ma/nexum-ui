import { ISwitchProps } from "./types";
import {
  SwitchWrapper,
  SwitchContainer,
  SwitchInput,
  SwitchTrack,
  SwitchHandle,
  SwitchLabel,
} from "./styles";

const Switch = ({
  size = 24,
  color = "#6200ee",
  checked,
  onChange,
  label,
  ...props
}: ISwitchProps) => {
  return (
    <SwitchWrapper>
      <SwitchContainer size={size}>
        <SwitchInput
          type="checkbox"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <SwitchTrack size={size} color={color} checked={!!checked} />
        <SwitchHandle size={size} checked={!!checked} color={color} />
      </SwitchContainer>
      {label && <SwitchLabel>{label}</SwitchLabel>}
    </SwitchWrapper>
  );
};

export default Switch;
