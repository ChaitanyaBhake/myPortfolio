import { motion } from 'framer-motion';
import Image from 'next/image';

import React from 'react';

const Biography = () => {
  return (
    <div className="relative z-1 flex flex-col gap-12 justify-center ">
      {/* Biography Title */}
      <h1 className="font-bold text-3xl bg-gradient-to-l from-black to-white sm:from-black sm:to-black bg-clip-text text-transparent">
        Biography
      </h1>

      {/* Biography Desc */}
      <p className="text-xl font-bold  bg-gradient-to-r lg:from-black lg:to-black from-white to-yellow-400 bg-clip-text text-transparent bg-black ">
        Hi, I’m Chaitanya, a passionate{' '}
        <span className="italic font-semibold">
          Full Stack Developer
        </span>{' '}
        with a love for web development and problem-solving.
        I believe in learning from my mistakes and
        constantly improving. Whether it's frontend or
        backend, I enjoy building efficient, user-friendly
        solutions that make a real impact.
      </p>

      {/* Biography Quote */}
      <span className="italic font-semibold text-[1.2rem]  bg-gradient-to-tr from-red-500 to-black bg-clip-text text-transparent">
        “Never Give Up Attitude”
      </span>

      {/* Biography Signature 1:17:00*/}
      <div className=" self-end bottom-20 right-5 lg:mr-20 md:mr-28 ">
        <Image
          src="/signature.png"
          width={130}
          height={130}
          alt="Signature"
          className="-rotate-30 "
        />
      </div>

      {/* Scroll SVG */}
      <motion.svg
        initial={{ opacity: 0.2, y: 0 }}
        animate={{ opacity: 1, y: '10px' }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
      >
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path
          d="M12 6V14"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path
          d="M15 11L12 14L9 11"
          stroke="#000000"
          strokeWidth="1"
        ></path>
      </motion.svg>
    </div>
  );
};

export default Biography;
