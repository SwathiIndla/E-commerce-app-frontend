import React from 'react';
import { Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Header from './Header';
import './Cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };
  return (
    <>
      <Header />
      <Paper className="cart-container" elevation={2}>
        <Box className="empty-cart">
          <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" height="50%" width="80%" alt="empty cart" />
          <Typography variant="h5">Your cart is Empty</Typography>
          <Typography variant="subtitle2">Add items to the cart</Typography>
          <Button type="button" onClick={toHome} variant="contained" sx={{ width: '60%' }}>Shop Now</Button>
        </Box>
      </Paper>

    </>
  );
}
