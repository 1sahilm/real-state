"use client";

import Slider from "react-slick";
import Image from "next/image";
import styles from "./BaseballSlider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BaseballSlider = () => {
  const slides = [
    { id: 1, src: "/slider/first-slider.jpeg", alt: "Baseball 1" },
    { id: 2, src: "/slider/second-slider.jpeg", alt: "Baseball 2" },
    { id: 3, src: "/slider/third-slider.jpeg", alt: "Baseball 3" },
    { id: 4, src: "/slider/four-slider.jpeg", alt: "Baseball 1" },
    { id: 5, src: "/slider/five-slider.jpeg", alt: "Baseball 2" },
    { id: 6, src: "/slider/six-slider.jpeg", alt: "Baseball 3" },
    { id: 7, src: "/slider/seven-slider.jpeg", alt: "Baseball 1" },
    { id: 8, src: "/slider/eight-slider.jpeg", alt: "Baseball 2" }, 
  ];

 const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
     <div className={styles.carouselWrapper}>
        <div className={styles.textblock}>
                <h2>Construction Update</h2> 
            </div>
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div className={`${styles.slide} blogsliderblur`} key={index}>
  <div className={`${styles.imageWrapper} imageWrapper`}>
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className={styles.image}
    />
  </div>
</div>
        ))}
      </Slider>
    </div>
  );
};

export default BaseballSlider;
