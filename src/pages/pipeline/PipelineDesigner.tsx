import React, { useCallback } from "react";
import PageHeader from "../../components/PageHeader";
import {
  Box,
  Button,
  Flex,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import CreationFlow from "../../components/dataFlow/CreationFlow";
import { useNavigate } from "react-router-dom";
import { useData } from "../DataContext";
import { Destination, Source } from "../../utils/apis";

const PipelineDesigner: React.FC = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  const [isSourceConfigured, setIsSourceConfigured] = React.useState(false);
  const [isDestinationConfigured, setIsDestinationConfigured] =
    React.useState(false);

  const [selectedSource, setSelectedSource] = React.useState<Source>();
  const [selectedDestination, setSelectedDestination] =
    React.useState<Destination>();

  const updateIfSourceConfigured = useCallback((isConfigured: boolean) => {
    setIsSourceConfigured(isConfigured);
  }, []);

  const updateIfDestinationConfigured = useCallback((isConfigured: boolean) => {
    setIsDestinationConfigured(isConfigured);
  }, []);

  const updateSelectedSource = useCallback((source: Source) => {
    setSelectedSource(source);
  }, []);

  const updateSelectedDestination = useCallback((destination: Destination) => {
    setSelectedDestination(destination);
  }, []);

  const { setSource, setDestination } = useData();

  const navigateTo = (url: string) => {
    setSource(selectedSource!);
    setDestination(selectedDestination!);
    navigate(url);
  };

  const handleConfigurePipeline = () => {
    navigateTo("/pipeline/pipeline_designer/configure");
  };
  return (
    <>
      <PageHeader title="Pipeline designer" isPadded={false} />
      <Box
        bg={colorMode !== "dark" ? "white" : "gray.700"}
        borderRadius="lg"
        p="4"
        shadow="md"
      >
        <Flex borderBottom="1px solid" pb="1">
          <Box>
            <Text fontSize="md">
              Configure the pipeline by adding source, destination and
              optionally any number of transformation as needed.
            </Text>
          </Box>
          <Spacer />
        </Flex>
        <Box m="2" height="500px">
          <CreationFlow
            updateIfSourceConfigured={updateIfSourceConfigured}
            updateIfDestinationConfigured={updateIfDestinationConfigured}
            isSourceConfigured={isSourceConfigured}
            isDestinationConfigured={isDestinationConfigured}
            updateSelectedSource={updateSelectedSource}
            updateSelectedDestination={updateSelectedDestination}
          />
        </Box>
        <Flex>
          <Box>
            <Button variant="outline" onClick={() => navigateTo("/pipeline")}>
              Back
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Button
              variant="solid"
              isDisabled={!(isSourceConfigured && isDestinationConfigured)}
              onClick={handleConfigurePipeline}
            >
              Configure pipeline
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default PipelineDesigner;
