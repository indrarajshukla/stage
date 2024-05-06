import { AddIcon } from "@chakra-ui/icons";
import { Icon, Button } from "@chakra-ui/react";
import React from "react";
import { MdSwapCalls } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import PageHeading from "../../components/PageHeading";

const Pipeline: React.FC = () => {
  return (
    <>
      <PageHeading title={"Pipeline"} />
      <EmptyState
        icon={<Icon as={MdSwapCalls} boxSize={20} />}
        title="No Pipeline available"
        message="No Pipeline configured for this cluster, add a Pipeline to start
        collection change data event from."
        action={<Button leftIcon={<AddIcon />}>New Pipeline</Button>}
      />
    </>
  );
};

export default Pipeline;
