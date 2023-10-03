/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Button, ButtonGroup, IconButton, Paper, Typography, Snackbar,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import Cookies from 'js-cookie';
import Header from '../../Components/Header';
import { cartUrl } from '../../Environment/URL';
import './Cart.css';
import Footer from '../../Components/Footer';

const jwtToken = Cookies.get('jwtToken');

export default function Cart() {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => async () => {
    setLoading(true);
    const customerId = localStorage.getItem('customerId');

    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(`${cartUrl}/${customerId}`, options);
      if (response.ok) {
        const responseJson = await response.json();
        setCartData(responseJson);
        console.log(responseJson);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, []);

  const sum = cartData?.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

  return (
    <>
      <Header />
      {
        cartData.length > 0 ? (
          <Paper className="cart-container" elevation={2} sx={{ display: 'flex', flexDirection: 'column' }}>
            {cartData.map((data) => <CartItems data={data} key={data.cartProductItemId} />)}
            <Typography variant="h5" sx={{ alignSelf: 'flex-end', marginRight: '20%', marginBottom: '1rem' }}>Total = ₹ {sum}</Typography>
            <Button
              type="button"
              variant="contained"
              aria-label="place order"
              color="success"
              sx={{ alignSelf: 'flex-end', width: '12rem', marginRight: '20%' }}
            >
              Place Order
            </Button>
          </Paper>
        )
          : <EmptyCart />
      }
      <Footer />
    </>
  );
}

export function EmptyCart() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };
  return (
    <Box className="empty-cart">
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        width="40%"
        alt="empty cart"
      />
      <Typography variant="h5">Your cart is Empty</Typography>
      <Typography variant="subtitle2">Add items to the cart</Typography>
      <Button type="button" onClick={toHome} variant="contained" sx={{ width: '60%' }}>Shop Now</Button>
    </Box>
  );
}

export function CartItems(props) {
  const { data } = props;
  const [quantity, setQuantity] = useState(data.quantity);
  const navigate = useNavigate();

  const changeQuantity = async (e) => {
    const { ariaLabel } = e.target;
    setQuantity((prev) => (ariaLabel === 'increment' ? prev + 1 : prev - 1));

    const cartItem = {
      cartProductItemId: data.cartProductItemId,
      quantity: ariaLabel === 'increment' ? quantity + 1 : quantity - 1,
    };
    try {
      const options = {
        method: 'PUT',
        body: JSON.stringify(cartItem),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(cartUrl, options);
      // // const responseJson = await response.json();
    } catch (err) {
      console.log(err);
    }
  };

  const removeProduct = async () => {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(`${cartUrl}/${data.cartProductItemId}`, options);
      // const responseJson = await response.json();
      console.log(response, 'cart');
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box className="cart-item-container" display="flex" flexDirection="column">
      <Box className="cart-item" display="flex" gap="4%">
        <Link to={`/product/${data.productItemId}`}>
          <img
            className="item-img"
            src={data.productItemImage.split(',')[0]}
            alt="cartItem"
          />
        </Link>
        <Box gap={1} display="flex" flexDirection="column">
          <Typography variant="h5" fontWeight={400} fontSize={24}>{data.productItemName}</Typography>
          <Typography variant="body1" fontSize={16} color="GrayText">Specifications</Typography>
          <Typography variant="body1" fontSize={16} color="GrayText">{data.sellerName}</Typography>
          <Typography fontWeight={500} fontSize={20}>
            ₹{data.price}
            <span className="offer"> %offers</span>
          </Typography>
        </Box>
      </Box>
      <ButtonGroup sx={{ margin: '1rem 0' }}>
        <IconButton onClick={changeQuantity} aria-label="decrement" disabled={quantity === 1}>
          <RemoveIcon aria-label="decrement" className="icon-button" fontSize="2rem" />
        </IconButton>
        <span className="quantity">{quantity}</span>
        <IconButton onClick={changeQuantity} aria-label="increment">
          <AddIcon aria-label="increment" className="icon-button" fontSize="2rem" />
        </IconButton>
        <Button type="button" variant="text" color="inherit" aria-label="remove" onClick={removeProduct}>Remove</Button>
      </ButtonGroup>
    </Box>
  );
}
