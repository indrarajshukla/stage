import { Grid, GridItem } from "@chakra-ui/react";
import SideNavigation from "./AppSideNavigation";
import { AppThemeGreen } from "../utils/constants";
import UserIcon from "../components/UserIcon";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  return (
    <Grid
      templateAreas={`
                    "nav main"
                    "nav footer"`}
      gridTemplateRows={"1fr 30px"}
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
        bg={AppThemeGreen.Background}
        area={"main"}
      >
        <UserIcon />
        {children}
      </GridItem>
      <GridItem pl="2" bg={AppThemeGreen.Background} area={"footer"}></GridItem>
    </Grid>
  );
};

export { AppLayout };
