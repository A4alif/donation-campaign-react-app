import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import HomePage from "../components/HomePage/HomePage";
import DonationPage from "../components/DonationPage/DonationPage";
import StatisticsPage from "../components/StatisticsPage/StatisticsPage";
import SingleDonation from "../components/SingleDonation/SingleDonation";

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
        path: "/donationmoney/:id",
        element: <SingleDonation />,
        loader: () => fetch("../../data.json")
      },
      {
        path: "/statistics",
        element: <StatisticsPage />
      },
    ],
  },
]);

export default router;
