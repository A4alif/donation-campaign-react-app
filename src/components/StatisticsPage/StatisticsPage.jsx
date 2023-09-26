import React from "react";
import useFetch from "../../hooks/useFetch";

const StatisticsPage = () => {
    const {donations} = useFetch();
    const donationsMoney = JSON.parse(localStorage.getItem("donationsMoney"));
    let totalDonations = donations?.reduce( (acc, cur) => acc + cur.price ,0);
    // console.log(totalDonations);
    let totalDonatedAmount = donationsMoney?.reduce( (acc, cur) => acc + cur.price ,0);
    // console.log(totalDonatedAmount);
    const totalDonatedAmountPercentage = (totalDonatedAmount/totalDonations)*100;
    // let totalDonatedAmountPerFixed = 0;
    let totalDonatedAmountPerFixed = totalDonatedAmountPercentage.toFixed(2);
    let remainingPercentage = 100 - totalDonatedAmountPerFixed;
   
  return (
    <>
      <div className="container mx-auto mt-40 py-14 p-4 ">
        <h2>Total Donations Percentage Now {remainingPercentage}; Donated Amount: {totalDonatedAmountPerFixed}%</h2>
      </div>
    </>
  );
};

export default StatisticsPage;
