import React from 'react'
import DonatedMoney from './DonatedMoney';

const DonationPage = () => {
  const donationsMoney = JSON.parse(localStorage.getItem("donationsMoney"));

  return (
    <>
      <div className="container mx-auto mt-40 py-14 ">
        <div >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {
                donationsMoney?.map( (donation) => (
                  <DonatedMoney key={donation.id} donation={donation} />
                ))
              }
              
            </div>
        </div>
      </div>
    </>
  )
}

export default DonationPage