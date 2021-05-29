import React, { Suspense, useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
//import routes
import { authProtectedRoutes, publicRoutes } from "./routes";
import { AppContext } from "../context/AppContext";

//import layouts
import NonAuthLayout from "../layouts/NonAuth";
import AuthLayout from "../layouts/AuthLayout/";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

// handle auth and authorization
const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthProtected && !localStorage.getItem("authUser")) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
        // authorised so return component
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

/**
 * Main Route component
 */

const Routes = (props) => {
  const context = useContext(AppContext);
  const loading = useSelector((state) => state.Auth.loading);
  document.documentElement.classList.add(`${context.theme}`);
  if (loading === true)
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,

          margin: "auto",
        }}
      >
        <Loader />
      </div>
    );
  else
    return (
      // rendering the router with layout
      <BrowserRouter>
        <React.Fragment>
          <Suspense fallback={<div></div>}>
            <Switch>
              {/* public routes */}
              {publicRoutes.map((route, idx) => (
                <AppRoute
                  path={route.path}
                  layout={NonAuthLayout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={false}
                />
              ))}
              {/* private/auth protected routes */}
              {authProtectedRoutes.map((route, idx) => (
                <AppRoute
                  path={route.path}
                  layout={AuthLayout}
                  component={route.component}
                  key={idx}
                  isAuthProtected={true}
                />
              ))}
            </Switch>
          </Suspense>
        </React.Fragment>
      </BrowserRouter>
    );
};

export default Routes;
