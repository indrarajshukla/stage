import { Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Destination, PipelineDestination, Source, fetchDataTypeTwo } from "../utils/apis";
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
      const response = await fetchDataTypeTwo<Source>(
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
        {destination && <ConnectorImage connectorType={(destination as Destination).type} size={8} />}

        <td>{pipelineDestination.name}</td>
      </Stack>
    </CustomTd>
  );
};

export default DestinationField;
