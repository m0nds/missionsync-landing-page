import React from "react";

const ReviewCardComponent = ({text,author,position,image,profile}) => {
    return (
        <div className="bg-[#EFECFF] flex rounded-3xl ">
            <div className="w-1/2 px-12 pb-[50px] pt-[150px] flex flex-col items-center">
                <h1 className="text-6xl text-center font-normal">"{text}"</h1>
                <div className="mt-auto flex flex-col items-center text-center">
                    <img src={profile} className="w-12 h-12 rounded-full mb-3"/>
                    <div>
                    <h4 className="text-xl font-medium">{author}</h4>
                    <p className="text-md text-gray-600">{position}</p>
                    </div>
                    
                </div>
            </div>

            <div className="w-1/2 lg:w-1/2 rounded-3xl">
                <img src={image} className="h-full w-full object-cover rounded-r-3xl"/>
            </div>
        </div>
    )}
export default ReviewCardComponent;
