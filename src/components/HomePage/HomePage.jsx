import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import DonationCards from '../DonationCards/DonationCards'


const HomePage = () => {
  const [donations, setDonations] = useState([]);
  useEffect( () => {
    fetch("./data.json")
    .then( res => res.json())
    .then( data => setDonations(data))
  }, [])

 
  
  return (
    <>
      <Banner donations={donations} setDonations={setDonations} />
      <DonationCards donations={donations} />
    </>
  )
}

export default HomePage