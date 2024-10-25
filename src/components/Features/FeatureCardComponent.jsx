import React from "react";

const FeatureCardComponent = ({
  title,
  description,
  image,
  bgColor,
  style,
}) => {
  return (
    <div
      style={style}
      className={`rounded-xl lg:rounded-3xl flex flex-col lg:flex-row ${bgColor} gap-3 lg:items-center lg:justify-center h-fit lg:h-[90vh] mx-auto lg:px-10`}
    >
      <div className="w-full lg:w-1/2 px-4  space-y-4">
        <h1 className="text-2xl py-2 lg:text-4xl font-medium text-black leading-relaxed">{title}</h1>
        <p className="text-base lg:text-xl text-black">{description}</p>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={image} alt="" className="" />
      </div>
    </div>
  );
};

export default FeatureCardComponent;
