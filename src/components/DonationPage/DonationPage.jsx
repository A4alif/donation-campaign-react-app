import React, { useState } from "react";
import DonatedMoney from "./DonatedMoney";

const DonationPage = () => {
  const [dataLength, setDataLength] = useState(4);
  const donationsMoney = JSON.parse(localStorage.getItem("donationsMoney"));

  const handleSeeAll = () => {
    setDataLength(donationsMoney.length);
  };

  return (
    <>
      <div className="container mx-auto mt-40 py-14 p-4 ">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donationsMoney?.slice(0, dataLength).map((donation) => (
              <DonatedMoney key={donation.id} donation={donation} />
            ))}
          </div>
        </div>
        {donationsMoney.length > 4 && (
          <div
            className={`flex justify-center py-9 cursor-pointer ${
              dataLength === donationsMoney.length && "hidden"
            } `}
          >
            <button
              onClick={handleSeeAll}
              className="px-5 py-2 bg-green-700 rounded-md text-white"
            >
              See All
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DonationPage;
