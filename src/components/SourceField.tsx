import { Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PipelineSource, Source, fetchData } from "../utils/apis";
import ConnectorImage from "./ConnectorImage";
import { CustomTd } from "../utils/chakraUtils";

interface SourceFieldProps {
  pipelineSource: PipelineSource;
}

const SourceField: React.FC<SourceFieldProps> = ({ pipelineSource }) => {
  const [source, setSource] = useState<Source>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSources = async () => {
      setIsLoading(true);
      const response = await fetchData<Source>(
        `/api/sources/${pipelineSource.id}`
      );

      if (response.error) {
        setError(response.error);
      } else {
        setSource(response.data);
      }

      setIsLoading(false);
    };

    fetchSources();
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
        {source && <ConnectorImage connectorType={source.type} />}
        <Text fontSize="md">{pipelineSource.name}</Text>
      </Stack>
    </CustomTd>
  );
};

export default SourceField;
