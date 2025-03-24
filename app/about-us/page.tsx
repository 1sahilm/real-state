import Image from "next/image";
import React from "react";
import styles from "../../styles/AboutSection.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer/pages";

const About = () => {
  return (
    <>
      <Header headertheme={true} />
      <section className={styles.aboutSection}>
        <div className={styles.imageWrapper}>
          <img
            src="/about-us/baneer-about.jpg"
            alt="Architectural design"
            className={styles.backgroundImage}
          />
        </div>
        <div className={styles.textOverlay}>
          <h1>About INFRANIUM</h1>
        </div>
      </section>
      <div className={styles.container}>
        <h1 className={styles.heading}>
        ABOUT INFRANIUM
        </h1>
        <p className={styles.paragraph}>
        Infranium leads the way in luxury real estate by blending
innovation with timeless elegance. Our commitment is to
create residences that integrate seamlessly with nature,
inspiring a lifestyle of distinction and tranquillity.
Although Vvie marks our first marquee project, our
team at Infranium brings extensive experience in crafting high-end developments across various prestigious
brands. Our dedication to architectural excellence and
meticulous attention to detail is evident in every project,
promising unparalleled spaces that stand as a testament
to refined living.
        </p> 

        {/* <div className={styles.section}>
          <div className={styles.textBlock}>
            <h2>Urban Exteriors</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className={`${styles.imageBlock} ${styles.imageBlockRight}`}>
            <img src="/about-us/second-image.jpg" alt="Urban Exterior" />
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.imageBlock}>
            <img src="/about-us/second-image.jpg" alt="Urban Exterior" />
          </div>
          <div className={styles.textBlock}>
            <h2>Vision</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div> */}

        {/* third secton  */}
      </div>

      <div className={styles.thirdsection}>
        <div className={styles.container}>
          <h1>ABOUT THE TEAM</h1>
          <p>
          Led by a team of visionary leaders, Infranium
draws upon decades of experience in
real estate, architecture, marketing, and
administration. Each director brings a wealth
of expertise, ensuring that every project
reflects the highest standards of luxury and
innovation.
          </p>
          <p>
          From our Director of Marketing’s
keen sense for branding to our Director of
Architecture’s meticulous eye for design,
Infranium is built on the strongest foundational
pillars of collaboration and excellence. 
          </p>
        </div>
      </div>


      <div className={styles.infranimTeams}>
            {userData?.map((item:any , index:any)=>{
              return (
                <>
          <div className={styles.infranimContainer}> 

                <img src={item?.image} alt="Member 1" className={styles.userAvatar} />
                 <div className={styles.info} key={index}>
              <h3>{item?.name}</h3>
              <h6>{item?.role}</h6>
              <p>{item?.description}</p>
            </div>
          </div> 
                </>
              )
            })}
            
      </div>

      {/* <div className={styles.teamsection}>
        <div className={styles.teamsinner}>
          <div className={styles.teammember}>
            <img src="/teams/rohit-puri.jpeg" alt="Member 1" />
            <div className={styles.info}>
              <h3>Rohit Puri</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className={styles.teammember}>
            <img src="/teams/anil.jpeg" alt="Member 2" />
            <div className={styles.info}>
              <h3>Anil Dahiya</h3>
              <p>Director, Sales</p>
            </div>
          </div>
 
        </div>
        <div className={`${styles.teamsinner} ${styles.teamsinner2}`}>
          <div className={styles.teammember}>
            <img src="h1-team-img-01.jpg" alt="Member 4" />
            <div className={styles.info}>
              <h3>Tithi</h3>
              <p>Director, People & Culture</p>
            </div>
          </div>
          <div className={styles.teammember}>
            <img src="h1-team-img-01.jpg" alt="Member 5" />
            <div className={styles.info}>
              <h3>Kushaan Puri</h3>
              <p>Director, Marketing</p>
            </div>
          </div>
        </div>
        <div className={styles.teamsinner}>
          <div className={styles.teammember}>
            <img src="/teams/director.jpeg" alt="Member 1" />
            <div className={styles.info}>
              <h3>Rajendra Singh Chauhan</h3>
              <p>Director, Planning & Architecture</p>
            </div>
          </div> 
 
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default About;


const userData = [
  {
    name: "Rohit Puri",
    role: "CEO",
    image: "/teams/rohit-puri.jpeg",
    description: "With over 25 years of expertise in the real estate sector, Rohit has been instrumental in delivering 33 landmark projects with reputed builders across residential, commercial, and IT spaces in NCR, spanning over 17 million sq. ft. His visionary leadership has built four prominent real estate brands, blending creative foresight with operational excellence. Renowned for identifying market opportunities, Rohit excels in conceptualizing innovative projects and driving their lifecycle from inception to revenue generation, cementing his status as an industry pioneer."

  },
  {
    name: "Anil Dahiya",
    role: "Director, Sales",
    image: "/teams/anil.jpeg",
    description: "Anil brings over 18 years of experience in real estate sales, leasing, and brand management, having collaborated with top industry players. He has successfully managed the leasing of over 1.4 million sq. ft. of IT/ITES spaces and sold thousands of residential plots. With proven expertise in launching national projects and crafting branding strategies, Anil plays a key role in positioning Infranium as a market leader in corporate real estate and residential ventures"
  },
  {
    name: "Tithi",
    role: "Director, People & Culture",
    image: "/tithi.jpeg",
    description:"As a Director, People and Culture at Infranium, Tithi brings her MBA expertise from Symbiosis and over 10 years of leadership experience to ensure smooth administrative operations. Her focus on real estate management and marketing has been vital in building the brand’s reputation. Tithi’s commitment to operational efficiency and her proactive approach to client relations solidify her role as a cornerstone of the Infranium ecosystem."
  },
  {
    name: "Kushaan Puri",
    role: "Director, Marketing",
    image: "/kushan-puri.jpeg",
    description: "A dynamic marketing professional with over 12 years of experience, Kushaan is a driving force behind Infranium’s strategic campaigns. His innovative marketing techniques and collaborative approach have set new benchmarks in Delhi NCR’s competitive real estate market. Passionate about staying ahead of trends, Kushaan ensures Infranium’s projects resonate with modern buyers, delivering impactful results through cutting-edge strategies."
  },
  {
    name: "Rajendra Singh Chauhan",
    role: "Director, Planning & Architecture",
    image: "/teams/director.jpeg",
    description: "Mr. Rajendra Singh Chauhan brings 33 years of unparalleled expertise from his tenure with the Town and Country Planning Department, Shimla, where he retired as Town and Country Planner. His extensive experience in urban development policies, smart city initiatives, and special area development planning ensures Infranium’s projects align with sustainable and efficient urban frameworks. Rajendra’s unmatched experience of working in tricky hillside and mountainous terrains, along with his deep understanding of architectural planning, elevates the company’s vision of building landmark developments."
  }
]
