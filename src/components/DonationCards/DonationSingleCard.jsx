import React from "react";
import { Link } from "react-router-dom";

const DonationSingleCard = ({donation}) => {
    const {id, img, title, category, category_bg, card_bg, text_color} = donation;
  return (
    <>
      <Link to={`/donationmoney/${id}`} className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-48 w-full object-cover"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div style={{backgroundColor: card_bg}} className="card-body">
          <div className="py-4" >
             <h2 style={{backgroundColor: category_bg, color: text_color}} className= " capitalize inline-block px-2 py-2 rounded-md font-bold">{category}</h2>
          </div>
          <h3 style={{color: text_color}} className=" text-2xl font-bold pb-4">{title}</h3>
         
        </div>
      </Link>
    </>
  );
};

export default DonationSingleCard;
