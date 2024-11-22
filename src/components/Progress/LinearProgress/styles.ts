import styled from "styled-components";

export const LinearContainer = styled.div<{ $height: number }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.$height}px;
  background-color: #f5f5f5;
  border-radius: ${(props) => props.$height / 2}px;
  overflow: hidden;
`;

export const LinearBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ddd;
`;

export const LinearBar = styled.div<{ $progress: number; $color: string }>`
  position: absolute;
  height: 100%;
  width: ${(props) => props.$progress}%;
  background-color: ${(props) => props.$color};
  transition: width 0.3s ease-in-out;
`;
