import { Box, Text, Center, Flex, useColorMode } from "@chakra-ui/react";
import { Handle, Position } from "reactflow";

interface DataNodeProps {
  data: { image: React.ReactNode; label: string, type: string};
}

const DataNode: React.FC<DataNodeProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  return (
    <Box shadow="md" style={{ borderRadius: "25px" }}>
      {data.type === "source" && (
        <Handle type="source" position={Position.Right} id="smt-input" />
      )}

      <Center
        bg="gray.100"
        p="2"
        style={{
          background: colorMode === "dark" ? "#1a202c" : "white",
          borderRadius: "25px",
        }}
      >
        <Flex direction="column">
          <Center>{data.image}</Center>
          <Box pr="2" pl="2" pt="2" pb="1">
            <Text fontSize="sm" fontWeight="bold">
              {data.label}
            </Text>
          </Box>
        </Flex>
      </Center>
      {data.type === "destination" && (
        <Handle type="target" position={Position.Left} id="smt-output" />
      )}
    </Box>
  );
};

export default DataNode;
