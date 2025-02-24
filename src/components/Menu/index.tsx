import React, { useCallback } from "react";
import { MenuList, MenuItem } from "./styles";
import { IMenuProps } from "./types";
import Popover from "@components/Popover";

const Menu = ({
  items,
  popover: { position = "bottom-center", onClose, anchorEl, offset, ...rest },
}: IMenuProps) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  return (
    <Popover
      position={position}
      onClose={onClose}
      anchorEl={anchorEl}
      offset={offset}
      {...rest}
    >
      <MenuList role="menu" onKeyDown={handleKeyDown}>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            role="menuitem"
            tabIndex={-1}
            $clickable={!!item?.onClick}
            onClick={() => {
              item.onClick?.();
              onClose();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Popover>
  );
};

export default Menu;
