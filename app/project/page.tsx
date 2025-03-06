"use client";
import Footer from "@/components/Footer/pages";
import Header from "@/components/Header";
import React, { useState } from "react";
import style from "./project.module.scss";
import Image from "next/image";
import { link } from "fs";
import { useRouter } from "next/navigation";
import ThreeColumnSection from "@/components/Homepagesecction/ThreeColumnSection/pages";
import ProjectPageSection from "@/components/Homepagesecction/projectPageSection/pages";
import ModelBox from "@/components/ModelBox/page";

const ProjectPage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage , setCurrentImage] = useState('')
  
      const togglePopup = () => {
        setIsOpen(!isOpen);
      };

      const handleOpenPop = (itemImage:any) => {
        setCurrentImage(itemImage)
        setIsOpen(true);
      }
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
              {/* <p>
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
              </p> */}

<ul className={style.listing}>
            <li>THE LOCATION: Perched 24 kilometres from Shimla, Naldehra feels like a world apart, yet
            remains connected to modern conveniences</li>
            <li>HEIGHT: At an altitude of 6,706 feet, Naldehra shares the skies with some of the world’s most renowned luxury destinations. 
</li>
<li>SUN DIRECTIONS: With its eastward-facing slopes, Naldehra enjoys the first kiss of the
morning sun, painting the landscape in hues of gold</li>
<li>FLORA & FAUNA: Naldehra is a living canvas of biodiversity. Towering pines and ancient deodars stretch across
the horizon, while vibrant rhododendrons and Himalayan oak create a tapestry of colours.</li>
          </ul>

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
      
      <div className={style.mapSection}>
      <section className={style.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.742037470674!2d77.20927719112142!3d28.543596327672116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2177772b113%3A0xe0b92f108d24abf1!2sPanchsheel%20Park%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1740646953037!5m2!1sen!2sin" width="600" height="450"   loading="lazy" ></iframe>
      </section>
      <section className={style.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.742037470674!2d77.20927719112142!3d28.543596327672116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2177772b113%3A0xe0b92f108d24abf1!2sPanchsheel%20Park%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1740646953037!5m2!1sen!2sin" width="600" height="450"   loading="lazy" ></iframe>
      </section>
      </div>

      <section className={style.projectpage}>
        <div className={style.container}>
        <h1>Villas in Naldehra Golf Hills</h1>

          <div className={style.row}>
            {villaArray?.map((item, index) => {
              return (
                <>

<div className={style.card} key={index}> 
      <div className={style.imageContainer}>
        <Image
          src={item.image}  
          alt="Property Image"
          layout="fill"
          objectFit="cover"
          className={style.cardImage}
        /> 
      </div>
 
      <div className={style.cardContent}>
        <h2 className={style.title}>{item.title}</h2>
        <p className={style.location}>Woodvilla, Kasauli</p>

        <div className={style.details}>
          <span>Plot Size: ~494 sq. m.</span>
          <span>|</span>
          <span>Built Area: ~319 sq. m.</span>
          <span>|</span>
          <span>Bedrooms: 4.5</span>
        </div>

        <p className={style.description}>
          Alder Manor features a living and dining area with panoramic valley
          views and a conservatory. The master bedroom connects to a living
          deck.
        </p>
 

        <div className={style.linkContainer}>
          <span  className={style.link} onClick={()=>handleOpenPop(item.image)}>
            Read More
          </span>
        </div>
      </div>
    </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

     
      <ModelBox 
      togglePopup={togglePopup}
      isOpen={isOpen} 
      setIsOpen={setIsOpen}
      currentImage={currentImage}

      />
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
    image: "/units/site-plan-min.jpg",
    title: "Site Plan",
  },
  {
    image: "/units/fir-min.jpg",
    title: "The Fairway Club and Spa",
  },
  {
    image: "/units/cedar-min.jpg",
    title: "Cedar", 
  },
  {
    image: "/units/aspen-min.jpg",
    title: "Aspen", 
  },
  {
    image: "/units/maple-min.jpg",
    title: "Maple",  
  },
  {
    image: "/units/oak-min.jpg",
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