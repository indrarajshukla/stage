import { Heading } from "@chakra-ui/react";
import React from "react";

interface PageHeadingProps {
  title: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <Heading size="md" pb="4">
      {title}
    </Heading>
  );
};

export default PageHeading;
