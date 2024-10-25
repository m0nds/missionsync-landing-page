import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

const BackToTopBtn = () => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 400){

        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  
  })
  
  return (
    <Link
      to="top"
      smooth={true}
      className={`${
        !isActive && "hidden"
      } fixed bg-[#070B71] hover:bg-[#070B71] w-12 h-12 rounded-full right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white`}
    >
      <FaChevronUp className="text-xl" />
    </Link>
  );
};

export default BackToTopBtn;
