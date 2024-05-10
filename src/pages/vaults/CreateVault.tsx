import React from "react";
import {
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  Icon,
  Switch,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { BsCodeSquare } from "react-icons/bs";
import PageHeader from "../../components/PageHeader";
import PipelineFlow from "../../components/PipelineFlow";

const CreateVault: React.FC = () => {
  return (
    <>
      <PageHeader title="Create vault" isPadded={false} />
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
          <Box>
            <FormControl display="flex" alignItems="center">
              <FormLabel>
                <Flex align="center">
                  <Icon as={BsCodeSquare} w={5} h={5} mr="2" />
                  Smart editor
                </Flex>
              </FormLabel>
              <Switch id="smart-editor" />
            </FormControl>
          </Box>
        </Flex>
        <Box m="2" border="1px" borderColor="gray.500" height="600px">
          <PipelineFlow />
        </Box>
        <Flex pt="4">
          <Box>
            <Button variant="outline">Cancel</Button>
          </Box>
          <Spacer />
          <Box>
            <Button variant="solid" isDisabled>
              Create pipeline
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CreateVault;
