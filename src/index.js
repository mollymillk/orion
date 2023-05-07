import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./global/styles/global.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider> */}
      <App />
    {/* </RouterProvider> */}
  </React.StrictMode>
);
