/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button, TextField, Typography } from '@mui/material';
import Header from '../../Components/Header';
import { Categories } from '../../Components/Header/Categories';
import Footer from '../../Components/Footer';
import AddressForm from '../../Components/Address/AddressForm';
import Orders from '../OrdersPage';
import DisplayAddress from '../../Components/Address/DisplayAddress';
import { addressUrl } from '../../Environment/URL';
import './index.css';

const jwtToken = Cookies.get('jwtToken');

export default function Profile() {
  const email = localStorage.getItem('customerEmail');
  // const [selected, setSelected] = useState('Email');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const value = searchParams.get('value');
  const selected = value || 'email';

  const handleClick = (e) => {
    const { innerText } = e.target;
    navigate(`/profile?value=${innerText.toLowerCase()}`);
  };

  const logOut = () => {
    localStorage.clear();
    Cookies.remove('jwtToken');
    navigate('/');
  };

  return (
    <div className="profile-container">
      <Header />
      <Categories />
      <div className="profile-outer-container">
        <div className="profile-inner-page-container">
          <Typography variant="h5" fontSize="2rem" className="profile-heading">Profile</Typography>
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
          {selected === 'address' && <Address />}
          {selected === 'orders' && <Orders />}
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Address() {
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [availableAddresses, setAvailableAddesses] = useState([]);
  const [addressState, setAddressState] = useState(0);

  useEffect(() => async () => {
    console.log('hi');
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
      const response = await fetch(`${addressUrl}${customerId}`, options);
      if (response.status === 200) {
        const responseJson = await response.json();
        setAvailableAddesses(responseJson);
      }
      if (response.status === 204) setAvailableAddesses([]);
    } catch (err) {
      console.log(err);
    }
  }, [addressState]);

  return (
    <>
      <Typography variant="h5">Address</Typography>
      { showAddressForm
        ? <AddressForm setShowAddressForm={setShowAddressForm} heading="Add New" mode="new" setAddressState={setAddressState} />
        : (
          <Button
            type="button"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => setShowAddressForm(true)}
          >
            Add new address
          </Button>
        ) }
      { availableAddresses.length > 0 ? (<DisplayAddress data={availableAddresses[0]} setAddressState={setAddressState} />) : '' }
    </>
  );
}
