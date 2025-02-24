import styled, { css } from "styled-components";
import { TooltipPostion } from "./types";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const positionStyles = {
  top: css`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
  `,
  bottom: css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
  `,
  left: css`
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    margin-right: 8px;
  `,
  right: css`
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    margin-left: 8px;
  `,
};

export const TooltipContent = styled.div<{
  $position: TooltipPostion;
  $cursor?: string;
}>`
  position: absolute;
  white-space: nowrap;
  background: #333;
  color: #fff;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  z-index: 10;
  cursor: ${(props) => props.$cursor || "auto"};
  ${(props) => positionStyles[props.$position]};

  opacity: 0;
  animation: fadeIn 0.2s ease-in-out forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
