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
      <PageHeading title={"Vaults"} />
      <EmptyState
        icon={<Icon as={MdOutlineVpnKey} boxSize={20} />}
        title="Coming soon!"
        message="No vault configured for this cluster, add a vault."
        action={<Button leftIcon={<AddIcon />} onClick={navigateToCreate} isDisabled>New vault</Button>}
      />
    </>
  );
};

export default Vaults;
