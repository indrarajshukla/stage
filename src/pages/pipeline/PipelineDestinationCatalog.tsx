import { SearchIcon } from "@chakra-ui/icons";
import {
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
import React from "react";
import { MdAddCircleOutline } from "react-icons/md";

import rabbitMQ from "../../assets/RabbitMQ.png";
import pubsub from "../../assets/G_pubsub.png";
import NATS_stream from "../../assets/NATS_stream.png";
import infinispan from "../../assets/infinispan.png";
import rocketMq from "../../assets/Apache_RocketMQ.png";
import apachePulsar from "../../assets/apachePulsar.png";
import pubsub_lite from "../../assets/pub-sub-lite.png";
import kafka from "../../assets/kafka.png";
import eventHub from "../../assets/Azure-event-hub.png";
import pravega from "../../assets/pravega.webp";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

const PipelineDestinationCatalog: React.FC = () => {
  const navigate = useNavigate();

  const onCardClick = (destinationId: string) => {
    navigate(`/pipeline/create_pipeline/destination/new_destination/${destinationId}`);
  };
  return (
    <>
      <PageHeader
        title="Selected the type of destination you want to connect"
        isPadded
      />
      <Box pr="32" pl="32">
        <Flex pb="4">
          <Box>
            <InputGroup bg="white" width="450px">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input type="text" placeholder="Search" />
            </InputGroup>
          </Box>
          <Spacer />
          <Box>12 Connectors</Box>
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
              <Image objectFit="fill" src={apachePulsar} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">Apache pulsar</Heading>
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
              <Image objectFit="fill" src={rocketMq} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">Rocket MQ</Heading>
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
              <Image objectFit="fill" src={eventHub} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">Azure Event Hubs</Heading>
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
              <Image objectFit="fill" src={pubsub} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">Pub/Sub</Heading>
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
              <Image objectFit="fill" src={rabbitMQ} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">RabbitMQ</Heading>
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
              <Image objectFit="fill" src={NATS_stream} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">NATS Streaming</Heading>
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
              <Image objectFit="fill" src={kafka} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">Kafka</Heading>
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
              <Image objectFit="fill" src={infinispan} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">Infinispan</Heading>
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
              <Image objectFit="fill" src={pubsub_lite} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">Pub/Sub Lite</Heading>
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
              <Image objectFit="fill" src={pravega} alt="Caffe Latte" />
            </Box>

            <Stack>
              <CardBody>
                <Heading size="md">Pravega</Heading>
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

export default PipelineDestinationCatalog;
