import React from 'react';
import { Box } from '@mui/material';
import Header, {
  Categories,
  ImageCarousel,
} from './Header';
import SideBar from './Sidebar';
import DetailedCards from './DetailedCards';
import Footer from './Footer';

export default function Mobiles() {
  const [toggled, setToggled] = React.useState(false);
  return (
    <div style={{ backgroundColor: '#e8faf9' }}>
      <Header />
      <Categories images={false} />
      <Box display="flex">
        <SideBar toggled={toggled} setToggled={setToggled} />
        {/* <Button type="button" onClick={() => setToggled(!toggled)}>Filter</Button> */}
        <Box width="70%" flexGrow={1}>
          <ImageCarousel />
          <DetailedCards />
          <DetailedCards />
          <DetailedCards />
          <DetailedCards />
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
