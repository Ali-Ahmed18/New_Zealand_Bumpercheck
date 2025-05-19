import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from '../src/Components/nav.jsx';
import NotFound from '../src/notFound.jsx';
import Home from '../src/Pages/Home/index.jsx';
import ServicesPage from './Pages/Services/index.jsx';
import DealPage from './Pages/Deals/index.jsx';
import CheckoutPage from './Pages/Checkout/index.jsx';
import ContactPage from './Pages/Contact/index.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy/index.jsx';
import Process from './Pages/checkoutProcess/index.jsx';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import CustomLoader from './Components/Loader.jsx';
import TermsOfServicePage from './Pages/Terms&Service/index.jsx';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const stripePromise = loadStripe('pk_live_51PwcxnFqDOpTEr5Ed5x7H64NmDYfpVr85FqQGYxkrTQPkVk5GR6HifP3OiU6KASxPeSRHKVxszdaC7YyH6OgabpF00jxr23Mk4');
  
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const initialOptions = {
    "client-id": `Ab7Zww--hdyY95iJPJyZs488YYKbKz_KhkxWir_woLjrTxqVUpsYmwSImZL1MVoux4CFiAE7k-lwWVuD`,
    "currency": "USD",
    "enable-funding": "card",
    "disable-funding": "paylater,venmo",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
    {/* <Elements stripe={stripePromise}> */}

      <div className="mx-auto w-[100%] max-w-[1300px]">
        {isLoading ? <CustomLoader /> : <><Nav />
          <Routes>
            <Route path="/" index element={<ScrollToTop><Home /></ScrollToTop>} />
            <Route path="/service" element={<ScrollToTop><ServicesPage /></ScrollToTop>} />
            <Route path="/deals" element={<ScrollToTop><DealPage /></ScrollToTop>} />
            <Route path="/deals/checkout-basic" element={<ScrollToTop><CheckoutPage /></ScrollToTop>} />
            <Route path="/deals/checkout-basic/process" element={<ScrollToTop><Process /></ScrollToTop>} />
            <Route path="/deals/checkout-gold/process" element={<ScrollToTop><Process /></ScrollToTop>} />
            <Route path="/deals/checkout-master/process" element={<ScrollToTop><Process /></ScrollToTop>} />
            <Route path="/deals/checkout-gold" element={<ScrollToTop><CheckoutPage /></ScrollToTop>} />
            <Route path="/deals/checkout-master" element={<ScrollToTop><CheckoutPage /></ScrollToTop>} />
            <Route path="/contact" element={<ScrollToTop><ContactPage /></ScrollToTop>} />
            <Route path="/privacy" element={<ScrollToTop><PrivacyPolicy /></ScrollToTop>} />
            <Route path="/Terms-and-condition" element={<ScrollToTop><TermsOfServicePage/></ScrollToTop>} />
            <Route path="*" element={<NotFound />} />
          </Routes></>}
          </div>
    {/* </Elements> */}

      </PayPalScriptProvider>
    </>
  );
}

export default App;

