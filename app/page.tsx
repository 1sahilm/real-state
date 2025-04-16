"use client";

import HomeMenu from "@/components/Banner/homemenu/pages";
import Banner from "../components/Banner/Banner";
import Ourstory from "@/components/Homepagesecction/Ourstory/pages";
import ThreeColumnSection from "@/components/Homepagesecction/ThreeColumnSection/pages";
import FourColumnSection from "@/components/Homepagesecction/FourColumnSection/pages";
import Fivesection from "@/components/Homepagesecction/Fivesection/pages";
import Latestproject from "@/components/Latestproject/pages";
import Testimonials from "@/components/Testimonials/pages";
import Blogssection from "@/components/Blogssection/pages";
import Footer from "@/components/Footer/pages";
import Ourstory2 from "@/components/Homepagesecction/Ourstory2/pages";
import Ourstory3 from "@/components/Homepagesecction/Ourstory3/pages";
import Footer2 from "@/components/NewFooter/page";
import Header from "@/components/Header";
import ModelBox from "@/components/ModelBox/page";
import React, { useState } from "react";
export default function Home() {
    const [wasClosed, setWasClosed] = React.useState(false); 
  
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

   const [isOpen, setIsOpen] = useState(false);
  
      const togglePopup = () => {
        setIsOpen(!isOpen);
        setWasClosed(true);  
      };
 
      // React.useEffect(() => {
      //   const timer = setTimeout(() => {
      //     setIsOpen(true);
      //   }, 5000);
      //   return () => clearTimeout(timer);
      // },[isOpen]);
     
 React.useEffect(() => {
        if (!wasClosed) {
          const timer = setTimeout(() => {
            setIsOpen(true);
          }, 5000);
    
          return () => clearTimeout(timer);
        }
      }, [wasClosed]);
  return (
    <div>
      <div>
        <Header isTrue={true} headertheme={false} />
        {/* <HomeMenu /> */}
      </div>
      <Banner bannerData={bannerData} commingSoon={true} />
      <Ourstory />
      <Ourstory2 />
      {/* <FourColumnSection /> */}


      <Ourstory3 />
      <ThreeColumnSection />
      {/* <Fivesection /> */}
      {/* <Latestproject /> */}
      {/* <Testimonials /> */}
      <Blogssection />
      {/* <Footer /> */}
      <Footer2 />
      <ModelBox
      togglePopup={togglePopup}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      setWasClosed={setWasClosed}
      />
    </div>
  );
}
