import React from "react";

const contact = () => {
  return <div className="p-[100px] bg-[#F5F5F5]">

    <div className="bg-[#070B71] w-full h-full rounded-3xl p-16 flex">

      <div className="text-white w-1/2">
        <img src= "/images/star.png" className="w-[250px]"/>
        <h1 className="text-4xl font-medium">Get started with us</h1>
        <p>Help another company realise its goal with MissionSync. And earn while you do it!
        </p>
      </div>

      <form className="bg-white p-12 w-1/2 rounded-xl">
      <h1 className="text-4xl mb-10 font-medium">Get Started</h1>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block text-gray-700 text-small mb-2" >
        First Name
      </label>
      <input
        className="appearance-none block w-full bg-[#FAFAFA] text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="first-name"
        type="text"
      />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block text-gray-700 text-small mb-2" >
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
      <input
        className="appearance-none block w-full bg-[#FAFAFA] text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="last-name"
        type="text"
       
      />
    </div>
  </div>


  
    <div className="w-full ">
      <label className="block text-gray-700 text-small mb-2" >
      How can MissionSync help your organization?
      </label>
      <textarea
        className="appearance-none block w-full h-[200px] bg-[#FAFAFA] text-gray-700 border border-gray-100 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="organization-help"
        type="text"
       
      />
    </div>

  <div className="flex justify-end mt-10 ">
    <button className="bg-[#070B71] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded" type="submit">
      Submit
    </button>
  </div>
</form>

    </div>


  </div>;
};

export default contact;
