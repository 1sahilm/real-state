import React, { useState } from "react";
import style from "./fivesection.module.scss";
import Image from "next/image";

const Fivesection = () => {
  const [activeTab, setActiveTab] = useState("Urban Planning");

  return (
    <div className={style.box}>
      <div className={style.boxiner}>
        {fivesectionarry?.map((items, index) => {
          return (
            <>
              <div
                className={`${style.boxstyle} ${
                  activeTab === items.title ? "active" : "inactive"
                } `}
                key={index}
                style={{
                  width: activeTab === items.title ? "calc(1039px)" : "100px",
                }}
              >
                <div
                  className={style.wrapper}
                  style={{
                    width: activeTab === items.title ? "calc(939px)" : " ",
                  }}
                >
                  <div
                    className={`${style.headingbox}   ${
                      activeTab === items.title
                        ? style.tabactive
                        : style.tabinactive
                    }           `}
                  >
                    <h3 onClick={() => setActiveTab(items.title)}>
                      {items.title}
                    </h3>
                  </div>

                  <div
                    className={`${style.blockbox} 
                     `}
                    style={{
                      display: activeTab === items.title ? "flex" : "none",
                    }}
                  >
                    <div className={style.imagebox}>
                      <Image
                        src={items.image}
                        width={218}
                        height={423}
                        alt={items.image}
                      />
                    </div>
                    <div className={style.outercontent}>
                      <p> {items.content}</p>

                      <div className={style.link}>
                        <a href={items.link}>Readmore</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Fivesection;

const fivesectionarry = [
  {
    title: "Urban Planning",
    image: "/h1-img-03z.jpg",
    content:
      "Lorem ipsum dolor sit amet, cons ectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    link: "#",
  },
  {
    title: "Exterior",
    image: "/h1-img-05.jpg",
    content:
      "Lorem ipsum dolor sit amet, cons ectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    link: "#",
  },
  {
    title: "Residential",
    image: "/h1-img-06.jpg",
    content:
      "Lorem ipsum dolor sit amet, cons ectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    link: "#",
  },
  {
    title: "Interior",
    image: "/h1-img-07.jpg",
    content:
      "Lorem ipsum dolor sit amet, cons ectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
    link: "#",
  },
];
