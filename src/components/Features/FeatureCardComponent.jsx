import React from "react";

const FeatureCardComponent = ({ title, description,image,bgColor,style }) => {
    return (
        <div style={style} className={`rounded-3xl flex ${bgColor} items-center justify-center h-[90vh] mx-auto `}>
            <div className="w-2/5">
            <h1 className="text-4xl font-semibold text-black">{title}</h1>
            <p className="text-md text-black">{description}</p>
            </div>
            <img src={image} className=" w-1/2"/>
          

        </div>
        
      );
};

export default FeatureCardComponent;
