import React from "react";
import EmptyState from "./EmptyState";

import { Icon, Button, Box } from "@chakra-ui/react";
import { MdOutlineWrongLocation } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <Box mt="100px">
      <EmptyState
        icon={<Icon as={MdOutlineWrongLocation} boxSize={20} />}
        title="404 Page not found"
        message="We didn't find a page that matches the address you navigated to."
        action={<Button onClick={goHome}>Take me home</Button>}
      />
    </Box>
  );
};

export default PageNotFound;
