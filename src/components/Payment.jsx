import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// You should replace this with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY');

const CheckoutForm = ({ total, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      // Here you would typically send the paymentMethod.id to your server
      // to complete the payment. For this example, we'll just simulate a successful payment.
      console.log('PaymentMethod', paymentMethod);
      alert('Payment successful!');
      setProcessing(false);
      // You might want to clear the cart and redirect to a confirmation page here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
      <div className="mb-4">
        <CardElement className="p-3 border rounded" />
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-black font-bold py-2 px-4 rounded hover:bg-gray-400 transition-colors duration-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || processing}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-400"
        >
          {processing ? 'Processing...' : `Pay Rs.${total.toFixed(2)}`}
        </button>
      </div>
    </form>
  );
};

const Payment = ({ total, onCancel }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm total={total} onCancel={onCancel} />
    </Elements>
  );
};

export default Payment;