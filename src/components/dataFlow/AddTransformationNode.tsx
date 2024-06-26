import { AddIcon, Icon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex, useColorMode } from "@chakra-ui/react";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Handle, Position } from "reactflow";

interface AddTransformationNodeProps {
  data: { label: string; sourcePosition: Position; targetPosition: Position };
}

const AddTransformationNode: React.FC<AddTransformationNodeProps> = ({
  data,
}) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();

  const navigateTo = (navigateTo: string) => {
    navigate(`/pipeline/pipeline_designer/${navigateTo}`);
  };
  return (
    <Box shadow="md" style={{ borderRadius: "15px" }}>
      <Handle type="target" id="smt-input" position={data.targetPosition} />
      <Center
        p="1"
        style={{
          background: colorMode === "dark" ? "#2D3748" : "white",
          borderRadius: "15px",
        }}
      >
        <Flex direction="column">
          <Center>
            <Icon as={MdOutlineAutoFixHigh} boxSize={6} />
          </Center>
          <Box>
            <Button
              variant="ghost"
              leftIcon={<AddIcon />}
              size="xs"
              onClick={() => navigateTo("destination")}
              fontSize="x-small"
            >
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
