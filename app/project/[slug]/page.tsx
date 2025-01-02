"use client";

import Overlay from "@/components/Projects/ProjectDetails/Overlay";
import Amenities from "@/components/Projects/ProjectDetails/Amenities";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Highlight from "@/components/Projects/ProjectDetails/Highlight";
import ProjectList from "@/components/Projects/ProjectList";
import "../../projects/page.css";
import "./page.css";
import Collactions from "@/components/Collaction/collactions";

const ProjectDetails: React.FC = () => {
  return (
    <>
      <Header />
      <Overlay />
      <Amenities />
      <Highlight />
      {/* <ProjectList isRenderingFromProjectDetails /> */}

      <Collactions />

      <Footer />
    </>
  );
};

export default ProjectDetails;
