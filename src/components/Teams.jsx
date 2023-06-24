import React from "react";
import Image from "next/image";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.png";
import Link from "next/link";

import { BsFacebook, BsLinkedin, BsSkype, BsTwitter } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Teams = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-white text-[42px] mb-8 mt-10 ">
          Met Our Team
        </h1>
        <p className="text-center opacity-90 mx-auto text-white text-base sm:w-[480px] w-[350px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          accumsan nisi Ut ut felis congue nisl hendrerit commodo.
        </p>
      </div>

      {/* carts start */}
      <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center mt-16 sm:gap-0 gap-10">
        {/* cart item start */}
        <div className="bg-blue-500/5 shadow-inner shadow-blue-400 w-[270px] h-[266px] flex items-center justify-start pt-10 flex-col rounded-3xl ">
          <div>
            <div className="relative w-[90px] h-[90px] mx-auto mb-[-20px] ">
              <Image src={avatar1} alt="avatar-1" fill />
            </div>
            <div className="pt-4">
              <p className="text-center text-white text-[28px] ">Sunny Khan</p>
              <p className="text-center text-white uppercase">
                Executive officer
              </p>
            </div>
            {/* social icons start */}
            <div className="flex items-center justify-center gap-x-4 pt-4">
              <Link href="/">
                <BsSkype className="text-blue-500" />
              </Link>
              <Link href="/">
                <BsLinkedin className="text-blue-600" />
              </Link>
              <Link href="/">
                <BsTwitter className="text-blue-400" />
              </Link>
              <Link href="/">
                <BsFacebook className="text-blue-500" />
              </Link>
            </div>
            {/* social icons end */}
          </div>
        </div>
        {/* cart item end */}
        {/* cart item start */}
        <div className="bg-blue-500/5 shadow-inner shadow-blue-400 w-[270px] h-[266px] flex items-center justify-start pt-10 flex-col rounded-3xl ">
          <div>
            <div className="relative w-[90px] h-[90px] mx-auto mb-[-20px] ">
              <Image src={avatar2} alt="avatar-1" fill />
            </div>
            <div className="pt-4">
              <p className="text-center text-white text-[28px] ">Alina Jesia</p>
              <p className="text-center text-white uppercase">UX/UI DESIGNER</p>
            </div>
            {/* social icons start */}
            <div className="flex items-center justify-center gap-x-4 pt-4">
              <Link href="/">
                <BsSkype className="text-blue-500" />
              </Link>
              <Link href="/">
                <BsLinkedin className="text-blue-600" />
              </Link>
              <Link href="/">
                <BsTwitter className="text-blue-400" />
              </Link>
              <Link href="/">
                <BsFacebook className="text-blue-500" />
              </Link>
            </div>
            {/* social icons end */}
          </div>
        </div>
        {/* cart item end */}
        {/* cart item start */}
        <div className="bg-blue-500/5 shadow-inner shadow-blue-400 w-[270px] h-[266px] flex items-center justify-start pt-10 flex-col rounded-3xl ">
          <div>
            <div className="relative w-[90px] h-[90px] mx-auto mb-[-20px] ">
              <Image src={avatar3} alt="avatar-1" fill />
            </div>
            <div className="pt-4">
              <p className="text-center text-white text-[28px] ">Alex Sohag</p>
              <p className="text-center text-white uppercase">
                BUSINESS DEVELOPMENT
              </p>
            </div>
            {/* social icons start */}
            <div className="flex items-center justify-center gap-x-4 pt-4">
              <Link href="/">
                <BsSkype className="text-blue-500" />
              </Link>
              <Link href="/">
                <BsLinkedin className="text-blue-600" />
              </Link>
              <Link href="/">
                <BsTwitter className="text-blue-400" />
              </Link>
              <Link href="/">
                <BsFacebook className="text-blue-500" />
              </Link>
            </div>
            {/* social icons end */}
          </div>
        </div>
        {/* cart item end */}
        {/* cart item start */}
        <div className="bg-blue-500/5 shadow-inner shadow-blue-400 w-[270px] h-[266px] flex items-center justify-start pt-10 flex-col rounded-3xl ">
          <div>
            <div className="relative w-[90px] h-[90px] mx-auto mb-[-20px] ">
              <Image src={avatar4} alt="avatar-1" fill />
            </div>
            <div className="pt-4">
              <p className="text-center text-white text-[28px] ">Afroza Mou</p>
              <p className="text-center text-white uppercase">
                Head of marketing
              </p>
            </div>
            {/* social icons start */}
            <div className="flex items-center justify-center gap-x-4 pt-4">
              <Link href="/">
                <BsSkype className="text-blue-500" />
              </Link>
              <Link href="/">
                <BsLinkedin className="text-blue-600" />
              </Link>
              <Link href="/">
                <BsTwitter className="text-blue-400" />
              </Link>
              <Link href="/">
                <BsFacebook className="text-blue-500" />
              </Link>
            </div>
            {/* social icons end */}
          </div>
        </div>
        {/* cart item end */}
      </div>
      {/* carts end */}
    </div>
  );
};

export default Teams;
