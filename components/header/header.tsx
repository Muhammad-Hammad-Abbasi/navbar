"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAlignRight, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-[#78d6bf] shadow-lg'>
      <div className='flex justify-between items-center px-8 py-1 font-sans font-semibold'>
        <div>
          <Link href={'/'}>
            <Image src={'/logo-removebg.png'} alt={'Logo'} height={100} width={80} className='' />
          </Link>
        </div>

        <button onClick={toggleButton} className='block md:hidden'>
          {isOpen ? <FaTimes size={24} /> : <FaAlignRight size={24} />}
        </button>

        <nav className='hidden md:block'>
          <ul className='flex gap-5 text-lg items-center'>
            <Link href={'/'}>
            <li className='text-md text-[#270d0d] hover:text-white border-b-2 border-transparent hover:border-white px-4 py-2 transition duration-300 ease-in-out'>Home</li>
            </Link>
            <Link href={'/'}>
            <li className='text-md text-[#270d0d] hover:text-white border-b-2 border-transparent hover:border-white px-4 py-2 transition duration-300 ease-in-out'>Products</li>
            </Link>
            <Link href={'/'}>
            <li className='text-md text-[#270d0d] hover:text-white border-b-2 border-transparent hover:border-white px-4 py-2 transition duration-300 ease-in-out'>About</li>
            </Link>
            <Link href={'/'}>
            <li className='text-md text-[#270d0d] hover:text-white border-b-2 border-transparent hover:border-white px-4 py-2 transition duration-300 ease-in-out'>Contact</li>
            </Link>
            <Link href={'/'}>
            <li className='text-md text-[#270d0d] hover:text-white border-b-2 border-transparent hover:border-white px-4 py-2 transition duration-300 ease-in-out'>Blogs</li>
            </Link>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <div className='md:hidden flex flex-col items-center py-4 bg-[#78d6bf] w-full'>
          <ul className='flex flex-col gap-4 text-center'>
            <Link href={'/'} onClick={toggleButton}><li className='hover:underline'>Home</li></Link>
            <Link href={'/'} onClick={toggleButton}><li className='hover:underline'>Products</li></Link>
            <Link href={'/'} onClick={toggleButton}><li className='hover:underline'>About</li></Link>
            <Link href={'/'} onClick={toggleButton}><li className='hover:underline'>Contact</li></Link>
            <Link href={'/'} onClick={toggleButton}><li className='hover:underline'>Blogs</li></Link>
          </ul>
        </div>
      )}
    </header>
  );
}