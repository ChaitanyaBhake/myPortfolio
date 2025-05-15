'use client';

import Biography from '@/app/components/About/Biography';
import Experience from '@/app/components/About/Experience';
import Skills from '@/app/components/About/Skills';
import BlobAnimation from '@/app/components/BlobAnimation/BlobAnimation';
import Brain from '@/app/components/Brain';

import {
  motion,
  useInView,
  useScroll,
} from 'framer-motion';
import React, { useRef } from 'react';

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {
    margin: '-100px',
  });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {
    margin: '-100px',
  });

  return (
    <motion.div
      className="h-full relative "
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >

    
   
      {/* Container */}
      <div
        className="h-full overflow-scroll  overflow-x-hidden lg:flex "
        ref={containerRef}
      >
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-1/2 lg:pr-0 ">
          {/*1. Biography Component */}
          <Biography />

          {/* Skills Component */}
          <Skills
            skillRef={skillRef}
            isSkillRefInView={isSkillRefInView}
          />

          {/* Experience Container */}
          <Experience
            experienceRef={experienceRef}
            isExperienceRefInView={isExperienceRefInView}
          />
        </div>

        {/* Brain Svg Container */}
        <div className="hidden lg:block w-1/3 sticky  top-0 z-30 lg:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
