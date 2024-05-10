import { AddIcon } from "@chakra-ui/icons";
import { Icon, Button } from "@chakra-ui/react";
import React from "react";
import { MdOutlineVpnKey } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import PageHeading from "../../components/PageHeading";
import { useNavigate } from "react-router-dom";

const Vaults: React.FC = () => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate("/vaults/create_vault");
  };
  return (
    <>
      <PageHeading title={"Sink"} />
      <EmptyState
        icon={<Icon as={MdOutlineVpnKey} boxSize={20} />}
        title="No vault available"
        message="No vault configured for this cluster, add a vault."
        action={<Button leftIcon={<AddIcon />} onClick={navigateToCreate}>New vault</Button>}
      />
    </>
  );
};

export default Vaults;
