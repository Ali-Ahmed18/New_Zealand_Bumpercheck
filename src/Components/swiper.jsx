import React from "react";
import { RxPencil2, RxDesktop, RxReader, RxRocket, RxCrop, RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const serviceData = [
  {
    icon: <RxCrop />,
    name: "Accident History",
    desc: "Uncover any reported accidents or damage, giving you a clear picture of the car's condition.",
  },
  {
    icon: <RxPencil2 />,
    name: "Title Information",
    desc: "Verify the vehicle's title status, including any salvaged or rebuilt titles.",
  },
  {
    icon: <RxDesktop />,
    name: "Odometer Readings",
    desc: "Track the mileage over time to ensure transparency and detect potential odometer fraud.",
  },
  {
    icon: <RxReader />,
    name: "Maintenance Records",
    desc: "Access information about regular maintenance, helping you gauge the overall health of the vehicle.",
  },
  {
    icon: <RxRocket />,
    name: "Recalls and Defects",
    desc: "Stay informed about any recalls or manufacturer defects associated with the vehicle.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={false}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[220px] sm:h-[250px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-white rounded-lg px-4 py-6 flex sm:flex-col gap-x-6 sm:gap-x-4 group cursor-pointer hover:bg-slate-800 transition-all duration-300 h-full"
          >
            <div className="text-3xl group-hover:text-white text-accent mb-4">{item.icon}</div>
            <div className="mb-8">
              <div className="mb-2 text-md font-semibold text-xl bg-gradient-to-tr from-[#00bce2] to-[#075f72c4] inline-block text-transparent bg-clip-text">
                {item.name}
              </div>
              <p className="max-w-[350px] leading-normal group-hover:text-white text-[13px]">{item.desc}</p>
            </div>
            <div className="text-2xl group-hover:text-white">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
