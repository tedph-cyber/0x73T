"use client";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white flex mx-auto justify-center dark:bg-black border-b border-b-[#e8e6e5] dark:border-b-[#403d39] py-2 px-6">
      <div className="flex items-center px-10 justify-between md:w-auto w-full">
        <Image
          src="/images/image.png"
          alt="0x73tari.eth"
          width={40}
          height={40}
          className="aspect-auto rounded-md md:block"
          priority
        />
        <button
          className="md:hidden text-black dark:text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <Link
          className="inline-block text-black dark:text-white"
          href="/#about"
        >
          Home
        </Link>
        <Link
          className="inline-block text-black dark:text-white"
          href="/#project"
        >
          Projects
        </Link>
        <button
          className="rounded-full px-2 text-black aspect-square items-center flex dark:text-white border-black dark:border-white"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <BsFillSunFill size={30} />
          ) : (
            <BsFillMoonStarsFill size={30} />
          )}
        </button>
      </div>
      <div className="items-center md:flex hidden gap-6">
      </div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: menuOpen ? "0%" : "100%", opacity: menuOpen ? 0.8 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 right-0 bg-white dark:bg-black w-64 h-full shadow-lg z-50 md:hidden`}
      >
        <div className="flex flex-col p-4 h-full">
          <button
            onClick={toggleMenu}
            className="flex justify-between items-center mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            onClick={toggleMenu}
            href="/#about"
            className="py-2 text-black dark:text-white"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            href="/#project"
            className="py-2 text-black dark:text-white"
          >
            Projects
          </Link>
          <button
            onClick={toggleDarkMode}
            className="py-2 text-black dark:text-white"
          >
            {darkMode === "dark" ? (
              <BsFillSunFill size={30} />
            ) : (
              <BsFillMoonStarsFill size={30} />
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}