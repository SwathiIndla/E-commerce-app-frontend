import React from 'react';
import Header,
{ Categories, ImageCarousel }
  from './Header';
import Cards from './Cards';
// import Sidebar from './Sidebar';
import Footer from './Footer';

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
