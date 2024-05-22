import { AddIcon } from "@chakra-ui/icons";
import { Icon, Button, Box } from "@chakra-ui/react";
import React from "react";
import { MdSwapCalls } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import PipelineTable from "../../components/PipelineTable";
import Toolbar from "../../components/Toolbar";
import { Pipeline, fetchData } from "../../utils/apis";
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
    () => fetchData<Pipeline[]>("/api/pipelines"),
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
          icon={<Icon as={MdSwapCalls} boxSize={20} />}
          title="No pipeline available"
          message="No pipeline configured for this cluster, setup a pipeline to get started."
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
