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
      desctiption:"With over 25 years of expertise in the real estate sector, Rohit has been instrumental in delivering 33 landmark projects across residential, commercial, and IT spaces in NCR, spanning over 17 million sq. ft. His visionary leadership has built four prominent real estate brands, blending creative foresight with operational excellence. Renowned for identifying market opportunities, Rohit excels at conceptualizing innovative projects and driving their lifecycle from inception to revenue generation, cementing his status as an industry pioneer."
    },
    {
      profileImage: Floyd,
      name: "Anil Dahiya",
      designation: "Director, Sales & Leasing",
      desctiption:"Anil brings over a decade of experience in real estate sales, leasing, and brand management, having collaborated with top industry players like BPTP and India Bulls. He has successfully managed leasing of over 1.4 million sq. ft. of IT/ITES spaces and sold thousands of residential plots. With proven expertise in launching national projects and crafting branding strategies, Anil plays a key role in positioning Infranium as a market leader in corporate real estate and residential ventures."
    },
    {
      profileImage: Esther,
      name: "Vijay Vaidya",
      designation: "Director, Strategies & Planning",
      desctiption:"With a stellar career spanning global organizations like AstraZeneca and Novartis, Vijay is a seasoned strategist specializing in statistical programming and data-driven decision-making. His leadership in hybrid trials and digital health has contributed to critical drug approvals worldwide. At Infranium, Vijay leverages his analytical acumen and organizational expertise to streamline planning and innovation, fostering a culture of excellence across teams and projects."
    },
    {
      profileImage: Savannath,
      name: "Tithi Puri",
      designation: "Director, Administration",
      desctiption:"As a co-founder and Director, Administration of Infranium Properties, Tithi brings her MBA expertise from Symbiosis and over five years of leadership experience to ensure smooth administrative operations. Her focus on real estate management and marketing has been vital in building the brand’s reputation. Tithi’s commitment to operational efficiency and her proactive approach to client relations solidify her role as a cornerstone of the Infranium ecosystem"
    },
    {
      profileImage: Henry,
      name: "Kushaan Puri",
      designation: "Director, Marketing",
      desctiption:"A dynamic marketing professional with over 12 years of experience, Kushaan is a driving force behind Infranium’s strategic campaigns. His innovative marketing techniques and collaborative approach have set new benchmarks in Delhi NCR’s competitive real estate market. Passionate about staying ahead of trends, Kushaan ensures Infranium’s projects resonate with modern buyers, delivering impactful results through cutting-edge strategies"
    },
    {
      profileImage: Henry,
      name: "Rajender Singh Chauhan",
      designation: "Director, Planning & Architecture",
      desctiption:"Mr. Rajender Singh Chauhan brings 33 years of unparalleled expertise from his tenure with the Town and Country Planning Department, Shimla, where he retired as Town and Country Planner. His extensive experience in urban development policies, smart city initiatives, and special area development planning ensures Infranium’s projects align with sustainable and efficient urban frameworks. Rajender’s deep understanding of architectural planning elevates the company’s vision of building landmark developments."
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

      <div className="realStateTeam">
        {realStateTeam.map((team, index) => (
          <div key={index} className="text-left mr-0 md:mr-3 realStateTeambox">
            <div className="realStateTeamboximage">
            <Image
              src={team.profileImage}
              alt="Team Image"
              className="shadow-lg team-profile-image"
              layout="responsive"
              width={400}
              height={300}
            />
            </div>
            <div className="realStateTeamboxcontentbox">
            <div className="text-xl font-bold">{team.name}</div>
            <div className="text-[#888888] text-base">{team.designation}</div>
            <div className="text-[#888888] text-base">{team.desctiption}</div>
            <hr className="border-[#484848] border-[1.49px] mt-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
