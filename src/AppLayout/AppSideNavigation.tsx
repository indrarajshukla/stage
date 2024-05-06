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
} from "@chakra-ui/react";

import React, { useState } from "react";
import debeziumLogo from "./../assets/dbz.svg";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import { SunIcon } from "@chakra-ui/icons";
import { AppThemeGreen } from "../utils/constants";

interface SideNavigationProps {}

const SideNavigation: React.FC<SideNavigationProps> = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  return (
    <GridItem
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      area={"nav"}
      display="flex"
      flexDirection="column"
    >
      <Center h="70px" mb="20px">
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
                      !isActive ? { bg: `${AppThemeGreen.Theme}.50` } : {}
                    }
                    bg={isActive ? `${AppThemeGreen.Theme}.200` : "white"}
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
            !route.isMain && (
              <NavLink to={route.path} key={route.label}>
                {({ isActive }) => (
                  <Box
                    key={route.label}
                    h="64px"
                    borderRadius="lg"
                    mb="1"
                    cursor="pointer"
                    _hover={
                      !isActive ? { bg: `${AppThemeGreen.Theme}.50` } : {}
                    }
                    bg={isActive ? `${AppThemeGreen.Theme}.200` : "white"}
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
          _hover={{ bg: `${AppThemeGreen.Theme}.50` }}
          bg={isDarkMode ? `${AppThemeGreen.Theme}.200` : "white"}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          <Center h="64px">
            <VStack gap="0">
              <Box>
                <Icon as={SunIcon} boxSize={5} />
              </Box>
            </VStack>
          </Center>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default SideNavigation;
