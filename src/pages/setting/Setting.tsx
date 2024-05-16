import { Icon } from "@chakra-ui/react";
import React from "react";
import { MdOutlineSettings } from "react-icons/md";
import EmptyState from "../../components/EmptyState";
import PageHeading from "../../components/PageHeading";

const Setting: React.FC = () => {
  return (
    <>
      <PageHeading title={"Setting"} />
      <EmptyState
        icon={<Icon as={MdOutlineSettings} boxSize={20} />}
        title="Coming Soon!"
        message="We are working on this feature. Please check back later."
        // action={<Button leftIcon={<AddIcon />}>New Setting</Button>}
      />
    </>
  );
};

export default Setting;
