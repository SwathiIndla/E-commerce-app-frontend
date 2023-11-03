/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { TextField, Typography, useMediaQuery } from '@mui/material';
import Header from '../../Components/Header';
import { Categories } from '../../Components/Header/Categories';
import Footer from '../../Components/Footer';
import Orders from '../OrdersPage';
import './index.css';
import Address from '../../Components/Address';
import { useCartContext } from '../../Components/Context/CartContext';

export default function Profile() {
  const email = localStorage.getItem('customerEmail');
  const [cartItems, setCartState, changeQuantity, addToCart, removeProduct, setIsLoggedIn] = useCartContext();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isMobile = useMediaQuery('(max-width:768px)');
  const value = searchParams.get('value');
  const selected = value || 'email';

  const handleClick = (e) => {
    const { innerText } = e.target;
    navigate(`/profile?value=${innerText.toLowerCase()}`);
  };

  const logOut = () => {
    localStorage.clear();
    Cookies.remove('jwtToken');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="profile-container">
      <Header />
      <Categories />
      <div className="profile-outer-container">
        <div className="profile-inner-page-container">
          {!isMobile && <Typography variant="h5" fontSize="1.5rem" className="profile-heading">Profile</Typography>}
          <div onClick={handleClick} className={`profile-page-names ${selected === 'email' && 'selected'}`}>Email</div>
          <div onClick={handleClick} className={`profile-page-names ${selected === 'address' && 'selected'}`}>Address</div>
          <div onClick={handleClick} className={`profile-page-names ${selected === 'orders' && 'selected'}`}>Orders</div>
          <div onClick={logOut} className="profile-page-names">Log Out</div>
        </div>
        {/* <div> */}
        <div className="profile-address-container">
          {
              selected === 'email' && (
              <>
                <Typography variant="h5">Email</Typography>
                <TextField value={email} fullWidth disabled />
              </>
              )
            }
          {selected === 'address' && <Address profilePage />}
          {selected === 'orders' && <Orders />}
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
