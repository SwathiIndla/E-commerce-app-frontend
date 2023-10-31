/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  useEffect, createContext, useState, useMemo,
} from 'react';
import Cookies from 'js-cookie';
import { cartUrl } from '../../Environment/URL';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartState, setCartState] = useState(0);
  const jwtToken = Cookies.get('jwtToken');

  useEffect(() => async () => {
    const customerId = localStorage.getItem('customerId');
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
        const response = await fetch(`${cartUrl}/${customerId}`, options);
        if (response.ok) {
          const responseJson = await response.json();
          setCartItems(responseJson);
        }
      } catch (err) {
        console.log(err);
      }
    } else setCartItems([]);
  }, [cartState]);

  const changeQuantity = async (cartProductItemId, quantity) => {
    const cartItem = {
      cartProductItemId,
      quantity,
    };
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

  const value = useMemo(() => [cartItems, setCartState, changeQuantity], [cartItems]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
