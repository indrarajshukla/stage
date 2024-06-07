import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Avatar,
  IconButton,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import React from "react";

interface UserIconProps {}

const UserIcon: React.FC<UserIconProps> = () => {
  return (
    <Box position="absolute" right="4" top="4">
      <Menu>
        <MenuButton as={IconButton} aria-label="Options" variant="link">
          <Avatar
            size="sm"
            bg="grey"
            _hover={{ borderColor: `blue.500`, borderWidth: `1px` }}
          />
        </MenuButton>
        <MenuList alignItems="right">
          <MenuGroup title="Profile">
            <MenuItem>My Account</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default UserIcon;
