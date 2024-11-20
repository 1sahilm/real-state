import React, { useRef } from "react";
import "./SocialMediaUpdates.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { isMobile } from "react-device-detect";

const SocialMediaUpdates = () => {
  // const [_, setCurrentIndex] = useState(0);
  // const visibleItems = isMobile ? 1 : 3;
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    if (!sliderRef.current) return;
    sliderRef.current.slickNext();
  };
  const previous = () => {
    if (!sliderRef.current) return;
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <section className="max-w-[1366px] mr-auto ml-auto">
        <div className="social-media-updates-container">
          <div className="social-media-updates">
            <div className="blurbackground2"></div>
            <h2 className="social-media-updates-title">
              Our Social Media Updates
            </h2>
            <Slider
              ref={(slider) => {
                sliderRef.current = slider;
              }}
              {...settings}
            >
              {updates.map((update, index) => (
                <div className="update-card" key={index}>
                  <Image src={update.image} alt={update.title} />
                  <h3>{update.title}</h3>
                  <p>{update.description}</p>
                </div>
              ))}
            </Slider>
            <div className="flex gap-4 justify-center">
              <button className="button" onClick={previous}>
                <FaAngleLeft />
              </button>
              <button className="button" onClick={next}>
                <FaAngleRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaUpdates;

const updates = [
  {
    title: "Six ways to make your house a smart home",
    description:
      "Smart home tech can help you save time, money and energy – plus it can add value to your home. Here's how to turn your house into a smart home.",
    image: require("../../assets/Social/image (10).png"),
  },
  {
    title: "Eight ways to tell if your home is winning the value race",
    description:
      "We're not saying it's a competition. But you might be winning. Want to know if your home’s gaining value faster than a mate’s?",
    image: require("../../assets/Social/unsplash_C__Rq5aCoPg.png"),
  },
  {
    title: "Seven ways to improve your home's EPC rating",
    description:
      "Rising energy bills and a hunger for greener living mean a good EPC rating is now more important than ever. Here's how to get one for your home.",
    image: require("../../assets/Social/unsplash_mCxk_ba7CJ8.png"),
  },
  {
    title: "Seven ways to improve your home's EPC rating",
    description:
      "Rising energy bills and a hunger for greener living mean a good EPC rating is now more important than ever. Here's how to get one for your home.",
    image: require("../../assets/Social/unsplash_mCxk_ba7CJ8.png"),
  },
];

function SampleNextArrow(props: {
  className?: string;
  //   style?: any;
  onClick?: () => void;
}) {
  const { className, onClick } = props;
  return (
    <div className={className} style={{ display: "block" }} onClick={onClick} />
  );
}

function SamplePrevArrow(props: {
  className?: string;
  //   style?: any;
  onClick?: () => void;
}) {
  const { className, onClick } = props;
  return (
    <div className={className} style={{ display: "block" }} onClick={onClick} />
  );
}
