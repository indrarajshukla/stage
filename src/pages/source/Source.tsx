import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import PageHeading from "../../components/PageHeading";
import { MdLogout } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import { useNavigate } from "react-router-dom";

const Source: React.FC = () => {
  const navigate = useNavigate();

  const updateIsEmpty = () => {
    navigate("/source/catalog");
  };

  return (
    <>
      <PageHeading title={"Source"} />
      <EmptyState
        icon={<Icon as={MdLogout} boxSize={20} />}
        title="No source available"
        message="No source configured for this cluster, setup a source to get started."
        action={
          <Button leftIcon={<AddIcon />} onClick={updateIsEmpty}>
            New source
          </Button>
        }
      />
    </>
  );
};

export default Source;
