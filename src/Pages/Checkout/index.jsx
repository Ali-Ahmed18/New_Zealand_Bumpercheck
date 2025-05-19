import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import NotFound from '../../notFound';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HeadManager from '../../Components/headerManager.jsx';

function CheckoutPage() {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname;
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const allowedCountry = ['NZ'];
  const [isLoading, setIsLoading] = useState(false);

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

  let content = null;
  let amount = null;


  if (path === "deals/checkout-gold") {
    content = "Gold";
    amount = 87;
  } else {
    NotFound();
  }





  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      vinNumber: "",
      phoneNumber: "",
      country: "New Zealand",
      region: "",
      isAccepted: false,
      paymentMethod: "Card",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Email is required"),
      firstName: Yup.string()
        .trim()
        .min(3, "Minimum 3 characters")
        .required("First name is required"),
      lastName: Yup.string()
        .trim()
        .min(3, "Minimum 3 characters")
        .required("Last name is required"),
      vinNumber: Yup.string()
        .trim()
        .required("VIN or Reg is required"),
      phoneNumber: Yup.string()
        .trim()
        .matches(/^[0-9]+$/, "Invalid phone number")
        .required("Phone number is required"),
      country: Yup.string()
        .trim()
        .required("Country is required"),
      region: Yup.string()
        .trim()
        .required("Region is required"),
      paymentMethod: Yup.string().required("Please select a payment method"),

    }),
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      let clientIp = "";
      const { browser,os, screenResolution} = getDeviceInfo()
      const ownDate = new Date().toISOString();

      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        clientIp = data.ip;
        localStorage.setItem("clientIp", clientIp);
      } catch (error) {
        console.error("Error fetching IP address:", error);
        alert("IP address fetch karne me error aayi.");
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch("https://bumpercheckbackend-production.up.railway.app/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "hello.bumpercheck@gmail.com",
            subject: `BumperCheck Order Summary (Order# 1845)`,
            to: values.email,
            userInfo: values,
            clientIp,
            device_info: { browser, os, screenResolution },
            orderDate: ownDate
          }),
        });

        const data = await response.json();
        console.log("Email sent successfully:", data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Email bhejne me error aayi. Kripya dobara koshish karein.");
        setIsLoading(false);
        return;
      }

      navigate(`/deals/checkout-gold/process`, { state: { values, amount, content } });
    },
  });

  const selectCountry = (val) => {
    setCountry(val);
    setFieldValue("country", val);
    setFieldTouched("country", true);
  };

  const selectRegion = (val) => {
    setRegion(val);
    setFieldValue("region", val);
    setFieldTouched("region", true);
  };



  return (
    <>
      <HeadManager
        title={`New Zealand BUMPERCHECK - Gold-Report`}
        description={`Review Bumpercheck terms of service for the checkout process. Understand the terms and conditions for ordering ${content} Report.`}
        keywords={`checkout, Gold, terms of service, order completion, vehicle history reports`}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
        className="w-full md:w-[85%] mx-auto  p-2 md:shadow-2xl rounded-lg mt-20 flex flex-col md:flex-row justify-between pt-16"
      >
        <div className="w-full md:w-[50%] md:pr-4">
          <h1 className="text-3xl">Checkout</h1>
          <div>Checkout-Gold</div>

          <h3 className="text-xl mt-7 mb-4 font-bold">Customer Information</h3>

          <div className=" mt-4">
            <label className='relative'>
              <p>Contact information</p>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`placeholder:text-gray-500 rounded text-sm p-2 bg-gray-200 focus:shadow-xl focus:bg-white w-full ${touched.email && errors.email
                  ? "border border-red-500 focus:outline-none"
                  : "focus:outline-gray-400"
                  }`}
                type="text"
                placeholder="Email"
                required
              />
              {touched.email && errors.email && (
                <div className="absolute text-red-500 text-sm left-0">
                  {errors.email}
                </div>
              )}
            </label>
          </div>

          <h3 className="text-xl mt-7 font-bold mb-6">Billing Details</h3>

          <div className="flex gap-4">
            <label className="flex-1 relative">
              <input
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full placeholder:text-gray-500 rounded text-sm p-2 bg-gray-200 focus:shadow-xl focus:outline-none focus:bg-white ${touched.firstName && errors.firstName
                  ? "border border-red-500 focus:outline-none"
                  : "focus:outline-gray-400"
                  }`}
                type="text"
                placeholder="First name"
                required
              />
              {touched.firstName && errors.firstName && (
                <div className="absolute text-red-500 text-sm  left-0">
                  {errors.firstName}
                </div>
              )}
            </label>
            <label className="flex-1 relative">
              <input
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full placeholder:text-gray-500 rounded text-sm p-2 bg-gray-200 focus:shadow-xl focus:outline-none focus:bg-white ${touched.lastName && errors.lastName
                  ? "border border-red-500 focus:outline-none"
                  : "focus:outline-gray-400"
                  }`}
                type="text"
                placeholder="Last name"
                required
              />
              {touched.lastName && errors.lastName && (
                <div className="absolute text-red-500 text-sm left-0">
                  {errors.lastName}
                </div>
              )}
            </label>
          </div>

          <div className="mt-6 relative">
            <input
              name="vinNumber"
              value={values.vinNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`placeholder:text-gray-500 rounded text-sm p-2 bg-gray-200 focus:shadow-xl focus:outline-none focus:bg-white w-full ${touched.vinNumber && errors.vinNumber
                ? "border border-red-500 focus:outline-none"
                : "focus:outline-gray-400"
                }`}
              type="text"
              placeholder="VIN or RAG Number"
              required
            />
            {touched.vinNumber && errors.vinNumber && (
              <div className="absolute text-red-500 text-sm left-0">
                {errors.vinNumber}
              </div>
            )}
          </div>

          <div className="mt-6 relative">
            <input
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`placeholder:text-gray-500 rounded text-sm p-2 bg-gray-200 focus:shadow-xl focus:bg-white w-full ${touched.phoneNumber && errors.phoneNumber
                ? "border border-red-500 focus:outline-none"
                : "focus:outline-gray-400"
                }`}
              type="text"
              placeholder="Phone number"
              required
            />
            {touched.phoneNumber && errors.phoneNumber && (
              <div className="absolute text-red-500 text-sm left-0">
                {errors.phoneNumber}
              </div>
            )}
          </div>

          <div className="flex mt-6 gap-4 mb-10">
            <div className='relative flex-1'>
              <CountryDropdown
                onBlur={handleBlur}
                value={values.country}
                disabled
                classes={`placeholder:text-gray-500 rounded text-sm bg-gray-200 p-2 focus:shadow-xl focus:bg-white ${touched.country && errors.country
                  ? "border border-red-500 focus:outline-none"
                  : "focus:outline-gray-400 placeholder:text-gray-500 rounded text-sm bg-gray-200 focus:shadow-xl focus:outline-none focus:bg-white focus:outline-gray-400"}`}
                onChange={(val) => {
                  selectCountry(val);
                  handleChange("country")(val);
                }}
                whitelist={allowedCountry}
                style={{ width: '100%' }}
              />
              {touched.country && errors.country && (
                <div className="absolute text-red-500 text-sm left-0">
                  {errors.country}
                </div>
              )}
            </div>

            <div className='relative flex-1'>
              <RegionDropdown
                country={values.country}
                onBlur={handleBlur}
                classes={`placeholder:text-gray-500 rounded text-sm bg-gray-200 p-2 focus:shadow-xl focus:bg-white ${touched.region && errors.region
                  ? "border border-red-500 focus:outline-none"
                  : "focus:outline-gray-400 placeholder:text-gray-500 rounded text-sm bg-gray-200 focus:shadow-xl focus:outline-none focus:bg-white focus:outline-gray-400"}`}
                value={values.region}
                onChange={(val) => {
                  selectRegion(val);
                  handleChange("region")(val);
                }}
                style={{ width: '100%' }}
                disableWhenEmpty={true}
              />
              {touched.region && errors.region && (
                <div className="absolute text-red-500 text-sm left-0">
                  {errors.region}
                </div>
              )}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl mt-7 font-bold mb-6">Payment Method</h3>


            <div className="flex items-center mb-2">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  checked={values.paymentMethod === 'Card'}
                  onChange={() => setFieldValue('paymentMethod', 'Card')}
                  className="mr-2"
                />
                Credit/Debit Card
              </label>
            </div>

          </div>



          <div className="mt-0 flex items-center space-x-2">
            <input
              name="isAccepted"
              onChange={handleChange}
              value={values.isAccepted}
              type="checkbox"
              required
              className={`w-5 h-5 text-yellow-400 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500 focus:outline-none ${touched.isAccepted && errors.isAccepted ? "border-red-500" : "border-gray-300"}`}
            />
            <span className="text-sm text-gray-700">
              I have read, understand, and accept to the{" "}
              <Link target='_blank' to={"/terms-and-condition"} className="text-[#00bce2] cursor-pointer">Terms of Service</Link> and{" "}
              <Link target='_blank' to={"/privacy"} className="text-[#00bce2] cursor-pointer">Privacy Policy</Link>
            </span>
          </div>

          <button
            disabled={!values.isAccepted || isLoading}
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-[#00bce2] p-2 rounded-3xl font-bold mt-10 disabled:bg-blue-200 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Processing...
              </>
            ) : (
              'Continue'
            )}
          </button>

        </div>



        <div className="mt-10 md:mt-0  px-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">What’s in the Report?</h1>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Vehicle Specifications
            </li>
            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Ownership History
            </li>
            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Title Brand History
            </li>
            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Insurance Total Loss
            </li>
            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Junk & Salvage Information
            </li>
            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Lien and Impound Information
            </li>

            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Stolen Summary
            </li>

            <li className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Odometer Rollback Alert
            </li>
          </ul>
        </div>


      </form>
    </>
  );
}
export default CheckoutPage