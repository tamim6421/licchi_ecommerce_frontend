"use client";
import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
     
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
     
      className="single_review border border-black rounded p-3 mt-4"
    >
      <div className="flex items-center justify-between">
        <div className="">
          <div
            className="flex align-baseline
            "
          >
            <div className="user me-2">
              <FaUserCircle className="text-5xl" />
            </div>
            <div className="">
              <h2>Palash Roy</h2>
              <p>Figma designer, ANCOVA</p>
            </div>
          </div>
        </div>
        <div className="stars flex items-center">
          <FaStar className="text-red-500" />
          <FaStar className="text-red-500" />
          <FaStar className="text-red-500" />
          <FaStar className="text-red-500" />
        </div>
      </div>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam adipisci
        neque temporibus sed tempora sequi dolores! Repellendus ratione cum
        facere numquam! Saepe voluptas esse velit suscipit laboriosam. Eos, a
        iusto.
      </p>
    </div>
  );
};

export default Review;
