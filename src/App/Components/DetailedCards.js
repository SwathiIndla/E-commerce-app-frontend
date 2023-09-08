import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import './DetailedCards.css';
import { Typography } from '@mui/material';

function DetailedCards() {
  return (
    <div className="mobile-container">
      <div className="mobile-card">
        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/m/w/-original-imag47fdfgmg2gnh.jpeg?q=70" alt="mobile-img" />
        { true ? <FavoriteBorderIcon /> : <FavoriteIcon /> }
        <div className="mobile-details">
          <Typography variant="h5">Mobile Title(Specifications)</Typography>
          <div className="rating">
            <StarRateIcon color="warning" />
            <Typography variant="subtitle2">Rating</Typography>
          </div>
          <ul>
            <li>Specifications</li>
            <li>Display</li>
            <li>Processor</li>
            <li>Camera</li>
            <li>Battery</li>
          </ul>
        </div>
      </div>
      <input type="checkbox" />
      Compare
    </div>
  );
}

export default DetailedCards;
