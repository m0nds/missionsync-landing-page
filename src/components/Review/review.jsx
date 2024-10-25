import React from "react";
import { reviewData } from "../../data";
import ReviewCardComponent from "./ReviewCardComponent";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Review = () => {
  const settings = {
    dots: true, // Enable dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Optional: Auto-play feature
    autoplaySpeed: 3000, // Speed of auto-play
    pauseOnHover: true, // Pause when hovered
    arrows: false, // Optional: Disable next/prev arrows if needed
  };

  return (
    <motion.div 
    variants={fadeIn("down", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.6 }}
    className="p-8 lg:p-24 bg-white">
      <Slider {...settings}>
        {reviewData.map((item, index) => (
          <ReviewCardComponent
            key={item.id}
            author={item.author}
            text={item.text}
            image={item.image}
            profile={item.profile}
            position={item.position}
          />
        ))}
      </Slider>
    </motion.div>
  );
};

export default Review;

