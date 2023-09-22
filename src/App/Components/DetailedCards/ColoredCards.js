import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { mobileBrands } from '../../Data/data';
import './DetailedCards.css';

export default function ColoredCards() {
  return (
    <div className="colored-cards-container">
      <p style={{
        fontSize: '.75rem', backgroundColor: '#edfcbb', color: 'green', padding: '0 .5rem', width: 'fit-content',
      }}
      >
        Extra cashback $2000
      </p>
      <div style={{
        display: 'grid', gridTemplateColumns: '60% 40%', padding: '1rem', alignItems: 'center',
      }}
      >
        <div className="colored-cards-description">
          <h3>Mobile Title</h3>
          <p style={{ fontSize: '.75rem' }}>camera and clarity</p>
          <h3>
            $25,000
            {' '}
            <span style={{ fontSize: '.6rem', textDecoration: 'line-through', fontStyle: 'italic' }}> $28,000</span>
          </h3>
        </div>
        <div style={{
          padding: '.5rem 1rem', backgroundColor: '#c1e0f7', width: 'fit-content', borderRadius: '4px',
        }}
        >
          <img src="https://images.unsplash.com/photo-1673090221614-ed8e5f58793e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE2fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=70&h=100&q=60" width="70px" height="100px" alt="sample" />
        </div>

      </div>
    </div>
  );
}

export function Brands() {
  const brands = mobileBrands.map((item) => (
    <div
      className="brand-container"
      style={{
        display: 'flex', flexDirection: 'column', margin: '1rem', width: '170px', alignItems: 'center', gap: '.5rem',
      }}
    >
      <div className="colred-container">
        <img src={item.logo} alt="logo" className="logo-img" />
      </div>
      <h4 style={{ margin: 'unset' }}>Shop Now</h4>
      <h3 style={{ margin: 'unset' }} className="mobile-page-link">{item.name}</h3>
    </div>
  ));
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="brands-container" style={{ display: 'flex' }}>{brands}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ColoredCards />
        <ColoredCards />
        <ColoredCards />
        <ColoredCards />
        <ColoredCards />
        <ColoredCards />
        <Box display="flex" flexDirection="column" width="100%" boxShadow={2} marginBottom={2} bgcolor="whitesmoke">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" borderBottom="1px solid lightgrey" p="1rem 2rem">
            <Typography variant="h6">Under 10,000</Typography>
            <Button variant="contained" endIcon={<NavigateNextIcon />}>View All</Button>
          </Box>
          <Box display="flex" flexDirection="row">
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" width="100%" boxShadow={2} marginBottom={2} bgcolor="whitesmoke">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" borderBottom="1px solid lightgrey" p="1rem 2rem">
            <Typography variant="h6">Under 30,000</Typography>
            <Button variant="contained" endIcon={<NavigateNextIcon />}>View All</Button>
          </Box>
          <Box display="flex" flexDirection="row">
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" width="100%" boxShadow={2} marginBottom={2} bgcolor="whitesmoke">
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" width="100%" borderBottom="1px solid lightgrey" p="1rem 2rem">
            <Typography variant="h6">Samsung</Typography>
            <Button variant="contained" endIcon={<NavigateNextIcon />}>View All</Button>
          </Box>
          <Box display="flex" flexDirection="row">
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
          </Box>
        </Box>
      </div>
    </div>
  );
}

export function SingleCard() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem',
    }}
    >
      <a className="mobile-page-link" href="hi">
        <img src="https://images.unsplash.com/photo-1675767304968-2e8617b00d37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&h=140&w=100&q=60" style={{ borderRadius: '8px' }} alt="mbl" />
      </a>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      }}
      >
        <a className="mobile-page-link" href="hi"><p>Image Title (spacificatiions)</p></a>
        <div style={{ display: 'flex', gap: '.5rem' }}>
          <div className="rating">
            <Typography variant="subtitle2" fontSize="inherit">4.5</Typography>
            <StarRateIcon color="inherit" fontSize="inherit" />
          </div>
          <Typography variant="subtitle2" color="GrayText">(rating counts)</Typography>
        </div>
        <Typography>
          Price
          <span style={{
            fontSize: '1rem', textDecoration: 'line-through', margin: '0 8px',
          }}
          >
            {' '}
            prev
          </span>
          <span style={{ fontSize: '1rem', color: 'green' }}> offer </span>
        </Typography>
      </div>
    </div>
  );
}
