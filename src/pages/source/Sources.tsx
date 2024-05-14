/* eslint-disable @typescript-eslint/no-explicit-any */
import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import PageHeader from "../../components/PageHeader";
import { Source, createSource, fetchDataWithPolling } from "../../utils/apis";
import SourceSinkTable from "../../components/SourceSinkTable";
import Toolbar from "../../components/Toolbar";
import { useNavigate } from "react-router-dom";

const Sources: React.FC = () => {
  const navigate = useNavigate();
  const [sources, setSources] = useState<Source[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigateTo = () => {
    navigate("/source/catalog");
  };

  const handleCreateSource = async () => {
    const payload = {
      type: "io.debezium.connector.mongodb.MongoDbConnector",
      schema: "schema321",
      vaults: [],
      config: {
        "mongodb.connection.string": "mongodb://localhost20217/?replicaSet=rs0",
      },
      name: "test-source",
    };

    const response = await createSource(payload);

    if (response.error) {
      console.error("Failed to create source:", response.error);
    } else {
      console.log("Source created successfully:", response.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchDataWithPolling<Source[]>(
        "/api/sources",
        15000
      ); // Polling every 15 seconds

      if (response.error) {
        setError(response.error);
      } else {
        setSources(response.data ?? []);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
            <Button leftIcon={<AddIcon />} onClick={handleCreateSource}>
              New source
            </Button>
          }
        />
      )}
    </>
  );
};

export default Sources;
