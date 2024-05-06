import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound  from "../components/PageNotFound"
import { useDocumentTitle } from "../utils/useDocumentTitle";
import { AppBranding } from "../utils/constants";
import { IAppRoute, routes } from "../routes";

export type AppRouteConfig = IAppRoute ;

const PageWithTitle = ({
  title,
  component: Component,
}: {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
}) => {
  useDocumentTitle(title);
  return <Component />;
};

const AppRoutes = (): React.ReactElement => (
  <Routes>
    {(routes as IAppRoute[]).map((route, index) => (
      <Route
        key={route.label || index}
        path={route.path}
        element={
          <PageWithTitle title={route.title} component={route.component} />
        }
      />
    ))}
    <Route
      path="*"
      element={
        <PageWithTitle
          title={`${AppBranding} | 404 Page Not Found`}
          component={PageNotFound}
        />
      }
    />
  </Routes>
);

export { AppRoutes };
