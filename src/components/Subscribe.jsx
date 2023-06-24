import React from "react";
import { TbSend } from 'react-icons/tb';

const Subscribe = () => {
  return (
    <div className="max-w-[1250px] bg-blue-500/5 mx-auto mt-32 p-10 rounded-3xl ">
      <div>
        <h1 className="text-3xl text-center text-white">
          Subscribe to get the Latest News
        </h1>
        <p className="opacity-90 text-center text-white mt-4">
          We recommended you to subscribe to our newspaper,drop your email below
          to get daily update about us
        </p>
      </div>

      <div className=" relative flex items-center justify-center mt-10">
        <input
          type="text"
          className="lg:w-[860px] w-[500px] outline-none bg-blue-100/20 px-4 py-6 text-white placeholder:text-white rounded-full placeholder:opacity-80 "
          placeholder="Enter your email addres"
        />
        <button className="flex items-center justify-center gap-x-2 bg-gradient-to-r from-[#2563EB] to-[#a988af] px-6 py-4 rounded-full text-white">
          <TbSend /> Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
