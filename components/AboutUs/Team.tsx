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
      name: "Cameron Williamson",
      designation: "Marketing Coordinator",
    },
    {
      profileImage: Floyd,
      name: "Floyd Miles",
      designation: "Leading design Engineer",
    },
    {
      profileImage: Esther,
      name: "Esther Howard",
      designation: "Assistant Manager",
    },
    {
      profileImage: Savannath,
      name: "Savannah Nguyen",
      designation: "Head of the Group",
    },
    {
      profileImage: Henry,
      name: "Courtney Henry",
      designation: "Assistant Manager",
    },
    {
      profileImage: Robert,
      name: "Robert Fox",
      designation: "Chief Engineer",
    },
    {
      profileImage: Murphy,
      name: "Kathryn Murphy",
      designation: "Assistant Manager",
    },
    {
      profileImage: Deven,
      name: "Devon Lane",
      designation: "Project Coordinator",
    },
  ];

  return (
    <div className="md:py-16 px-8 md:px-20 max-w-[1366px] mr-auto ml-auto">
      <h2 className="text-4xl font-semibold uppercase text-center md:text-left mb-6 md:mb-8">
        Meet our team
      </h2>
      <p className="text-[#888888] text-lg md:text-xl mb-10 md:mb-0">
        Our team is made up of dedicated real estate professionals who share a
        passion for what they do. We are not just agents; we are your trusted
        advisors. Our agents are experienced, knowledgeable, and ready to assist
        you in achieving your real estate goals.
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
