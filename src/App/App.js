import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddressForm from './Components/AddressForm';
import Mobiles from './Components/Mobiles';
import EmptyPage from './Components/EmptyPage';
import Cart from './Components/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addressform" element={<AddressForm />} />
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:id" element={<EmptyPage />} />
    </Routes>
  );
}

export default App;
