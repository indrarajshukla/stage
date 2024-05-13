import { AddIcon, Icon } from "@chakra-ui/icons";
import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Handle, Position } from "reactflow";

interface AddTransformationNodeProps {
  data: { label: string; sourcePosition: Position; targetPosition: Position };
}

const AddTransformationNode: React.FC<AddTransformationNodeProps> = ({
  data,
}) => {
    const navigate = useNavigate();

  const navigateTo = (navigateTo: string) => {
    navigate(`/pipeline/create_pipeline/${navigateTo}`);
  };
  return (
    <Box shadow="md" style={{ borderRadius: "5px" }}>
      <Handle type="target" id="smt-input" position={data.targetPosition} />
      <Center p="2" style={{ background: "white", borderRadius: "5px" }}>
        <Flex direction="column">
          <Center >
            <Icon as={MdOutlineAutoFixHigh} boxSize={8} />
          </Center>
          <Box pr="2" pl="2" pt="2" pb="1">
            <Button variant="outline" leftIcon={<AddIcon />} size="xs" onClick={()=>navigateTo("destination")}>
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
