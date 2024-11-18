import Propertiescard from "./Propertiescard";
import Image1 from "@/assets/Properties/1.png";
import Image2 from "@/assets/Properties/2.png";
import Image3 from "@/assets/Properties/3.png";
import Image4 from "@/assets/Properties/4.png";
import Image5 from "@/assets/Properties/5.png";
import React from "react";
import Slider from "react-slick";
// import righticon from "@/assets/arrow-right-line.svg";
// import lefticon from "@/assets/arrow-left-line.svg";

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

const Propertiesslider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
  return (
    <>
      <section>
        <div className="max-w-[1366px] mr-auto ml-auto px-[50px] max-[500px]:px-[30px]">
          <div className="Propertiescardslider">
            <Slider {...settings}>
              {propertiesarry?.map((item, index) => {
                return (
                  <>
                    <Propertiescard
                      key={index}
                      title={item.title}
                      imageurl={item.image}
                      content={item.content}
                      pagelink={item.pagelink}
                    />
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default Propertiesslider;

const propertiesarry = [
  {
    id: 0,
    image: Image1,
    title: "Alpina house",
    content: "2464 Royal, New Jersey",
    pagelink: "#",
  },
  {
    id: 1,
    image: Image2,
    title: "Villa Archetype",
    content: "Dubai, New Jersey",
    pagelink: "#",
  },
  {
    id: 2,
    image: Image3,
    title: "Virgin Vineyard House",
    content: "Dubai, New Jersey",
    pagelink: "#",
  },
  {
    id: 3,
    image: Image4,
    title: "Apartments Auckland",
    content: "Melbourne",
    pagelink: "#",
  },
  {
    id: 4,
    image: Image5,
    title: "Holiday Luxury House",
    content: "Melbourne",
    pagelink: "#",
  },
];
