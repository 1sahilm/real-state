"use client";

import React, { useEffect, useState } from "react";

const Features: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const features = [
    {
      title: "Expertise",
      description:
        "Our team comprises industry experts with in-depth knowledge of local markets. We leverage this expertise to provide you with an advantage in your real estate endeavors.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Your needs are our top priority. We listen, understand, and tailor our services to align with your unique goals, whether you're buying, selling, or investing.",
    },
    {
      title: "Transparency",
      description:
        "We believe that transparency is key to building trust. We provide honest, straightforward advice and keep you informed throughout your real estate journey.",
    },
    {
      title: "Innovation",
      description:
        "We embrace technology and modern tools to enhance your experience. Our online platform offers seamless access to property listings, market insights, and resources.",
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
    <div className="md:py-16 px-8 md:px-20 ">
      <h2 className="text-4xl font-semibold text-center md:text-left mb-12">
        WHY CHOOSE INFRANIUM
      </h2>

      <div className="grid gap-8 md:grid-cols-2 mb-20 lg:grid-cols-3 md:mt-16 md:mb-16 relative">
        {!isMobile && (
          <>
            <div className="hidden absolute top-0 bottom-0 left-[395px] md:block">
              <div className="h-96 w-px bg-gray-300"></div>
            </div>
            <div className="hidden absolute top-0 bottom-0 left-[860px] md:block ">
              <div className="h-96 w-px bg-gray-300"></div>
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
