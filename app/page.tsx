"use client";

import Banner from "../components/Banner/Banner"; 
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
      <Banner bannerData={bannerData} commingSoon={true} />
     
    </div>
  );
}
