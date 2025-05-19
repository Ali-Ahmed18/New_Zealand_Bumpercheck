import React from "react";
import { motion } from "framer-motion";
import { FaHistory } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { FaBookAtlas } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

export const navData = [
  {
    icon: <FaHistory />,
    name: "Sales History",
    desc:
      "The sales history of automobiles is valuable for consumers, dealerships, and manufacturers. It documents the instances of accidents, repossessions, or theft, providing essential information for all",
  },
  {
    icon: <HiCurrencyDollar />,
    name: "Market Value",
    desc:
      "Provide the mileage, vehicle condition, and any additional options your car is equipped with and real-time market value, which helps to determine the actual market value of the vehicle.",
  },
  {
    icon: <BsFillFuelPumpFill />,
    name: "Fuel",
    desc:
      "Over the last decade, there has been an increasing disparity between fuel consumption measured based on test values and actual driving conditions in the majority of vehicle markets.",
  },
  {
    icon: <FaFilterCircleDollar />,
    name: "Best Pricing",
    desc:
      "BumperCheck Report offers the most competitive pricing in the auto industry, surpassing that of its competitors.",
  },
  {
    icon: <FaBookAtlas />,
    name: "Vehicle Specs",
    desc:
      "BumperCheck Report furnishes essential details, including engine type, manufacturing year, model, and compatible parts information.",
  },
  {
    icon: <FaThumbsUp />,
    name: "Safety Ratings",
    desc:
      "Provides sliders for assessing ratings on car rollover, side barrier, front and rear seats, as well as front and side evaluations",
  },
];

function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const spring = {
    type: "spring",
    damping: 15,
    stiffness: 200,
  };

  return (
    <div className="w-[85%] mx-auto mt-[130px]">
      <motion.h1
        className="text-center font-bold text-2xl sm:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        ref={ref}
      >
        <span className="text-[#00bce2]">Our</span> Services
      </motion.h1>
      <div className="mt-[50px]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {navData.map((data, index) => {
            const backgroundColors = ["bg-orange-400", "bg-purple-400"];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1,transition: { duration: 0 }}}
                transition={{ ...spring, delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 ,transition: { duration: 0 }}}
                className="p-5 bg-gray-50 flex flex-col gap-2 items-center text-center cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                <motion.div
                  className={`rounded-full text-3xl p-3 text-white ${
                    backgroundColors[index % 2]
                  }`}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {data.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-bold"
                >
                  {data.name}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm"
                >
                  {data.desc}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
