import { ThemeSchema } from "./types";
import defaultColors from "./colors";

const defaultTheme: ThemeSchema = {
  components: {
    button: {},
  },
  colors: defaultColors,
};

export default defaultTheme;
