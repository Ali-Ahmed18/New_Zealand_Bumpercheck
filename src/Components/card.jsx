import React, { useState } from "react";
import { TbReportSearch } from "react-icons/tb";
import { FaCarCrash } from "react-icons/fa";
import { BiSolidCarMechanic } from "react-icons/bi";
import { MdCarRepair } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardData = [
  {
    name: "TITLE CHECK",
    path: "Check current and historical title record for over 60 different type of title brand",
    icon: <TbReportSearch />,
  },
  {
    name: "PROBLEM CHECKLIST",
    path: "Report include possible problems everything from solvage reconstructed vehicle to lemon Check more ",
    icon: <BiSolidCarMechanic />,
  },
  {
    name: "ACCIDENT HISTORY",
    path: "View number of accidents reported along wih accident dates and possible soverity is damage to vehicle",
    icon: <FaCarCrash />,
  },
  {
    name: "SERVICE HISTORY",
    path: "Access possible dealer maintenance and manufacture recommended services records",
    icon: <MdCarRepair />,
  },
];

function Card() {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0, 
  });

  if (inView && !isAnimated) {
    setIsAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2 }}
      className="mx-auto mb-8 w-[85%] border-[1px] rounded mt-[80px]"
    >
      <div className="lg:flex grid md:grid md:grid-cols-2 sm:grid-cols-2">
        {cardData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={isAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9 }}
            className="bg-white hover:bg-[#96e4f3] items-center sm:items-start group px-6 py-8 flex sm:flex-col gap-x-6 
            sm:gap-x-4 group cursor-pointer border hover:text-gray-800 transition-all duration-300"
          >
            <div className="text-2xl text-accent w-fit group-hover:bg-[#2b555d] p-2 rounded group-hover:text-white bg-[#00bce2] mb-4 hover:bg-[#96e4f3]">
              {data.icon}
            </div>
            <div className="mb-8">
              <div className="mb-2 font-bold ">{data.name}</div>
              <p className="max-w-[350px] text-[10px] leading-normal">{data.path}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Card;
