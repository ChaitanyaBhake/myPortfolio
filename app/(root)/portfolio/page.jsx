'use client';

import BlobAnimation from '@/app/components/BlobAnimation/BlobAnimation';
import HaveAProject from '@/app/components/Portfolio/HaveAProject';
import ProjectCards from '@/app/components/Portfolio/ProjectCards';
import { projects } from '@/app/constant/data';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import React, { useRef } from 'react';

const Portfolio = () => {
  return (
    <motion.div
      className="h-full "
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <ProjectCards />

      <HaveAProject />
      
    </motion.div>
  );
};

export default Portfolio;
