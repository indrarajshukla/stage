import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { AppThemeGreen } from "./utils/constants";


const customTheme = extendTheme(
    withDefaultColorScheme({ colorScheme: AppThemeGreen.Theme }),
    {
      config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
      },
    }
  );

export default customTheme;
