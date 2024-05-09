import { AddIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  ComponentWithAs,
  Flex,
  IconProps,
} from "@chakra-ui/react";

interface AddTransformationNodeProps {
  data: { icon: ComponentWithAs<"svg", IconProps>; label: string };
}

const AddTransformationNode: React.FC<AddTransformationNodeProps> = ({ data }) => {
  return (
    <Box shadow="md" style={{background: "white", borderRadius: "5px"}} >
      <Center bg="gray.100" p="2">
        <Flex direction="column">
          <Center>
            <Icon as={data.icon} boxSize={8} />
          </Center>
          <Box pr="2" pl="2" pt="2" pb="1">
            <Button variant="outline" leftIcon={<AddIcon />} size="xs">
              {data.label}
            </Button>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default AddTransformationNode;
