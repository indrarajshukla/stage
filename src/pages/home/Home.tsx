import { Icon } from "@chakra-ui/react";
import React from "react";
import { MdOutlineHome } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import PageHeading from "../../components/PageHeading";
import AppBreadcrumb from "../../AppLayout/AppBreadcrumb";

const Home: React.FC = () => {
  return (
    <>
      <AppBreadcrumb />
      <PageHeading title={"Home"} />
      <EmptyState
        icon={<Icon as={MdOutlineHome} boxSize={20} />}
        title="Coming Soon!"
        message="We are working on this feature. Please check back later."
        // action={<Button leftIcon={<AddIcon />}>New Home</Button>}
      />
    </>
  );
};

export default Home;
