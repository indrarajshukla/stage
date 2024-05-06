import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PageHeading from "../../components/PageHeading";
import { MdAddCircleOutline, MdLogout } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import mongoDB from "../../assets/MongoDB.png";
import cassandra from "../../assets/Cassandra.png";
import mySql from "../../assets/my-sql.png";
import postgreSql from "../../assets/PostgreSQL.png";
import sqlServer from "../../assets/sql-server.png";

const Source: React.FC = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const updateIsEmpty = () => {
    setIsEmpty(!isEmpty);
  };

  return (
    <>
      {isEmpty ? (
        <>
          <PageHeading title={"Source"} />
          <EmptyState
            icon={<Icon as={MdLogout} boxSize={20} />}
            title="No source available"
            message="No source configured for this cluster, setup a source to get started."
            action={
              <Button leftIcon={<AddIcon />} onClick={updateIsEmpty}>
                New source
              </Button>
            }
          />
        </>
      ) : (
        <>
          <Heading size="md" pb="4" pt="4" pr="32" pl="32">
            Selected the type of source you want to connect
          </Heading>
          <Box pr="32" pl="32">
            <Flex mt="4" pb="4">
              <Box>
                <InputGroup bg="white" width="450px">
                  <InputLeftElement pointerEvents="none">
                    <SearchIcon color="gray.300" />
                  </InputLeftElement>
                  <Input type="text" placeholder="Search" />
                </InputGroup>
              </Box>
              <Spacer />
              <Box>5 Connectors</Box>
            </Flex>
            <SimpleGrid columns={2} spacing={6}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                cursor="pointer"
                _hover={{ boxShadow: "md" }}
              >
                <Box
                  width="70px"
                  pl="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image objectFit="fill" src={mongoDB} alt="Caffe Latte" />
                </Box>

                <Stack>
                  <CardBody>
                    <Heading size="md">MongoDB</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                cursor="pointer"
                _hover={{ boxShadow: "md" }}
              >
                <Box
                  width="70px"
                  pl="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image objectFit="fill" src={sqlServer} alt="Caffe Latte" />
                </Box>

                <Stack>
                  <CardBody>
                    <Heading size="md">SQL Server</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                cursor="pointer"
                _hover={{ boxShadow: "md" }}
              >
                <Box
                  width="70px"
                  pl="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image objectFit="fill" src={postgreSql} alt="Caffe Latte" />
                </Box>

                <Stack>
                  <CardBody>
                    <Heading size="md">PostgreSQL</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                cursor="pointer"
                _hover={{ boxShadow: "md" }}
              >
                <Box
                  width="70px"
                  pl="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image objectFit="fill" src={cassandra} alt="Caffe Latte" />
                </Box>

                <Stack>
                  <CardBody>
                    <Heading size="md">Cassandra</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                cursor="pointer"
                _hover={{ boxShadow: "md" }}
              >
                <Box
                  width="70px"
                  pl="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image objectFit="fill" src={mySql} alt="Caffe Latte" />
                </Box>

                <Stack>
                  <CardBody>
                    <Heading size="md">MySql</Heading>
                    <Text py="2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                cursor="pointer"
                _hover={{ boxShadow: "md" }}
              >
                <Box
                  width="70px"
                  pl="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon
                    as={MdAddCircleOutline}
                    boxSize="12"
                    color="green.500"
                  />
                </Box>

                <Stack>
                  <CardBody>
                    <Heading size="md" color="green.500">
                      Request connector
                    </Heading>
                    <Text py="2">
                      Din't find what you were looking for, request a new source
                      connector.
                    </Text>
                  </CardBody>
                </Stack>
              </Card>
            </SimpleGrid>
          </Box>
        </>
      )}
    </>
  );
};

export default Source;
