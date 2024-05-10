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

interface DataDefaultNodeProps {
  data: { icon: ComponentWithAs<"svg", IconProps>; label: string };
}

const DataDefaultNode: React.FC<DataDefaultNodeProps> = ({ data }) => {
  return (
    <Box shadow="md" style={{ borderRadius: "25px" }}>
      {data.label === "Source" && (
        <Handle type="source" position={Position.Right} id="smt-input" />
      )}

      <Center bg="gray.100" p="2" style={{ background: "white", borderRadius: "25px" }}>
        <Flex direction="column">
          <Center>
            <Icon as={data.icon} boxSize={12}  />
          </Center>
          <Box pr="2" pl="2" pt="2" pb="1">
            <Button variant="outline" leftIcon={<AddIcon />} size="xs">
              {data.label}
            </Button>
          </Box>
        </Flex>
      </Center>
      {data.label === "Destination" && (
        <Handle type="target" position={Position.Left} id="smt-output" />
      )}
    </Box>
  );
};

export default DataDefaultNode;
