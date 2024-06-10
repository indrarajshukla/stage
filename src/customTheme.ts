import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { AppThemeGreen } from "./utils/constants";

const customTheme = extendTheme(
  // withDefaultColorScheme({ colorScheme: "gray" }),
  withDefaultColorScheme({ colorScheme: AppThemeGreen.Theme }),
  {
    config: {
      initialColorMode: "system",
      useSystemColorMode: true,
    },
  }
);

export default customTheme;
