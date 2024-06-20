import { Flex, Spacer, Stack, Button, Box } from "@chakra-ui/react";

import React from "react";
import { MdFilterList } from "react-icons/md";
import SearchInput from "./SearchInput";

interface ToolbarProps {
  primaryAction: React.ReactNode;
  searchQuery: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  primaryAction,
  searchQuery,
  onSearch,
}) => {
  return (
    <Flex pb="4">
      <SearchInput
        placeholder="Search"
        size="400px"
        searchInput={searchQuery}
        onSearch={onSearch}
      />
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
