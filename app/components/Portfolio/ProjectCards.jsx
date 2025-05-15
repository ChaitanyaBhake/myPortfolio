import React, { useRef } from 'react';

import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { projects } from '@/app/constant/data';
import BlobAnimation from '../BlobAnimation/BlobAnimation';
import Link from 'next/link';

const ProjectCards = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '-80%']
  );

  const shadowColorMap = {
    red: 'shadow-violet-200',
    green: 'shadow-green-200',
    violet: 'shadow-violet-200',
    blue: 'shadow-blue-200',
    purple: 'shadow-purple-200',
  };

  return (
    <div className="h-[600vh] relative" ref={ref}>
      <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center ">
        My Works{' '}
      </div>

      <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
        <motion.div style={{ x: x }} className="flex">
          <div className="relative h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 ">
            {' '}
            <div className="absolute inset-0">
              {' '}
              <BlobAnimation />
            </div>
          </div>

          {/* All Projects */}
          {projects.map((project) => (
            <div
              className={`relative h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color} `}
              key={project.id}
            >
              {/* Blob Animation as background */}
              <div className="absolute inset-0 ">
                <BlobAnimation />
              </div>

              <div
                className={`absolute w-[80%] h-[80%] flex flex-col justify-between   shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-2xl ${
                  project.gradientEffect
                    ? project.gradientEffect
                    : 'gradient-anim3'
                } `}
              >
                {/* Title Div */}
                <div
                  className={`w-full h-[12%] lg:h-[21%]  p-2 bg-gradient-to-tr from-white to-black bg-clip-text text-transparent lg:block  lg:p-5  `}
                >
                  <h1 className="h-full sm:text-[29px] text-[20px] font-bold md:text-5xl lg:text-6xl xl:text-7xl">
                    {project.title}
                  </h1>
                </div>

                {/* Project Video and Desc Wrapper */}
                <div className="w-full h-[79%] flex flex-col p-3 lg:flex-row   lg:p-14 lg:pt-0 lg:gap-5 lg:items-center">
                  {/* Project Video */}
                  <div
                    className={`w-full h-[50%] lg:w-[50%] lg:h-full  ${
                      shadowColorMap[project.shadowColor] ||
                      ''
                    }`}
                  >
                    {project.video && (
                      <div className="w-full h-full  rounded-3xl ">
                        <video
                          autoPlay
                          muted
                          loop
                          src={project.video}
                          className=" w-full h-full object-cover lg:object-contain rounded-3xl"
                        ></video>
                      </div>
                    )}
                  </div>

                  {/* Project DESC */}
                  <div className="w-full h-[50%] lg:w-[50%] lg:h-auto lg:flex m lg:items-center  lg:mt-0 rounded-3xl  overflow-auto md:overflow-hidden mt-3  pl-5 ">
                    <ul className=" list-disc  flex flex-col lg:gap-8 md:gap-8 sm:gap-8  gap-4  text-black italic p-4 lg:p-3 lg:pl-9  ">
                      {project.desc
                        .split('.')
                        .map((sentence, index) =>
                          sentence.trim() ? (
                            <li
                              key={index}
                              className="lg:text-[1.2rem] md:text-[1.2rem]  sm:text-[1.2rem] text-[0.9rem] border-b border-b-white "
                            >
                              {sentence.trim()}.
                            </li>
                          ) : null
                        )}
                    </ul>
                  </div>
                </div>

                {/* Tech Icon Stack and See Demo Wrapper */}
                <div className="w-full h-[9%] flex justify-between items-center p-2 shadow-[0_0_20px_rgba(0,0,0,0.2)] lg:pl-10 lg:pr-20 md:pl-5 md:pr-10 sm:pl-5 sm:pr-10 rounded-2xl">
                  {/* TechSTack Icons  */}
                  {project.techStack && (
                    <div className="flex gap-1 ml-4">
                      {project.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] bg-slate-700 p-2 rounded-full -ml-3"
                          title={tech.name} // Tooltip appears on hover
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* See Demo Button */}
                  <Link
                    href={project.link}
                    target="_blank"
                    className=""
                  >
                    {' '}
                    <button className="lg:p-2 md:p-2 sm:p-2 p-1  text-sm bg-white text-slate-600 font-semibold  rounded-sm cursor-pointer hover:scale-105 transition-all duration-200">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectCards;
