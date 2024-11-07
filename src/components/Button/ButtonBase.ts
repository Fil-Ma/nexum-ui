import styled from "styled-components";
import { TColor, TSize, TVariant } from "./types";

const ButtonBase = styled.button<{
  color: TColor;
  size: TSize;
  variant: TVariant;
}>`
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  border-radius: 0.375rem;
  :disabled {
    cursor: default;
  }
`;
// ${props => props.primary ? "#BF4F74" : "white"};

export default ButtonBase;
