import React, { useState } from 'react';
import { FaShoppingCart, FaTrashAlt, FaChevronLeft } from 'react-icons/fa';
import { BiSad } from 'react-icons/bi';
import { useCart } from '../context/CartContext';
import Payment from './Payment';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [removing, setRemoving] = useState(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) updateQuantity(id, newQuantity);
  };

  const handleRemove = (id) => {
    setRemoving(id);
    setTimeout(() => {
      removeFromCart(id);
      setRemoving(null);
    }, 300);
  };

  const handleCheckout = () => setShowPayment(true);

  if (showPayment) {
    return <Payment total={total} onCancel={() => setShowPayment(false)} />;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto font-sans">

      <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <FaShoppingCart className="mr-3 text-amber-500" /> Your Cart
        </h1>
        {cart.length > 0 && (
          <span className="bg-amber-100 text-amber-800 text-sm font-medium py-1 px-3 rounded-full">
            {cart.length} {cart.length === 1 ? 'item' : 'items'}
          </span>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg shadow-sm">
          <BiSad className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-xl text-gray-600 ">Your cart is empty</p> <br />
          <Link to="/menu" className="mt-6 bg-amber-500 text-white font-medium py-2 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="mb-4 overflow-hidden">
              <div
                className={`flex flex-col md:flex-row justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${
                  removing === item.id ? 'opacity-50' : ''
                }`}
              >
                <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                  <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                  <p className="text-amber-600 font-medium">Rs.{item.price.toFixed(2)}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="bg-gray-100 text-gray-700 font-medium py-1 px-3 hover:bg-amber-500 hover:text-white transition-colors duration-300"
                    >
                      -
                    </button>
                    <div className="bg-white px-6 py-1 font-medium">{item.quantity}</div>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="bg-gray-100 text-gray-700 font-medium py-1 px-3 hover:bg-amber-500 hover:text-white transition-colors duration-300"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="flex items-center justify-center bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white font-medium py-1.5 px-4 rounded-full transition-colors duration-300"
                  >
                    <FaTrashAlt className="mr-1" size={14} /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-medium">Rs.{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <span className="text-gray-600">Delivery:</span>
              <span className="font-medium text-green-600">Free</span>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-lg font-bold text-gray-800">Total:</span>
              <span className="text-2xl font-bold text-amber-600">Rs.{total.toFixed(2)}</span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-100 text-gray-800 font-medium py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex justify-center items-center"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 bg-amber-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-amber-600 transition-colors duration-300 flex justify-center items-center"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
