import React, { useState, useEffect } from 'react';
import {
  Button, ButtonGroup, IconButton, Paper, Typography, Snackbar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import Header from '../../Components/Header';
import './Cart.css';

export default function Cart() {
  return (
    <>
      <Header />
      <Paper className="cart-container" elevation={2} sx={{ display: 'flex', flexDirection: 'column' }}>
        <CartItems />
        <CartItems />
        <CartItems />
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
        height="50%"
        width="80%"
        alt="empty cart"
      />
      <Typography variant="h5">Your cart is Empty</Typography>
      <Typography variant="subtitle2">Add items to the cart</Typography>
      <Button type="button" onClick={toHome} variant="contained" sx={{ width: '60%' }}>Shop Now</Button>
    </Box>
  );
}

export function CartItems() {
  const [state, setState] = useState({ open: false, message: '' });
  const handleOPen = (e) => {
    setState({ open: true, message: `${e.target.ariaLabel} is clicked` });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setState({ open: false, message: '' });
    }, 3000);
    return () => clearInterval(interval);
  }, [state]);

  return (
    <Box className="cart-item-container" display="flex" flexDirection="column">
      <Box className="cart-item" display="flex" gap="4%">
        <img
          className="item-img"
          src="https://images.unsplash.com/photo-1693831828519-ef73eb723f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="cartItem"
        />
        <Box gap={1} display="flex" flexDirection="column">
          <Typography variant="h5" fontWeight={400} fontSize={28}>Item.title</Typography>
          <Typography variant="body1" fontSize={16} color="GrayText">Specifications</Typography>
          <Typography variant="body1" fontSize={16} color="GrayText">Item.sellingcompany</Typography>
          <Typography fontWeight={500}>
            Price
            {' '}
            <span className="offer">offers</span>
          </Typography>
        </Box>
      </Box>
      <ButtonGroup sx={{ margin: '1rem 0' }}>
        <IconButton onClick={handleOPen}><RemoveIcon aria-label="decrement" className="icon-button" fontSize="2rem" /></IconButton>
        <span className="quantity">4</span>
        <IconButton onClick={handleOPen}><AddIcon aria-label="increment" className="icon-button" fontSize="2rem" /></IconButton>
        <Button type="button" variant="text" color="inherit" onClick={handleOPen} aria-label="remove">Remove</Button>
      </ButtonGroup>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={state.open}
        onClose={() => setState({ open: false, message: '' })}
        message={state.message}
        key="bottom center"
      />
    </Box>
  );
}
