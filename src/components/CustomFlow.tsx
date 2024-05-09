/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";
import DataNode from "./DataNode";
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
import { AppThemeGreen } from "../utils/constants";
import { MdOutlineAutoFixHigh, MdStorage } from "react-icons/md";

const initialNodes = [
  {
    id: "source",
    data: { icon: MdStorage, label: "Source" },
    position: { x: 150, y: 150 },
    targetPosition: "right",
    type: "textUpdater",
  },
  {
    id: "add_transformation",
    data: { icon: MdOutlineAutoFixHigh, label: "Transformation" },
    position: { x: 350, y: 150 },
    targetPosition: "left",
    type: "textUpdater",
  },
  {
    id: "destination",
    data: { icon: MdStorage, label: "Destination" },
    position: { x: 600, y: 150 },
    type: "textUpdater",
  },
];

const initialEdges = [
  {
    id: "source-add_transformation",
    source: "source",
    target: "add_transformation",
    animated: true,
    sourceHandle: 'a'
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
const nodeTypes = { textUpdater: DataNode };

const proOptions = { hideAttribution: true };


function CustomFlow() {
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
      <Background style={{ background: AppThemeGreen.Background }} />
      <Controls />
    </ReactFlow>
  );
}

export default CustomFlow;
