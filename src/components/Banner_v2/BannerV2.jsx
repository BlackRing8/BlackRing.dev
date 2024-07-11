import "./banner.css";
import React from "react";

export const BannerV2 = () => {
  return (
    <div className="flex  w-full h-auto sm:h-screen justify-center " id="home">
      <div className="grid grid-cols-1 sm:flex sm:flex-wrap h-[750px] gap-2 w-[350px]  sm:h-[610px] sm:w-[1300px] mt-16 sm:mt-20">
        <div className="grid grid-cols-1 sm:flex sm:flex-col sm:w-[646px] h-[380px] sm:h-full  gap-2">
          <div className="flex w-full h-full sm:w-full sm:h-[60%] bg-white rounded-3xl">
            <h1 className="text-black font-bold text-4xl mt-3 ml-3">Hi Im Gilang </h1>
          </div>
          <div className="flex grid-cols-2 sm:flex-wrap sm:w-full  sm:h-[40%] gap-2 justify-center">
            <div className="flex h-full w-[49%] bg-green-700 rounded-3xl"></div>
            <div className="flex h-full w-[49%] bg-yellow-400 rounded-3xl"></div>
          </div>
        </div>
        <div className="flex sm:w-[646px] w-full sm:h-full h-[350px] bg-green-500 rounded-3xl test z-0"></div>
      </div>
    </div>
  );
};
