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
  Text,
  Switch,
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDownward, MdOutlineMoreVert } from "react-icons/md";
import { PipelineApiResponse, Pipeline, deleteResource } from "../utils/apis";
import SourceField from "./SourceField";
import DestinationField from "./DestinationField";
import { CustomTd } from "../utils/chakraUtils";

interface PipelineTableProps {
  data: PipelineApiResponse;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PhaseIndicator = (
  <CustomTd>
    <Box w="150px">
      <Stepper index={3} size="sx" colorScheme="blue">
        <Step>
          <StepIndicator border="2px" borderColor="gray.200">
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepIcon />}
              active={<StepIcon />}
            />
          </StepIndicator>

          <StepSeparator />
        </Step>
        <Step>
          <StepIndicator border="2px" borderColor="gray.200">
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepIcon />}
              active={<StepIcon />}
            />
          </StepIndicator>

          <StepSeparator />
        </Step>
        <Step>
          <StepIndicator border="2px" borderColor="gray.200">
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepIcon />}
              active={<StepIcon />}
            />
          </StepIndicator>

          <StepSeparator />
        </Step>
      </Stepper>
    </Box>
  </CustomTd>
);

const PipelineTable: React.FC<PipelineTableProps> = ({ data }) => {
  const handleDelete = async (id: number) => {
    const url = `/api/pipelines/${id}`;
    const result = await deleteResource(url);

    if (result.error) {
      console.error(result.error);
    } else {
      console.log("Resource deleted successfully", result.data);
    }
  };

  const onDeleteHandler = (id: number) => {
    handleDelete(id);
  };

  return (
    <TableContainer
      bg="white"
      borderRadius="lg"
      p="2"
      border="1px"
      borderColor="gray.200"
    >
      <Table variant="simple">
        <TableCaption>{`List of configured active pipeline.`}</TableCaption>
        <Thead>
          <Tr>
            <Th>
              <Stack direction="row" align="center" spacing={2}>
                <Text fontSize="xm">Name</Text>
                <Icon boxSize="4" as={MdArrowDownward} />
              </Stack>
            </Th>
            <Th>Source</Th>
            <Th>Destination</Th>
            <Th>Phase</Th>
            <Th>Enabled</Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((pipeline: Pipeline) => (
            <Tr key={pipeline.id}>
              <Td>{pipeline.name}</Td>
              <SourceField pipelineSource={pipeline.source} />
              <DestinationField pipelineDestination={pipeline.destination} />
              <Td>*</Td>
              <Td>
                <Switch size="md" isChecked isDisabled />
              </Td>
              <Td isNumeric>
                <Menu>
                  <MenuButton>
                    <MdOutlineMoreVert />
                  </MenuButton>
                  <MenuList>
                    <MenuItem isDisabled>Overview</MenuItem>
                    <MenuItem isDisabled>Edit</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={() => onDeleteHandler(pipeline.id)}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PipelineTable;
