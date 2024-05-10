/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Flex,
  Text,
  Spacer,
  FormControl,
  FormLabel,
  Switch,
  Icon,
  Image,
  Input,
  FormHelperText,
  Grid,
  GridItem,
  Button,
  Center,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCodeSquare } from "react-icons/bs";
import { AppThemeGreen } from "../../utils/constants";
import postgreSql from "../../assets/PostgreSQL.png";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import PageHeader from "../../components/PageHeader";
import CustomFlow from "../../components/CreationFlow";

const CreateSource: React.FC = () => {
  const [isSmartEditor, setIsSmartEditor] = useState(false);
  return (
    <>
      <PageHeader title="Create source" isPadded />
      <Box mr="32" ml="32" bg="white" borderRadius="lg" p="4" shadow="md">
        <Flex borderBottom="1px solid" pb="1" >
          <Box>
            <Text fontSize="md">
              Fill the form below or use the smart editor to setup a new source
              connector.
            </Text>
          </Box>
          <Spacer />
          <Box>
            <FormControl display="flex" alignItems="center">
              <FormLabel>
                <Flex align="center">
                  <Icon as={BsCodeSquare} w={5} h={5} mr="2" />
                  Smart editor
                </Flex>
              </FormLabel>
              <Switch
                id="smart-editor"
                isChecked={isSmartEditor}
                onChange={(e) => setIsSmartEditor(e.target.checked)}
              />
            </FormControl>
          </Box>
        </Flex>
        {!isSmartEditor ? (
          <>
            <Box pt="2">
              <Text fontSize="md">1. Capture details</Text>
              <Box
                bg={`${AppThemeGreen.Background}`}
                mt="1"
                pr="3"
                pl="3"
                pb="3"
                pt="2"
                borderRadius="lg"
              >
                <FormControl isRequired>
                  <FormLabel>Source type</FormLabel>
                  <Box
                    width="50px"
                    // pl="4"
                    // display="flex"
                    // alignItems="center"
                    // justifyContent="center"
                  >
                    <Image
                      objectFit="fill"
                      src={postgreSql}
                      alt="postgre Sql"
                    />
                  </Box>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Source name</FormLabel>
                  <Input type="text" bg="white" />
                </FormControl>
                <FormControl>
                  <FormLabel>Detail</FormLabel>
                  <Input type="text" bg="white" />
                  <FormHelperText>
                    Add a one liner to describe your source or what you plan to
                    capture.
                  </FormHelperText>
                </FormControl>
              </Box>
            </Box>
            <Box pt="2">
              <Text fontSize="md">2. Configuration properties</Text>
              <Box
                bg={`${AppThemeGreen.Background}`}
                mt="1"
                pr="3"
                pl="3"
                pb="3"
                pt="2"
                borderRadius="lg"
              >
                <Grid gap={6} templateColumns="5.5fr 5.5fr 1fr" pb="4">
                  <GridItem>
                    <FormLabel>
                      <Flex align="center">
                        mongodb.ssl.enabled
                        <Center
                          ml="4"
                          bg="white"
                          w={8}
                          h={8}
                          borderRadius="md"
                          cursor="pointer"
                        >
                          <Icon as={EditIcon} w={5} h={5} />
                        </Center>
                      </Flex>
                    </FormLabel>
                  </GridItem>
                  <GridItem>
                    <Input
                      type="text"
                      bg="white"
                      placeholder="Property value"
                    />
                  </GridItem>
                  <GridItem>
                    <Center height="100%">
                      <Tooltip label="Delete property" aria-label="A tooltip">
                        <Center
                          bg="white"
                          height="100%"
                          width="50px"
                          borderRadius="md"
                          cursor="pointer"
                        >
                          <DeleteIcon />
                        </Center>
                      </Tooltip>
                    </Center>
                  </GridItem>
                </Grid>
                <Grid gap={6} templateColumns="5.5fr 5.5fr 1fr" pb="4">
                  <GridItem>
                    <Input type="text" bg="white" placeholder="Property key" />
                  </GridItem>
                  <GridItem>
                    <Input
                      type="text"
                      bg="white"
                      placeholder="Property value"
                    />
                  </GridItem>
                  <GridItem>
                    <Center height="100%">
                      <Tooltip label="Delete property" aria-label="A tooltip">
                        <Center
                          bg="white"
                          height="100%"
                          width="50px"
                          borderRadius="md"
                          cursor="pointer"
                        >
                          <DeleteIcon />
                        </Center>
                      </Tooltip>
                    </Center>
                  </GridItem>
                </Grid>
                <Button leftIcon={<AddIcon />} variant="outline" mb="4">
                  {" "}
                  Add property
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <Box m="2" border="1px" borderColor="gray.500" height="600px">
            <CustomFlow />
          </Box>
        )}

        <Flex pt="4">
          <Box>
            <Button variant="outline">Cancel</Button>
          </Box>
          <Spacer />
          <Box>
            <Button variant="solid">Create source</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default CreateSource;
