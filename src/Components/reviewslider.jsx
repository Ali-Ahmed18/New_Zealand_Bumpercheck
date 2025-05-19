import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GoStarFill } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";

const TestimonialSlider = () => {

  const fakeReviews = [
    {
      name: "David",
      date: "06-Feb-2024",
      car: "2013 INFINITE G37",
      review: "Bumper Check report played a pivotal role in shaping my car purchase decision. When I checked the details of my potential vehicle, I discovered it had a total loss history. thanks to Bumper Check report, I saved my investment by avoiding that purchase. grateful for the invaluable service!",
      pic: "/car1.jpg",
      profile: "/1.jpg"
    },
    {
      name: "Jane Smith",
      date: "04-Feb-2024",
      car: "2015 PEuGEOT 508",
      review: "Bumper Check report made my car-buying experience a breeze. Their detailed report revealed that the car had previously undergone an accident or damage. this transparency allowed me to confidently choose my car. many thanks",
      pic: "/car2.jpg",
      profile: "/3.jpg"
    },
    {
      name: "Bob Johnson",
      date: "01-Feb-2024",
      car: "2022 VOLKSWAGEN GOLF R",
      review: "Using Bumper Check report, I uncovered the history of my car and found out it had suffered flood damage. This information proved to be crucial in preventing potential harm. thank you, Bumper Check report, for your valuable services",
      pic: "/car3.jpg",
      profile: "/4.jpg"
    },
    {
      name: "Mert ergun",
      date: "25-Jan-2024",
      car: "2022 PORSCHE MACAN",
      review: "Bumper Check Report made my life easier! When deciding to buy a used car, I used their report to understand the true condition of the vehicle. the report clearly outlined past accidents and repairs. today, I am happy with my car, thanks to Bumper Check report",
      pic: "/car4.jpg",
      profile: "/5.jpg"
    },

  ];

  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      const interval = setInterval(() => {
        if (swiper && swiper.slideNext) {
          if (swiper.isEnd) {
            swiper.slideTo(0);
          } else {
            swiper.slideNext();
          }
        }
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [swiper]);


  const starCount = 5;

  return (
    <div className='flex flex-col gap-5 text-center xl:text-left xl:flex-row xl:gap-0 items-center justify-center'>
      <div className='w-full xl:w-[35%] flex flex-col gap-5'>
        <p className='font-bold text-green-500'>98% POSITIVE FEEDBACK</p>
        <p className='text-[30px] font-bold'>What Customers Say About Correct Vin Report</p>
        <p className='text-[14px]'>BumperCheck through the eyes of our customers: diverse perspectives and genuine testimonials demonstrating the value of our services.</p>
        <div className='mx-auto xl:mx-0'>
          <div className=' flex gap-3 items-center font-semibold mb-3'>
            <FcGoogle className='text-[25px]' />
            <p>Google Rating</p>
          </div>
          <div className=' flex gap-3 items-center font-semibold'>
            <p className='text-[20px]'>4.5</p>
             <div className='flex gap-1 items-center'>
              {Array.from({ length: starCount }, (_, index) => (
                <GoStarFill key={index} className='text-yellow-400' />
              ))}
            </div>
            <p className='text-[12px] text-gray-400'>26 Reviews</p>
          </div>
        </div>
      </div>
      <div className=' w-full xl:w-[65%]'>
        <Swiper
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="h-[400px]"
          onSwiper={setSwiper}
        >
          {fakeReviews.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="flex relative flex-col items-center md:flex-row gap-x-8 h-full">
                <img src={person.pic} alt="car" className='absolute w-[85%] h-[70%] bottom-0 sm:h-full  sm:right-5   rounded-xl' />
                <div className={`${index % 2 === 0 ? "bg-[#BCCDDE]" : "bg-[#E4D5C8]"} left-0 p-2 text-[13px] w-[90%] sm:ml-8 sm:w-[70%] sm:text-base  sm:translate-y-[-10%] sm:h-[60%] rounded-xl absolute sm:p-4`}>
                  <div className='flex items-center gap-2 sm:mt-[10px]'>
                    <div className='p-[8px]'><img src={person.profile} className="rounded-full w-14 h-14" width={100} height={100} alt="" /></div>
                    <div className='flex flex-col gap-1'>
                      <p className='font-semibold text-start capitalize'>{person.name}</p>
                      <div className='flex gap-1'>
                        {Array.from({ length: starCount }, (_, index) => (
                          <GoStarFill key={index} className='text-yellow-500 text-[12px]' />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='p-[10px]'>
                    <p className='leading-6 text-[#444] mb-4'>{person.review}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
