import { AddIcon } from "@chakra-ui/icons";
import { Button, Box } from "@chakra-ui/react";
import React from "react";
import Toolbar from "../../components/Toolbar";
import PageHeader from "../../components/PageHeader";
import DestinationListing from "../../components/DestinationListing";
import PipelineDestinationCatalog from "./PipelineDestinationCatalog";

const PipelineDestination: React.FC = () => {
  const [createDestination, setCreateDestination] = React.useState(false);

  return (
    <>
      {!createDestination && (
        <>
          <PageHeader title={"Select destination"} />
          <Box>
            <Toolbar
              primaryAction={
                <Button
                  leftIcon={<AddIcon />}
                  onClick={() => setCreateDestination(true)}
                >
                  New destination
                </Button>
              }
            />
            <DestinationListing />
          </Box>
        </>
      )}
      {createDestination && <PipelineDestinationCatalog />}
    </>
  );
};

export default PipelineDestination;
