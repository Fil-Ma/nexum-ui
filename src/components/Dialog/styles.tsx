import styled, { css } from "styled-components";
import { IDialogContainerProps, TDialogVariant } from "./types";
import {
  fadeIn,
  fadeOut,
  scaleIn,
  scaleOut,
  slideIn,
  slideInLeft,
  slideInRight,
  slideOut,
  slideOutLeft,
  slideOutRight,
} from "@animations/keyframes";

export const Overlay = styled.div<IDialogContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: ${(props) =>
    props.$variant === "bottom" ? "flex-end" : "center"};
  z-index: 999;
  animation: ${(props) => (props.$isExiting ? fadeOut : fadeIn)} 0.3s ease-out;
  ${(props) => props?.$customStyles && css(props.$customStyles)}
`;

const getContainerAnimation = (isExiting: boolean, variant: TDialogVariant) => {
  if (variant === "modal") {
    return isExiting ? scaleOut : scaleIn;
  } else {
    return isExiting ? slideOut : slideIn;
  }
};

export const DialogContainer = styled.div<IDialogContainerProps>`
  background: #fff;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  animation: ${(props) =>
      getContainerAnimation(props.$isExiting, props.$variant)}
    0.3s ease-out;

  ${(props) => {
    if (props.$variant === "modal") {
      return `
        margin: 16px;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      `;
    } else {
      return `
        border-radius: 16px 16px 0 0;
        box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.2);
      `;
    }
  }}

  ${(props) => props?.$customStyles && css(props.$customStyles)}
`;

export const SideSheetContainer = styled.div<IDialogContainerProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  ${(props) => (props.$side === "left" ? "left: 0;" : "right: 0;")}
  width: 300px;
  background: white;
  box-shadow: ${(props) =>
    props.$side === "left"
      ? "4px 0 10px rgba(0, 0, 0, 0.2)"
      : "-4px 0 10px rgba(0, 0, 0, 0.2)"};
  animation: ${(props) =>
      props.$isExiting
        ? props.$side === "left"
          ? slideOutLeft
          : slideOutRight
        : props.$side === "left"
          ? slideInLeft
          : slideInRight}
    0.3s ease-out;
  max-height: 100%;
  z-index: 1000;

  ${(props) => props?.$customStyles && css(props.$customStyles)}
`;
