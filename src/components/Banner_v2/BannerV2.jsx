import "./banner.css";
import React from "react";
import { motion } from "framer-motion";

export const BannerV2 = () => {
  return (
    <div className="flex  w-full h-auto sm:h-screen justify-center " id="home">
      <div className="flex-row grid-cols-1 sm:flex sm:flex-wrap h-[750px]  w-[350px]  sm:h-[550px] sm:w-[1300px]  mt-16 sm:mt-24">
        <div className="grid grid-cols-1 sm:flex sm:flex-col sm:w-[646px] h-[380px] sm:h-full  gap-2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5 } }} className="flex w-full h-full sm:w-full sm:h-[60%] rounded-3xl ">
            <h1 className="text-white font-[400] text-xl sm:text-6xl mt-3 ml-3 test-font">Hi Im Gilang </h1>
          </motion.div>
          <div className="flex grid-cols-2 sm:flex-wrap sm:w-full  sm:h-[40%] gap-2 justify-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.7 } }} className="flex h-3/4 sm:h-full w-[49%] bg-white rounded-3xl"></motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.9 } }} className="flex h-3/4 sm:h-full w-[49%] bg-white rounded-3xl"></motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.1 } }} className="flex sm:w-[646px] w-full sm:h-full h-[350px] rounded-3xl z-0 justify-end">
          <div className="sm:w-3/4 sm:h-full w-full h-full rounded-xl test"></div>
        </motion.div>
      </div>
    </div>
  );
};
