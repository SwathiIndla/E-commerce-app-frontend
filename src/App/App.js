/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';
import AuthenticatedRoutes from './Components/AuthenticatedRoutes';
import NoResultsFound from './Components/NoResultsFound';
// import Cart from './Pages/Cart';
// import Profile from './Pages/Profile';

const Home = lazy(() => import('./Pages/Home'));
const Mobiles = lazy(() => import('./Pages/Mobiles'));
const EmptyPage = lazy(() => import('./Pages/EmptyPage'));
const Cart = lazy(() => import('./Pages/Cart'));
const ProductPage = lazy(() => import('./Pages/ProductPage'));
const Profile = lazy(() => import('./Pages/Profile'));
const Account = lazy(() => import('./Pages/Account'));
const Compare = lazy(() => import('./Pages/Compare'));
const CheckOut = lazy(() => import('./Pages/CheckOut'));
const FilteredMobiles = lazy(() => import('./Pages/Mobiles/FilteredMobiles'));
const { Brands } = lazy(() => import('./Components/ColoredCards'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles">
          <Route path="" element={<Mobiles />} />
          <Route path="filter/:id" element={<FilteredMobiles />} />
        </Route>
        <Route path="/search" element={<FilteredMobiles />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/account/login" element={<Account />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route
          path="/profile"
          element={(
            <AuthenticatedRoutes>
              <Profile />
            </AuthenticatedRoutes>
            )}
        />
        <Route
          path="/cart"
          element={(
            <AuthenticatedRoutes>
              <Cart />
            </AuthenticatedRoutes>
            )}
        />
        <Route path="*" element={<NoResultsFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
