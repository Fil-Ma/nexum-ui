import styled, { css } from "styled-components";
import { IDialogProps } from "./types";
import { useEffect, useState } from "react";
import { fadeIn, fadeOut, scaleIn, scaleOut } from "@animations/keyframes";
import useStylesOverride from "@hooks/useStylesOverride";
import { Styles } from "styled-components/dist/types";
import { useTheme } from "@theme/ThemeProvider";

const Dialog = ({
  open,
  onClickOutside,
  children,
  delayOnExit = 350,
  atoms,
}: IDialogProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(open);

  const theme = useTheme();
  const overlayStyleOverride = useStylesOverride(
    theme,
    atoms?.["overlay"].customStyles
  );
  const containerStyleOverride = useStylesOverride(
    theme,
    atoms?.["container"].customStyles
  );

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsAnimating(false);
    } else {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setShouldRender(false);
      }, delayOnExit);

      return () => clearTimeout(timer);
    }
  }, [open, delayOnExit]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget && onClickOutside) {
      onClickOutside();
    }
  };

  if (!shouldRender) return null;

  return (
    <Overlay
      {...atoms?.["overlay"]}
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
      $isExiting={isAnimating}
      $customStyles={overlayStyleOverride}
    >
      <DialogContainer
        {...atoms?.["container"]}
        $isExiting={isAnimating}
        $customStyles={containerStyleOverride}
      >
        {children}
      </DialogContainer>
    </Overlay>
  );
};

export default Dialog;

type ContainerProps = {
  $isExiting: boolean;
  $customStyles?: Styles<object>;
};

const Overlay = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${(props) => (props.$isExiting ? fadeOut : fadeIn)} 0.3s ease-out;
  ${(props) => props?.$customStyles && css(props.$customStyles)}
`;

const DialogContainer = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${(props) => (props.$isExiting ? scaleOut : scaleIn)} 0.3s ease-out;
  ${(props) => props?.$customStyles && css(props.$customStyles)}
`;
