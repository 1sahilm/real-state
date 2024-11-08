import React from "react";
import backgroundImg from "../../../assets/Projects/ProjectDetails/project_details_overlay.png";

const Overlay: React.FC = () => {
  return (
    <div
      className="overlay-project-detail-image"
      style={{ backgroundImage: `url(${backgroundImg.src})` }}
    >
      <div className="relative z-10 flex items-end space-x-20 md:space-x-52 justify-end md:items-end h-full text-white">
        <div>
          <h2 className="text-3xl font-bold md:text-xl ml-2 md:ml-0">
            Projects
          </h2>
          <h2 className="text-medium md:text-[40px] leading-2 uppercase font-bold ml-2 md:ml-0">
            Residential fort’d
          </h2>
        </div>
        <div className="bg-black px-10 py-6 flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-24">
          <div>
            <div className="uppercase text-base font-bold mb-3">Location:</div>
            <div className="text-[#888888] text-base">
              Andreas Vesaliusstraat & Frederik 3000
              <br /> Louvain Belgium
            </div>
          </div>
          <div>
            <div className="uppercase text-base font-bold mb-3">Price:</div>
            <div className="text-[#888888] text-base">
              Starting <br />
              from $2.999.99
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
