/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Modal } from '@mui/material';
import Header from '../../Components/Header';
import sellerImage from '../../Images/become-a-seller.jpg';
import './index.css';
import Footer from '../../Components/Footer';
import { addSellerUrl } from '../../Environment/URL';
import { useCartContext } from '../../Components/Context/CartContext';

export default function BecomeSeller() {
  const [cartItems, setCartState, changeQuantity, addToCart, removeProduct, setIsLoggedIn] = useCartContext();
  const roles = JSON.parse(localStorage.getItem('roles'));
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const logOut = () => {
    localStorage.clear();
    Cookies.remove('jwtToken');
    setIsLoggedIn(false);
    navigate('/');
  };

  const addUserAsSeller = async () => {
    setLoading(true);
    const jwtToken = Cookies.get('jwtToken');
    const customerId = localStorage.getItem('customerId');
    try {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(`${addSellerUrl}/${customerId}`, options);
      if (response.ok) {
        setResponseMessage({ message: 'Resgistered as Seller. Login to start', registered: true });
        setTimeout(logOut, 3000);
      } else {
        setResponseMessage({ message: 'Resgistration failed.Try Again', registered: false });
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    handleClose();
  };

  return (
    <>
      {roles?.includes('Seller') && <Navigate to="/sellerpage" replace />}
      <Header />
      <div className="become-seller-outer-container">
        <div className="become-a-seller-button-container">
          <h2 className="simple-text">Sell on BUY HERE</h2>
          <button type="button" className="become-a-seller-button orange-button" onClick={handleOpen}>Become a Seller ? </button>
        </div>
        {responseMessage && <h2 style={{ color: responseMessage.registered ? 'green' : 'red', textAlign: 'center' }}>{responseMessage?.message}</h2>}
        <div className="become-seller-image-container">
          <div className="button-container">
            <h2 className="some-text">Become a seller on BUY HERE</h2>
            <button type="button" className="start-selling-button orange-button" onClick={() => navigate('/sellerpage')}>Start Selling </button>
          </div>
          <img src={sellerImage} alt="become-a-seller" className="become-seller-image" />
        </div>
        <Modal open={open} onClose={handleClose}>
          <div className={`modal-inner-container ${loading ? 'mouse-loading' : ''}`}>
            <p>Are you sure you want to become a seller ?</p>
            <div className="modal-button-container">
              <button type="button" className="orange-button sure-button" onClick={addUserAsSeller}>Accept</button>
              <button type="button" className="orange-button cancel-button" onClick={handleClose}>Cancel</button>
            </div>
          </div>
        </Modal>
      </div>
      <Footer />
    </>
  );
}
