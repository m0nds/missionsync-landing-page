import React from "react";

const about = () => {
  return <div className="p-[100px] bg-[#FDF8EE]">
<div className="grid grid-cols-2 gap-8 items-center">
  <div>
    <h3 className="mb-3">About Us</h3>
    <h1 className="text-4xl font-medium">MissionSync ensures every team member stays aligned with your goals, focusing on tasks that drive success.</h1>
  </div>

  <div>
    <img src="/images/about.png" className="w-full rounded-3xl"/>
  </div>
</div>

  </div>;
};

export default about;
