import React from 'react';
import Header, { Categories } from '../Components/Header';
import ImageCarousel from '../Components/Header/ImageCarousel';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Categories images />
      <ImageCarousel />
      <Cards />
      <Cards />
      <Cards />
      <Footer />
    </div>
  );
}
