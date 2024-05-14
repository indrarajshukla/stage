import React from "react";
import { Image } from "@chakra-ui/react";

import mongoDB from "../assets/MongoDB.png";
import cassandra from "../assets/Cassandra.png";
import mySql from "../assets/my-sql.png";
import postgreSql from "../assets/PostgreSQL.png";
import sqlServer from "../assets/sql-server.png";

interface CatalogImageProps {
  type: string;
}

const CatalogImage: React.FC<CatalogImageProps> = ({ type }) => {
  let src = "";

  switch (true) {
    case type.includes("mongo"):
      src = mongoDB;
      break;
    case type.includes("postgre"):
      src = postgreSql;
      break;
    case type.includes("cassandra"):
      src = cassandra;
      break;
    case type.includes("mysql"):
      src = mySql;
      break;
    case type.includes("sqlserver"):
      src = sqlServer;
      break;
    default:
      src = "";
      break;
  }

  return <Image objectFit="fill" src={src} alt={type} />;
};

export default CatalogImage;
