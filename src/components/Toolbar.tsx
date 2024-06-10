import { Flex, Spacer, Stack, Button, Box } from "@chakra-ui/react";

import React from "react";
import { MdFilterList } from "react-icons/md";
import SearchInput from "./SearchInput";

interface ToolbarProps {
  primaryAction: React.ReactNode;
}

const Toolbar: React.FC<ToolbarProps> = ({ primaryAction }) => {
  return (
    <Flex mt="4" pb="4">
      <SearchInput placeholder="Search" size="400px" />
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
