import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

const AppBreadcrumb: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.split("/").length > 1 ? (
        <Breadcrumb
          pb="2"
          spacing="8px"
          fontSize="sm"
          separator={<MdOutlineChevronRight color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Source</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Current source</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <></>
      )}
    </>
  );
};

export default AppBreadcrumb;
