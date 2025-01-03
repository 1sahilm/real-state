"use client";

import React from "react";
import Team from "@/components/AboutUs/Team";
import Features from "@/components/AboutUs/Features";
import Description from "@/components/AboutUs/Description";
import Overlay from "@/components/AboutUs/Overlay";
import "./page.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import FaqBanner from "@/components/FAQ/Banner";

const Faq: React.FC = () => {
  return (
    <>
      <Header />
      <FaqBanner />
    <FAQ />
      {/* <Overlay />

      <Description />

      <Features />

      <Team /> */}

      <Footer />
    </>
  );
};

export default Faq;
