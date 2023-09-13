import React from 'react';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header, {
  Categories,
  ImageCarousel,
} from './Header';
import SideBar from './Sidebar';
import DetailedCards from './DetailedCards';
import Footer from './Footer';

export default function Mobiles() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const style = {
    position: 'sticky', top: '98px', left: '0', zIndex: '10', width: '100vw',
  };
  return (
    <Box height="100vh" overflow="scroll">
      <Header />
      <Categories images={false} />
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
        <Box sx={isMobile ? style : {}}>
          <SideBar />
        </Box>
        <Box width={isMobile ? '100%' : '60%'} flexGrow={1}>
          <ImageCarousel />
          <DetailedCards />
          <DetailedCards />
          <DetailedCards />
          <DetailedCards />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
