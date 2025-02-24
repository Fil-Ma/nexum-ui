import { useTheme } from "@theme/ThemeProvider";
import useStylesOverride from "@hooks/useStylesOverride";
import { IDialogProps, TDialogVariant } from "./types";
import {
  Overlay,
  DialogContainer,
  SideSheetContainer,
  DialogGlobalStyles,
} from "./styles";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

const containersList: Record<TDialogVariant, React.ComponentType<any>> = {
  modal: DialogContainer,
  bottom: DialogContainer,
  side: SideSheetContainer,
};

const Dialog = ({
  open,
  onClickOutside,
  children,
  delayOnExit = 300,
  variant = "modal",
  side = "right",
  atoms,
}: IDialogProps) => {
  const theme = useTheme();
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const overlayStyleOverride = useStylesOverride(
    theme,
    atoms?.["overlay"].customStyles
  );
  const containerStyleOverride = useStylesOverride(
    theme,
    atoms?.["container"].customStyles
  );

  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget && onClickOutside) {
      onClickOutside();
    }
  };

  const Container = containersList[variant];
  const className =
    variant === "side"
      ? side === "right"
        ? "right-side"
        : "left-side"
      : variant;

  return (
    <>
      <DialogGlobalStyles $delay={delayOnExit / 1000} />
      <CSSTransition
        in={open}
        nodeRef={overlayRef}
        timeout={delayOnExit}
        classNames="overlay"
        unmountOnExit
        appear
      >
        <Overlay
          {...atoms?.["overlay"]}
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          onClick={handleOverlayClick}
          $customStyles={overlayStyleOverride}
          $variant={variant}
        >
          <CSSTransition
            in={open}
            timeout={delayOnExit}
            nodeRef={dialogRef}
            classNames={className}
            unmountOnExit
            appear
          >
            <Container
              {...atoms?.["container"]}
              $customStyles={containerStyleOverride}
              $variant={variant}
              $side={side}
              ref={dialogRef}
            >
              {children}
            </Container>
          </CSSTransition>
        </Overlay>
      </CSSTransition>
    </>
  );
};

export default Dialog;
