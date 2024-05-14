import React from "react";
import { Image } from "@chakra-ui/react";

import mongoDB from "../assets/MongoDB.png";
import cassandra from "../assets/Cassandra.png";
import mySql from "../assets/my-sql.png";
import postgreSql from "../assets/PostgreSQL.png";
import sqlServer from "../assets/sql-server.png";

interface ConnectorImageProps {
  connectorType: string;
}

const ConnectorImage: React.FC<ConnectorImageProps> = ({ connectorType }) => {
  let src = "";

  switch (true) {
    case connectorType.includes("mongo"):
      src = mongoDB;
      break;
    case connectorType.includes("postgre"):
      src = postgreSql;
      break;
    case connectorType.includes("cassandra"):
      src = cassandra;
      break;
    case connectorType.includes("mysql"):
      src = mySql;
      break;
    case connectorType.includes("sqlserver"):
      src = sqlServer;
      break;
    default:
      src = "";
      break;
  }

  return <Image boxSize={8} objectFit="fill" src={src} alt={connectorType} />;
};

export default ConnectorImage;
