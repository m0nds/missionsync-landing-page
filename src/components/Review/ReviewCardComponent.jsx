import React from "react";

const ReviewCardComponent = ({ text, author, position, image, profile }) => {
  return (
    <div className="bg-[#EFECFF] flex flex-col-reverse lg:flex-row my-6 rounded-xl lg:rounded-3xl ">
      <div className="w-full lg:w-1/2 px-3 gap-3 lg:px-12 pb-7 pt-16 flex flex-col justify-between items-center">
        <h1 className="text-lg lg:text-5xl leading-relaxed text-center font-normal">"{text}"</h1>
        <div className="flex flex-col items-center text-center">
          <img alt="" src={profile} className="w-14 h-14 rounded-full mb-3" />
          <div>
            <h4 className="text-lg lg:text-xl font-medium">{author}</h4>
            <p className="text-base lg:text-lg text-gray-600">{position}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-fit lg:w-1/2 rounded-3xl">
        <img
          alt=""
          src={image}
          className="h-full w-full object-cover rounded-t-xl lg:rounded-t-none lg:rounded-r-3xl"
        />
      </div>
    </div>
  );
};
export default ReviewCardComponent;
