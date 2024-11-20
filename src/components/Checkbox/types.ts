export interface ICheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  size?: number;
  color?: string;
  Icon?: () => JSX.Element;
}
