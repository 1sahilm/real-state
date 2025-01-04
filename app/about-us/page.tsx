"use client";

import React from "react";
import Team from "@/components/AboutUs/Team";
import Features from "@/components/AboutUs/Features";
import Description from "@/components/AboutUs/Description";
import Overlay from "@/components/AboutUs/Overlay";
import "./page.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />

      <Overlay />

      <Description />

      {/* <Features /> */}

      <Team />

      <Footer />
    </>
  );
};

export default AboutUs;
