/* eslint-disable max-len */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import {
  useMediaQuery, Typography, CircularProgress, Button,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Cookies from 'js-cookie';
import Header from '../../Components/Header';
import { Categories } from '../../Components/Header/Categories';
import Footer from '../../Components/Footer';
import './ProductPage.css';
import { getProductUrl, cartUrl } from '../../Environment/URL';

export default function ProductPage() {
  const [data, setData] = useState({});
  const [hover, setHover] = useState('0');
  const [imgData, setImgData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const isMobile = useMediaQuery('(max-width:800px)');
  const { id } = useParams();
  const navigate = useNavigate();
  const { specifications, sellers, productItemDescription } = data;
  const descriptions = productItemDescription?.split('_');

  const handleChange = (e) => {
    setHover(e.target.id);
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

  useEffect(() => async () => {
    try {
      const options = {
        method: 'GET',
      };

      const response = await fetch(`${getProductUrl}${id}`, options);
      const responseJson = await response.json();
      setData(responseJson.productItemDetails);
      setImgData(responseJson.productItemDetails.productItemImage.split(','));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const checkProductInCart = async () => {
    const jwtToken = Cookies.get('jwtToken');
    const customerId = localStorage.getItem('customerId');

    if (jwtToken && Object.keys(data).length > 0) {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
            Authorization: `Bearer ${jwtToken}`,
          },
        };
        const url = `${cartUrl}/IsProductItemInCart/${customerId}/${data.productItemId}`;
        const response = await fetch(url, options);
        const responseJson = await response.json();
        setIsProductInCart(responseJson.isAvailable);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    setTimeout(checkProductInCart, 500);
  }, [data]);

  const addToCart = async () => {
    setLoading(true);
    const customerId = localStorage.getItem('customerId');
    const jwtToken = Cookies.get('jwtToken');

    const cartItem = {
      customerId,
      productItemId: data.productItemId,
      quantity: 1,
      sellerId: sellers[0].sellerId,
    };
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(cartItem),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(cartUrl, options);
      const responseJson = await response.json();
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <Box sx={{ overflowY: 'scroll' }} height="100vh" bgcolor="#e8eaed">
      <Header />
      <Categories />
      {
        Object.keys(data).length > 0
          ? (
            <Box display={isMobile ? 'block' : 'grid'} gridTemplateColumns="45% 55%" margin={isMobile ? '0 1rem' : '0 2.5px'} bgcolor="ghostwhite">
              <Box>
                <Box display="flex" justifyContent="center" alignItems="center" sx={isMobile && { flexDirection: 'column-reverse' }}>
                  <Box display="flex" flexDirection={isMobile ? 'row' : 'column'} alignItems="center" justifyContent="center" m={1} overflow="auto" width={isMobile ? '100%' : '20%'}>
                    {imgData.length > 0 && imgData.map((img, index) => (
                      <div className="img-item" style={hover === `${index}` ? style : {}}>
                        <img src={img} id={index} alt="img" onMouseOver={handleChange} onClick={handleChange} className="product-img" />
                      </div>
                    ))}
                  </Box>
                  <Box margin={2} width="80%" textAlign="center">
                    <img src={imgData[hover]} alt="img" className="displaying-img" />
                  </Box>
                </Box>
                <Box className="buy-cart-buttons-container">
                  {
                    isProductInCart ? (
                      <button type="button" className="cart-button" onClick={() => navigate('/cart')}>
                        <ShoppingCartIcon fontSize="inherit" /> GO TO CART
                      </button>
                    )
                      : (
                        <button type="button" className="cart-button" onClick={addToCart} disabled={loading}>
                          {loading ? <CircularProgress /> : <ShoppingCartIcon fontSize="inherit" />}
                          {loading ? 'Adding to Cart' : 'Add to cart'}
                        </button>
                      )

                  }
                  <button type="button" className="buy-button"><FlashOnIcon fontSize="inherit" /> BUY NOW</button>
                </Box>
              </Box>
              <Box m={1} flexGrow={1}>
                <div className="mobile-details">
                  <Typography variant="h5" className="mobile-title">{data.productItemName}</Typography>
                  <div className="rating">
                    <Typography variant="subtitle2" fontSize="inherit">{data.rating}</Typography>
                    <StarRateIcon color="inherit" fontSize="inherit" />
                  </div>
                  <div className="mobile-price-tag">
                    <Typography variant="h5" component="h5">{`₹ ${data.price}`}</Typography>
                    <Typography variant="subtitle1" className="deals">
                      <span style={{ color: 'gray', textDecoration: 'line-through' }}>{`₹ ${data.price - 3000}`}</span>
                      {''} 3% discount
                    </Typography>
                    <Typography>Delivery within 3 days of order</Typography>
                    {bankOffers}
                  </div>
                  <Box display="grid" fontSize="14px">
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
                        <li>{specifications.RAM} RAM | {specifications.Storage} ROM</li>
                        <li>{specifications.Screen_Size} {specifications.Resolution} AMOLED Display</li>
                        <li>{specifications.Primary_Camera} (OIS) + 8MP + 2MP | {specifications.Secondary_Camera} Front Camera</li>
                        <li>{specifications.Battery} Lithium Polymer Battery</li>
                        <li>{specifications.Processor}</li>
                      </ul>
                    </Box>
                  </Box>
                  <Box marginTop={1} display="grid" gridTemplateColumns="30% 60%" rowGap={2} fontSize="14px">
                    {
                      descriptions.map((e, index) => {
                        if (index % 2 === 0) {
                          return (
                            <>
                              <Box><Typography color="GrayText" fontSize="inherit">{e}</Typography></Box>
                              <Box>{descriptions[index + 1]}</Box>
                            </>
                          );
                        }
                        return '';
                      })
                    }
                  </Box>
                </div>
              </Box>
            </Box>
          )
          : <CircularProgress />
      }
      <Footer />
    </Box>
  );
}
