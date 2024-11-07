import React from "react";
import backgroundImg from "../../assets/Projects/project_overlay_background.png";

const Overlay: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="relative z-10 flex items-end md:items-center h-full p-8 space-y-8 md:space-x-24 md:space-y-0 md:p-20">
        <div className=" text-white">
          <h2 className="text-4xl font-bold md:text-7xl">Our Projects</h2>
          <p className="mt-6 md:mt-4 text-lg  md:text-3xl">
            These project details can be customized and expanded upon for each
            property listing on
          </p>
          <p className="mt-4 text-lg md:text-3xl">
            your real estate website. Providing comprehensive and accurate
            information helps
          </p>
          <p className="mt-4 text-lg md:text-3xl mb-16 md:mb-0">
            potential buyers make informed decisions about the properties you
            have available
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
