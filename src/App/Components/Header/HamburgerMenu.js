/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function HamburgerMenu({ logOut, navigateToCart }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const roles = JSON.parse(localStorage.getItem('roles'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigateToLogin = () => {
    navigate('/account/login?value=true');
  };
  const handleLogOut = () => {
    handleClose();
    roles ? logOut() : navigateToLogin();
  };
  const handleProfile = () => {
    handleClose();
    navigate('/profile?value=email');
  };
  const handleCart = () => {
    handleClose();
    navigateToCart();
  };
  const handleSeller = () => {
    handleClose();
    navigate(roles?.includes('Seller') ? '/sellerpage' : '/becomeseller');
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: '#fff' }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleCart}>Cart</MenuItem>
        <MenuItem onClick={handleSeller}>{roles?.includes('Seller') ? 'Sell' : 'Become a seller'}</MenuItem>
        <MenuItem onClick={handleLogOut}>{roles ? 'LogOut' : 'Login'}</MenuItem>
      </Menu>
    </div>
  );
}
