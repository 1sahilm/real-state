"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Arizona from "../assets/slider/brian-babb-XbwHrt87mQ0-unsplash (1).jpg";
// import Arizona from '../assets/slider/image (4).png';
import Kenya from "../assets/slider/pexels-expect-best-79873-323780.jpg";
import Cambodia from "../assets/slider/pexels-pixabay-164558.jpg";
import slider from "../assets/slider/pexels-pixabay-208736.jpg";
import "./slider.css";

const slides = [
  {
    id: 1,
    image: slider,
    title: "California, USA",
    subtitle: "4 beds / 3 Bath",
    price: "Rp 2.500.000",
  },
  {
    id: 2,
    image: Arizona,
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    id: 3,
    image: Kenya,
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    id: 4,
    image: Cambodia,
    title: "Syltherine",
    subtitle: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionData, setTransitionData] = useState<
    (typeof slides)[0] | null
  >(null);
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (index: number) => {
    setTransitionData(slides[currentSlide]);
    setCurrentSlide(index);
    setProgress(((index + 1) / slides.length) * 30);
  };

  return (
    <div style={{}}>
      <div className="slider-container">
        <AnimatePresence>
          {transitionData && (
            <motion.div
              key={transitionData.image.src + "transition"}
              layoutId={transitionData.image.src}
              className="slider-transition"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { ease: "linear", duration: 0.5 }, // Reduced duration for smoother transition
                layout: { duration: 0.5 }, // Reduced duration for layout transition
              }}
            >
              <Image
                src={transitionData.image}
                alt={transitionData.title}
                layout="fill"
                objectFit="cover"
                quality={100}
                className="slider-image"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          key={slides[currentSlide].image.src}
          className="slider-current"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 100,
          }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="slider-image"
          />
        </motion.div>

        <div className="slider-content  max-w-[1366px] mr-auto ml-auto">
          <div className="slider-info">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5 }}
              >
                <motion.div layout className="slider-indicator"></motion.div>
                <motion.h2
                  layoutId={slides[currentSlide].title}
                  className="slider-title"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  layoutId={slides[currentSlide].subtitle}
                  className="slider-subtitle"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.p className="slider-price">
                  {slides[currentSlide].price}
                </motion.p>
                <button className="slider-button">Discover Location</button>
              </motion.div>
            </AnimatePresence>
            <div className="slider-thumbnails">
              {slides.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  className={`slider-thumbnail ${
                    index === currentSlide ? "active" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleSlideChange(index)}
                >
                  <img
                    src={slide.image.src}
                    alt={slide.title}
                    className="thumbnail-image"
                  />
                  <div className="thumbnail-info">
                    <h3 className="thumbnail-title">{slide.title}</h3>
                    <p className="thumbnail-subtitle">{slide.subtitle}</p>
                    <p className="thumbnail-price">{slide.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="button-container">
              <button
                className="slider-button-prev"
                onClick={() =>
                  handleSlideChange(
                    (currentSlide - 1 + slides.length) % slides.length
                  )
                }
              >
                &lt;
              </button>
              <button
                className="slider-button-next"
                onClick={() =>
                  handleSlideChange((currentSlide + 1) % slides.length)
                }
              >
                &gt;
              </button>
            </div>

            <div className="progress-line-wrapper">
              <div
                className="progress-line"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="slider-counter">0{currentSlide + 1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
