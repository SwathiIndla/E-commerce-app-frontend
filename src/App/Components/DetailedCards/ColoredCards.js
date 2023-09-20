import React from 'react';
import { Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import { brandColors } from '../../Data/data';
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
  const brands = brandColors.map((item) => (
    <div style={{
      display: 'flex', flexDirection: 'column', margin: '1rem', width: '150px', alignItems: 'center', gap: '.5rem',
    }}
    >
      <div
        className="colred-container"
        style={{ border: `4px ${`${item.borderType} ${item.color}`}` }}
      >
        <div className="brand-name" style={{ backgroundColor: item.color }}>
          <h2 style={{ margin: 'unset' }}>{item.name}</h2>
        </div>
      </div>
      <h4 style={{ margin: 'unset' }}>Shop Now</h4>
      <h3 style={{ margin: 'unset' }}>{item.name}</h3>
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
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
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
      <a href="hi">
        <img src="https://images.unsplash.com/photo-1635792106034-20a7b625f962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&h=150&w=100&q=60" style={{ borderRadius: '8px' }} alt="mbl" />
      </a>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a href="hi"><p>Image Title(spacificatiions)</p></a>
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
            fontSize: '1rem', textDecoration: 'line-through', fontStyle: 'italic', margin: '0 8px',
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
