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
import Image from "next/image";
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

  const [isOpen, setIsOpen] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState("");

  const openModal = (src: string) => {
    console.log("src image",src);
    setImageSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageSrc("");
  };
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
      <section className="gallery">
        
        <div className="max-w-[1366px] mr-auto ml-auto px-[50px] max-[500px]:px-[30px]">
        <h1 className="gallery-section">Featured Properties</h1>
          <div className="Propertiescardslider">
            <Slider {...settings}>
              {propertiesarry?.map((item, index) => {
                return (
                  <>
                    <Propertiescard
                      key={index}
                      // title={item.title}
                      imageurl={item.image}
                      openModal={openModal}
                      // content={item.content}
                      // pagelink={item.pagelink}
                    />
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
        {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <Image src={imageSrc} alt="Popup" className="popup-image" 
            width={600}
            height={600}
             objectFit="cover"
            />
          </div>
        </div>
      )} 
      </section>
    </>
  );
};
export default Propertiesslider;

const propertiesarry = [
  {
    id: 0,
    image: Image5,
    title: "Naldehra Golf Course",
    content: "Golf Courses",
    pagelink: "#",
  },
  {
    id: 1,
    image: Image4,
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
    image: Image1,
    title: "Woodstock Resort",
    content: "Resort",
    pagelink: "#",
  },
  {
    id: 4,
    image: Image2,
    title: "Pahuna Nature Lodge",
    content: "Nature",
    pagelink: "#",
  },
];
