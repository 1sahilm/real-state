import React from "react";
import Image from "next/image";
import Trangled from "../../assets/Projects/Tangled.png";
import Pursuit from "../../assets/Projects/Persuit.png";
import Quiet from "../../assets/Projects/Quiet.png";
import Magic from "../../assets/Projects/Magic.png";
import AfterRain from "../../assets/Projects/after_rain.png";
import Wood from "../../assets/Projects/wood.png";
import WindMills from "../../assets/Projects/wind_mills.png";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import icons to reduce initial bundle size
const DevelopmentIcon = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.DevelopmentIcon)
);
const MapIcon = dynamic(() =>
  import("../Icons/Icon").then((mod) => mod.MapIcon)
);

type ProjectListProps = {
  isRenderingFromProjectDetails?: boolean;
};

const ProjectList: React.FC<ProjectListProps> = ({
  isRenderingFromProjectDetails,
}) => {
  const projectListing = [
    {
      profileImage: Trangled,
      name: "Tangled up in Green",
      description: `Tangled up in Green is a uniquely designed sustainable community by Total
Environment, located on Doddaballapur Main Road, next to the Bangalore Satellite
Town Ring Road [STRR].`,
      developmentType: "Plotted Development",
      location: "Doddaballapur Road, Bangalore",
      price: "INR 15.28 Cr.* onwards",
    },
    {
      profileImage: Pursuit,
      name: "Pursuit of a Radical Rhapsody",
      description: `Located in Whitefield, the heart of India’s Silicon Valley, Pursuit of a Radical Rhapsody
is an exclusive community of apartments, beautiful homes with green roofs, and a
central community park.`,
      developmentType: "3 & 4 bedroom apartments & villas",
      location: "Whitefield, Bangalore.",
      price: "INR 5.96 Cr.* onwards",
    },
    {
      profileImage: Quiet,
      name: "In That Quiet Earth",
      description: `In That Quiet Earth, an exclusive community of sensitively-designed homes sits off
Hennur Main Road, in North Bangalore.`,
      developmentType: "2,3,4 bedroom apartments",
      location: "Off Hennur Road, Bangalore.",
      price: "INR 3.81 Cr.* + GST onwards",
    },
    {
      profileImage: Magic,
      name: "The Magic Faraway Tree",
      description: `Located on Kanakapura Road, this thoughtfully crafted community combines the
benefits of independent homes with the convenience of community living.`,
      developmentType: "4 bedroom duplex homes",
      location: "Kanakapura Rd, Bangalore.",
      price: "INR 5.52 Cr.* onwards",
    },
    {
      profileImage: AfterRain,
      name: "After the Rain",
      description: `After the Rain is our sensitively-designed community of earth-sheltered homes with
green roofs that celebrate nature at its finest.`,
      developmentType: "4 bedroom villas",
      location: "Yelahanka, Bangalore.",
      price: "INR 10.50 Cr.* onwards",
    },
    {
      profileImage: Wood,
      name: "Songs from the Wood",
      description: `In an increasingly stressful world, homes are your refuge, and welcome you to an
environment that is hospitable, warm, soothing, and peaceful.`,
      developmentType: "2,3,4 bedroom apartments",
      location: "Uday Baug, Pune.",
      price: "INR 4.11 Cr.* onwards",
    },
    {
      profileImage: WindMills,
      name: "Windmills of Your Mind",
      description: `Located in Whitefield, the heart of India’s Silicon Valley, Windmills of Your Mind is an
exclusive community of apartments and earth-sheltered homes with green roofs.`,
      developmentType: "3 & 4 bedroom, simplex and duplex apartments",
      location: "Whitefield, Bangalore.",
      price: "INR 15.28 Cr.* onwards",
    },
  ];

  return (
    <div className="md:py-8 px-8 md:px-20">
      {isRenderingFromProjectDetails && (
        <h2 className="font-bold text-4xl">More</h2>
      )}
      <div
        className={`grid gap-8 md:grid-cols-2 mb-20 lg:grid-cols-3 ${
          isRenderingFromProjectDetails ? "mt-6" : "mt-8 md:mt-16"
        } md:mb-16`}
      >
        {projectListing.map((project, index) => (
          <>
            <Link href={`/project/${index + 1}`} key={index} passHref>
              <div className="bg-white rounded-lg overflow-hidden project-card-wrapper p-3">
                <div className="projects-image">
                  <Image
                    src={project.profileImage}
                    alt="Team Image"
                    className="shadow-lg projects-image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <div>
                  <div className="text-[18.73px] font-semibold mb-2 mt-2">
                    {project?.name}
                  </div>
                  <p className="text-[#7C7885] mb-4 text-[13px] leading-[21.33px] font-normal project-description">
                    {project?.description}
                  </p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <span className="mr-2 ">
                      <DevelopmentIcon />
                    </span>
                    <span className="text-[#7C7885] leading-[21.33px] text-[12.89px]">
                      {project.developmentType}
                    </span>
                  </div>
                  <div className="mb-4 text-[#7C7885] leading-[21.33px] text-[12.89px] ml-[25px]">
                    {project?.price ? project.price : ""}
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <span className="mr-2">
                      <MapIcon />
                    </span>
                    <span className="text-[#7C7885] leading-[21.33px] text-[12.89px]">
                      {project?.location}
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 bg-black text-white rounded-md learn-more-button">
                      Learn More
                    </button>
                    <button className="px-4 py-2 contact-us-button ">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
