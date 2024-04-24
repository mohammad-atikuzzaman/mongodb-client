import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./components/ErrorElement.jsx";
import Home from "./pages/Home.jsx";
import AddItems from "./pages/AddItems.jsx";
import MyItems from "./pages/MyItems.jsx";
import Coffee from "./components/Coffee.jsx";
import EditCoffe from "./pages/EditCoffe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addItem",
        element: <AddItems></AddItems>,
      },
      {
        path: "/myItems",
        element: <MyItems></MyItems>,
        loader: () => fetch("http://localhost:4000/items"),
      },
      {
        path: "/myItems/:id",
        element: <Coffee></Coffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/items/${params.id}`),
      },
      {
        path: "/edit/:id",
        element: <EditCoffe></EditCoffe>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/items/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
