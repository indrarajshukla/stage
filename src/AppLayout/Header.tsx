import {
  GridItem,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";

const AppHeader: React.FC = () => {
  return (
    <GridItem p="4" bg="#F8FAF6" area={"header"}>
      <Flex>
        <Breadcrumb
          spacing="8px"
          fontSize="sm"
          separator={<MdOutlineChevronRight color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Spacer />
        <Avatar  size="sm" bg="grey" src="https://bit.ly/dan-abramov-broken" />
      </Flex>
    </GridItem>
  );
};

export default AppHeader;
