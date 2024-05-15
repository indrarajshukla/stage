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
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDownward, MdOutlineMoreVert } from "react-icons/md";
import { CustomTd } from "../utils/chakraUtils";
import { Source, SourceApiResponse } from "../utils/apis";
import { BsTags } from "react-icons/bs";
import ConnectorImage from "./ConnectorImage";
import { getConnectorTypeName } from "../utils/helpers";

interface SourceSinkTableProps {
  tableType: "source" | "destination";
  data: SourceApiResponse;
}

const SourceSinkTable: React.FC<SourceSinkTableProps> = ({
  data,
  tableType,
}) => {
  return (
    <TableContainer
      bg="white"
      borderRadius="lg"
      p="2"
      border="1px"
      borderColor="gray.200"
    >
      <Table variant="simple">
        <TableCaption>{`List of configured active ${tableType}.`}</TableCaption>
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
            <Th isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((source: Source) => (
            <Tr key={source.id}>
              <Td>{source.name}</Td>
              <CustomTd>
                <Stack direction="row" align="center" spacing={2}>
                  <ConnectorImage connectorType={source.type} />
                  <Text fontSize="md">{getConnectorTypeName(source.type)}</Text>
                </Stack>
              </CustomTd>
              <Td>
                <Tooltip label={`Used in 0 pipeline`}>
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
                </Tooltip>
              </Td>
              <Td isNumeric>
                <Icon boxSize="5" as={MdOutlineMoreVert} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SourceSinkTable;
