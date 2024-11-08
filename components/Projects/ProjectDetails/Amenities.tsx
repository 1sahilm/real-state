"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import overlayImg from "../../../assets/Projects/ProjectDetails/Aminity.png";
import dynamic from "next/dynamic";

// Lazy-load icons
const GymIcon = dynamic(
  () => import("../../Icons/Icon").then((mod) => mod.GymIcon),
  { ssr: false, loading: () => <span>Loading...</span> }
);
const LivingRoomIcon = dynamic(
  () => import("../../Icons/Icon").then((mod) => mod.LivingRoomIcon),
  { ssr: false, loading: () => <span>Loading...</span> }
);
const DiningAreaIcon = dynamic(
  () => import("../../Icons/Icon").then((mod) => mod.DinigAreaIcon),
  { ssr: false, loading: () => <span>Loading...</span> }
);
const SwimmingIcon = dynamic(
  () => import("../../Icons/Icon").then((mod) => mod.SwimmingIcon),
  { ssr: false, loading: () => <span>Loading...</span> }
);
const PowerBackupIcon = dynamic(
  () => import("../../Icons/Icon").then((mod) => mod.PowerBackupIcon),
  { ssr: false, loading: () => <span>Loading...</span> }
);
const IdealLocationIcon = dynamic(
  () => import("../../Icons/Icon").then((mod) => mod.IdealLocationIocn),
  { ssr: false, loading: () => <span>Loading...</span> }
);

const amenities = [
  { text: "hey", label: "Gymnasium", icon: GymIcon },
  { text: "hey", label: "Living Room", icon: LivingRoomIcon },
  { text: "hey", label: "Dining Area", icon: DiningAreaIcon },
  { text: "hey", label: "Swimming Pool", icon: SwimmingIcon },
  { text: "hey", label: "Power Backup", icon: PowerBackupIcon },
  { text: "hey", label: "Ideal Location", icon: IdealLocationIcon },
];

const Amenities: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth <= 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <div className="container mx-auto px-8 mt-10 md:mt-20">
      <div className="px-0 md:px-10 grid grid-cols-1 md:grid-cols-2 md:space-x-40">
        <div>
          <p className="text-[#888888] text-lg mb-10 md:mb-8">
            This Visualization Project Is About The Building In The Historical
            Center Of Omsk City, Russia. Initially, It Was Built As A Hotel For
            The 2018 FIFA World Cup, But The Project Was Not Completed As
            Supposed.
          </p>
          <div className="uppercase mb-10 md:-mb-6 font-bold">
            Project Amenities
          </div>

          {/* Grid container */}
          <div className="grid gap-8 grid-cols-2 mb-20 md:grid-cols-3 md:mt-16 md:mb-16 place-items-center md:place-items-start relative">
            {/* Lines for mobile and desktop */}
            {isMobile ? (
              <>
                <div className="absolute top-0 bottom-0 left-[50%] border-[1.54px] border-[#484848] h-full"></div>
                <div className="absolute top-[32%] w-[90%] border-[1.54px] border-[#484848]"></div>
                <div className="absolute top-[67%] w-[90%] border-[1.54px] border-[#484848]"></div>
              </>
            ) : (
              <>
                <div className="absolute top-0 bottom-0 left-[25%] border-[1.54px] border-[#484848] h-full"></div>
                <div className="absolute top-0 bottom-0 left-[60%] border-[1.54px] border-[#484848] h-full"></div>
                <div className="absolute top-[50%] w-[90%] border-[1.54px] border-[#484848]"></div>
              </>
            )}

            {/* Amenity items */}
            {amenities.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="space-y-4 mr-0 md:mr-16 md:mb-10">
                  <div className="rounded-[50%] border-black border-[1.54px] w-24 h-24 p-10 flex items-center justify-center">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <IconComponent />
                    </div>
                  </div>
                  <div>{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side image */}
        <div>
          <Image
            src={overlayImg}
            alt="Scenic view"
            className="shadow-lg aminity-image"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
