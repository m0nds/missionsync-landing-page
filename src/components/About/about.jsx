import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const about = () => {
  return (
    <div className="p-8 lg:p-24 bg-[#FDF8EE]">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h3 className="mb-3 text-lg">About Us</h3>
          <h1 className="text-2xl lg:text-4xl font-medium">
            MissionSync ensures every team member stays aligned with your goals,
            focusing on tasks that drive success.
          </h1>
        </div>

        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
        >
          <img src="/images/about.png" alt="" className="w-full rounded-3xl" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default about;
