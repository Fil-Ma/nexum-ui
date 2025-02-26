import { TComputedSchema } from "@theme/defaultTheme/types";
import type { CSSProperties } from "react";

export type StylesOverride =
  | CSSProperties
  | ((theme: TComputedSchema) => CSSProperties);
