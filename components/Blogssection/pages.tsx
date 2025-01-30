import Image from "next/image";
import React from "react";
import styles from "./blogssection.module.scss";
import BlogssectionCard from "./Blogcardbox/pages";

const Blogssection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
      <div className={styles.textSection}> 
          <h1 className={styles.heading}>
          PSDA - PRADEEP SACHDEVA DESIGN ASSOCIATES
<br />
THE VISIONARIES BEHIND VVIE
           <br /> 
 
          </h1>
          <p className={styles.text}>
          Our commitment is to
create residences that integrate seamlessly with nature,
inspiring a lifestyle of distinction and tranquillity.  Although Vvie marks our first marquee project, our
team at Infranium brings extensive experience in craft -
ing high-end developments across various prestigious
brands. Our dedication to architectural excellence and
meticulous attention to detail is evident in every project,
promising unparalleled spaces that stand as a testament
to refined living
          </p> 
          
        </div>
        <div className={styles.innerbox}>
       
          {blogsarry?.map((item, index) => {
            return (
              <>
                <BlogssectionCard
                  key={index}
                  image={item.image}
                  title={item.title}
                  // cat={item.cat}
                  date={item.date}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogssection;

const blogsarry = [
  {
    id: 1,
    title: "CHANDNI CHOWK REDEVELOPMENT",
    image: "/arcture-image/1.jpeg",
    cat: "CATEGORY",
    date: "Revitalizing one of Delhi’s oldest marketplaces, this project transforms Chandni Chowk into a pedestrian-friendly heritage trail inspired by Amritsar’s Heritage Street. The redevelopment includes spacious footpaths and a no-vehicle policy during the day to enhance the visitor experience and promote tourism.",
  },
  {
    id: 2,
    title: "DILLI HAAT",
    image: "/arcture-image/2.jpeg",
    cat: "CATEGORY",
    date: "A modern reinterpretation of traditional marketplaces, Dilli Haat at INA and Pitampura integrates open-air crafts and cultural hubs with urban design. These vibrant spaces were envisioned by Pradeep Sachdeva to celebrate India’s heritage through curated stalls, performance areas, and local cuisines, creating a unique blend of tradition and community engagement. Sachdeva’s design for Dilli Haat was integrated with the urban environment and created a people-centric experience. He also used local materials and construction techniques.",
  },
  {
    id: 3,
    title: "TAJ THEOG",
    image: "/arcture-image/3.jpeg",
    cat: "CATEGORY",
    date: "Set amidst the serene Himalayan landscape, Taj Theog is a 90-key luxury resort blending regional heritage with modern hospitality. Designed to evoke the warmth of a mountain home, the resort offers an intimate, culturally immersive experience while setting a benchmark for luxury in Himachal Pradesh",
  },
  {
    id: 4,
    title: "GARDEN OF FIVE SENSES, SAID-UL-AZAIB, DELHI",
    image: "/arcture-image/4.jpeg",
    cat: "CATEGORY",
    date: "Master planning, architecture, and landscape design for a sensory garden, creating a serene urban oasis for relaxation and cultural engagement.",
  },
];
