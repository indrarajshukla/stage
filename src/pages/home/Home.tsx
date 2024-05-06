import { AddIcon } from "@chakra-ui/icons";
import { Icon, Button } from "@chakra-ui/react";
import React from "react";
import { MdStorage } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import PageHeading from "../../components/PageHeading";
import AppBreadcrumb from "../../AppLayout/AppBreadcrumb";

const Home: React.FC = () => {
  return (
    <>
      <AppBreadcrumb />
      <PageHeading title={"Home"} />
      <EmptyState
        icon={<Icon as={MdStorage} boxSize={20} />}
        title="No source available"
        message="No source configured for this cluster, add a source to start
        collection change data event from."
        action={<Button leftIcon={<AddIcon />}>New Home</Button>}
      />
    </>
  );
};

export default Home;
