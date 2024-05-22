/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { MdLogout } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import PageHeader from "../../components/PageHeader";
import { Source, fetchData } from "../../utils/apis";
import SourceSinkTable from "../../components/SourceSinkTable";
import Toolbar from "../../components/Toolbar";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

const Sources: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/source/catalog");
  };

  const {
    data: sources = [],
    error,
    isLoading,
  } = useQuery<Source[], Error>(
    "sources",
    () => fetchData<Source[]>("/api/sources"),
    {
      refetchInterval: 7000, // Polling every 15 seconds
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <PageHeader title="Source" isPadded={false} />
      {sources.length > 0 ? (
        <Box>
          <Toolbar
            primaryAction={
              <Button leftIcon={<AddIcon />} onClick={navigateTo}>
                New source
              </Button>
            }
          />
          <SourceSinkTable data={sources} tableType="source" />
        </Box>
      ) : (
        <EmptyState
          icon={<Icon as={MdLogout} boxSize={20} />}
          title="No source available"
          message="No source configured for this cluster, setup a source to get started."
          action={
            <Button leftIcon={<AddIcon />} onClick={navigateTo}>
              New source
            </Button>
          }
        />
      )}
    </>
  );
};

export default Sources;
