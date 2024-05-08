import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

const AppBreadcrumb: React.FC = () => {
  const location = useLocation();

  const appBreadcrumb = (route: string) => {
    switch (true) {
      case route === "/":
        return (
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
        );
      case route === "/source/catalog":
        return (
          <Breadcrumb
            pb="2"
            spacing="8px"
            fontSize="sm"
            separator={<MdOutlineChevronRight color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/source">Source</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Catalog</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        );
      case route.includes("/source/create_source"):
        return (
          <Breadcrumb
            pb="2"
            spacing="8px"
            fontSize="sm"
            separator={<MdOutlineChevronRight color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/source">Source</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/source/catalog">Catalog</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Create source</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        );
      case route === "/destination/catalog":
        return (
          <Breadcrumb
            pb="2"
            spacing="8px"
            fontSize="sm"
            separator={<MdOutlineChevronRight color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/destination">Destination</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Catalog</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        );
      case route.includes("/destination/create_destination"):
        return (
          <Breadcrumb
            pb="2"
            spacing="8px"
            fontSize="sm"
            separator={<MdOutlineChevronRight color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/destination">Destination</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/destination/catalog">
                Catalog
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Create Destination</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        );
    }
  };
  return <>{appBreadcrumb(location.pathname)}</>;
};

export default AppBreadcrumb;
