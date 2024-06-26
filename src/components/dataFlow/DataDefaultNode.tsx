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
import { AppThemeGreen } from "../../utils/constants";

interface DataDefaultNodeProps {
  data: {
    icon: ComponentWithAs<"svg", IconProps>;
    label: string;
    type: string;
    action: React.ReactNode;
  };
}

const DataDefaultNode: React.FC<DataDefaultNodeProps> = ({ data }) => {
  const { colorMode } = useColorMode();
  // const navigate = useNavigate();

  // const navigateTo = (navigateTo: string) => {
  //   navigate(`/pipeline/pipeline_designer/${navigateTo}`);
  // };

  return (
    <Box
      shadow="md"
      cursor="auto"
      style={{
        borderRadius: "15px",
        padding: "5px",
        background: colorMode === "dark" ? "#2D3748" : "white",
      }}
    >
      {data.type === "source" && (
        <Handle type="source" position={Position.Right} id="smt-input" />
      )}

      <Center
        style={{
          background: colorMode === "dark" ? "#2D3748" : "white",
        }}
        // mt="1.5"
      >
        <Flex direction="column">
          <Center>
            <Box
              bg={colorMode === "dark" ? "#1A202C" : AppThemeGreen.Background}
              lineHeight="normal"
              borderRadius="5"
              p="1"
            >
              <Icon as={data.icon} boxSize={7} />
            </Box>
          </Center>

          {data.action}
        </Flex>
      </Center>
      {data.type === "destination" && (
        <Handle type="target" position={Position.Left} id="smt-output" />
      )}
    </Box>
  );
};

export default DataDefaultNode;
