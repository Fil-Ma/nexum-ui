import React, { useRef, useState, useEffect } from "react";
import { MenuContainer, MenuList, MenuItem, Overlay } from "./styles";
import { IMenuProps } from "./types";

const Menu = ({
  items,
  position = "bottom",
  animationDuration = 300,
  onClose,
  open,
  anchorEl,
  offset = 8,
}: IMenuProps) => {
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  const calculatePosition = () => {
    if (anchorEl) {
      const buttonRect = anchorEl.getBoundingClientRect();
      let top = 0;
      let left = 0;

      const positionTop = buttonRect.top + window.scrollY;
      const positionBottom = buttonRect.bottom + window.scrollY;
      const positionLeft = buttonRect.left + window.scrollX;
      const positionRigth = buttonRect.right + window.scrollX;

      switch (position) {
        case "top":
          top = positionTop - offset;
          left = positionLeft + buttonRect.width / 2;
          break;
        case "bottom":
          top = positionBottom + offset;
          left = positionLeft + buttonRect.width / 2;
          break;
        case "left":
          top = positionTop + buttonRect.height / 2;
          left = positionLeft - offset;
          break;
        case "right":
          top = positionTop + buttonRect.height / 2;
          left = positionRigth + offset;
          break;
        default:
          top = positionBottom + offset;
          left = positionLeft + buttonRect.width / 2;
      }

      if (position === "top" || position === "bottom") {
        left -= buttonRect.width / 2;
      } else {
        top -= buttonRect.height / 2;
      }

      setMenuPosition({ top, left });
    }
  };

  useEffect(() => {
    if (open) calculatePosition();
  }, [open, position, offset]);

  return (
    open && (
      <Overlay onClick={onClose}>
        <MenuContainer
          style={{ top: menuPosition.top, left: menuPosition.left }}
          $animationDuration={animationDuration}
          onKeyDown={handleKeyDown}
        >
          <MenuList>
            {items.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  item.onClick();
                  onClose();
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuList>
        </MenuContainer>
      </Overlay>
    )
  );
};

export default Menu;
