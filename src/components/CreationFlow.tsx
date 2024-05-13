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
} from "reactflow";
import AddTransformationNode from "./AddTransformationNode";
import { FiDatabase } from "react-icons/fi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Box,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DestinationTable from "./DestinationTable";
import { useNavigate } from "react-router-dom";

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  dataDefaultPoint: DataDefaultNode,
  addTransformation: AddTransformationNode,
};

const proOptions = { hideAttribution: true };

function CreationFlow() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const navigateTo = (navigateTo: string) => {
    navigate(`/pipeline/create_pipeline/${navigateTo}`);
  };

  const initialNodes = [
    {
      id: "source",
      data: {
        icon: FiDatabase,
        label: "Source",
        type: "source",
        action: (
          <Button
            variant="outline"
            onClick={onOpen}
            leftIcon={<AddIcon />}
            size="xs"
          >
            Source
          </Button>
        ),
      },
      position: { x: 150, y: 150 },
      type: "dataDefaultPoint",
      draggable: false,
    },
    {
      id: "transformation_group",
      data: { label: "Transformation" },
      position: { x: 330, y: 120 },
      // className: "light",
      style: {
        // backgroundColor: "rgba(198,246,213, 0.2)",
        // backgroundColor: "rgba(240, 255, 244, 0.2)",
        backgroundColor: "rgba(203,213,224, 0.2)",
        width: 200,
        height: 150,
      },
      type: "group",
      draggable: false,
    },
    {
      id: "add_transformation",
      data: {
        label: "Transformation",
        sourcePosition: "right",
        targetPosition: "left",
      },
      position: { x: 25, y: 35 },
      targetPosition: "left",
      type: "addTransformation",
      parentId: "transformation_group",
      extent: "parent",
      draggable: false,
    },
    {
      id: "destination",
      data: {
        icon: FiDatabase,
        label: "Destination",
        type: "destination",
        action: (
          <Button
            variant="outline"
            onClick={() => navigateTo("destination")}
            leftIcon={<AddIcon />}
            size="xs"
          >
            Destination
          </Button>
        ),
      },
      position: { x: 600, y: 150 },
      type: "dataDefaultPoint",
      draggable: false,
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
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        fitView
        maxZoom={1.5}
        minZoom={1.5}
        panOnDrag={false}
      >
        {/* <MiniMap /> */}
        {/* <Background style={{ background: "#FFFFFF" }} /> */}
        {/* <Background style={{ background: AppThemeGreen.Background }} /> */}
        {/* <Controls /> */}
      </ReactFlow>
      <Modal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent style={{ maxWidth: "80vw" }}>
          <ModalHeader>Configure source</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <DestinationTable />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Select</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreationFlow;
