import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

interface UserActionProps {}

const UserAction: React.FC<UserActionProps> = () => {
  return (
    <Box position="absolute" right="4" top="4">
      <Menu>
        <MenuButton as={IconButton} aria-label="Options" variant="link">
          <Avatar size="sm" bg="grey" />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default UserAction;
