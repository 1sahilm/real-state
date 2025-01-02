import Propertiescard from "./Propertiescard";
import Image1 from "@/assets/nalendra-pic/naldehra-golf-course.jpg";
import Image2 from "@/assets/nalendra-pic/reserve-forest-sanctuary.jpg";
import Image3 from "@/assets/nalendra-pic/woodstock-resort.jpg";
// import Image2 from "@/assets/infranium-images/10.jpeg";
// import Image3 from "@/assets/infranium-images/11.jpeg";
import Image4 from "@/assets/infranium-images/12.jpeg";
import Image5 from "@/assets/infranium-images/13.jpeg";
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
    initialSlide: 0,
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
      <section className="mt-[2rem] md:mt-[2rem]">
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
    title: "Naldehra Golf Course",
    content: "Golf Courses",
    pagelink: "#",
  },
  {
    id: 1,
    image: Image2,
    title: "Reserve Forest Sanctuary",
    content: "Forests",
    pagelink: "#",
  },
  {
    id: 2,
    image: Image3,
    title: "Woodstock Cafe & Restaurant",
    content: "Restaurant",
    pagelink: "#",
  },
  {
    id: 3,
    image: Image4,
    title: "Woodstock Resort",
    content: "Resort",
    pagelink: "#",
  },
  {
    id: 4,
    image: Image5,
    title: "Pahuna Nature Lodge",
    content: "Nature",
    pagelink: "#",
  },
];
