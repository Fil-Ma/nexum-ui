import { useMemo } from "react";
import { StylesOverride } from "@customTypes/index";
import { ThemeSchema } from "@theme/defaultTheme/types";

const useStylesOverride = (
  theme: ThemeSchema,
  customStyles?: StylesOverride
) => {
  const stylesOverride = useMemo(() => {
    if (typeof customStyles === "function") {
      return customStyles(theme);
    } else {
      return customStyles;
    }
  }, [customStyles]);

  return stylesOverride;
};

export default useStylesOverride;
