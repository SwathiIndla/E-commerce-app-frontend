import React from 'react';
import { Box } from '@mui/material';
import Header, { Categories, ImageCarousel } from './Header';
import SideBar from './Sidebar';
import DetailedCards from './DetailedCards';
import Footer from './Footer';

export default function Mobiles() {
  return (
    <div style={{ backgroundColor: '#e8faf9' }}>
      <Header />
      <Categories images={false} />
      <Box display="grid" gridTemplateColumns="17% 83%">
        <SideBar />
        <div>
          <ImageCarousel />
          <DetailedCards />
          <DetailedCards />
          <DetailedCards />
          <DetailedCards />
        </div>
      </Box>
      <Footer />
    </div>
  );
}
