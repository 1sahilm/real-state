"use client";
import Footer from "@/components/Footer/pages";
import Header from "@/components/Header";
import React from "react";
import style from "./project.module.scss";
import Image from "next/image";
import { link } from "fs";
import { useRouter } from "next/navigation";
import ThreeColumnSection from "@/components/Homepagesecction/ThreeColumnSection/pages";
import ProjectPageSection from "@/components/Homepagesecction/projectPageSection/pages";

const ProjectPage = () => {
  const router = useRouter();
  return (
    <>
            <Header headertheme={true} />

      <section className={style.aboutSection}>
        <div className={style.imageWrapper}>
          <img
            src="/project-render-min.png"
            alt="Architectural design"
            className={style.backgroundImage}
          />
        </div>
        <div className={style.textOverlay}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          paddingRight: "5%",
          alignItems: "center",
        }}
        >
          <h1>Vvie Villas, Naldehra Golf Hills</h1>
{/* <p className={style.project_para} >HPRERASHI2025125/P</p> */}
        </div>

      </section>
      {/* <section className={style.projectpage}>
        <div className={style.container}>
          <div className={style.row}>
            {projectarray?.map((item, index) => {
              return (
                <>
                  <div className={style.box} key={index} onClick={() => router.push(item.link)}>
                    <div className={style.image}>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className={style.blockcontent}>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section> */}



<section className={style.projectdatils}>
        <div className={style.content}>
          <div className={style.row}>
            <div className={style.image}>
              <div className={style.iner}>
                {" "}
                {projectarray?.map((item, index) => {
                  return (
                    <>
                      <div className={style.box} key={index}>
                        <img src={item.image} alt={item.title} className={style.featureImg} />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className={style.contentblock}> 
              <h1>Vvie Villas</h1>
              <p>
              Inspired by the French word for ‘life,’ Vvie is where elegance meets modernity in the heart of nature.
Vvie signifies life in its most luxurious and harmonious form. Each element within Vvie resonates with
an ethos of refined living, offering serenity and elevated experiences for the discerning individual.

              </p>

              <p>
              These managed estates are thoughtfully crafted by
world-renowned architects, offering bespoke luxury
amidst nature, ensuring a unique living experience like
no other. 
              </p>
              <p>
              Nestled within the scenic Naldehra Golf Hills, Vvie by
Infranium offers six limited-edition luxury villas, thoughtfully
designed as expansive 4.5 and 5.5 BHK residences.
Each villa boasts sweeping valley views, spacious lawns,
two open sides, and meticulously crafted interiors that
blend seamlessly with nature. The estate also features a
private clubhouse, elevating the experience with curated
amenities for leisure and recreation. Enjoy the changing
seasons from your rooftop jacuzzi or unwind in beautifully
designed living and dining spaces that open up to
breathtaking landscapes—Vvie is where bespoke luxury
meets the tranquility of the mountains
              </p>

              {/* <div className={style.qodefportfolioinfo}>
                <div className={style.info}>
                  <h5>DATE :</h5>
                  <p>2024</p>
                </div>

                <div className={style.info}>
                  <h5>CATEGORY :</h5>
                  <p>FACADES, LANDSCAPING</p>
                </div>

                <div className={style.info}>
                  <h5>LOCATION :</h5>
                  <p>NEW DELHI, INDIA</p>
                </div>

                <div className={style.info}>
                  <h5>TAGS :</h5>
                  <p>
                    <span>Conceptual</span> <span>Exhibition</span>
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <ProjectPageSection />


      <section className={style.projectpage}>
        <div className={style.container}>
          <div className={style.row}>
            {villaArray?.map((item, index) => {
              return (
                <>
                  <div className={style.box} key={index}>
                    <div className={style.image}>
                      <img src={item.image} alt={item.title} className={style.unitImage} />
                    </div>
                    <div className={style.blockcontent}>
                      <h3>{item.title}</h3> 
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectPage;

// const projectarray = [
//   {
//     image: "/h5-port-img-02-650x728.jpg",
//     title: "Project Name",
//     subtitle: "FACADES, LANDSCAPING",
//     link: "/singleproject",
//   },
//   {
//     image: "/h5-port-img-03-650x728.jpg",
//     title: "Project Name",
//     subtitle: "FACADES, LANDSCAPING",
//     link: "/singleproject",

//   },
//   {
//     image: "/h5-port-img-06-650x728.jpg",
//     title: "Project Name",
//     subtitle: "FACADES, LANDSCAPING",
//     link: "/singleproject",

//   },
//   {
//     image: "/h5-port-img-08-650x728.jpg",
//     title: "Project Name",
//     subtitle: "FACADES, LANDSCAPING",
//     link: "/singleproject",

//   },
//   {
//     image: "/h5-port-img-09-650x728.jpg",
//     title: "Project Name",
//     subtitle: "FACADES, LANDSCAPING",
//     link: "/singleproject",

//   },
//   {
//     image: "/h5-port-img-10-650x728.jpg",
//     title: "Project Name",
//     subtitle: "FACADES, LANDSCAPING",
//     link: "/singleproject",

//   },
//   {
//     image: "/h5-port-img-16-650x728.jpg",
//     title: "Project Name",
//     subtitle: "FACADES, LANDSCAPING",
//     link: "/singleproject",

//   },
//   {
//     image: "/h5-port-img-17-650x728.jpg",
//     title: "Project Name",
//     subtitle: "FACADES, LANDSCAPING",
//     link: "/singleproject",

//   },
//   {
//     image: "/h5-port-img-19-650x728.jpg",
//     title: "Project Name",
//     subtitle: "FACADES, LANDSCAPING",
//     link: "/singleproject",

//   },
// ];

const villaArray = [
  {
    image: "/units/site-plan.jpg",
    title: "Site Plan",
  },
  {
    image: "/units/fir.jpg",
    title: "The Fairway Club and Spa",
  },
  {
    image: "/units/cedar.jpg",
    title: "Cedar", 
  },
  {
    image: "/units/aspen.jpg",
    title: "Aspen", 
  },
  {
    image: "/units/maple.jpg",
    title: "Maple",  
  },
  {
    image: "/units/oak.jpg",
    title: "Oak", 
  },
];
const projectarray = [
  {
    image: "/project-render/project-first-min.png",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/project-render/project-second-min.png",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/project-render/project-third-min.png",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/project-render/project-fourth-min.png",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
];