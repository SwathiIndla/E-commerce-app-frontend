/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { mobileBrands } from '../../Data/data';
import './index.css';

export default function ColoredCards() {
  return (
    <div className="colored-cards-container">
      <p className="cashback-text">Extra cashback $2000</p>
      <div className="colored-cards-inner-container">
        <div className="colored-cards-description">
          <h3>Mobile Title</h3>
          <p style={{ fontSize: '.75rem' }}>camera and clarity</p>
          <h3>₹25,000</h3>
        </div>
        <div className="colored-cards-image-container">
          <img src="https://images.unsplash.com/photo-1673090221614-ed8e5f58793e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE2fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=70&h=100&q=60" width="70px" height="100px" alt="sample" />
        </div>

      </div>
    </div>
  );
}

export function Brands() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="brands-collective-container">
        { mobileBrands.map((item, index) => (
          <div className="brand-container" key={index}>
            <div className="brand-image-container">
              <img src={item.logo} alt="logo" className="logo-img" />
            </div>
            <h4 className="brands-text">Shop Now</h4>
            <h3 className="brands-text mobile-page-link">{item.name}</h3>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Box display="grid" gridTemplateColumns="30% 30% 30%" gap="3%">
          <ColoredCards />
          <ColoredCards />
          <ColoredCards />
          <ColoredCards />
          <ColoredCards />
          <ColoredCards />
        </Box>
        <Box display="flex" flexDirection="column" width="100%" boxShadow={2} marginBottom={2} bgcolor="whitesmoke">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" borderBottom="1px solid lightgrey" p="1rem 2rem">
            <Typography variant="h6">Under 10,000</Typography>
            <Button variant="contained" endIcon={<NavigateNextIcon />}>View All</Button>
          </Box>
          <Box display="flex" flexDirection="row">
            <MobilePageMediumSizedCard />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" width="100%" boxShadow={2} marginBottom={2} bgcolor="whitesmoke">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" borderBottom="1px solid lightgrey" p="1rem 2rem">
            <Typography variant="h6">Under 30,000</Typography>
            <Button variant="contained" endIcon={<NavigateNextIcon />}>View All</Button>
          </Box>
          <Box display="flex" flexDirection="row">
            <MobilePageMediumSizedCard />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" width="100%" boxShadow={2} marginBottom={2} bgcolor="whitesmoke">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" borderBottom="1px solid lightgrey" p="1rem 2rem">
            <Typography variant="h6">Samsung</Typography>
            <Button variant="contained" endIcon={<NavigateNextIcon />}>View All</Button>
          </Box>
          <Box display="flex" flexDirection="row">
            <MobilePageMediumSizedCard />
          </Box>
        </Box>
      </div>
    </div>
  );
}

export function MobilePageMediumSizedCard() {
  return (
    <div className="mobile-page-medium-sized-card-container">
      <a className="mobile-page-link" href="hi">
        <img src="https://images.unsplash.com/photo-1675767304968-2e8617b00d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&h=140&w=100&q=60" style={{ borderRadius: '8px' }} alt="mbl" />
      </a>
      <div className="mobile-page-medium-sized-card-inner-container">
        <a className="mobile-page-link" href="hi"><p>Image Title (spacificatiions)</p></a>
        <div className="medium-sized-card-rating-container">
          <div className="rating">
            <Typography variant="subtitle2" fontSize="inherit">4.5</Typography>
            <StarRateIcon color="inherit" fontSize="inherit" />
          </div>
          <Typography variant="subtitle2" color="GrayText">(rating counts)</Typography>
        </div>
        <Typography>₹Price</Typography>
      </div>
    </div>
  );
}
