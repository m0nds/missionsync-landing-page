import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const banner = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="p-8 lg:p-24 bg-white"
    >
      <div className="px-6 py-20 lg:y-12 bg-[#EFECFF] text-center h-fit  rounded-3xl flex flex-col justify-center items-center relative">
        <div className="hidden lg:block">

        <img
          src="/images/shape2.png"
          alt=""
          className="w-16 absolute left-[360px] top-[32px]"
        />
        </div>
        <h1 className="text-4xl lg:text-5xl leading-relaxed font-medium text-[#070B71]">
          From strategy to <span className="text-[#F98D3F]">success</span> your{" "}
          <br />
          journey starts here
        </h1>
        <button
          className="bg-[#070B71] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded mt-10"
          type="submit"
        >
          Get Started
        </button>
        <div className="hidden lg:block">

        <img
          src="/images/shape1.png"
          alt=""
          className="w-16 absolute right-[150px] bottom-[40px] "
        />
        </div>
      </div>
    </motion.div>
  );
};

export default banner;
