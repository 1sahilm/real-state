"use client";
import React, { useEffect } from "react";
import style from "./aboutnewscr.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos"; // Ensure you have AOS installed
import { useRouter } from "next/navigation";
import ReadMore from "../read-more";

const AboutnewSection: React.FC = () => {
  // Initialize AOS
  // useEffect(() => {
  //   AOS.init({ duration: 1200 });
  // }, []);
  const router = useRouter();
 

  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          <div className={style.aboutinnersection}>
            {/* <div className={style.imagebg}></div> */}
            <div className={style.aboutcontactblock}>
              {" "}
              <div className={style.rightcontentblock}>
                <h2>Naldehra: A tapestry of nature and tranquility</h2>
                <p>
                  Shimla The Summer Capital officers purchased houses in Shimla
                  to stay in for the summer. The norm, however, was to rent out
                  houses for theseason. This concentration of British society
                  attracted many members of Indian royal families to Shimla.
                  While some Indian kings and princesvisited Shimla on the
                  occasion of Imperial durbars, the others visited Little
                  England to mingle in English circles
                </p>
                <ReadMore 
                maxLength={100}
                text="Nestled at 6,706 feet in altitude, Naldehra offers an
                  unparalleled mountain experience that draws in nature lovers,
                  adventurers, and those seeking an elevated way of life. Known
                  for its lush landscapes, the iconic Naldehra Golf Course, and
                  breathtaking sunsets, Naldehra is more than a destination—it s
                  a sanctuary where nature s beauty flourishes in every
                  direction. 
                  In order to reside in Simla during the summer, an Indian
                  prince would have to seek permission from the Viceroy’s office
                  despite owning a housewithin the city. His application also
                  had to be ratified by the Agent to the Governor General in
                  charge of his state. In 1914, The Maharana of Dholpur,
                  Rajasthan states that he is “physically unable to stand hot
                  weather” and must, thus reside in Shimla for the summer.
                  Finding a resemblance with the sloping glades of Scotland’s
                  highlands, it was Lord Curzon, Viceroy of British India from
                  1899 to 1905 AD, who laid the foundation of this sprawling
                  golf course—thus, adding to the old world charm of Naldehra.
                  "
                />
                 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutnewSection;
