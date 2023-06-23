import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'
import item4 from '../assets/item4.png'
import item5 from '../assets/item5.png'
import item6 from '../assets/item6.png'

const Service = () => {

  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <div>
          <h1 className="text-center text-white text-[42px] mt-4 mb-8">Our Service</h1>
        </div>
        <div className="max-w-[1000px] ">
          <p className="text-center mx-auto text-white font-normal opacity-90 lg:w-[580px] w-[300px] ">
            We turn information into actionable insights We work to understand
            your issues and are driven to ask better questions in the pursuit of
            making work.
          </p>
        </div>
      </div>

      {/* carts */}
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-y-10 place-items-center mt-10 text-white">

        {/* cart item start */}
        <div className="flex items-center justify-start flex-col bg-[#111827]/50 w-[370px] h-[336px] rounded-3xl">
          <div className="p-4 rounded-full bg-gradient-to-r from-[#8A7FD9] to-[#402F8F] flex items-center justify-center mt-10">
            <Image src={item1} alt="item image" width={30} height={30} />
          </div>
          <div className="mt-6">
            <h1 className="text-center">Order Management</h1>
          </div>
          <div>
            <p className="text-center mt-6">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div className="mt-8">
            <Link href='/'>Learn More &#8594;</Link>
          </div>
        </div>
        {/* cart item end */}

        {/* cart item start */}
        <div className="flex items-center justify-start flex-col bg-[#111827]/50 w-[370px] h-[336px] rounded-3xl">
          <div className="p-4 rounded-full bg-gradient-to-b from-[#D97F95] to-[#923250] flex items-center justify-center mt-10">
            <Image src={item2} alt="item image" width={30} height={30} />
          </div>
          <div className="mt-6">
            <h1 className="text-center">Order Management</h1>
          </div>
          <div>
            <p className="text-center mt-6">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div className="mt-8">
            <Link href='/'>Learn More &#8594;</Link>
          </div>
        </div>
        {/* cart item end */}

        {/* cart item start */}
        <div className="flex items-center justify-start flex-col bg-[#111827]/50 w-[370px] h-[336px] rounded-3xl">
          <div className="p-4 rounded-full bg-gradient-to-l from-[#84D8ED] to-[#4292BB] flex items-center justify-center mt-10">
            <Image src={item3} alt="item image" width={30} height={30} />
          </div>
          <div className="mt-6">
            <h1 className="text-center">Order Management</h1>
          </div>
          <div>
            <p className="text-center mt-6">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div className="mt-8">
            <Link href='/'>Learn More &#8594;</Link>
          </div>
        </div>
        {/* cart item end */}

        {/* cart item start */}
        <div className="flex items-center justify-start flex-col bg-[#111827]/50 w-[370px] h-[336px] rounded-3xl">
          <div className="p-4 rounded-full bg-gradient-to-b from-[#92EFC3] to-[#2F8F5B] flex items-center justify-center mt-10">
            <Image src={item4} alt="item image" width={30} height={30} />
          </div>
          <div className="mt-6">
            <h1 className="text-center">Order Management</h1>
          </div>
          <div>
            <p className="text-center mt-6">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div className="mt-8">
            <Link href='/'>Learn More &#8594;</Link>
          </div>
        </div>
        {/* cart item end */}

        {/* cart item start */}
        <div className="flex items-center justify-start flex-col bg-[#111827]/50 w-[370px] h-[336px] rounded-3xl">
          <div className="p-4 rounded-full bg-gradient-to-b from-[#BC7FD9] to-[#923283] flex items-center justify-center mt-10">
            <Image src={item5} alt="item image" width={30} height={30} />
          </div>
          <div className="mt-6">
            <h1 className="text-center">Order Management</h1>
          </div>
          <div>
            <p className="text-center mt-6">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div className="mt-8">
            <Link href='/'>Learn More &#8594;</Link>
          </div>
        </div>
        {/* cart item end */}

        {/* cart item start */}
        <div className="flex items-center justify-start flex-col bg-[#111827]/50 w-[370px] h-[336px] rounded-3xl">
          <div className="p-4 rounded-full bg-gradient-to-b from-[#8684ED] to-[#4247BB] flex items-center justify-center mt-10">
            <Image src={item6} alt="item image" width={30} height={30} />
          </div>
          <div className="mt-6">
            <h1 className="text-center">Order Management</h1>
          </div>
          <div>
            <p className="text-center mt-6">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div className="mt-8">
            <Link href='/'>Learn More &#8594;</Link>
          </div>
        </div>
        {/* cart item end */}
      </div>
    </div>
  );
};

export default Service;
