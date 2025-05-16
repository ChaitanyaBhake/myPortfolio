'use client';
import Link from 'next/link';
import React from 'react';
import { projects } from '@/app/constant/data';
import { ChevronLeft } from 'lucide-react';

const ProjectCardsMobile = () => {
  const shadowColorMap = {
    red: 'shadow-violet-200',
    green: 'shadow-green-200',
    violet: 'shadow-violet-200',
    blue: 'shadow-blue-200',
    purple: 'shadow-purple-200',
  };

  return (
    <div className="flex flex-col gap-6 px-4 items-center mt-11 w-full h-fit">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`relative  shrink-0 w-[85vw] h-[70vh] flex justify-center`}
        >
          <div
            className={`relative w-full flex flex-col justify-between shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-2xl ${
              project.gradientEffect || 'gradient-anim3'
            }`}
          >
            {/* Title */}
            <div className="w-full p-3">
              <h1 className="text-[20px] font-bold sm:text-[24px]">
                {project.title}
              </h1>
            </div>

            {/* Video + Description */}
            <div className="w-full flex flex-col gap-4 p-3">
              {/* Video */}
              <div
                className={`w-full rounded-3xl ${
                  shadowColorMap[project.shadowColor] || ''
                }`}
              >
                {project.video && (
                  <video
                    autoPlay
                    muted
                    loop
                    src={project.video}
                    className="w-full h-auto rounded-3xl object-cover"
                  />
                )}
              </div>

              {/* Description */}
              <div className="w-full">
                <ul className="list-disc flex flex-col gap-3 text-black italic pl-5 pr-2">
                  {project.desc
                    .split('.')
                    .map((sentence, idx) =>
                      sentence.trim() ? (
                        <li
                          key={idx}
                          className="text-[14px] border-b border-b-white pb-1"
                        >
                          {sentence.trim()}.
                        </li>
                      ) : null
                    )}
                </ul>
              </div>
            </div>

            {/* Tech stack + See Demo */}
            <div className="w-full flex justify-between items-center px-4 py-2 rounded-b-2xl">
              {project.techStack && (
                <div className="flex gap-1">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="w-[30px] h-[30px] bg-slate-700 p-2 rounded-full"
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

              <Link href={project.link} target="_blank">
                <button className="px-3 py-1 text-sm bg-white text-slate-600 font-semibold rounded-sm hover:scale-105 transition-all duration-200">
                  See Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCardsMobile;