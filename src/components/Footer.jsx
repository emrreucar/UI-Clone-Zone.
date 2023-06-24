import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { GoLocation } from "react-icons/go";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="max-w-[1240px] bg-red-500/0 px-10 py-20 mt-20">
      <div className="flex gap-x-20 flex-wrap items-center justify-center lg:gap-0 gap-20">
        {/* col-1 start */}
        <div className="pr-20 flex flex-col justify-center items-center">
          {/* logo start */}
          <div>
            <div className="flex items-start justify-start">
              <div className="mr-4 relative w-[32px] h-[32px] ">
                <Image className="object-contain" src={logo} alt="logo" fill />
              </div>
              <span className="text-white">Zone.</span>
            </div>
          </div>
          {/* logo end */}
          <div className="flex flex-col gap-y-4 mt-2">
            <div className="flex items-center justify-start gap-x-2 text-white opacity-80">
              <GoLocation /> <span>Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center justify-start gap-x-2 text-white opacity-80">
              <BsFillTelephoneFill /> <span>0943833399</span>
            </div>
            <div className="flex items-center justify-start gap-x-2 text-white opacity-80">
              <CiMail /> <span>support@zone.com</span>
            </div>

            <div className="flex items-center mt-4 text-white gap-x-4">
              <div className="bg-transparent p-1 border border-gray-500 rounded-full">
                <BiLogoFacebook />
              </div>
              <div className="bg-transparent p-1 border border-gray-500 rounded-full">
                <BsTwitter />
              </div>
              <div className="bg-transparent p-1 border border-gray-500 rounded-full">
                <BsInstagram />
              </div>
              <div className="bg-transparent p-1 border border-gray-500 rounded-full">
                <BsPinterest />
              </div>
            </div>
          </div>
        </div>
        {/* col-1 end */}

        {/* col-2 start */}
        <div className="flex items-start justify-start gap-x-10 text-white pr-20">
          <div className="flex flex-col gap-y-4 ml-20">
            <h1>Service</h1>
            <p className="opacity-80">Order Management</p>
            <p className="opacity-80">Social Assitant</p>
            <p className="opacity-80">Crypto Platform</p>
            <p className="opacity-80">Analyzer of the News</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1>Company</h1>
            <p className="opacity-80">About us</p>
            <p className="opacity-80">News</p>
            <p className="opacity-80">Our trusted partner</p>
            <p className="opacity-80">New users FAQ</p>
          </div>
        </div>
        {/* col-2 end */}

        {/* col-3 start */}
        <div className="flex items-center justify-center gap-x-10 text-white">
          <div className="flex flex-col gap-y-4 ml-20">
            <h1>Support</h1>
            <p className="opacity-80">Help Center</p>
            <p className="opacity-80">Feedback</p>
            <p className="opacity-80">Contact us</p>
            <p className="opacity-80">Terms conditins</p>
          </div>
          <div className="flex flex-col gap-y-4">
            <h1>Resources</h1>
            <p className="opacity-80">Download App</p>
            <p className="opacity-80">Blog</p>
            <p className="opacity-80">What` s new</p>
            <p className="opacity-80">Sitemap</p>
          </div>
        </div>
        {/* col-3 end */}
      </div>

      <div className="text-white flex flex-wrap items-center justify-between border-t border-gray-500 mt-10 pt-10">
        <div className="opacity-80 mx-auto">
          &copy; <span>2023 Zone. - All rights reserved.</span>
        </div>
        <div className="mx-auto">
          <div className="flex items-center justify-between gap-x-4 mr-14 opacity-80">
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
