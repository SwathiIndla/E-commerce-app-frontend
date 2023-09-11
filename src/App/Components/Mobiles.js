import React from 'react';
import Header, { Categories, ImageCarousel } from './Header';
import SideBar from './Sidebar';
import DetailedCards from './DetailedCards';
import Footer from './Footer';

export default function Mobiles() {
  return (
    <div style={{ backgroundColor: '#e8faf9' }}>
      <Header />
      <Categories images={false} />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div>
          <ImageCarousel />
          <DetailedCards />
          <DetailedCards />
          <DetailedCards />
          <DetailedCards />
        </div>
      </div>
      <Footer />
    </div>
  );
}
