import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Stack,
  Icon,
  Tbody,
  Td,
  Badge,
  Text,
  Box,
  Flex,
  Link,
  Spacer,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDownward } from "react-icons/md";
import { BsTags } from "react-icons/bs";
import { API_URL, AppThemeGreen } from "../utils/constants";
import { Destination, Source, fetchData } from "../utils/apis";
import ConnectorImage from "./ConnectorImage";
import { getConnectorTypeName } from "../utils/helpers";
import { useQuery } from "react-query";

interface PipelineSelectionListingProps {
  onSelection: (selection: Source | Destination) => void;
  type: "source" | "destination";
}

const PipelineSelectionListing: React.FC<PipelineSelectionListingProps> = ({
  onSelection,
  type,
}) => {
  const { colorMode } = useColorMode();
  const {
    data = [],
    error,
    isLoading,
  } = useQuery<Source[], Error>(
    type === "source" ? "sourcesListing" : "destinationsListing",
    () =>
      fetchData<Source[] | Destination[]>(
        type === "source"
          ? `${API_URL}/api/sources`
          : `${API_URL}/api/destinations`
      )
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Flex minWidth="max-content" alignItems="center">
        <Spacer />
        <Box pr="4" pb="2">
          <Link
            href={type === "source" ? "/source" : "/destination" + "/catalog"}
          >
            <Button variant="link">
              Create a new {type === "source" ? "source" : "destination"}
            </Button>
          </Link>
        </Box>
      </Flex>
      <TableContainer
        bg={colorMode !== "dark" ? "white" : "gray.700"}
        borderRadius="lg"
        p="2"
        border="1px"
        borderColor={colorMode !== "dark" ? "gray.200" : "gray.600"}
      >
        <Table variant="simple">
          <TableCaption>List of configured active source.</TableCaption>
          <Thead>
            <Tr>
              <Th>
                <Stack direction="row" align="center" spacing={2}>
                  <Text fontSize="xm">Name</Text>
                  <Icon boxSize="4" as={MdArrowDownward} />
                </Stack>
              </Th>
              <Th>Type</Th>
              <Th>
                <Stack direction="row" align="center" spacing={2}>
                  <Text fontSize="xm">Active</Text>
                  <Icon boxSize="4" as={ArrowDownIcon} />
                </Stack>
              </Th>
              {/* <Th isNumeric></Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((source: Source | Destination) => (
              <Tr
                key={source.id}
                _hover={{
                  bg:
                    colorMode === "dark"
                      ? "gray.600"
                      : `${AppThemeGreen.Theme}.50`,
                  shadow: "md",
                }}
                cursor="pointer"
                onClick={() => onSelection(source)}
              >
                <Td>{source.name}</Td>
                <Td>
                  <Stack direction="row" align="center" spacing={2}>
                    <ConnectorImage connectorType={source.type} size={8} />
                    <Text fontSize="md">
                      {getConnectorTypeName(source.type)}
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  <Badge
                    variant="outline"
                    borderRadius="lg"
                    colorScheme="blue"
                    pl="2"
                    pr="2"
                    pt="1"
                    pb="1"
                    cursor="pointer"
                  >
                    <Icon as={BsTags} />
                    &nbsp; 0
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PipelineSelectionListing;
