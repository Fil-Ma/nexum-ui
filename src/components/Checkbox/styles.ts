import styled, { keyframes } from "styled-components";

const rippleEffect = keyframes`
  from {
    transform: scale(0);
    opacity: 0.5;
  }
  to {
    transform: scale(2);
    opacity: 0;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CheckboxContainer = styled.label<{ $size: number }>`
  position: relative;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  display: inline-block;
`;

export const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const CheckboxBox = styled.span<{
  $size: number;
  $color: string;
  $checked: boolean;
}>`
  width: 100%;
  height: 100%;
  border: 2px solid ${(props) => (props.$checked ? props.$color : "#ccc")};
  background-color: ${(props) =>
    props.$checked ? props.$color : "transparent"};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;

  svg {
    fill: white;
    opacity: ${(props) => (props.$checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

export const Ripple = styled.span`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  transform: scale(0);
  animation: ${rippleEffect} 0.6s linear;
  pointer-events: none;
`;

export const CheckboxLabel = styled.span`
  font-size: 1rem;
  color: #333;
  user-select: none;
`;
