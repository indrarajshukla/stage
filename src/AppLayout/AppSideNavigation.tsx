import {
  GridItem,
  Center,
  Flex,
  VStack,
  Icon,
  Spacer,
  Box,
  Text,
  Image,
  useColorMode,
} from "@chakra-ui/react";

import React, { useState } from "react";
import debeziumLogo from "./../assets/dbz.svg";
import { routes } from "../routes";
import { NavLink, useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { AppThemeGreen } from "../utils/constants";

interface SideNavigationProps {}

const SideNavigation: React.FC<SideNavigationProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    toggleColorMode();
  };

  const takeMeHome = () => {
    navigate(`/`);
  };
  return (
    <GridItem
      bg={colorMode !== "dark" ? "white" : "gray.900"}
      borderRight="1px"
      borderColor={colorMode !== "dark" ? "gray.300" : "blackAlpha.800"}
      area={"nav"}
      display="flex"
      flexDirection="column"
      maxHeight="100vh"
    >
      <Center h="70px" mb="20px" onClick={takeMeHome} cursor="pointer">
        <Image
          boxSize="35px"
          objectFit="cover"
          src={debeziumLogo}
          alt="Debezium logo"
        />
      </Center>

      <Flex direction="column" pr="1" pl="1" pb="4" flex="1">
        {routes.map((route) => {
          return (
            route.isMain && (
              <NavLink to={route.path} key={route.label}>
                {({ isActive }) => (
                  <Box
                    h="64px"
                    borderRadius="lg"
                    mb="1"
                    cursor="pointer"
                    _hover={
                      !isActive
                        ? colorMode === "dark"
                          ? { bg: `gray.800` }
                          : { bg: `${AppThemeGreen.Theme}.50` }
                        : {}
                    }
                    bg={
                      colorMode === "dark"
                        ? isActive
                          ? `gray.700`
                          : ""
                        : isActive
                        ? `${AppThemeGreen.Theme}.200`
                        : "white"
                    }
                  >
                    <Center h="64px">
                      <VStack gap="0">
                        <Box>
                          <Icon as={route.icon} boxSize={7} />
                        </Box>
                        <Box>
                          <Text fontSize="xs">{route.label}</Text>
                        </Box>
                      </VStack>
                    </Center>
                  </Box>
                )}
              </NavLink>
            )
          );
        })}

        <Spacer />

        {routes.map((route) => {
          return (
            !route.isMain &&
            !route.isSubPath && (
              <NavLink to={route.path} key={route.label}>
                {({ isActive }) => (
                  <Box
                    key={route.label}
                    h="64px"
                    borderRadius="lg"
                    mb="1"
                    cursor="pointer"
                    _hover={
                      !isActive
                        ? colorMode === "dark"
                          ? { bg: `gray.800` }
                          : { bg: `${AppThemeGreen.Theme}.50` }
                        : {}
                    }
                    bg={
                      colorMode === "dark"
                        ? isActive
                          ? `gray.700`
                          : ""
                        : isActive
                        ? `${AppThemeGreen.Theme}.200`
                        : "white"
                    }
                  >
                    <Center h="64px">
                      <VStack gap="0">
                        <Box>
                          <Icon as={route.icon} boxSize={7} />
                        </Box>
                        <Box>
                          <Text fontSize="xs">{route.label}</Text>
                        </Box>
                      </VStack>
                    </Center>
                  </Box>
                )}
              </NavLink>
            )
          );
        })}
        <Box
          h="64px"
          borderRadius="lg"
          mb="1"
          cursor="pointer"
          _hover={
            colorMode === "dark"
              ? { bg: "gray.800" }
              : { bg: `${AppThemeGreen.Theme}.50` }
          }
          onClick={toggleDarkMode}
        >
          <Center h="64px">
            <VStack gap="0">
              <Box>
                <Icon as={isDarkMode ? SunIcon : MoonIcon} boxSize={5} />
              </Box>
            </VStack>
          </Center>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default SideNavigation;
