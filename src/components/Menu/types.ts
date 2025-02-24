import { IPopoverProps } from "@components/Popover/types";

type MenuItem = { label: string; onClick?: VoidFunction };

export interface IMenuProps {
  items: Array<MenuItem>;
  popover: IPopoverProps;
}
