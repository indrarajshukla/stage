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
import { Source, fetchData } from "../utils/apis";
import ConnectorImage from "./ConnectorImage";

interface SourceListingProps {
  onSourceSelection: (source: Source) => void;
}

const SourceListing: React.FC<SourceListingProps> = ({ onSourceSelection }) => {
  const [sources, setSources] = useState<Source[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSources = async () => {
      setIsLoading(true);
      const response = await fetchData<Source[]>("/api/sources");

      if (response.error) {
        setError(response.error);
      } else {
        setSources(response.data || []);
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
          {sources.map((source: Source) => (
            <Tr
              key={source.id}
              _hover={{ bg: `${AppThemeGreen.Theme}.50`, shadow: "lg" }}
              cursor="pointer"
              onClick={() => onSourceSelection(source)}
            >
              <Td>{source.name}</Td>
              <CustomTd>
                <Stack direction="row" align="center" spacing={2}>
                  <ConnectorImage connectorType={source.type} />
                  <Text fontSize="md">NATS Stream</Text>
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

export default SourceListing;
