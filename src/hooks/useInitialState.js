import React, { useState } from 'react';
import { DATA } from '../data/data';

// Este hook se encarga de manejar el estado de los productos que se agregan al carrito

export const useInitialState = () => {
  const [state, setState] = useState(DATA);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (index) => {
    setState({
      ...state,
      cart: state.cart.filter((items, currentIndex) => currentIndex !== index),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};
