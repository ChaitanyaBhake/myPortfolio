import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({
  experienceRef,
  isExperienceRefInView,
}) => {
  return (
    <div
      className="z-50 flex flex-col gap-12 justify-center pb-48 "
      ref={experienceRef}
    >
      {/* Experience Title */}
      <motion.h1
        initial={{ x: '-300px' }}
        animate={isExperienceRefInView ? { x: '0' } : {}}
        className="font-bold text-3xl bg-gradient-to-l from-black to-white sm:from-black sm:to-black bg-clip-text text-transparent"
      >
        My Journey and Experience
      </motion.h1>
      {/* Experience List */}
      <motion.div
        initial={{ x: '-300px' }}
        animate={
          isExperienceRefInView
            ? {
                x: 0,
                transition: {
                  delay: 0.3, // 0.4 second delay before animation starts
                  duration: 0.4, // optional: how long the animation lasts
                },
              }
            : {}
        }
        className="flex flex-col w-full h-full gap-3 lg:gap-0  font-bold text-black"
      >
        {/*1 Experience ListItem */}
        <div className=" flex justify-between h-auto">
          {/* Left */}
          <div className="w-1/3 ">
            {/* Job Title */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              Software Developer
            </div>
            {/* Job Desc */}
            <div className="p-2 text-sm italic  lg:w-fit md:w-fit w-[144%] bg-gradient-to-l from-slate-100 to-white sm:from-black sm:to-black bg-clip-text text-transparent">
              Designed and deployed a completely new,
              modern-looking admin dashboard and user
              dashboard UI to improve user interaction and
              streamline functionality in production build.
            </div>
            {/* Job Date */}
            <div className="p-3 text-red-400 text-sm font-semibold w-[120%]">
              2024 - Present
            </div>
            {/* Company Name */}
            <div className="p-1 ml-3 rounded bg-white text-sm font-semibold w-fit">
              Kognics.Inc
            </div>
          </div>
          {/* Center Checkpoint Line*/}
          <div className="w-1/6 flex justify-center ">
            {/* Line */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* Circle */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* Right */}
          <div className="w-1/3 "></div>
        </div>

        {/*2 Experience ListItem */}
        <div className="flex justify-between h-auto">
          {/* Left */}
          <div className="w-1/3 "></div>
          {/* Center */}
          <div className="w-1/6 flex justify-center">
            {/* Line */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* Circle */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* Right */}
          <div className="w-1/3 ">
            {' '}
            {/* Job Title */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
              FullStack Developer Trainee
            </div>
            {/* Job Desc */}
            <div className="p-3 text-sm italic  lg:w-fit md:w-fit w-[120%] bg-gradient-to-l from-slate-100 to-white sm:from-black sm:to-black bg-clip-text text-transparent ">
              Acquired hands-on expertise in the MERN stack
              development with UI, RESTful APIs, and
              optimized performance.
            </div>
            {/* Job Date */}
            <div className="p-3 text-red-400 text-sm font-semibold w-[120%]">
              Oct - 2023
            </div>
            {/* Company Name */}
            <div className="p-1 ml-3 rounded bg-white text-sm font-semibold w-fit">
              Cuvette Tech
            </div>
          </div>
        </div>

        {/*3 Experience ListItem  */}
        <div className="flex justify-between h-auto">
          {/* Left */}
          <div className="w-1/3 ">
            {/* Job Title */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              Bachelor of Engineering
            </div>
            {/* Job Desc */}
            <div className="p-3 text-sm italic  lg:w-fit md:w-fit w-[144%] bg-gradient-to-l from-slate-100 to-white sm:from-black sm:to-black bg-clip-text text-transparent">
              Completed Graduation in Computer Science &
              Engineering (CSE) , found my interest in Web
              Development. <br />{' '}
              <span className="mt-2 block">
                {' '}
                8.24 / 10 GPA
              </span>
            </div>
            {/* Job Date */}
            <div className="p-3 text-red-400 text-sm font-semibold">
              June - 2023
            </div>
            {/* Company Name */}
            <div className="p-1 ml-3 rounded bg-white text-sm font-semibold w-fit">
              Nagpur University
            </div>
          </div>
          {/* Center */}
          <div className="w-1/6 flex justify-center">
            {/* Line */}
            <div className="w-1 h-full bg-gray-600 rounded relative">
              {/* Circle */}
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          {/* Right */}
          <div className="w-1/3 "></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
