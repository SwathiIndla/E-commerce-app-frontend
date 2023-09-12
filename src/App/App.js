import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddressForm from './Components/AddressForm';
import Mobiles from './Components/Mobiles';
// hiii
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addressform" element={<AddressForm />} />
      <Route path="/mobiles" element={<Mobiles />} />
    </Routes>
  );
}

export default App;
