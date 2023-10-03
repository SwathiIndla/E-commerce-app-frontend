/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import './DetailedCards.css';
import { Paper, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

function DetailedCards(props) {
  const [isFavorite, setIsFourite] = useState(false);
  const isMobile = useMediaQuery('(max-width:800px)');
  const { mobileData } = props;
  const { specifications } = mobileData;

  const handleChange = (e) => {
    e.preventDefault();
    setIsFourite((prev) => !prev);
  };

  return (
    <Link to={`/product/${mobileData.productItemId}`} className="detailed-card-link">
      <Paper className="mobile-container">
        {isMobile ? (
          <>
            <div className="mobile-card">
              <img src={mobileData.productItemImage.split(',')[0]} alt="mobile-img" className="mobile-img" />
              { isFavorite ? <FavoriteIcon sx={{ color: 'red' }} onClick={handleChange} fontSize="small" /> : <FavoriteIcon sx={{ color: 'gray' }} onClick={handleChange} fontSize="small" /> }
              <div className="mobile-details">
                <Typography variant="h6" className="mobile-title">{mobileData.productItemName}</Typography>
                <div className="rating">
                  <Typography variant="subtitle2" fontSize="inherit" lineHeight="unset">{mobileData.rating}</Typography>
                  <StarRateIcon color="inherit" fontSize="inherit" />
                </div>
                <div className="mobile-price-tag">
                  <Typography variant="h6" component="h6">{`₹ ${mobileData.price}`}</Typography>
                  <Typography variant="subtitle1" className="deals">
                    <span style={{ color: 'gray', textDecoration: 'line-through' }}>{`₹ ${mobileData.price - 3000}`}</span>
                    % 3 discount
                  </Typography>
                  <Typography variant="caption">Delivery within 3 days of order</Typography>
                  <Typography variant="caption">Hdfc bank offers</Typography>
                </div>
              </div>
            </div>
            <div className="mobile-specifications">
              <Typography variant="caption" className="mobile-specification-details">{`${specifications.Processor}`}</Typography>
              <Typography variant="caption" className="mobile-specification-details">{`${specifications.Battery}`}</Typography>
              <Typography variant="caption" className="mobile-specification-details">{`${specifications.RAM} RAM`}</Typography>
              <Typography variant="caption" className="mobile-specification-details">{`${specifications.Screen_Size}${specifications.Resolution}`}</Typography>
              <Typography variant="caption" className="mobile-specification-details">{`${specifications.Primary_Camera} Camera`}</Typography>
            </div>
          </>
        )
          : (
            <>
              <div className="mobile-card">
                <img src={mobileData.productItemImage.split(',')[0]} alt="mobile-img" className="mobile-img" />
                { isFavorite ? <FavoriteIcon sx={{ color: 'red' }} onClick={handleChange} fontSize="small" /> : <FavoriteIcon sx={{ color: 'gray' }} onClick={handleChange} fontSize="small" /> }
                <div className="mobile-details">
                  <Typography variant="h5" className="mobile-title">{mobileData.productItemName}</Typography>
                  <div className="rating">
                    <Typography variant="subtitle2" fontSize="inherit" lineHeight="unset">{mobileData.rating}</Typography>
                    <StarRateIcon color="inherit" fontSize="inherit" />
                  </div>
                  <ul className="specifications-list">
                    <li>{`${specifications.Processor}`}</li>
                    <li>{`${specifications.Battery}`}</li>
                    <li>{`${specifications.RAM} RAM`}</li>
                    <li>{`${specifications.Screen_Size}${specifications.Resolution}`}</li>
                    <li>{`${specifications.Primary_Camera} Camera`}</li>
                  </ul>
                </div>
                <div className="price-tag">
                  <Typography variant="h5" component="h4">{`₹ ${mobileData.price}`}</Typography>
                  <Typography variant="subtitle1" className="deals">
                    <span style={{ color: 'gray', textDecoration: 'line-through' }}>{`₹ ${mobileData.price - 3000}`}</span>
                    % 3 discount
                  </Typography>
                  <Typography variant="subtitle1">Delivery within 3 days of order</Typography>
                  <Typography variant="subtitle1">Hdfc bank Offers available</Typography>
                </div>
              </div>

              <input type="checkbox" />
              Compare
            </>
          )}
      </Paper>
    </Link>
  );
}

export default DetailedCards;
