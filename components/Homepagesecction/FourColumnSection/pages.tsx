import React from "react";
import styles from "../FourColumnSection/fourcolumnsection.module.scss";

const FourColumnSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inerbox}>
        <div className={styles.subheadig}>
          <h4>OUR ETHOS</h4>
        </div>
        <div className={styles.fourbox}>
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
    name: "Ethos",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: ".02",
    name: "Ethos",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: ".03",
    name: "Ethos",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: ".04",
    name: "Ethos",
    content:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
