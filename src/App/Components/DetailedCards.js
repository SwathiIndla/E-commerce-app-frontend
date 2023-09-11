import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import './DetailedCards.css';
import { Paper, Typography } from '@mui/material';

function DetailedCards() {
  const [isFavorite, setIsFourite] = useState(false);
  const handleChange = () => {
    setIsFourite((prev) => !prev);
  };
  return (
    <Paper className="mobile-container">
      <div className="mobile-card">
        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/m/w/-original-imag47fdfgmg2gnh.jpeg?q=70" alt="mobile-img" className="mobile-img" />
        { isFavorite ? <FavoriteIcon sx={{ color: 'red' }} onClick={handleChange} fontSize="small" /> : <FavoriteIcon sx={{ color: 'gray' }} onClick={handleChange} fontSize="small" /> }
        <div className="mobile-details">
          <Typography variant="h5" fontSize="1.25rem" fontWeight="500" className="mobile-title">Mobile Title(Specifications)</Typography>
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
          <Typography variant="h4" component="h3">Price</Typography>
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
    </Paper>
  );
}

export default DetailedCards;
