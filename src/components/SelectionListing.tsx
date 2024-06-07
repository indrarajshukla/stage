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
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDownward } from "react-icons/md";
import { CustomTd } from "../utils/chakraUtils";
import { BsTags } from "react-icons/bs";
import { AppThemeGreen } from "../utils/constants";
import { Destination, Source, fetchData } from "../utils/apis";
import ConnectorImage from "./ConnectorImage";
import { getConnectorTypeName } from "../utils/helpers";
import { useQuery } from "react-query";

interface SelectionListingProps {
  onSelection: (selection: Source | Destination) => void;
  type: "source" | "destination";
}

const SelectionListing: React.FC<SelectionListingProps> = ({
  onSelection,
  type,
}) => {
  const {
    data = [],
    error,
    isLoading,
  } = useQuery<Source[], Error>(
    type === "source" ? "sourcesListing" : "destinationsListing",
    () =>
      fetchData<Source[] | Destination[]>(
        type === "source" ? "/api/sources" : "/api/destinations"
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
            color="teal.500"
            href={type === "source" ? "/source" : "/destination" + "/catalog"}
          >
            Create a new {type === "source" ? "source" : "destination"}
          </Link>
        </Box>
      </Flex>
      <TableContainer
        bg="white"
        borderRadius="lg"
        p="2"
        border="1px"
        borderColor="gray.200"
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
                _hover={{ bg: `${AppThemeGreen.Theme}.50`, shadow: "lg" }}
                cursor="pointer"
                onClick={() => onSelection(source)}
              >
                <Td>{source.name}</Td>
                <CustomTd>
                  <Stack direction="row" align="center" spacing={2}>
                    <ConnectorImage connectorType={source.type} size={8} />
                    <Text fontSize="md">
                      {getConnectorTypeName(source.type)}
                    </Text>
                  </Stack>
                </CustomTd>
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

export default SelectionListing;
