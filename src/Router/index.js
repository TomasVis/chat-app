import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import pathnames from "../pathnames";

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <PageLayout>
          <Switch>
            <Route
              exact
              path={pathnames.LOGIN}
              component={lazy(() => import("../pages/Login"))}
            />
            <Route
              exact
              path={pathnames.CHAT}
              component={lazy(() => import("../pages/Chat"))}
            />
            <Route
              exact
              path={pathnames.PROFILE}
              component={lazy(() => import("../pages/Profile"))}
            />
            <Route
              exact
              path="/"
              component={() => <Redirect to={pathnames.LOGIN} />}
            />
          </Switch>
        </PageLayout>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
