import { AddIcon } from "@chakra-ui/icons";
import { Icon, Button } from "@chakra-ui/react";
import React from "react";
import { MdStorage } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import PageHeading from "../../components/PageHeading";

const Setting: React.FC = () => {
  return (
    <>
      <PageHeading title={"Setting"} />
      <EmptyState
        icon={<Icon as={MdStorage} boxSize={20} />}
        title="No Setting available"
        message="No Setting configured for this cluster, add a Setting to start
        collection change data event from."
        action={<Button leftIcon={<AddIcon />}>New Setting</Button>}
      />
    </>
  );
};

export default Setting;
