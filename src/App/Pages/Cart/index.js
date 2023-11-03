/* eslint-disable max-len */
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
import './index.css';
import Footer from '../../Components/Footer';
import { useCartContext } from '../../Components/Context/CartContext';

const jwtToken = Cookies.get('jwtToken');

export default function Cart() {
  const [cartItems] = useCartContext();
  const [cartData, setCartData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [cartState, setCartState] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCartData(cartItems);
  }, [cartItems]);

  const toCheckOut = () => { navigate('/checkout'); };

  return (
    <div className="cart-outer-container">
      <Header />
      {
        cartData.length > 0 ? (
          <Box className="cart-container">
            <Box sx={{ marginBottom: '.5rem', padding: '.5rem' }}>
              <Typography variant="h5" textAlign="center" fontSize="2rem" className="cart-heading">CART</Typography>
            </Box>
            {cartData.map((data) => (
              <CartItems
                data={data}
                key={data.cartProductItemId}
              />
            ))}
            <div className="place-order-button-container">
              <button type="button" className="place-order" onClick={toCheckOut}>Place Order</button>
            </div>
          </Box>
        )
          : <EmptyCart />
      }
      <Footer />
    </div>
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
        alt="empty cart"
        className="empty-cart-img"
      />
      <Typography variant="h5">Your cart is Empty</Typography>
      <Typography variant="subtitle2">Add items to the cart</Typography>
      <Button type="button" onClick={toHome} variant="contained" sx={{ width: '60%' }}>Shop Now</Button>
    </Box>
  );
}

export function CartItems(props) {
  const [cartItems, setCartState, changeQuantity, addToCart, removeProduct, setIsLoggedIn] = useCartContext();
  const { data } = props;
  const { cartProductItemId } = data;
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date();
  const day = weekdays[d.getDay() - 1];

  const increaseQuantity = () => { changeQuantity(cartProductItemId, data.quantity + 1); };
  const decreaseQuantity = () => { changeQuantity(cartProductItemId, data.quantity - 1); };

  const removeProductFromCart = () => {
    removeProduct(cartProductItemId);
  };

  return (
    <Box className="cart-item-container" display="flex" flexDirection="column">
      <Box className="cart-item" display="flex" gap="4%">
        <Link to={`/product?id=${data.productItemId}`}>
          <img
            className="item-img"
            src={data.productItemImage.split(',')[0]}
            alt="cartItem"
          />
        </Link>
        <Box gap={1} display="flex" flexDirection="column">
          <Typography variant="h5" fontWeight={400} fontSize={24}>{data.productItemName}</Typography>
          <Typography variant="body1" fontSize={16}>Delivery by next {day}</Typography>
          <Typography variant="body1" fontSize={16} color="GrayText">{data.sellerName}</Typography>
          <Typography fontWeight={500} fontSize={20}>
            ₹{data.price}
            <span className="offer"> %offers</span>
          </Typography>
        </Box>
      </Box>
      <ButtonGroup sx={{ margin: '1rem 0' }}>
        <IconButton onClick={decreaseQuantity} disabled={data.quantity <= 1}>
          <RemoveIcon className="icon-button" fontSize="2rem" />
        </IconButton>
        <span className="quantity">{data.quantity}</span>
        <IconButton onClick={increaseQuantity}>
          <AddIcon className="icon-button" fontSize="2rem" />
        </IconButton>
        <Button type="button" variant="text" color="inherit" aria-label="remove" onClick={removeProductFromCart}>Remove</Button>
      </ButtonGroup>
    </Box>
  );
}
