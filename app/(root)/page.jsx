'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="relative h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto lg:overflow-hidden ">
        {/* Image Container */}
        <div className=" relative h-1/2 lg:h-full lg:w-1/2 ">
          <Image
            src="/ColorArtImg (2).png"
            fill
            alt="heroImg"
            className="object-contain"
          />
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col lg:gap-8 gap-4 items-center justify-center mt-6 ">
          {/* Title */}
          <h1 className="lg:pb-2 md:text-4xl lg:text-6xl text-4xl font-bold text-xs-3xl gradient-text ">
            Designing Tomorrow, One Pixel at a Time.
          </h1>
          {/* Description */}
          <p className="md:text-xl bg-gradient-to-l from-slate-100 to-white sm:from-black sm:to-black bg-clip-text text-transparent font-bold ">
            Welcome to my digital portfolio — where smart
            work meets hard work, and results do the
            talking. I build projects with focus, passion,
            and a commitment to continuous learning and
            delivering the best every time.{' '}
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button
              onClick={() => router.push('/portfolio')}
              className="p-4 rounded-lg ring-1 ring-black bg-black  text-white cursor-pointer hover:scale-105 transition-all duration-200 "
            >
              View My Work
            </button>
            <button
              onClick={() => router.push('/contact')}
              className="p-4 rounded-lg ring-1 ring-black cursor-pointer hover:scale-105 transition-all duration-200 "
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
