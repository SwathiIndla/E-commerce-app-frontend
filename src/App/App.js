import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import AddressForm from './Components/AddressForm';
import Mobiles from './Pages/Mobiles';
import EmptyPage from './Pages/EmptyPage';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addressform" element={<AddressForm />} />
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:id" element={<EmptyPage />} />
      <Route path="/a" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
