import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Mobiles from './Pages/Mobiles';
import EmptyPage from './Pages/EmptyPage';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';
import { Brands } from './Components/DetailedCards/ColoredCards';
import Profile from './Pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mobiles" element={<Mobiles />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:id" element={<EmptyPage />} />
      <Route path="/a" element={<ProductPage />} />
      <Route path="/c" element={<Brands />} />
    </Routes>
  );
}

export default App;
