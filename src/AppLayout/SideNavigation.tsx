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
import {
  MdOutlineHome,
  MdLogout,
  MdLogin,
  MdSwapCalls,
  MdOutlineSettings,
} from "react-icons/md";

interface SideNavigationProps {}

const SideNavigation: React.FC<SideNavigationProps> = () => {
  const [activeNav, setActiveNav] = useState("home");

  const updateActiveNav = (nav: string) => {
    setActiveNav(nav);
  };

  return (
    <GridItem
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      area={"nav"}
      display="flex"
      flexDirection="column"
    >
      <Center h="70px" mb="50px">
        <Image
          boxSize="35px"
          objectFit="cover"
          src={debeziumLogo}
          alt="Debezium logo"
        />
      </Center>

      <Flex direction="column" pr="1" pl="1" pb="4" flex="1">
        <Box
          h="64px"
          borderRadius="lg"
          mb="1"
          cursor="pointer"
          _hover={activeNav !== "home" ? { bg: "green.100" } : {}}
          bg={activeNav === "home" ? "green.300" : "white"}
          onClick={() => updateActiveNav("home")}
        >
          <Center h="64px">
            <VStack gap="0">
              <Box>
                <Icon as={MdOutlineHome} boxSize={7} />
              </Box>
              <Box>
                <Text fontSize="xs">Home</Text>
              </Box>
            </VStack>
          </Center>
        </Box>
        <Box
          h="64px"
          borderRadius="lg"
          mb="1"
          cursor="pointer"
          _hover={activeNav !== "source" ? { bg: "green.100" } : {}}
          bg={activeNav === "source" ? "green.300" : "white"}
          onClick={() => updateActiveNav("source")}
        >
          <Center h="64px">
            <VStack gap="0">
              <Box>
                <Icon as={MdLogout} boxSize={6} />
              </Box>
              <Box>
                <Text fontSize="xs">Source</Text>
              </Box>
            </VStack>
          </Center>
        </Box>
        <Box
          _hover={activeNav !== "sink" ? { bg: "green.100" } : {}}
          cursor="pointer"
          borderRadius="lg"
          mb="1"
          h="64px"
          bg={activeNav === "sink" ? "green.300" : "white"}
          onClick={() => updateActiveNav("sink")}
        >
          <Center h="64px">
            <VStack gap="0">
              <Box>
                <Icon as={MdLogin} boxSize={6} />
              </Box>
              <Box>
                <Text fontSize="xs">Sink</Text>
              </Box>
            </VStack>
          </Center>
        </Box>
        <Box
          h="64px"
          borderRadius="lg"
          mb="1"
          cursor="pointer"
          _hover={activeNav !== "pipeline" ? { bg: "green.100" } : {}}
          bg={activeNav === "pipeline" ? "green.300" : "white"}
          onClick={() => updateActiveNav("pipeline")}
        >
          <Center h="64px">
            <VStack gap="0">
              <Box>
                <Icon as={MdSwapCalls} boxSize={6} />
              </Box>
              <Box>
                <Text fontSize="xs">Pipeline</Text>
              </Box>
            </VStack>
          </Center>
        </Box>

        <Spacer />

        <Box
          h="64px"
          borderRadius="lg"
          mb="1"
          cursor="pointer"
          _hover={activeNav !== "setting" ? { bg: "green.100" } : {}}
          bg={activeNav === "setting" ? "green.300" : "white"}
          onClick={() => updateActiveNav("setting")}
        >
          <Center h="64px">
            <VStack gap="0">
              <Box>
                <Icon as={MdOutlineSettings} boxSize={6} />
              </Box>
              <Box>
                <Text fontSize="xs">Setting</Text>
              </Box>
            </VStack>
          </Center>
        </Box>
      </Flex>
    </GridItem>
  );
};

export default SideNavigation;
