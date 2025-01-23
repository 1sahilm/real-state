"use client";

import HomeMenu from "@/components/Banner/homemenu/pages";
import Banner from "../components/Banner/Banner";
import Ourstory from "@/components/Homepagesecction/Ourstory/pages";
import ThreeColumnSection from "@/components/Homepagesecction/ThreeColumnSection/pages";
import FourColumnSection from "@/components/Homepagesecction/FourColumnSection/pages";
import Fivesection from "@/components/Homepagesecction/Fivesection/pages";
import Latestproject from "@/components/Latestproject/pages";
export default function Home() {
  const bannerData = [
    {
      id: 1,
      image: "3.jpeg",
      heading: "FIND YOUR DREAM HOME WITH INFRANIUM",
      description:
        "Discover a wide range of properties tailored to your needs.",
    },
    {
      id: 2,
      image: "2.jpeg",
      heading: "You can find your dream home.",
      description:
        "Discover a wide range of properties tailored to your needs.",
    },
    {
      id: 3,
      image: "4.jpeg",
      heading: "Home is where the heart is",
      description:
        "Discover a wide range of properties tailored to your needs.",
    },
  ];

  return (
    <div>
      <div>
        <HomeMenu />
      </div>
      <Banner bannerData={bannerData} commingSoon={true} />
      <Ourstory />
      <ThreeColumnSection />
      <FourColumnSection />
      <Fivesection />
      <Latestproject />
    </div>
  );
}
