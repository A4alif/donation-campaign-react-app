import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonationDetails from "./SingleDonationDetails";

const SingleDonation = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const donation = donations.find((donation) => donation.id == id);

  return (
    <div>
      <SingleDonationDetails donation={donation} />
    </div>
  );
};

export default SingleDonation;
