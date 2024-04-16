import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import Error from "./components/Error";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:country", element: <Country /> },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);
