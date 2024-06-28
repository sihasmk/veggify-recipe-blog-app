import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import ErrorPage from "../components/ErrorPage";
import CategoryPage from "../components/CategoryPage";
import SearchResults from "../pages/SearchResults";
import RecipePage from "../pages/RecipePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "/items/:id",
        element: <RecipePage />,
      },
    ],
  },
]);

export default router;
