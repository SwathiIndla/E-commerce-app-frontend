import React from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import { Categories } from '../../Components/Header/Categories';
import ForgotPassword from '../../Components/Login/ForgotPassword';
import Footer from '../../Components/Footer';
import Login from '../../Components/Login/Login';
import SignUp from '../../Components/Login/SignUp';

export default function Account() {
  const { id } = useParams();

  return (
    <div style={{ backgroundColor: 'ghostwhite' }}>
      <Header />
      <Categories images={false} />
      <Box height="80vh" margin="1rem 4rem">
        {id === 'login' && <Login />}
        {id === 'signup' && <SignUp />}
        {id === 'forgot' && <ForgotPassword />}
      </Box>
      <Footer />
    </div>
  );
}
