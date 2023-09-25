import { useEffect, useState } from "react";

const useFetch = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  return { donations, setDonations };
};

export default useFetch;
