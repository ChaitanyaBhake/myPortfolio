'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { NavLinksData } from '../constant/data';
import Image from 'next/image';
import Navlinks from './Navlinks';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition:{
        when:"beforeChildren",
        staggerChildren: 0.2,
      }
    },
  };
  const listItemsVariants = {
    closed:{
      x: -10,
      opacity:0
    },
    opened:{
      x:0,
      opacity:1,
    },
  }

  return (
    <div className="relative h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl z-10">
      {/* NavLinks Desktop */}
      <div className="hidden md:flex gap-2 w-1/3 ">
        {NavLinksData.map((link) => (
          <Navlinks key={link.title} link={link} />
        ))}
      </div>

      {/*Logo Desktop  */}
      <div className="md:hidden lg:flex xl:w-1/3  xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Chaitanya</span>
          <span className=" w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .Dev
          </span>
        </Link>
      </div>

      {/* Social Media Apps Desktop*/}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        <Link href="#">
          <Image
            src="/github.png"
            width={24}
            height={24}
            alt="github-logo"
          />
        </Link>
        <Link href="#">
          <Image
            src="/linkedin.png"
            width={24}
            height={24}
            alt="linkedin-logo"
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-9999 relative cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-[999]"
          >
            {NavLinksData.map((link) => (
              <motion.div
                variants={listItemsVariants}
                className="hover:scale-125 "
                key={link.title}
              >
                <Link className='' href={link.route}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
