import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <div>Home Page</div>,
      },
      {
        path: "/donation",
        element: <div>Donation Page</div>,
      },
      {
        path: "/statistics",
        element: <div>Statistics Page</div>,
      },
    ],
  },
]);

export default router;
