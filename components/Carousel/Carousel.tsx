import React from 'react';
import Styles from './carousel.module.css';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    
  };

  return (
    <div className={Styles.carouselContainer}>
      <h2 className={Styles.title}>We are available in many well-known countries</h2>
      <Slider {...settings} className={Styles.carousel}>
        <div className={`${Styles.slide} slick-center`}>
          <Image src={require("../../assets/Banner/pexels-alex-staudinger-829197-1732414.jpg")} alt="Location 1" width={1300} height={600} objectFit="contain" />
          <div className={Styles.caption}>
            <h3>Estaing</h3>
            <p>FRANCE</p>
          </div>
        </div>
        <div className={Styles.slide}>
          <Image src={require("../../assets/Banner/unsplash_2gDwlIim3Uw.png")} alt="Location 2" width={1200} height={550} objectFit="contain" />
          <div className={Styles.caption}>
            <h3>Montego Bay</h3>
            <p>JAMAICA</p>
          </div>
        </div>
        <div className={Styles.slide}>
          <Image src={require("../../assets/Banner/pexels-pixabay-262048.jpg")} alt="Location 2" width={1200} height={550} objectFit="contain" />
          <div className={Styles.caption}>
            <h3>Montego Bay</h3>
            <p>JAMAICA</p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel; 