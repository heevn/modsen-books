import { createBrowserRouter,  } from "react-router-dom";
import Home from "./pages/Home";
import Booklist from "./components/Booklist";
import BookDetails from "./components/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "book",
        element: <Booklist />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
    ],
  },
]);