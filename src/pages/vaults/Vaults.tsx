import { AddIcon } from "@chakra-ui/icons";
import { Icon, Button } from "@chakra-ui/react";
import React from "react";
import { MdOutlineVpnKey } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import PageHeading from "../../components/PageHeading";

const Vaults: React.FC = () => {
  return (
    <>
      <PageHeading title={"Sink"} />
      <EmptyState
        icon={<Icon as={MdOutlineVpnKey} boxSize={20} />}
        title="No vault available"
        message="No vault configured for this cluster, add a vault."
        action={<Button leftIcon={<AddIcon />}>New vault</Button>}
      />
    </>
  );
};

export default Vaults;
