import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/Varient.js';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Landing() {
  const navigate = useNavigate();

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      inputValue: '', 
    },
    validationSchema: Yup.object({
      inputValue: Yup.string()
        .trim()
        .test('validate-input',"Please enter a valid VIN or REG number" ,function(value) {
          
          if (/^[a-zA-Z0-9]{17}$/.test(value)) {
            return true; 
          }
          
         
          if (/^[a-zA-Z0-9]{5,10}$/.test(value)) {
            return true; 
          }
          
          return false; 
        })
        .required('VIN or REG number is required'),
    }),
    onSubmit: (values, actions) => {
    
        navigate('/deals');
    },
  });

  return (
    <section className="grid lg:flex items-center h-[90vh] sm:h-[91vh] sm:flex sm:mt-0">
      <motion.div
        variants={fadeIn('right', 0)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col items-center sm:items-start gap-2 sm:gap-5 w-[100%] sm:w-[60%]"
      >
        <h1 className="text-4xl text-center leading-[1.2] sm:text-start sm:text-5xl font-bold mb-3 sm:leading-[3.5rem]">
          Research a Vehicle
          <br />
          By Vin Number
        </h1>
        <h3 className="mb-3 text-[12px]">Receive An instant Vehicle History Report Now</h3>
        <div className="relative mb-3 p-1 flex items-center gap-5 border rounded w-fit bg-black ">
          <input
            name="inputValue" // Renamed from vinNumber to inputValue
            value={values.inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            className="bg-black text-white placeholder:text-gray-300 w-52 text-[10px] focus:outline-none focus:bg-black"
            placeholder="Vehicle or Registration Number"
          />
          {touched.inputValue && errors.inputValue && (
            <div className="absolute text-red-500 text-[10px] left-0 -bottom-5">
              {errors.inputValue}
            </div>
          )}
          <button type='button'
            className="rounded text-black font-bold text-[10px] px-4 py-2 bg-[#00bce2] transition-all ease-in-out hover:bg-[#329fb5]"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </motion.div>

      <div className="bg-[#00bce2]  sm:m-0  sm:w-[40%] rounded-tl-[4rem] rounded-tr-[4rem] sm:rounded-tr-[0rem] w-[100%] h-full sm:h-[91vh] grid items-center relative">
        <motion.div variants={fadeIn('left', 0)} initial="hidden" animate="show" exit="hidden">
          <img
            width={707}
            height={578}
            className="relative z-20 scale-60 sm:scale-150"
            src="/audi.png"
            alt="carpic"
          />
        </motion.div>
        <img
          width={250}
          height={378}
          className="hidden absolute z-10 sm:block top-0 w-[60%] filter opacity-20 rotate-[30deg] contrast-0"
          src="/tire-track.png"
          alt="carpic"
        />
      </div>
    </section>
  );
}

export default Landing;
