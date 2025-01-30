import React from "react";
import styles from "../FourColumnSection/fourcolumnsection.module.scss";

const FourColumnSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inerbox}>
        <div className={styles.subheadig}>
          <h4>ABOUT VVIE</h4>
        </div>
        <div className={styles.fourbox}>
        <div className={styles.imageSection}>
          <img
            src="/about-us/new-v.jpg"
            alt="Architects working"
            className={styles.image}
          />
        </div>
          {OURETHOSarry?.map((items, index) => {
            return (
              <>
                <div className={styles.box} key={index}>
                  <h6>{items.id}</h6>
                  <h3>{items.name}</h3>
                  <p>{items.content}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FourColumnSection;

const OURETHOSarry = [
  {
    id: ".01",
    name: "Vvie: Where Elegance and Modernity Breathe Life",
    content:
      "Inspired by the French word for ‘life,’ Vvie is where elegance meets modernity in the heart of nature. Vvie signifies life in its most luxurious and harmonious form.",
  },
  {
    id: ".02",
    name: "A Legacy of Exclusivity and Scenic Splendor",
    content:
      "Evoking exclusivity and celebrating life, our vision is to create exclusive estates that can be cherished by generations to come, in handpicked locations that promise unfettered, stunning vistas even for times to come. ",
  },
  {
    id: ".03",
    name: "Bespoke Luxury Estates: Crafted by Masters, Inspired by Nature",
    content:
      "These managed estates and exclusive managed estates are thoughtfully crafted by world-renowned architects, offering bespoke luxury amidst nature, ensuring a unique living experience like no other. ",
  }, 
];
