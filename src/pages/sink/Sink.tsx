import { AddIcon } from "@chakra-ui/icons";
import { Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import PageHeading from "../../components/PageHeading";
import SinkTable from "../../components/SinkTable";
import Toolbar from "../../components/Toolbar";

const Sink: React.FC = () => {
  const [isCreatingForm, setIsCreatingForm] = useState<boolean>(false);

  const updateIsCreatingForm = () => {
    setIsCreatingForm(!isCreatingForm);
  };

  return (
    <>
      <PageHeading title={"Destination"} />

      {!isCreatingForm ? (
        <Box>
          <Toolbar
            primaryAction={
              <Button leftIcon={<AddIcon />} onClick={updateIsCreatingForm}>
                New destination
              </Button>
            }
          />
          <SinkTable />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Sink;
