/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  Typography, Button, Badge, IconButton, Box, Modal, Backdrop, Fade, Avatar,
} from '@mui/material';
import './Header.css';
import Cookies from 'js-cookie';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/favicon.ico';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import Search from './Search';
import { cartUrl } from '../../Environment/URL';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const email = localStorage.getItem('customerEmail');

  const handleClose = () => {
    setSignup(false);
    setOpen(false);
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90vw' : '50vw',
    height: '75vh',
    bgcolor: 'background.paper',
    boxShadow: 44,
  };

  useEffect(() => async () => {
    const jwtToken = Cookies.get('jwtToken');
    const customerId = localStorage.getItem('customerId');
    if (jwtToken) {
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
          setCartCount(responseJson.length);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
    Cookies.remove('jwtToken');
    navigate(0);
  };

  return (
    <div className="header">
      <nav className="nav-bar">
        <Link to="/" className="logo-link-element">
          <div className="logo-heading">
            <img src={logo} alt="logo" width={isMobile ? '40px' : '60px'} height={isMobile ? '30px' : '40px'} style={{ background: 'white' }} />
            <Typography variant="h5">BuyHere</Typography>
          </div>
        </Link>
        <div className="nav-tools">
          {!isMobile && (
          <Search />
          )}
          {
            email ? (
              <div className="avatar-container">
                <Avatar sx={{ color: 'blue', backgroundColor: 'white' }}>{email[0]}</Avatar>
                <div className="profile-dropdown-container">
                  <Button type="button" onClick={logOut}>
                    <PowerSettingsNewIcon />
                    Logout
                  </Button>
                  <Button type="button" onClick={() => navigate('/profile')}>
                    Profile
                  </Button>
                </div>
              </div>
            )
              : (
                <Button variant={isMobile ? 'text' : 'contained'} onClick={handleOpen} className="login-btn">Login</Button>)
          }
          {
          isMobile
            ? (
              <IconButton onClick={navigateToCart}>
                <Badge badgeContent={cartCount} color="warning">
                  <ShoppingCartIcon sx={{ color: 'whitesmoke' }} />
                </Badge>
              </IconButton>
            )
            : (
              <Button
                variant="text"
                startIcon={(
                  <Badge badgeContent={cartCount} color="warning">
                    <ShoppingCartIcon sx={{ color: 'whitesmoke' }} />
                  </Badge>
                        )}
                sx={{ color: 'whitesmoke' }}
                onClick={navigateToCart}
              >
                Cart
              </Button>
            )
}
        </div>
      </nav>
      {isMobile && (
      <Search />
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {signup ? <SignUp setSignup={setSignup} modal /> : <Login setSignup={setSignup} modal />}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
