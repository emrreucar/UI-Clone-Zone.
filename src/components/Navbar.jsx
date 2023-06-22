import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { RiMenu3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
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
  return (
    <div className="flex items-center justify-between text-white mt-4">
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
          {links.map(link => (
            <li className="cursor-pointer opacity-80 hover:opacity-100 duration-300" key={link.id}>
              {link.name}
            </li>
          ))}
        </ul>
        <button className="py-2 px-4 bg-gradient-to-r from-[#2959dc] to-[#712be8] rounded-md lg:flex hidden">Contact Us</button>
      </div>
      {/* links end */}
    </div>
  );
};

export default Navbar;
