import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import MainLobby from "./components/main-lobby/main-lobby";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Home />,
  },
  {
    path: "/",
    element: <MainLobby />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
