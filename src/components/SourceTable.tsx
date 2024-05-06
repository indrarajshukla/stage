import { ArrowDownIcon } from '@chakra-ui/icons';
import { TableContainer, Table, TableCaption, Thead, Tr, Th, Stack, Icon, Tbody, Td, Badge, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { MdArrowDownward, MdOutlineMoreVert } from 'react-icons/md';
import { CustomTd } from '../utils/chakraUtils';
import mongoDB from "../assets/MongoDB.png";
import cassandra from "../assets/Cassandra.png";
import mySql from "../assets/my-sql.png";

interface SourceTableProps {
    // Define the props for your component here
}

const SourceTable: React.FC<SourceTableProps> = () => {
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
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>
                <Stack direction="row" align="center" spacing={2}>
                  <Text fontSize="xm">Name</Text>
                  <Icon boxSize="4" as={MdArrowDownward} />
                </Stack>
              </Th>
              <Th>Type</Th>
              <Th><Stack direction="row" align="center" spacing={2}>
                  <Text fontSize="xm">Active</Text>
                  <Icon boxSize="4" as={ArrowDownIcon} />
                </Stack></Th>
              <Th isNumeric></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Mongo_Connector</Td>
              <CustomTd>
                <Stack direction="row" align="center" spacing={2}>
                  <Image
                    boxSize={8} // Adjust the box size as needed
                    objectFit="fill"
                    src={mongoDB}
                    alt="MongoDB logo"
                  />
                  <Text fontSize="md">MongoDB</Text>
                </Stack>
              </CustomTd>
              <Td>
                <Badge variant="outline" colorScheme="blue">
                  2
                </Badge>
              </Td>
              <Td isNumeric>
                <Icon boxSize="5" as={MdOutlineMoreVert} />
              </Td>
            </Tr>
            <Tr>
              <Td>MySql_my_connector</Td>
              <CustomTd>
                <Stack direction="row" align="center" spacing={2}>
                  <Image
                    boxSize={8} // Adjust the box size as needed
                    objectFit="contain"
                    src={mySql}
                    alt="MySql logo"
                  />
                  <Text fontSize="md">MySql</Text>
                </Stack>
              </CustomTd>
              <Td>
                <Badge colorScheme="blue" borderRadius="lg">
                  1
                </Badge>
              </Td>
              <Td isNumeric>
                <Icon boxSize="5" as={MdOutlineMoreVert} />
              </Td>
            </Tr>
            <Tr>
              <Td>my_cassandra</Td>
              <CustomTd>
                <Stack direction="row" align="center" spacing={2}>
                  <Image
                    boxSize={8} // Adjust the box size as needed
                    objectFit="fill"
                    src={cassandra}
                    alt="Cassandra logo"
                  />
                  <Text fontSize="md">Cassandra</Text>
                </Stack>
              </CustomTd>
              <Td>
                <Badge
                  variant="outline"
                  borderRadius="lg"
                  colorScheme="blue"
                >
                  2
                </Badge>
              </Td>
              <Td isNumeric>
                <Icon boxSize="5" as={MdOutlineMoreVert} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

    );
};

export default SourceTable;