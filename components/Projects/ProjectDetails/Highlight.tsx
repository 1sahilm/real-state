"use client";

import React from "react";

const Highlight: React.FC = () => {
  return (
    <>
      <div className="container mt-10  px-8 md:px-16 space-y-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 uppercase font-bold text-lg">
            Property highlight
          </div>
          <p className="md:w-1/2 text-[#888888] text-lg">
            This is your opportunity to experience luxury, comfort, and
            convenience like never before. Don't miss out on the chance to make
            residential fort’d your forever property. Contact us today for a
            private tour and to explore all that this exceptional property has
            to offer.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 uppercase font-bold text-lg">
            Residential Fort’D
          </div>
          <div className="md:w-1/2">
            <p className="text-[#888888] text-lg mb-6">
              This visualization project is about the building in the historical
              center of Omsk city, Russia. Initially, it was built as a hotel
              for the 2018 FIFA world Cup, but the project was not completed as
              supposed.
            </p>
            <div className="space-y-8">
              <div>
                <span className="font-medium uppercase mr-2">Location:</span>
                <span className="font-normal text-[#6B6B6B]">
                  Andreas Vesaliusstraat & Frederik 3000 Louvain Belgium
                </span>
              </div>
              <div>
                <span className="font-medium uppercase mr-2">
                  Project type:
                </span>
                <span className="font-normal text-[#6B6B6B]">Residential</span>
              </div>
              <div className="space-x-4">
                <div className="font-medium uppercase mr-2 mb-8">
                  Key Features:
                </div>
                <ul className="text-[#6B6B6B] space-y-4 list-disc">
                  <li>Prime Location</li>
                  <li>Spacious Interiors</li>
                  <li>Luxurious Master Suite</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
