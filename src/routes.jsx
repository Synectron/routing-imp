import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Page404 from "./components/Page404";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
    loader: loadFetch,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loadFetch,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

function loadFetch() {
  return ["1", "2"];
}
