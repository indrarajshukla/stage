import { Grid, GridItem, useColorMode } from "@chakra-ui/react";
import SideNavigation from "./AppSideNavigation";
import { AppThemeGreen } from "../utils/constants";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Grid
      templateAreas={`
                    "nav main"
                    "nav footer"`}
      gridTemplateRows={"1fr 10px"}
      gridTemplateColumns={"80px 1fr"}
      h="100vh"
      gap="0"
      // color="blackAlpha.700"
    >
      <SideNavigation />

      {/* <AppHeader /> */}

      <GridItem
        pl="4"
        pr="4"
        pt="4"
        bg={colorMode !== "dark" ? AppThemeGreen.Background : ""}
        area={"main"}
        overflowY="scroll"
      >
        {/* Hide user account until militancy support is implemented */}
        {/* <UserIcon /> */}
        {children}
      </GridItem>
      <GridItem
        pl="2"
        bg={colorMode !== "dark" ? AppThemeGreen.Background : ""}
      ></GridItem>
    </Grid>
  );
};

export { AppLayout };
