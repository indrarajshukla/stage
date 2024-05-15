import React from "react";
import { Image } from "@chakra-ui/react";

import mongoDB from "../assets/MongoDB.png";
import cassandra from "../assets/Cassandra.png";
import mySql from "../assets/my-sql.png";
import postgreSql from "../assets/PostgreSQL.png";
import sqlServer from "../assets/sql-server.png";
import apachePulsar from "../assets/MongoDB.png";
import rocketMq from "../assets/apachePulsar.png";
import eventHub from "../assets/Azure-event-hub.png";
import pubsub from "../assets/G_pubsub.png";
import rabbitMq from "../assets/RabbitMQ.png";
import natsStreaming from "../assets/NATS_stream.png";
import kafka from "../assets/Apache_kafka.png";
import infinispan from "../assets/infinispan.png";
import pubsubLite from "../assets/pub-sub-lite.png";
import pravega from "../assets/pravega.webp";

interface ConnectorTypeImageProps {
  type: string;
}

const ConnectorTypeImage: React.FC<ConnectorTypeImageProps> = ({ type }) => {
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
    case type.includes("apachepulsar"):
      src = apachePulsar;
      break;
    case type.includes("rocketmq"):
      src = rocketMq;
      break;
    case type.includes("eventhub"):
      src = eventHub;
      break;
    case type.includes("pubsub"):
      src = pubsub;
      break;
    case type.includes("raabbitmq"):
      src = rabbitMq;
      break;
    case type.includes("natsstreaming"):
      src = natsStreaming;
      break;
    case type.includes("kafka"):
      src = kafka;
      break;
    case type.includes("infinispan"):
      src = infinispan;
      break;
    case type.includes("pubsublite"):
      src = pubsubLite;
      break;
    case type.includes("pravega"):
      src = pravega;
      break;
    default:
      src = "";
      break;
  }

  return <Image objectFit="fill" src={src} alt={type} />;
};

export default ConnectorTypeImage;
