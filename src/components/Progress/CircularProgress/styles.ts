import styled from "styled-components";

export const CircularContainer = styled.div<{ $size: number }>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircularSVG = styled.svg<{ $size: number }>`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  transform: rotate(-90deg);
`;

export const Circle = styled.circle<{
  $circumference: number;
  $offset: number;
  $color: string;
  $thickness: number;
}>`
  fill: none;
  stroke: ${(props) => props.$color};
  stroke-width: ${(props) => props.$thickness}px;
  stroke-dasharray: ${(props) => props.$circumference}px;
  stroke-dashoffset: ${(props) => props.$offset}px;
  transition: stroke-dashoffset 0.3s ease-in-out;
`;
