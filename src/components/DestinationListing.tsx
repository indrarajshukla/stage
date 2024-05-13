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
  Image,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDownward } from "react-icons/md";
import { CustomTd } from "../utils/chakraUtils";
import pubsub from "../assets/G_pubsub.png";
import NATS_stream from "../assets/NATS_stream.png";
import infinispan from "../assets/infinispan.png";
import apachePulsar from "../assets/apachePulsar.png";
import eventHub from "../assets/Azure-event-hub.png";
import { BsTags } from "react-icons/bs";
import { AppThemeGreen } from "../utils/constants";

interface DestinationListingProps {
  // Define the props for your component here
}

const DestinationListing: React.FC<DestinationListingProps> = () => {
  // Implement your component logic here

  return (
    <TableContainer
      bg="white"
      borderRadius="lg"
      p="2"
      border="1px"
      borderColor="gray.200"
    >
      <Table variant="simple">
        <TableCaption>List of configured active sink.</TableCaption>
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
          <Tr _hover={{ bg: `${AppThemeGreen.Theme}.50`, shadow: "dark-lg" }} cursor="pointer">
            <Td>
              {/* <Button variant="link" cursor="pointer">
                Mongo_Connector
              </Button> */}
              pub-sub_connector
            </Td>
            <CustomTd>
              <Stack direction="row" align="center" spacing={2}>
                <Image
                  p="1"
                  boxSize={8} // Adjust the box size as needed
                  objectFit="fill"
                  src={pubsub}
                  alt="Pub sub logo"
                />
                <Text fontSize="md">Pub-Sub</Text>
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
                &nbsp; 1
              </Badge>
            </Td>
            {/* <Td isNumeric>
              <Icon boxSize="5" as={MdOutlineMoreVert} />
            </Td> */}
          </Tr>
          <Tr _hover={{ bg: `${AppThemeGreen.Theme}.50`, shadow: "dark-lg" }} cursor="pointer">
            <Td>stream_connector</Td>
            <CustomTd>
              <Stack direction="row" align="center" spacing={2}>
                <Image
                  p="1"
                  boxSize={8} // Adjust the box size as needed
                  objectFit="contain"
                  src={NATS_stream}
                  alt="MySql logo"
                />
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
                &nbsp; 3
              </Badge>
            </Td>
            {/* <Td isNumeric>
              <Icon boxSize="5" as={MdOutlineMoreVert} />
            </Td> */}
          </Tr>
          <Tr _hover={{ bg: `${AppThemeGreen.Theme}.50`, shadow: "dark-lg" }} cursor="pointer">
            <Td>my_eventHub</Td>
            <CustomTd>
              <Stack direction="row" align="center" spacing={2}>
                <Image
                  p="1"
                  boxSize={8} // Adjust the box size as needed
                  objectFit="fill"
                  src={eventHub}
                  alt="Cassandra logo"
                />
                <Text fontSize="md">Azure Event Hub</Text>
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
                &nbsp; 1
              </Badge>
            </Td>
            {/* <Td isNumeric>
              <Icon boxSize="5" as={MdOutlineMoreVert} />
            </Td> */}
          </Tr>
          <Tr _hover={{ bg: `${AppThemeGreen.Theme}.50`, shadow: "dark-lg" }} cursor="pointer">
            <Td>apachePulsar_21</Td>
            <CustomTd>
              <Stack direction="row" align="center" spacing={2}>
                <Image
                  p="1"
                  boxSize={8} // Adjust the box size as needed
                  objectFit="fill"
                  src={apachePulsar}
                  alt="Cassandra logo"
                />
                <Text fontSize="md">Apache Pulsar</Text>
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
                &nbsp; 2
              </Badge>
            </Td>
            {/* <Td isNumeric>
              <Icon boxSize="5" as={MdOutlineMoreVert} />
            </Td> */}
          </Tr>
          <Tr _hover={{ bg: `${AppThemeGreen.Theme}.50`, shadow: "dark-lg" }} cursor="pointer">
            <Td>infinispan_2</Td>
            <CustomTd>
              <Stack direction="row" align="center" spacing={2}>
                <Image
                  p="1"
                  boxSize={8} // Adjust the box size as needed
                  objectFit="fill"
                  src={infinispan}
                  alt="NATS stream logo"
                />
                <Text fontSize="md">Infinispan</Text>
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
                &nbsp; 1
              </Badge>
            </Td>
            {/* <Td isNumeric>
              <Icon boxSize="5" as={MdOutlineMoreVert} />
            </Td> */}
          </Tr>
          <Tr _hover={{ bg: `${AppThemeGreen.Theme}.50`, shadow: "dark-lg" }} cursor="pointer">
            <Td>my_apachePulsar</Td>
            <CustomTd>
              <Stack direction="row" align="center" spacing={2}>
                <Image
                  p="1"
                  boxSize={8} // Adjust the box size as needed
                  objectFit="fill"
                  src={apachePulsar}
                  alt="apache pulsar logo"
                />
                <Text fontSize="md">Apache Pulsar</Text>
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
                &nbsp; 1
              </Badge>
            </Td>
            {/* <Td isNumeric>
              <Icon boxSize="5" as={MdOutlineMoreVert} />
            </Td> */}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DestinationListing;
