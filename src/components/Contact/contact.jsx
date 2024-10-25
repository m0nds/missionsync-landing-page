import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Select from "react-select";

const companyTypes = [
  "Agriculture",
  "Automotive",
  "Banking",
  "Biotechnology",
  "Chemicals",
  "Construction",
  "Consulting",
  "Consumer Goods",
  "Education",
  "Energy",
  "Entertainment",
  "Finance",
  "Food & Beverage",
  "Healthcare",
  "Hospitality",
  "Insurance",
  "Legal",
  "Manufacturing",
  "Media",
  "Mining",
  "Pharmaceuticals",
  "Real Estate",
  "Retail",
  "Technology",
  "Telecommunications",
  "Transportation",
  "Utilities",
  "Waste Management",
  "Wholesale",
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    padding: "0.2rem",
    borderColor: "gray-300",
    boxShadow: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#4f46e5" : "#fff",
    color: state.isSelected ? "#fff" : "#000",
    "&:hover": {
      backgroundColor: "#e0e7ff",
      color: "#000",
    },
  }),
};

const contact = () => {
  return (
    <div className="p-8 lg:p-24 bg-[#F5F5F5]">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="bg-[#070B71] w-full h-full rounded-3xl pl-4 lg:p-16 flex flex-col lg:flex-row gap-6"
      >
        <div className="text-white space-y-6 w-full lg:w-2/5">
          <img src="/images/star.png" alt="" className="w-[150px] mt-12 lg:mt-0 lg:w-[200px]" />
          <h1 className="text-3xl font-medium">Get started with us</h1>
          <p className="font-light lg:font-normal w-4/5">
            Help another company realise its goal with MissionSync. And earn
            while you do it!
          </p>
        </div>

        <form className="bg-white p-4 lg:p-12 w-full lg:w-3/5 lg:rounded-xl">
          <h1 className="text-2xl lg:text-4xl mb-10 font-medium">Get Started</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-gray-700 text-small mb-2">
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-[#FAFAFA] text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="first-name"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-gray-700 text-small mb-2">
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-[#FAFAFA] text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="last-name"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-gray-700 text-small mb-2">
                Email Address
              </label>
              <input
                className="appearance-none block w-full bg-[#FAFAFA] text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-gray-700 text-small mb-2">
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-[#FAFAFA] text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phone"
                type="tel"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-gray-700 text-small mb-2">
                Company Name
              </label>
              <input
                className="appearance-none block w-full bg-[#FAFAFA] text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="first-name"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-gray-700 text-small mb-2">
                Type of Company
              </label>
              <Select
                options={companyTypes.map((option) => ({
                  label: option,
                  value: option,
                }))}
                styles={customStyles}
                isSearchable
                placeholder="Select sector"
              />
            </div>
          </div>

          <div className="w-full ">
            <label className="block text-gray-700 text-small mb-2">
              How can MissionSync help your organization?
            </label>
            <textarea
              className="appearance-none block w-full h-[200px] bg-[#FAFAFA] text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="organization-help"
              type="text"
            />
          </div>

          <div className="flex justify-end mt-10 ">
            <button
              className="bg-[#070B71] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default contact;
