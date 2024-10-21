import React from "react";

const banner = () => {
  return <div className="p-[100px] bg-white">
<div className="p-12 bg-[#EFECFF] text-center h-[400px] rounded-3xl flex flex-col justify-center items-center relative">
<img src="/images/shape2.png" className="w-16 absolute left-[476px] top-[60px] "/>
  <h1 className="text-5xl font-medium text-[#070B71]">
  From strategy to <span className="text-[#F98D3F]">success</span> your <br/>journey starts here
  </h1>
  <button className="bg-[#070B71] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded mt-10" type="submit">
      Get Started
    </button>
    <img src="/images/shape1.png" className="w-16 absolute right-[150px] bottom-[40px] "/>
</div>

  </div>;
};

export default banner;
