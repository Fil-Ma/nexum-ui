import styled from "styled-components";

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SwitchContainer = styled.label<{ $size: number }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  width: ${(props) => props.$size * 2.2}px;
  height: ${(props) => props.$size + 8}px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
`;

export const SwitchTrack = styled.span<{
  $size: number;
  $color: string;
  $checked: boolean;
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.$checked ? props.$color : "#ccc")};
  border-radius: ${(props) => props.$size * 0.5 + 4}px;
  transition: background-color 0.2s ease;
`;

export const SwitchHandle = styled.span<{
  $size: number;
  $checked: boolean;
}>`
  position: absolute;
  left: ${(props) =>
    props.$checked ? `calc(100% - ${props.$size}px - 4px)` : "4px"};
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const SwitchLabel = styled.span`
  font-size: 1rem;
  color: #333;
  user-select: none;
`;
