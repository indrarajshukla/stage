import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  ComponentWithAs,
  Flex,
  IconProps,
  useColorMode,
} from "@chakra-ui/react";
import { Handle, Position } from "reactflow";

interface DataDefaultNodeProps {
  data: { icon: ComponentWithAs<"svg", IconProps>; label: string, type: string, action: React.ReactNode};
}

const DataDefaultNode: React.FC<DataDefaultNodeProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  // const navigate = useNavigate();

  // const navigateTo = (navigateTo: string) => {
  //   navigate(`/pipeline/pipeline_designer/${navigateTo}`);
  // };
  
  return (
    <Box shadow="md" style={{ borderRadius: "25px" }}>
      {data.type === "source" && (
        <Handle type="source" position={Position.Right} id="smt-input" />
      )}

      <Center bg="gray.100" p="2" style={{
        background: colorMode === "dark" ? "#1a202c" : "white",
        borderRadius: "25px",
      }}>
        <Flex direction="column">
          <Center>
            <Icon as={data.icon} boxSize={12}  />
          </Center>
          <Box pr="2" pl="2" pt="2" pb="1">
            {/* <Button variant="outline" leftIcon={<AddIcon />} size="xs" onClick={() => navigateTo(data.type)}>
              {data.label}
            </Button> */}
            {data.action}
          </Box>
        </Flex>
      </Center>
      {data.type === "destination" && (
        <Handle type="target" position={Position.Left} id="smt-output" />
      )}
    </Box>
  );
};

export default DataDefaultNode;
