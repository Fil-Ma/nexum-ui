import { useEffect, useState } from "react";
import { useTheme } from "@theme/ThemeProvider";
import useStylesOverride from "@hooks/useStylesOverride";
import { IDialogProps, TDialogVariant } from "./types";
import { Overlay, DialogContainer, SideSheetContainer } from "./styles";

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

  const Container = containersList[variant];

  return (
    <Overlay
      {...atoms?.["overlay"]}
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}
      $isExiting={shouldRender && isAnimating}
      $customStyles={overlayStyleOverride}
      $variant={variant}
    >
      <Container
        {...atoms?.["container"]}
        $isExiting={shouldRender && isAnimating}
        $customStyles={containerStyleOverride}
        $variant={variant}
        $side={side}
      >
        {children}
      </Container>
    </Overlay>
  );
};

export default Dialog;
