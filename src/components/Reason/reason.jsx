import React from "react";
import "../../styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const reason = () => {
  return (
    <div className="h-full p-8 lg:p-24 bg-[#FDF8EE] ">
      <motion.h1
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-center text-2xl lg:text-5xl mb-20 font-semibold"
      >
        Why MissionSync?
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        // variants={fadeIn("right", 0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.6 }}
      >
        <div>
          <div className="flex justify-center items-center h-[500px] rounded-3xl w-full bg-[#ACDAB2]">
            <svg
              width="151"
              height="151"
              viewBox="0 0 151 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-thumbsUpBounce"
            >
              <g filter="url(#filter0_i_7287_26438)">
                <rect width="151" height="151" rx="75.5" fill="#E6FFEC" />
                <path
                  d="M56.1893 74.1733C56.0877 73.0047 57.0088 72 58.1818 72H62.0003C63.1049 72 64.0003 72.8954 64.0003 74V93C64.0003 94.1046 63.1049 95 62.0003 95H59.834C58.7965 95 57.9313 94.2068 57.8415 93.1733L56.1893 74.1733Z"
                  fill="#76C68B"
                  stroke="#76C68B"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M70 73.3745C70 72.5388 70.5194 71.7908 71.2753 71.4345C72.9238 70.6574 75.7329 69.0938 77 66.9805C78.6331 64.2569 78.9411 59.336 78.9912 58.2088C78.9982 58.051 78.9937 57.893 79.0154 57.7366C79.2861 55.7845 83.0543 58.0649 84.5 60.4761C85.2846 61.7847 85.3852 63.504 85.3027 64.8463C85.2144 66.2825 84.7933 67.6699 84.3802 69.0483L83.5 71.9845H94.3569C95.6832 71.9845 96.6421 73.2518 96.2816 74.5281L90.9113 93.5436C90.668 94.4051 89.8818 95 88.9866 95H72C70.8954 95 70 94.1046 70 93V73.3745Z"
                  fill="#76C68B"
                  stroke="#76C68B"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_7287_26438"
                  x="0"
                  y="0"
                  width="151"
                  height="151"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="25" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.461251 0 0 0 0 0.774805 0 0 0 0 0.545045 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_7287_26438"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <h3 className="text-xl font-medium lg:font-semibold mt-4">Do your best work</h3>
          <p className="font-light lg:font-normal">
            Improve your team’s efficiency by ensuring everyone focuses on tasks
            that matter most.
          </p>
        </div>

        <div>
          <div className="h-[500px] rounded-3xl w-full bg-[#FEDA7E] flex justify-end items-end space-x-16 px-16 ">
            <div className="bar bg-[#BF8A02] w-full h-[100px] animate-bounce1 rounded-lg"></div>
            <div className="bar bg-[#FFC93F] w-full h-[200px] animate-bounce2 rounded-lg"></div>
            <div className="bar bg-[#FFB800] w-full h-10 animate-bounce3 rounded-lg"></div>
          </div>
          <h3 className="text-xl font-medium lg:font-semibold mt-4">
            Real time progress update
          </h3>
          <p className="font-light lg:font-normal">
            Improve your team’s efficiency by ensuring everyone focuses on tasks
            that matter most.
          </p>
        </div>

        <div>
          <div className="h-[500px] rounded-3xl w-full bg-[#FE9B97] sticky text-white">
            <div className="box absolute bg-[#8F2020] box1 mb-4 p-6 rounded-xl text-center">
              <p className="text-sm font-light">Gross Margin</p>
              <h1 className="text-4xl font-medium">20%</h1>
            </div>
            <div className="box absolute bg-[#FF5C5C] box2 mb-4 p-6 rounded-xl text-center">
              <p className="text-sm font-light">Volume</p>
              <h1 className="text-4xl font-medium">2.3 M</h1>
            </div>
            <div className="box absolute bg-[#ED4D4D] box3 mt-4 p-6 rounded-xl text-center">
              <p className="text-sm font-light">EBIT</p>
              <h1 className="text-4xl font-medium">30%</h1>
            </div>
            <div className="box absolute bg-[#B92323] box4 mt-4 p-6 rounded-xl text-center">
              <p className="text-sm font-light">Revenue</p>
              <h1 className="text-4xl font-medium">₦29B</h1>
            </div>
          </div>
          <h3 className="text-xl font-medium lg:font-semibold mt-4">Clear goal alignment</h3>
          <p className="font-light lg:font-normal">
            Improve your team’s efficiency by ensuring everyone focuses on tasks
            that matter most.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default reason;
