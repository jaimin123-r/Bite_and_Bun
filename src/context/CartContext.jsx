import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  

  useEffect(() => {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    setItemCount(count);
  }, [cart]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        toast.success(`Added another ${item.name} to your cart!`);
        return prevCart.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      toast.success(`Added ${item.name} to your cart!`);
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => {
      const removedItem = prevCart.find(item => item.id === itemId);
      if (removedItem) {
        toast.info(`Removed ${removedItem.name} from your cart.`);
      }
      return prevCart.filter(item => item.id !== itemId);
    });
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Your cart has been cleared.');
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, itemCount,updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};