'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlinks = ({ link }) => {
  const pathName = usePathname();

  const isActive = pathName === link.route
  
  return (
    <Link href={link.route} className={`rounded p-1 ${isActive && "bg-black text-white"}`}>
      {link.title}
    </Link>
  );
};

export default Navlinks;
