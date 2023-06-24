import React from "react";
import work1 from "../assets/man-working.png";
import work2 from "../assets/man-working2.png";
import Image from "next/image";

const Works = () => {
  return (
    <div>
      {/* work item start */}
      <div className="max-w-[1240px] mt-10 grid lg:grid-cols-2 grid-cols-1 place-items-center ">
        <div className="relative md:h-[588px] md:w-[588px] h-[350px] w-[350px] ">
          <Image src={work1} alt="man working" fill />
        </div>
        <div className="text-white">
          <h1 className="md:text-[42px] text-[30px] text-center md:text-start mb-10 font-bold ">
            We complete every projects extra care as customer need
          </h1>
          <p className="opacity-90 font-normal md:text-base text-[14px] leading-6 text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
            consectetur adipisicing elit. Labore eius molestiae facere, natus
            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
            laborum iure inventore possimus laboriosam qui nam.
          </p>
          <button className="block md:mx-0 mx-auto py-2 px-6 mt-8 bg-gradient-to-r from-[#2959dc] to-[#712be8] rounded-md">
            Read More
          </button>
        </div>
      </div>
      {/* work item end */}

      {/* work item start */}
      <div className="max-w-[1240px] md:mt-10 mt-32 grid lg:grid-cols-2 grid-cols-1 place-items-center ">
        <div className="text-white">
          <h1 className="md:text-[42px] text-[30px] text-center md:text-start mb-10 font-bold ">
            We complete every projects extra care as customer need
          </h1>
          <p className="opacity-90 font-normal md:text-base text-[14px] leading-6 text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nuncoe scelerisque in. orem ipsum dolor sit amet,
            consectetur adipisicing elit. Labore eius molestiae facere, natus
            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit
            laborum iure inventore possimus laboriosam qui nam.
          </p>
          <button className="block md:mx-0 mx-auto py-2 px-6 mt-8 bg-gradient-to-r from-[#2959dc] to-[#712be8] rounded-md">
            Read More
          </button>
        </div>

        <div className="relative md:h-[588px] md:w-[588px] h-[350px] w-[350px] ">
          <Image src={work2} alt="man working" fill />
        </div>
      </div>
      {/* work item end */}
    </div>
  );
};

export default Works;
