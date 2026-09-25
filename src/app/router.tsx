import { Navigate, createBrowserRouter } from "react-router-dom";
import { BubbleSortPage } from "@/features/sorting/components/BubbleSortPage";
import { InsertionSortPage } from "@/features/sorting/components/InsertionSortPage";
import { PageLayout } from "@/components/layout/PageLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/sorting/bubble" replace />,
      },
      {
        path: "sorting/bubble",
        element: <BubbleSortPage />,
      },
      {
        path: "sorting/insertion",
        element: <InsertionSortPage />,
      },
      {
        path: "*",
        element: <Navigate to="/sorting/bubble" replace />,
      },
    ],
  },
]);
