import React from "react";
import "./Dream.css";
import img1 from "../../assets/Dream/unsplash_5MG8cQbw-T8.png";
import img2 from "../../assets/Dream/unsplash_kyt0PkBSCNQ.png";
import img3 from "../../assets/Dream/unsplash_wDDfbanbhl8.png";
import Image from "next/image";
const DreamHome = () => {
  return (
    <div className="container  max-w-[1366px] mr-auto ml-auto">
      <div className="text-section">
        <h1 className="title">
          Find Your Dream <br /> Home Here
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. <br />
          Tincidunt lobortis viverra mi eget et purus convallis. Nec aliquam
          mauris aliquam vitae posuere amet.
        </p>

        <Image src={img2} alt="Bedroom" className="image2" />
      </div>
      <div className="imagesSection">
        <div className="blurbackground"></div>
        <Image src={img1} alt="Room view" className="image1" />

        <Image src={img3} alt="Living space" className="image3" />
      </div>
    </div>
  );
};

export default DreamHome;
