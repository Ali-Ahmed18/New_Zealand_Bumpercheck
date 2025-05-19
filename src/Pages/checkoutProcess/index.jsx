import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeadManager from '../../Components/headerManager.jsx';

function Process() {
  const location = useLocation();
  const formData = location.state;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!formData) {
      navigate(`/deals/${location.pathname.split("/")[2]}`);
    }
  }, [formData, navigate, location.pathname]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.height = '100%';
      document.documentElement.style.height = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.style.height = 'auto';
      document.documentElement.style.height = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      document.body.style.height = 'auto';
      document.documentElement.style.height = 'auto';
    };
  }, [isLoading]);

  if (!formData || !formData.values) {
    return <div>Error: Invalid data</div>;
  }

  const { values, content } = formData;
  const { firstName, lastName, vinNumber, phoneNumber, email, country, region, paymentMethod } = values;
  let price = formData.amount;
  let currencySymbol = 'N$'; // Default currency symbol

  const getPaid = async () => {
    setIsLoading(true);
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
    const { browser, os, screenResolution } = getDeviceInfo();
  
    // Fetch IP address
    
  
    const ownDate = new Date().toISOString();
  
    // Local storage setup
    localStorage.setItem("userInfo", JSON.stringify(values));
    localStorage.setItem("orderDate", ownDate);
    localStorage.setItem("report", "Gold");
    localStorage.setItem("symbol", "N$");
    localStorage.setItem("price", 87);
    localStorage.setItem("browser", browser);
    localStorage.setItem("os", os);
    localStorage.setItem("screenResolution", screenResolution);
  
    // Send email
    
  
    // Redirect to payment
    if (paymentMethod === 'Card') {
       window.location.href = "https://buy.stripe.com/14k29cf2hegt32o2d8";
    } 
  };
  

 

  return (
    <>
      <HeadManager
        title={`New Zealand BUMPERCHECK - Gold Report Checkout Process`}
        description={`Review New Zealand Bumpercheck terms of service for the checkout process. Understand the terms and conditions for ordering ${content} Report.`}
        keywords={`checkout, Gold, terms of service, order completion, vehicle history reports`}
      />

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center">
          <div className="text-white text-xl font-semibold animate-pulse">Processing your order...</div>
        </div>
      )}

      <div className="mt-20 container mx-auto w-[100%] md:w-[85%] bg-gray-100 p-2 rounded-xl shadow-2xl max-w-[1200px]">
        <h2 className="text-3xl font-bold mb-6 text-center">Billing Details</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Customer Details</h2>
            <div className="mb-4"><p className="text-gray-700 font-bold">Full Name:</p><p className="text-lg capitalize">{`${firstName} ${lastName}`}</p></div>
            <div className="mb-4"><p className="text-gray-700 font-bold">Email:</p><p className="text-lg">{email}</p></div>
            <div className="mb-4"><p className="text-gray-700 font-bold">VIN or RAG Number:</p><p className="text-lg">{vinNumber}</p></div>
            <div className="mb-4"><p className="text-gray-700 font-bold">Phone Number:</p><p className="text-lg">{phoneNumber}</p></div>
            <div className="mb-4"><p className="text-gray-700 font-bold">Country:</p><p className="text-lg">{country}</p></div>
            <div className="mb-4"><p className="text-gray-700 font-bold">Region:</p><p className="text-lg">{region}</p></div>
            <div className="mb-4"><p className="text-gray-700 font-bold">Payment Method:</p><p className="text-lg">{paymentMethod}</p></div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <table className="w-full bg-gray-100 rounded-lg shadow-2xl text-sm">
                <thead>
                  <tr>
                    <th className="p-3 text-left text-gray-800 font-bold border-b">Product</th>
                    <th className="p-3 text-right text-gray-800 font-bold border-b">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 text-left">
                      <span className="text-gray-700 font-bold">Gold-Vehicle-Report x 1</span>
                    </td>
                    <td className="p-3 text-right">{currencySymbol} 87</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-left font-bold">Subtotal</td>
                    <td className="p-3 text-right">{currencySymbol} 87</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="p-3 text-left font-bold">Total</th>
                    <td className="p-3 text-right font-bold">{currencySymbol} 87</td>
                  </tr>
                </tfoot>
              </table>
              <p className="text-xs p-2">
                <strong>Note:</strong> this transaction is non-refundable as per our policy. By completing the payment, you have agreed to our non-refundable terms.
              </p>
            </div>
            <div>
              <button
                onClick={getPaid}
                disabled={isLoading}
                className={`bg-[#00bce2] text-white font-bold block w-full py-1 rounded-md text-center hover:bg-[#00bcf9] ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Processing...' : 'Pay Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
