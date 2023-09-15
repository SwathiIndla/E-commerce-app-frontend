import React from 'react';
import Header,
{ Categories, ImageCarousel }
  from '../Components/Header';
import Cards from '../Components/Cards';
// import Sidebar from './Sidebar';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Categories images />
      <ImageCarousel />
      <Cards />
      <Footer />
    </div>
  );
}
