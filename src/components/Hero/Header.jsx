import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-screen flex fixed z-20 px-8 lg:px-32 py-4 justify-between items-center transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl bg-white/40 " : "bg-transparent"
      }`}
    >
      <div>
        <a href="/" className="flex items-center">
          <img alt="Logo" src="/images/logo.png" className="object-contain" />
          <span className="font-russo text-lg">MissionSync</span>
        </a>
      </div>
      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:items-center">
        <a href="/" className="px-6 text-md">
          Sign In
        </a>
        <a
          href="/"
          className="rounded-md bg-[#070B71] px-6 py-2.5 text-md font-normal text-white shadow-sm"
        >
          Get Started
        </a>
      </div>
      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <div className="text-2xl">
            {!isOpen && <HiOutlineMenuAlt3 />}
          </div>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="absolute top-0 left-0 w-full h-[40vh] bg-white p-8 space-y-6 shadow-lg lg:hidden"
        >
          <div
            onClick={() => setIsOpen(false)}
            className="flex justify-end text-2xl"
          >
            <FaTimes />
          </div>
          <div className="flex flex-col gap-3 justify-center">

          <a href="/" className="block text-md text-center font-medium">
            Sign In
          </a>
          <a
            href="/"
            className="block rounded-md bg-[#070B71] px-6 py-2.5 w-fit mx-auto text-md font-normal text-white shadow-sm"
          >
            Get Started
          </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Header;