"use client";

import React from "react";
import Image from "next/image";
import aboutSectionOverlayImage from "../../assets/AboutUs/overlay_image-2.png";
import aboutSectionBehindImage from "../../assets/AboutUs/overlay_image-3.png";

const Description: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="relative z-10 md:mb-20 flex flex-col-reverse md:justify-center md:items-center h-full p-8 space-y-8 md:flex-row md:space-x-24 md:space-y-0 md:p-20">
        {/* Text Section */}
        <div className="md:w-2/5 mt-40 md:mt-14 mb-8 md:mb-0 md:font-medium">
          <h2 className="hidden md:block text-4xl text-center font-semibold mb-4 md:text-left md:text-3xl md:font-bold">
            About Us
          </h2>
          <p className="text-lg mb-4">
            Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies.
            Morbi nec tempus dui, sit amet facilisis nisl.
          </p>
          <p className="text-lg mb-4">
            Ut vel urna quis urna tristique tempus. Etiam lobortis est at mauris
            eleifend, id tempor purus ultricies.
          </p>
          <p className="text-lg mb-4">
            Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis
            venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor
            feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna.
            Praesent congue nibh in dolor rutrum, et euismod quam elementum.
          </p>
          <p className="text-lg mb-4">
            <strong>Mauris justo felis, iaculis quis sagittis</strong> sit amet,
            feugiat vitae est. Aliquam porta ex elit, sit amet rutrum turpis
            egestas viverra. Quisque at libero purus.
          </p>
          <div className="bg-[#DFE3E7] p-4 mt-8 text-center md:text-left rounded-lg">
            We strive to offer you the best possible homes to stay.
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-[101px] md:w-2/5 relative flex flex-col justify-center items-center md:mt-0 ">
          <h2 className=" md:hidden text-4xl text-center font-semibold ">
            About Us
          </h2>
          <div className="absolute top-10 -left-8 md:-top-20 md:-left-24 transform translate-y-6 translate-x-6 z-10">
            <Image
              src={aboutSectionOverlayImage}
              alt="Interior view 2"
              className="rounded-lg shadow-lg about-section-2"
            />
          </div>
          <div className="relative z-0 left-6 top-32 md:left-0 md:top-20">
            <Image
              src={aboutSectionBehindImage}
              alt="Interior view 1"
              className="rounded-lg shadow-lg about-section-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
