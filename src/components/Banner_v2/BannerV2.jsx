import "./banner.css";
import React from "react";
import { motion } from "framer-motion";

export const BannerV2 = () => {
  return (
    <div className="flex  w-full h-auto lg:h-screen justify-center " id="home">
      <div className="flex-row grid-cols-1 lg:flex lg:flex-wrap h-[750px]  w-[350px]  lg:h-[550px] lg:w-[1300px]  mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:flex lg:flex-col lg:w-[646px] h-[380px] lg:h-full  gap-2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} className="flex w-full h-full lg:w-full lg:h-[60%] rounded-3xl ">
            <h1 className="text-white font-[400] text-xl lg:text-6xl mt-3 ml-3 test-font">Hi Im Gilang Prakoso</h1>
          </motion.div>
          <div className="flex grid-cols-2 lg:flex-wrap lg:w-full  lg:h-[40%] gap-2 justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.7 } }} className="flex h-3/4 lg:h-full w-[49%] bg-white rounded-3xl"></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.9 } }} className="flex h-3/4 lg:h-full w-[49%] bg-white rounded-3xl"></motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.1 } }} className="flex lg:w-[646px] w-full lg:h-full h-[350px] rounded-3xl z-0 justify-end">
          <div className="lg:w-3/4 lg:h-full w-full h-full rounded-xl test"></div>
        </motion.div>
      </div>
    </div>
  );
};
