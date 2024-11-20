import { ThemeSchema } from "@theme/defaultTheme/types";
import type { CSSProperties, ElementType } from "react";

export type StylesOverride =
  | CSSProperties
  | ((theme: ThemeSchema) => CSSProperties);
