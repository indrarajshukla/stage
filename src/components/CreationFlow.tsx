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
  useDisclosure,
  Box,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DestinationListing from "./DestinationListing";
import SourceListing from "./SourceListing";
import DataNode from "./DataNode";
import { Destination, Source } from "../utils/apis";
import ConnectorImage from "./ConnectorImage";
// import { isEmpty } from "../utils/helpers";

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
        icon: FiDatabase,
        label: "Source",
        type: "source",
        action: (
          <Button
            variant="outline"
            onClick={onSourceOpen}
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
      position: { x: 25, y: 35 },
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
        icon: FiDatabase,
        label: "Destination",
        type: "destination",
        action: (
          <Button
            variant="outline"
            onClick={onDestinationOpen}
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
      setEdges((eds: Edge[]) => addEdge(connection, eds)); // Call addEdge here
    },
    [setEdges]
  );

  const onSourceSelection = useCallback(
    (source: Source) => {
      const selectedSourceNode = {
        id: "source",
        data: {
          image: <ConnectorImage connectorType={source.type} />,
          label: "Cassandra",
          type: "source",
          draggable: false,
        },
        position: { x: 150, y: 160 },
        type: "dataNode",
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
    ]
  );

  const onDestinationSelection = useCallback(
    (destination: Destination) => {
      const selectedDestinationNode = {
        id: "destination",
        data: {
          image: <ConnectorImage connectorType={destination.type} />,
          label: "Apache pulsar",
          type: "destination",
          draggable: false,
        },
        position: { x: 600, y: 160 },
        type: "dataNode",
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
      ></ReactFlow>
      <Modal onClose={onSourceClose} size="xl" isOpen={isSourceOpen}>
        <ModalOverlay />
        <ModalContent style={{ maxWidth: "80vw" }}>
          <ModalHeader>Select source</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <SourceListing onSourceSelection={onSourceSelection} />
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
              <DestinationListing
                onDestinationSelection={onDestinationSelection}
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreationFlow;
