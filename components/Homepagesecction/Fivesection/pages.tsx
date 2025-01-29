import React, { useState } from "react";
import style from "./fivesection.module.scss";
import Image from "next/image";

const Fivesection = () => {
  const [activeTab, setActiveTab] = useState("CEDAR VILLAS: FLOOR PLANS");

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
                        <a href={items.link}>Call To Action</a>
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
    title: "CEDAR VILLAS: FLOOR PLANS",
    image: "/h1-img-03z.jpg",
    content:
      "Embodying the essence of tranquillity, Cedar is crafted to provide a quiet refuge amidst beautiful landscapes. With its unique three-side openness, the villa ensures abundant natural light and ventilation, creating a seamless transition between indoor and outdoor spaces",
    link: "#",
  },
  {
    title: "ASPEN VILLAS: FLOOR PLANS",
    image: "/h1-img-05.jpg",
    content:
      "Aspen is named after the graceful Aspen tree, known for its vibrant beauty and connection to the outdoors, reflecting the villa’s panoramic views and modern design. Expansive glass windows and thoughtful layouts ensure every corner is bathed in sunlight.",
    link: "#",
  },
  {
    title: "MAPLE VILLAS: FLOOR PLANS",
    image: "/h1-img-06.jpg",
    content:
      "Named after the Maple tree, symbolizing elegance and warmth, this villa blends sophistication with a sense of intimacy. Its bright interiors and clean design lines create a welcoming space that feels both upscale and homey",
    link: "#",
  },
  {
    title: "OAK VILLAS: FLOOR PLANS",
    image: "/h1-img-07.jpg",
    content:
      "Oak, a symbol of strength and grandeur, reflects this villa’s modern design and expansive layouts. With floor-to-ceiling windows and a focus on space, it creates an environment of elegance and vitality. Ground Floor: Designed for social interaction, the ground floor features seamless transitions between the living, dining, and kitchen areas. ",
    link: "#",
  },
  {
    title: "PINE VILLAS: FLOOR PLANS",
    image: "/h1-img-05.jpg",
    content:
      "The name Pine reflects the villa’s connection to Shimla’s pristine natural surroundings. Combining elegance and functionality, it provides an inviting yet luxurious environment for refined living. Ground Floor: The ground floor is designed for both family and social gatherings, with interconnected living, dining, and kitchen spaces",
    link: "#",
  },
  {
    title: "FIR VILLAS: FLOOR PLANS",
    image: "/h1-img-03z.jpg",
    content:
      "Fir offers an exclusive retreat at the height of luxury. Its unique three-side openness enhances the flow of natural light and air, connecting the interiors seamlessly with the surrounding natural beauty. Crafted with high ceilings and an expansive layout, it’s a space where design meets nature, offering an unparalleled living experience.",
    link: "#",
  },
];
