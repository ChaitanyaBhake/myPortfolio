'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import BlobAnimation from '../BlobAnimation/BlobAnimation';
import { projects } from '@/app/constant/data';

const ProjectCardsMobile = () => {
  const [loadingVideoIds, setLoadingVideoIds] = useState(
    []
  );

  const setLoading = (id) => {
    setLoadingVideoIds((prev) => [...prev, id]);
  };

  // useEffect(() => {
  //   setLoading();
  // }, []);

  return (
    <div className="flex flex-col gap-6 px-4 items-center mt-11 w-full h-fit">
      {/* Test button */}
      {/* <button
        onClick={() => {
          // For demo, manually add all project ids to loading
          const allIds = projects.map((p) => p.id);
          setLoadingVideoIds(allIds);

          // Optional: clear loader after 5 seconds automatically
          // setTimeout(() => {
          //   setLoadingVideoIds([]);
          // }, 5000);
        }}
        className="mb-4 p-2 bg-blue-500 text-white rounded z-2"
      >
        Show Loading Spinner for All Videos (5 sec)
      </button> */}

      {projects.map((project, index) => {
        return (
          <div
            key={project.id}
            className={`relative  shrink-0 w-[85vw] h-fit flex justify-center ${
              index === projects.length - 1 ? '' : 'mb-15'
            }`}
          >
            {/* Blob Animation as background */}
            {/* <div className="absolute inset-0 ">
            <BlobAnimation />
          </div> */}

            <div
              className={`relative w-full h-[90%] flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-2xl ${
                project.gradientEffect || 'gradient-anim3'
              }`}
            >
              {/* Title Div */}
              <div
                className={`w-full h-[12%] lg:h-[21%] p-2 bg-gradient-to-tr from-white to-black bg-clip-text text-transparent lg:block lg:p-5`}
              >
                <h1 className="h-full sm:text-[29px] text-[18px] font-bold md:text-5xl lg:text-6xl xl:text-7xl">
                  {project.title}
                </h1>
              </div>

              {/* Project Video and Desc Wrapper */}
              <div className="w-full h-[79%] flex flex-col p-3 lg:flex-row lg:p-14 lg:pt-0 lg:gap-5 lg:items-center">
                {/* Project Video */}
                <div className="w-full h-full rounded-3xl relative">
                  {/* Show loader on top while loading */}
                  {loadingVideoIds.includes(project.id) && (
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-5 rounded-3xl flex items-center justify-center">
                      <div className="loader border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full w-8 h-8 animate-spin"></div>
                    </div>
                  )}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={project.video}
                    className="w-full h-full object-cover lg:object-contain rounded-3xl"
                    onLoadStart={() => {
                      console.log(
                        `Video load started: ${
                          project.id
                        } ${Date.now()}`
                      );
                      setLoading(project.id);
                    }}
                    onCanPlay={() => {
                      console.log(
                        `Video can play: ${
                          project.id
                        } ${Date.now()}`
                      );
                      setTimeout(() => {
                        setLoadingVideoIds((prev) =>
                          prev.filter(
                            (id) => id !== project.id
                          )
                        );
                      }, 3000); // keep loader for 3 seconds after can play
                    }}
                  />
                </div>

                {/* Project DESC */}
                <div className="w-full h-[50%] lg:w-[50%] lg:h-auto lg:flex lg:items-center lg:mt-0 rounded-3xl overflow-auto md:overflow-hidden mt-3 pl-5">
                  <ul className="list-disc flex flex-col lg:gap-8 md:gap-8 sm:gap-8 gap-4 text-black italic p-4 lg:p-3 lg:pl-9">
                    {project.desc
                      .split('.')
                      .map((sentence, idx) =>
                        sentence.trim() ? (
                          <li
                            key={idx}
                            className="lg:text-[1.2rem] md:text-[1.2rem] sm:text-[1.2rem] text-[0.9rem] border-b border-b-white"
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
                {/* TechStack Icons */}
                {project.techStack && (
                  <div className="flex gap-1 ml-4">
                    {project.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] bg-slate-700 p-2 rounded-full -ml-3"
                        title={tech.name}
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
                  <button className="lg:p-2 md:p-2 sm:p-2 p-1 text-sm bg-white text-slate-600 font-semibold rounded-sm cursor-pointer hover:scale-105 transition-all duration-200">
                    See Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCardsMobile;
