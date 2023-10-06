/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button, TextField, Typography } from '@mui/material';
import Header from '../../Components/Header';
import { Categories } from '../../Components/Header/Categories';
import Footer from '../../Components/Footer';
import AddressForm from '../../Components/Address/AddressForm';
import Orders from '../OrdersPage';
// import DisplayAddress from '../../Components/Address/DisplayAddress';
import './Profile.css';

export default function Profile() {
  const email = localStorage.getItem('customerEmail');
  const [selected, setSelected] = useState('Email');
  const navigate = useNavigate();

  const handleClick = (e) => {
    const { innerText } = e.target;
    setSelected(innerText);
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
          <Typography variant="h5" className="profile-heading">Profile</Typography>
          <div onClick={handleClick} className={`profile-page-names ${selected === 'Email' && 'selected'}`}>Email</div>
          <div onClick={handleClick} className={`profile-page-names ${selected === 'Address' && 'selected'}`}>Address</div>
          <div onClick={handleClick} className={`profile-page-names ${selected === 'Orders' && 'selected'}`}>Orders</div>
          <div onClick={logOut} className="profile-page-names">Log Out</div>
        </div>
        <div>
          <div className="profile-address-container">
            {
              selected === 'Email' && (
              <>
                <Typography variant="h5">Email</Typography>
                <TextField value={email} fullWidth disabled />
              </>
              )
            }
            {selected === 'Address' && <Address />}
            {selected === 'Orders' && <Orders />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Address() {
  const [showAddressForm, setShowAddressForm] = useState(false);

  return (
    <>
      <Typography variant="h5">Address</Typography>
      { showAddressForm ? <AddressForm setShowAddressForm={setShowAddressForm} heading="Add New" mode="new" /> : <Button type="button" variant="outlined" startIcon={<AddIcon />} onClick={() => setShowAddressForm(true)}>Add new address</Button> }
      {/* { data.length > 0 ? (<DisplayAddress data={{ ...data[0] }} />) : '' } */}
    </>
  );
}
