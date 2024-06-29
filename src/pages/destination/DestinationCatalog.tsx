/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import destinationCatalog from "../../mocks/data/DestinationCatalog.json";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ConnectorImage from "../../components/ConnectorImage";
import SearchInput from "../../components/SearchInput";
import _, { debounce } from "lodash";

const DestinationCatalog: React.FC = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const [destinationTypes, setDestinationTypes] = useState<any[]>([]);

  const [searchResult, setSearchResult] = React.useState<any[]>([]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  useEffect(() => {
    setDestinationTypes(destinationCatalog);
    setSearchResult(destinationCatalog);
  }, []);

  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      const filteredSource = _.filter(destinationTypes, function (o) {
        return o.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setSearchResult(filteredSource);
    }, 700),
    [destinationTypes]
  );

  const onSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
      debouncedSearch(e.target.value);
    },
    [debouncedSearch]
  );

  const onCardClick = (destinationId: string) => {
    navigate(`/destination/create_destination/${destinationId}`);
  };
  return (
    <>
      <PageHeader
        title="Selected the type of destination you want to connect"
        isPadded
      />
      <Box pr="32" pl="32">
        <Flex pb="4">
          <SearchInput
            placeholder="Search"
            searchInput={searchQuery}
            onSearch={onSearch}
          />
          <Spacer />
          <Box>
            {searchQuery.length > 0
              ? searchResult.length
              : destinationTypes.length}{" "}
            Connectors
          </Box>
        </Flex>
        <SimpleGrid columns={2} spacing={6}>
          {(searchQuery.length > 0 ? searchResult : destinationTypes).map(
            (destinationType) => (
              <Card
                key={destinationType.type}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                cursor="pointer"
                _hover={{ boxShadow: "md" }}
                onClick={() => onCardClick(destinationType.id)}
                bg={colorMode === "dark" ? "gray.700" : ""}
              >
                <Box
                  width="70px"
                  pl="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <ConnectorImage connectorType={destinationType.type} />
                </Box>

                <Stack>
                  <CardBody>
                    <Heading size="md">{destinationType.name}</Heading>
                    <Text py="2">{destinationType.description}</Text>
                  </CardBody>
                </Stack>
              </Card>
            )
          )}
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            cursor="pointer"
            _hover={{ boxShadow: "md" }}
            bg={colorMode === "dark" ? "gray.700" : ""}
          >
            <Box
              width="70px"
              pl="4"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={MdAddCircleOutline} boxSize="12" color="green.500" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md" color="green.500">
                  Request connector
                </Heading>
                <Text py="2">
                  Didn't find what you were looking for, request a new
                  destination connector.
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default DestinationCatalog;
