import React, { useState } from "react";
import { reviewData} from "../../data";
import ReviewCardComponent from "./ReviewCardComponent";

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };


  return(
    <div className="p-[100px] bg-white">
      <div className="space-y-10 ">
      <ReviewCardComponent
          key={reviewData[currentIndex].id}
          author={reviewData[currentIndex].author}
          text={reviewData[currentIndex].text}
          image={reviewData[currentIndex].image}
          profile={reviewData[currentIndex].profile}
          position={reviewData[currentIndex].position}
        />
    </div>

    <div className="flex justify-center mt-10">
        {reviewData.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-2 rounded-full mx-1 cursor-pointer ${
              index === currentIndex ? "bg-purple-600" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

    </div>
  )
};

export default Review;
