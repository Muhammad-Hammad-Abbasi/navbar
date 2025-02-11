"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaBell, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md w-full py-3 px-2 md:px-2 lg:px-5 flex justify-between items-center md:flex-wrap lg:flex-nowrap">
      {/* Left Side (Logo) */}
      <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-bold font-sans text-orange-400 mr-2">
        MO<span className="text-red-600">MS</span>
      </div>
      <p className="text-orange-400 font-sans text-sm">Bringing Moments To Life</p>
      </div>

      {/* Search Bar, Theme Toggle & Bell Icon (Mobile) 
*/}
      <div className="flex items-center gap-4 md:hidden">
        <div className="flex justify-center items-center border rounded-full px-2 py-1 bg-gray-100 dark:bg-gray-800">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-600 dark:text-white px-3  w-20"
          />
          <FaSearch className="text-gray-500 dark:text-white" />
        </div>
        <button onClick={toggleTheme} className="text-xl text-gray-500 dark:text-white">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-500 dark:text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`md:flex gap-4 text-gray-700 dark:text-white font-medium md:static md:flex-row md:items-center md:gap-3
        ${menuOpen ? "block p-4 shadow-lg" : "hidden md:flex"}`}>
        <li><Link href="#" className="block py-2 px-4 hover:text-orange-500">ABOUT US</Link></li>
        <li><Link href="#" className="block py-2 px-4 hover:text-orange-500">CATALOG</Link></li>
        <li><Link href="#" className="block py-2 px-4 hover:text-orange-500">PLACES</Link></li>
        <li><Link href="#" className="block py-2 px-4 hover:text-orange-500">BLOG</Link></li>
        <li><Link href="#" className="block py-2 px-4 hover:text-orange-500">CONTACT</Link></li>

        {/* Create Account Button (Mobile) */}
        <li className="md:hidden mt-2">
          <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full font-medium">
            Create Account
          </button>
        </li>
      </ul>

      {/* Right Section (Desktop Only) */}
      <div className="hidden md:flex items-center gap-3">
        <div className="flex items-center border rounded-full px-3 py-1 bg-gray-100 dark:bg-gray-800">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-600 w-16 dark:text-white px-1"
          />
          <FaSearch className="text-gray-500 dark:text-white" />
        </div>
        <FaBell className="text-gray-500 dark:text-white text-lg" />
        <CiSettings size={25} className="text-gray-500 dark:text-white" />
        <button onClick={toggleTheme} className="text-xl text-gray-500 dark:text-white">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full font-medium">
          Create Account
        </button>
      </div>
    </nav>
  );
}
