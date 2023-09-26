import React from "react";
import { useNavigate } from "react-router-dom";

const DonatedMoney = ({ donation }) => {
  const { id, img, title, category, category_bg, card_bg, text_color, price } =
    donation;
  const navigate = useNavigate();
  const handleViewDetails = () => {
    navigate(`/donationmoney/${id}`);
  };
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-full w-[220px] object-cover"
            src={img}
            alt="Movie"
          />
        </figure>
        <div style={{ backgroundColor: card_bg }} className="card-body">
          <div className="pb-2">
            <h2
              style={{ backgroundColor: category_bg, color: text_color }}
              className=" capitalize inline-block px-2 py-2 rounded-md font-bold"
            >
              {category}
            </h2>
          </div>
          <h3 className=" text-2xl font-bold">{title}</h3>
          <p style={{ color: text_color }} className="font-bold">
            {" "}
            ${price}
          </p>
          <div>
            <button
              onClick={handleViewDetails}
              style={{ backgroundColor: text_color }}
              className="px-5 py-2 text-white"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonatedMoney;
