import React, { useEffect, useState } from "react";
import DonatedMoney from "./DonatedMoney";

const DonationPage = () => {
  const [dataLength, setDataLength] = useState(4);
  const [donatedMoney, setDonatedMoney] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    const donationsMoney = JSON.parse(localStorage.getItem("donationsMoney"));
    if (donationsMoney) {
      setDonatedMoney(donationsMoney);
    } else {
      setNoDataFound("You haven't Donated Anything Yet");
    }
  }, []);

  // const handleSeeAll = () => {
  //   setDataLength(donatedMoney.length);
  // };

  return (
    <>
      <div className="container mx-auto mt-40 py-14 p-4 ">
        {noDataFound ? (
          <p className="text-center text-2xl font-bold"> {noDataFound}</p>
        ) : (
          <>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {donatedMoney?.slice(0, dataLength).map((donation) => (
                  <DonatedMoney key={donation.id} donation={donation} />
                ))}
              </div>
            </div>
            {donatedMoney.length > 4 && (
              <div
                className={`flex justify-center py-9 cursor-pointer ${
                  dataLength === donatedMoney.length && "hidden"
                } `}
              >
                <button
                  onClick={() => setDataLength(donatedMoney.length)}
                  className="px-5 py-2 bg-green-700 rounded-md text-white"
                >
                  See All
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default DonationPage;
