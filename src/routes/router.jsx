import { createBrowserRouter,  } from "react-router-dom";
import Home from "../pages/Home";
import Booklist from "../components/Booklist";
import BookDetails from "../components/BookDetails";
import { HOME_PATH, BOOK_PATH, BOOKDETAILS_PATH } from "../utils/consts";

export const router = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <Home />,
    children: [
      {
        path: BOOK_PATH,
        element: <Booklist />,
      },
      {
        path: BOOKDETAILS_PATH,
        element: <BookDetails />,
      },
    ],
  },
]);