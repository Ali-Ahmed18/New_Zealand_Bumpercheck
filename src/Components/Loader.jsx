import React from "react";
import { TailSpin } from "react-loader-spinner";


const CustomLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <TailSpin
                  visible={true}
                  height={100}
                  width={100}
                  color="#00bce2"
                  ariaLabel="tail-spin-loading"
                  radius="2"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
    </div>
  );
};

export default CustomLoader;