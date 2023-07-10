import { createBrowserRouter,  } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/info/:infoId",
    element: <Info />,
  },
]);