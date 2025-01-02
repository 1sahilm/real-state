import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PropertyFeatures.css";
import Image from "next/image";

const PropertyFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="features-container relative max-w-[1366px] mr-auto ml-auto">
      <div className="images">
        <div className="blurbackground"></div>
        <Image
          src={require("../../assets/infranium-images/7.jpeg")}
          alt="House 1"
          className="feature-image1"
          // data-aos="fade-up"
        />
        <Image
          src={require("../../assets/infranium-images/12.jpeg")}
          alt="House 2"
          className="feature-image2"
          // data-aos="fade-down"
        />
        <Image
          src={require("../../assets/infranium-images/2.jpeg")}
          alt="House 3"
          className="feature-image3"
          // data-aos="fade-right"
        />
      </div>
      <div className="feature-text">
        <div className="feature-item" data-aos="zoom-in">
          <h3>Spa & Wellness Retreat</h3>
          <p>
          Our spa offers a rejuvenating escape, tailored to indulge your senses. Separate male and female sections feature luxurious sauna and jacuzzi facilities, providing private spaces for relaxation. Inspired by the latest in wellness design, the jacuzzi incorporates hydrotherapy.
          </p>
        </div>
        <div className="feature-item" data-aos="zoom-out">
          <h3>Heated Indoor Pool</h3>
          <p>
          Enjoy a year-round oasis with our heated indoor pool, designed for both relaxation and leisure. The pool area, spanning approximately 15x40 feet, includes a separate children’s section and plush poolside beds, perfect for lounging with a refreshing cocktail. With safety as a top priority.
          </p>
        </div>
        <div className="feature-item" data-aos="slide-up">
          <h3>Party Hall</h3>
          <p>
          Host memorable gatherings in our expansive party hall, which seamlessly blends indoor elegance with outdoor charm. With a spacious layout, premium sound systems, and ambient lighting, this area is ideal for celebrations, events, and social gatherings, embodying the essence of luxury entertainment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
