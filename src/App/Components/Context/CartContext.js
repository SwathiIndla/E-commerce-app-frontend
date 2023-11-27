/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  useEffect, createContext, useState, useMemo, useContext,
} from 'react';
import Cookies from 'js-cookie';
import { cartUrl } from '../../Environment/URL';

export const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartState, setCartState] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const customerId = localStorage.getItem('customerId');

  const changeQuantity = async (cartProductItemId, quantity) => {
    const cartItem = {
      cartProductItemId,
      quantity,
    };
    const jwtToken = Cookies.get('jwtToken');

    try {
      const options = {
        method: 'PUT',
        body: JSON.stringify(cartItem),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(cartUrl, options);
      setCartState((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async (productItemId, sellerId) => {
    const cartItem = {
      customerId,
      productItemId,
      quantity: 1,
      sellerId,
    };
    const jwtToken = Cookies.get('jwtToken');

    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(cartItem),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(cartUrl, options);
      setCartState((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const removeProduct = async (cartProductItemId) => {
    const jwtToken = Cookies.get('jwtToken');

    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(`${cartUrl}/${cartProductItemId}`, options);
      if (response.ok) setCartState((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(
    () => async () => {
      const jwtToken = Cookies.get('jwtToken');

      if (jwtToken) {
        try {
          const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json',
              Authorization: `Bearer ${jwtToken}`,
            },
          };
          const response = await fetch(
            `${cartUrl}/${localStorage.getItem('customerId')}`,
            options,
          );
          if (response.ok) {
            const responseJson = await response.json();
            setCartItems(responseJson);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setCartItems([]);
      }
    },
    [cartState, isLoggedIn],
  );

  const value = useMemo(
    () => [cartItems, setCartState, changeQuantity, addToCart, removeProduct, setIsLoggedIn],
    [cartItems],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
