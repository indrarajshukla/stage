import { AddIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  ComponentWithAs,
  Flex,
  IconProps,
} from "@chakra-ui/react";
import { Handle, Position } from "reactflow";

interface DataNodeProps {
  data: { icon: ComponentWithAs<"svg", IconProps>; label: string };
}

const DataNode: React.FC<DataNodeProps> = ({ data }) => {
  return (
    <Box shadow="md" style={{ background: "white", borderRadius: "5px" }}>
      {data.label === "Source" && (
        <Handle type="source" position={Position.Right} id="smt-output" />
      )}
      {data.label.includes("ransformation") && (
        <Handle type="target" id="smt-output" position={Position.Left} />
      )}

      <Center bg="gray.100" p="2">
        <Flex direction="column">
          <Center>
            <Icon as={data.icon} boxSize={8} />
          </Center>
          <Box pr="4" pl="4" pt="2" pb="1">
            <Button variant="outline" leftIcon={<AddIcon />} size="xs">
              {data.label}
            </Button>
          </Box>
        </Flex>
      </Center>
      {data.label === "Destination" && (
        <Handle type="target" position={Position.Left} id="smt-output" />
      )}
      {data.label.includes("ransformation") && (
        <Handle type="source" id="smt-output" position={Position.Right} />
      )}
      <Handle type="target" position={Position.Bottom} id="smt-output" />
    </Box>
  );
};

export default DataNode;
