import { Heading } from "@chakra-ui/react";
import React from "react";
import AppBreadcrumb from "../AppLayout/AppBreadcrumb";

interface PageHeaderProps {
  title: string;
  isPadded?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, isPadded }) => {
  return (
    <>
      <AppBreadcrumb />
      <Heading
        size="md"
        pb="4"
        pt="4"
        {...(isPadded ? { pr: "32", pl: "32" } : {})}
      >
        {title}
      </Heading>
      {/* <Text>Select a already configured destination from the list provided below or create a new destination. </Text> */}
    </>
  );
};

export default PageHeader;
