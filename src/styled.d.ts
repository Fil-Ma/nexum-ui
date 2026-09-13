import "styled-components";
import theme from "./theme/defaultTheme/index";

type AppTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {
    colors: Record<string, Record<number, string>>;
  }
}
