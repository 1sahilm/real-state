import React from "react";
import Image from "next/image";
import backgroundImg from "../../assets/AboutUs/real_estate_about_background.png";
import overlayImg from "../../assets/AboutUs/real_estate_overlay_image.png";

const Overlay: React.FC = () => {
  return (
    <div
      className="relative md:h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-transparent  to-white"></div>

      {/* Container for content */}
      <div className="relative z-10 flex flex-col md:justify-center md:items-center h-full p-8 space-y-8 md:flex-row md:space-x-24 md:space-y-0 md:p-20">
        {/* Overlay Image */}
        <div className="relative  md:mb-0 md:w-2/5 mt-24 md:mt-0 ">
          <Image
            src={overlayImg}
            alt="Scenic view"
            className="shadow-lg overlay-image"
            layout="responsive"
            width={400}
            height={300}
          />
        </div>

        {/* Text Section */}
        <div className=" text-black md:text-white md:w-2/5">
          <h2 className="text-xl font-bold md:text-4xl text-center md:text-left">
            Your peace of mind, our priority
          </h2>
          <p className="mt-6 md:mt-4 text-lg  md:text-base">
            urabitur efficitur ante vel mi bibendum, et maximus nisl ultricies.
            Morbi nec tempus dui, sit amet facilisis nisl.
          </p>
          <p className="mt-4 text-lg md:text-base">
            Curabitur efficitur luctus enim nec sollicitudin. Fusce venenatis
            venenatis lorem eu accumsan. Nunc sit amet mi vitae odio porttitor
            feugiat. Sed quis sem elementum, viverra ligula at, lobortis magna.
            Praesent congue nibh in dolor rutrum, et euismod quam elementum.
          </p>
          <p className="mt-4 text-lg md:text-base">
            Mauris justo felis, iaculis quis sagittis sit amet, feugiat vitae
            est. Aliquam porta ex elit, sit amet rutrum turpis egestas viverra.
            Quisque at libero purus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
