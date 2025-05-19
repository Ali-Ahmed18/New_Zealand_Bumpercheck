import React from "react";
import ServiceSlider from "../../Components/swiper.jsx";
import Footer from "../../Components/footer"
import HeadManager from '../../Components/headerManager.jsx';


function ServicesPage() {

  return (
    <>
      <HeadManager
        title="New Zealand BumperCheck - Services"
        description="Explore BumperCheck comprehensive services for obtaining detailed vehicle history reports. Make informed decisions about your car purchases with our transparent and reliable information."
        keywords="vehicle history reports, car VIN report services, VIN check, car history services, vehicle report solutions"
      />

      <div className="bg-gray-100 pt-16 w-[100%] max-w-[1300px] mx-auto pb-20">

        <main className="w-[85%] mx-auto p-3">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mt-7 bg-gradient-to-tr from-[#00bce2]  to-[#0c3941e6] inline-block text-transparent bg-clip-text">
              SERVICES

              <div className="w-[30%] sm:w-[40%] bg-[#00bce2] h-[4px] mt-[10px]"></div>
            </h1>
            <p className="text-[10px] md:text-[16px] text-gray-800 mt-3">
              Welcome to{" "}
              <span className="text-[#00bce2] font-bold">BUMPER <span className="text-black">CHECK</span></span>,
              your trusted source for detailed and reliable Vehicle Identification
              Number (VIN) reports. Our services are designed to provide you with
              a comprehensive overview of a vehicle's history, empowering you with
              the information you need to make informed decisions. Accurate and
              Reliable Information We pride ourselves on delivering accurate and
              reliable VIN reports. Our system gathers data from various reputable
              sources, ensuring that you receive up-to-date and trustworthy
              information about the vehicle you're interested in. Comprehensive
              Vehicle History Our VIN reports go beyond the basics. You'll gain
              insights into the vehicle's entire history, including:
            </p>
          </div>

          <ServiceSlider />

        </main>
      </div>
        
          <Footer />

        
    </>
  );
}

export default ServicesPage;
