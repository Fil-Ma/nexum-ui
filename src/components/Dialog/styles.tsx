import styled, { createGlobalStyle, css } from "styled-components";
import { IDialogContainerProps } from "./types";

export const Overlay = styled.div<IDialogContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: ${(props) =>
    props.$variant === "bottom" ? "flex-end" : "center"};
  z-index: 999;

  ${(props) => props?.$customStyles && css(props.$customStyles)}
`;

export const DialogContainer = styled.div<IDialogContainerProps>`
  background: #fff;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;

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

  max-height: 100%;
  z-index: 1000;

  ${(props) => props?.$customStyles && css(props.$customStyles)}
`;

export const DialogGlobalStyles = createGlobalStyle<{ $delay: number }>`
  /* OVERLAY ANIMATIONS */

  .overlay-appear {
    opacity: 0;
  }

  .overlay-appear-active {
    opacity: 1;
    transition: opacity ${(props) => props.$delay}s ease-out;
  }

  .overlay-exit {
    opacity: 1;
  }

  .overlay-exit-active {
    opacity: 0;
    transition: opacity ${(props) => props.$delay}s ease-out;
  }

  /* MODAL ANIMATIONS */

  .modal-appear {
    transform: scale(0.9);
    opacity: 0;
  }

  .modal-appear-active {
    transform: scale(1);
    opacity: 1;
    transition: opacity ${(props) => props.$delay}s ease-out, transform ${(props) => props.$delay}s ease-out;
  }

  .modal-exit {
    transform: scale(1);
    opacity: 1;
  }

  .modal-exit-active {
    transform: scale(0.9);
    opacity: 0;
    transition: opacity ${(props) => props.$delay}s ease-out, transform ${(props) => props.$delay}s ease-out;
  }

  /* BOTTOM SHEET ANIMATIONS */

  .bottom-appear {
    transform: translateY(100%);
  }

  .bottom-appear-active {
    transform: translateY(0);
    transition: transform ${(props) => props.$delay}s ease-out;
  }

  .bottom-exit {
    transform: translateY(0);
  }

  .bottom-exit-active {
    transform: translateY(100%);
    transition: transform ${(props) => props.$delay}s ease-out;
  }

  /* RIGHT SIDE ANIMATIONS */

  .right-side-appear {
    transform: translateX(100%);
  }

  .right-side-appear-active {
    transform: translateX(0);
    transition: transform ${(props) => props.$delay}s ease-out;
  }

  .right-side-exit {
    transform: translateX(0);
  }

  .right-side-exit-active {
    transform: translateX(100%);
    transition: transform ${(props) => props.$delay}s ease-out;
  }

  /* LEFT SIDE ANIMATIONS */

  .left-side-appear {
    transform: translateX(-100%);
  }

  .left-side-appear-active {
    transform: translateX(0);
    transition: transform ${(props) => props.$delay}s ease-out;
  }

  .left-side-exit {
    transform: translateX(0);
  }

  .left-side-exit-active {
    transform: translateX(-100%);
    transition: transform ${(props) => props.$delay}s ease-out;
  }
`;
