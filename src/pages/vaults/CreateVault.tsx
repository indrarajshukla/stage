import React from "react";
import { Flex, Spacer, Button, Box, Text } from "@chakra-ui/react";
import PageHeader from "../../components/PageHeader";
import PipelineFlow from "../../components/dataFlow/PipelineFlow";
import { useNavigate } from "react-router-dom";

const CreateVault: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/pipeline/pipeline_designer/configure`);
  };
  return (
    <>
      <PageHeader title="Pipeline designer" isPadded={false} />
      <Box
        // mr="32" ml="32"
        bg="white"
        borderRadius="lg"
        p="4"
        shadow="md"
      >
        <Flex borderBottom="1px solid" pb="1">
          <Box>
            <Text fontSize="md">
              Configure the pipeline by adding source, destination and any
              number of transformation if needed.
            </Text>
          </Box>
          <Spacer />
        </Flex>
        <Box m="2" height="600px">
          <PipelineFlow />
        </Box>
        <Flex pt="4">
          <Box>
            <Button variant="outline">Cancel</Button>
          </Box>
          <Spacer />
          <Box>
            <Button variant="solid" onClick={() => navigateTo()}>
            Configure pipeline
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CreateVault;
