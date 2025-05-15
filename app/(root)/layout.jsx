'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import BlobAnimation from '../components/BlobAnimation/BlobAnimation';

const layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className={`relative w-screen h-screen  bg-gradient-to-b ${
          pathName === '/portfolio'
            ? 'from-blue-50 to-red-100'
            : pathName === '/contact'
            ? 'from-blue-50 to-green-50'
            : 'from-white-50 to-black '
        }  `}
      >
        <div className="absolute inset-0 ">
          <BlobAnimation />
        </div>

        {/* * Starting Animation Div top to bottom */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* * Middle Div for showing page  */}
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default  z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {pathName.substring(1)}
        </motion.div>

        {/* * Ending Div from bottom to top */}
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] z-30 bottom-0"
          initial={{ height: '140vh' }}
          animate={{
            height: '0vh',
            transition: { delay: 0.5 },
          }}
        />

        <Navbar />
        <div className=" h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default layout;
