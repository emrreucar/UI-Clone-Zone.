"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const links = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About Us",
    },
    {
      id: 3,
      name: "Service",
    },
    {
      id: 4,
      name: "Pricing",
    },
    {
      id: 5,
      name: "Blog",
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative flex items-center justify-between text-white mt-4">
      {/* logo start */}
      <div className="flex items-center justify-center mx-6">
        <div className="mr-4 relative w-[32px] h-[32px] ">
          <Image className="object-contain" src={logo} alt="logo" fill />
        </div>
        <span>Zone.</span>
      </div>
      {/* logo end */}

      {/* links start */}
      <div className="flex gap-10">
        <ul className="lg:flex hidden items-center justify-center gap-16">
          {links.map((link) => (
            <li
              className="cursor-pointer opacity-80 hover:opacity-100 duration-300"
              key={link.id}
            >
              <Link href="/">{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* mobile menu start */}
        <div onClick={handleNav} className="block lg:hidden">
          {!nav ? (
            <AiOutlineClose size={32} className="cursor-pointer" />
          ) : (
            <RiMenu3Fill size={32} className="cursor-pointer" />
          )}
        </div>

        <div
          className={
            !nav
              ? "fixed z-[999] left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gradient-to-b from-[#121929] to-[#221C3B] ease-in-out duration-500 "
              : "fixed left-[-100%] duration-500"
          }
        >
          <div className="flex items-center justify-center flex-col mx-6">
            <div className="flex items-center justify-center mx-6 mt-4 py-4 border-b border-b-gray-400 w-full">
              <div className="mr-4 relative w-[32px] h-[32px] ">
                <Image className="object-contain" src={logo} alt="logo" fill />
              </div>
              <span>Zone.</span>
            </div>

            <ul className="flex items-center flex-col justify-center gap-16 mt-10">
              {links.map((link) => (
                <li
                  className="cursor-pointer opacity-80 hover:opacity-100 duration-300"
                  key={link.id}
                >
                  <Link href="/">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* mobile menu end */}

        <button className="py-2 px-4 bg-gradient-to-r from-[#2959dc] to-[#712be8] rounded-md lg:flex hidden">
          Contact Us
        </button>
      </div>
      {/* links end */}

      {/* mobile menu design start*/}

      {/* mobile menu design end*/}
    </div>
  );
};

export default Navbar;
