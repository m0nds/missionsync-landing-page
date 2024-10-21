import React from "react";
import { cardData } from "../../data";
import FeatureCardComponent from "./FeatureCardComponent";

const feature = () => {
  return (

    <div className="bg-white p-[100px]">
<div className="space-y-10">
      {cardData.map((item, index) => (
        <FeatureCardComponent 
        style={{ 
          position: 'sticky', 
          top: 0, 
          paddingTop: `${index * 2}em` 
        }} 
          key={item.id} 
          title={item.title} 
          description={item.description} 
          image={item.image}
          bgColor={item.bgColor} 
        />
      ))}
    </div>
    </div>
    
  );
};

export default feature;
