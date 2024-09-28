import "./banner.css";
import React from "react";
import { motion } from "framer-motion";

export const BannerV2 = () => {
  return (
    <div className="flex  w-full lg:h-screen justify-center items-center" id="home">
      <div className="grid lg:flex h-[750px] w-[350px]  lg:h-[570px] lg:w-[1400px] gap-4 mt-14 lg:mt-10">
        <div className="w-full bg-gradient-to-br from-yellow-800 from-10% via-yellow-700 via-30% to-yellow-300 to-90% lg:w-[900px] rounded-t-3xl rounded-l-3xl"></div>
        <div className="w-full lg:w-[500px] rounded-r-3xl bg-[url('/img2/banner-01-02.png')] border-2 border-black  bg-cover bg-bottom"></div>
      </div>
    </div>
  );
};
