import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BackBtn } from './MenuBar';
import Payment from './Payment';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [showPayment, setShowPayment] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = () => {
    setShowPayment(true);
  };

  if (showPayment) {
    return <Payment total={total} onCancel={() => setShowPayment(false)} />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <BackBtn /> <br />
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-4 bg-gray-100 rounded-lg">
              <div>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">Rs.{item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-l hover:bg-gray-400 transition-colors duration-300"
                >
                  -
                </button>
                <span className="bg-white px-4 py-1">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="bg-gray-300 text-gray-700 font-bold py-1 px-3 rounded-r hover:bg-gray-400 transition-colors duration-300"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <p className="text-2xl font-bold">Total: Rs.{total.toFixed(2)}</p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={clearCart}
                className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300"
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

// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { BackBtn } from './MenuBar';

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <BackBtn/> <br />
//       <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map(item => (
//             <div key={item.id} className="flex justify-between items-center mb-4">
//               <div>
//                 <h2 className="text-xl font-bold">{item.name}</h2>
//                 <p>Rs.{item.price.toFixed(2)} x {item.quantity}</p>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="bg-red-500 text-white font-bold py-1 px-2 rounded hover:bg-red-600 transition-colors duration-300"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-8">
//             <p className="text-xl font-bold">Total: Rs.{total.toFixed(2)}</p>
//             <button
//               onClick={clearCart}
//               className="mt-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors duration-300"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;