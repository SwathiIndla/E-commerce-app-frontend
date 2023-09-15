/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Box } from '@mui/system';
import { useMediaQuery, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Header, { Categories } from '../../Components/Header';
import Footer from '../../Components/Footer';
import './ProductPage.css';

export default function ProductPage() {
  const [imgUrl, setImgUrl] = useState('https://images.unsplash.com/photo-1585020430145-2a6b034f7729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60');
  const [hover, setHover] = useState('0');
  const isMobile = useMediaQuery('(max-width:800px)');
  const handleChange = (e) => {
    const baseURI = e.target.src;
    setImgUrl(baseURI);
    setHover(e.target.id);
    // console.log(e.target);
  };
  const style = {
    border: '1px solid blue',
    boxShadow: '0px 0px 3px blue',
  };
  const bankOffers = [];
  for (let i = 0; i < 5; i += 1) {
    bankOffers.push(
      <Box display="flex" flexDirection="row" gap="4px">
        <LocalOfferIcon color="success" fontSize="3" />
        <Typography variant="body2">
          Bank Offer ₹3000 Off On HDFC Bank Credit Non EMI,
          Credit and Debit Card EMI Transactions T&C
        </Typography>
      </Box>,
    );
  }
  return (
    <Box sx={{ overflowY: 'scroll' }} height="100vh" bgcolor="#e8eaed">
      <Header />
      <Categories />
      <Box display={isMobile ? 'block' : 'grid'} gridTemplateColumns="40% 60%" margin={isMobile ? '0 1rem' : '0 2.5px'} bgcolor="ghostwhite">
        <Box display="flex" sx={isMobile ? { flexDirection: 'column-reverse', justifyContent: 'center', alignItems: 'center' } : { position: 'sticky', top: '68px', height: 'fit-content' }}>
          <Box display="flex" flexDirection={isMobile ? 'row' : 'column'} m={1}>
            <div className="img-item" style={hover === '1' ? style : {}}>
              <img src="https://images.unsplash.com/photo-1585020430145-2a6b034f7729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" id="1" alt="img" onMouseOver={handleChange} onClick={handleChange} className="product-img" />
            </div>
            <div className="img-item" style={hover === '2' ? style : {}}>
              <img src="https://images.unsplash.com/photo-1617243876873-6cea4ea0b4eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" id="2" alt="img" onMouseOver={handleChange} onClick={handleChange} className="product-img" />
            </div>
            <div className="img-item" style={hover === '3' ? style : {}}>
              <img src="https://images.unsplash.com/photo-1522879943092-d2b0e4e1da17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" id="3" alt="img" onMouseOver={handleChange} onClick={handleChange} className="product-img" />
            </div>
            <div className="img-item" style={hover === '4' ? style : {}}>
              <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" id="4" alt="img" onMouseOver={handleChange} onClick={handleChange} className="product-img" />
            </div>
            <div className="img-item" style={hover === '5' ? style : {}}>
              <img src="https://images.unsplash.com/photo-1681414941993-ba9720710352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" id="5" alt="img" onMouseOver={handleChange} onClick={handleChange} className="product-img" />
            </div>
          </Box>
          <Box margin={2}>
            <img src={imgUrl} alt="img" className="displaying-img" />
          </Box>
        </Box>
        <Box m={1}>
          <div className="mobile-details">
            <Typography variant="h5" className="mobile-title">Mobile Title</Typography>
            <Typography variant="subtitle2" color="GrayText">(Specifications)</Typography>
            <div className="rating">
              <Typography variant="subtitle2" fontSize="inherit">Rating</Typography>
              <StarRateIcon color="inherit" fontSize="inherit" />
            </div>
            <div className="mobile-price-tag">
              <Typography variant="h5" component="h5">$Price</Typography>
              <Typography variant="subtitle1" className="deals">
                <span style={{ color: 'gray', textDecoration: 'line-through' }}> Price </span>
                % Deals
              </Typography>
              <Typography>Delivery</Typography>
              <Typography>Offers</Typography>
              {bankOffers}
            </div>
            <Box display="grid" gridTemplateColumns={isMobile ? '100%' : '50% 50%'} fontSize="14px">
              <Box marginTop={1} display="grid" gridTemplateColumns="30% 70%" alignItems="center">
                <Box><Typography color="GrayText" fontSize="inherit">Color</Typography></Box>
                <Box>
                  <ul className="color-list">
                    <li>white</li>
                    <li>black</li>
                    <li>blue</li>
                  </ul>
                </Box>
              </Box>
              <Box marginTop={1} display="grid" gridTemplateColumns="30% 70%" alignItems="center">
                <Box><Typography color="GrayText" fontSize="inherit">RAM</Typography></Box>
                <Box>
                  <ul className="color-list">
                    <li>6gb</li>
                    <li>8gb</li>
                    <li>12gb</li>
                  </ul>
                </Box>
              </Box>
              <Box marginTop={1} display="grid" gridTemplateColumns="30% 70%" alignItems="center">
                <Box><Typography color="GrayText" fontSize="inherit">Storage</Typography></Box>
                <Box>
                  <ul className="color-list">
                    <li>64gb</li>
                    <li>128gb</li>
                    <li>256gb</li>
                  </ul>
                </Box>
              </Box>
            </Box>
            <Box marginTop={1} display="grid" gridTemplateColumns="30% 70%" width={isMobile ? '100%' : '50%'} fontSize="14px">
              <Box><Typography color="GrayText" fontSize="inherit">Highlights</Typography></Box>
              <Box>
                <ul className="highlights-list">
                  <li>8 GB RAM | 256 GB ROM</li>
                  <li>16.94 cm (6.67 inch) Full HD+ AMOLED Display</li>
                  <li>50MP (OIS) + 8MP + 2MP | 16MP Front Camera</li>
                  <li>5000 mAh Lithium Polymer Battery</li>
                  <li>Mediatek Dimensity 1080 Processor</li>
                </ul>
              </Box>
            </Box>
            <Box marginTop={1} display="grid" gridTemplateColumns="30% 70%" fontSize="14px">
              <Box><Typography color="GrayText" fontSize="inherit">Description</Typography></Box>
              <Box>
                The Redmi Note 12 Pro 5G has a tonne of incredible features and provides gorgeous
                photographs and a faultless user experience. Due to its 2 um pixel size, the 50 MP
                Sony IMX766 sensor on the Redmi Note 12 Pro 5G is able to capture more light and
                produce stunning low-light images. Additionally, this phone boasts an innovative OIS
                that works to reduce camera shake and provide steady, blur-free images, even in dim
                lighting conditions. An additional benefit of this phone is its 120 Hz Pro AMOLED
                display with adaptive sync, which provides a fluid, lively, and engaging user
                experience.You can enjoy this phone`&apos;`s MediaTek Dimesity 1080 processor
                efficiently since it has abig vapour chamber, a high CPU frequency, and
                compatibility with 10 5G bands.
              </Box>
            </Box>
          </div>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
