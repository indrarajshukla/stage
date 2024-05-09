/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Home from "./pages/home/Home";
import { AppBranding } from "./utils/constants";
import Source from "./pages/source/Source";
import Destination from "./pages/destination/Destination";
import Pipeline from "./pages/pipeline/Pipeline";
import Setting from "./pages/setting/Setting";
import {
  MdLogin,
  MdLogout,
  MdOutlineHome,
  MdOutlineSettings,
  MdOutlineVpnKey,
  MdSwapCalls,
} from "react-icons/md";
import Vaults from "./pages/vaults/Vaults";
import SourceCatalog from "./pages/source/SourceCatalog";
import CreateSource from "./pages/source/CreateSource";
import DestinationCatalog from "./pages/destination/DestinationCatalog";
import CreateDestination from "./pages/destination/CreateDestination";
import CreatePipeline from "./pages/pipeline/CreatePipeline";

export interface IAppRoute {
  label: string;
  component: React.ComponentType<any>;
  path: string;
  title: string;
  isMain?: boolean;
  isSubPath?: boolean;
  icon?: React.ComponentType<any>;
}

export type AppRouteConfig = IAppRoute;

const routes: AppRouteConfig[] = [
  {
    component: Home,
    label: "Home",
    path: "/" || "/home",
    title: `${AppBranding} | Home`,
    isMain: true,
    icon: MdOutlineHome,
  },

  {
    component: Source,
    label: "Source",
    path: "/source",
    title: `${AppBranding} | Source`,
    isMain: true,
    icon: MdLogout,
  },
  {
    component: SourceCatalog,
    label: "Source catalog",
    path: "/source/catalog",
    title: `${AppBranding} | Source`,
    isSubPath: true,
    icon: MdLogout,
  },
  {
    component: CreateSource,
    label: "Create source",
    path: "/source/create_source/:sourceId",
    title: `${AppBranding} | Source`,
    isSubPath: true,
    icon: MdLogout,
  },
  {
    component: Destination,
    label: "Destination",
    path: "/destination",
    title: `${AppBranding} | Destination`,
    isMain: true,
    icon: MdLogin,
  },
  {
    component: DestinationCatalog,
    label: "Destination catalog",
    path: "/destination/catalog",
    title: `${AppBranding} | Destination`,
    isSubPath: true,
    icon: MdLogin,
  },
  {
    component: CreateDestination,
    label: "Create destination",
    path: "/destination/create_destination/:destinationId",
    title: `${AppBranding} | Destination`,
    isSubPath: true,
    icon: MdLogin,
  },
  {
    component: Vaults,
    label: "Vaults",
    path: "/vault",
    title: `${AppBranding} | Vaults`,
    isMain: true,
    icon: MdOutlineVpnKey,
  },
  {
    component: Pipeline,
    label: "Pipeline",
    path: "/pipeline",
    title: `${AppBranding} | Pipeline`,
    isMain: true,
    icon: MdSwapCalls,
  },
  {
    component: CreatePipeline,
    label: "Create Pipeline",
    path: "/pipeline/create_pipeline",
    title: `${AppBranding} | Pipeline`,
    isSubPath: true,
    icon: MdSwapCalls,
  },
  {
    component: Setting,
    label: "Setting",
    path: "/setting",
    title: `${AppBranding} | Setting`,
    isMain: false,
    icon: MdOutlineSettings,
  },
];

export { routes };
