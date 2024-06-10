import { AddIcon } from "@chakra-ui/icons";
import { Button, Box, Icon } from "@chakra-ui/react";
import React from "react";
import Toolbar from "../../components/Toolbar";
import { useNavigate } from "react-router-dom";
import { Destination, fetchData } from "../../utils/apis";
import PageHeader from "../../components/PageHeader";
import EmptyState from "../../components/EmptyState";
import { MdLogin } from "react-icons/md";
import SourceSinkTable from "../../components/SourceSinkTable";
import { useQuery } from "react-query";

const Destinations: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/destination/catalog");
  };

  const {
    data: destinations = [],
    error,
    isLoading,
  } = useQuery<Destination[], Error>(
    "destinations",
    () => fetchData<Destination[]>("/api/destinations"),
    {
      refetchInterval: 7000,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <PageHeader title="Destination" isPadded={false} />
      {destinations.length > 0 ? (
        <Box>
          <Toolbar
            primaryAction={
              <Button leftIcon={<AddIcon />} onClick={navigateTo}>
                New destination
              </Button>
            }
          />
          <SourceSinkTable data={destinations} tableType="destination" />
        </Box>
      ) : (
        <EmptyState
          icon={<Icon as={MdLogin} boxSize={20} />}
          title="No source available"
          message="No source configured for this cluster, setup a source to get started."
          action={
            <Button leftIcon={<AddIcon />} onClick={navigateTo}>
              New destination
            </Button>
          }
        />
      )}
    </>
  );
};

export default Destinations;
