import styled from "styled-components";

export const SliderContainer = styled.div<{ $width: string | number }>`
  position: relative;
  width: ${(props) => props.$width};
  padding: 24px 8px;
  display: flex;
  align-items: center;
`;

export const Track = styled.div<{ $height: number }>`
  position: relative;
  flex: 1;
  height: ${(props) => props.$height}px;
  background-color: #ddd;
  border-radius: ${(props) => props.$height / 3}px;
`;

export const TrackHighlight = styled.div<{
  $progress: number;
  $color: string;
  $height: number;
}>`
  position: absolute;
  height: 100%;
  background-color: ${(props) => props.$color};
  border-radius: ${(props) => props.$height / 3}px;
  width: ${(props) => props.$progress}%;
  max-width: 100%;
`;

export const Thumb = styled.div<{
  $progress: number;
  $color: string;
  $size: number;
}>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.$progress}%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background-color: ${(props) => props.$color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  transition: transform 0.1s linear;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }

  &:active {
    cursor: grabbing;
  }

  /* Increase hitbox size */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => props.$size * 2}px;
    height: ${(props) => props.$size * 2}px;
    background-color: transparent;
    pointer-events: none;
  }
`;

export const SliderInput = styled.input`
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
