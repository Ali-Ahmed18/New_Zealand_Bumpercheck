import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { TailSpin } from 'react-loader-spinner';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
  const backendBaseUrl = "https://bumpercheckbackend-production.up.railway.app";

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch(`${backendBaseUrl}/api/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: values.email,
            subject: `Contact email from ${values.name} ${values.email}`,
            text: `NAME : ${values.name}\nEMAIL : ${values.email}\nMESSAGE : ${values.message}`,
          }),
        });

        if (response.ok) {
          toast.success('Message sent successfully');
          resetForm();
        } else {
          toast.error('Message Not Sent');
        }
      } catch (error) {
        toast.error('Error sending email');
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="flex flex-col md:flex-row items-center px-6 justify-center  min-h-[100vh] bg-gray-100 rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 p-5">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full p-2 border rounded" />
          {formik.touched.name && formik.errors.name && <div className="text-red-500 text-sm">{formik.errors.name}</div>}

          <input type="email" placeholder="Add Email Address" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full p-2 border rounded" />
          {formik.touched.email && formik.errors.email && <div className="text-red-500 text-sm">{formik.errors.email}</div>}

          <textarea
            rows={4}
            placeholder="Message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border rounded resize-none">
          </textarea>
          {formik.touched.message && formik.errors.message && <div className="text-red-500 text-sm">{formik.errors.message}</div>}


          <button type="submit" className="rounded w-full bg-green-600 p-2 px-8 text-white flex items-center justify-center transition-all duration-500 ease-in-out hover:bg-green-500">
            {formik.isSubmitting ? <TailSpin height="20" width="20" color="white" /> : "Send Message"}
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 p-5">
        <h2 className="text-3xl font-bold">Get in touch and let us know how we can help.</h2>
        <p className="mt-2">Send us an email if you have any queries. We would be pleased to address your queries and concerns.</p>
        <p className="mt-4"><strong className='text-2xl'>Send us Email:</strong> hello.bumpercheck@gmail.com</p>
        <p className="mt-2"><strong className='text-2xl'>Business Hours:</strong> 09:00 AM to 06:00 PM EST</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
