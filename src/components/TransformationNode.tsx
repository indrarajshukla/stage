import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { Handle, Position } from "reactflow";

interface TransformationNodeProps {
  data: { label: string, sourcePosition: Position, targetPosition: Position };
}

const TransformationNode: React.FC<TransformationNodeProps> = ({ data }) => {
  return (
    <Box shadow="md" style={{background: "white", borderRadius: "5px"}} >
      
      <Handle type="target" id="smt-input" position={data.targetPosition} />
      <Center bg="gray.100" p="2">
        <Flex direction="column">
          <Center>
            <Icon as={MdOutlineAutoFixHigh} boxSize={8} />
          </Center>
          <Box pr="2" pl="2" pt="2" pb="1">
            <Text fontSize="sm" fontWeight="bold">{data.label}</Text>
          </Box>
        </Flex>
      </Center>
      <Handle type="source" id="smt-output" position={data.sourcePosition} />
    </Box>
  );
};

export default TransformationNode;
