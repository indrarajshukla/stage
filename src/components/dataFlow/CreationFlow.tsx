/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useMemo, useState } from "react";
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
} from "reactflow";
import AddTransformationNode from "./AddTransformationNode";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Box,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import PipelineSelectionListing from "../PipelineSelectionListing";
import DataNode from "./DataNode";
import { Destination, Source } from "../../utils/apis";
import { MdLogin, MdLogout } from "react-icons/md";

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = {
  dataDefaultPoint: DataDefaultNode,
  addTransformation: AddTransformationNode,
  dataNode: DataNode,
};

const proOptions = { hideAttribution: true };

interface CreationFlowProps {
  updateIfSourceConfigured: (isConfigured: boolean) => void;
  updateIfDestinationConfigured: (isConfigured: boolean) => void;
  isSourceConfigured: boolean;
  isDestinationConfigured: boolean;
  updateSelectedSource: (source: Source) => void;
  updateSelectedDestination: (destination: Destination) => void;
}

const CreationFlow: React.FC<CreationFlowProps> = ({
  updateIfSourceConfigured,
  updateIfDestinationConfigured,
  isSourceConfigured,
  isDestinationConfigured,
  updateSelectedSource,
  updateSelectedDestination,
}) => {
  const { colorMode } = useColorMode();
  const [updatedSourceNodes, setUpdatedSourceNodes] = useState<any>();
  const [updatedDestinationNodes, setUpdatedDestinationNodes] = useState<any>();

  const {
    isOpen: isSourceOpen,
    onOpen: onSourceOpen,
    onClose: onSourceClose,
  } = useDisclosure();
  const {
    isOpen: isDestinationOpen,
    onOpen: onDestinationOpen,
    onClose: onDestinationClose,
  } = useDisclosure();

  const defaultSourceNode = useMemo(() => {
    return {
      id: "source",
      data: {
        icon: MdLogout,
        label: "Source",
        type: "source",
        action: (
          <Box>
            <Button
              variant="ghost"
              onClick={onSourceOpen}
              leftIcon={<AddIcon />}
              size="xs"
              fontSize="x-small"
            >
               Source
            </Button>
          </Box>
        ),
      },
      position: { x: 100, y: 150 },
      type: "dataDefaultPoint",
      draggable: false,
    };
  }, [onSourceOpen]);

  const transformationGroup = useMemo(() => {
    return {
      id: "transformation_group",
      data: { label: "Transformation" },
      position: { x: 330, y: 120 },
      style: {
        // backgroundColor: "rgba(198,246,213, 0.2)",
        // backgroundColor: "rgba(240, 255, 244, 0.2)",
        backgroundColor: "rgba(203,213,224, 0.2)",
        width: 200,
        height: 150,
      },
      type: "group",
      draggable: false,
    };
  }, []);

  const defaultTransformationNode = useMemo(() => {
    return {
      id: "add_transformation",
      data: {
        label: "Transformation",
        sourcePosition: "right",
        targetPosition: "left",
      },
      position: { x: 40, y: 40 },
      targetPosition: "left",
      type: "addTransformation",
      parentId: "transformation_group",
      extent: "parent",
      draggable: false,
    };
  }, []);

  const defaultDestinationNode = useMemo(() => {
    return {
      id: "destination",
      data: {
        icon: MdLogin,
        label: "Destination",
        type: "destination",
        action: (
          <Box>
            <Button
              variant="ghost"
              onClick={onDestinationOpen}
              leftIcon={<AddIcon />}
              size="xs"
              fontSize="x-small"
            >
              Destination
            </Button>
          </Box>
        ),
      },
      position: { x: 650, y: 150 },
      type: "dataDefaultPoint",
      draggable: false,
    };
  }, [onDestinationOpen]);

  const initialNodes = [
    defaultSourceNode,
    transformationGroup,
    defaultTransformationNode,
    defaultDestinationNode,
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
      setEdges((eds: Edge[]) => addEdge(connection, eds));
    },
    [setEdges]
  );

  const onSourceSelection = useCallback(
    (source: Source) => {
      const selectedSourceNode = {
        id: "source",
        data: {
          connectorType: source.type,
          label: source.name,
          type: "source",
          draggable: false,
          editAction: onSourceOpen,
        },
        position: { x: 100, y: 160 },
        type: "dataNode",
        draggable: false,
      };
      updateIfSourceConfigured(true);
      setUpdatedSourceNodes(selectedSourceNode);
      updateSelectedSource(source);

      const destinationNode = isDestinationConfigured
        ? updatedDestinationNodes
        : defaultDestinationNode;

      // Update the nodes
      setNodes([
        selectedSourceNode,
        transformationGroup,
        defaultTransformationNode,
        destinationNode,
      ]);

      onSourceClose();
    },
    [
      onSourceClose,
      transformationGroup,
      defaultTransformationNode,
      defaultDestinationNode,
      updateIfSourceConfigured,
      isDestinationConfigured,
      updatedDestinationNodes,
      updateSelectedSource,
      onSourceOpen,
    ]
  );

  const onDestinationSelection = useCallback(
    (destination: Destination) => {
      const selectedDestinationNode = {
        id: "destination",
        data: {
          connectorType: destination.type,
          label: destination.name,
          type: "destination",
          draggable: false,
          editAction: onDestinationOpen,
        },
        position: { x: 650, y: 160 },
        type: "dataNode",
        draggable: false,
      };

      updateIfDestinationConfigured(true);
      setUpdatedDestinationNodes(selectedDestinationNode);
      updateSelectedDestination(destination);

      const sourceNode = isSourceConfigured
        ? updatedSourceNodes
        : defaultSourceNode;

      // Update the nodes
      setNodes([
        sourceNode,
        transformationGroup,
        defaultTransformationNode,
        selectedDestinationNode,
      ]);

      onDestinationClose();
    },
    [
      onDestinationClose,
      transformationGroup,
      defaultTransformationNode,
      defaultSourceNode,
      updateIfDestinationConfigured,
      isSourceConfigured,
      updatedSourceNodes,
      updateSelectedDestination,
      onDestinationOpen,
    ]
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
        <Background
          style={{
            background: colorMode === "dark" ? "#1A202C" : "#F8FAF6",
            borderRadius: "5px",
          }}
          gap={15}
          color={colorMode === "dark" ? "#1A202C" : "#F8FAF6"}
        />
      </ReactFlow>
      <Modal onClose={onSourceClose} size="xl" isOpen={isSourceOpen}>
        <ModalOverlay />
        <ModalContent style={{ maxWidth: "80vw" }}>
          <ModalHeader>Select source</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <PipelineSelectionListing
                onSelection={onSourceSelection}
                type="source"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal onClose={onDestinationClose} size="xl" isOpen={isDestinationOpen}>
        <ModalOverlay />
        <ModalContent style={{ maxWidth: "80vw" }}>
          <ModalHeader>Select destination</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <PipelineSelectionListing
                onSelection={onDestinationSelection}
                type="destination"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreationFlow;
