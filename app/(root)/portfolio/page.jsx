'use client';

import HaveAProject from '@/app/components/Portfolio/HaveAProject';
import ProjectCards from '@/app/components/Portfolio/ProjectCards';
import ProjectCardsMobile from '@/app/components/Portfolio/ProjectCardsMobile';
import useIsMobile from '@/app/hooks/useIsMobile';

import { motion } from 'framer-motion';

import React from 'react';

const Portfolio = () => {
  const isMobile = useIsMobile();
  return (
    <motion.div
      className={`h-full  ${
        isMobile ? 'overflow-auto' : ''
      }`}
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {isMobile ? <ProjectCardsMobile /> : <ProjectCards />}

      <HaveAProject isMobile={isMobile} />
    </motion.div>
  );
};

export default Portfolio;
