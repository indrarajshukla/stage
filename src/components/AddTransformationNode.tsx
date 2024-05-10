import { AddIcon, Icon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { MdAddCircleOutline } from "react-icons/md";
import { Handle, Position } from "reactflow";

interface AddTransformationNodeProps {
  data: { label: string; sourcePosition: Position; targetPosition: Position };
}

const AddTransformationNode: React.FC<AddTransformationNodeProps> = ({
  data,
}) => {
  return (
    <Box shadow="md" style={{ background: "white", borderRadius: "5px" }}>
      <Handle type="target" id="smt-input" position={data.targetPosition} />
      <Center bg="gray.100" p="2">
        <Flex direction="column">
          <Center>
            <Icon as={MdAddCircleOutline} boxSize={8} />
          </Center>
          <Box pr="2" pl="2" pt="2" pb="1">
            <Button variant="outline" leftIcon={<AddIcon />} size="xs">
              {data.label}
            </Button>
          </Box>
        </Flex>
      </Center>
      <Handle type="source" id="smt-output" position={data.sourcePosition} />
    </Box>
  );
};

export default AddTransformationNode;
