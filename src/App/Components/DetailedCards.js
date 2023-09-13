import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import './DetailedCards.css';
import { Paper, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function DetailedCards() {
  const [isFavorite, setIsFourite] = useState(false);
  const isMobile = useMediaQuery('(max-width:800px)');

  const handleChange = () => {
    setIsFourite((prev) => !prev);
  };
  return (
    <Paper className="mobile-container">
      {isMobile ? (
        <>
          <div className="mobile-card">
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/m/w/-original-imag47fdfgmg2gnh.jpeg?q=70" alt="mobile-img" className="mobile-img" />
            { isFavorite ? <FavoriteIcon sx={{ color: 'red' }} onClick={handleChange} fontSize="small" /> : <FavoriteIcon sx={{ color: 'gray' }} onClick={handleChange} fontSize="small" /> }
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
          </div>
          <div className="mobile-specifications">
            <Typography variant="caption" className="mobile-specification-details">Specifications</Typography>
            <Typography variant="caption" className="mobile-specification-details">Display</Typography>
            <Typography variant="caption" className="mobile-specification-details">Battery</Typography>
            <Typography variant="caption" className="mobile-specification-details">Camera</Typography>
            <Typography variant="caption" className="mobile-specification-details">Processor</Typography>
          </div>
        </>
      )
        : (
          <>
            <div className="mobile-card">
              <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/m/w/-original-imag47fdfgmg2gnh.jpeg?q=70" alt="mobile-img" className="mobile-img" />
              { isFavorite ? <FavoriteIcon sx={{ color: 'red' }} onClick={handleChange} fontSize="small" /> : <FavoriteIcon sx={{ color: 'gray' }} onClick={handleChange} fontSize="small" /> }
              <div className="mobile-details">
                <Typography variant="h5" className="mobile-title">Mobile Title(Specifications)</Typography>
                <div className="rating">
                  <Typography variant="subtitle2" fontSize="inherit">Rating</Typography>
                  <StarRateIcon color="inherit" fontSize="inherit" />
                </div>
                <ul className="specifications-list">
                  <li>Specifications</li>
                  <li>Display</li>
                  <li>Processor</li>
                  <li>Camera</li>
                  <li>Battery</li>
                </ul>
              </div>
              <div className="price-tag">
                <Typography variant="h4" component="h4">$Price</Typography>
                <Typography variant="subtitle1" className="deals">
                  <span style={{ color: 'gray', textDecoration: 'line-through' }}> Price </span>
                  % Deals
                </Typography>
                <Typography variant="subtitle1">Delivery</Typography>
                <Typography variant="subtitle1">Offers</Typography>
                <Typography variant="subtitle1">Offers</Typography>
              </div>
            </div>

            <input type="checkbox" />
            Compare
          </>
        )}
    </Paper>
  );
}

export default DetailedCards;
