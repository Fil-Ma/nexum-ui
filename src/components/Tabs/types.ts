export interface ITabsProps {
  tabs: { label: string }[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
}
