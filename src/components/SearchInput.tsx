import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";

import React from "react";

interface SearchInputProps {
  size?: string;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  size = "450px",
  placeholder,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <InputGroup width={size}>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          bg={colorMode === "dark" ? "gray.700" : "white"}
          placeholder={placeholder}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
