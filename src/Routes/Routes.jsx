import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import HomePage from "../components/HomePage/HomePage";
import DonationPage from "../components/DonationPage/DonationPage";
import StatisticsPage from "../components/StatisticsPage/StatisticsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/donation",
        element: <DonationPage />
      },
      {
        path: "/statistics",
        element: <StatisticsPage />
      },
    ],
  },
]);

export default router;
