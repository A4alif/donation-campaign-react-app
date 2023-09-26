import React from "react";

const Banner = ({donations, setDonations}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputField = form.name.value.toLowerCase()
    const searchDonations = donations.filter( (donation) => donation.category == inputField)
    setDonations(searchDonations)
  }
  return (
    <>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/kXp2tWsg/banner-img.jpg)",
        }}
      >
       
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold text-[#000]">I Grow By Helping People In Need</h1>
            
            <form onSubmit={handleSearch}>
                <div>
                    <input className="px-4 py-4 w-3/5 text-[#000]  outline-none focus:outline-none" type="text" name="name" id="" placeholder="Search Here" />
                    <button className="bg-[#FF444A] px-4 py-4 text-white">Search</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
