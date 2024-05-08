import { AddIcon } from "@chakra-ui/icons";
import { Button, Box } from "@chakra-ui/react";
import React from "react";
import PageHeading from "../../components/PageHeading";
import DestinationTable from "../../components/DestinationTable";
import Toolbar from "../../components/Toolbar";
import { useNavigate } from "react-router-dom";

const Destination: React.FC = () => {
  const navigate = useNavigate();

  const updateIsEmpty = () => {
    navigate("/destination/catalog");
  };

  return (
    <>
      <PageHeading title={"Destination"} />

      <Box>
        <Toolbar
          primaryAction={
            <Button leftIcon={<AddIcon />} onClick={updateIsEmpty}>
              New destination
            </Button>
          }
        />
        <DestinationTable />
      </Box>
    </>
  );
};

export default Destination;
