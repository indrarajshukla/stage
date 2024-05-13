/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import ReactFlow, {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  Node,
  EdgeChange,
  Edge,
  Connection,
} from "reactflow";
import { Image } from "@chakra-ui/react";
import AddTransformationNode from "./AddTransformationNode";
import DataNode from "./DataNode";
import cassandra from "../assets/Cassandra.png";
import TransformationNode from "./TransformationNode";
import apachePulsar from "../assets/apachePulsar.png";

const initialNodes = [
  {
    id: "source",
    data: {
      image: (
        <Image
          boxSize={14}
          objectFit="fill"
          src={cassandra}
          alt="Cassandra logo"
        />
      ),
      label: "Cassandra",
      type: "source",
    },
    position: { x: 250, y: 150 },
    type: "dataNode",
    draggable: false,
  },
  {
    id: "transformation_group",
    data: { label: "Transformation" },
    position: { x: 400, y: 100 },
    className: "light",
    style: {
      backgroundColor: "rgba(203,213,224, 0.2)",
      width: 250,
      height: 250,
    },
    type: "group",
    draggable: false,
  },
  {
    id: "transformation_1",
    data: {
      label: "transformation_1",
      sourcePosition: "bottom",
      targetPosition: "left",
    },
    position: { x: 50, y: 25 },
    type: "transformationNode",
    parentId: "transformation_group",
    extent: "parent",
    draggable: false,
  },
  {
    id: "add_transformation",
    data: {
      label: "Transformation",
      sourcePosition: "right",
      targetPosition: "top",
    },
    position: { x: 50, y: 150 },
    type: "addTransformation",
    parentId: "transformation_group",
    extent: "parent",
    draggable: false,
  },
  {
    id: "destination",
    data: {
      image: (
        <Image
          w="12"
          h="12"
          objectFit="fill"
          src={apachePulsar}
          alt="apachePulsar logo"
        />
      ),
      label: "Apache pulsar",
      type: "destination",
      draggable: false,
    },
    position: { x: 700, y: 150 },
    type: "dataNode",
  },
];

const initialEdges = [
  {
    id: "source-transformation_1",
    source: "source",
    target: "transformation_1",
    animated: true,
    sourceHandle: "a",
  },
  {
    id: "transformation_1-add_transformation",
    source: "transformation_1",
    target: "add_transformation",
    animated: true,
  },
  {
    id: "add_transformation-destination",
    source: "add_transformation",
    target: "destination",
    animated: true,
    sourceHandle: "a",
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  dataNode: DataNode,
  addTransformation: AddTransformationNode,
  transformationNode: TransformationNode,
};

const proOptions = { hideAttribution: true };

function PipelineFlow() {
  const [nodes, setNodes] = useState<any>(initialNodes);
  const [edges, setEdges] = useState<any>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds: Node[]) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds: Edge[]) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) => {
      console.log("Connection:", connection);
      setEdges((eds: Edge[]) => addEdge(connection, eds)); // Call addEdge here
    },
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      proOptions={proOptions}
      maxZoom={1.5}
      fitView
      minZoom={1.5}
      panOnDrag={false}
    ></ReactFlow>
  );
}

export default PipelineFlow;
