import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';



const StripeCheckout = ({ report, price, values, code, symbol }) => {
    
  const stripe = useStripe();
  const elements = useElements();
  const [cardHolderName, setCardHolderName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);



  const Message = ( {content} ) => {
    return (
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 80,
          scale: [1, 1.2, 1],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.5,
          delay: 1,
        }}
        className="text-center bg-[#00C851] pt-6 pb-2 shadow-xl font-semibold text-white capitalize rounded fixed top-0 left-0 right-0  z-[2000] w-[90%] mx-auto"
      >
        {content}
        <button
          className="absolute top-1 right-2 text-black"
          onClick={() => setSuccess("")}
        >
          &#10005;
        </button>
      </motion.p>
    );
  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Client-side validation
    if (!cardHolderName) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    if (!stripe || !elements) {
      setError('Stripe.js has not loaded yet.');
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('Card details are not valid.');
      setLoading(false);
      return;
    }

    try {
      const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      const response = await fetch('https://correctvinapi-production-b95b.up.railway.app/api/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: (parseFloat(price) * 100), // Convert amount to cents
          payment_method: paymentMethod.id,
          card_holder_name: cardHolderName,
          currency: code,
          customer_email: values.email,
          customer_name: `${values.firstName} ${values.lastName}`,
          report,
          values,
          code,
          symbol
        }),
      });

      if (!response.ok) {
        throw new Error('Payment failed. Please try again.');
      }

      const responseData = await response.json();
      setSuccess('Payment successful. Vin Report Purchasing Slip will be sent to your email.');
      setError("")
      setCardHolderName('');
      cardElement.clear();
    } catch (error) {
      setError(error.message || 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    
      
   
        <div className="bg-white pt-8 pb-3 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-700">
                Cardholder Name
              </label>
              <div className="mt-1">
                <input
                  id="cardHolderName"
                  type="text"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                  className="outline-none shadow-sm block w-full sm:text-sm border-gray-300  rounded-md p-2"
                  placeholder="Enter Cardholder Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cardElement" className="block text-sm font-medium text-gray-700">
                Card Details
              </label>
              <div className="mt-1">
                <CardElement
                  id="cardElement"
                  className="shadow-sm block w-full sm:text-sm border-gray-300  rounded-md p-2"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`${loading && "cursor-not-allowed hover:bg-yellow-400 opacity-70"} mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                disabled={loading}
              >
                {loading ? 'Processing...' : `${symbol}${price} Pay Now`}
              </button>
            </div>
          </form>
          
          {success ? <p className="mt-4 text-green-500 text-sm">{success}</p> : error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
          {success && <Message content={success} />}
          <h4 className='font-semibold text-xs mt-6'>Secured and Powered <a target='_blank' href='https://stripe.com' className=' font-bold'>Stripe</a></h4>
        </div>

    
  );
};

export default StripeCheckout;
