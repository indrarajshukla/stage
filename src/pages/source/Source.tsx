/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddIcon } from "@chakra-ui/icons";
import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { MdLogout } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import { useQuery } from "react-query";

const fetchSources = async (): Promise<any[]> => {
  const response = await fetch("http://localhost:8080/api/sources", {
    mode: "no-cors", // Not recommended for production
  });
  return response.json();
};

const Source: React.FC = () => {
  const navigate = useNavigate();

  const updateIsEmpty = () => {
    navigate("/source/catalog");
  };

  const { data, isLoading, error } = useQuery("sources", fetchSources);

  const sources = data;

  console.log("api call:", sources, isLoading, error);

  return (
    <>
      <PageHeader title="Source" isPadded={false} />
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
