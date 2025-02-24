import ClickAwayListener from "@components/common/ClickAwayListener";
import { useEffect, useRef, useState } from "react";
import { IPopoverProps, FinalPopoverPosition } from "./types";
import { getPopoverPosition } from "./utils";
import { PopoverContainer } from "./styles";
import { CSSTransition } from "react-transition-group";
import { createGlobalStyle } from "styled-components";

const Popover = ({
  anchorEl,
  onClose,
  width = 300,
  position = "bottom-center",
  offset,
  children,
}: IPopoverProps) => {
  const [popoverPosition, setPopoverPosition] = useState<FinalPopoverPosition>(
    {}
  );
  const [height, setHeight] = useState(30);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (anchorEl) {
      const anchorPosition = anchorEl.getBoundingClientRect();
      const finalPosition = getPopoverPosition(anchorPosition, position, {
        offset,
        width,
        height,
      });
      setPopoverPosition(finalPosition);
    }
  }, [anchorEl, position, offset, width, height]);

  const popoverHeight = containerRef.current?.getBoundingClientRect().height;

  useEffect(() => {
    if (typeof popoverHeight === "number") {
      setHeight(popoverHeight);
    }
  }, [popoverHeight]);

  const open = !!anchorEl;

  return (
    <>
      <DialogGlobalStyles />
      <CSSTransition
        in={open}
        timeout={300}
        nodeRef={containerRef}
        classNames="popover"
        unmountOnExit
        appear
      >
        <ClickAwayListener onClickAway={onClose}>
          <PopoverContainer
            ref={containerRef}
            $isVisible={open}
            $customStyles={{
              width: `${width}px`,
              ...popoverPosition,
            }}
          >
            {children}
          </PopoverContainer>
        </ClickAwayListener>
      </CSSTransition>
    </>
  );
};

export default Popover;

const DialogGlobalStyles = createGlobalStyle`
  .popover-appear {
    opacity: 0;
    transform: scale(0.95);
  }

  .popover-appear-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .popover-exit {
    opacity: 1;
    transform: scale(1);
  }

  .popover-exit-active {
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
 `;
