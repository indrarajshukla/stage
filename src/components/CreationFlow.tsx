/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import DataDefaultNode from "./DataDefaultNode";
import ReactFlow, {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  NodeChange,
  Node,
  EdgeChange,
  Edge,
  Connection,
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import { AppThemeGreen } from "../utils/constants"
import AddTransformationNode from "./AddTransformationNode"
import { FiDatabase } from "react-icons/fi";

const initialNodes = [
  {
    id: "source",
    data: { icon: FiDatabase, label: "Source" },
    position: { x: 150, y: 150 },
    type: "dataDefaultPoint",
  },
  {
    id: "transformation_group",
    data: { label: "Transformation" },
    position: { x: 330, y: 120 },
    className: "light",
    style: {
      backgroundColor: "rgba(198,246,213, 0.2)",
      // backgroundColor: "rgba(240, 255, 244, 0.2)",
            // backgroundColor: "rgba(226,232,240, 0.2)",
      width: 200,
      height: 150,
    },
    type: "group",
  },
  {
    id: "add_transformation",
    data: { label: "Transformation", sourcePosition: "right", targetPosition: "left"},
    position: { x: 25, y: 35 },
    targetPosition: "left",
    type: "addTransformation",
    parentId: "transformation_group",
    extent: "parent",
  },
  {
    id: "destination",
    data: { icon: FiDatabase, label: "Destination" },
    position: { x: 600, y: 150 },
    type: "dataDefaultPoint",
  },
];

const initialEdges = [
  {
    id: "source-add_transformation",
    source: "source",
    target: "add_transformation",
    animated: true,
    sourceHandle: "a",
  },
  {
    id: "add_transformation-destination",
    source: "add_transformation",
    target: "destination",
    animated: true,
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  dataDefaultPoint: DataDefaultNode,
  addTransformation: AddTransformationNode,
};

const proOptions = { hideAttribution: true };

function CreationFlow() {
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
      fitView
    >
      <MiniMap />
      {/* <Background style={{ background: "#FFFFFF" }} /> */}
      <Background style={{ background: AppThemeGreen.Background }} />
      <Controls />
    </ReactFlow>
  );
}

export default CreationFlow;
