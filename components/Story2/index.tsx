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
    <div className="features-container">
      <div className="images">
        <div className="blurbackground"></div>
        <Image
          src={require("../../assets/Story22/pexels-pixabay-164558 (1).jpg")}
          alt="House 1"
          className="feature-image1"
          data-aos="fade-up"
        />
        <Image
          src={require("../../assets/Story22/pexels-pixabay-209315.jpg")}
          alt="House 2"
          className="feature-image2"
          data-aos="fade-down"
        />
        <Image
          src={require("../../assets/Story22/pexels-pixabay-221024.jpg")}
          alt="House 3"
          className="feature-image3"
          data-aos="fade-right"
        />
      </div>
      <div className="feature-text">
        <div className="feature-item" data-aos="zoom-in">
          <h3>Strategic Location</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. In eu volutpat sed elementum
            ut... Lorem ipsum dolor sit amet consectetur. In eu volutpat sed
            elementum ut Lorem ipsum dolor sit amet consectetur. In eu volutpat
            sed elementum ut Lorem ipsum dolor sit amet consectetur. In eu
            volutpat sed elementum ut
          </p>
        </div>
        <div className="feature-item" data-aos="zoom-out">
          <h3>Modern Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. In eu volutpat sed elementum
            ut... Lorem ipsum dolor sit amet consectetur. In eu volutpat sed
            elementum ut Lorem ipsum dolor sit amet consectetur. In eu volutpat
            sed elementum ut Lorem ipsum dolor sit amet consectetur. In eu
            volutpat sed elementum ut
          </p>
        </div>
        <div className="feature-item" data-aos="slide-up">
          <h3>Guaranteed Security</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. In eu volutpat sed elementum
            ut Lorem ipsum dolor sit amet consectetur. In eu volutpat sed
            elementum ut Lorem ipsum dolor sit amet consectetur. In eu volutpat
            sed elementum ut Lorem ipsum dolor sit amet consectetur. In eu
            volutpat sed elementum ut
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
