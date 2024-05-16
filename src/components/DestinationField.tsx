import { Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PipelineDestination, Source, fetchData } from "../utils/apis";
import ConnectorImage from "./ConnectorImage";
import { CustomTd } from "../utils/chakraUtils";

interface DestinationFieldProps {
  pipelineDestination: PipelineDestination;
}

const DestinationField: React.FC<DestinationFieldProps> = ({
  pipelineDestination,
}) => {
  const [destination, setDestination] = useState<Source>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestination = async () => {
      setIsLoading(true);
      const response = await fetchData<Source>(
        `/api/destinations/${pipelineDestination.id}`
      );

      if (response.error) {
        setError(response.error);
      } else {
        setDestination(response.data);
      }

      setIsLoading(false);
    };

    fetchDestination();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CustomTd>
      <Stack direction="row" align="center" spacing={2}>
        {destination && <ConnectorImage connectorType={destination.type} />}
        <Text fontSize="md">{pipelineDestination.name}</Text>
      </Stack>
    </CustomTd>
  );
};

export default DestinationField;
