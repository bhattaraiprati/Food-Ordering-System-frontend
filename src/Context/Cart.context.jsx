// src/Context/Cart.context.jsx
import React, { createContext, useState, useContext } from "react";
import { UserContext } from "./User.context";
import { useNavigate } from "react-router";
import { ErrorMessageToast } from "../utils/Toastify.util";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // const navigate = useNavigate();
  const {_user} = useContext(UserContext);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if(localStorage.getItem("is_Login") === "0"){
      ErrorMessageToast("Please Login First");
    }
    else{
      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (cartItem) => cartItem.id === item.id
        );
        if (existingItem) {
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        }
        return [...prevCart, { ...item, quantity: 1 }];
      });

    }
    
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};