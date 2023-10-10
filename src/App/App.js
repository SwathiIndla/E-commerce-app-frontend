import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';
import Home from './Pages/Home';
import Mobiles from './Pages/Mobiles';
import EmptyPage from './Pages/EmptyPage';
import Cart from './Pages/Cart';
import ProductPage from './Pages/ProductPage';
import Profile from './Pages/Profile';
import Account from './Pages/Account/Account';
import Compare from './Pages/ComparePage';
import FilteredMobiles from './Pages/Mobiles/FilteredMobiles';
import { Brands } from './Components/ColoredCards';

function App() {
  const jwtToken = Cookies.get('jwtToken');
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mobiles/:id" element={<Mobiles />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:id" element={<EmptyPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      {!jwtToken && <Route path="/account/:id" element={<Account />} />}
      <Route path="/compare" element={<Compare />} />
      <Route path="/search/:id" element={<FilteredMobiles />} />
      <Route path="/filter/:id" element={<FilteredMobiles />} />
      <Route path="/brands" element={<Brands />} />
    </Routes>
  );
}

export default App;
