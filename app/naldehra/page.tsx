"use client";

import Overlay from "@/components/Projects/ProjectDetails/Overlay";
import Amenities from "@/components/Projects/ProjectDetails/Amenities";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Highlight from "@/components/Projects/ProjectDetails/Highlight";
import Collactions from "@/components/Collaction/collactions";
import "./page.css";


const Naldehra = ()=>{
    return(
        <>
        <Header />
      <Overlay />
      <Amenities />
      <Highlight /> 

      <Collactions />

      <Footer />
        </>

    )
}

export default Naldehra;