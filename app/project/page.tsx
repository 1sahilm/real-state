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
  const [isOpen2, setIsOpen2] = useState(false);
  const [currentImage , setCurrentImage] = useState('')
  const [wasClosed, setWasClosed] = React.useState(false); 
  
      const togglePopup = () => {
        setIsOpen(!isOpen);
      };

      const handleOpenPop = (itemImage:any) => {
        setCurrentImage(itemImage)
        setIsOpen(true);
      }

      React.useEffect(() => {
        if (!wasClosed) {
          const timer = setTimeout(() => {
            setIsOpen2(true);
          }, 5000);
    
          return () => clearTimeout(timer);
        }
      }, [wasClosed]);
  return (
    <>
             <div className={style.desktopHeader}>
      <Header headertheme={true} />
    </div>
    <div className={style.mobileHeader}>
    <Header isTrue={true} headertheme={false}  />
    </div>

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
            <li>Nestled in the picturesque Naldehra Golf Hills</li>
            <li>Fully furnished, expansive, and professionally managed 4.5 and 5.5 BHK villas 
</li>
<li> Plot sizes ranging from 418 sq. yds. to 576 sq. yds., offering ample space and privacy</li>
<li>Valley-facing bedrooms for breathtaking views</li>
<li>Indoor and outdoor dining areas</li>
<li>Spacious, landscaped lawns with fire pits</li>
<li>Two-side open villas for ample natural light and ventilation</li>
<li>Rooftop jacuzzi with a spa-like ambiance and an indulgent sauna experience</li>
<li>Exclusive private clubhouse featuring an indoor heated swimming pool, a state-of-the-art gym, a luxurious spa, and a multi-cuisine restaurant</li>
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
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.742037470674!2d77.20927719112142!3d28.543596327672116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2177772b113%3A0xe0b92f108d24abf1!2sPanchsheel%20Park%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1740646953037!5m2!1sen!2sin" width="600" height="450"   loading="lazy" ></iframe> */}
      <Image
          src={"/new-map-image.jpeg"}  
          alt="Property Image"
          layout="fill"
          objectFit="cover"
          className={style.cardImage}
        /> 
      </section>
      <section className={style.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.3955571879715!2d77.15644397505557!3d31.182043963780387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905770043b8beab%3A0xf5858b1a26d236b3!2sVvie%20Villas%20Naldehra%20Golf%20Hills!5e0!3m2!1sen!2sin!4v1743158109435!5m2!1sen!2sin" width="600" height="450"  loading="lazy"></iframe>
      </section>
      </div>

      <section className={style.projectpage}>
        <div className={style.container}>
        <h1>Villas in Naldehra Golf Hills</h1>

          <div className={style.row}>
            {villaArray?.map((item, index) => {
              return (
                <>

<div className={style.card} key={index} onClick={()=>handleOpenPop(item.image)} style={{
  cursor:"pointer"
}}> 
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
        <h2 className={style.title}>{item.title} <span className={style.location}>{item?.bhk}</span> </h2>
        <p className={style.location}>FLOOR PLANS</p>

        <div className={style.details}>
          <span>{item?.groundFloor}</span>
          <span>|</span>
          <span>{item?.firstFloor}</span>
          <span>|</span>
          <span>{item?.secondFloor}</span>
        </div>

        <p className={style.description}>
          {item?.desc}
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

<ModelBox
      togglePopup={togglePopup}
      isOpen={isOpen2}
      setIsOpen={setIsOpen2}
      setWasClosed={setWasClosed}
      wasClosed={wasClosed}
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
    image: "/units/new-cedar.jpeg",
    bhk:"4.5 BHK",
    title: "Unit 1 - Cedar", 
    desc:"Embodying the essence of tranquillity, Cedar is crafted to provide a quiet refuge amidst beautiful landscapes. With its unique three-side openness, the villa ensures abundant natural light and ventilation, creating a seamless transition between indoor and outdoor spaces. Every corner is designed to evoke a sense of calm, where refined interiors meet expansive views, offering a sanctuary for both solitude and gatherings.",
    groundFloor: "Ground Floor: 132 sqm 1420 sqft",
    firstFloor: "First Floor: 152 sqm 1635 sqft",
    secondFloor: "Second Floor: 104 sqm 1120 sqft",
  },
  {
    image: "/units/new-aspen.jpeg",
    bhk:"4.5 BHK",
    title: "Unit 2 - Aspen", 
    desc:"Aspen is named after the graceful Aspen tree, known for its vibrant beauty and connection to the outdoors, reflecting the villa’s panoramic views and modern design. Expansive glass windows and thoughtful layouts ensure every corner is bathed in sunlight, seamlessly blending indoor luxury with Shimla’s natural grandeur.",
    groundFloor: "Ground Floor: 150 sqm 1614 sqft",
    firstFloor: "First Floor: 142 sqm 1528 sqft",
    secondFloor: "Second Floor: 98 sqm 1055 sqft",
  },
  {
    image: "/units/new-mappel.jpeg",
    bhk:"4.5 BHK",
    title: "Unit 3 - Maple",
    desc:"Named after the Maple tree, symbolising elegance and warmth, this villa blends sophistication with a sense of intimacy. Its bright interiors and clean design lines create a welcoming space that feels both upscale and homey.",
    groundFloor: "Ground Floor: 155 sqm 1668 sqft",
    firstFloor: "First Floor: 147 sqm 1582 sqft",
    secondFloor: "Second Floor: 98 sqm 1054 sqft",

  },
  {
    image: "/units/new-oak.jpeg",
    bhk:"5.5 BHK",
    title: "Unit 4 - Oak",
    desc:"Oak, a symbol of strength and grandeur, reflects this villa’s modern design and expansive layouts. With floor-to-ceiling windows and a focus on space, it creates an environment of elegance and vitality",
    groundFloor: "Ground Floor: 170 sqm 1830 sqft",
    firstFloor: "First Floor: 150 sqm 1615 sqft",
    secondFloor: "Second Floor: 98 sqm 1055 sqft",
  },
  {
    image: "/units/new-pine.jpeg",
    bhk:"5.5 BHK",
    title: "Unit 5 - Pine",
    desc:"The name Pine reflects the villa’s connection to Shimla’s pristine natural surroundings. Combining elegance and functionality, it provides an inviting yet luxurious environment for refined living.",
    groundFloor: "Ground Floor: 170 sqm 1830 sqft",
    firstFloor: "First Floor: 150 sqm 1614 sqft",
    secondFloor: "Second Floor: 98 sqm 1054 sqft",

  },
  {
    image: "/units/new-fir.jpeg",
    bhk:"4 BHK",
    title: "Unit 6 - Fir",
    desc:"Fir offers an exclusive retreat at the height of luxury. Its unique three-side openness enhances the flow of natural light and air, connecting the interiors seamlessly with the surrounding natural beauty. Crafted with high ceilings and an expansive layout, it’s a space where design meets nature, offering an unparalleled living experience.",
    groundFloor: "Ground Floor: 173 sqm 1862 sqft",
    firstFloor: "First Floor: 140 sqm 1506 sqft",
    secondFloor: "Second Floor: 92 sqm 990 sqft",

  },
];
const projectarray = [
  {
    image: "/project-render/1.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/project-render/2.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/project-render/3.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
  {
    image: "/project-render/5.jpg",
    title: "Project Name",
    subtitle: "FACADES, LANDSCAPING",
  },
];