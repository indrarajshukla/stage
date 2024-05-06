/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Home from "./pages/home/Home";
import { AppBranding } from "./utils/constants";
import Source from "./pages/source/Source";
import Sink from "./pages/sink/Sink";
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

export interface IAppRoute {
  label: string
  component: React.ComponentType<any>
  path: string
  title: string
  isMain: boolean
  icon?: React.ComponentType<any>
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
    component: Sink,
    label: "Sink",
    path: "/sink",
    title: `${AppBranding} | Sink`,
    isMain: true,
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
    component: Setting,
    label: "Setting",
    path: "/setting",
    title: `${AppBranding} | Setting`,
    isMain: false,
    icon: MdOutlineSettings,
  },
];

export { routes };
