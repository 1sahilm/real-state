"use client";

import React from "react";
import Image from "next/image";
import Cameron from "../../assets/TeamPictures/Cameron.png";
import Deven from "../../assets/TeamPictures/Deven.png";
import Esther from "../../assets/TeamPictures/Esther.png";
import Floyd from "../../assets/TeamPictures/Floyd.png";
import Henry from "../../assets/TeamPictures/Henry.png";
import Murphy from "../../assets/TeamPictures/Murphy.png";
import Robert from "../../assets/TeamPictures/Robert.png";
import Savannath from "../../assets/TeamPictures/Savannah.png";

const Team: React.FC = () => {
  const realStateTeam = [
    {
      profileImage: Cameron,
      name: "Rohit Puri",
      designation: "CEO",
    },
    {
      profileImage: Floyd,
      name: "Anil Dahiya",
      designation: "Director, Sales & Leasing",
    },
    {
      profileImage: Esther,
      name: "Vijay Vaidya",
      designation: "Director, Strategies & Planning",
    },
    {
      profileImage: Savannath,
      name: "Tithi Puri",
      designation: "Director, Administration",
    },
    {
      profileImage: Henry,
      name: "Kushaan Puri",
      designation: "Director, Marketing",
    },
    {
      profileImage: Henry,
      name: "Rajender Singh Chauhan",
      designation: "Director, Planning & Architecture",
    },
  ];

  return (
    <div className="md:py-16 px-8 md:px-20 max-w-[1366px] mr-auto ml-auto">
      <h2 className="text-4xl font-semibold uppercase text-center md:text-left mb-6 md:mb-8">
        About Team Infranium
      </h2>
      <p className="text-[#888888] text-lg md:text-xl mb-10 md:mb-0">
      Led by a team of visionary leaders, Infranium draws upon decades of experience in real estate, architecture, marketing, and administration. Each director brings a wealth of expertise, ensuring that every project reflects the highest standards of luxury and innovation. From our Director of Marketing’s keen sense for branding to our Director of Architecture’s meticulous eye for design, Infranium is built on the strongest foundational pillars of collaboration and excellence. 
      </p>

      <div className="grid gap-8 md:grid-cols-2 mb-20 lg:grid-cols-4 md:mt-16 md:mb-16">
        {realStateTeam.map((team, index) => (
          <div key={index} className="text-left mr-0 md:mr-3">
            <Image
              src={team.profileImage}
              alt="Team Image"
              className="shadow-lg team-profile-image mb-5"
              layout="responsive"
              width={400}
              height={300}
            />
            <div className="text-xl font-bold">{team.name}</div>
            <div className="text-[#888888] text-base">{team.designation}</div>
            <hr className="border-[#484848] border-[1.49px] mt-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
