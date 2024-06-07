import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Spacer,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";

import React from "react";
import { MdFilterList } from "react-icons/md";

interface ToolbarProps {
  primaryAction: React.ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = ({ primaryAction }) => {
  return (
    <Flex mt="4" pb="4">
      <Box>
        <InputGroup bg="white" width="400px">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" />
        </InputGroup>
      </Box>
      <Spacer />
      <Box>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<MdFilterList />} variant="outline" isDisabled>
            Filter
          </Button>
          {primaryAction}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Toolbar;
