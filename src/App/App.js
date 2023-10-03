import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Mobiles from './Pages/Mobiles';
import EmptyPage from './Pages/EmptyPage';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';
import Profile from './Pages/Profile';
import Account from './Pages/Account/Account';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mobiles/:id" element={<Mobiles />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:id" element={<EmptyPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/account/:id" element={<Account />} />
    </Routes>
  );
}

export default App;
