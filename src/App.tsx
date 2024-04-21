import { Button, Grid, GridItem, Icon } from "@chakra-ui/react";
import "./App.css";
import SideNavigation from "./AppLayout/SideNavigation";
import AppHeader from "./AppLayout/Header";
import PageHeading from "./components/PageHeading";
import EmptyState from "./components/EmptyState";
import { MdStorage } from "react-icons/md";
import { AddIcon } from "@chakra-ui/icons";

function App() {
  return (
    <Grid
      templateAreas={`"nav header"
                    "nav main"
                    "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"75px 1fr"}
      h="100vh"
      gap="0"
      color="blackAlpha.700"
    >
      <SideNavigation />

      <AppHeader />

      <GridItem pl="4" pr="4" bg="#F8FAF6" area={"main"}>
        <PageHeading title={"Source"} />
        <EmptyState
          icon={<Icon as={MdStorage} boxSize={20} />}
          title="No source available"
          message="No source configured for this cluster, add a source to start
        collection change data event from."
          action={<Button leftIcon={<AddIcon />}>New source</Button>}
        />
      </GridItem>
      <GridItem pl="2" bg="#F8FAF6" area={"footer"}></GridItem>
    </Grid>
  );
}

export default App;
