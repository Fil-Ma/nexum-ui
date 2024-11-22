export interface ISearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  SearchIcon?: React.ReactNode;
  CloseIcon?: React.ReactNode;
}
