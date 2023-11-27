/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';
import Cookies from 'js-cookie';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

function SpecificationsCard(props) {
  const [cartItems, setCartState, changeQuantity, addToCart, removeProduct, setIsLoggedIn] = useCartContext();
  const { productItemDetails } = props;
  const { specifications, sellers, productItemId } = productItemDetails;
  const isProductInCart = cartItems.filter((item) => item.productItemId === productItemId).length > 0;
  const customerId = localStorage.getItem('customerId');
  const jwtToken = Cookies.get('jwtToken');
  const navigate = useNavigate();
  const location = useLocation();

  const addProductsToCart = async () => {
    if (jwtToken) {
      const { sellerId } = sellers[0];
      await addToCart(productItemId, sellerId);
    } else {
      navigate(`/account/login?value=true&redirectTo=${location.pathname}${location.search}`);
    }
  };

  const handleBuyNow = async () => {
    if (jwtToken) {
      if (!isProductInCart) await addProductsToCart();
      navigate(`/checkout?buynow=${productItemId}`);
    } else {
      navigate(`/account/login?value=true&redirectTo=${location.pathname}${location.search}`);
    }
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <ul className="specifications-list">
      {Object.keys(specifications)
        .sort()
        .map((item) => (
          <li className="specification" key={item}>
            {`${specifications[item]} ${item.split('_').join(' ')}`}
          </li>
        ))}
      <div className="specifications-button-container">
        <button
          type="button"
          className="specifications-button"
          onClick={isProductInCart ? navigateToCart : addProductsToCart}
        >
          {isProductInCart ? 'Go To Cart' : 'Add to Cart'}
        </button>
        <button type="button" className="specifications-button" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </ul>
  );
}

export default SpecificationsCard;
