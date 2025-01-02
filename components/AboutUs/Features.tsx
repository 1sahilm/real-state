"use client";

import React, { useEffect, useState } from "react";

const Features: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const features = [
    {
      title: "Brahmaputra Riverfront, Guwahati, Assam",
      description:
        "Master planning for a transformative urban space along the river, enhancing both ecological and community value.",
    },
    {
      title: "Redevelopment of Assi Ghat, Varanasi, Uttar Pradesh",
      description:
        "Comprehensive master planning project aimed at revitalising a historic and culturally significant riverside location.",
    },
    {
      title: "Central University of Punjab, Bathinda, Punjab",
      description:
        "Architecture, interior design, and landscape design for a premier educational institution, blending functionality with aesthetic appeal.",
    },
    {
      title: "Garden of Five Senses, Said-ul-Azaib, Delhi",
      description:
        "Master planning, architecture, and landscape design for a sensory garden, creating a serene urban oasis for relaxation and cultural engagement.",
    },
    {
      title: "Community Focus",
      description:
        "We are more than just a real estate agency; we are proud contributors to the communities we serve. Our commitment extends to supporting the growth and well-being of these areas.",
    },
    {
      title: "Trusted Advisors",
      description:
        "Our team is composed of trusted advisors dedicated to your success. We go beyond being mere agents; we serve as your partners in making informed real estate decisions.",
    },
  ];

  return (
    <div className="md:py-16 px-8 md:px-20 max-w-[1366px] mr-auto ml-auto">
      <h2 className="text-4xl font-semibold text-center md:text-left mb-12">
      Our Key Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 mb-20 lg:grid-cols-3 md:mt-16 md:mb-16 relative">
        {!isMobile && (
          <>
            <div className="hidden absolute top-0 bottom-0 left-[373px] md:block">
              <div className="h-[100%] w-px bg-gray-300"></div>
            </div>
            <div className="hidden absolute top-0 bottom-0 left-[780px] md:block ">
              <div className="h-[100%] w-px bg-gray-300"></div>
            </div>
          </>
        )}
        {features.map((feature, index) => (
          <div key={index} className="space-y-2 text-left mr-0 md:mr-16">
            <h3 className="text-xl font-bold uppercase ">{feature.title}</h3>
            <p className="text-[#888888] text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
