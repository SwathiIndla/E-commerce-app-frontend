/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import './index.css';
import { Paper, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

function DetailedCards(props) {
  const [isFavorite, setIsFourite] = useState(false);
  const { mobileData, compare, setCompare } = props;
  const { productItemId, productItemName } = mobileData;
  const isAvailable = compare?.filter((i) => i.id === productItemId).length !== 0;
  const [check, setCheck] = useState(isAvailable);
  const isMobile = useMediaQuery('(max-width:800px)');
  const { specifications } = mobileData;

  const handleChange = (e) => {
    e.preventDefault();
    setIsFourite((prev) => !prev);
  };

  const handleCompare = (e) => {
    const { id, name, checked } = e.target;
    console.log(checked);
    if (compare.length < 2 && checked) {
      setCompare((prev) => [...prev, { id, name }]);
      localStorage.setItem('compare', JSON.stringify([...compare, { id, name }]));
      setCheck(true);
    }
    console.log(compare);
    if (!checked) {
      setCheck(false);
      setCompare(compare.filter((i) => i.id !== id));
      localStorage.setItem('compare', JSON.stringify(compare?.filter((i) => i.id !== id)));
    }
  };

  return (
    <Paper className="mobile-container">
      {isMobile ? (
        <Link to={`/product/${productItemId}`} className="detailed-card-link">
          <div className="mobile-card">
            <img src={mobileData.productItemImage.split(',')[0]} alt="mobile-img" className="mobile-img" />
            { isFavorite ? <FavoriteIcon sx={{ color: 'red' }} onClick={handleChange} fontSize="small" /> : <FavoriteIcon sx={{ color: 'gray' }} onClick={handleChange} fontSize="small" /> }
            <div className="mobile-details">
              <Typography variant="h6" className="mobile-title">{productItemName}</Typography>
              <div className="rating">
                <Typography variant="subtitle2" fontSize="inherit" lineHeight="unset">{mobileData.rating}</Typography>
                <StarRateIcon color="inherit" fontSize="inherit" />
              </div>
              <div className="mobile-price-tag">
                <Typography variant="h6" component="h6">{`₹ ${mobileData.price}`}</Typography>
                <Typography variant="caption">Delivery within 7 days of order</Typography>
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
        </Link>
      )
        : (
          <>
            <Link to={`/product/${productItemId}`} className="detailed-card-link">
              <div className="mobile-card">
                <img src={mobileData.productItemImage.split(',')[0]} alt="mobile-img" className="mobile-img" />
                { isFavorite ? <FavoriteIcon sx={{ color: 'red' }} onClick={handleChange} fontSize="small" /> : <FavoriteIcon sx={{ color: 'gray' }} onClick={handleChange} fontSize="small" /> }
                <div className="mobile-details">
                  <Typography variant="h5" className="mobile-title">{productItemName}</Typography>
                  <div className="rating">
                    <Typography variant="subtitle2" fontSize="inherit" lineHeight="unset">{mobileData.rating}</Typography>
                    <StarRateIcon color="inherit" fontSize="inherit" />
                  </div>
                  <ul className="mobile-specifications-list">
                    <li>{`${specifications.Processor}`}</li>
                    <li>{`${specifications.Battery}`}</li>
                    <li>{`${specifications.RAM} RAM`}</li>
                    <li>{`${specifications.Screen_Size}${specifications.Resolution}`}</li>
                    <li>{`${specifications.Primary_Camera} Camera`}</li>
                  </ul>
                </div>
                <div className="price-tag">
                  <Typography variant="h5" component="h4">{`₹${mobileData.price}`}</Typography>
                  <Typography variant="subtitle1">Delivery within 7 days of order</Typography>
                </div>
              </div>
            </Link>
            <label htmlFor={productItemId}>
              <input
                type="checkbox"
                id={productItemId}
                name={productItemName}
                onChange={handleCompare}
                checked={check}
              />
              Add to Compare
            </label>
          </>
        )}
    </Paper>
  );
}

export default DetailedCards;
