import React from 'react'
import useFetch from '../../hooks/useFetch';
import DonationSingleCard from './DonationSingleCard';

const DonationCards = () => {
    const {donations, setDonations} = useFetch();
    
  return (
    <>
        <div className="container mx-auto p-4 py-14 my-14">
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {donations?.map( (donation) => (
                        <DonationSingleCard key={donation.id} donation = {donation} />
                    ))}
                </div>
        </div>
    </>
  )
}

export default DonationCards