import { AddIcon } from "@chakra-ui/icons";
import { Icon, Button, Box } from "@chakra-ui/react";
import React from "react";
import { MdLogin } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PipelineTable from "../../components/PipelineTable";
import Toolbar from "../../components/Toolbar";
import { Pipeline, fetchData1 } from "../../utils/apis";
import { useQuery } from "react-query";

const Pipelines: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/pipeline/pipeline_designer");
  };

  const {
    data: pipelines = [],
    error,
    isLoading,
  } = useQuery<Pipeline[], Error>(
    "pipelines",
    () => fetchData1<Pipeline[]>("/api/pipelines"),
    {
      refetchInterval: 15000, // Polling every 15 seconds
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
      <PageHeader title="Pipeline" isPadded={false} />
      {pipelines.length > 0 ? (
        <Box>
          <Toolbar
            primaryAction={
              <Button leftIcon={<AddIcon />} onClick={navigateTo}>
                New pipeline
              </Button>
            }
          />
          <PipelineTable data={pipelines} />
        </Box>
      ) : (
        <EmptyState
          icon={<Icon as={MdLogin} boxSize={20} />}
          title="No source available"
          message="No source configured for this cluster, setup a source to get started."
          action={
            <Button leftIcon={<AddIcon />} onClick={navigateTo}>
              New pipeline
            </Button>
          }
        />
      )}
    </>
  );
};

export default Pipelines;
