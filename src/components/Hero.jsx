import React from "react";
import Image from "next/image";
import heroImage from "../assets/heroImage.png";
import { BsPlayCircle } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center gap-4 max-w-[1240px] h-full mt-[120px] ">
      <div>
        <div>
          <h2 className="md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#0044ff] to-[#b300ff] ">
            Virtual Realityyyy
          </h2>
          <h2 className="md:text-6xl text-4xl mb-4 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0044ff] to-[#b300ff] ">
            Business Solutions
          </h2>
          <p className="text-white md:w-[550px] w-[330px] mt-10 opacity-80">
            We have over 15 year exprience in business consultting arena. We
            have over 15 year exprience in business consultting arena and
            artficial intelligence.
          </p>
        </div>
        <div className="flex text-white items-center justify-self-start gap-10 mt-8">
          <button className="py-2 px-6 bg-gradient-to-r from-[#2959dc] to-[#712be8] rounded-md">
            Join Us
          </button>
          <div className="flex items-center gap-4">
            <BsPlayCircle size={32} />{" "}
            <span className="cursor-pointer">Watch Video</span>
          </div>
        </div>
      </div>
      <div className="lg:mt-[-40px] mt-[10px] object-cover relative w-full h-[80vh] ">
        <Image src={heroImage} alt="hero image" fill />
      </div>
    </div>
  );
};

export default Hero;
