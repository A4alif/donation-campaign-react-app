import React from "react";
import Swal from "sweetalert2";

const SingleDonationDetails = ({ donation }) => {
  const { id, img_thumb, title, description, price, text_color } = donation;
  const handleDonation = () => {
    const donationsMoney = JSON.parse(localStorage.getItem("donationsMoney"));
    let addDonations = [];
    if(!donationsMoney){
      addDonations.push(donation)
      localStorage.setItem("donationsMoney", JSON.stringify(addDonations));
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'You have donated Money successfully',
      })
    }else {
      addDonations.push(...donationsMoney, donation);
      localStorage.setItem("donationsMoney", JSON.stringify(addDonations));
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'You have donated Money successfully',
      })
    }
  }
  return (
    <>
      <div className="container mx-auto mt-40 py-14 ">
        <div className="max-w-5xl mx-auto">
          <div className="card card-compact ">
            <figure>
              <img className="h-[700px] w-full object-cover" src={img_thumb} alt="Shoes" />
            </figure>
            <button
                onClick={handleDonation}
              style={{ backgroundColor: text_color }}
              className="px-6 py-2  text-white rounded-md absolute bottom-64 left-12"
            >
              Donate ${price}
            </button>
            <div className="card-body">
              <h2 className="card-title text-4xl font-bold py-6">{title}</h2>
              <p className="text-base">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleDonationDetails;
