import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Categories } from '../Components/Header/Categories';
import ImageCarousel from '../Components/Header/ImageCarousel';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';

export default function Home() {
  const [mobileData, setMobileData] = useState([]);

  useEffect(() => async () => {
    try {
      const options = {
        method: 'GET',
      };

      const response = await fetch('https://localhost:7258/api/Filter/353b54c1-3ee2-4aee-8923-686927e4db9e', options);
      const responseJson = await response.json();
      setMobileData(responseJson.filteredProductItems);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <Header />
      <Categories images />
      <ImageCarousel />
      <Cards mobileData={mobileData} title="Samsung" />
      <Cards mobileData={mobileData} title="Camera-centric" />
      <Cards mobileData={mobileData} title="Premium" />
      <Footer />
    </div>
  );
}
