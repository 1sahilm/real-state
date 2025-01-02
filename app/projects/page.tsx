"use client";

import React from "react";
import Overlay from "@/components/Projects/Overlay";
import ProjectList from "@/components/Projects/ProjectList";
import "./page.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const Projects: React.FC = () => {
  return (
    <>
      <Header />
      <Overlay />
      <ProjectList />
      <Footer />
    </>
  );
};

export default Projects;
