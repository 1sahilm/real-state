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
      <div className="max-w-[1366px] mr-auto ml-auto relative z-10 flex flex-col md:justify-center md:items-center h-full p-8 space-y-8 md:flex-row md:space-x-24 md:space-y-0 md:p-20">
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
          About Infranium
          </h2>
          <p className="mt-6 md:mt-4 text-lg  md:text-base">
          Infranium leads the way in luxury real estate by blending
          innovation with timeless elegance
          </p>
          <p className="mt-4 text-lg md:text-base">
          Our commitment is to
create residences that integrate seamlessly with nature,
inspiring a lifestyle of distinction and tranquillity.  
          </p>
          {/* <p className="mt-4 text-lg md:text-base">
          Each element within Vvie resonates with an ethos of refined living, offering serenity and elevated experiences for the discerning individual.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
