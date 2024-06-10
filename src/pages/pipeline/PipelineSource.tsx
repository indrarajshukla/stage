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
  Image,
} from "@chakra-ui/react";
import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import mongoDB from "../../assets/MongoDB.png";
import cassandra from "../../assets/Cassandra.png";
import mySql from "../../assets/my-sql.png";
import postgreSql from "../../assets/PostgreSQL.png";
import sqlServer from "../../assets/sql-server.png";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import SearchInput from "../../components/SearchInput";

const PipelineSource: React.FC = () => {
  const navigate = useNavigate();

  const onCardClick = (sourceId: string) => {
    navigate(`/source/create_source/${sourceId}`);
  };
  return (
    <>
      <PageHeader
        title="Selected the type of source you want to connect"
        isPadded
      />
      <Box pr="32" pl="32">
        <Flex pb="4">
          <SearchInput placeholder="Search" />
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
            onClick={() => onCardClick("mongoDB")}
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
            onClick={() => onCardClick("sqlServer")}
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
            onClick={() => onCardClick("postgreSql")}
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
            onClick={() => onCardClick("cassandra")}
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
            onClick={() => onCardClick("mySql")}
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
              <Icon as={MdAddCircleOutline} boxSize="12" color="green.500" />
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
  );
};

export default PipelineSource;
