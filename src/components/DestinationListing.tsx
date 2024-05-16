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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdArrowDownward } from "react-icons/md";
import { CustomTd } from "../utils/chakraUtils";
import { BsTags } from "react-icons/bs";
import { AppThemeGreen } from "../utils/constants";
import { Destination, fetchData } from "../utils/apis";
import ConnectorImage from "./ConnectorImage";
import { getConnectorTypeName } from "../utils/helpers";

interface DestinationListingProps {
  onDestinationSelection: (destination: Destination) => void;
}

const DestinationListing: React.FC<DestinationListingProps> = ({
  onDestinationSelection,
}) => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSources = async () => {
      setIsLoading(true);
      const response = await fetchData<Destination[]>("/api/destinations");

      if (response.error) {
        setError(response.error);
      } else {
        setDestinations(response.data || []);
      }

      setIsLoading(false);
    };

    fetchSources();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <TableContainer
      bg="white"
      borderRadius="lg"
      p="2"
      border="1px"
      borderColor="gray.200"
    >
      <Table variant="simple">
        <TableCaption>List of configured active destination.</TableCaption>
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
          {destinations.map((destination: Destination) => (
            <Tr
              key={destination.id}
              _hover={{ bg: `${AppThemeGreen.Theme}.50`, shadow: "lg" }}
              cursor="pointer"
              onClick={() => onDestinationSelection(destination)}
            >
              <Td>{destination.name}</Td>
              <CustomTd>
                <Stack direction="row" align="center" spacing={2}>
                  <ConnectorImage connectorType={destination.type} />
                  <Text fontSize="md">
                    {getConnectorTypeName(destination.type)}
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
  );
};

export default DestinationListing;
