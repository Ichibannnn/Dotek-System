import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import { PageNotFound } from "../components/Lottie-Components";

const Routing = () => {
  const routing = useRoutes([
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return routing;
};

export default Routing;
