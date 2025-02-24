import styled from "styled-components";
import { ripple } from "@animations/keyframes";

export const RadioWrapper = styled.label<{ $size: number; $spacing: number }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  margin-block: ${(props) => props.$spacing}px;

  input {
    display: none;
  }
`;

export const RadioContainer = styled.span<{ $size: number; $color: string }>`
  position: relative;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.$color};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${(props) =>
      props.$color + "88"}; /* Add transparency on hover */
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${(props) => props.$color};
    opacity: 0;
    transform: scale(0);
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
  }
`;

export const RadioCircle = styled.span<{ $color: string }>`
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background: ${(props) => props.$color};
  transition: transform 0.2s ease;
`;

export const RadioLabel = styled.span`
  font-size: 1rem;
  color: #333;
`;

export const RippleEffect = styled.span<{
  $color: string;
  $size: number;
}>`
  position: absolute;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  opacity: 0.8;
  transform: translate(-50%, -50%) scale(0);
  animation: ${ripple} 0.6s ease-out;
  pointer-events: none;
`;
