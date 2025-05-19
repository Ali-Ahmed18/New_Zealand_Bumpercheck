import React, { useEffect } from 'react'
import ContactUs from '../../Components/contact'
import Footer from "../../Components/footer"
import HeadManager from '../../Components/headerManager.jsx';


function ContactPage() {
 
  return (
    <>
      <HeadManager
        title={`New Zealand BumperCheck - Contact Us`}
        description={`Contact New Zealand BumperCheck for inquiries, support, or assistance. Reach out to us regarding your vehicle history reports or any questions related to Car Vin Report.`}
        keywords={`contact, support, vehicle history reports, inquiry`}
      />
      <div className='w-[100%] max-w-[1300px]'>
        <div >
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ContactPage