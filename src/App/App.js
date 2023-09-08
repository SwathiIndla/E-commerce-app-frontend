import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddressForm from './Components/AddressForm';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import TransitionsModal from './Components/Modal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addressform" element={<AddressForm />} />
      <Route path="/a" element={<TransitionsModal />} />
    </Routes>
  );
}

export default App;
