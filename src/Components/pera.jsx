import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Pera() {
  const [words, setWords] = useState([]);
  const [showLine, setShowLine] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const text = `When it comes to ensuring a thorough and detailed vehicle report, our commitment is unparalleled. We understand the significance of having comprehensive information about your vehicle, and we guarantee to provide you with the most detailed and accurate vehicle report available.`.split(" ");
    let delay = 0;
    const wordList = text.map((word, index) => {
      delay += 0.1;
      return (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay }}
          onAnimationComplete={() => setShowLine(true)}
        >
          {word}{" "}
        </motion.span>
      );
    });
    setWords(wordList);
  }, [inView]);

  return (
    <div className="w-[85%] mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 leading-[1.8rem] sm:leading-10">
          The most Comprehensive{" "}
          <span className="text-[#00bce2]">vehicle report</span>{" "}
          guaranteed
        </p>
        <div className="w-full sm:w-[50%] mt-3 sm:mt-0">
          <p ref={ref} className="text-gray-600 text-sm sm:text-base">
            <AnimatePresence>{inView && words}</AnimatePresence>
          </p>
          <AnimatePresence>
            {showLine && (
              <motion.div
                key="line"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "15%" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full sm:w-[50%] bg-[#00bce2] h-[4px] mt-2 sm:mt-3"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Pera;
