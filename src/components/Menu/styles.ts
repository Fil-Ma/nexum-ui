import { fadeIn } from "@animations/keyframes";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: transparent;
  z-index: 999;
`;

export const MenuContainer = styled.div<{
  $animationDuration: number;
}>`
  position: absolute;
  transform-origin: center;
  animation: ${fadeIn} ${(props) => props.$animationDuration}ms ease-in-out;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1000;
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 8px 0;
`;

export const MenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
