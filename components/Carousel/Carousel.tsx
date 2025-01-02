import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./carousel.css";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    arrows: true,
    centerMode: true,
    centerPadding: "260px",
    slidesToShow: 1,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10px",
        },
      },
    ],
  };

  const slides = [
    {
      id: 0,
      image: "pexels-alex-staudinger-829197-1732414.jpg",
      title: "Estaing",
      country: "FRANCE",
    },
    {
      id: 1,
      image: "pexels-pixabay-262048.jpg",
      title: "Montego Bay",
      country: "JAMAICA",
    },
    {
      id: 2,
      image: "pexels-alex-staudinger-829197-1732414.jpg",
      title: "Kyoto",
      country: "JAPAN",
    },
  ];

  // Custom arrow functions
  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  return (
    <div className="slider-container mx-auto w-full md:w-2/3 lg:w-3/4">
      <h2 className="text-center font-bold text-3xl mb-1">
        We are available in many <br /> well-known countries
      </h2>
      <div className="relative hidden md:block">
        <div
          className="absolute top-16 left-20 h-[410px] flex justify-center items-center z-10 p-2 arrow-div"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div
          className="absolute top-16 right-20 h-[410px] flex justify-center items-center z-10 p-2 arrow-div"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => {
          return (
            <div
              key={slide.id}
              className={`mt-6 transition-all duration-300 ${
                activeSlide === index ? "scale-105 shadow-wrapper" : "scale-90"
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-lg shadow-lg ${
                  activeSlide === index && "activeSliderImage"
                }`}
              >
                {activeSlide === index && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                )}

                <Image
                  src={require(`../../assets/Banner/${slide.image}`)}
                  alt="Location 2"
                  className={`object-cover mx-auto ${
                    activeSlide === index
                      ? `w-full h-[400px] md:h-[500px] lg:h-[500px]`
                      : "w-full h-[250px] md:h-[300px] lg:h-[450px] mt-8"
                  }`}
                />
                <div className="caption">
                  <h3>{slide.title}</h3>
                  <p>{slide.country}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
