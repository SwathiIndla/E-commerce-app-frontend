/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import Header, { Categories } from '../Components/Header';

export default function ProductPage() {
  const [imgUrl, setImgUrl] = useState('https://images.unsplash.com/photo-1585020430145-2a6b034f7729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60');
  const [hover, setHover] = useState('0');
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
  return (
    <Box sx={{ overflowY: 'scroll' }} height="100vh" bgcolor="#e8eaed">
      <Header />
      <Categories />
      <Box display="grid" gridTemplateColumns="40% 60%" margin="0 40px" bgcolor="ghostwhite">
        <Box display="flex" sx={{ position: 'sticky', top: '68px', height: 'fit-content' }}>
          <Box display="flex" flexDirection="column" m={1}>
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
            <img src={imgUrl} alt="img" height="400px" width="400px" />
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
              <Typography variant="caption">Delivery</Typography>
              <Typography variant="caption">Offers</Typography>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
