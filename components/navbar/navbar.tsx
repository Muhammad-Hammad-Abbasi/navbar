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
    <nav className="bg-white dark:bg-gray-900 shadow-md w-full py-3 px-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-orange-400">MO<span className="text-red-600">MS</span></div>
        <p className="text-orange-400 text-sm">Bringing Moments To Life</p>
      </div>

      {/* Mobile Controls */}
      <div className="flex items-center gap-4 md:hidden">
        <div className="flex items-center border rounded-full px-2 py-1 bg-gray-100 dark:bg-gray-800">
          <input type="text" placeholder="Search" className="bg-transparent outline-none text-gray-600 dark:text-white px-2 w-20" />
          <FaSearch className="text-gray-500 dark:text-white" />
        </div>
        <button onClick={toggleTheme} className="text-xl text-gray-500 dark:text-white">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-500 dark:text-white text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Menu */}
      <ul className={`absolute md:relative top-28 md:top-auto left-0 w-full md:w-auto md:flex bg-white dark:bg-gray-900 shadow-md md:shadow-none p-4 md:p-0 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}`}>
        {['ABOUT US', 'CATALOG', 'PLACES', 'BLOG', 'CONTACT'].map((item) => (
          <li key={item} className="py-2 md:py-0 px-4 text-gray-700 dark:text-white hover:text-orange-500">
            <Link href="#">{item}</Link>
          </li>
        ))}
        <li className="md:hidden mt-2">
          <button className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full font-medium">
            Create Account
          </button>
        </li>
      </ul>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-3">
        <div className="flex items-center border rounded-full px-3 py-1 bg-gray-100 dark:bg-gray-800">
          <input type="text" placeholder="Search" className="bg-transparent outline-none text-gray-600 dark:text-white px-1 w-16" />
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
