import React, { useEffect, useState } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { motion } from 'framer-motion';

const backendBaseUrl = "https://bumpercheckbackend-production.up.railway.app";
// const backendBaseUrl = "http://localhost:5000";

function PaypalPaymentButton({ report, price, values, code, symbol }) {
  const [message, setMessage] = useState("");
  const [{ isPending, options }, dispatch] = usePayPalScriptReducer();

  const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;
    const browserMatch = /chrome|firefox|safari|edge|msie|trident/i.exec(userAgent);
    const osMatch = /windows|mac|linux|android|iphone/i.exec(userAgent);
    
    const browser = browserMatch ? browserMatch[0] : "unknown";
    const os = osMatch ? osMatch[0] : "unknown";
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenResolution = `${screenWidth}x${screenHeight}`;
  
    // Return essential information for backend processing
    return {
      browser,
      os,
      screenResolution,
    };
  };


  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: code,
      },
    });
  }, []);

  const Message = ({ content }) => {
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
          onClick={() => setMessage("")}
        >
          &#10005;
        </button>
      </motion.p>
    );
  };

  return (
    <>
      {isPending && (
        <div>
          <div className="bg-gray-300 h-8 w-full mb-4 rounded-sm animate-pulse"></div>
          <div className="bg-gray-300 h-8 w-full mb-4 rounded-sm animate-pulse"></div>
          <div className="bg-gray-300 h-4 w-1/2 mb-4 mx-auto animate-pulse"></div>
        </div>
      )}
      <PayPalButtons
        style={{
          shape: "rect",
          layout: "vertical",
        }}
        createOrder={async () => {
          try {
      
            const response = await fetch(`${backendBaseUrl}/api/orders`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                report: [
                  {
                    name: report,
                    quantity: "1",
                    price: `${price}`,
                    currency_code: code,
                    email:values.email
                  },
                ],
              }),
            });

            const orderData = await response.json();

            if (orderData.id) {
              return orderData.id;
            } else {
              const errorDetail = orderData?.details?.[0];
              const errorMessage = errorDetail
                ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                : JSON.stringify(orderData);

              throw new Error(errorMessage);
            }
          } catch (error) {
            setMessage(`Could not initiate PayPal Checkout...${error}`);
            throw error;
          }
        }}
        onApprove={async (data, actions) => {
          try {
            const deviceInfo = getDeviceInfo(); // Capture the device info
            const response = await fetch(

              `${backendBaseUrl}/api/orders/${data.orderID}/capture`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  values,
                  report,
                  price,
                  symbol,
                  device_info: deviceInfo, // Send the device info
                }),
              }
            );

            const orderData = await response.json();

            const errorDetail = orderData?.details?.[0];

            if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
              setMessage("Transaction instrument declined. Please try again.", "error");
              return actions.restart();
            } else if (errorDetail) {
              throw new Error(
                `${errorDetail.description} (${orderData.debug_id})`
              );
            } else {
              setMessage(
                `Payment Successful. Vin Report Purchasing Slip will be sent to your email.`
              );
            }
          } catch (error) {
            setMessage(
              `Sorry, your transaction could not be processed`
            );
          }
        }}
        onError={(err) => {
          if(err.message == "Failed to fetch"){
             setMessage(`Network error occurred: Check Your Internet Connection`);
          }else{
            setMessage(
              `Sorry, your transaction could not be processed...${err.message}`
            );
          }
        }}
      />
      {message && <Message content={message} />}
    </>
  );
}

export default PaypalPaymentButton;
