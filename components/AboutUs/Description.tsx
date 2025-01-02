"use client";

import React from "react";
import Image from "next/image";
import aboutSectionOverlayImage from "../../assets/AboutUs/first-image.jpg";
import aboutSectionBehindImage from "../../assets/AboutUs/second.jpg";

const Description: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row  max-w-[1366px] mr-auto ml-auto">
      <div className="relative z-10 md:mb-20 flex flex-col-reverse md:justify-center md:items-center h-full p-8 space-y-8 md:flex-row md:space-x-24 md:space-y-0 md:p-20">
        {/* Text Section */}
        <div className="md:w-2/5 mt-40 md:mt-14 mb-8 md:mb-0 md:font-medium">
          <h2 className="hidden md:block text-4xl text-center font-semibold mb-4 md:text-left md:text-3xl md:font-bold">
            About Us
          </h2>
          <p className="text-lg mb-4">
          

Although Vvie marks our first marquee project, our
team at Infranium brings extensive experience in crafting high-end developments across various prestigious
brands.
          </p>
          <p className="text-lg mb-4">
          Our dedication to architectural excellence and
meticulous attention to detail is evident in every project,
promising unparalleled spaces that stand as a testament
to refined living
          </p>
          {/* <p className="text-lg mb-4">
          Experience uninterrupted valley views from every corner at Vvie by Infranium, where each limited villa offers expansive lawns, two open sides, and valley-facing bedrooms, dining, 
          </p>
          <p className="text-lg mb-4">
            <strong>Infranium</strong> and living spaces. Enjoy the stunning landscape year-round, even in winter, from your private rooftop jacuzzi. 
          </p> */}
          <div className="bg-[#DFE3E7] p-4 mt-8 text-center md:text-left rounded-lg">
          These exclusive estates are thoughtfully crafted by world-renowned architects, offering bespoke luxury amidst nature, ensuring a unique living experience like no other. 
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
              className="shadow-lg about-section-2"
              priority={true}
            />
          </div>
          <div className="relative z-0 left-6 top-32 md:left-0 md:top-20">
            <Image
              src={aboutSectionBehindImage}
              alt="Interior view 1"
              className="rounded-lg shadow-lg about-section-3"
              priority={true}

            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
