import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ServicesCreate from "../Components/ServicesCreate/ServicesCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/servicesCreate/:id",
        element: <ServicesCreate />,
      },
    ],
  },
]);

export default router;
